import { Card } from "@/components/ui/card";
import { BookOpen, Users, Video, MessageSquare, FileText, Trophy } from "lucide-react";

const benefits = [
  {
    icon: BookOpen,
    title: "Comprehensive Curriculum",
    description: "Step-by-step system to master Section 8 investing"
  },
  {
    icon: Users,
    title: "Expert Community",
    description: "Connect with successful Section 8 investors"
  },
  {
    icon: Video,
    title: "Live Q&A Sessions",
    description: "Weekly sessions to answer your questions"
  },
  {
    icon: MessageSquare,
    title: "Private Discord",
    description: "24/7 support from the community"
  },
  {
    icon: FileText,
    title: "Document Templates",
    description: "Ready-to-use Section 8 paperwork"
  },
  {
    icon: Trophy,
    title: "Success Tracking",
    description: "Track your progress and celebrate wins"
  }
];

export function BenefitsSection() {
  return (
    <section className="py-16">
      <h2 className="mb-12 text-center text-3xl font-bold">
        Why Join Skool?
      </h2>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit) => (
          <Card key={benefit.title} className="p-6">
            <benefit.icon className="mb-4 h-10 w-10 text-primary" />
            <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
            <p className="text-muted-foreground">{benefit.description}</p>
          </Card>
        ))}
      </div>
    </section>
  );
}