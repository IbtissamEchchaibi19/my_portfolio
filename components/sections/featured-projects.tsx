"use client";

import { Button } from "@/components/ui/button";
import { ArrowRight, Bot, FileText, Users, Headphones } from "lucide-react";
import { motion } from "framer-motion";
import Link from "next/link";
import { ProjectCard, ProjectData } from "@/components/ui/project-card";

// Projects updated to reflect Ibtissam's AI engineering work
const projects: ProjectData[] =[
    {
        id: "honey-quality-ai-system",
        title: "Multi-Agent Honey Quality System",
        description: "Developed a comprehensive multi-agent AI system for honey quality verification and beekeeper support, integrating automated document processing, analytics dashboards, and expert knowledge retrieval.",
        status: "Production",
        tags: ["LangChain", "LangGraph", "Mistral 7B", "Azure AI", "FastAPI", "Docker", "W&B"],
        icon: Bot,
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
        // Correct GitHub raw URL format
        image: "https://raw.githubusercontent.com/IbtissamEchchaibi19/image-hub/main/honey.png",
        liveHref: "#",
        githubHref: "#"
    },
    {
        id: "kyc-ai-automation",
        title: "AI-Powered KYC Automation",
        description: "Built a cloud-based KYC system using computer vision and automated document processing on AWS, featuring liveness detection and identity verification with Amazon Rekognition and Textract.",
        status: "deployed",
        tags: ["AWS", "PyTorch", "OpenCV", "Rekognition", "Textract", "Flask", "Docker"],
        icon: FileText,
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
        liveHref: "#",
        githubHref: "#", 
        // Correct GitHub raw URL format
        image: "https://raw.githubusercontent.com/IbtissamEchchaibi19/image-hub/main/kyc.png",
    },
    {
        id: "rag-career-platform",
        title: "RAG-Powered Career Platform",
        description: "Engineered an AI platform using LangChain and Google Gemini for personalized interview coaching, CV insights, and auto-generated application letters with vector search and job market intelligence.",
        status: "production",
        tags: ["LangChain", "Gemini Pro", "Pinecone", "FastAPI", "MongoDB", "LangSmith"],
        icon: Users,
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
        // Correct GitHub raw URL format
        image: "https://raw.githubusercontent.com/IbtissamEchchaibi19/image-hub/main/resume.png",
        liveHref: "#",
        githubHref: "#"
    },
    {
        id: "ai-podcast-knowledge",
        title: "AI Podcast Knowledge Extraction",
        description: "Built an end-to-end system using AWS Transcribe, Comprehend, and CrewAI with DeepSeek LLMs to convert podcasts into structured, searchable insights with automated evaluation.",
        status: "Personal Project",
        tags: ["AWS Transcribe", "CrewAI", "DeepSeek", "OpenSearch", "SageMaker"],
        icon: Headphones,
        color: "text-cyan-400",
        bgColor: "bg-cyan-400/10",
        borderColor: "border-cyan-400/20",
        // Correct GitHub raw URL format
        image: "https://raw.githubusercontent.com/IbtissamEchchaibi19/image-hub/main/podcast.png",
        liveHref: "#",
        githubHref: "#"
    },
];

export function FeaturedProjects() {
    return (
        <section className="py-24 relative overflow-hidden">
            {/* Hero-style Background Pattern */}
            <div className="absolute inset-0 -z-10 bg-background">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            <div className="container mx-auto max-w-7xl px-4">
                {/* Section Header */}
                <motion.div
                    className="text-center space-y-6 mb-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    <motion.h2
                        className="text-4xl lg:text-5xl font-bold tracking-tight"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        viewport={{ once: true }}
                    >
                        Featured AI{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                            Projects
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        A showcase of my AI engineering work, from multi-agent systems to production-ready 
                        applications that solve real-world challenges using cutting-edge technologies.
                    </motion.p>
                </motion.div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <ProjectCard 
                            key={project.id}
                            project={project}
                            index={index}
                        />
                    ))}
                </div>

                {/* Updated Button */}
                <motion.div
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.5 }}
                    viewport={{ once: true }}
                >
                    <Button asChild size="lg" className="font-semibold">
                        <Link href="/projects">
                            View All AI Projects <ArrowRight className="w-5 h-5 ml-2" />
                        </Link>
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}