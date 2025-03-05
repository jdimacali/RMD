import { Container } from "@/components/ui/Container";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Decorative grid pattern */}
      <div className="absolute inset-0 -z-10">
        {/* Main gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white via-white to-transparent" />

        {/* Grid pattern with stronger fade at top */}
        <div
          className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_10%,rgba(255,255,255,0.1)_30%,white_70%)] bg-grid-pattern"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0H1V32H0V0Z' fill='%23000000' fill-opacity='0.08'/%3E%3Cpath d='M31 0H32V32H31V0Z' fill='%23000000' fill-opacity='0.08'/%3E%3Cpath d='M32 31H0V32H32V31Z' fill='%23000000' fill-opacity='0.08'/%3E%3Cpath d='M32 0H0V1H32V0Z' fill='%23000000' fill-opacity='0.08'/%3E%3C/svg%3E")`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Diagonal lines with even stronger fade */}
        <div
          className="absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent_20%,rgba(255,255,255,0.05)_40%,white_80%)] opacity-[0.05]"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='32' height='32' viewBox='0 0 32 32' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 32L32 0' stroke='%23000000' stroke-width='0.5'/%3E%3C/svg%3E")`,
            backgroundSize: "32px 32px",
          }}
        />

        {/* Subtle color tint */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/5 to-primary/10" />
      </div>

      <div className="py-20 sm:py-24">
        <Container>
          <div className="relative">
            <div className="mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
                Ready to take control of your finances?
                <br />
                Start working with us today.
              </h2>
              <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-600">
                Let us help you streamline your accounting, optimize your taxes,
                and grow your business. Schedule a consultation to learn how we
                can support your financial goals.
              </p>
              <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-6">
                <Link
                  href="/contact"
                  className="w-full sm:w-auto rounded-xl bg-primary px-6 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-[1.02]"
                >
                  Schedule a Consultation
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </Link>
                <Link
                  href="/services"
                  className="w-full sm:w-auto rounded-xl px-6 py-3.5 text-sm font-semibold bg-gray-50 text-gray-900 ring-1 ring-gray-900/10 hover:ring-gray-900/20 flex items-center justify-center gap-2 group transition-all duration-300 hover:bg-gray-80"
                >
                  Learn more
                  <span
                    aria-hidden="true"
                    className="transition-transform duration-300 group-hover:translate-x-1"
                  >
                    →
                  </span>
                </Link>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </div>
  );
}
