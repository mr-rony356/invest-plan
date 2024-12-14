import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What's included in the Skool membership?",
    answer: "Skool membership includes access to our complete Section 8 investing curriculum, weekly live Q&A sessions, private Discord community, document templates, and deal analysis workshops."
  },
  {
    question: "How is the course different from the membership?",
    answer: "The course is a one-time purchase that gives you lifetime access to our complete Section 8 investing curriculum. The membership includes additional benefits like live Q&A sessions and community access."
  },
  {
    question: "Can I cancel my membership anytime?",
    answer: "Yes, you can cancel your membership at any time. You'll continue to have access until the end of your billing period."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 30-day money-back guarantee for both the course and membership if you're not satisfied with the content."
  },
  {
    question: "How long do I have access to the course?",
    answer: "The course purchase includes lifetime access to all current and future updates of the curriculum."
  }
];

export function FaqSection() {
  return (
    <section className="py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Frequently Asked Questions
      </h2>
      <div className="mx-auto max-w-3xl">
        <Accordion type="single" collapsible>
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}