import "./globals.css";
import type { ReactNode } from "react";

export const metadata = {
  title: "Hello World Server",
  description: "A minimal Next.js + Tailwind CSS Hello World server",
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen antialiased">
        {children}
      </body>
    </html>
  );
}
