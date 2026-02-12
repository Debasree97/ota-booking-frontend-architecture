/**
 * Root Layout
 * Main layout wrapper for all pages in the application
 */
import type { Metadata } from "next";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { theme } from "@/theme/theme";
import "@/styles/globals.css";

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
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
