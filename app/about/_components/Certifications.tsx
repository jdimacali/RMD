import { Container } from "@/components/ui/Container";
import { Award, BookOpen, Users2, Building2 } from "lucide-react";

interface CertificationProps {
  name: string;
  description: string;
  icon: any; // Using any for simplicity, but in a real app we'd want to be more specific
}

const certifications: CertificationProps[] = [
  {
    name: "Certified Public Accountant (CPA)",
    description:
      "Licensed CPA with expertise in tax planning and financial management.",
    icon: Award,
  },
  {
    name: "Healthcare Financial Management Association",
    description:
      "Active member with specialized training in healthcare accounting.",
    icon: BookOpen,
  },
  {
    name: "QuickBooks ProAdvisor",
    description:
      "Certified advanced ProAdvisor for both desktop and online platforms.",
    icon: Users2,
  },
  {
    name: "Medical Group Management Association",
    description: "Member with focus on medical practice financial management.",
    icon: Building2,
  },
];

export function Certifications() {
  return (
    <div className="py-24 sm:py-32 bg-white">
      <Container>
        <div className="mx-auto max-w-2xl lg:max-w-none">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-primary sm:text-4xl">
              Professional Certifications & Memberships
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our commitment to excellence is backed by industry-recognized
              certifications and active membership in professional
              organizations.
            </p>
          </div>
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:grid-cols-2 lg:grid-cols-4">
            {certifications.map((cert) => (
              <div key={cert.name} className="relative">
                <dt className="text-base font-semibold leading-7 text-primary">
                  <div className="mb-6 flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                    <cert.icon
                      className="h-6 w-6 text-primary"
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
