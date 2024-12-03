
import MenuMobile from "@/components/mobile/menu";
import "./globals.css";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <MenuMobile/>
        {children}
      </body>
    </html>
  );
}
