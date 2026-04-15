import { motion } from "framer-motion";
import { BookOpen, GraduationCap, Heart, Clock } from "lucide-react";

export function About() {
  const stats = [
    { icon: GraduationCap, label: "Alimiyya Graduate", desc: "Rigorous Islamic scholarship" },
    { icon: BookOpen, label: "Hafidha", desc: "Memorized the noble Quran" },
    { icon: Clock, label: "10+ Years", desc: "Teaching experience" },
    { icon: Heart, label: "Compassionate", desc: "Student-centered approach" },
  ];

  return (
    <section id="about" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <img 
                src="/images/about-quran.png" 
                alt="Open Quran on wooden stand" 
                className="w-full h-auto object-cover aspect-[4/3]"
              />
            </div>
            
            <div className="absolute -bottom-8 -right-8 bg-background p-6 rounded-xl shadow-lg border border-border hidden md:block max-w-xs">
              <p className="font-serif italic text-foreground/80">
                "The best among you are those who learn the Quran and teach it."
              </p>
              <p className="text-xs text-muted-foreground mt-2">— Sahih al-Bukhari</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">About the Teacher</h2>
            <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-6">
              A decade of nurturing a love for Allah's words.
            </h3>
            
            <div className="space-y-4 text-foreground/80 mb-8 leading-relaxed">
              <p>Assalamu alaikum. I'm Jeseena, and my life's passion is connecting hearts with the Quran. Since graduating with my Alimiyya degree and completing my Hifdh, I have dedicated nearly a decade to teaching students of all ages.</p>
              <p>
                My teaching philosophy is simple: the Quran should be a source of joy, peace, and profound connection, not stress or anxiety. Whether I'm guiding a young child through their first Arabic letters or helping an adult perfect their Tajweed, I focus on building a warm, encouraging environment where mistakes are simply steps in the learning journey.
              </p>
              <p>
                I am also the proud creator of the <a href="https://littlenoories.app" target="_blank" rel="noopener noreferrer" className="text-primary font-medium hover:underline">Little Noories app</a>, a side project born from my desire to make Islamic learning engaging and accessible for young minds outside of class hours.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6 mt-10">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-2">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mb-2">
                    <stat.icon size={24} strokeWidth={1.5} />
                  </div>
                  <h4 className="font-bold text-foreground">{stat.label}</h4>
                  <p className="text-sm text-foreground/70">{stat.desc}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
