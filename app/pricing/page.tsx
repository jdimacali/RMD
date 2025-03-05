import type { Metadata } from "next";
import { PricingHero } from "./_components/PricingHero";
import { PricingCards } from "./_components/PricingCards";

export const metadata: Metadata = {
  title: "Transparent Pricing Plans | RMD Accounting & Tax Services",
  description:
    "Clear, transparent pricing for our accounting and tax services. Choose from our Basic, Professional, or Enterprise plans tailored for healthcare professionals and businesses.",
  openGraph: {
    title: "Transparent Pricing Plans | RMD Accounting & Tax Services",
    description:
      "Clear, transparent pricing for our accounting and tax services. Choose from our Basic, Professional, or Enterprise plans tailored for healthcare professionals and businesses.",
  },
};

export default function Pricing() {
  return (
    <>
      <PricingHero />
      <PricingCards />
    </>
  );
}
