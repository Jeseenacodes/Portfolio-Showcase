import { motion } from "framer-motion";
import { Star } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      quote: "Ustadha Jeseena always prepared and answered all questions. She provides easy to remember charts, other resources and discussion summary emailed to us which is really helpful especially if I missed any session.",
      author: "Hafsa Qadri",
    },
    {
      quote: "She explains the work very well, makes sure we understand everything, tries to make it simpler for us, sends us discussion notes and extra examples to practice on, and makes sure we all participate in class.",
      author: "Sumaya Dindar",
    },
    {
      quote: "My Ustadha goes over each and every concept and explains in detail until the entire class understands. She is very patient and very approachable — we do not have to think twice before asking any question. I just love the way she keeps us engaged.",
      author: "Sajeedha Reshmi",
    },
    {
      quote: "Sr Jeseena's way of breaking each topic down step by step like solving a calculus problem is extremely helpful.",
      author: "Samina Ashraf",
    },
    {
      quote: "The gems she shares at the end of class are really one of my boosters to keep studying. It helps me revise the material learned and clears up any misunderstandings.",
      author: "Nur Amirah",
    },
    {
      quote: "Passionate and full of energy. It is something to know, it is something else to be able to share effectively. She does not mind going a little extra time to help us.",
      author: "Nassimath Gbaguidi",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              className="bg-background p-7 rounded-2xl shadow-sm border border-border/50 flex flex-col"
            >
              <div className="flex text-amber-400 mb-5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} fill="currentColor" />
                ))}
              </div>
              <p className="text-foreground/80 italic mb-6 flex-grow leading-relaxed text-sm">
                "{testimonial.quote}"
              </p>
              <p className="font-bold text-foreground text-sm">{testimonial.author}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
