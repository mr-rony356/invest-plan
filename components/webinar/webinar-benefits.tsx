import { Card } from "@/components/ui/card";
import { DollarSign, BookOpen, Users, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: DollarSign,
    title: "Proven ROI Strategy",
    description: "Learn how to achieve consistent returns with Section 8 properties"
  },
  {
    icon: BookOpen,
    title: "Step-by-Step System",
    description: "Get a detailed roadmap for success in Section 8 investing"
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Learn directly from Otto's years of Section 8 experience"
  },
  {
    icon: TrendingUp,
    title: "Scaling Blueprint",
    description: "Discover how to grow from one property to a full portfolio"
  }
];

export function WebinarBenefits() {
  return (
    <section className="mt-20">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Why Join Our Webinar?
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {benefits.map((benefit, index) => (
          <Card key={index} className="p-6">
            <benefit.icon className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}