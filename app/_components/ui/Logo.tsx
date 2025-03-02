import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
}

export function Logo({ className }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div className="relative h-12 w-12">
        <Image
          src="/logo/logo-transparent-independent.svg"
          alt="RMD Accounting & Tax Services Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="ml-3 flex flex-col">
        <div className="text-xl font-bold text-primary whitespace-nowrap">
          RMD
        </div>
        <div className="text-sm text-gray-600 whitespace-nowrap">
          Accounting & Tax Services
        </div>
      </div>
    </div>
  );
}
