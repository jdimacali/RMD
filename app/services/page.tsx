import type { Metadata } from "next";
import { ServicesHero } from "./_components/ServicesHero";
import { ServicesList } from "./_components/ServicesList";
import { CTA } from "../_components/sections/CTA";

export const metadata: Metadata = {
  title: "Professional Accounting & Tax Services | RMD Accounting",
  description:
    "Comprehensive accounting services including bookkeeping, tax planning, payroll management, and CFO advisory services for healthcare professionals in Los Angeles.",
  openGraph: {
    title: "Professional Accounting & Tax Services | RMD Accounting",
    description:
      "Comprehensive accounting services including bookkeeping, tax planning, payroll management, and CFO advisory services for healthcare professionals in Los Angeles.",
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
