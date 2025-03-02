import { Check } from "lucide-react";

const tiers = [
  {
    name: "Basic",
    id: "basic",
    priceMonthly: "$299",
    description: "Perfect for small healthcare practices and startups.",
    features: [
      "Monthly Bookkeeping",
      "Basic Financial Statements",
      "Quarterly Tax Planning",
      "Annual Tax Return Preparation",
      "Basic Payroll Services (up to 5 employees)",
      "Online Portal Access",
    ],
  },
  {
    name: "Professional",
    id: "professional",
    priceMonthly: "$599",
    description: "Ideal for established medical and dental practices.",
    features: [
      "Everything in Basic",
      "Advanced Financial Reporting",
      "Monthly Tax Planning",
      "Business Advisory Services",
      "Advanced Payroll Services (up to 15 employees)",
      "Dedicated Account Manager",
      "Cash Flow Management",
      "Budgeting Assistance",
    ],
  },
  {
    name: "Enterprise",
    id: "enterprise",
    priceMonthly: "Custom",
    description:
      "For large healthcare organizations and multi-location practices.",
    features: [
      "Everything in Professional",
      "CFO Services",
      "Strategic Planning",
      "Unlimited Payroll Services",
      "Merger & Acquisition Support",
      "Custom Financial Analytics",
      "24/7 Priority Support",
      "Quarterly Business Reviews",
    ],
  },
];

export default function PricingPage() {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Transparent Pricing for Healthcare Professionals
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Choose the perfect plan for your practice. All plans include our
            core accounting services and can be customized to meet your specific
            needs.
          </p>
        </div>
        <div className="isolate mx-auto mt-16 grid max-w-md grid-cols-1 gap-y-8 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-x-8 xl:gap-x-12">
          {tiers.map((tier) => (
            <div
              key={tier.id}
              className="rounded-3xl p-8 ring-1 ring-gray-200 xl:p-10 hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-center justify-between gap-x-4">
                <h2 className="text-lg font-semibold leading-8 text-gray-900">
                  {tier.name}
                </h2>
              </div>
              <p className="mt-4 text-sm leading-6 text-gray-600">
                {tier.description}
              </p>
              <p className="mt-6 flex items-baseline gap-x-1">
                <span className="text-4xl font-bold tracking-tight text-gray-900">
                  {tier.priceMonthly}
                </span>
                <span className="text-sm font-semibold leading-6 text-gray-600">
                  /month
                </span>
              </p>
              <ul
                role="list"
                className="mt-8 space-y-3 text-sm leading-6 text-gray-600"
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
              <a
                href="/contact"
                className="mt-8 block rounded-md bg-primary px-3 py-2 text-center text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Get Started
              </a>
            </div>
          ))}
        </div>
        <div className="mx-auto max-w-2xl text-center mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Need a Custom Solution?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Contact us to discuss a tailored package that meets your specific
            needs. We understand that every healthcare practice is unique.
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
    </div>
  );
}
