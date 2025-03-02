import type { Metadata } from "next";
import { ServicesHero } from "./_components/ServicesHero";
import { ServicesList } from "./_components/ServicesList";
import { CTA } from "../_components/sections/CTA";

export const metadata: Metadata = {
  title: "Services | RMD Accounting & Tax Services",
  description:
    "Comprehensive accounting, tax, and financial services for healthcare professionals and businesses in the Greater Los Angeles area. Specializing in medical and dental practice accounting.",
  openGraph: {
    title: "Services | RMD Accounting & Tax Services",
    description:
      "Comprehensive accounting, tax, and financial services for healthcare professionals and businesses in the Greater Los Angeles area. Specializing in medical and dental practice accounting.",
  },
};

export default function Services() {
  return (
    <>
      <ServicesHero />
      <ServicesList />
      <CTA />
    </>
  );
}
