"use client";

import { Star, BrainCircuit, Users, GraduationCap, Cloud, Award } from "lucide-react";
import { motion } from "framer-motion";

// Trust elements updated to reflect Ibtissam's AI expertise and experience
const trustElements = [
    {
        name: "AI Engineering Specialist",
        icon: BrainCircuit,
        description:
            "Specialized AI Engineer focused on Generative AI, LLMs, and multi-agent systems with hands-on experience in RAG pipelines and fine-tuning.",
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
    },
    {
        name: "Multi-Cloud AI Expertise",
        icon: Cloud,
        description:
            "Extensive experience with AWS (SageMaker, Rekognition, Textract), Azure (Document Intelligence, OpenAI Service), and GCP (Vertex AI, Gemini) for scalable AI solutions.",
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
    },
    {
        name: "Production AI Systems",
        icon: Award,
        description:
            "Developed and deployed production-grade AI systems including multi-agent platforms, KYC automation, and intelligent document processing for real-world applications.",
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
    },
    {
        name: "Advanced AI Toolchain",
        icon: Star,
        description:
            "Proficient with cutting-edge AI tools including LangChain, LangGraph, CrewAI, LlamaIndex, and multiple LLM frameworks (LLaMA, Mistral, DeepSeek, Qwen).",
        color: "text-yellow-400",
        bgColor: "bg-yellow-400/10",
        borderColor: "border-yellow-400/20",
    },
    {
        name: "Global AI Projects",
        icon: Users,
        description:
            "Delivered AI solutions across UAE, France, and Morocco, working with international teams on complex AI engineering challenges and consulting projects.",
        color: "text-cyan-400",
        bgColor: "bg-cyan-400/10",
        borderColor: "border-cyan-400/20",
    },
    {
        name: "ENSEM Engineering Student",
        icon: GraduationCap,
        description:
            "Pursuing Engineering degree in Software Engineering and Digitalization at the National High School of Electricity and Mechanics (ENSEM).",
        color: "text-accent",
        bgColor: "bg-accent/10",
        borderColor: "border-accent/20",
    },
];

export function TrustStrip() {
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
                <motion.div
                    className="text-center space-y-12"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, ease: "easeOut" }}
                    viewport={{ once: true }}
                >
                    {/* Section Header */}
                    <div className="space-y-4">
                        <motion.h2
                            className="text-4xl lg:text-5xl font-bold tracking-tight"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            viewport={{ once: true }}
                        >
                            Why Choose{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                                Me?
                            </span>
                        </motion.h2>
                        <motion.h2
                            className="text-4xl font-bold tracking-tight text-foreground"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                            viewport={{ once: true }}
                        >
                            AI Engineering Excellence & Innovation
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                            I specialize in building scalable, real-world AI solutions using cutting-edge 
                            technologies. My expertise spans from multi-agent systems to production-ready 
                            generative AI applications that solve complex business challenges.
                        </motion.p>
                    </div>

                    {/* Trust Badges Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                        {trustElements.map((element, index) => (
                            <motion.div
                                key={element.name}
                                className="relative group p-6 rounded-xl bg-card/40 border border-primary/10 hover:border-primary/30 hover:bg-card/60 transition-all duration-300 shadow-lg hover:shadow-primary/10"
                                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                                whileInView={{ opacity: 1, scale: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.3 + index * 0.1,
                                    ease: "easeOut",
                                }}
                                viewport={{ once: true }}
                                whileHover={{
                                    y: -5,
                                    transition: { type: "spring", stiffness: 300 },
                                }}
                            >
                                <div className="flex items-start gap-4">
                                    <div
                                        className={`p-3 rounded-lg ${element.bgColor} border ${element.borderColor}`}
                                    >
                                        <element.icon
                                            className={`w-6 h-6 ${element.color}`}
                                        />
                                    </div>
                                    <div className="text-left">
                                        <h3 className="text-lg font-semibold text-foreground">
                                            {element.name}
                                        </h3>
                                        <p className="text-sm text-muted-foreground mt-1">
                                            {element.description}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}