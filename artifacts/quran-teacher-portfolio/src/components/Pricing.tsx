import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mx-auto text-center"
        >
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Pricing</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
            Personalised to Your Journey
          </h3>
          <p className="text-foreground/80 text-lg leading-relaxed mb-10">
            Fees vary based on program and schedule. Get in touch for a personalised quote.
          </p>
          <Button
            onClick={scrollToContact}
            size="lg"
            className="rounded-full px-8"
            data-testid="button-pricing-enquire"
          >
            <Mail size={18} className="mr-2" />
            Get in Touch
          </Button>
        </motion.div>
      </div>
    </section>
  );
}
