import { Container } from "@/components/ui/Container";
import { Calculator, Receipt, FileSpreadsheet, Building } from "lucide-react";
import Link from "next/link";

const services = [
  {
    name: "Bookkeeping & Reconciliation",
    description:
      "Comprehensive monthly bookkeeping services to keep your finances organized and up-to-date.",
    icon: Calculator,
    href: "/services#bookkeeping",
  },
  {
    name: "Tax Services",
    description:
      "Professional tax preparation and strategic planning for businesses and individuals.",
    icon: Receipt,
    href: "/services#tax",
  },
  {
    name: "Payroll Services",
    description:
      "Complete payroll processing solutions for businesses of all sizes.",
    icon: FileSpreadsheet,
    href: "/services#payroll",
  },
  {
    name: "Healthcare Accounting",
    description:
      "Specialized accounting services for medical and dental practices.",
    icon: Building,
    href: "/services#healthcare",
  },
];

export function Services() {
  return (
    <div className="py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Our Services
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Comprehensive financial services tailored for healthcare
            professionals and businesses. We handle the numbers so you can focus
            on your practice.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group hover-lift rounded-xl hover:shadow-xl transition-all"
              >
                <div className="flex flex-col p-4">
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                      <service.icon
                        className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-200"
                        aria-hidden="true"
                      />
                    </div>
                    {service.name}
                  </dt>
                  <dd className="mt-1 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{service.description}</p>
                    <p className="mt-6">
                      <span className="text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors duration-200">
                        Learn more <span aria-hidden="true">→</span>
                      </span>
                    </p>
                  </dd>
                </div>
              </Link>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
