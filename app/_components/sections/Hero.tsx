"use client";

import { Container } from "@/components/ui/Container";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";

const words = [
  "Business Success",
  "Financial Growth",
  "Tax Optimization",
  "Peace of Mind",
];

export function Hero() {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(150);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentWord = words[wordIndex];

      if (!isDeleting) {
        if (displayText !== currentWord) {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
          setTypingSpeed(100);
        } else {
          setTypingSpeed(2000); // Pause at the end
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayText === "") {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
          setTypingSpeed(150);
        } else {
          setDisplayText(currentWord.slice(0, displayText.length - 1));
          setTypingSpeed(75);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timeout);
  }, [displayText, isDeleting, wordIndex, typingSpeed]);

  return (
    <div className="relative isolate overflow-hidden rounded-b-3xl">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/stock/hero.jpg"
          alt="Professional office setting"
          fill
          className="object-cover"
          priority
          sizes="100vw"
          quality={90}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 via-primary/50 to-primary/10" />
      </div>

      <div className="py-24 sm:py-32 lg:pb-40">
        <Container>
          <div className="mx-auto max-w-2xl text-center relative">
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-white">
              Financial Partner for Your{" "}
              <span className="block h-[1.5em] overflow-hidden mt-2">
                <span className="typing-text block text-white">
                  {displayText}
                  <span className="inline-block w-0.5 md:h-10 h-6 ml-1 animate-blink bg-white" />
                </span>
              </span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-white">
              Accounting, tax, and financial advisory services tailored to your
              business needs. We handle the complexities of your finances, so
              you can focus on growing your business.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-white px-4 py-2.5 text-sm font-semibold text-primary shadow-sm hover:bg-white/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white flex items-center gap-2 group"
              >
                Get Started Today
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              <Link
                href="/services"
                className="text-sm font-semibold leading-6 text-white hover:text-white/90 transition-colors duration-200"
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
