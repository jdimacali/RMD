import { Container } from "@/_components/ui/Container";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactDetails = [
  {
    name: "Office Location",
    description: "5019 Lockhaven Ave, Los Angeles, CA 90041",
    icon: MapPin,
  },
  {
    name: "Phone",
    description: "(323) 440-7365",
    icon: Phone,
  },
  {
    name: "Email",
    description: "rosalindmacatlang@gmail.com",
    icon: Mail,
  },
  {
    name: "Business Hours",
    description: "Monday - Friday: 9:00 AM - 5:00 PM",
    icon: Clock,
  },
];

export function ContactInfo() {
  return (
    <div className="relative isolate bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <h2 className="text-3xl font-bold tracking-tight text-primary animate-fade-in">
              Our Office
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600 animate-fade-in-up">
              Visit our office in the heart of Los Angeles. We're conveniently
              located to serve clients throughout the Greater Los Angeles area.
            </p>
            <div className="mt-16 grid grid-cols-1 gap-8 sm:grid-cols-2">
              <div className="rounded-2xl bg-gray-50 p-10 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Contact Information
                </h3>
                <dl className="mt-3 space-y-6">
                  {contactDetails.map((item) => (
                    <div key={item.name} className="flex gap-x-4 group">
                      <dt>
                        <item.icon
                          className="h-7 w-6 text-primary flex-none transition-transform duration-300 group-hover:scale-110"
                          aria-hidden="true"
                        />
                      </dt>
                      <dd className="text-base leading-7 text-gray-600">
                        <span className="font-semibold text-gray-900">
                          {item.name}
                        </span>
                        <br />
                        {item.description}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
              <div className="rounded-2xl bg-gray-50 p-10 transform transition-all duration-300 hover:shadow-xl hover:-translate-y-1">
                <h3 className="text-base font-semibold leading-7 text-gray-900">
                  Map Location
                </h3>
                <div className="mt-3 aspect-[4/3] w-full">
                  <iframe
                    title="Office Location"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3303.7603256873897!2d-118.2063492!3d34.1307899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2c0f3a9e8c7d7%3A0x1b8c0f3a9e8c7d7!2s5019%20Lockhaven%20Ave%2C%20Los%20Angeles%2C%20CA%2090041!5e0!3m2!1sen!2sus!4v1629308788123!5m2!1sen!2sus"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="rounded-lg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
