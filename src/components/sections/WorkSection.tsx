"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, Image as ImageIcon } from "lucide-react";

// Define types for our projects and color maps
type ProjectColor = 'blue' | 'green' | 'purple' | 'orange';

type ProjectColorStyles = {
  bgGradient: string;
  text: string;
  border: string;
  badge: string;
  button: string;
  buttonOutline: string;
}

type Project = {
  id: number;
  title: string;
  description: string;
  tags: string[];
  color: ProjectColor;
  demoLink: string;
  githubLink: string;
}

const projects: Project[] = [
  {
    id: 1,
    title: "Finance Dashboard",
    description: "A comprehensive dashboard for tracking personal finances with budgeting tools and expense analytics.",
    tags: ["React", "TypeScript", "Chart.js", "Firebase"],
    color: "blue",
    demoLink: "https://example.com/finance",
    githubLink: "https://github.com/derrick-nguyen/finance-dashboard"
  },
  {
    id: 2,
    title: "Health Metrics App",
    description: "Mobile-first application for tracking health metrics with customizable dashboards and data visualization.",
    tags: ["React Native", "Redux", "Node.js", "MongoDB"],
    color: "green",
    demoLink: "https://example.com/health",
    githubLink: "https://github.com/derrick-nguyen/health-metrics"
  },
  {
    id: 3,
    title: "AI Content Assistant",
    description: "An AI-powered content creation tool that helps users generate and optimize written content for various platforms.",
    tags: ["Python", "Machine Learning", "Flask", "NLP"],
    color: "purple",
    demoLink: "https://example.com/ai-assistant",
    githubLink: "https://github.com/derrick-nguyen/ai-assistant"
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    description: "A fully responsive e-commerce solution with product catalog, shopping cart, and payment integration.",
    tags: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    color: "orange",
    demoLink: "https://example.com/ecommerce",
    githubLink: "https://github.com/derrick-nguyen/ecommerce"
  }
];

const colorMap: Record<ProjectColor, ProjectColorStyles> = {
  blue: {
    bgGradient: "from-accent-blue/20 to-accent-blue/5",
    text: "text-accent-blue",
    border: "border-accent-blue/20",
    badge: "bg-accent-blue/10 text-accent-blue",
    button: "bg-accent-blue hover:bg-accent-blue/90",
    buttonOutline: "border-accent-blue text-accent-blue hover:bg-accent-blue/10",
  },
  green: {
    bgGradient: "from-accent-green/20 to-accent-green/5",
    text: "text-accent-green",
    border: "border-accent-green/20",
    badge: "bg-accent-green/10 text-accent-green",
    button: "bg-accent-green hover:bg-accent-green/90",
    buttonOutline: "border-accent-green text-accent-green hover:bg-accent-green/10",
  },
  purple: {
    bgGradient: "from-accent-purple/20 to-accent-purple/5",
    text: "text-accent-purple",
    border: "border-accent-purple/20",
    badge: "bg-accent-purple/10 text-accent-purple",
    button: "bg-accent-purple hover:bg-accent-purple/90",
    buttonOutline: "border-accent-purple text-accent-purple hover:bg-accent-purple/10",
  },
  orange: {
    bgGradient: "from-accent-orange/20 to-accent-orange/5",
    text: "text-accent-orange",
    border: "border-accent-orange/20",
    badge: "bg-accent-orange/10 text-accent-orange",
    button: "bg-accent-orange hover:bg-accent-orange/90",
    buttonOutline: "border-accent-orange text-accent-orange hover:bg-accent-orange/10",
  }
};

export default function WorkSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="work" className="py-24 bg-background/50 relative">
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Selected Work</h2>
            <div className="w-24 h-1 bg-accent-purple mx-auto rounded"></div>
            <p className="text-muted-foreground max-w-2xl pt-2">
              A selection of my recent projects across various domains and technologies.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          {projects.map((project, index) => {
            const colors = colorMap[project.color];

            return (
              <div
                key={project.id}
                className="transition-all duration-300 hover:-translate-y-1"
              >
                <Card className={`overflow-hidden h-full border bg-gradient-to-br ${colors.bgGradient} ${colors.border} backdrop-blur-sm hover:shadow-md transition-all duration-300`}>
                  <div className="relative h-48 w-full overflow-hidden">
                    <div className={`absolute inset-0 flex items-center justify-center ${colors.text}`}>
                      <div className="flex flex-col items-center text-center p-4">
                        <ImageIcon className="h-12 w-12 mb-2 opacity-70" />
                        <h3 className="text-xl font-medium">{project.title}</h3>
                      </div>
                    </div>
                  </div>

                  <CardHeader>
                    <CardTitle className={colors.text}>{project.title}</CardTitle>
                    <div className="flex flex-wrap gap-2 mt-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className={colors.badge}>
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardHeader>

                  <CardContent>
                    <CardDescription className="text-foreground/80 text-base">
                      {project.description}
                    </CardDescription>
                  </CardContent>

                  <CardFooter className="flex gap-4">
                    <Button variant="default" size="sm" className={`gap-1 ${colors.button}`} asChild>
                      <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={14} />
                        <span>Live Demo</span>
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" className={`gap-1 ${colors.buttonOutline}`} asChild>
                      <a href={project.githubLink} target="_blank" rel="noopener noreferrer" className="flex items-center justify-center">
                        <Github size={14} />
                        <span>Code</span>
                      </a>
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
