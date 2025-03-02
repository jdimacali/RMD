import Image from "next/image";
import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: 32,
  md: 48,
  lg: 64,
};

export function Logo({ className, showText = true, size = "md" }: LogoProps) {
  return (
    <div className={cn("flex items-center", className)}>
      <div
        className="relative"
        style={{ width: sizes[size], height: sizes[size] }}
      >
        <Image
          src="/logo/logo-transparent-svg.svg"
          alt="RMD Accounting & Tax Services Logo"
          fill
          className="object-contain"
          priority
        />
      </div>
      {showText && (
        <div className="ml-2">
          <span className="text-2xl font-bold text-primary">RMD</span>
          <span className="text-lg text-secondary ml-2">Accounting & Tax</span>
        </div>
      )}
    </div>
  );
}
