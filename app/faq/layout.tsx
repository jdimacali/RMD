import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Frequently Asked Questions | RMD Accounting & Tax Services",
  description:
    "Find answers to common questions about our accounting and tax services, pricing, processes, and how we help healthcare professionals manage their finances effectively.",
  openGraph: {
    title: "Frequently Asked Questions | RMD Accounting & Tax Services",
    description:
      "Find answers to common questions about our accounting and tax services, pricing, processes, and how we help healthcare professionals manage their finances effectively.",
  },
};

export default function FAQLayout({ children }: { children: React.ReactNode }) {
  return children;
}
