import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <div className="py-24 sm:py-32 lg:pb-40">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Ready to take control of your finances?
            <br />
            Start working with us today.
          </h2>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
            Let us help you streamline your accounting, optimize your taxes, and
            grow your business. Schedule a consultation to learn how we can
            support your financial goals.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2"
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
  );
}
