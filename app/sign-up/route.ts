import { getSignUpUrl } from "@workos-inc/authkit-nextjs";
import { checkRouteRateLimit, rateLimitResponse } from "@/lib/rateLimit";
import type { NextRequest } from "next/server";
import { redirect } from "next/navigation";

export const GET = async (request: NextRequest) => {
  const limit = checkRouteRateLimit(request, "workos:sign-up", {
    limit: 10,
    windowMs: 10 * 60 * 1000,
  });

  if (!limit.ok) {
    return rateLimitResponse(limit.retryAfter);
  }

  const signUpUrl = await getSignUpUrl();
  return redirect(signUpUrl);
};
