"use client";

import { Container } from "@/_components/ui/Container";
import {
  Calculator,
  Receipt,
  FileSpreadsheet,
  PiggyBank,
  FileText,
  TrendingUp,
  Building,
  Users,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

interface ServiceProps {
  name: string;
  description: string;
  features: string[];
  icon: any;
  id: string;
}

const services: ServiceProps[] = [
  {
    name: "Bookkeeping & Reconciliation",
    description:
      "Comprehensive monthly bookkeeping services to keep your finances organized and up-to-date.",
    features: [
      "Monthly financial statements",
      "Bank and credit card reconciliation",
      "Accounts payable & receivable management",
      "General ledger maintenance",
      "Financial record organization",
    ],
    icon: Calculator,
    id: "bookkeeping",
  },
  {
    name: "Tax Services",
    description:
      "Professional tax preparation and strategic planning for businesses and individuals.",
    features: [
      "Business & personal tax returns",
      "Tax planning & strategy",
      "IRS representation",
      "Sales tax compliance",
      "Tax credit optimization",
    ],
    icon: Receipt,
    id: "tax",
  },
  {
    name: "Payroll Services",
    description:
      "Complete payroll processing solutions for businesses of all sizes.",
    features: [
      "Payroll processing & direct deposit",
      "Tax filing & payments",
      "W-2 and 1099 preparation",
      "Employee benefits management",
      "Compliance reporting",
    ],
    icon: FileSpreadsheet,
    id: "payroll",
  },
  {
    name: "Financial Planning",
    description:
      "Strategic financial planning to help your business grow and succeed.",
    features: [
      "Business growth strategies",
      "Cash flow management",
      "Retirement planning",
      "Investment analysis",
      "Risk assessment",
    ],
    icon: PiggyBank,
    id: "planning",
  },
  {
    name: "Business Advisory",
    description:
      "Expert guidance to help you make informed business decisions.",
    features: [
      "Business performance review",
      "Budgeting & forecasting",
      "Process improvement",
      "Financial analysis",
      "Strategic planning",
    ],
    icon: TrendingUp,
    id: "advisory",
  },
  {
    name: "Healthcare Accounting",
    description:
      "Specialized accounting services for medical and dental practices.",
    features: [
      "Practice management",
      "Revenue cycle optimization",
      "Insurance billing review",
      "Cost analysis",
      "Compliance monitoring",
    ],
    icon: Building,
    id: "healthcare",
  },
  {
    name: "New Business Setup",
    description:
      "Complete support for starting and establishing your new business.",
    features: [
      "Entity selection & formation",
      "Business license & permits",
      "Tax ID registration",
      "Accounting system setup",
      "Initial compliance setup",
    ],
    icon: FileText,
    id: "startup",
  },
  {
    name: "CFO Services",
    description:
      "Part-time CFO services to provide high-level financial guidance.",
    features: [
      "Financial strategy development",
      "Performance metrics tracking",
      "Board meeting preparation",
      "Financial projections",
      "Growth planning",
    ],
    icon: Users,
    id: "cfo",
  },
];

export function ServicesList() {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <div className="py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div
            ref={ref}
            className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8 lg:gap-y-12"
          >
            {services.map((service, index) => (
              <div
                key={service.id}
                id={service.id}
                className={cn(
                  "relative scroll-mt-16 transform transition-all duration-500 hover:shadow-xl rounded-xl p-6",
                  inView
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8",
                  inView && `delay-[${index * 100}ms]`
                )}
              >
                <div className="flex items-center group">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20">
                    <service.icon
                      className="h-6 w-6 text-primary transition-transform duration-300 group-hover:scale-110"
                      aria-hidden="true"
                    />
                  </div>
                  <h2 className="ml-4 text-2xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                    {service.name}
                  </h2>
                </div>
                <p className="mt-4 text-lg text-gray-600 transition-opacity duration-300 hover:opacity-80">
                  {service.description}
                </p>
                <ul className="mt-6 space-y-3">
                  {service.features.map((feature) => (
                    <li
                      key={feature}
                      className="flex gap-x-3 text-gray-600 transition-all duration-300 hover:translate-x-1"
                    >
                      <span className="text-primary" aria-hidden="true">
                        •
                      </span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
