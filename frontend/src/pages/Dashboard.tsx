import { useEffect, useState } from "react";
import { CreditCard, DollarSign, CalendarClock, Loader2 } from "lucide-react";
import { SummaryCard } from "@/components/SummaryCard";
import { subscriptionService } from "@/lib/subscription-service";
import type { Subscription } from "@/types";
import { CURRENCY_SYMBOLS } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { Link } from "react-router-dom";
import { format, isBefore, addDays } from "date-fns";
import { Badge } from "@/components/ui/badge";

export default function Dashboard() {
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    subscriptionService.getAll()
      .then((res) => setSubs(res.data.data ?? []))
      .catch(() => toast({ title: "Failed to load subscriptions", variant: "destructive" }))
      .finally(() => setLoading(false));
  }, [toast]);

  const active = subs.filter((s) => s.status === "active");
  const monthlyTotal = active.reduce((sum, s) => {
    let monthly = s.price;
    if (s.frequency === "daily") monthly = s.price * 30;
    else if (s.frequency === "weekly") monthly = s.price * 4;
    else if (s.frequency === "yearly") monthly = s.price / 12;
    return sum + monthly;
  }, 0);

  const upcoming = active.filter((s) =>
    s.renewalDate && isBefore(new Date(s.renewalDate), addDays(new Date(), 30))
  );

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="space-y-8 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Dashboard</h1>
        <p className="text-sm text-muted-foreground mt-1">Your subscription overview</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-3">
        <SummaryCard title="Active Subscriptions" value={active.length} icon={CreditCard} />
        <SummaryCard title="Monthly Cost" value={`$${monthlyTotal.toFixed(2)}`} icon={DollarSign} subtitle="Estimated in USD" />
        <SummaryCard title="Upcoming Renewals" value={upcoming.length} icon={CalendarClock} subtitle="Next 30 days" />
      </div>

      <div>
        <h2 className="text-lg font-semibold text-foreground mb-4">Upcoming Renewals</h2>
        {upcoming.length === 0 ? (
          <p className="text-sm text-muted-foreground">No upcoming renewals in the next 30 days.</p>
        ) : (
          <div className="space-y-2">
            {upcoming.map((s) => (
              <Link key={s._id} to={`/subscriptions/${s._id}`} className="flex items-center justify-between rounded-lg border border-border bg-card p-4 hover:bg-accent/30 transition-colors">
                <div>
                  <p className="font-medium text-card-foreground">{s.name}</p>
                  <p className="text-xs text-muted-foreground">{format(new Date(s.renewalDate), "MMM d, yyyy")}</p>
                </div>
                <Badge variant="secondary">{CURRENCY_SYMBOLS[s.currency]}{s.price}</Badge>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
