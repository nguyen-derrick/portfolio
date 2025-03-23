"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { User } from "lucide-react";

export default function AboutSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="about" className="py-24 bg-background/50 relative">
      {/* Background color accents */}
      <div className="absolute top-20 left-10 md:left-auto md:right-20 w-64 h-64 rounded-full bg-accent-yellow/10 blur-3xl" />
      <div className="absolute bottom-20 right-10 md:right-auto md:left-20 w-64 h-64 rounded-full bg-accent-green/10 blur-3xl" />

      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center"
        >
          <div className="flex flex-col space-y-6">
            <div className="space-y-2">
              <h2 className="text-3xl font-bold tracking-tight">About Me</h2>
              <div className="w-20 h-1 bg-accent-yellow rounded"></div>
            </div>

            <div className="text-muted-foreground space-y-4">
              <p>
                Hello! I'm <span className="text-accent-yellow font-medium">Derrick</span>, a passionate software developer with a keen eye for
                design and user experience. I blend technical skills with creativity
                to build digital products that are both functional and visually appealing.
              </p>
              <p>
                My journey in tech began with a fascination for how digital tools can
                solve real-world problems. That curiosity has evolved into a career
                where I get to create meaningful solutions that enhance the way people
                interact with technology.
              </p>
              <p>
                When I'm not coding, you can find me exploring design trends, contributing
                to open-source projects, or experimenting with new technologies to expand
                my skillset.
              </p>
            </div>
          </div>

          <div className="flex justify-center md:justify-end">
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-xl overflow-hidden border-4 border-background shadow-xl">
                <Avatar className="w-full h-full">
                  <AvatarFallback className="bg-gradient-to-br from-accent-yellow/20 to-accent-green/20 text-foreground">
                    <div className="flex flex-col items-center justify-center h-full">
                      <User className="h-20 w-20 mb-2 opacity-50" />
                      <span className="text-xl">Derrick Nguyen</span>
                    </div>
                  </AvatarFallback>
                </Avatar>
              </div>
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent-yellow/20 rounded-lg -z-10"></div>
              <div className="absolute -top-4 -left-4 w-32 h-32 bg-accent-green/20 rounded-lg -z-10"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
