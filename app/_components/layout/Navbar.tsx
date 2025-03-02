"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/_components/ui/Container";
import { Logo } from "@/_components/ui/Logo";
import { Menu, X, ArrowRight } from "lucide-react";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white border-b border-gray-100">
      <Container className="py-4">
        <nav className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link href="/" className="-m-1.5 p-1.5">
              <span className="sr-only">RMD Accounting & Tax Services</span>
              <Logo />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
            <Link
              href="/contact"
              className="group rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-colors duration-200 flex items-center gap-2"
            >
              Get Started
              <ArrowRight className="h-4 w-4 animate-pulse-right" />
            </Link>
          </div>
        </nav>
      </Container>

      <div
        className={`lg:hidden ${
          mobileMenuOpen ? "fixed inset-0 z-50 bg-white px-6 py-6" : "hidden"
        }`}
      >
        <div className="flex items-center justify-between">
          <Link href="/" className="-m-1.5 p-1.5">
            <span className="sr-only">RMD Accounting & Tax Services</span>
            <Logo />
          </Link>
          <button
            type="button"
            className="-m-2.5 rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(false)}
          >
            <span className="sr-only">Close menu</span>
            <X className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="mt-6 flow-root">
          <div className="-my-6 divide-y divide-gray-100">
            <div className="space-y-2 py-6">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </Link>
              ))}
            </div>
            <div className="py-6">
              <Link
                href="/contact"
                className="-mx-3 block rounded-md bg-primary px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-primary-dark flex items-center justify-center gap-2"
              >
                Get Started
                <ArrowRight className="h-4 w-4 animate-pulse-right" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
