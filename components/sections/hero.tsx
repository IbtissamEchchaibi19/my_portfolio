"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";


const techStack = [
    "Python", "Flask", "FastAPI", "JavaScript", "React","NextJS", "Node.js",
     "Pandas", "SQL",
    "Scikit-learn", "NLTK", "SpaCy", "OpenCV",
    "PyTorch", "TensorFlow", "Transformers",
    "LangChain", "LangGraph", "CrewAI", "LlamaIndex", "MCP",
    "MongoDB", "PostgreSQL", "Neo4j", "Pinecone", "ChromaDB", "Weaviate",
    "AWS","Azure", "GCP","Git", "Docker", "LangSmith",
    "Weights & Biases", "MLflow"
]

export function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 py-20">
            {/* Background Pattern */}
            <div className="absolute inset-0 -z-10 bg-background">
                <div
                    className="absolute inset-0 opacity-[0.03]"
                    style={{
                        backgroundImage: `radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)`,
                        backgroundSize: "50px 50px",
                    }}
                />
            </div>

            {/* Centralized container */}
            <div className="w-full max-w-7xl mx-auto">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                    {/* Left Column - Content */}
                    <motion.div
                        className="lg:col-span-7 space-y-8 text-center lg:text-left"
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="flex justify-center lg:justify-start">
                            <Badge
                                variant="secondary"
                                className="px-6 py-3 text-sm font-medium bg-gradient-to-r from-accent/10 to-primary/10 text-primary border-primary/20 hover:border-primary/40 transition-all duration-300 backdrop-blur-sm hover:scale-105"
                            >
                                <div className="flex items-center gap-2">
                                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                                    <span>Available for Full-Stack AI Software & Cloud Projects</span>
                                </div>
                            </Badge>
                        </div>

                        <div className="space-y-6">
                            <motion.h1
                                className="text-4xl md:text-6xl lg:text-7xl font-extrabold leading-tight tracking-tighter"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
                            >
                                <span className="block">Hi, I&apos;m Ibtissam.</span>
                               <span className="block text-transparent bg-clip-text bg-gradient-to-r from-pink-400 via-rose-500 to-fuchsia-600 animate-gradient">
  Developing AI Software Solutions.
</span>

                            </motion.h1>
                            <motion.p
                                className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
                            >
                                Graduate Engineer with a strong foundation in mathematics and software engineering. Experienced in AI, ML, and software development. I build intelligent softwares and scalable cloud solutions that solve real-world challenges.
                            </motion.p>
                        </div>

                        <motion.div
                            className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
                        >
                            <Button size="lg" asChild className="shadow-lg shadow-primary/20 hover:shadow-primary/40">
                                <a href="#contact">
                                    Get in Touch<ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                            <Button size="lg" variant="outline" asChild>
                                <a href="/resume">
                                    View Resume <ArrowRight className="ml-2 h-5 w-5" />
                                </a>
                            </Button>
                        </motion.div>
                    </motion.div>

                    {/* Right Column - Visuals & Profile */}
                    <motion.div
                        className="lg:col-span-5 space-y-6 flex flex-col items-center"
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
                    >
                        {/* Experience Badge - Above Image */}
                        <motion.div
                            className="flex justify-center"
                            initial={{ opacity: 0, y: -10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
                        >
                            <Badge
                                variant="outline"
                                className="px-4 py-2 text-sm font-semibold bg-gradient-to-r from-primary/5 to-accent/5 border-primary/30 text-primary hover:bg-primary/10 transition-all duration-300"
                            >
                                3+ Years Experience
                            </Badge>
                        </motion.div>

                        <motion.div
                            className="rounded-lg overflow-hidden border-2 border-primary/20 shadow-xl max-w-md w-full"
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.5, delay: 0.4, ease: "easeOut" }}
                        >
                            <img
                                src="https://raw.githubusercontent.com/IbtissamEchchaibi19/image-hub/main/Gemini_Generated_Image_diciyjdiciyjdici.png"
                                alt="Gemini Generated"
                                className="w-full h-auto object-cover"
                            />
                        </motion.div>

                        {/* Tech Stack */}
                        <div className="w-full max-w-md">
                            <h3 className="text-center text-sm font-semibold text-muted-foreground mb-4">
                                CORE TECHNOLOGIES
                            </h3>
                            <div className="flex flex-wrap justify-center gap-3">
                                {techStack.map((tech) => (
                                    <Badge key={tech} variant="secondary" className="px-3 py-1 text-xs font-mono">
                                        {tech}
                                    </Badge>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
