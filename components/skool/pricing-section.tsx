"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { useToast } from "@/components/ui/use-toast";

const plans = [
  {
    name: "Free",
    price: "$0",
    description: "Get started with basic resources",
    features: [
      "Access to free webinars",
      "Basic investment calculator",
      "Weekly newsletter",
      "Community forum access"
    ],
    priceId: null
  },
  {
    name: "Pro",
    price: "$97",
    period: "/month",
    description: "Everything you need to succeed",
    features: [
      "All Free features",
      "Weekly live Q&A sessions",
      "Deal analysis workshops",
      "Property management training",
      "Private Discord community",
      "Section 8 document templates"
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_PRO_PRICE_ID
  },
  {
    name: "Course Only",
    price: "$3,000",
    description: "One-time purchase for lifetime access",
    features: [
      "Complete Section 8 course",
      "Step-by-step system",
      "Case studies library",
      "Implementation guides",
      "Lifetime updates"
    ],
    priceId: process.env.NEXT_PUBLIC_STRIPE_COURSE_PRICE_ID
  }
];

export function PricingSection() {
  const [loading, setLoading] = useState<string | null>(null);
  const { toast } = useToast();

  const handleSubscribe = async (priceId: string | null, planName: string) => {
    if (!priceId) return;
    
    setLoading(planName);
    try {
      const response = await fetch('/api/stripe/create-checkout', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          priceId,
          // In a real app, get this from auth context
          email: 'user@example.com',
        }),
      });

      const { sessionId, error } = await response.json();

      if (error) throw new Error(error);

      // Redirect to Stripe Checkout
      const stripe = await loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY!);
      await stripe?.redirectToCheckout({ sessionId });
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(null);
    }
  };

  return (
    <div className="py-16">
      <div className="grid gap-8 md:grid-cols-3">
        {plans.map((plan) => (
          <Card key={plan.name} className="p-8">
            <div className="mb-8">
              <h3 className="mb-2 text-2xl font-bold">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">{plan.price}</span>
                {plan.period && (
                  <span className="text-muted-foreground">{plan.period}</span>
                )}
              </div>
              <p className="text-muted-foreground">{plan.description}</p>
            </div>
            <ul className="mb-8 space-y-4">
              {plan.features.map((feature) => (
                <li key={feature} className="flex items-center space-x-2">
                  <Check className="h-5 w-5 text-primary" />
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
            <Button
              className="w-full"
              variant={plan.priceId ? "default" : "secondary"}
              disabled={loading === plan.name}
              onClick={() => handleSubscribe(plan.priceId, plan.name)}
            >
              {loading === plan.name ? "Processing..." : "Get Started"}
            </Button>
          </Card>
        ))}
      </div>
    </div>
  );
}