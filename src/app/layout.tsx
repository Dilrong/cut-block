import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/feature/common/header";
import Footer from "@/components/feature/common/footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "cut/block",
  description: "cut/block",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html className="h-full">
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
