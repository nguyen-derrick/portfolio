"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Code, PenTool, Database, Server, BarChart, Brain } from "lucide-react";

// Define types for our color and skill categories
type ColorKey = 'blue' | 'purple' | 'green' | 'orange' | 'yellow';

type ColorStyles = {
  bg: string;
  text: string;
  badgeBg: string;
  badgeText: string;
  badgeBorder: string;
  accent: string;
}

type SkillCategory = {
  id: string;
  title: string;
  icon: React.ReactNode;
  color: ColorKey;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "frontend",
    title: "Frontend Development",
    icon: <Code className="h-5 w-5" />,
    color: "blue",
    skills: ["React", "Next.js", "JavaScript", "TypeScript", "HTML5", "CSS3/SCSS", "Tailwind CSS", "Redux", "Responsive Design"]
  },
  {
    id: "design",
    title: "Design & UI/UX",
    icon: <PenTool className="h-5 w-5" />,
    color: "purple",
    skills: ["Figma", "Adobe XD", "User Research", "Wireframing", "Prototyping", "Design Systems", "Accessibility"]
  },
  {
    id: "data",
    title: "Data & Analytics",
    icon: <BarChart className="h-5 w-5" />,
    color: "yellow",
    skills: ["Power BI", "Tableau", "Looker", "Alteryx", "Data Analysis", "Visualization", "Predictive Analytics", "Statistical Modeling", "A/B Testing", "Power Query"]
  },
  {
    id: "backend",
    title: "Backend Development",
    icon: <Database className="h-5 w-5" />,
    color: "green",
    skills: ["Node.js", "Express", "MongoDB", "PostgreSQL", "REST APIs", "GraphQL", "Firebase", "Authentication"]
  },
  {
    id: "ml",
    title: "Machine Learning",
    icon: <Brain className="h-5 w-5" />,
    color: "orange",
    skills: ["Pandas", "NumPy", "Scikit-learn", "TensorFlow", "Data Mining", "Feature Engineering", "Model Optimization", "Natural Language Processing"]
  },
  {
    id: "other",
    title: "Tools & Platforms",
    icon: <Server className="h-5 w-5" />,
    color: "blue",
    skills: ["Git/GitHub", "Docker", "AWS", "CI/CD", "Jest/Testing", "Webpack", "Agile/Scrum", "Performance Optimization"]
  }
];

const colorMap: Record<ColorKey, ColorStyles> = {
  blue: {
    bg: "bg-accent-blue/10",
    text: "text-accent-blue",
    badgeBg: "bg-accent-blue/10",
    badgeText: "text-accent-blue",
    badgeBorder: "border-accent-blue/20",
    accent: "bg-accent-blue",
  },
  purple: {
    bg: "bg-accent-purple/10",
    text: "text-accent-purple",
    badgeBg: "bg-accent-purple/10",
    badgeText: "text-accent-purple",
    badgeBorder: "border-accent-purple/20",
    accent: "bg-accent-purple",
  },
  green: {
    bg: "bg-accent-green/10",
    text: "text-accent-green",
    badgeBg: "bg-accent-green/10",
    badgeText: "text-accent-green",
    badgeBorder: "border-accent-green/20",
    accent: "bg-accent-green",
  },
  orange: {
    bg: "bg-accent-orange/10",
    text: "text-accent-orange",
    badgeBg: "bg-accent-orange/10",
    badgeText: "text-accent-orange",
    badgeBorder: "border-accent-orange/20",
    accent: "bg-accent-orange",
  },
  yellow: {
    bg: "bg-accent-yellow/10",
    text: "text-accent-yellow",
    badgeBg: "bg-accent-yellow/10",
    badgeText: "text-accent-yellow",
    badgeBorder: "border-accent-yellow/20",
    accent: "bg-accent-yellow",
  }
};

export default function SkillsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="skills" className="py-24 relative">
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Skills & Technologies</h2>
            <div className="w-24 h-1 bg-accent-green mx-auto rounded"></div>
            <p className="text-muted-foreground max-w-2xl pt-2">
              The technologies, tools, and skills I use to bring products to life.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          {skillCategories.map((category, index) => (
            <div
              key={category.id}
              className="transition-all duration-300 hover:-translate-y-1"
            >
              <Card className="h-full border border-border/40 hover:border-accent-blue/20 transition-all duration-300">
                <CardHeader className="flex flex-row items-center gap-2 pb-2">
                  <div className={`rounded-md p-2 ${colorMap[category.color].bg} ${colorMap[category.color].text}`}>
                    {category.icon}
                  </div>
                  <CardTitle className="text-xl">{category.title}</CardTitle>
                </CardHeader>
                <Separator className={colorMap[category.color].accent} />
                <CardContent className="pt-6">
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className={`text-sm px-3 py-1.5 ${colorMap[category.color].badgeBg} ${colorMap[category.color].badgeText} ${colorMap[category.color].badgeBorder}`}
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
