import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function Hero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-transparent pt-14">
      <div className="py-24 sm:py-32 lg:pb-40">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
              Expert Accounting Services for Healthcare Professionals
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Specialized accounting, tax, and financial services for medical
              and dental practices in the Greater Los Angeles area. Let us
              handle your finances so you can focus on what matters most – your
              patients.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2 group"
              >
                Schedule a Consultation
                <ArrowRight className="h-4 w-4 animate-pulse-right" />
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors duration-200"
              >
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
