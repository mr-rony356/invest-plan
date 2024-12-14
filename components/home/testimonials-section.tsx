"use client";

import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Real Estate Investor",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    quote: "Otto's system helped me acquire 3 Section 8 properties in just 6 months. The returns have been incredible!"
  },
  {
    name: "Michael Chen",
    role: "Property Manager",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    quote: "The strategies I learned transformed my approach to Section 8 investing. My portfolio value has doubled."
  },
  {
    name: "Lisa Rodriguez",
    role: "Real Estate Agent",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    quote: "I was skeptical at first, but the results speak for themselves. Best investment decision I've made."
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((current) => (current + 1) % testimonials.length);
  };

  const previous = () => {
    setCurrentIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="bg-secondary/50 py-20">
      <div className="container">
        <h2 className="mb-12 text-center text-3xl font-bold">Success Stories</h2>
        <div className="relative">
          <div className="flex items-center justify-center">
            <Button
              variant="ghost"
              size="icon"
              className="absolute left-0 z-10"
              onClick={previous}
            >
              <ChevronLeft className="h-6 w-6" />
            </Button>
            <Card className="mx-auto max-w-2xl p-8">
              <Quote className="mb-4 h-8 w-8 text-primary" />
              <p className="mb-6 text-lg italic">{testimonials[currentIndex].quote}</p>
              <div className="flex items-center space-x-4">
                <img
                  src={testimonials[currentIndex].image}
                  alt={testimonials[currentIndex].name}
                  className="h-12 w-12 rounded-full object-cover"
                />
                <div>
                  <p className="font-semibold">{testimonials[currentIndex].name}</p>
                  <p className="text-sm text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </Card>
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-0 z-10"
              onClick={next}
            >
              <ChevronRight className="h-6 w-6" />
            </Button>
          </div>
          <div className="mt-4 flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                className={`h-2 w-2 rounded-full ${
                  index === currentIndex ? "bg-primary" : "bg-primary/20"
                }`}
                onClick={() => setCurrentIndex(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}