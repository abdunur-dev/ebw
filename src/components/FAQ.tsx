import React from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is EBW 2026?",
    answer: "EBW 2026 (Ethiopian Blockchain Week) is Ethiopia's premier blockchain conference, taking place July 31 - August 1 at the Science Museum in Addis Ababa. It features keynotes, workshops, a hackathon, and networking with 500+ attendees.",
  },
  {
    question: "Where is the venue?",
    answer: "The conference is held at the Science Museum, Addis Ababa, Ethiopia. The venue is centrally located with easy access to hotels, restaurants, and public transportation.",
  },
  {
    question: "How do I get tickets?",
    answer: "Tickets are available on our registration page. Early bird pricing (up to 50% off) runs until June 30. We also offer scholarship tickets for students and developers from underserved regions.",
  },
  {
    question: "Are there scholarships available?",
    answer: "Yes! We offer a generous scholarship program covering tickets, travel, and accommodation for students, developers, and community builders. Applications are reviewed on a rolling basis.",
  },
  {
    question: "Can I sponsor or exhibit?",
    answer: "Absolutely! We have multiple sponsorship tiers available. Exhibitor spots are also open for projects, startups, and protocols. Contact our partnerships team for details.",
  },
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 sm:py-28 relative">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto"
        >
              <div className="text-center mb-14">
            <p className="font-mono text-xs tracking-[0.25em] uppercase text-primary mb-3">
              <span className="text-primary">{">"}</span> Support
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-sm sm:text-base max-w-lg mx-auto">
              Everything you need to know about EBW 2026.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {faqs.map((faq, index) => (
              <Accordion type="single" collapsible key={index} className="w-full">
                <AccordionItem
                  value={`item-${index}`}
                  className="rounded-xl border border-border/60 bg-card/40 px-5 transition-all duration-300 hover:border-primary/30 data-[state=open]:border-primary/40 card-border-glow"
                >
                  <AccordionTrigger className="text-left text-sm font-medium hover:no-underline hover:text-primary transition-colors py-4">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground leading-relaxed pt-1 pb-5 text-sm">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              </Accordion>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
