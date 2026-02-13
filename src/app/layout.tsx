/**
 * Root Layout
 * Main layout wrapper for all pages in the application
 */
import type { Metadata } from "next";
import "@src/styles/globals.css";
import ThemeRegistry from "@src/components/layout/ThemeRegistry";

export const metadata: Metadata = {
  title: "OTA Booking - Flight Search & Booking",
  description: "Search and book flights with our easy-to-use booking system",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>
        <ThemeRegistry>{children}</ThemeRegistry>
      </body>
    </html>
  );
}
