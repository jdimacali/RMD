"use client";

import { Container } from "@/components/ui/Container";
import { Check, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { useInView } from "react-intersection-observer";

const tiers = [
  {
    name: "Basic",
    id: "tier-basic",
    price: "$499",
    description:
      "Essential accounting services for small healthcare practices.",
    features: [
      "Monthly bookkeeping",
      "Basic tax preparation",
      "Quarterly financial statements",
      "Basic payroll services",
      "Annual tax planning",
    ],
    featured: false,
    href: "/contact",
  },
  {
    name: "Professional",
    id: "tier-professional",
    price: "$999",
    description: "Comprehensive services for growing healthcare practices.",
    features: [
      "Everything in Basic",
      "Advanced tax strategies",
      "Monthly financial review",
      "Full-service payroll",
      "Practice benchmarking",
      "CFO advisory services",
    ],
    featured: true,
    href: "/contact",
  },
  {
    name: "Enterprise",
    id: "tier-enterprise",
    price: "Custom",
    description:
      "Custom solutions for large medical groups and healthcare systems.",
    features: [
      "Everything in Professional",
      "Multi-entity accounting",
      "Custom reporting",
      "Merger & acquisition support",
      "Strategic planning",
      "Dedicated account team",
    ],
    featured: false,
    href: "/contact",
  },
];

export function PricingCards() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-12 sm:py-16">
      <Container>
        <div
          ref={ref}
          className="isolate mx-auto mt-8 grid max-w-md grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
        >
          {tiers.map((tier, index) => (
            <motion.div
              key={tier.id}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative flex flex-col overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 transition-all duration-300 hover:shadow-xl ${
                tier.featured
                  ? "ring-2 ring-primary scale-105 lg:scale-110"
                  : "ring-gray-200 hover:ring-primary/50"
              }`}
            >
              {tier.featured && (
                <div className="absolute -right-20 top-8 rotate-45 bg-gradient-to-br from-primary to-primary-dark px-24 py-1.5">
                  <p className="text-center text-sm font-semibold text-white">
                    Most Popular
                  </p>
                </div>
              )}
              <div className="flex items-center justify-between gap-x-4">
                <h3
                  id={tier.id}
                  className={`text-lg font-semibold leading-8 ${
                    tier.featured ? "text-primary" : "text-gray-900"
                  }`}
                >
                  {tier.name}
                </h3>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <div className="mt-6 flex items-baseline gap-x-1">
                <span
                  className={`text-4xl font-bold tracking-tight ${
                    tier.featured ? "text-primary" : "text-gray-900"
                  }`}
                >
                  {tier.price}
                </span>
                {tier.price !== "Custom" && (
                  <span className="text-sm font-semibold leading-6 text-gray-600">
                    /month
                  </span>
                )}
              </div>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
              >
                {tier.features.map((feature) => (
                  <motion.li
                    key={feature}
                    className="flex gap-x-3 items-center transition-all duration-300 hover:translate-x-1"
                    whileHover={{ scale: 1.02 }}
                  >
                    <Check
                      className={`h-5 w-5 flex-none ${
                        tier.featured ? "text-primary" : "text-primary/70"
                      }`}
                      aria-hidden="true"
                    />
                    {feature}
                  </motion.li>
                ))}
              </ul>
              <Link
                href={tier.href}
                className={`mt-8 block rounded-xl px-3.5 py-3.5 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary transition-all duration-300 hover:scale-[1.02] group ${
                  tier.featured
                    ? "bg-primary text-white shadow-sm hover:bg-primary-dark"
                    : "text-primary ring-1 ring-inset ring-primary/20 hover:ring-primary/40"
                }`}
              >
                <span className="flex items-center justify-center gap-2">
                  {tier.featured ? "Get started" : "Contact us"}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mx-auto mt-24 max-w-2xl text-center mb-16"
        >
          <h2 className="text-3xl font-bold tracking-tight text-primary">
            Need a Custom Solution?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            We understand that every healthcare practice is unique. Contact us
            to discuss a tailored solution for your specific needs.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2 group transition-all duration-300 hover:scale-105"
            >
              Schedule a Consultation{" "}
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </Container>
    </div>
  );
}
