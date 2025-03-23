"use client";

import { useRef, useState } from "react";
import { useInView } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Linkedin, Mail, Send, Github } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormState({
        name: "",
        email: "",
        message: ""
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-background/50 relative">
      {/* Background color accents */}
      <div className="absolute top-20 right-10 w-64 h-64 rounded-full bg-accent-blue/10 blur-3xl" />
      <div className="absolute bottom-20 left-10 w-64 h-64 rounded-full bg-accent-purple/10 blur-3xl" />

      <div className="container max-w-6xl px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center text-center mb-12">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Get In Touch</h2>
            <div className="w-24 h-1 bg-accent-blue mx-auto rounded"></div>
            <p className="text-muted-foreground max-w-2xl pt-2">
              Have a project in mind or want to discuss opportunities? Feel free to reach out.
            </p>
          </div>
        </div>

        <div
          ref={ref}
          className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-4xl mx-auto"
        >
          <div className="md:col-span-2">
            <div className="space-y-6">
              <Card className="border bg-gradient-to-br from-accent-blue/5 to-transparent border-accent-blue/20">
                <CardHeader>
                  <CardTitle className="text-accent-blue">Contact Information</CardTitle>
                  <CardDescription>
                    You can reach me through the following channels:
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <a
                    href="mailto:toderrickn@gmail.com"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent-blue transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-blue/10 text-accent-blue">
                      <Mail size={18} />
                    </div>
                    <span>toderrickn@gmail.com</span>
                  </a>

                  <a
                    href="https://www.linkedin.com/in/nguyen-derrick/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent-blue transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-blue/10 text-accent-blue">
                      <Linkedin size={18} />
                    </div>
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-muted-foreground hover:text-accent-blue transition-colors"
                  >
                    <div className="flex items-center justify-center w-10 h-10 rounded-full bg-accent-blue/10 text-accent-blue">
                      <Github size={18} />
                    </div>
                    <span>GitHub</span>
                  </a>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="md:col-span-3">
            <Card className="border bg-gradient-to-br from-accent-purple/5 to-transparent border-accent-purple/20">
              <CardHeader>
                <CardTitle className="text-accent-purple">Send a Message</CardTitle>
                <CardDescription>
                  Fill out the form below and I'll get back to you as soon as possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                {isSubmitted ? (
                  <div className="text-center py-8">
                    <div className="w-16 h-16 bg-accent-purple/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="h-7 w-7 text-accent-purple" />
                    </div>
                    <h3 className="text-xl font-medium mb-2 text-accent-purple">Message Sent!</h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. I'll respond to your message shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <label htmlFor="name" className="text-sm font-medium">
                        Name
                      </label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your name"
                        value={formState.name}
                        onChange={handleChange}
                        className="border-accent-purple/20 focus-visible:ring-accent-purple/30"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="email" className="text-sm font-medium">
                        Email
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        placeholder="your.email@example.com"
                        value={formState.email}
                        onChange={handleChange}
                        className="border-accent-purple/20 focus-visible:ring-accent-purple/30"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        placeholder="Your message here..."
                        value={formState.message}
                        onChange={handleChange}
                        rows={5}
                        className="border-accent-purple/20 focus-visible:ring-accent-purple/30"
                        required
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-accent-purple hover:bg-accent-purple/90"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
