import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Contact() {
  const GOOGLE_FORM_URL = "https://forms.gle/i2BirpGKRUDUson6A";

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">

          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Get in Touch</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              Start your Quran journey today.
            </h3>
            <p className="text-foreground/80 mb-10 leading-relaxed">
              Whether you have questions about the programs, want to discuss a customised learning plan, or are ready to book your free consultation — I would love to hear from you. I aim to respond within 24–48 hours.
            </p>

            <div className="space-y-6">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Email</h4>
                  <a
                    href="mailto:salsabeelainjannah@gmail.com"
                    className="text-muted-foreground hover:text-primary transition-colors"
                    data-testid="link-contact-email"
                  >
                    salsabeelainjannah@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">WhatsApp</h4>
                  <p className="text-muted-foreground">+1 (111) 123-0000</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-4 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-foreground">Location</h4>
                  <p className="text-muted-foreground">Online Worldwide (Based in PST Timezone)</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col items-center justify-center bg-card p-10 rounded-2xl shadow-sm border border-border text-center"
          >
            <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-6">
              <Mail size={32} strokeWidth={1.5} />
            </div>
            <h4 className="text-2xl font-serif font-bold text-foreground mb-3">
              Ready to reach out?
            </h4>
            <p className="text-foreground/70 mb-8 leading-relaxed max-w-sm">
              Click below to open the contact form. Share a little about yourself and your goals, and I will be in touch soon, insha'Allah.
            </p>
            <Button
              asChild
              size="lg"
              className="rounded-full px-10 py-6 text-lg font-serif"
              data-testid="button-contact-form"
            >
              <a href={GOOGLE_FORM_URL} target="_blank" rel="noopener noreferrer">
                Contact Me
                <ExternalLink size={18} className="ml-2" />
              </a>
            </Button>
            <p className="text-xs text-muted-foreground mt-5">
              Opens in a new tab · Response within 24–48 hours
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
