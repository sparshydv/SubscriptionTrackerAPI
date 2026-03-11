import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { CURRENCIES, FREQUENCIES, CATEGORIES } from "@/types";
import type { CreateSubscriptionPayload } from "@/types";
import { Loader2 } from "lucide-react";

const schema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  price: z.coerce.number().positive("Price must be positive"),
  currency: z.enum(["USD", "EUR", "GBP", "INR", "JPY", "CNY"]),
  frequency: z.enum(["daily", "weekly", "monthly", "yearly"]),
  category: z.enum(["entertainment", "education", "productivity", "health", "other"]),
  paymentMethod: z.string().trim().min(1, "Payment method is required").max(100),
  startDate: z.string().min(1, "Start date is required").refine((d) => new Date(d) <= new Date(), "Start date cannot be in the future"),
});

type FormData = z.infer<typeof schema>;

interface Props {
  defaultValues?: Partial<CreateSubscriptionPayload>;
  onSubmit: (data: CreateSubscriptionPayload) => Promise<void>;
  isLoading?: boolean;
  submitLabel?: string;
}

export function SubscriptionForm({ defaultValues, onSubmit, isLoading, submitLabel = "Save" }: Props) {
  const { register, handleSubmit, setValue, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      name: defaultValues?.name ?? "",
      price: defaultValues?.price ?? 0,
      currency: defaultValues?.currency ?? "USD",
      frequency: defaultValues?.frequency ?? "monthly",
      category: defaultValues?.category ?? "other",
      paymentMethod: defaultValues?.paymentMethod ?? "",
      startDate: defaultValues?.startDate ? defaultValues.startDate.split("T")[0] : "",
    },
  });

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5 max-w-lg">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" {...register("name")} placeholder="e.g. Netflix" className="mt-1" />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name.message}</p>}
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label htmlFor="price">Price</Label>
          <Input id="price" type="number" step="0.01" {...register("price")} className="mt-1" />
          {errors.price && <p className="text-sm text-destructive mt-1">{errors.price.message}</p>}
        </div>
        <div>
          <Label>Currency</Label>
          <Select value={watch("currency")} onValueChange={(v) => setValue("currency", v as any)}>
            <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
            <SelectContent>
              {CURRENCIES.map((c) => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-4">
        <div>
          <Label>Frequency</Label>
          <Select value={watch("frequency")} onValueChange={(v) => setValue("frequency", v as any)}>
            <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
            <SelectContent>
              {FREQUENCIES.map((f) => <SelectItem key={f.value} value={f.value}>{f.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label>Category</Label>
          <Select value={watch("category")} onValueChange={(v) => setValue("category", v as any)}>
            <SelectTrigger className="mt-1"><SelectValue /></SelectTrigger>
            <SelectContent>
              {CATEGORIES.map((c) => <SelectItem key={c.value} value={c.value}>{c.label}</SelectItem>)}
            </SelectContent>
          </Select>
        </div>
      </div>

      <div>
        <Label htmlFor="paymentMethod">Payment Method</Label>
        <Input id="paymentMethod" {...register("paymentMethod")} placeholder="e.g. Visa ending 4242" className="mt-1" />
        {errors.paymentMethod && <p className="text-sm text-destructive mt-1">{errors.paymentMethod.message}</p>}
      </div>

      <div>
        <Label htmlFor="startDate">Start Date</Label>
        <Input id="startDate" type="date" {...register("startDate")} className="mt-1" max={new Date().toISOString().split("T")[0]} />
        {errors.startDate && <p className="text-sm text-destructive mt-1">{errors.startDate.message}</p>}
      </div>

      <Button type="submit" disabled={isLoading} className="w-full">
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {submitLabel}
      </Button>
    </form>
  );
}
