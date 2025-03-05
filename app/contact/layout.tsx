import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us | RMD Accounting & Tax Services",
  description:
    "Get in touch with RMD Accounting & Tax Services. We're here to help healthcare professionals in Los Angeles with their accounting and tax needs. Schedule a consultation today.",
  openGraph: {
    title: "Contact Us | RMD Accounting & Tax Services",
    description:
      "Get in touch with RMD Accounting & Tax Services. We're here to help healthcare professionals in Los Angeles with their accounting and tax needs. Schedule a consultation today.",
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
