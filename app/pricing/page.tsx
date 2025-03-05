import { Container } from "@/components/ui/Container";
import { Check } from "lucide-react";
import { classNames } from "@/lib/utils";

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

export default function PricingPage() {
  return (
    <div className="relative isolate ">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
              Simple, transparent pricing
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Choose the plan that best fits your practice&apos;s needs. All
              plans include our core accounting services.
            </p>
          </div>
          <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {tiers.map((tier, tierIdx) => (
              <div
                key={tier.id}
                className={classNames(
                  tier.featured
                    ? "bg-white/5 ring-2 ring-primary"
                    : "ring-1 ring-zinc-200",
                  tierIdx === 1 ? "lg:z-10" : "",
                  tierIdx === 0 ? "lg:rounded-r-none" : "",
                  tierIdx === tiers.length - 1 ? "lg:rounded-l-none" : "",
                  "flex flex-col justify-between rounded-3xl bg-white p-8 xl:p-10"
                )}
              >
                <div>
                  <div className="flex items-center justify-between gap-x-4">
                    <h3
                      id={tier.id}
                      className={classNames(
                        tier.featured ? "text-primary" : "text-zinc-900",
                        "text-lg font-semibold leading-8"
                      )}
                    >
                      {tier.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-sm leading-6 text-zinc-600">
                    {tier.description}
                  </p>
                  <p className="mt-6 flex items-baseline gap-x-1">
                    <span className="text-4xl font-bold tracking-tight text-zinc-900">
                      {tier.price}
                    </span>
                    <span className="text-sm font-semibold leading-6 text-zinc-600">
                      {tier.price === "Custom" ? "" : "/month"}
                    </span>
                  </p>
                  <ul
                    role="list"
                    className="mt-8 space-y-3 text-sm leading-6 text-zinc-600"
                  >
                    {tier.features.map((feature) => (
                      <li key={feature} className="flex gap-x-3">
                        <Check
                          className="h-6 w-5 flex-none text-primary"
                          aria-hidden="true"
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                <a
                  href={tier.href}
                  aria-describedby={tier.id}
                  className={classNames(
                    tier.featured
                      ? "bg-primary text-white shadow-sm hover:bg-primary/90"
                      : "text-primary ring-1 ring-inset ring-primary/20 hover:ring-primary/30",
                    "mt-8 block rounded-md px-3.5 py-2.5 text-center text-sm font-semibold leading-6 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  )}
                >
                  {tier.featured ? "Get started" : "Contact us"}
                </a>
              </div>
            ))}
          </div>
          <div className="mx-auto max-w-2xl text-center mt-24">
            <h2 className="text-3xl font-bold tracking-tight text-primary">
              Need a Custom Solution?
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              We understand that every healthcare practice is unique. Contact us
              to discuss a tailored solution for your specific needs.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="/contact"
                className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
