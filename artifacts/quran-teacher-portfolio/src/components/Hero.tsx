import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export function Hero() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-20 overflow-hidden">
      {/* Background Image & Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-bg.png"
          alt="Serene Islamic garden view"
          className="w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/80 md:bg-background/60 backdrop-blur-[2px]"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-transparent"></div>
      </div>
      <div className="container mx-auto px-4 md:px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="max-w-xl"
          >
            <span className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              Online Quran & Islamic Studies
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground leading-tight mb-6">
              Nurturing hearts with the light of the Quran.
            </h1>
            <p className="text-lg md:text-xl text-foreground/80 mb-8 leading-relaxed">
              Expert, compassionate Quran instruction for children and adults by a Hafidha and Alimiyya graduate with over a decade of teaching experience.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={scrollToContact}
                className="font-serif text-lg rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all"
                data-testid="button-hero-cta"
              >
                Book a Free Consultation
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                className="font-serif text-lg rounded-full px-8 py-6 bg-background/50 backdrop-blur-sm hover:bg-background/80"
                data-testid="button-hero-learn-more"
              >
                Meet the Teacher
              </Button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="hidden md:flex justify-center"
          >
            {/* Decorative element since we're using placeholder for teacher photo */}
            <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-8 border-background/50 shadow-2xl">
              <div className="absolute inset-0 bg-primary/20 backdrop-blur-md flex items-center justify-center">
                <div className="text-center p-8">
                  <h3 className="font-serif text-2xl font-bold text-primary mb-2">Ustadhah Jeseena</h3>
                  <p className="text-primary/80 font-medium">Hafidha & Alimiyya Graduate</p>
                  <p className="text-sm mt-4 text-primary/70">10+ Years Experience</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
