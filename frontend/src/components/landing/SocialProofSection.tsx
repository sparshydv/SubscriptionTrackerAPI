import { motion } from "framer-motion";
import { CreditCard, Bell, TrendingDown } from "lucide-react";

const items = [
  { icon: CreditCard, label: "Subscription Tracking", desc: "All in one place" },
  { icon: Bell, label: "Renewal Reminders", desc: "Never miss a date" },
  { icon: TrendingDown, label: "Spending Insights", desc: "See where money goes" },
];

const SocialProofSection = () => (
  <section className="py-16 bg-secondary/50">
    <div className="container mx-auto px-4 lg:px-8 text-center">
      <p className="text-sm font-medium text-muted-foreground tracking-wide uppercase">
        Helping users take control of their subscriptions
      </p>
      <div className="mt-10 grid sm:grid-cols-3 gap-6">
        {items.map((item, i) => (
          <motion.div
            key={item.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-6 text-center"
          >
            <div className="w-12 h-12 rounded-xl bg-accent flex items-center justify-center mx-auto mb-4">
              <item.icon className="text-accent-foreground" size={22} />
            </div>
            <h3 className="font-heading font-semibold text-foreground">{item.label}</h3>
            <p className="text-sm text-muted-foreground mt-1">{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SocialProofSection;
