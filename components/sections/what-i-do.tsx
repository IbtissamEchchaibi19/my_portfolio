"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { BrainCircuit, Cloud, Network, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";

// Services updated to highlight Ibtissam's AI engineering expertise
const services = [
    {
        icon: BrainCircuit,
        title: "Generative AI & LLMs",
        description:
            "Specialized in building advanced AI systems using Large Language Models, fine-tuning, and RAG pipelines. Expert in LangChain, LangGraph, and multi-agent architectures for intelligent, context-aware applications.",
        features: [
            "LLM Fine-Tuning (Mistral, LLaMA, Qwen)",
            "Retrieval-Augmented Generation (RAG)",
            "Multi-Agent Systems (CrewAI, LangGraph)",
            "OpenAI, Azure AI, Google Gemini Integration",
        ],
        color: "text-green-400",
        bgColor: "bg-green-400/10",
        borderColor: "border-green-400/20",
    },
    {
        icon: Cloud,
        title: "AI Cloud Solutions",
        description:
            "Architecting and deploying scalable AI applications across AWS, Azure, and GCP. Expertise in cloud AI services, containerization, and MLOps for production-ready intelligent systems.",
        features: [
            "AWS (SageMaker, Rekognition, Textract)",
            "Azure (Document Intelligence, OpenAI)",
            "GCP (Vertex AI, Gemini, Speech APIs)",
            "Docker, FastAPI, MLOps Pipelines",
        ],
        color: "text-blue-400",
        bgColor: "bg-blue-400/10",
        borderColor: "border-blue-400/20",
    },
    {
        icon: Network,
        title: "Document AI & Automation",
        description:
            "Building intelligent document processing systems using computer vision, NLP, and automated workflows. Specializing in KYC automation, data extraction, and intelligent content analysis.",
        features: [
            "Document Intelligence & OCR",
            "Computer Vision (PyTorch, OpenCV)",
            "NLP Processing (NLTK, spaCy)",
            "Vector Databases (Pinecone, FAISS)",
        ],
        color: "text-purple-400",
        bgColor: "bg-purple-400/10",
        borderColor: "border-purple-400/20",
    },
];

export function WhatIDo() {
    return (
        <section className="py-24 bg-background/70 backdrop-blur-lg">
            <div className="container mx-auto max-w-7xl px-4">
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
                        AI Engineering{" "}
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                            Specialties
                        </span>
                    </motion.h2>
                    <motion.p
                        className="text-lg text-muted-foreground max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.6, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        I deliver end-to-end AI solutions, from concept to production deployment. 
                        My expertise spans cutting-edge AI technologies and cloud platforms to build 
                        scalable, intelligent systems that solve real-world challenges.
                    </motion.p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="h-full"
                            initial={{ opacity: 0, y: 40, scale: 0.95 }}
                            whileInView={{ opacity: 1, y: 0, scale: 1 }}
                            transition={{
                                duration: 0.6,
                                delay: 0.2 + index * 0.1,
                                ease: "easeOut",
                            }}
                            viewport={{ once: true }}
                        >
                            <Card
                                className={`
                h-full flex flex-col bg-card/50 border-2 ${service.borderColor} 
                hover:border-primary/50 hover:-translate-y-2 transition-all duration-300 
                shadow-lg hover:shadow-primary/10
              `}
                            >
                                <CardHeader className="flex-shrink-0">
                                    <div className="flex items-center gap-4 mb-4">
                                        <div
                                            className={`p-3 rounded-lg border ${service.borderColor} ${service.bgColor}`}
                                        >
                                            <service.icon
                                                className={`w-7 h-7 ${service.color}`}
                                            />
                                        </div>
                                        <CardTitle
                                            className={`text-2xl font-bold ${service.color}`}
                                        >
                                            {service.title}
                                        </CardTitle>
                                    </div>
                                    <CardDescription className="text-base text-muted-foreground">
                                        {service.description}
                                    </CardDescription>
                                </CardHeader>

                                <CardContent className="flex-grow flex flex-col justify-end pt-4">
                                    <div className="space-y-3">
                                        {service.features.map((feature) => (
                                            <div
                                                key={feature}
                                                className="flex items-center gap-3"
                                            >
                                                <CheckCircle
                                                    className={`w-5 h-5 ${service.color}`}
                                                />
                                                <span className="text-sm text-foreground">
                                                    {feature}
                                                </span>
                                            </div>
                                        ))}
                                    </div>
                                </CardContent>
                            </Card>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}