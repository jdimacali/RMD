import { Container } from "@/components/ui/Container";
import { Calculator, Receipt, FileSpreadsheet, Building } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

const services = [
  {
    name: "Bookkeeping & Reconciliation",
    description:
      "Comprehensive monthly bookkeeping services to keep your finances organized and up-to-date.",
    icon: Calculator,
    href: "/services#bookkeeping",
    image: "/images/stock/bookkeeping.jpg",
    highlight: "Stay Organized",
  },
  {
    name: "Tax Services",
    description:
      "Professional tax preparation and strategic planning for businesses and individuals.",
    icon: Receipt,
    href: "/services#tax",
    image: "/images/stock/tax.jpg",
    highlight: "Maximize Returns",
  },
  {
    name: "Payroll Services",
    description:
      "Complete payroll processing solutions for businesses of all sizes.",
    icon: FileSpreadsheet,
    href: "/services#payroll",
    image: "/images/stock/payroll.jpg",
    highlight: "Simplify Payroll",
  },
  {
    name: "Business Advisory",
    description:
      "Strategic financial planning, business consulting, and industry-specific solutions to help your business thrive.",
    icon: Building,
    href: "/services#advisory",
    image: "/images/stock/consult.jpg",
    highlight: "Grow Together",
  },
];

export function Services() {
  return (
    <div className="py-16 sm:py-20 bg-gradient-to-b from-white via-primary/5 to-white">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Comprehensive{" "}
            <span className="text-primary">Financial Services</span>
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Expert financial solutions tailored for{" "}
            <span className="font-semibold text-primary">
              modern businesses
            </span>
            . We handle the complexities so you can{" "}
            <span className="font-semibold text-primary">focus on growth</span>.
          </p>
        </div>
        <div className="mx-auto mt-12 max-w-2xl sm:mt-16 lg:max-w-none">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-12 lg:max-w-none lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.name}
                href={service.href}
                className="group hover-lift rounded-xl hover:shadow-xl transition-all overflow-hidden bg-white ring-1 ring-gray-200 hover:ring-primary/20"
              >
                <div className="relative flex flex-col h-full">
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className="absolute inset-0 bg-gradient-to-b from-primary/30 to-transparent z-10" />
                    <div className="absolute top-4 left-4 z-20 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full">
                      <p className="text-sm font-medium text-primary">
                        {service.highlight}
                      </p>
                    </div>
                    <Image
                      src={service.image}
                      alt={service.name}
                      fill
                      className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative p-6 flex flex-col flex-1">
                    <dt className="text-lg font-semibold leading-7 text-gray-900">
                      <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                        <service.icon
                          className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-200"
                          aria-hidden="true"
                        />
                      </div>
                      {service.name}
                    </dt>
                    <dd className="mt-3 flex flex-col flex-1">
                      <p className="text-base leading-7 text-gray-600">
                        {service.description}
                      </p>
                      <p className="mt-6 pt-6 border-t border-gray-100">
                        <span className="inline-flex items-center text-sm font-semibold text-primary group-hover:text-primary-dark transition-colors duration-200">
                          Learn more
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </p>
                    </dd>
                  </div>
                </div>
              </Link>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
