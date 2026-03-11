import { motion } from "framer-motion";
import dashboardMockup from "@/assets/dashboard-mockup.png";

const ProductPreviewSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          A Dashboard That <span className="text-primary">Works For You</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          Everything you need at a glance — subscriptions, spending, and upcoming renewals.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="max-w-5xl mx-auto"
      >
        <div className="animate-float">
          <img
            src={dashboardMockup}
            alt="SubTracker product dashboard preview"
            className="w-full rounded-3xl shadow-elevated border border-border/30"
          />
        </div>
      </motion.div>
    </div>
  </section>
);

export default ProductPreviewSection;
