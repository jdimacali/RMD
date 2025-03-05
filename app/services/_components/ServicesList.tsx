"use client";

import { Container } from "@/components/ui/Container";
import {
  Calculator,
  Receipt,
  FileSpreadsheet,
  PiggyBank,
  FileText,
  TrendingUp,
  Building,
  Users,
  LucideIcon,
  ArrowRight,
} from "lucide-react";
import { useInView } from "react-intersection-observer";
import { motion } from "framer-motion";

interface ServiceProps {
  name: string;
  description: string;
  features: string[];
  icon: LucideIcon;
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
    <div className="py-8 sm:py-12" id="services">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-3xl font-bold tracking-tight text-primary sm:text-4xl"
            >
              Our Services
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mt-4 text-lg text-gray-600"
            >
              Comprehensive financial solutions tailored to your needs
            </motion.p>
          </div>
          <div
            ref={ref}
            className="grid grid-cols-1 gap-8 lg:grid-cols-2 xl:grid-cols-3"
          >
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                id={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 ring-1 ring-gray-200 hover:ring-primary/50 transition-all duration-300 hover:shadow-xl"
              >
                <div className="flex flex-col h-full">
                  <div className="flex items-center gap-4 group">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 transition-all duration-300 group-hover:bg-primary/20 group-hover:scale-110">
                      <service.icon
                        className="h-6 w-6 text-primary transition-transform duration-300"
                        aria-hidden="true"
                      />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 transition-colors duration-300 group-hover:text-primary">
                      {service.name}
                    </h3>
                  </div>
                  <p className="mt-4 text-base text-gray-600">
                    {service.description}
                  </p>
                  <ul className="mt-6 space-y-3 text-sm text-gray-600">
                    {service.features.map((feature) => (
                      <motion.li
                        key={feature}
                        className="flex items-center gap-3 transition-all duration-300 hover:translate-x-1"
                        whileHover={{ scale: 1.02 }}
                      >
                        <ArrowRight className="h-4 w-4 text-primary shrink-0" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </div>
                <div className="absolute bottom-8 left-8 right-8 h-px bg-gradient-to-r from-primary/0 via-primary/20 to-primary/0 transition-opacity duration-300 opacity-0 group-hover:opacity-100" />
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
