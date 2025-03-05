import type { Metadata } from "next";
import { AboutHero } from "./_components/AboutHero";
import { Testimonials } from "./_components/Testimonials";
import { Certifications } from "./_components/Certifications";

export const metadata: Metadata = {
  title: "About Us | RMD Accounting & Tax Services",
  description:
    "Meet Rosalind M. Dimacali and our dedicated team of accounting professionals. Learn about our mission to provide exceptional accounting and tax services to healthcare professionals in Los Angeles.",
  openGraph: {
    title: "About Us | RMD Accounting & Tax Services",
    description:
      "Meet Rosalind M. Dimacali and our dedicated team of accounting professionals. Learn about our mission to provide exceptional accounting and tax services to healthcare professionals in Los Angeles.",
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
