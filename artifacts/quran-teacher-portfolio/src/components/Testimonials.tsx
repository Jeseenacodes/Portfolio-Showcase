import { useState } from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "It helps me to revise the material learned in the class and anything that I missed. Miss Jeseena also really helps me to clear up any misunderstanding regarding the material. And the gems that she shares at the end of class are really one of my boosters to keep studying.",
    author: "Nur Amirah",
  },
  {
    quote: "My Ustadha Jeseena is an excellent teacher, Masha Allah. She explains the work very well, makes sure we understand everything, tries to make it simpler for us, sends us discussion notes and extra examples to practice on, and makes sure we all participate in class.",
    author: "Sumaya Dindar",
  },
  {
    quote: "In class it feels like I am in direct contact with our Teacher. She is very supportive. I can ask anything. I always try my best to be present in discussion class because it clarifies my doubts effectively. Best part is doing i'rab in the Quran during discussion.",
    author: "Nighat Yasmin",
  },
  {
    quote: "Her enthusiasm to deliver the content. She is well prepared and well acquainted.",
    author: "Shiuna Mohamed",
  },
  {
    quote: "Sis Jeseena has been very helpful with notes and managed to collate all information beautifully and easy to understand. She engages everyone and makes time to explain so everyone understands. My favorite is how organised she is in her notes — it makes the thought process a lot easier for all of us.",
    author: "Aisha Shaharuddin",
  },
  {
    quote: "Ustadha Jeseena is always prepared and answers all questions. She provides easy to remember charts, other resources, and discussion summaries emailed to us — which is really helpful especially if I missed any session.",
    author: "Hafsa Qadri",
  },
  {
    quote: "My Ustadha goes over each and every concept in detail until the entire class understands. She is very patient and very approachable — we do not have to think twice before asking any question. She is very motivating and I just love the way she keeps us engaged.",
    author: "Sajeedha Reshmi",
  },
  {
    quote: "Sister Jeseena really checks each person's response and when you answer incorrectly, she persists until you understand. She did a revision session for almost 3 hours and that was remarkable. It made me see she truly goes the extra mile. May Allah accept her efforts.",
    author: "Miriam Patel",
  },
  {
    quote: "It is an interactive session and any doubts are cleared then and there. It is very helpful and I like Ustadah Jeseena's style of teaching. Moreover we also get to learn the gems sometimes.",
    author: "Afrin Mujawar",
  },
  {
    quote: "Her long opening du'a absolutely put me at ease. She always made us practice extra vocabulary and gave her own examples. She would not just jump to the workbook. She always reviewed old concepts so we would not forget. She knows her thing.",
    author: "Nassimath Gbaguidi",
  },
  {
    quote: "The patience and the generosity of Jeseena are precious. May Allah reward her in this life and the akhira. Ameen.",
    author: "Nadia",
  },
  {
    quote: "Sr Jeseena's way of breaking each topic down step by step — like solving a calculus problem — is extremely helpful.",
    author: "Samina Ashraf",
  },
  {
    quote: "She is just awesome. Passionate and full of energy. It is something to know, it is something else to be able to share effectively. She does not mind going a little extra time to help us.",
    author: "Nassimath Gbaguidi",
  },
];

function FlipCard({ quote, author, index }: { quote: string; author: string; index: number }) {
  const [flipped, setFlipped] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-30px" }}
      transition={{ duration: 0.4, delay: (index % 6) * 0.06 }}
      className="cursor-pointer"
      style={{ perspective: "1000px", height: "200px" }}
      onClick={() => setFlipped(!flipped)}
      aria-label={`Testimonial from ${author}. Click to ${flipped ? "hide" : "read"}.`}
    >
      <div
        className="relative w-full h-full transition-transform duration-500"
        style={{
          transformStyle: "preserve-3d",
          transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
        }}
      >
        {/* Front */}
        <div
          className="absolute inset-0 rounded-2xl border border-border/50 bg-background flex flex-col items-center justify-center gap-3 shadow-sm px-4"
          style={{ backfaceVisibility: "hidden" }}
        >
          <span className="font-serif text-primary/30 text-5xl leading-none select-none">&ldquo;</span>
          <p className="font-semibold text-foreground text-center text-sm">{author}</p>
          <p className="text-xs text-muted-foreground">tap to read</p>
        </div>

        {/* Back */}
        <div
          className="absolute inset-0 rounded-2xl border border-primary/25 bg-primary/8 flex flex-col justify-between p-5 shadow-sm overflow-hidden"
          style={{ backfaceVisibility: "hidden", transform: "rotateY(180deg)" }}
        >
          <p className="italic text-foreground/80 text-xs leading-relaxed line-clamp-6 flex-grow">
            &ldquo;{quote}&rdquo;
          </p>
          <div className="flex items-center gap-2 mt-3 pt-3 border-t border-border/30">
            <div className="h-px flex-1 bg-border/30" />
            <p className="text-xs font-semibold text-foreground/90 whitespace-nowrap">{author}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
            Student Stories
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Words from the Community
          </h3>
          <p className="text-muted-foreground text-sm">
            Tap any card to read a student's reflection.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 max-w-5xl mx-auto">
          {testimonials.map((t, i) => (
            <FlipCard key={i} {...t} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
