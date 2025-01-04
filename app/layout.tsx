'use client';

import MenuMobile from "@/components/mobile/menu";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"
import { useIsMobile } from "@/functions/auxiliares";
import MenuDesktop from "@/components/desktop/menu";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const isMobile = useIsMobile();

  return (
    <html lang="en">
      <body>
        {isMobile? <MenuMobile/> : <MenuDesktop/>}
        <div className="flex flex-col items-center min-h-screen pt-20">
        {children}
        <Analytics />
        </div>
      </body>
    </html>
  );
}
