import { motion } from "framer-motion";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  { q: "Is this free to use?", a: "Yes! SubTracker is completely free. We believe everyone should have access to tools that help them save money." },
  { q: "How are renewal alerts sent?", a: "We send renewal alerts via email and in-app notifications days before each subscription renews, so you have time to decide." },
  { q: "Is my financial data secure?", a: "Absolutely. We use industry-standard encryption and never share your data with third parties. Your privacy is our top priority." },
  { q: "Can I cancel anytime?", a: "Since SubTracker is free, there's nothing to cancel! You can delete your account and data at any time." },
];

const FAQSection = () => (
  <section id="faq" className="py-20 lg:py-28">
    <div className="container mx-auto px-4 lg:px-8 max-w-2xl">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-foreground">
          Frequently Asked <span className="text-foreground">Questions</span>
        </h2>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <Accordion type="single" collapsible className="space-y-3">
          {faqs.map((faq, i) => (
            <AccordionItem key={i} value={`faq-${i}`} className="glass-card px-6 border-none">
              <AccordionTrigger className="text-left font-heading font-semibold text-foreground hover:no-underline py-5">
                {faq.q}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.a}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </motion.div>
    </div>
  </section>
);

export default FAQSection;
