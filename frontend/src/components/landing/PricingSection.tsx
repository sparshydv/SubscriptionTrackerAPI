import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useNavigate } from "react-router-dom";

const features = [
  "Track unlimited subscriptions",
  "Renewal reminders",
  "Spending analytics dashboard",
  "Export reports",
  "Multi-platform tracking",
];

const PricingSection = () => {
  const navigate = useNavigate();
  return (
  <section id="pricing" className="py-20 lg:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Simple, <span className="text-primary">Free</span> Pricing
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Everything you need to track your subscriptions — completely free.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-md mx-auto glass-card p-6 md:p-8 text-center hover:shadow-elevated transition-shadow duration-300"
      >
        <p className="text-sm font-medium text-primary tracking-wide uppercase">Free Plan</p>
        <div className="mt-4 flex items-baseline justify-center gap-1">
          <span className="text-4xl md:text-5xl font-bold font-heading text-foreground">$0</span>
          <span className="text-muted-foreground">/month</span>
        </div>
        <ul className="mt-8 space-y-4 text-left">
          {features.map((f) => (
            <li key={f} className="flex items-center gap-3 text-sm text-foreground">
              <Check className="text-primary shrink-0" size={18} />
              {f}
            </li>
          ))}
        </ul>
        <Button 
          variant="outline" 
          size="lg" 
          className="w-full mt-8 rounded-full py-6 border-2 border-primary bg-white text-foreground hover:bg-slate-50 font-semibold transition-all"
          onClick={() => navigate("/sign-up")}
        >
          Start Tracking Free
        </Button>
      </motion.div>
    </div>
  </section>
  );
};

export default PricingSection;
