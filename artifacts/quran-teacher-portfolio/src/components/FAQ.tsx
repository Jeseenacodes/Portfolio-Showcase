import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export function FAQ() {
  const faqs = [
    {
      question: "What age groups do you teach?",
      answer: "I teach students of all ages. For children, I generally accept students starting at age 6 for formal classes. I also have many adult students, ranging from beginners learning the alphabet to advanced students seeking Ijaza in recitation.",
    },
    {
      question: "Are classes online or in-person?",
      answer: "All classes are currently held online via Zoom. This allows me to work with students worldwide while providing a comfortable, focused learning environment.",
    },
    {
      question: "What platform/materials do we use?",
      answer: "We use Zoom for video calling, which allows for screen sharing and interactive whiteboard use. For materials, I provide digital copies of standardized Qaidas, Tajweed books, and Mushaf pages we are working on. Students are encouraged to have their own physical Mushaf.",
    },
    {
      question: "Do you offer makeup classes?",
      answer: "Yes. If a cancellation is made at least 24 hours in advance, we can schedule a makeup class within the same month, subject to availability. Last-minute cancellations cannot be made up.",
    },
    {
      question: "What is the Little Noories app?",
      answer: "Little Noories (littlenoories.app) is an interactive, gamified app I created to help young children practice their Arabic alphabet, basic vocabulary, and short surahs in a fun, engaging way. All my enrolled students get complimentary access to premium features.",
    },
    {
      question: "How long does it take to learn to read?",
      answer: "Every student's pace is different. Generally, a dedicated beginner adult can comfortably read from the Mushaf (with basic rules) in 8-10 months with consistent practice. Children's timelines vary based on age and consistency.",
    },
  ];

  return (
    <section id="faq" className="py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-sm font-bold text-primary tracking-widest uppercase mb-2">Common Questions</h2>
          <h3 className="text-3xl md:text-4xl font-serif font-bold text-foreground">
            Frequently Asked Questions
          </h3>
        </div>

        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-border/60">
              <AccordionTrigger className="text-left font-serif text-lg hover:text-primary transition-colors py-5" data-testid={`accordion-faq-${index}`}>
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-foreground/80 leading-relaxed text-base pb-6">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}
