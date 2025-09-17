"use client";

import { Star, BrainCircuit, Users, GraduationCap, Cloud, Award,Code ,Server, Calculator } from "lucide-react";
import { motion } from "framer-motion";

// Trust elements updated to reflect Ibtissam's AI expertise and experience
const trustElements = [

    {
    name: "Preparatory Classes (MP)",
    icon: Calculator,
    description:
      "Completed two years of Mathematics and Physics preparatory classes (CPGE), building a strong foundation in advanced mathematics that allows me to understand complex AI and ML algorithms, master problem-solving, and approach engineering challenges with scientific rigor.",
    color: "text-orange-400",
    bgColor: "bg-orange-400/10",
    borderColor: "border-orange-400/20",
  },
 {
    name: "Engineering School (ENSEM)",
    icon: GraduationCap,
    description:
      "Engineering degree in Software Engineering and Digitalization at ENSEM, where I combined strong AI specialization with software system design, mathematical modeling, and digital transformation shaping me into a versatile AI software engineer.",
    color: "text-accent",
    bgColor: "bg-accent/10",
    borderColor: "border-accent/20",
  },
  {
    name: "AI Engineering Specialist",
    icon: BrainCircuit,
    description:
      "Engineer specialized in Generative AI, LLMs, and multi-agent systems with hands-on expertise in RAG pipelines, fine-tuning, and advanced AI automation.",
    color: "text-green-400",
    bgColor: "bg-green-400/10",
    borderColor: "border-green-400/20",
  },
  {
    name: "Global AI Projects",
    icon: Users,
    description:
      "Delivered AI services and consulting projects across UAE, France, and Morocco, collaborating with international teams on large-scale AI engineering challenges.",
    color: "text-cyan-400",
    bgColor: "bg-cyan-400/10",
    borderColor: "border-cyan-400/20",
  },
  {
    name: "Software Engineering",
    icon: Code,
    description:
      "Solid background in software development with React, Node.js, Express.js, MongoDB, and Flask, experienced in building secure, scalable, and user-centered applications.",
    color: "text-indigo-400",
    bgColor: "bg-indigo-400/10",
    borderColor: "border-indigo-400/20",
  },
  {
    name: "Cloud Engineering",
    icon: Server,
    description:
      "Skilled in architecting, deploying, and monitoring AI-driven cloud applications using AWS EC2, Docker, S3, CloudWatch, Azure VMs, and Google App Engine.",
    color: "text-teal-400",
    bgColor: "bg-teal-400/10",
    borderColor: "border-teal-400/20",
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
                          Software & AI Engineering Excellence
                        </motion.h2>
                        <motion.p
                            className="text-lg text-muted-foreground max-w-3xl mx-auto"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6, delay: 0.4 }}
                            viewport={{ once: true }}
                        >
                          I specialize in building scalable, real-world AI solutions using cutting-edge technologies. My expertise spans from multi-agent systems to production-ready generative AI applications, while also excelling in software development, cloud computing, and end-to-end deployment pipelines that solve complex business challenges.
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