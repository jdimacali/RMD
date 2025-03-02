import Image from "next/image";
import { Container } from "@/_components/ui/Container";

interface Testimonial {
  content: string;
  author: string;
  role: string;
  company: string;
  image?: string;
}

const testimonials: Testimonial[] = [
  {
    content:
      "RMD Accounting transformed how we handle our practice's finances. Their expertise in dental accounting is unmatched.",
    author: "Dr. Sarah Chen",
    role: "Owner",
    company: "Bright Smile Dental",
  },
  {
    content:
      "Working with Rosalind has been incredible. Her attention to detail and deep understanding of medical practice accounting has saved us both time and money.",
    author: "Dr. Michael Rodriguez",
    role: "Director",
    company: "Family Medical Center",
  },
  {
    content:
      "The team at RMD Accounting provides exceptional service. They're always available to answer questions and provide strategic financial guidance.",
    author: "Dr. James Wilson",
    role: "Partner",
    company: "Wilson & Partners Medical",
  },
];

export function Testimonials() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
            Trusted by Healthcare Professionals
          </h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Don&apos;t just take our word for it. Here&apos;s what our clients have to say
            about working with RMD Accounting & Tax Services.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.author}
              className="flex flex-col justify-between bg-white p-6 shadow-lg ring-1 ring-gray-200 rounded-2xl"
            >
              <div>
                <div className="flex items-center gap-x-2">
                  {testimonial.image ? (
                    <Image
                      className="h-12 w-12 rounded-full bg-gray-50"
                      src={testimonial.image}
                      alt={testimonial.author}
                      width={48}
                      height={48}
                    />
                  ) : (
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <span className="text-xl font-semibold text-primary">
                        {testimonial.author[0]}
                      </span>
                    </div>
                  )}
                </div>
                <blockquote className="mt-8 text-lg font-semibold leading-8 text-gray-900">
                  &quot;{testimonial.content}&quot;
                </blockquote>
              </div>
              <div className="mt-6 border-t border-gray-200 pt-6">
                <div className="text-base font-semibold text-gray-900">
                  {testimonial.author}
                </div>
                <div className="mt-1 text-sm text-gray-500">
                  {testimonial.role} at {testimonial.company}
                </div>
              </div>
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}
