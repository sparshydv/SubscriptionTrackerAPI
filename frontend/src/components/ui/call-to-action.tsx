import { MoveRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

function CTA() {
  const navigate = useNavigate();
  return (
    <div className="w-full py-20 lg:py-40">
      <div className="container mx-auto">
        <div className="flex flex-col text-center bg-muted rounded-md p-4 lg:p-14 gap-8 items-center">
          <div>
            <Badge>Get started</Badge>
          </div>
          <div className="flex flex-col gap-2">
            <h3 className="text-3xl md:text-5xl tracking-tighter max-w-xl font-regular">
              Stop Losing Money to Forgotten Subscriptions
            </h3>
            <p className="text-lg leading-relaxed tracking-tight text-muted-foreground max-w-xl">
              Join thousands of users who are saving money with SubTracker.
            </p>
          </div>
          <div className="flex flex-row gap-4">
            <Button 
              variant="outline"
              onClick={() => navigate("/sign-in")}
            >
              Login
            </Button>
            <Button 
              className="gap-4"
              onClick={() => navigate("/sign-up")}
            >
              Start Tracking Free <MoveRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export { CTA };
