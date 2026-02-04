import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "Black Gold Electrical Installations | Kent & London | All Aspects Of Domestic Electrical Work",
    template: "%s | Black Gold Electrical Installations",
  },
  description:
    "NICEIC Domestic Installer in Kent & London. All aspects of domestic electrical work. 24 hour call out available. Call 07920 142026.",
  keywords: [
    "electrician Kent",
    "electrician London",
    "NICEIC domestic installer",
    "electrical installations Kent",
    "rewiring Kent",
    "electrical testing",
    "emergency electrician Kent",
    "24 hour electrician",
  ],
  authors: [{ name: "Black Gold Electrical Installations" }],
  creator: "Black Gold Electrical Installations",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "Black Gold Electrical Installations",
    title: "Black Gold Electrical Installations | Kent & London",
    description:
      "NICEIC Domestic Installer serving Kent & London. All aspects of domestic electrical work. Call 07920 142026 for a free quote.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <body className="font-sans antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
