import Link from "next/link";
import { Container } from "@/_components/ui/Container";
import { Logo } from "@/_components/ui/Logo";

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
    <footer className="bg-primary" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>
      <Container className="pb-8 pt-16 sm:pt-24">
        <div className="mx-auto max-w-7xl xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Logo className="text-white" />
            <p className="text-sm leading-6 text-accent">
              Professional accounting and tax services for healthcare
              professionals and businesses in the Greater Los Angeles area.
            </p>
            <div className="text-sm leading-6 text-accent">
              <p>5019 Lockhaven Ave</p>
              <p>Los Angeles, CA 90041</p>
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
                        className="text-sm leading-6 text-accent hover:text-white transition-colors duration-200"
                      >
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
                        className="text-sm leading-6 text-accent hover:text-white transition-colors duration-200"
                      >
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
                      className="text-sm leading-6 text-accent hover:text-white transition-colors duration-200"
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-accent text-center">
            &copy; {new Date().getFullYear()} RMD Accounting & Tax Services. All
            rights reserved.
          </p>
        </div>
      </Container>
    </footer>
  );
}
