import type { NextRequest } from "next/server";

type RateLimitOptions = {
  limit: number;
  windowMs: number;
};

type Bucket = {
  count: number;
  resetAt: number;
};

const buckets = new Map<string, Bucket>();

function clientIp(request: NextRequest) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  const realIp = request.headers.get("x-real-ip");
  return forwardedFor?.split(",")[0]?.trim() || realIp || "unknown";
}

export function checkRouteRateLimit(
  request: NextRequest,
  action: string,
  options: RateLimitOptions,
) {
  const now = Date.now();
  const key = `${action}:${clientIp(request)}`;
  const bucket = buckets.get(key);

  if (!bucket || bucket.resetAt <= now) {
    buckets.set(key, { count: 1, resetAt: now + options.windowMs });
    return { ok: true, retryAfter: 0 };
  }

  if (bucket.count >= options.limit) {
    return {
      ok: false,
      retryAfter: Math.ceil((bucket.resetAt - now) / 1000),
    };
  }

  bucket.count += 1;
  buckets.set(key, bucket);
  return { ok: true, retryAfter: 0 };
}

export function rateLimitResponse(retryAfter: number) {
  return new Response("Too many requests. Please try again later.", {
    status: 429,
    headers: {
      "Retry-After": String(retryAfter),
      "Cache-Control": "no-store",
    },
  });
}
