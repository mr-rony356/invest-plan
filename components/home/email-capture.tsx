"use client";

import { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebase";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export function EmailCapture() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      await addDoc(collection(db, "leads"), {
        email,
        source: "homepage",
        timestamp: new Date().toISOString()
      });

      toast({
        title: "Success!",
        description: "Thank you for subscribing. We'll be in touch soon!",
      });

      setEmail("");
    } catch (error) {
      toast({
        title: "Error",
        description: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="bg-secondary py-16">
      <div className="container">
        <div className="mx-auto max-w-xl text-center">
          <h2 className="mb-4 text-2xl font-bold">Get Our Free Section 8 Investment Guide</h2>
          <p className="mb-8 text-muted-foreground">
            Learn the fundamentals of Section 8 investing and start your journey to financial freedom.
          </p>
          <form onSubmit={handleSubmit} className="flex space-x-4">
            <Input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1"
            />
            <Button type="submit" disabled={loading}>
              {loading ? "Sending..." : "Get Free Guide"}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
}