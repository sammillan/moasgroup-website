import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: {
    default: "MOAS GROUP LIMITED | Electrician Canterbury, Kent | 24hr Emergency Electrical Services",
    template: "%s | MOAS GROUP LIMITED",
  },
  description:
    "MOAS GROUP LIMITED - Local experts in electrical services. Domestic & commercial electrician in Canterbury, Kent. EICRs, fuse box upgrades, reactive maintenance, landlord certificates, breakdown cover, 24hr emergency callouts. Certified professionals. Call 07384 397487",
  keywords: [
    "electrician Canterbury",
    "electrician Kent",
    "MOAS GROUP",
    "electrical services Canterbury",
    "emergency electrician Canterbury",
    "EICR Canterbury",
    "fuse box upgrade",
    "commercial electrician Kent",
    "24 hour electrician Canterbury",
    "reactive maintenance",
    "landlord certificates",
    "electrical breakdown cover",
  ],
  authors: [{ name: "MOAS GROUP LIMITED" }],
  creator: "MOAS GROUP LIMITED",
  openGraph: {
    type: "website",
    locale: "en_GB",
    siteName: "MOAS GROUP LIMITED",
    title: "MOAS GROUP LIMITED | Electrician Canterbury, Kent | 24hr Emergency Electrical Services",
    description:
      "Local experts in electrical services. Domestic & commercial electrician in Canterbury, Kent. Certified professionals. 24hr emergency callouts. Call 07384 397487",
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
        <ScrollToTop />
        <Header />
        <main className="flex-grow">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
