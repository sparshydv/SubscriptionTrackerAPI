import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const FinalCTASection = () => {
  const navigate = useNavigate();
  return (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-3xl mx-auto text-center gradient-cta rounded-3xl p-12 lg:p-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground">
          Stop Losing Money to Forgotten Subscriptions
        </h2>
        <p className="mt-4 text-primary-foreground/80 text-lg">
          Join thousands of users who are saving money with SubTracker.
        </p>
        <Button
          variant="outline"
          size="lg"
          className="mt-8 rounded-xl py-6 px-10 text-base bg-primary-foreground text-foreground border-none hover:bg-primary-foreground/90 hover:text-foreground"
          onClick={() => navigate("/sign-up")}
        >
          Start Tracking Free
        </Button>
      </motion.div>
    </div>
  </section>
  );
};

export default FinalCTASection;
