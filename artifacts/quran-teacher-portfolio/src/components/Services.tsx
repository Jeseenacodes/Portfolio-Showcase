import { motion } from "framer-motion";
import { Book, Mic2, MessageCircle, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export function Services() {
  const scrollToContact = (service: string) => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
    // In a real app, you might pre-fill the form based on the service selected
  };

  const services = [
    {
      title: "Hifdh Program",
      description: "Structured Quran memorization with personalized pace and regular revision strategies.",
      icon: Book,
      details: ["Custom memorization schedule", "Rigorous revision planning", "Focus on retention techniques", "Progress tracking"],
    },
    {
      title: "Recitation & Tajweed",
      description: "Perfect your recitation with the rules of Tajweed, from basic articulation to advanced rules.",
      icon: Mic2,
      details: ["Makharij correction", "Application of Tajweed rules", "Fluency and rhythm", "Ijaza track for advanced students"],
    },
    {
      title: "Tafseer & Understanding",
      description: "Delve into the meaning, context, and lessons of the Quranic verses to build a deeper connection.",
      icon: MessageCircle,
      details: ["Context of revelation", "Practical life lessons", "Thematic studies", "Interactive discussions"],
    },
    {
      title: "One-on-One Mentorship",
      description: "Dedicated spiritual mentorship and customized Islamic studies covering Fiqh, Seerah, or Hadith.",
      icon: Users,
      details: ["Flexible curriculum", "Private Q&A sessions", "Goal-oriented learning", "Holistic Islamic development"],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <section id="services" className="py-24 bg-background relative">
      {/* Subtle decorative background pattern */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, currentColor 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
      
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Offerings</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Structured Learning Paths
          </h3>
          <p className="text-foreground/80">
            Every student's journey with the Quran is unique. My programs are tailored to meet you or your child exactly where you are.
          </p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Card className="h-full flex flex-col border-border/50 hover:border-primary/30 transition-all hover:shadow-md bg-card/50 backdrop-blur-sm">
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary mb-4">
                    <service.icon size={24} strokeWidth={1.5} />
                  </div>
                  <CardTitle className="font-serif text-xl">{service.title}</CardTitle>
                  <CardDescription className="text-sm mt-2">{service.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow flex flex-col justify-between">
                  <ul className="space-y-2 mb-6">
                    {service.details.map((detail, idx) => (
                      <li key={idx} className="text-sm text-foreground/70 flex items-start">
                        <span className="text-primary mr-2 mt-0.5">•</span>
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Button 
                    variant="ghost" 
                    className="w-full mt-auto"
                    onClick={() => scrollToContact(service.title)}
                    data-testid={`button-service-${index}`}
                  >
                    Inquire Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
