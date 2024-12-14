import Link from "next/link";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative bg-gradient-to-b from-primary/10 to-background py-20 md:py-32">
      <div className="container">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-6 text-4xl font-bold tracking-tight md:text-6xl">
            Turn $200k Into $1M with Section 8 Real Estate
          </h1>
          <p className="mb-8 text-xl text-muted-foreground">
            Learn Otto's Proven System to Build Wealth. Join Our Free Webinar!
          </p>
          <Button asChild size="lg" className="text-lg">
            <Link href="/webinar">Join Free Webinar</Link>
          </Button>
        </div>
      </div>
    </section>
  );
}