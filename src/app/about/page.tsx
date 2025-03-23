"use client";

import Image from "next/image";
import ClientImage from "@/components/ClientImage";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { MapPin, GraduationCap, Briefcase, Database, Cloud, Bot, Brain, Globe, Award } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import TravelCarousel from "@/components/TravelCarousel";

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col bg-[#f9f9f8]">
      <Header />
      <main className="flex-grow pt-24 pb-16">
        <div className="container max-w-4xl mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
            {/* Image & Info */}
            <div className="md:sticky md:top-24 w-full md:w-1/3 flex flex-col items-center bg-white p-6 rounded-lg shadow-sm mb-8 md:mb-0">
              <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-6 border-4 border-[#f0f0f0] shadow-lg relative">
                <ClientImage
                  src="/profile.jpg"
                  alt="Derrick Nguyen"
                  fill
                  className="object-cover"
                />
              </div>

              <h1 className="text-2xl font-bold mb-2 text-center text-gray-800">Derrick Nguyen</h1>

              <div className="w-full mb-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-800">
                    <MapPin size={16} />
                  </div>
                  <span>Toronto, Ontario, Canada</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-800">
                    <GraduationCap size={16} />
                  </div>
                  <span>Toronto Metropolitan University</span>
                </div>

                <div className="flex items-center gap-3">
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-indigo-100 text-indigo-800">
                    <Briefcase size={16} />
                  </div>
                  <span>Associate Software Developer at Manulife</span>
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <a
                  href="https://www.linkedin.com/in/nguyen-derrick/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                    <rect x="2" y="9" width="4" height="12"></rect>
                    <circle cx="4" cy="4" r="2"></circle>
                  </svg>
                </a>
                <a
                  href="https://github.com/nguyen-derrick"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                </a>
                <a
                  href="mailto:toderrickn@gmail.com"
                  className="p-2 rounded-full bg-gray-100 hover:bg-blue-100 transition-colors"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="20"
                    height="20"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-blue-600"
                  >
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                    <polyline points="22,6 12,13 2,6"></polyline>
                  </svg>
                </a>
              </div>
            </div>

            {/* Content */}
            <div className="w-full md:w-2/3 bg-white p-6 rounded-lg shadow-sm">
              <h2 className="text-2xl font-bold mb-2">About Me</h2>
              <Separator className="mb-6 bg-blue-600" />

              <div className="space-y-6">
                <p className="text-lg">
                  <span className="font-bold">Hey, I'm Derrick.</span> I've worked across industries like finance, automation, and cloud solutions at companies including Manulife, CIBC, Scotiabank, Ripple, and Veeam. With a strong foundation in data engineering, analytics, and business intelligence, I focus on creating systems that solve real-world problems and improve efficiency.
                </p>

                <p className="text-lg">
                  <span className="font-bold">Outside of work</span>, I'm passionate about staying active and exploring new places. I enjoy hiking, collecting magnets from the cities I visit, trying out new restaurants, and experimenting with recipes in the kitchen. I'm also a sports enthusiast, always up for a game.
                </p>

                <h3 className="text-xl font-bold mt-8 mb-4">Interests</h3>
                <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
                  <Badge className="flex items-center gap-1 px-3 py-2 bg-blue-100 text-blue-800 border-blue-200">
                    <Database className="h-4 w-4" /> Data Engineering
                  </Badge>
                  <Badge className="flex items-center gap-1 px-3 py-2 bg-indigo-100 text-indigo-800 border-indigo-200">
                    <Cloud className="h-4 w-4" /> Cloud Platforms
                  </Badge>
                  <Badge className="flex items-center gap-1 px-3 py-2 bg-green-100 text-green-800 border-green-200">
                    <Bot className="h-4 w-4" /> Automation
                  </Badge>
                  <Badge className="flex items-center gap-1 px-3 py-2 bg-purple-100 text-purple-800 border-purple-200">
                    <Brain className="h-4 w-4" /> Machine Learning
                  </Badge>
                  <Badge className="flex items-center gap-1 px-3 py-2 bg-amber-100 text-amber-800 border-amber-200">
                    <Globe className="h-4 w-4" /> Traveling
                  </Badge>
                  <Badge className="flex items-center gap-1 px-3 py-2 bg-orange-100 text-orange-800 border-orange-200">
                    <Award className="h-4 w-4" /> Sports
                  </Badge>
                </div>

                <h3 className="text-xl font-bold mt-8 mb-4">Travel Photos</h3>
                <div className="w-full h-80 relative mb-4">
                  <TravelCarousel />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
