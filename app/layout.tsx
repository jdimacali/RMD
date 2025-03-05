import "./globals.css";
import type { Metadata } from "next";
import { Navbar } from "./_components/layout/Navbar";
import { Footer } from "./_components/layout/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://rmdaccounting.com"),
  title: {
    default: "RMD Accounting & Tax Services",
    template: "%s | RMD Accounting & Tax Services",
  },
  description:
    "Professional accounting and tax services for healthcare professionals and businesses in the Greater Los Angeles area.",
  keywords: [
    "accounting",
    "tax services",
    "bookkeeping",
    "payroll",
    "CFO services",
    "Los Angeles",
    "healthcare accounting",
  ],
  authors: [{ name: "Rosalind M. Dimacali" }],
  creator: "RMD Accounting & Tax Services",
  icons: {
    icon: "/logo/independent-logo.png",
    shortcut: "/logo/independent-logo.png",
    apple: "/logo/independent-logo.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://rmdaccounting.com",
    title: "RMD Accounting & Tax Services",
    description:
      "Professional accounting and tax services for healthcare professionals and businesses in the Greater Los Angeles area.",
    siteName: "RMD Accounting & Tax Services",
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
    card: "summary_large_image",
    title: "RMD Accounting & Tax Services",
    description:
      "Professional accounting and tax services for healthcare professionals and businesses in the Greater Los Angeles area.",
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
    <html lang="en" className="h-full scroll-smooth">
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
      <body className={`${inter.className} h-full antialiased`}>
        <Navbar />
        <main className="relative pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
