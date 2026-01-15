"use client";

import { useEffect, useState, useRef, useMemo } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Briefcase } from "lucide-react";
import Link from "next/link";
import ClientImage from "@/components/ClientImage";

// Project data with icons and images
const projects = [
  {
    id: 1,
    title: "BudgetBoard Dashboard",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M7 7h10" />
        <path d="M7 12h10" />
        <path d="M7 17h10" />
      </svg>
    ),
    image: "/finance-dashboard.jpg",
    description: "A comprehensive personal finance dashboard for tracking spending, budgets, and expense analytics.",
    technologies: ["React", "TypeScript", "Chart.js", "Firebase"],
    demoLink: "https://budgetboard.vercel.app/",
    codeLink: "https://github.com/nguyen-derrick/BudgetBoard",
    category: "design",
  },
  {
    id: 2,
    title: "Health Metrics App",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M21 12V7H5a2 2 0 0 1 0-4h14v4" />
        <path d="M3 5v14a2 2 0 0 0 2 2h16v-5" />
        <path d="M18 12a2 2 0 0 0 0 4h4v-4Z" />
      </svg>
    ),
    image: "/health-app.jpg",
    description: "Mobile-first application for tracking health metrics with customizable dashboards and data visualization.",
    technologies: ["React Native", "Redux", "Node.js", "MongoDB"],
    demoLink: "#",
    codeLink: "#",
    category: "internship",
  },
  {
    id: 3,
    title: "AI Content Assistant",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M12 16v-4" />
        <path d="M12 8h.01" />
      </svg>
    ),
    image: "/ai-assistant.jpg",
    description: "An AI-powered content creation tool that helps users generate and optimize written content for various platforms.",
    technologies: ["Python", "Machine Learning", "Flask", "NLP"],
    demoLink: "#",
    codeLink: "#",
    category: "freelance",
  },
  {
    id: 4,
    title: "E-Commerce Platform",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-12 w-12"
      >
        <path d="M5 8h14M5 8a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1M5 8v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V8M19 8a1 1 0 0 0 1-1V5a1 1 0 0 0-1-1" />
        <path d="M9 11v5" />
        <path d="M9 11a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v5" />
        <path d="M22 6h-5" />
        <path d="M17 6v10" />
        <path d="M22 11h-5" />
        <path d="M22 16h-5" />
      </svg>
    ),
    image: "/ecommerce.jpg",
    description: "A fully responsive e-commerce solution with product catalog, shopping cart, and payment integration.",
    technologies: ["Next.js", "Stripe", "Tailwind CSS", "PostgreSQL"],
    demoLink: "#",
    codeLink: "#",
    category: "design",
  },
];

// Dynamic text cycling component
const DynamicText = () => {
  const texts = useMemo(() => [
    "I develop software and analytics solutions that turn data into impact.",
    "I design and implement efficient data systems to optimize operations.",
    "I leverage machine learning and automation to drive data-driven decision-making."
  ], []);

  // Use useState with a null initial value and set it in useEffect
  const [index, setIndex] = useState(0);
  const [text, setText] = useState<string | null>(null);
  const [isChanging, setIsChanging] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Set initial text only after client-side hydration
  useEffect(() => {
    setText(texts[0]);
    setMounted(true);
  }, [texts]);

  useEffect(() => {
    if (!mounted) return;

    const interval = setInterval(() => {
      setIsChanging(true);

      // After fade out, change text
      setTimeout(() => {
        const nextIndex = (index + 1) % texts.length;
        setIndex(nextIndex);
        setText(texts[nextIndex]);
        setIsChanging(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, [index, texts, mounted]);

  // Show a placeholder during server rendering to avoid hydration mismatch
  if (!mounted || text === null) {
    return (
      <p className="text-lg md:text-xl text-gray-700 max-w-2xl h-[56px]"></p>
    );
  }

  return (
    <p
      className={`text-lg md:text-xl text-gray-700 max-w-2xl transition-opacity duration-500 ${
        isChanging ? 'opacity-0' : 'opacity-100'
      }`}
      id="dynamicText"
    >
      {text}
    </p>
  );
};

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9f8]">
      <Header />
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="pb-24 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
            <div className="md:col-span-7">
              <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">
                <span className="bg-gradient-to-r from-blue-600 to-blue-500 text-transparent bg-clip-text">Hi, I'm Derrick Nguyen.</span>
              </h1>

              <DynamicText />

              <p className="text-lg text-gray-600 max-w-2xl mt-6 border-l-4 border-blue-500 pl-4">
                Currently <span className="font-semibold text-blue-600">@Keyloop</span> | Previously <span className="font-medium text-gray-500">@Manulife, CIBC, @Ripple, @Veeam</span>
              </p>

              {/* Call to action buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mt-8">
                <Button
                  className="bg-blue-600 hover:bg-blue-700 text-white rounded-md flex gap-2 items-center"
                  size="lg"
                  asChild
                >
                  <Link href="/resume">
                    <Briefcase className="h-5 w-5" />
                    Experience / Resume
                  </Link>
                </Button>

                <Button
                  variant="outline"
                  className="border-blue-500 text-blue-600 hover:bg-blue-50 rounded-md flex gap-2 items-center"
                  size="lg"
                  asChild
                >
                  <Link href="https://github.com/nguyen-derrick" target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                    Projects
                  </Link>
                </Button>
              </div>
            </div>
            <div className="md:col-span-5">
              <div className="rounded-lg overflow-hidden max-w-md mx-auto shadow-lg transform transition-all duration-500 hover:scale-[1.02] sticky top-32">
                <div className="relative w-full aspect-[4/5]">
                  <ClientImage
                    src="/profile.jpg"
                    alt="Derrick Nguyen"
                    className="rounded-lg object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="py-12 md:py-16 px-8 md:px-16 lg:px-20 max-w-7xl mx-auto">
          <div className="flex items-center mb-4">
            <h2 className="text-4xl md:text-5xl font-bold relative inline-block">
              Projects
              <span className="absolute -bottom-1 left-0 w-full h-1 bg-blue-600 rounded-full"></span>
            </h2>
          </div>

          {/* Separator line */}
          <div className="border-b border-gray-200 mb-6"></div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {projects.map((project) => (
              <div key={project.id} className="bg-white rounded-lg overflow-hidden shadow-lg transition-all duration-300 hover:shadow-xl transform hover:-translate-y-1">
                {/* Project Image */}
                <div className="w-full h-64 overflow-hidden relative">
                  <ClientImage
                    src={project.image}
                    alt={project.title}
                    className="object-cover"
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  />
                </div>

                {/* Project Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-2 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-4">
                    <Button
                      className="bg-blue-600 hover:bg-blue-700 text-white rounded-md"
                      size="sm"
                      asChild
                    >
                      {project.demoLink && project.demoLink !== "#" ? (
                        <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Demo</a>
                      ) : (
                        <span className="px-3 py-1 block opacity-70 cursor-not-allowed">Demo</span>
                      )}
                    </Button>

                    <Button
                      variant="outline"
                      className="border-gray-300 text-gray-700 hover:bg-gray-100 rounded-md"
                      size="sm"
                      asChild
                    >
                      {project.codeLink && project.codeLink !== "#" ? (
                        <a href={project.codeLink} className="flex items-center justify-center" target="_blank" rel="noopener noreferrer">
                          <Github className="w-4 h-4 mr-2" /> Code
                        </a>
                      ) : (
                        <span className="flex items-center justify-center px-3 py-1 opacity-70 cursor-not-allowed">
                          <Github className="w-4 h-4 mr-2" /> Code
                        </span>
                      )}
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="https://github.com/nguyen-derrick"
              className="inline-flex items-center bg-gray-800 text-white px-6 py-3 rounded-full hover:bg-gray-700 transition-colors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="mr-2 h-5 w-5" />
              View All Projects on GitHub
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
