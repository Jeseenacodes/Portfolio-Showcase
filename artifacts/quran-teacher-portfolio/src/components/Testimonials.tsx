import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    quote: "I look forward to my recitation class everyday. A good start to my days. Alhamdulillah.",
    author: "Maryati Dahim",
  },
  {
    quote: "You have been helping me throughout — may Allah the Most Merciful bless you, Ameen. I look forward to these classes. My desire to recite better has increased. Alhamdulillah.",
    author: "Sofia Sultan",
  },
  {
    quote: "Teacher is very nice and also straightforward, and she explains rules in a way that is not confusing, but easy to understand and comprehend. She also gives regular reminders of grammar rules and asks us to repeat things when we seem unsure, or when we do not use proper grammar, which is very helpful. Thank you so much for being such a great teacher!",
    author: "Zoha Sadik",
  },
  {
    quote: "Teacher Jeseena has taught my daughter in such an interesting way and with affection and constant encouragement that Hanya has started reading from the Quran in three months. We like the teacher's approach and methodology. Jazakallah khair!",
    author: "Azmy (Student's Mom)",
  },
  {
    quote: "You are already doing more than your share. I am very satisfied with the format and pace of the class, Alhamdulillah.",
    author: "Heena Amin",
  },
  {
    quote: "Jeseena takes her time and reinforces the rules which I really appreciate. Her teaching approach is systematic and I like how she is building up my tajweed gradually. I am really happy with Jeseena as my teacher and her soft, kind approach. It is a joy to learn tajweed with Jeseena!",
    author: "Rehana",
  },
  {
    quote: "Alhamdulillah! Blessed to have her as a teacher. She is so dedicated to her work and teaching. May Allah swt bless her for all the efforts she makes to help us understand and read the Quran.",
    author: "Aisha Naqvi",
  },
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

function getInitials(name: string) {
  return name
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}


export function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);

  function goTo(index: number) {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  }

  function prev() {
    if (current > 0) goTo(current - 1);
  }

  function next() {
    if (current < testimonials.length - 1) goTo(current + 1);
  }

  const t = testimonials[current];

  return (
    <section id="testimonials" className="py-24 bg-primary/5 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">
            Student Stories
          </h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Words from the Community
          </h3>
        </div>

        <div className="max-w-xl mx-auto">
          {/* Page card */}
          <div className="rounded-3xl overflow-hidden shadow-md border border-border/40 bg-background">
            {/* Coloured header */}
            <div className="bg-primary px-8 py-7 text-center">
              <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center mx-auto mb-3 text-white font-bold text-lg">
                {getInitials(t.author)}
              </div>
              <h4 className="text-white font-serif text-xl font-bold">{t.author}</h4>
              <p className="text-white/70 text-xs mt-1 tracking-wide uppercase">Student Reflection</p>
            </div>

            {/* Quote body */}
            <div className="px-8 py-8 min-h-[200px] flex items-center">
              <AnimatePresence mode="wait" custom={direction}>
                <motion.p
                  key={current}
                  custom={direction}
                  initial={{ opacity: 0, x: direction * 30 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: direction * -30 }}
                  transition={{ duration: 0.3 }}
                  className="text-foreground/80 italic leading-relaxed text-base text-center"
                >
                  &ldquo;{t.quote}&rdquo;
                </motion.p>
              </AnimatePresence>
            </div>

            {/* Navigation footer */}
            <div className="flex items-center justify-between px-6 py-4 border-t border-border/30 bg-muted/20">
              <button
                onClick={prev}
                disabled={current === 0}
                className="flex items-center gap-1 text-sm font-medium text-foreground/60 hover:text-foreground disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
              >
                <ChevronLeft size={16} />
                Previous
              </button>

              <span className="text-xs text-muted-foreground">
                {current + 1} / {testimonials.length}
              </span>

              <button
                onClick={next}
                disabled={current === testimonials.length - 1}
                className="flex items-center gap-1 text-sm font-medium text-white bg-primary hover:bg-primary/90 disabled:opacity-30 disabled:cursor-not-allowed px-4 py-2 rounded-xl transition-colors"
              >
                Next
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
