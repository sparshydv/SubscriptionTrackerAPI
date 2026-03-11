import { motion } from "framer-motion";
import { Bell, PieChart, CalendarDays, Zap, Globe, FileText } from "lucide-react";

const features = [
  { icon: Bell, title: "Renewal Reminders", desc: "Get notified days before any subscription renews." },
  { icon: PieChart, title: "Expense Analytics", desc: "Visual breakdowns of your subscription spending." },
  { icon: CalendarDays, title: "Subscription Calendar", desc: "See all upcoming charges on a calendar view." },
  { icon: Zap, title: "Fast Dashboard", desc: "Lightning-fast interface for instant insights." },
  { icon: Globe, title: "Multi-Platform Tracking", desc: "Track subscriptions across all your services." },
  { icon: FileText, title: "Clean Reports", desc: "Export clean spending reports anytime." },
];

const FeaturesGridSection = () => (
  <section id="features" className="py-20 lg:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Everything You Need to <span className="text-primary">Save Money</span>
        </h2>
      </motion.div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {features.map((f, i) => (
          <motion.div
            key={f.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.05 }}
            className="glass-card p-6 hover:shadow-elevated transition-all duration-300 group"
          >
            <div className="w-11 h-11 rounded-xl bg-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <f.icon className="text-accent-foreground" size={20} />
            </div>
            <h3 className="font-heading font-semibold text-foreground">{f.title}</h3>
            <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{f.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default FeaturesGridSection;
