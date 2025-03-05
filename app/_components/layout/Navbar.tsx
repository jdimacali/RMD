"use client";

import { useState } from "react";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Menu, X, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
      <Container className="py-4">
        <nav className="flex items-center justify-between">
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 transition-transform duration-200 hover:scale-105"
            >
              <span className="sr-only">RMD Accounting & Tax Services</span>
              <Logo />
            </Link>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
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
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
            <a
              href="tel:+13234407365"
              className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-all duration-200 flex items-center gap-2 group"
            >
              <span className="bg-primary/5 p-2 rounded-full group-hover:bg-primary/10 transition-colors duration-200">
                <Phone className="h-4 w-4 text-primary" />
              </span>
              <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-center after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform">
                (323) 440-7365
              </span>
            </a>
            <Link
              href="/contact"
              className="group rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-all duration-300 hover:scale-105 flex items-center gap-2 relative overflow-hidden"
            >
              <span className="relative z-10">Get Started</span>
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
              <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
            </Link>
          </div>
        </nav>
      </Container>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden fixed inset-0 z-50 bg-white/80 backdrop-blur-md px-6 py-6"
          >
            <div className="flex items-center justify-between">
              <Link href="/" className="-m-1.5 p-1.5">
                <span className="sr-only">RMD Accounting & Tax Services</span>
                <Logo />
              </Link>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <X className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-100/50">
                <div className="space-y-2 py-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <Link
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {item.name}
                      </Link>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigation.length * 0.1 }}
                  >
                    <a
                      href="tel:+13234407365"
                      className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2"
                    >
                      <span className="bg-primary/5 p-2 rounded-full">
                        <Phone className="h-4 w-4 text-primary" />
                      </span>
                      (323) 440-7365
                    </a>
                  </motion.div>
                </div>
                <div className="py-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (navigation.length + 1) * 0.1 }}
                  >
                    <Link
                      href="/contact"
                      className="-mx-3 block rounded-xl bg-primary px-3 py-2.5 text-base font-semibold leading-7 text-white hover:bg-primary-dark transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 relative overflow-hidden group"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      <span className="relative z-10">Get Started</span>
                      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
                      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
                    </Link>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
