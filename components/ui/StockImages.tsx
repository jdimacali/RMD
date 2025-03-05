import Image from "next/image";

export const stockImages = {
  home: {
    hero: {
      src: "/images/stock/hero-accounting.jpg",
      alt: "Professional accountant working with healthcare client",
      description:
        "A modern office setting with healthcare professionals consulting with accountants",
    },
    services: [
      {
        src: "/images/stock/bookkeeping.jpg",
        alt: "Modern bookkeeping and accounting software",
        description:
          "Clean, modern workspace with financial software on screen",
      },
      {
        src: "/images/stock/tax-planning.jpg",
        alt: "Tax planning session with healthcare professional",
        description:
          "Professional meeting between accountant and medical practitioner",
      },
      {
        src: "/images/stock/healthcare-finance.jpg",
        alt: "Healthcare financial management",
        description:
          "Medical office with financial documents and modern technology",
      },
    ],
  },
  about: {
    team: {
      src: "/images/stock/team.jpg",
      alt: "RMD Accounting team",
      description: "Professional team photo in modern office setting",
    },
    office: {
      src: "/images/stock/office.jpg",
      alt: "RMD Accounting office",
      description:
        "Modern, welcoming office space with professional atmosphere",
    },
    values: {
      src: "/images/stock/values.jpg",
      alt: "Team collaboration",
      description: "Team working together, representing our values",
    },
  },
  services: {
    bookkeeping: {
      src: "/images/stock/bookkeeping-detail.jpg",
      alt: "Detailed bookkeeping services",
      description: "Professional using modern accounting software",
    },
    tax: {
      src: "/images/stock/tax-services.jpg",
      alt: "Tax planning and preparation",
      description: "Tax professional reviewing documents with client",
    },
    payroll: {
      src: "/images/stock/payroll.jpg",
      alt: "Payroll services",
      description: "Modern payroll management system in use",
    },
    cfo: {
      src: "/images/stock/cfo-services.jpg",
      alt: "CFO advisory services",
      description: "Strategic financial planning session",
    },
  },
  pricing: {
    header: {
      src: "/images/stock/pricing-header.jpg",
      alt: "Transparent pricing",
      description:
        "Clean, professional image representing value and transparency",
    },
  },
  contact: {
    office: {
      src: "/images/stock/contact-office.jpg",
      alt: "RMD Accounting office exterior",
      description: "Welcoming exterior view of our office",
    },
    team: {
      src: "/images/stock/contact-team.jpg",
      alt: "Contact our team",
      description: "Friendly team member ready to assist",
    },
  },
  testimonials: [
    {
      src: "/images/stock/testimonial-1.jpg",
      alt: "Medical practice testimonial",
      description: "Doctor in their practice environment",
    },
    {
      src: "/images/stock/testimonial-2.jpg",
      alt: "Dental practice testimonial",
      description: "Dentist in their modern clinic",
    },
  ],
};

interface StockImageProps {
  image: {
    src: string;
    alt: string;
  };
  className?: string;
  priority?: boolean;
}

export function StockImage({
  image,
  className = "",
  priority = false,
}: StockImageProps) {
  return (
    <div className={`relative overflow-hidden ${className}`}>
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover rounded-lg"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        priority={priority}
      />
    </div>
  );
}
