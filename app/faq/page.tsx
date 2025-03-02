"use client";

import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question:
      "What services do you specialize in for healthcare professionals?",
    answer:
      "We specialize in comprehensive accounting, tax, and financial advisory services tailored specifically for healthcare professionals. This includes bookkeeping, tax planning and preparation, payroll services, practice management consulting, and CFO services for medical and dental practices.",
  },
  {
    question: "How often should I meet with my accountant?",
    answer:
      "We recommend quarterly meetings for most healthcare practices to review financial performance, tax planning, and business strategy. However, we can adjust the frequency based on your practice's needs. Monthly meetings are common for growing practices or those requiring more intensive financial oversight.",
  },
  {
    question: "Do you offer virtual accounting services?",
    answer:
      "Yes, we offer virtual accounting services through our secure client portal. This allows us to serve healthcare professionals efficiently while maintaining the security of their financial information. We can conduct meetings virtually or in person, based on your preference.",
  },
  {
    question:
      "What tax planning strategies do you offer for healthcare practices?",
    answer:
      "We offer comprehensive tax planning strategies including entity structure optimization, retirement planning, equipment purchase timing, tax-efficient compensation structures, and various tax credit opportunities specific to healthcare practices.",
  },
  {
    question: "How do you handle client data security?",
    answer:
      "We maintain strict security protocols including encrypted data transmission, secure client portals, regular security audits, and compliance with all relevant privacy regulations including HIPAA requirements for healthcare-related financial information.",
  },
  {
    question: "What software do you use for accounting and bookkeeping?",
    answer:
      "We use industry-leading accounting software that integrates well with various practice management systems. Our team is proficient in QuickBooks, Xero, and other specialized healthcare accounting platforms.",
  },
  {
    question: "Can you help with practice acquisition or expansion?",
    answer:
      "Yes, we provide comprehensive support for practice acquisitions and expansions, including due diligence, financial analysis, cash flow projections, financing assistance, and post-acquisition integration planning.",
  },
  {
    question: "What makes your firm different from other accounting firms?",
    answer:
      "Our specialization in healthcare accounting, deep understanding of medical and dental practices, and commitment to personalized service sets us apart. We focus exclusively on healthcare professionals, allowing us to provide targeted, industry-specific advice.",
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Find answers to common questions about our services and how we help
            healthcare professionals manage their finances.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-3xl">
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="rounded-lg border border-gray-200 p-6 hover:shadow-md transition-shadow duration-200"
              >
                <button
                  className="flex w-full items-center justify-between text-left"
                  onClick={() =>
                    setOpenIndex(openIndex === index ? null : index)
                  }
                >
                  <h3 className="font-semibold text-gray-900">
                    {faq.question}
                  </h3>
                  {openIndex === index ? (
                    <ChevronUp className="h-5 w-5 text-gray-500" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-gray-500" />
                  )}
                </button>
                {openIndex === index && (
                  <p className="mt-4 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
        <div className="mx-auto max-w-2xl text-center mt-20">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900">
            Still have questions?
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Can't find the answer you're looking for? We're here to help with
            any questions about our services.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <a
              href="/contact"
              className="rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary/90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
