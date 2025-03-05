"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";

interface StatProps {
  label: string;
  value: string;
  endValue: number;
}

const stats: StatProps[] = [
  { label: "Years of Experience", value: "15+", endValue: 15 },
  { label: "Healthcare Clients", value: "100+", endValue: 100 },
  { label: "Tax Returns Filed", value: "1000+", endValue: 1000 },
  { label: "Client Retention Rate", value: "98%", endValue: 98 },
];

function AnimatedNumber({ value }: { value: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    let startTimestamp: number | null = null;
    let animationFrameId: number;
    const duration = 2500; // 2.5 seconds for smoother animation

    // Easing function to make the animation slow down at the end
    const easeOutQuart = (x: number): number => 1 - Math.pow(1 - x, 4);

    const animate = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp;
      const elapsed = timestamp - startTimestamp;
      const progress = Math.min(elapsed / duration, 1);

      // Apply easing to the progress
      const easedProgress = easeOutQuart(progress);

      // For the 1000+ number, we'll animate faster at start and slower at end
      if (value >= 1000) {
        const scaledValue = value * 1.2; // Overshoot slightly
        const currentValue = Math.floor(easedProgress * scaledValue);
        setDisplayValue(Math.min(currentValue, value)); // Ensure we don't exceed actual value
      } else {
        setDisplayValue(Math.floor(easedProgress * value));
      }

      if (progress < 1) {
        animationFrameId = requestAnimationFrame(animate);
      }
    };

    if (isInView) {
      animationFrameId = requestAnimationFrame(animate);
    }

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isInView, value]);

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.5 }}
      className="tabular-nums"
    >
      {displayValue}
      {value === 98 ? "%" : "+"}
    </motion.span>
  );
}

export function AboutHero() {
  const statsRef = useRef(null);
  const isInView = useInView(statsRef, { once: true });

  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-transparent">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-8 xl:gap-x-16">
          <div className="flex flex-col justify-start">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl font-bold tracking-tight text-primary sm:text-5xl whitespace-nowrap"
            >
              Meet{" "}
              <span className="italic text-primary">Rosalind M. Dimacali</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-6 text-lg leading-8 text-zinc-600"
            >
              With over{" "}
              <span className="font-semibold text-primary">
                15 years of experience
              </span>{" "}
              in accounting and tax services, Rosalind has dedicated her career
              to helping{" "}
              <span className="font-semibold text-primary">
                healthcare professionals
              </span>{" "}
              and business owners achieve their financial goals. Her{" "}
              <span className="font-semibold text-primary">
                expertise in dental and medical practice accounting
              </span>{" "}
              has made her a{" "}
              <span className="font-semibold text-primary">
                trusted advisor
              </span>{" "}
              in the healthcare industry throughout the Greater Los Angeles
              area.
            </motion.p>
            <div
              ref={statsRef}
              className="mt-12 grid grid-cols-2 gap-8 sm:grid-cols-4"
            >
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ duration: 0.6, delay: 0.3 }}
                  className="flex flex-col gap-y-3 border-l-2 border-primary/20 pl-6"
                >
                  <dt className="text-sm font-medium leading-6 text-zinc-600">
                    {stat.label}
                  </dt>
                  <dd
                    className={`text-[2.5rem] sm:text-[2.5rem] font-bold tracking-tight text-primary ${
                      stat.endValue >= 1000
                        ? "text-[2.5rem] sm:text-[2.5rem]"
                        : ""
                    }`}
                  >
                    <AnimatedNumber value={stat.endValue} />
                  </dd>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="relative w-full h-[400px] lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-primary/10"
          >
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/30 z-10" />
            <Image
              src="/images/rosalind.jpg"
              alt="Rosalind M. Dimacali"
              fill
              className="object-cover object-center hover:scale-105 transition-transform duration-700"
              priority
              sizes="(min-width: 1024px) 50vw, 100vw"
              quality={95}
            />
          </motion.div>
        </div>
      </Container>
    </div>
  );
}
