import { cn } from "@/lib/utils";

interface LogoProps {
  className?: string;
  iconClassName?: string;
  showText?: boolean;
  size?: "sm" | "md" | "lg" | "xl";
}

export function Logo({ className, iconClassName, showText = true, size = "md" }: LogoProps) {
  const sizes = {
    sm: "w-6 h-6 text-xs",
    md: "w-8 h-8 text-sm",
    lg: "w-10 h-10 text-base",
    xl: "w-12 h-12 text-lg",
  };

  return (
    <div className={cn("flex items-center gap-2 font-heading font-bold text-foreground", className)}>
      <div 
        className={cn(
          "rounded-lg bg-primary flex items-center justify-center text-primary-foreground font-bold",
          sizes[size],
          iconClassName
        )}
      >
        S
      </div>
      {showText && <span>SubTracker</span>}
    </div>
  );
}
