import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { subscriptionService } from "@/lib/subscription-service";
import type { Subscription, CreateSubscriptionPayload } from "@/types";
import { CURRENCY_SYMBOLS } from "@/types";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SubscriptionForm } from "@/components/SubscriptionForm";
import { DeleteDialog } from "@/components/DeleteDialog";
import { Loader2, ArrowLeft, Pencil, Trash2, XCircle } from "lucide-react";
import { format } from "date-fns";
import axios from "axios";

export default function SubscriptionDetail() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [sub, setSub] = useState<Subscription | null>(null);
  const [loading, setLoading] = useState(true);
  const [editing, setEditing] = useState(false);
  const [saving, setSaving] = useState(false);
  const [deleteOpen, setDeleteOpen] = useState(false);

  useEffect(() => {
    if (!id) return;
    subscriptionService.getById(id)
      .then((res) => setSub(res.data.data ?? null))
      .catch(() => { toast({ title: "Not found", variant: "destructive" }); navigate("/subscriptions"); })
      .finally(() => setLoading(false));
  }, [id, toast, navigate]);

  const handleUpdate = async (data: CreateSubscriptionPayload) => {
    if (!id) return;
    setSaving(true);
    try {
      const res = await subscriptionService.update(id, data);
      setSub(res.data.data ?? null);
      setEditing(false);
      toast({ title: "Updated" });
    } catch (err) {
      const msg = axios.isAxiosError(err) ? err.response?.data?.error || "Update failed" : "Error";
      toast({ title: msg, variant: "destructive" });
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async () => {
    if (!id) return;
    try {
      await subscriptionService.delete(id);
      toast({ title: "Deleted" });
      navigate("/subscriptions");
    } catch {
      toast({ title: "Delete failed", variant: "destructive" });
    }
  };

  const handleCancel = async () => {
    if (!id) return;
    try {
      const res = await subscriptionService.cancel(id);
      setSub(res.data.data ?? null);
      toast({ title: "Subscription cancelled" });
    } catch {
      toast({ title: "Cancel failed", variant: "destructive" });
    }
  };

  if (loading) return <div className="flex items-center justify-center h-64"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>;
  if (!sub) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      <Button variant="ghost" size="sm" onClick={() => navigate("/subscriptions")} className="text-muted-foreground">
        <ArrowLeft className="mr-1 h-4 w-4" /> Back
      </Button>

      {editing ? (
        <div>
          <h1 className="text-2xl font-bold tracking-tight text-foreground mb-4">Edit Subscription</h1>
          <SubscriptionForm defaultValues={sub} onSubmit={handleUpdate} isLoading={saving} submitLabel="Save Changes" />
          <Button variant="ghost" className="mt-3" onClick={() => setEditing(false)}>Cancel</Button>
        </div>
      ) : (
        <div>
          <div className="flex items-start justify-between">
            <div>
              <h1 className="text-2xl font-bold tracking-tight text-foreground">{sub.name}</h1>
              <Badge variant="outline" className="mt-2 capitalize">{sub.status}</Badge>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" onClick={() => setEditing(true)}><Pencil className="mr-1 h-3 w-3" /> Edit</Button>
              {sub.status === "active" && (
                <Button variant="outline" size="sm" onClick={handleCancel}><XCircle className="mr-1 h-3 w-3" /> Cancel</Button>
              )}
              <Button variant="outline" size="sm" onClick={() => setDeleteOpen(true)} className="text-destructive hover:text-destructive"><Trash2 className="mr-1 h-3 w-3" /> Delete</Button>
            </div>
          </div>

          <div className="mt-6 grid gap-4 sm:grid-cols-2">
            {[
              ["Price", `${CURRENCY_SYMBOLS[sub.currency]}${sub.price}`],
              ["Frequency", sub.frequency],
              ["Category", sub.category],
              ["Payment Method", sub.paymentMethod],
              ["Start Date", format(new Date(sub.startDate), "MMM d, yyyy")],
              ["Renewal Date", sub.renewalDate ? format(new Date(sub.renewalDate), "MMM d, yyyy") : "—"],
            ].map(([label, value]) => (
              <div key={label} className="rounded-lg border border-border bg-card p-4">
                <p className="text-xs text-muted-foreground">{label}</p>
                <p className="mt-1 font-medium capitalize text-card-foreground">{value}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <DeleteDialog open={deleteOpen} onOpenChange={setDeleteOpen} onConfirm={handleDelete} />
    </div>
  );
}
