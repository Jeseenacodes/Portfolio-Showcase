import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "It helps me to revise the material learned in the class and anything that I missed. Miss Jeseena also really helps me to clear up any misunderstanding regarding the material. And the gems that she shares at the end of class are really one of my boosters to keep studying.",
    author: "Nur Amirah",
    featured: false,
  },
  {
    quote: "My Ustadha Jeseena is an excellent teacher, Masha Allah. She explains the work very well, makes sure we understand everything, tries to make it simpler for us, sends us discussion notes and extra examples to practice on, and makes sure we all participate in class.",
    author: "Sumaya Dindar",
    featured: true,
  },
  {
    quote: "In class it feels like I am in direct contact with our Teacher. She is very supportive. I can ask anything related. I always try my best to be present in discussion class because it clarifies my doubts effectively. Best part is doing i'rab in the Quran during discussion.",
    author: "Nighat Yasmin",
    featured: false,
  },
  {
    quote: "Her enthusiasm to deliver the content. She is well prepared and well acquainted.",
    author: "Shiuna Mohamed",
    featured: false,
  },
  {
    quote: "Sis Jeseena has been very helpful with notes and managed to collate all information beautifully and easy to understand. She engages everyone to get involved and makes time to explain so everyone understands. My favorite is how organised she is in her notes — it makes the thought process a lot easier for all of us.",
    author: "Aisha Shaharuddin",
    featured: true,
  },
  {
    quote: "Ustadha Jeseena is always prepared and answers all questions. She provides easy to remember charts, other resources, and discussion summaries emailed to us — which is really helpful especially if I missed any session.",
    author: "Hafsa Qadri",
    featured: false,
  },
  {
    quote: "My Ustadha goes over each and every concept and explains in detail until she makes sure the entire class understands well. She is very patient and very approachable — we do not have to think twice before posting any question. She understands our concerns and is very motivating. I just love the way she handles the class and keeps us engaged with lots of tips.",
    author: "Sajeedha Reshmi",
    featured: true,
  },
  {
    quote: "Sister Jeseena really checks each person's response and when you have answered incorrectly, she persists — directing her attention to you until you understand. She did a revision session for almost 3 hours and that was remarkable. It made me see that she really goes the extra mile. May Allah accept her efforts.",
    author: "Miriam Patel",
    featured: false,
  },
  {
    quote: "We do a pretty good revision of what we have studied in class. It is an interactive session and any doubts asked are cleared then and there. It is very helpful and I like Ustadah Jeseena's style of teaching. Moreover we also get to learn the gems sometimes.",
    author: "Afrin Mujawar",
    featured: false,
  },
  {
    quote: "One thing that struck me is her long opening du'a after the classic ones. Absolutely put me at ease. She always made us practice little extra vocabulary related to what we are studying and gave her own examples. She would not just jump to the workbook. And she did her own discussion notes. She always reviewed old concepts so we would not forget. Well — she knows her thing.",
    author: "Nassimath Gbaguidi",
    featured: true,
  },
  {
    quote: "The patience and the generosity of Jeseena are precious. May Allah reward her in this life and the akhira. Ameen.",
    author: "Nadia",
    featured: false,
  },
  {
    quote: "Sr Jeseena's way of breaking each topic down step by step — like solving a calculus problem — is extremely helpful.",
    author: "Samina Ashraf",
    featured: false,
  },
  {
    quote: "She is just awesome. Passionate and full of energy. It is something to know, it is something else to be able to share effectively. She does not mind going a little extra time to help us.",
    author: "Nassimath Gbaguidi",
    featured: false,
  },
];

function QuoteCard({
  quote,
  author,
  featured,
  index,
}: {
  quote: string;
  author: string;
  featured: boolean;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.55, delay: (index % 4) * 0.07 }}
      className={`relative flex flex-col ${
        featured
          ? "bg-primary/8 border-primary/30"
          : "bg-background border-border/40"
      } border rounded-2xl p-6 md:p-8 shadow-sm`}
    >
      <span
        className="font-serif text-primary/20 text-7xl leading-none select-none absolute top-3 left-5"
        aria-hidden="true"
      >
        &ldquo;
      </span>
      <p
        className={`relative z-10 italic leading-relaxed text-foreground/80 mt-6 mb-6 ${
          featured ? "text-base md:text-lg" : "text-sm md:text-base"
        }`}
      >
        {quote}
      </p>
      <div className="mt-auto flex items-center gap-3">
        <div className="h-px flex-1 bg-border/40" />
        <p className="font-semibold text-foreground/90 text-sm whitespace-nowrap">
          {author}
        </p>
      </div>
    </motion.div>
  );
}

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="py-24 bg-primary/5 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
            Student Stories
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Words from the Community
          </h3>
          <p className="text-muted-foreground text-sm">
            A collection of reflections from students across different programs and backgrounds.
          </p>
        </div>

        <div className="max-w-6xl mx-auto columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((t, i) => (
            <div key={i} className="break-inside-avoid mb-6">
              <QuoteCard {...t} index={i} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
