"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Calendar, MapPin } from "lucide-react";

const experiences = [
  {
    id: 1,
    title: "Data Analyst",
    company: "Keyloop",
    location: "Toronto, Ontario, Canada",
    duration: "Present",
    description: "Built recurring GTM reporting in Excel and Power BI to track KPIs, trends, and funnel performance. Used SQL to pull, join, and validate data across sources, including Salesforce pipeline and lead flow. Used Python to automate transforms, QA checks, and recurring reporting outputs, and shared clear takeaways with stakeholders.",
    skills: ["Power BI", "SQL", "Python", "Excel", "Data Engineering"]
  },
  {
    id: 2,
    title: "Associate Software Developer",
    company: "Manulife",
    location: "Toronto, Ontario, Canada",
    duration: "Apr 2024 - Nov 2024",
    description: "Working on developing and maintaining web applications for financial services. Contributing to full-stack development using modern JavaScript frameworks and implementing best practices for code quality and maintainability.",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "Express"]
  },
  {
    id: 3,
    title: "Analytics Engineer",
    company: "CIBC",
    location: "Toronto, Ontario, Canada",
    duration: "Jan 2024 - Apr 2024",
    description: "Worked in Advanced Marketing Analytics & Strategy team. Developed data pipelines and analytics solutions to support marketing initiatives and customer insights.",
    skills: ["Python", "SQL", "Data Analytics", "Marketing Analytics", "ETL"]
  },
  {
    id: 4,
    title: "Program Manager",
    company: "Ripple",
    location: "Remote",
    duration: "May 2023 - Jan 2024",
    description: "Led Developer Growth initiatives. Managed programs to increase developer adoption of XRP Ledger and blockchain technologies.",
    skills: ["Program Management", "Blockchain", "Developer Relations", "Strategy"]
  },
  {
    id: 5,
    title: "Lead XRPL Campus Ambassador",
    company: "Ripple",
    location: "Remote",
    duration: "Jan 2022 - May 2023",
    description: "Introduced the First XRP Ledger Campus Ambassadors program. Evangelized blockchain technology and XRP Ledger across university campuses.",
    skills: ["Community Building", "Technical Education", "Event Management", "Blockchain"]
  },
  {
    id: 6,
    title: "Data Science Analyst",
    company: "Loadlink Technologies",
    location: "Toronto, Ontario, Canada",
    duration: "Sep 2023 - Dec 2023",
    description: "Analyzed transportation and logistics data to extract business insights. Developed dashboards and reports to support decision-making.",
    skills: ["Data Analysis", "Python", "Visualization", "Logistics Analytics"]
  },
  {
    id: 7,
    title: "Systems Engineer",
    company: "Veeam Software",
    location: "Toronto, Ontario, Canada",
    duration: "May 2023 - Sep 2023",
    description: "Provided technical support and solutions for enterprise backup and recovery systems. Troubleshooted complex infrastructure issues.",
    skills: ["Systems Engineering", "Cloud Infrastructure", "Technical Support", "Troubleshooting"]
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  return (
    <section id="experience" className="py-24 relative">
      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Work Experience</h2>
            <div className="w-24 h-1 bg-accent-orange mx-auto rounded"></div>
            <p className="text-muted-foreground max-w-2xl pt-2">
              My professional journey and key roles where I've developed my skills and made an impact.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className="relative mt-12"
        >
          {/* Timeline line */}
          <div className="absolute left-7 top-0 bottom-0 w-0.5 bg-accent-orange/20"></div>

          {/* Experience items */}
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="relative mb-12 pl-16"
            >
              {/* Timeline dot */}
              <div className="absolute left-5 top-1 w-5 h-5 rounded-full border-4 border-background bg-accent-orange z-10"></div>

              <div className="bg-card border rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-2">
                  <h3 className="text-xl font-bold text-accent-orange">{experience.title}</h3>
                  <Badge className="mt-2 md:mt-0 bg-accent-orange/10 text-accent-orange border-accent-orange/20 self-start">
                    {experience.company}
                  </Badge>
                </div>

                <div className="flex flex-col md:flex-row md:items-center gap-2 text-sm text-muted-foreground mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{experience.duration}</span>
                  </div>
                  <div className="hidden md:block">•</div>
                  <div className="flex items-center gap-1">
                    <MapPin size={14} />
                    <span>{experience.location}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">
                  {experience.description}
                </p>

                <div className="flex flex-wrap gap-2">
                  {experience.skills.map((skill) => (
                    <Badge key={skill} variant="secondary" className="bg-accent-orange/10 text-accent-orange border-accent-orange/20">
                      {skill}
                    </Badge>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
