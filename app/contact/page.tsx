"use client";

import { Container } from "@/components/ui/Container";
import { ContactForm } from "./_components/ContactForm";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <div className="relative isolate overflow-hidden bg-white">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          ></motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-6 text-4xl font-bold tracking-tight text-primary sm:text-6xl"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-lg leading-8 text-gray-600"
          >
            Ready to take control of your finances? Fill out the form below and
            we&apos;ll get back to you within one business day.
          </motion.p>
        </div>

        <div className="mx-auto mt-16">
          <ContactForm />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-12 lg:grid-cols-2"
        >
          <div className="bg-white rounded-2xl p-8 shadow-lg ring-1 ring-gray-200">
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex items-start gap-x-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <MapPin className="h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Office Location
                  </h3>
                  <p className="mt-2 text-gray-600">5019 Lockhaven Ave</p>
                  <p className="text-gray-600">Los Angeles, CA 90041</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="flex items-start gap-x-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Phone className="h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Phone</h3>
                  <p className="mt-2 text-gray-600">(323) 440-7365</p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                className="flex items-start gap-x-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Mail className="h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">Email</h3>
                  <p className="mt-2 text-gray-600">
                    rosalindmacatlang@gmail.com
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                className="flex items-start gap-x-4 group"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors duration-300">
                  <Clock className="h-6 w-6 text-primary flex-shrink-0 transition-transform duration-300 group-hover:scale-110" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-primary">
                    Business Hours
                  </h3>
                  <p className="mt-2 text-gray-600">
                    Monday - Friday: 9:00 AM - 5:00 PM
                  </p>
                  <p className="text-gray-600">Saturday - Sunday: Closed</p>
                </div>
              </motion.div>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="lg:pl-8 h-full"
          >
            <div className="h-full rounded-2xl overflow-hidden shadow-lg ring-1 ring-gray-200">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7974765840143!2d-118.2066899!3d34.1276799!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c1f3a0e4b6b7%3A0x1f0e0f3b0e3b0e3b!2s5019%20Lockhaven%20Ave%2C%20Los%20Angeles%2C%20CA%2090041!5e0!3m2!1sen!2sus!4v1629788000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: "400px" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
}
