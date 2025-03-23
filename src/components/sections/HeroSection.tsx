"use client";

import { useRef } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDownIcon } from "lucide-react";

export default function HeroSection() {
  const containerRef = useRef<HTMLDivElement>(null);

  const scrollToNext = () => {
    const aboutSection = document.getElementById("about");
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section
      id="hero"
      className="relative min-h-[100vh] flex flex-col items-center justify-center pt-16"
      ref={containerRef}
    >
      <div className="absolute inset-0 bg-grid-pattern" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-background/70 to-background" />

      {/* Colored accent shapes */}
      <div className="absolute top-20 left-10 md:left-20 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 md:right-20 w-64 h-64 rounded-full bg-accent-orange/10 blur-3xl" />
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-accent-purple/5 blur-3xl" />

      <div className="container max-w-6xl relative z-10 px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="flex flex-col space-y-3">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight">
              <span className="inline-block">Derrick</span>{" "}
              <span className="inline-block relative">
                Nguyen
                <span className="absolute -bottom-2 left-0 right-0 h-1 bg-accent-blue rounded-full"></span>
              </span>
            </h1>
            <p className="text-xl md:text-2xl font-medium">
              <span className="text-muted-foreground">Software Developer & </span>
              <span className="text-accent-blue">UX Enthusiast</span>
            </p>
          </div>

          <p className="max-w-[42rem] text-muted-foreground text-lg">
            I build innovative digital experiences with clean code and thoughtful design.
            Let's create something meaningful together.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-6">
            <Button
              size="lg"
              className="text-base bg-accent-blue hover:bg-accent-blue/90 transition-colors"
              onClick={() => {
                const workSection = document.getElementById("work");
                if (workSection) {
                  workSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-base border-accent-blue text-accent-blue hover:bg-accent-blue/10 transition-colors"
              onClick={() => {
                const contactSection = document.getElementById("contact");
                if (contactSection) {
                  contactSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Get In Touch
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
        <Button
          variant="ghost"
          size="icon"
          onClick={scrollToNext}
          className="rounded-full animate-bounce text-accent-blue hover:bg-accent-blue/10 hover:text-accent-blue"
        >
          <ArrowDownIcon className="h-6 w-6" />
        </Button>
      </div>
    </section>
  );
}
