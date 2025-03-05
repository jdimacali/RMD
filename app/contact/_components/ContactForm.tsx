"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { toast } from "sonner";

interface FormData {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  service: string;
}

const initialFormData: FormData = {
  name: "",
  email: "",
  phone: "",
  company: "",
  message: "",
  service: "",
};

const services = [
  { value: "bookkeeping", label: "Bookkeeping & Reconciliation" },
  { value: "tax", label: "Tax Services" },
  { value: "payroll", label: "Payroll Services" },
  { value: "planning", label: "Financial Planning" },
  { value: "advisory", label: "Business Advisory" },
  { value: "startup", label: "New Business Setup" },
  { value: "cfo", label: "CFO Services" },
];

export function ContactForm() {
  const [formData, setFormData] = useState<FormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error("Failed to send message");
      }

      toast.success("Message sent successfully! We'll get back to you soon.");
      setFormData(initialFormData);
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mx-auto max-w-2xl bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-200"
    >
      <form onSubmit={handleSubmit} className="space-y-8">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label
              htmlFor="name"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Name <span className="text-primary">*</span>
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm transition-shadow duration-200"
              placeholder="John Doe"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <label
              htmlFor="email"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Email <span className="text-primary">*</span>
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm transition-shadow duration-200"
              placeholder="john@example.com"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label
              htmlFor="phone"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Phone
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm transition-shadow duration-200"
              placeholder="(123) 456-7890"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <label
              htmlFor="company"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Company
            </label>
            <input
              type="text"
              name="company"
              id="company"
              value={formData.company}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm transition-shadow duration-200"
              placeholder="Your Company Name"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="sm:col-span-2"
          >
            <label
              htmlFor="service"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Service Interested In <span className="text-primary">*</span>
            </label>
            <select
              name="service"
              id="service"
              required
              value={formData.service}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm transition-shadow duration-200"
            >
              <option value="">Select a service</option>
              {services.map((service) => (
                <option key={service.value} value={service.value}>
                  {service.label}
                </option>
              ))}
            </select>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="sm:col-span-2"
          >
            <label
              htmlFor="message"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              Message <span className="text-primary">*</span>
            </label>
            <textarea
              name="message"
              id="message"
              rows={4}
              required
              value={formData.message}
              onChange={handleChange}
              className="mt-2 block w-full rounded-xl border-0 px-4 py-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm transition-shadow duration-200"
              placeholder="Tell us about your needs..."
            />
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full rounded-xl bg-primary px-5 py-3.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-dark focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary flex items-center justify-center gap-2 group transition-all duration-300 hover:scale-[1.02] disabled:opacity-70 disabled:hover:scale-100 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <>
                Sending...
                <div className="h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
              </>
            ) : (
              <>
                Send Message
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </>
            )}
          </button>
        </motion.div>
      </form>
    </motion.div>
  );
}
