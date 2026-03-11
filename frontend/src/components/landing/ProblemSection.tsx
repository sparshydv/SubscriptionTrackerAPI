import { motion } from "framer-motion";
import { AlertCircle, DollarSign, EyeOff } from "lucide-react";

const problems = [
  { icon: EyeOff, title: "Forgotten Subscriptions", desc: "Services you signed up for months ago silently draining your bank account." },
  { icon: AlertCircle, title: "Surprise Charges", desc: "Unexpected renewal charges hitting your card when you least expect them." },
  { icon: DollarSign, title: "No Spending Clarity", desc: "No clear view of how much you're actually spending on subscriptions each month." },
];

const ProblemSection = () => (
  <section className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Subscriptions Are Silently <span className="text-foreground">Draining Your Money</span>
        </h2>
        <p className="mt-4 text-muted-foreground text-lg">
          The average person wastes $200+/month on subscriptions they forgot about.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-3 gap-8">
        {problems.map((p, i) => (
          <motion.div
            key={p.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="glass-card p-8 text-center"
          >
            <div className="w-14 h-14 rounded-2xl bg-destructive/10 flex items-center justify-center mx-auto mb-5">
              <p.icon className="text-destructive" size={24} />
            </div>
            <h3 className="font-heading text-lg font-semibold text-foreground">{p.title}</h3>
            <p className="text-muted-foreground mt-3 text-sm leading-relaxed">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ProblemSection;
