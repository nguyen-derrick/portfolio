"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "E-Commerce Platform",
    description: "A fully responsive e-commerce platform with product catalog, shopping cart, and payment integration.",
    image: "/projects/ecommerce.jpg",
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
    demoLink: "https://example.com/demo1",
    githubLink: "https://github.com/yourusername/ecommerce"
  },
  {
    id: 2,
    title: "Task Management App",
    description: "A collaborative task management application with real-time updates and team assignment features.",
    image: "/projects/taskmanager.jpg",
    tags: ["Vue.js", "Firebase", "Tailwind CSS", "WebSockets"],
    demoLink: "https://example.com/demo2",
    githubLink: "https://github.com/yourusername/taskmanager"
  },
  {
    id: 3,
    title: "Health & Fitness Tracker",
    description: "Mobile-first application for tracking workouts, nutrition, and health metrics with data visualization.",
    image: "/projects/fitness.jpg",
    tags: ["React Native", "GraphQL", "D3.js", "TypeScript"],
    demoLink: "https://example.com/demo3",
    githubLink: "https://github.com/yourusername/fitnessapp"
  },
  {
    id: 4,
    title: "Smart Home Dashboard",
    description: "IoT dashboard for monitoring and controlling smart home devices with real-time data updates.",
    image: "/projects/smarthome.jpg",
    tags: ["Angular", "MQTT", "Socket.io", "Chart.js"],
    demoLink: "https://example.com/demo4",
    githubLink: "https://github.com/yourusername/smarthome"
  }
];

export default function ProjectsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="projects" className="py-24 bg-background/50 relative">
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-2"
          >
            <h2 className="text-3xl font-bold tracking-tight">Featured Projects</h2>
            <div className="w-24 h-1 bg-primary/50 mx-auto rounded"></div>
            <p className="text-muted-foreground max-w-2xl pt-2">
              A selection of my recent work across various domains and technologies.
            </p>
          </motion.div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8"
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full border border-border/40 bg-card/50 backdrop-blur-sm hover:shadow-md transition-all duration-300">
                <div className="relative h-56 w-full">
                  <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent z-10"></div>
                  <div className="h-full w-full bg-muted flex items-center justify-center relative">
                    <div className="flex flex-col items-center justify-center text-muted-foreground p-4 text-center">
                      <ImageIcon className="h-10 w-10 mb-2 opacity-50" />
                      <h3 className="text-lg font-medium">{project.title}</h3>
                    </div>
                  </div>
                </div>

                <CardHeader>
                  <CardTitle>{project.title}</CardTitle>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {project.tags.map((tag) => (
                      <Badge key={tag} variant="secondary" className="text-xs">
                        {tag}
                      </Badge>
                    ))}
                  </div>
                </CardHeader>

                <CardContent>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardContent>

                <CardFooter className="flex gap-2">
                  <Button variant="default" size="sm" className="gap-1" asChild>
                    <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                      <ExternalLink size={14} />
                      <span>Live Demo</span>
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" className="gap-1" asChild>
                    <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                      <Github size={14} />
                      <span>Code</span>
                    </a>
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
