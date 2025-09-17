import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/header";
import { Footer } from "@/components/layout/footer";
import { ThemeProvider } from "@/components/theme-provider";
import { cn } from "@/lib/utils";
import { CursorGlow } from "@/components/ui/cursor-glow";
import { PerformanceMonitor } from "@/components/ui/performance-monitor";

// Optional: simple error boundary wrapper
import { ReactNode } from "react";

function SafeBoundary({ children }: { children: ReactNode }) {
  try {
    return <>{children}</>;
  } catch (err) {
    console.error("Layout render error:", err);
    return <div className="p-8 text-center text-red-500">Something went wrong.</div>;
  }
}

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Ibtissam Ech-Chaibi — AI Engineer & Full-Stack Developer",
  description:
    "Portfolio of Ibtissam Ech-Chaibi, software engineering student and freelance AI & full-stack developer specializing in Python, Django, React, and AWS. Explore projects, skills, and contact information.",
  keywords: [
    "AI Engineer",
    "Full-Stack Developer",
    "Machine Learning",
    "Python",
    "React",
    "Next.js",
    "Django",
    "AWS",
    "Portfolio",
  ],
  authors: [{ name: "Ibtissam Ech-Chaibi" }],
  creator: "Ibtissam Ech-Chaibi",
  metadataBase:
    process.env.NEXT_PUBLIC_SITE_URL
      ? new URL(process.env.NEXT_PUBLIC_SITE_URL)
      : new URL("https://example.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: process.env.NEXT_PUBLIC_SITE_URL || "https://example.com",
    siteName: "Ibtissam Ech-Chaibi Portfolio",
    title: "Ibtissam Ech-Chaibi — AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of Ibtissam Ech-Chaibi, software engineering student and freelance AI & full-stack developer specializing in Python, Django, React, and AWS.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Ibtissam Ech-Chaibi - AI Engineer & Full-Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ibtissam Ech-Chaibi — AI Engineer & Full-Stack Developer",
    description:
      "Portfolio of Ibtissam Ech-Chaibi, software engineering student and freelance AI & full-stack developer.",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <SafeBoundary>
            <Header />
            <main className="min-h-screen">{children}</main>
            <Footer />
          </SafeBoundary>
          <CursorGlow />
          <PerformanceMonitor />
        </ThemeProvider>
      </body>
    </html>
  );
}