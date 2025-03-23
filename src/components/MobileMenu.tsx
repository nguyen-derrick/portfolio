"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X, ChevronDown, ChevronUp, Mail, Linkedin } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/#projects", label: "Projects" }, // Updated projects link
  { href: "/contact", label: "Contact", hasDropdown: true,
    children: [
      { href: "mailto:hello@example.com", label: "Email", icon: <Mail className="h-4 w-4 mr-2" /> },
      { href: "https://linkedin.com/in/derrick", label: "LinkedIn", icon: <Linkedin className="h-4 w-4 mr-2" /> }
    ]
  },
];

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const [expandedItems, setExpandedItems] = useState<Record<string, boolean>>({});

  const toggleExpand = (label: string) => {
    setExpandedItems(prev => ({
      ...prev,
      [label]: !prev[label]
    }));
  };

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <button
          className="flex items-center justify-center p-2 rounded-md text-white hover:bg-gray-800 transition-colors"
          aria-label="Menu"
        >
          <Menu size={20} />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[250px] sm:w-[300px] border-l bg-[#0D111D] border-gray-800 text-white">
        <div className="flex flex-col gap-6 mt-8 font-inter">
          {navItems.map((item) => (
            <div key={item.href} className="border-b border-gray-800 pb-2">
              {item.hasDropdown ? (
                <div>
                  <button
                    onClick={() => toggleExpand(item.label)}
                    className="flex items-center justify-between w-full text-lg font-medium transition-colors text-white py-2"
                  >
                    {item.label}
                    {expandedItems[item.label] ? (
                      <ChevronUp className="h-5 w-5" />
                    ) : (
                      <ChevronDown className="h-5 w-5" />
                    )}
                  </button>

                  {expandedItems[item.label] && item.children && (
                    <div className="pl-4 mt-2 space-y-2">
                      {item.children.map((child) => (
                        <a
                          key={child.href}
                          href={child.href}
                          className="flex items-center py-2 text-sm text-gray-300 hover:text-white"
                          onClick={() => setOpen(false)}
                        >
                          {child.icon && child.icon}
                          {child.label}
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  href={item.href}
                  className={cn(
                    "block text-lg font-medium transition-colors py-2",
                    pathname === item.href
                      ? "text-[#4B96FF]"
                      : "text-white hover:text-[#4B96FF]"
                  )}
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </Link>
              )}
            </div>
          ))}

          <Link
            href="/resume"
            className="flex items-center justify-center bg-white hover:bg-gray-100 text-black py-2 px-4 rounded-full text-sm font-medium transition-colors mt-4"
            onClick={() => setOpen(false)}
          >
            Resume
          </Link>
        </div>
      </SheetContent>
    </Sheet>
  );
}
