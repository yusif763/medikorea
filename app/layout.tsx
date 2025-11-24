import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import LeftSection from "./components/LeftSection";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'MediHelp Korea - Your Medical Tourism Partner',
  icons: {
    icon: '/fav.png',
    shortcut: '/fav.png',
    apple: '/fav.png',
  },
  description: 'Discover the best medical services in Korea with MediHelp. Trusted, reliable, and professional.',
  openGraph: {
    title: 'MediHelp Korea',
    description: 'Your trusted partner for medical tourism in Korea.',
    url: 'https://medihelpkorea.com',
    siteName: 'MediHelp Korea',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'MediHelp Korea',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'MediHelp Korea',
    description: 'Your trusted partner for medical tourism in Korea.',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <div className="flex flex-col md:flex-row h-screen">
          {/* Left Section */}
          <LeftSection />
          {/* Right Section */}
          <div className="md:w-1/2 flex-1 mt-[56px] overflow-y-auto" id="main-content">
            {children}
            <Footer />
          </div>
        </div>
      </body>
    </html>
  );
}
