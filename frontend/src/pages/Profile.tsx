import { useAuth } from "@/contexts/AuthContext";
import { format } from "date-fns";
import { User } from "lucide-react";

export default function Profile() {
  const { user } = useAuth();

  if (!user) return null;

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-foreground">Profile</h1>
        <p className="text-sm text-muted-foreground mt-1">Your account details</p>
      </div>

      <div className="rounded-lg border border-border bg-card p-6 max-w-md">
        <div className="flex items-center gap-4 mb-6">
          <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
            <User className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold text-card-foreground">{user.name}</p>
            <p className="text-sm text-muted-foreground">{user.email}</p>
          </div>
        </div>
        <div className="space-y-3 text-sm">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Member since</span>
            <span className="text-card-foreground">{format(new Date(user.createdAt), "MMM d, yyyy")}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
