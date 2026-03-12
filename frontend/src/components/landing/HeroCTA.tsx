import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const prefetchSignUp = () => import("@/pages/SignUp");

const HeroCTA = () => {
  const navigate = useNavigate();
  return (
    <section className="py-12 flex flex-col items-center justify-center gradient-hero">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col items-center gap-6"
      >
        <Button 
          size="lg" 
          className="rounded-full px-12 py-7 text-lg font-bold bg-primary text-primary-foreground hover:bg-primary/90 shadow-soft transition-all hover:scale-105 active:scale-95"
          onClick={() => navigate("/sign-up")}
          onMouseEnter={prefetchSignUp}
        >
          Start Tracking Free
        </Button>
        <p className="text-muted-foreground text-sm font-medium">
          No credit card required • Free forever
        </p>
      </motion.div>
    </section>
  );
};

export default HeroCTA;
