import { motion } from "framer-motion";
import { ListChecks, BellRing, BarChart3 } from "lucide-react";

const solutions = [
  { icon: ListChecks, title: "Track All Subscriptions", desc: "Add every subscription to your dashboard and never lose track." },
  { icon: BellRing, title: "Get Renewal Alerts", desc: "Receive timely reminders before any subscription renews." },
  { icon: BarChart3, title: "Monthly Spending Analytics", desc: "See exactly where your money goes with clear visual reports." },
];

const SolutionSection = () => (
  <section className="py-20 lg:py-28 bg-secondary/30">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Take Back Control of Your <span className="text-primary">Spending</span>
        </h2>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {solutions.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center hover:shadow-elevated transition-shadow duration-300"
          >
            <div className="w-14 h-14 rounded-2xl bg-accent flex items-center justify-center mx-auto mb-5">
              <s.icon className="text-accent-foreground" size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{s.title}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionSection;
