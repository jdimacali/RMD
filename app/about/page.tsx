import type { Metadata } from "next";
import { Testimonials } from "@/components/ui/Testimonials";
import { AboutHero } from "./_components/AboutHero";
import { Certifications } from "./_components/Certifications";

export const metadata: Metadata = {
  title: "About Rosalind M. Dimacali | RMD Accounting & Tax Services",
  description:
    "Meet Rosalind M. Dimacali, a certified public accountant with over 15 years of experience in healthcare accounting and tax services in the Greater Los Angeles area.",
  openGraph: {
    title: "About Rosalind M. Dimacali | RMD Accounting & Tax Services",
    description:
      "Meet Rosalind M. Dimacali, a certified public accountant with over 15 years of experience in healthcare accounting and tax services in the Greater Los Angeles area.",
  },
};

export default function About() {
  return (
    <>
      <AboutHero />
      <Certifications />
      <Testimonials />
    </>
  );
}
