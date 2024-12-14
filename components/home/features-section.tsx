import { Card } from "@/components/ui/card";
import { DollarSign, Users, ChartBar } from "lucide-react";

const features = [
  {
    icon: DollarSign,
    title: "Guaranteed Returns",
    description: "Section 8 properties provide stable, government-backed rental income."
  },
  {
    icon: Users,
    title: "Expert Guidance",
    description: "Learn from Otto's experience and proven investment strategies."
  },
  {
    icon: ChartBar,
    title: "Scalable System",
    description: "Build a portfolio that generates passive income for years to come."
  }
];

export function FeaturesSection() {
  return (
    <section className="py-20">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <Card key={index} className="p-6">
              <feature.icon className="mb-4 h-10 w-10 text-primary" />
              <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}