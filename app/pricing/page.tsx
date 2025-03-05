import type { Metadata } from "next";
import { PricingHero } from "./_components/PricingHero";
import { PricingCards } from "./_components/PricingCards";
export const metadata: Metadata = {
  title: "Pricing | RMD Accounting & Tax Services",
  description:
    "Transparent pricing plans for healthcare professionals and businesses. Choose from our Basic, Professional, or Enterprise plans, or get a custom solution tailored to your needs.",
  openGraph: {
    title: "Pricing | RMD Accounting & Tax Services",
    description:
      "Transparent pricing plans for healthcare professionals and businesses. Choose from our Basic, Professional, or Enterprise plans, or get a custom solution tailored to your needs.",
  },
};

export default function PricingPage() {
  return (
    <>
      <PricingHero />
      <PricingCards />
    </>
  );
}
