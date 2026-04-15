import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

export function Pricing() {
  const scrollToContact = () => {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  };

  const plans = [
    {
      name: "Quran Recitation",
      description: "Perfect for young beginners or busy adults.",
      price: "$100",
      period: "/month",
      features: [
        "5 classes per week",
        "10 minutes per session",
        "Progress reports",
        "Access to Little Noories app",
      ],
      popular: false,
    },
    {
      name: "Hifdh",
      description: "Ideal for serious Hifdh or intensive Tajweed.",
      price: "$100",
      period: "/month",
      features: [
        "5 classes per week",
        "10 minutes per session",
        "Detailed progress tracking",
        "Revision scheduling",
        "Access to Little Noories app",
        "Monthly parent check-in",
      ],
      popular: true,
    },
    {
      name: "Assessment",
      description: "To assess the students level to enroll in classes.",
      price: "$00",
      period: "/20 mins",
      features: [
        "Flexible scheduling",
      ],
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Investment</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
            Transparent Pricing
          </h3>
          <p className="text-foreground/80">
            Investing in Quranic education is investing in the Akhirah. Simple, clear structures with no hidden fees.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className={`h-full flex flex-col relative ${plan.popular ? 'border-primary shadow-lg scale-105 z-10 bg-background' : 'border-border/50 bg-background/50'}`}>
                {plan.popular && (
                  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase py-1 px-4 rounded-full tracking-wider">
                    Most Popular
                  </div>
                )}
                <CardHeader>
                  <CardTitle className="font-serif text-2xl">{plan.name}</CardTitle>
                  <CardDescription className="h-10">{plan.description}</CardDescription>
                  <div className="mt-4 flex items-baseline">
                    <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                    <span className="text-muted-foreground ml-1">{plan.period}</span>
                  </div>
                </CardHeader>
                <CardContent className="flex-grow">
                  <ul className="space-y-3">
                    {plan.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm">
                        <Check size={16} className="text-primary mr-2 shrink-0 mt-0.5" />
                        <span className="text-foreground/80">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button 
                    variant={plan.popular ? "default" : "outline"} 
                    className="w-full rounded-full"
                    onClick={scrollToContact}
                    data-testid={`button-pricing-${index}`}
                  >
                    Start Journey
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
