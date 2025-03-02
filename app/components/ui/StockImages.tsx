import Image from "next/image";

export const stockImages = {
  hero: {
    src: "/images/stock/hero-accounting.jpg",
    alt: "Professional accountant working with healthcare client",
  },
  about: {
    team: "/images/stock/team.jpg",
    office: "/images/stock/office.jpg",
  },
  services: {
    bookkeeping: "/images/stock/bookkeeping.jpg",
    tax: "/images/stock/tax-planning.jpg",
    payroll: "/images/stock/payroll.jpg",
    cfo: "/images/stock/cfo-services.jpg",
  },
  testimonials: {
    client1: "/images/stock/doctor-office.jpg",
    client2: "/images/stock/dental-practice.jpg",
  },
};

interface StockImageProps {
  image: {
    src: string;
    alt: string;
  };
  className?: string;
}

export function StockImage({ image, className }: StockImageProps) {
  return (
    <div className={`relative ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
      />
    </div>
  );
}
