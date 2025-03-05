"use client";

import { Container } from "@/components/ui/Container";
import { motion } from "framer-motion";

export function PricingHero() {
  return (
    <div className="relative isolate overflow-hidden">
      {/* Background Pattern */}
      <Container className="pt-24 ">
        <div className="mx-auto max-w-4xl text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-6xl"
          >
            Simple, Predictable{" "}
            <span className="relative whitespace-nowrap">
              <span className="relative">Pricing Plans</span>
            </span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600 max-w-2xl mx-auto"
          >
            Choose the plan that best fits your practice&apos;s needs. All plans
            include our{" "}
            <span className="font-semibold text-primary">
              core accounting services
            </span>{" "}
            and{" "}
            <span className="font-semibold text-primary">
              dedicated support
            </span>
            .
          </motion.p>
        </div>
      </Container>
    </div>
  );
}
