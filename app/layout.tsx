import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Pulseboard — Open-Source Android Network Monitor",
  description: "Watch every packet. Pulseboard is the open-source Android network monitor for power users and security pros.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark">
      <body className="font-body antialiased bg-background text-foreground">
        {children}
      </body>
    </html>
  );
}
