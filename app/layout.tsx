import type { Metadata } from "next";
import ConvexClientProvider from "./ConvexClientProvider";

export const metadata: Metadata = {
  title: "Property Group",
  description: "Real estate template across Target Market",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <ConvexClientProvider>
          {children}
        </ConvexClientProvider>
      </body>
    </html>
  );
}