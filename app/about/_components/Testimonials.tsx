"use client";

import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "RMD Accounting has transformed how we manage our practice's finances. Their deep understanding of healthcare accounting makes them an invaluable partner.",
    author: "Dr. Sarah Chen",
    role: "Owner",
    company: "Bright Smile Dental",
    image: "/images/testimonials/sarah.jpg",
  },
  {
    content:
      "Working with Rosalind has given us peace of mind. Her expertise in medical practice accounting has helped us optimize our financial operations.",
    author: "Dr. Michael Rodriguez",
    role: "Medical Director",
    company: "Pacific Medical Group",
    image: "/images/testimonials/michael.jpg",
  },
  {
    content:
      "The level of personal attention and expertise we receive is outstanding. They understand the unique challenges of running a healthcare practice.",
    author: "Dr. Emily Thompson",
    role: "Partner",
    company: "Thompson Family Practice",
    image: "/images/testimonials/emily.jpg",
  },
  {
    content:
      "Their tax planning strategies have saved us significant money. They're not just accountants, they're strategic advisors for our practice.",
    author: "Dr. James Wilson",
    role: "CEO",
    company: "Wilson Medical Center",
    image: "/images/testimonials/james.jpg",
  },
  {
    content:
      "The attention to detail and proactive approach to our finances has been invaluable. They truly care about our practice's success.",
    author: "Dr. Lisa Martinez",
    role: "Founder",
    company: "Wellness Medical Spa",
    image: "/images/testimonials/lisa.jpg",
  },
];

export function Testimonials() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);
  const [scrollPosition, setScrollPosition] = useState(0);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    let animationFrameId: number;
    const speed = 0.5; // Slightly faster for smoother movement

    const scroll = () => {
      if (!container || isPaused) {
        animationFrameId = requestAnimationFrame(scroll);
        return;
      }

      // Update scroll position
      const newPosition = scrollPosition + speed;

      // Reset when we've scrolled one full set of testimonials
      if (newPosition >= container.scrollWidth / 2) {
        setScrollPosition(0);
        container.scrollLeft = 0;
      } else {
        setScrollPosition(newPosition);
        container.scrollLeft = newPosition;
      }

      animationFrameId = requestAnimationFrame(scroll);
    };

    animationFrameId = requestAnimationFrame(scroll);

    return () => {
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId);
      }
    };
  }, [isPaused, scrollPosition]);

  return (
    <div className="py-24 sm:py-32 bg-white">
      <Container className="max-w-[110rem]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center mb-20"
        >
          <h2 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl">
            Trusted by Healthcare Professionals
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our clients
            have to say about working with RMD Accounting & Tax Services.
          </p>
        </motion.div>

        <div className="relative mx-[-2rem]">
          {/* Gradient masks */}
          <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white via-white/90 to-transparent z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white via-white/90 to-transparent z-10" />

          {/* Carousel container */}
          <div
            ref={containerRef}
            className="flex gap-8 overflow-x-auto no-scrollbar px-8 py-8"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => {
              setIsPaused(false);
              // Reset position if we're past halfway
              if (
                containerRef.current &&
                containerRef.current.scrollLeft >
                  containerRef.current.scrollWidth / 4
              ) {
                containerRef.current.scrollLeft = 0;
                setScrollPosition(0);
              }
            }}
            style={{
              WebkitOverflowScrolling: "touch",
              scrollbarWidth: "none",
              msOverflowStyle: "none",
            }}
          >
            {[...testimonials, ...testimonials].map((testimonial, idx) => (
              <motion.div
                key={`${testimonial.author}-${idx}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                className="flex-none w-[350px] sm:w-[400px]"
              >
                <div className="relative h-full flex flex-col justify-between bg-white p-8 shadow-lg ring-1 ring-gray-200 rounded-2xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group">
                  {/* Quote icon */}
                  <div className="absolute -top-4 left-8 w-8 h-8 bg-accent text-white rounded-full flex items-center justify-center shadow-lg transform -rotate-6 group-hover:rotate-6 transition-transform duration-300">
                    <svg
                      className="w-4 h-4"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                    </svg>
                  </div>

                  <div className="space-y-6">
                    <blockquote className="text-lg font-medium leading-8 text-gray-900 italic">
                      &quot;{testimonial.content}&quot;
                    </blockquote>

                    <div className="flex items-center gap-x-4 border-t border-gray-200 pt-6">
                      <div className="relative h-16 w-16 overflow-hidden rounded-full ring-2 ring-accent/20">
                        <Image
                          className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                          src={testimonial.image}
                          alt={testimonial.author}
                          fill
                          sizes="64px"
                        />
                      </div>
                      <div>
                        <div className="text-base font-semibold text-gray-900 group-hover:text-accent transition-colors duration-300">
                          {testimonial.author}
                        </div>
                        <div className="text-sm text-gray-600">
                          {testimonial.role} • {testimonial.company}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Container>
    </div>
  );
}
