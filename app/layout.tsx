import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lucas Perez",
  description: "Portfolio - Lucas Perez",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body className="bg-[#f3f4f6] text-neutral-900">
        {children}
      </body>
    </html>
  );
}
