"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import MobileMenu from "./MobileMenu";
import { Mail, Linkedin } from "lucide-react";
import { useTheme } from "next-themes";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/#projects", label: "Projects" },
  { href: "/contact", label: "Contact", hasDropdown: true },
];

export default function Header() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [hoverDropdown, setHoverDropdown] = useState<string | null>(null);
  const dropdownRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  const handleMouseEnter = (label: string) => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setHoverDropdown(label);
  };

  const handleMouseLeave = () => {
    // Add a delay before hiding the dropdown
    timeoutRef.current = setTimeout(() => {
      setHoverDropdown(null);
    }, 300); // 300ms delay
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 bg-[#f9f9f8]">
      <div className="container max-w-5xl mx-auto px-4 md:px-6 flex justify-between items-center">
        {/* Name on the left */}
        <div className="text-black font-medium hidden md:block font-inter">
          Derrick Nguyen
        </div>

        {/* Navigation in the center */}
        <div className="flex items-center justify-center">
          <div className="flex items-center rounded-full bg-black px-4 py-2 gap-8 shadow-md">
            {/* Logo */}
            <Link href="/" className="flex items-center justify-center">
              <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#3B82F6] text-white font-bold font-inter">
                D
              </div>
            </Link>

            {/* Navigation */}
            <nav className="hidden md:flex items-center gap-6 font-inter">
              {navItems.map((item) => (
                <div
                  key={item.href}
                  className="relative"
                  onMouseEnter={() => item.hasDropdown && handleMouseEnter(item.label)}
                  onMouseLeave={handleMouseLeave}
                >
                  {item.hasDropdown ? (
                    <button
                      className={cn(
                        "relative px-3 py-1 text-sm font-medium transition-colors flex items-center",
                        pathname === item.href
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      {item.label}
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="ml-1"
                      >
                        <polyline points="6 9 12 15 18 9"></polyline>
                      </svg>
                    </button>
                  ) : (
                    <Link
                      href={item.href}
                      className={cn(
                        "relative px-3 py-1 text-sm font-medium transition-colors",
                        pathname === item.href
                          ? "text-white"
                          : "text-gray-300 hover:text-white"
                      )}
                    >
                      {item.label}
                    </Link>
                  )}

                  {/* Dropdown for Contact */}
                  {item.label === "Contact" && hoverDropdown === "Contact" && (
                    <div
                      className="absolute top-full right-0 mt-2 w-48 bg-black rounded-md shadow-lg overflow-hidden z-20"
                      onMouseEnter={() => handleMouseEnter(item.label)}
                      onMouseLeave={handleMouseLeave}
                    >
                      <div className="p-2">
                        <a href="mailto:toderrickn@gmail.com" className="flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 rounded-md">
                          <Mail className="h-5 w-5 mr-3" />
                          Email
                        </a>
                        <a href="https://www.linkedin.com/in/nguyen-derrick/" className="flex items-center px-4 py-3 text-sm text-white hover:bg-gray-800 rounded-md">
                          <Linkedin className="h-5 w-5 mr-3" />
                          LinkedIn
                        </a>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </nav>

            {/* Resume button */}
            <Link
              href="/resume"
              className="bg-white hover:bg-gray-100 text-black py-1 px-4 rounded-full text-sm font-medium transition-colors font-inter"
            >
              Resume
            </Link>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <MobileMenu />
            </div>
          </div>
        </div>

        {/* Empty div for spacing */}
        <div className="hidden md:block w-[120px]"></div>
      </div>
    </header>
  );
}
