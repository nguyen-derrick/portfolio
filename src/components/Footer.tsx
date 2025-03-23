"use client";

import { Github, Linkedin, Mail } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 bg-[#f9f9f8] text-black border-t border-gray-200">
      <div className="container max-w-7xl px-8 md:px-16 lg:px-20 mx-auto">
        <div className="flex flex-col items-center">
          <h3 className="text-2xl font-bold mb-6 text-blue-600">Let's Connect</h3>

          <div className="flex items-center justify-center space-x-8 mb-10">
            <a
              href="https://github.com/nguyen-derrick"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all transform hover:scale-110"
              aria-label="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/nguyen-derrick/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-gray-100 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all transform hover:scale-110"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:toderrickn@gmail.com"
              className="p-3 rounded-full bg-gray-100 text-gray-700 hover:text-blue-600 hover:bg-blue-50 transition-all transform hover:scale-110"
              aria-label="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>

          <Separator className="mb-8 bg-blue-100 w-24" />

          <div className="text-center text-gray-500">
            <p className="text-sm">
              © {currentYear} <Link href="/" className="text-blue-600 hover:underline">Derrick Nguyen</Link>. All rights reserved.
            </p>
            <p className="text-xs mt-1">
              Built with Next.js, Tailwind CSS, and shadcn/ui
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
