import type { Metadata } from "next";
import { Balsamiq_Sans } from "next/font/google";
import "./globals.css";

const balsamiq = Balsamiq_Sans({
  variable: "--font-balsamiq",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Lazeez",
  description: "Fresh, juicy burgers made with bold flavour at Lazeez.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${balsamiq.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
