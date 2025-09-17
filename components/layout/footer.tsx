import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Github, Linkedin } from "lucide-react";

// Minimal custom Freelancer logo (origami-style bird) in single color to match icon set
const FreelancerIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    role="img"
    aria-label="Freelancer"
    className={className}
    fill="currentColor"
  >
    <polygon points="2 4 10 8 4 14" />
    <polygon points="10 8 13 12 9 20 6 14" />
    <polygon points="13 12 22 4 16 4" />
    <polygon points="13 12 22 12 15 16" />
  </svg>
);
export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative w-full border-t border-border overflow-hidden">
      {/* Background Pattern (same as Hero) */}
      <div className="absolute inset-0 -z-10 bg-background">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      <div className="container mx-auto max-w-7xl px-4 py-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <span className="font-semibold text-foreground">Ibtissam Ech-Chaibi</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-sm">
              Full Stack AI software Engineer building reliable, AI-powered products for startups and teams worldwide.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              <Link href="/projects" className="text-sm text-muted-foreground hover:text-accent">
                Projects
              </Link>
              <Link href="/about" className="text-sm text-muted-foreground hover:text-accent">
                About
              </Link>
              <Link href="/experience" className="text-sm text-muted-foreground hover:text-accent">
                Experience
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-accent">
                Contact
              </Link>
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold text-foreground">Connect</h3>
            <div className="flex space-x-2">
              <Button variant="outline" size="icon" asChild>
                <Link href="https://github.com/IbtissamEchchaibi19" target="_blank" rel="noopener noreferrer">
                  <Github className="h-4 w-4" />
                  <span className="sr-only">GitHub</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.linkedin.com/in/ibtissam-ech-chaibi/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-4 w-4" />
                  <span className="sr-only">LinkedIn</span>
                </Link>
              </Button>
              <Button variant="outline" size="icon" asChild>
                <Link href="https://www.freelancer.com/u/ibtissam1912" target="_blank" rel="noopener noreferrer">
                  <FreelancerIcon className="h-4 w-4" />
                  <span className="sr-only">Freelancer</span>
                </Link>
              </Button>
            </div>
          </div>
        </div>

        <Separator className="my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center space-y-2 md:space-y-0">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Ibtissam Ech-Chaibi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Built with Next.js + shadcn/ui
          </p>
        </div>
      </div>
    </footer>
  );
}
