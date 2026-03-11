import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Plus, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { subscriptionService } from "@/lib/subscription-service";
import type { Subscription } from "@/types";
import { CURRENCY_SYMBOLS } from "@/types";
import { useToast } from "@/hooks/use-toast";

const statusColor: Record<string, string> = {
  active: "bg-success/15 text-success border-success/30",
  cancelled: "bg-muted text-muted-foreground border-border",
  expired: "bg-destructive/15 text-destructive border-destructive/30",
};

export default function Subscriptions() {
  const [subs, setSubs] = useState<Subscription[]>([]);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    subscriptionService.getAll()
      .then((res) => setSubs(res.data.data ?? []))
      .catch(() => toast({ title: "Failed to load subscriptions", variant: "destructive" }))
      .finally(() => setLoading(false));
  }, [toast]);

  if (loading) {
    return <div className="flex items-center justify-center h-64"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  }

  return (
    <div className="space-y-6 animate-fade-in">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground">Subscriptions</h1>
          <p className="text-sm text-muted-foreground mt-1">{subs.length} total</p>
        </div>
        <Button asChild>
          <Link to="/subscriptions/new"><Plus className="mr-2 h-4 w-4" />Add New</Link>
        </Button>
      </div>

      {subs.length === 0 ? (
        <div className="text-center py-16">
          <p className="text-muted-foreground">No subscriptions yet.</p>
          <Button asChild className="mt-4"><Link to="/subscriptions/new">Add your first</Link></Button>
        </div>
      ) : (
        <div className="grid gap-3">
          {subs.map((s) => (
            <Link key={s._id} to={`/subscriptions/${s._id}`} className="flex items-center justify-between rounded-lg border border-border bg-card p-4 hover:bg-accent/30 transition-colors">
              <div className="space-y-1">
                <p className="font-medium text-card-foreground">{s.name}</p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <span className="capitalize">{s.frequency}</span>
                  <span>·</span>
                  <span className="capitalize">{s.category}</span>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <span className="font-semibold text-card-foreground">{CURRENCY_SYMBOLS[s.currency]}{s.price}</span>
                <Badge variant="outline" className={statusColor[s.status] ?? ""}>{s.status}</Badge>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
