import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Ustadhah Jeseena has completely transformed my daughter's relationship with the Quran. What used to be a struggle is now the highlight of her day. Her gentle, patient approach is exactly what we were looking for.",
      author: "Aisha M.",
      role: "Parent of a 9-year-old",
    },
    {
      quote: "As an adult beginner, I was incredibly intimidated to start learning Tajweed. She made me feel completely at ease from day one. I've progressed faster in six months than I did in years of self-study.",
      author: "Zahra K.",
      role: "Adult Student",
    },
    {
      quote: "Her Hifdh program is rigorous but never overwhelming. She understands the psychology of memorization perfectly and knows exactly when to push and when to review. My son is thriving.",
      author: "Fatima S.",
      role: "Parent of a Hifdh student",
    },
  ];

  return (
    <section id="testimonials" className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Student Stories</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Words from the Community
          </h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background p-8 rounded-2xl shadow-sm border border-border/50 flex flex-col"
            >
              <div className="flex text-amber-400 mb-6">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-8 flex-grow">
                "{testimonial.quote}"
              </p>
              <div>
                <p className="font-bold text-foreground">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{testimonial.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
