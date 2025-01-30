import "./globals.css";

import { Geist, Geist_Mono } from "next/font/google";

import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Script from 'next/script'

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "전화번호 변환기",
  description: "한국 전화번호 국제 형식 변환 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* 애드센스 스크립트 추가 */}
        <Script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-3012750890117990"
          crossOrigin="anonymous"
          strategy="afterInteractive" // 로딩 전략 설정
        />
        <meta name="google-site-verification" content="hJzyi5JnRIrHqt89QGU4Xf7MXRY050jrqVEcIW9PCj0" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      ><Navbar />
        {children}
      </body>
    </html>
  );
}

export const dynamic = 'force-dynamic';