import { Container } from "@/components/ui/Container";
import {
  Award,
  BookOpen,
  Calculator,
  FileCheck,
  LucideIcon,
} from "lucide-react";
import Image from "next/image";

interface CertificationProps {
  name: string;
  description: string;
  icon: LucideIcon;
  image: string;
}

const certifications: CertificationProps[] = [
  {
    name: "Certified Public Accountant (CPA)",
    description:
      "Licensed CPA with expertise in tax planning, financial management, and business advisory services.",
    icon: Award,
    image: "/images/certifications/CPA.jpg",
  },
  {
    name: "Certified Public Bookkeeper",
    description:
      "Professional certification demonstrating expertise in bookkeeping, accounting procedures, and financial record-keeping.",
    icon: BookOpen,
    image: "/images/certifications/CPB.png",
  },
  {
    name: "QuickBooks Certified ProAdvisor",
    description:
      "Advanced certification in QuickBooks, providing expert guidance in financial software implementation and management.",
    icon: Calculator,
    image: "/images/certifications/quickbooks CP.png",
  },
  {
    name: "Bachelor in Accounting",
    description:
      "Strong academic foundation in accounting principles, financial analysis, and business management.",
    icon: FileCheck,
    image: "/images/certifications/bachelor.jpg",
  },
];

export function Certifications() {
  return (
    <div className="py-12 sm:py-18 bg-white">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Professional Certifications & Education
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our expertise is backed by recognized certifications and a strong
              educational foundation in accounting and financial management.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="relative group">
                <div className="relative h-48 mb-6 rounded-lg overflow-hidden">
                  <Image
                    src={cert.image}
                    alt={cert.name}
                    fill
                    className="object-cover transform group-hover:scale-105 transition-transform duration-300"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 25vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
                <dt className="text-base font-semibold leading-7 text-primary">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors duration-200">
                    <cert.icon
                      className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-200"
                      aria-hidden="true"
                    />
                  </div>
                  {cert.name}
                </dt>
                <dd className="mt-2 text-base leading-7 text-gray-600">
                  {cert.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </Container>
    </div>
  );
}
