import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "@/app/_components/layout/Navbar";
import { Footer } from "@/app/_components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | RMD Accounting & Tax Services",
    default: "RMD Accounting & Tax Services | Los Angeles Accounting",
  },
  description:
    "Professional accounting and tax services for healthcare professionals and businesses in the Greater Los Angeles area. Specializing in medical and dental practice accounting.",
  openGraph: {
    title: "RMD Accounting & Tax Services | Los Angeles Accounting",
    description:
      "Professional accounting and tax services for healthcare professionals and businesses in the Greater Los Angeles area. Specializing in medical and dental practice accounting.",
    url: "https://www.rmdaccounting.com",
    siteName: "RMD Accounting & Tax Services",
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: "RMD Accounting & Tax Services",
    card: "summary_large_image",
  },
  verification: {
    google: "google-site-verification-code",
  },
  alternates: {
    canonical: "https://www.rmdaccounting.com",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="relative">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
