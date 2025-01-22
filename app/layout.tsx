import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "./components/Navbar";
import { Footer } from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Allen Yoo",
  description: "Computer Science student passionate about software development. Explore my portfolio featuring academic projects, coding experiments, and software engineering work.",
  keywords: [
    "Allen Yoo",
    "Computer Science Student",
    "Software Development",
    "CS Student Portfolio",
    "Programming Projects",
    "Student Developer",
    "Tech Portfolio",
  ],
  authors: [{ name: "Allen Yoo" }],
  openGraph: {
    title: "Allen Yoo",
    description: "Computer Science student passionate about software development. Explore my portfolio featuring academic projects, coding experiments, and software engineering work.",
    type: "website",
    siteName: "Allen Yoo's Portfolio",
    images: [
      {
        url: "https://allen-yoo.com/image-favicon.png",
        width: 512,
        height: 512,
        alt: "Allen Yoo's Portfolio Thumbnail",
      },
    ],
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
