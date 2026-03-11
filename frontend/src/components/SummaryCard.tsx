import type { LucideIcon } from "lucide-react";

interface SummaryCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  subtitle?: string;
}

export function SummaryCard({ title, value, icon: Icon, subtitle }: SummaryCardProps) {
  return (
    <div className="rounded-lg border border-border bg-card p-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <p className="text-sm font-medium text-muted-foreground">{title}</p>
        <Icon className="h-5 w-5 text-primary/70" />
      </div>
      <p className="mt-2 text-3xl font-bold tracking-tight text-card-foreground">{value}</p>
      {subtitle && <p className="mt-1 text-xs text-muted-foreground">{subtitle}</p>}
    </div>
  );
}
