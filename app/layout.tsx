import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "./_components/layout/Navbar";
import { Footer } from "./_components/layout/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | RMD Accounting & Tax Services",
    default:
      "RMD Accounting & Tax Services | Los Angeles Healthcare Accounting",
  },
  description:
    "Professional accounting and tax services for healthcare professionals and businesses in the Greater Los Angeles area. Specializing in medical and dental practice accounting.",
  icons: {
    icon: "/logo/independent-logo.png",
    shortcut: "/logo/independent-logo.png",
    apple: "/logo/independent-logo.png",
  },
  openGraph: {
    title: "RMD Accounting & Tax Services | Los Angeles Healthcare Accounting",
    description:
      "Professional accounting and tax services for healthcare professionals and businesses in the Greater Los Angeles area. Specializing in medical and dental practice accounting.",
    url: "https://www.rmdaccounting.com",
    siteName: "RMD Accounting & Tax Services",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/logo/independent-logo.png",
        width: 800,
        height: 800,
        alt: "RMD Accounting & Tax Services Logo",
      },
    ],
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
    images: ["/logo/independent-logo.png"],
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
      <head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/logo/independent-logo.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/logo/independent-logo.png"
        />
      </head>
      <body>
        <Navbar />
        <main className="relative py-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
