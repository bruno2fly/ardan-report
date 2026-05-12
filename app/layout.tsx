import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Ardan Med Spa — 2FLY Performance Report",
  description: "11-Month Marketing Performance Summary",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
