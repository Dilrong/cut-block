import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/feature/common/footer";
import Header from "@/components/feature/common/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://cutblock.pro"),
  title: {
    default: "컷블록 | 영상편집은 컷블록",
    template: "%s | 컷블록",
  },
  description: "궁금했던 영상 편집 비용, 이젠 미리 가격을 보고 맡겨주세요!",
  openGraph: {
    title: "컷블록 | 영상편집은 컷블록",
    description: "궁금했던 영상 편집 비용, 이젠 미리 가격을 보고 맡겨주세요!",
    url: "https://cutblock.pro",
    siteName: "컷블록",
    images: ["/images/og.png"],
    locale: "ko-KR",
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "컷블록 | 영상편집은 컷블록",
    description: "궁금했던 영상 편집 비용, 이젠 미리 가격을 보고 맡겨주세요!",
    images: ["/images/og.png"],
    creator: "컷블록",
    site: "https://cutblock.pro",
  },
  icons: {
    icon: "/images/icons/apple-icon.png",
    apple: "/images/icons/apple-icon.png",
    other: {
      rel: "apple-icon-precomposed.png",
      url: "/images/icons/apple-icon-precomposed.png",
    },
  },
  alternates: {
    canonical: "록",
    types: {
      "application/rss+xml": "https://cutblock.pro/rss",
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
