
import MenuMobile from "@/components/mobile/menu";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react"

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MenuMobile/>
        <div className="flex flex-wrap justify-center items-center min-h-screen pt-12">
        {children}
        <Analytics />
        </div>
      </body>
    </html>
  );
}
