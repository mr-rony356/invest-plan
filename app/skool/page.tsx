import { PricingSection } from "@/components/skool/pricing-section";
import { BenefitsSection } from "@/components/skool/benefits-section";
import { FaqSection } from "@/components/skool/faq-section";

export default function SkoolPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-background to-secondary/20">
      <div className="container py-16">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Join the Section 8 Success Skool
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Get access to our exclusive community and proven system for Section 8 real estate success
          </p>
        </div>
        <PricingSection />
        <BenefitsSection />
        <FaqSection />
      </div>
    </div>
  );
}