"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Container } from "@/components/ui/Container";
import { Logo } from "@/components/ui/Logo";
import { Menu, ArrowRight, Phone } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Toaster } from "sonner";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Pricing", href: "/pricing" },
  { name: "FAQ", href: "/faq" },
  { name: "Contact", href: "/contact" },
] as const;

const contactInfo = {
  phone: "(323) 440-7365",
  phoneLink: "+13234407365",
} as const;

interface NavLinkProps {
  href: string;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  isActive?: boolean;
}

function NavLink({
  href,
  children,
  onClick,
  className,
  isActive,
}: NavLinkProps) {
  return (
    <Link
      href={href}
      onClick={onClick}
      className={`${className} ${
        isActive ? "text-primary after:scale-x-100" : ""
      }`}
    >
      {children}
    </Link>
  );
}

function PhoneLink({ className }: { className?: string }) {
  return (
    <a href={`tel:${contactInfo.phoneLink}`} className={className}>
      <span className="bg-primary/5 p-2 rounded-full group-hover:bg-primary/10 transition-colors duration-200">
        <Phone className="h-4 w-4 text-primary" />
      </span>
      <span className="relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-center after:scale-x-0 group-hover:after:scale-x-100 after:transition-transform">
        {contactInfo.phone}
      </span>
    </a>
  );
}

function GetStartedButton({
  onClick,
  className,
}: {
  onClick?: () => void;
  className?: string;
}) {
  return (
    <Link href="/contact" onClick={onClick} className={className}>
      <span className="relative z-10">Get Started</span>
      <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
      <div className="absolute inset-0 bg-white/20 transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-700" />
    </Link>
  );
}

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const pathname = usePathname();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        mobileMenuOpen &&
        menuRef.current &&
        !menuRef.current.contains(event.target as Node) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target as Node)
      ) {
        setMobileMenuOpen(false);
      }
    };

    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [mobileMenuOpen]);

  const toggleMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-100">
      <Container className="py-4">
        <nav
          className="flex items-center justify-between"
          aria-label="Main navigation"
        >
          <div className="flex lg:flex-1">
            <Link
              href="/"
              className="-m-1.5 p-1.5 transition-transform duration-200 hover:scale-105"
              aria-label="RMD Accounting & Tax Services - Home"
            >
              <Logo />
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              ref={buttonRef}
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-50 transition-colors duration-200"
              onClick={toggleMenu}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            >
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>

          {/* Desktop navigation */}
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                href={item.href}
                isActive={
                  pathname === item.href ||
                  (item.href !== "/" && pathname.startsWith(item.href))
                }
                className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-all duration-200 relative after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:origin-center after:scale-x-0 hover:after:scale-x-100 after:transition-transform"
              >
                {item.name}
              </NavLink>
            ))}
          </div>

          {/* Desktop contact info and CTA */}
          <div className="hidden lg:flex lg:flex-1 lg:justify-end lg:items-center lg:gap-x-6">
            <PhoneLink className="text-sm font-semibold leading-6 text-gray-900 hover:text-primary transition-all duration-200 flex items-center gap-2 group" />
            <GetStartedButton className="group rounded-xl bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark transition-all duration-300 hover:scale-105 flex items-center gap-2 relative overflow-hidden" />
          </div>
        </nav>
      </Container>

      {/* Mobile menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            ref={menuRef}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Mobile menu"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="lg:hidden absolute inset-x-0 z-50 bg-white border-b border-gray-100 shadow-lg overflow-hidden rounded-b-2xl"
          >
            <nav className="px-6 py-4" aria-label="Mobile navigation">
              <div className="divide-y divide-gray-100">
                <div className="space-y-1 py-6">
                  {navigation.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                    >
                      <NavLink
                        href={item.href}
                        onClick={() => setMobileMenuOpen(false)}
                        isActive={
                          pathname === item.href ||
                          (item.href !== "/" && pathname.startsWith(item.href))
                        }
                        className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors duration-200"
                      >
                        {item.name}
                      </NavLink>
                    </motion.div>
                  ))}
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigation.length * 0.1 }}
                  >
                    <PhoneLink className="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 transition-colors duration-200 flex items-center gap-2" />
                  </motion.div>
                </div>
                <div className="py-6">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: (navigation.length + 1) * 0.1 }}
                  >
                    <GetStartedButton
                      onClick={() => setMobileMenuOpen(false)}
                      className="-mx-3 block rounded-xl bg-primary px-4 py-3 text-base font-semibold leading-7 text-white hover:bg-primary-dark transition-all duration-300 hover:scale-[1.02] flex items-center justify-center gap-2 relative overflow-hidden group"
                    />
                  </motion.div>
                </div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster position="top-right" />
    </header>
  );
}
