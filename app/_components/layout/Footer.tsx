import Link from "next/link";
import { Container } from "../ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Phone, MapPin, Mail, Clock, ChevronRight } from "lucide-react";

const navigation = {
  services: [
    { name: "Bookkeeping", href: "/services#bookkeeping" },
    { name: "Tax Services", href: "/services#tax" },
    { name: "Payroll", href: "/services#payroll" },
    { name: "CFO Services", href: "/services#cfo" },
  ],
  company: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ],
  legal: [
    { name: "Privacy", href: "#" },
    { name: "Terms", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-primary relative" aria-labelledby="footer-heading">
      <div className="absolute inset-0 bg-gradient-to-b from-primary-dark/10 to-transparent pointer-events-none" />
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="pb-8 pt-16 sm:pt-24 relative">
        <div className="mx-auto max-w-7xl xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="inline-block">
              <Logo className="[&_div]:text-white [&_div:last-child]:text-accent hover:scale-105 transition-transform duration-200" />
            </Link>
            <p className="text-sm leading-6 text-accent/90">
              Professional accounting and tax services for healthcare
              professionals and businesses in the Greater Los Angeles area.
            </p>
            <div className="text-sm leading-6 text-accent/90 space-y-4">
              <div className="flex items-start gap-3 group hover:text-white transition-colors duration-200">
                <div className="mt-1">
                  <MapPin className="h-4 w-4 text-accent group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p>5019 Lockhaven Ave</p>
                  <p>Los Angeles, CA 90041</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group">
                <Phone className="h-4 w-4 text-accent group-hover:text-white transition-colors duration-200" />
                <a
                  href="tel:+13234407365"
                  className="hover:text-white transition-colors duration-200"
                >
                  (323) 440-7365
                </a>
              </div>
              <div className="flex items-center gap-3 group">
                <Mail className="h-4 w-4 text-accent group-hover:text-white transition-colors duration-200" />
                <a
                  href="mailto:contact@rmdaccounting.com"
                  className="hover:text-white transition-colors duration-200"
                >
                  contact@rmdaccounting.com
                </a>
              </div>
              <div className="flex items-start gap-3 group hover:text-white transition-colors duration-200">
                <div className="mt-1">
                  <Clock className="h-4 w-4 text-accent group-hover:text-white transition-colors duration-200" />
                </div>
                <div>
                  <p>Monday - Friday: 9:00 AM - 5:00 PM</p>
                  <p>Saturday - Sunday: Closed</p>
                </div>
              </div>
            </div>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Services
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.services.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-accent/90 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <ChevronRight className="h-3 w-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">
                  Company
                </h3>
                <ul role="list" className="mt-6 space-y-4">
                  {navigation.company.map((item) => (
                    <li key={item.name}>
                      <Link
                        href={item.href}
                        className="text-sm leading-6 text-accent/90 hover:text-white transition-colors duration-200 flex items-center group"
                      >
                        <ChevronRight className="h-3 w-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">
                Legal
              </h3>
              <ul role="list" className="mt-6 space-y-4">
                {navigation.legal.map((item) => (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      className="text-sm leading-6 text-accent/90 hover:text-white transition-colors duration-200 flex items-center group"
                    >
                      <ChevronRight className="h-3 w-3 mr-1 opacity-0 -ml-4 group-hover:opacity-100 group-hover:ml-0 transition-all duration-200" />
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-accent/80 text-center">
            &copy; {new Date().getFullYear()} RMD Accounting & Tax Services. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
