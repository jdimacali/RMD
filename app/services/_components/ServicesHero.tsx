import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export function ServicesHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-transparent">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Comprehensive Financial Services
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Expert accounting and tax services tailored for healthcare
            professionals and businesses in the Greater Los Angeles area. We
            handle your finances so you can focus on what matters most.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              href="/contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center gap-2"
            >
              Schedule a Consultation <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </Container>
    </div>
  );
}
