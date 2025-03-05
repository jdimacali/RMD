import { Container } from "@/components/ui/Container";
import { ContactForm } from "./_components/ContactForm";
import { Map } from "./_components/Map";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export const metadata = {
  title: "Contact | RMD Accounting & Tax Services",
  description:
    "Get in touch with RMD Accounting & Tax Services for professional accounting and tax services. Located in Los Angeles, CA.",
};

export default function Contact() {
  return (
    <div className="relative isolate overflow-hidden">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto max-w-2xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-6xl">
            Get in Touch
          </h1>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Ready to take control of your finances? Fill out the form below and
            we&apos;ll get back to you within one business day.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl">
          <ContactForm />
        </div>
        <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 gap-x-8 gap-y-8 lg:grid-cols-2">
          <div className="space-y-6">
            <div className="flex items-center gap-x-4">
              <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Office Location
                </h3>
                <p className="mt-2 text-gray-600">5019 Lockhaven Ave</p>
                <p className="text-gray-600">Los Angeles, CA 90041</p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <Phone className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary">Phone</h3>
                <p className="mt-2 text-gray-600">(323) 555-0123</p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <Mail className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary">Email</h3>
                <p className="mt-2 text-gray-600">contact@rmdaccounting.com</p>
              </div>
            </div>
            <div className="flex items-center gap-x-4">
              <Clock className="h-6 w-6 text-primary flex-shrink-0" />
              <div>
                <h3 className="text-lg font-semibold text-primary">
                  Business Hours
                </h3>
                <p className="mt-2 text-gray-600">
                  Monday - Friday: 9:00 AM - 5:00 PM
                </p>
                <p className="text-gray-600">Saturday - Sunday: Closed</p>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <Map />
          </div>
        </div>
      </Container>
    </div>
  );
}
