import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { SubscriptionForm } from "@/components/SubscriptionForm";
import { subscriptionService } from "@/lib/subscription-service";
import { useToast } from "@/hooks/use-toast";
import type { CreateSubscriptionPayload } from "@/types";
import axios from "axios";

export default function NewSubscription() {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleSubmit = async (data: CreateSubscriptionPayload) => {
    setLoading(true);
    try {
      await subscriptionService.create(data);
      toast({ title: "Subscription created" });
      navigate("/subscriptions");
    } catch (err) {
      const msg = axios.isAxiosError(err) ? err.response?.data?.error || err.response?.data?.message || "Failed" : "Something went wrong";
      toast({ title: "Error", description: msg, variant: "destructive" });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">New Subscription</h1>
        <p className="text-sm text-muted-foreground mt-1">Track a new subscription</p>
      </div>
      <SubscriptionForm onSubmit={handleSubmit} isLoading={loading} submitLabel="Create Subscription" />
    </div>
  );
}
