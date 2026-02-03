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
    default: "Terry Thornton Electrician | Sittingbourne, Kent | 30+ Years Experience",
    template: "%s | Terry Thornton Electrician",
  },
  description:
    "JIB Approved Electrician in Sittingbourne, Kent. City & Guilds qualified with 30+ years experience. Electrical testing, repairs, rewiring & emergency call-outs. Call 07951 596167.",
  keywords: [
    "electrician Sittingbourne",
    "electrician Kent",
    "JIB approved electrician",
    "electrical repairs Sittingbourne",
    "rewiring Kent",
    "electrical testing",
    "emergency electrician Kent",
  ],
  authors: [{ name: "Terry Thornton Electrician" }],
  creator: "Terry Thornton Electrician",
  openGraph: {
    type: "website",
    locale: "en_GB",
    url: "https://terrythorntonelectrician.co.uk",
    siteName: "Terry Thornton Electrician",
    title: "Terry Thornton Electrician | Sittingbourne, Kent",
    description:
      "JIB Approved Electrician in Sittingbourne, Kent with 30+ years experience. Call 07951 596167 for a free quote.",
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
