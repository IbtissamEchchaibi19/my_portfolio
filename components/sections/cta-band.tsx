"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowRight, MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function CTABand() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden">
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
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 bg-gradient-to-br from-accent/20 to-primary/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.4, 0.7, 0.4],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto max-w-6xl px-4 relative z-10">
        <motion.div 
          className="text-center space-y-10"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <motion.h2 
              className="text-4xl lg:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
            >
              Ready to Build{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 animate-gradient">
                Intelligent AI Solutions
              </span>
              ?
            </motion.h2>
            
            <motion.p 
              className="text-xl lg:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              Let&apos;s collaborate to transform your vision into reality. From multi-agent systems 
              to production-ready AI applications, I deliver{" "}
              <span className="text-foreground font-semibold">scalable AI solutions</span>{" "}
              that solve complex challenges and drive meaningful business impact.
            </motion.p>
          </motion.div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 justify-center items-center pt-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button 
                size="lg" 
                className="w-full sm:w-auto text-lg font-semibold shadow-lg shadow-primary/20 hover:shadow-primary/40 transition-all duration-300"
                asChild
              >
                <Link href="/contact">
                  Let&apos;s Build Together <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </motion.div>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400 }}
            >
              <Button 
                size="lg" 
                variant="outline" 
                className="w-full sm:w-auto text-lg font-semibold border-2 border-primary/50 hover:bg-primary/10 transition-all duration-300"
                asChild
              >
                <Link href="/#testimonials">
                  <MessageCircle className="mr-2 h-5 w-5" /> View Project Results
                </Link>
              </Button>
            </motion.div>
          </motion.div>

          <motion.div 
            className="pt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <p className="text-sm text-muted-foreground">
              Have a quick AI question?{" "}
              <Link href="mailto:ibtissam.echchaibi@gmail.com" className="text-primary underline hover:text-accent transition-colors">
                Email me directly
              </Link>{" "}
              or connect on{" "}
              <Link href="https://linkedin.com/in/ibtissam-ech-chaibi" className="text-primary underline hover:text-accent transition-colors">
                LinkedIn
              </Link>.
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}