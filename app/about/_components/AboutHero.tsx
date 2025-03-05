import { Container } from "@/components/ui/Container";
import Image from "next/image";

interface StatProps {
  label: string;
  value: string;
}

const stats: StatProps[] = [
  { label: "Years of Experience", value: "15+" },
  { label: "Healthcare Clients", value: "100+" },
  { label: "Tax Returns Filed", value: "1000+" },
  { label: "Client Retention Rate", value: "98%" },
];

export function AboutHero() {
  return (
    <div className="relative isolate overflow-hidden bg-gradient-to-b from-primary/5 via-primary/10 to-transparent">
      <Container className="py-24 sm:py-32">
        <div className="mx-auto grid max-w-7xl grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-12 xl:gap-x-16">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-primary sm:text-5xl whitespace-nowrap">
              Meet Rosalind M. Dimacali
            </h1>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              With over 15 years of experience in accounting and tax services,
              Rosalind has dedicated her career to helping healthcare
              professionals and business owners achieve their financial goals.
              Her expertise in dental and medical practice accounting has made
              her a trusted advisor in the healthcare industry throughout the
              Greater Los Angeles area.
            </p>
            <div className="mt-10 grid grid-cols-2 gap-8 sm:grid-cols-4">
              {stats.map((stat) => (
                <div
                  key={stat.label}
                  className="flex flex-col gap-y-3 border-l border-zinc-900/10 pl-6"
                >
                  <dt className="text-sm leading-6 text-zinc-600">
                    {stat.label}
                  </dt>
                  <dd className="text-3xl font-semibold tracking-tight text-primary">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </div>
          </div>
          <div className="relative">
            <div className="aspect-[3/4] w-full rounded-2xl overflow-hidden bg-zinc-50 ring-1 ring-zinc-200 shadow-xl">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/20 z-10" />
              <Image
                src="/images/rosalind.jpg"
                alt="Rosalind M. Dimacali"
                fill
                className="object-cover hover:scale-105 transition-transform duration-700"
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                quality={95}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
