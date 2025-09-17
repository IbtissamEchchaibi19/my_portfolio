// Client component for interactive resume page
'use client'

import Link from 'next/link'
import { useEffect } from 'react'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Mail,
  MapPin,
  Github,
  Linkedin,
  Calendar,
  Building,
  GraduationCap,
  Award,
  Code,
  Star,
  ExternalLink,
  Phone,
  Trophy
} from 'lucide-react'

const personalInfo = {
  name: 'Ibtissam Ech-Chaibi',
  title: 'Full Stack AI Software Engineer',
  email: 'ibtissam.echchaibi@gmail.com',
  phone: '+212610233997',
  location: 'Morocco',
  linkedin: 'linkedin.com/in/ibtissam-ech-chaibi',
  github: 'github.com/IbtissamEchchaibi19',
}

const professionalSummary = `Full Stack AI Software Engineer specializing in multi-agent systems, RAG pipelines, LLMs, and cloud-based AI solutions. Expert in building scalable AI platforms with comprehensive experience in computer vision, NLP, and end-to-end ML deployment across AWS, Azure, and GCP platforms.`

const experience = [
  {
    title: 'AI Engineer – Hack4SaferPlates Hackathon (2nd Place Winner)',
    company: 'SFDA',
    location: 'Riyadh, Saudi Arabia (Remote)',
    period: 'Sept 2025',
    achievements: [
      'Contributed to the AI component of an innovative food safety platform as part of the Fujairah Research Centre team, achieving 2nd place',
      'Developed an AI-powered PDF intelligence system to extract and verify food safety parameters and designed an ensemble-based risk prediction model with time-series features and anomaly detection',
    ],
    technologies: ['Python', 'Hugging Face', 'BART-large-MNLI', 'scikit-learn', 'XGBoost', 'LightGBM', 'Random Forest', 'Gradient Boosting']
  },
  {
    title: 'AI Software Engineer',
    company: 'Fujairah Research Center',
    location: 'United Arab Emirates (On-Site)',
    period: 'Jan 2025 - Sept 2025',
    achievements: [
      'Built a multi-agent AI platform for honey quality verification, document processing, and production analytics for beekeepers and honey producers',
      'Fine-tuned Mistral Instruct 7B on specialized datasets with W&B monitoring for expert-level knowledge retrieval',
      'Automated compliance validation of lab reports using Azure Document Intelligence with transformer models (RoBERTa-base-SQuAD2, BART-large MNLI)',
      'Developed a RAG pipeline with LangChain, Neo4j, and LLaMA 4, tracked with LangSmith for intelligent document retrieval',
      'Orchestrated scalable deployment of FastAPI microservices on Azure using MCP, LangGraph, and Docker',
    ],
    technologies: ['Python', 'Hugging Face', 'LangChain', 'LangGraph', 'LangSmith', 'Neo4j', 'Mistral', 'LLaMA', 'Azure AI', 'Docker', 'W&B', 'Gradio', 'Dash']
  },
  {
    title: 'AI Software Engineer',
    company: 'Freelance Client',
    location: 'United Arab Emirates (Remote)',
    period: 'Jul 2025 - Aug 2025',
    achievements: [
      'Enhanced an aviation medical chatbot for pilots and crew using RAG, NLP, LLaMA, and domain-specific embeddings (BioBERT, ClinicalBERT) integrated with Chroma for fast semantic search and compliance guidance',
      'Designed system architecture including NER-based preprocessing, synonym mapping, and knowledge base structuring, supporting testing, validation, and deployment',
    ],
    technologies: ['Python', 'LangChain', 'LLaMA', 'BioBERT', 'ClinicalBERT', 'Chroma']
  },
  {
    title: 'AI Software Engineer',
    company: 'Devtospace',
    location: 'France (Remote)',
    period: 'Sept 2024 - Dec 2024',
    achievements: [
      'Developed a cloud-based KYC system on AWS combining AI-powered computer vision and automated document processing',
      'Implemented identity verification and structured data extraction from ID documents using Amazon Textract, PyTorch, and OpenCV, and engineered liveness detection with Amazon Rekognition for real-time facial tracking and anti-spoofing',
      'Deployed the solution as a secure Flask REST API on AWS EC2 with S3 storage, Docker containerization, and CloudWatch monitoring integrated with React front-end',
    ],
    technologies: ['PyTorch', 'OpenCV', 'Amazon Rekognition', 'Amazon Textract', 'Amazon S3', 'Flask', 'Docker', 'MongoDB', 'AWS EC2', 'AWS CloudWatch', 'React']
  },
  {
    title: 'AI Software Engineer - Internship',
    company: '3D Smart Factory',
    location: 'Morocco (Hybrid)',
    period: 'Jun 2024 - Sept 2024',
    achievements: [
      'Engineered a RAG-powered platform with LangChain and Google Gemini for personalized interview coaching and CV analysis, supported by NLP pipelines with NLTK and Hugging Face for semantic search and intelligent document understanding',
      'Integrated Pinecone for fast vector search and context-aware responses, and developed a job intelligence module using Google APIs to provide real-time market insights and adaptive job recommendations',
      'Deployed a containerized FastAPI backend with MongoDB on AWS using Docker, ensuring robust monitoring with LangSmith integrated with React front-end',
    ],
    technologies: ['LangChain', 'Gemini Pro Vision', 'NLTK', 'SpaCy', 'Transformers', 'Pinecone', 'FastAPI', 'MongoDB', 'AWS', 'Google APIs', 'Docker', 'LangSmith', 'React']
  },
  {
    title: 'ML Software Engineer - Internship',
    company: 'Technocolabs Softwares',
    location: 'India (Remote)',
    period: 'May 2024 - Jun 2024',
    achievements: [
      'Engineered a Python-based ML system for automated mortgage approval and prepayment risk assessment, leveraging statistical modeling and advanced analytics to evaluate borrower profiles and financial patterns',
      'Created visualizations with Matplotlib and Seaborn to highlight key risk factors and deployed a Flask web app with interactive dashboards for real-time predictions',
    ],
    technologies: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn', 'Flask']
  },
  {
    title: 'Software Engineer - Internship',
    company: 'DigitalSky',
    location: 'Morocco (Hybrid)',
    period: 'Jun 2023 - Aug 2023',
    achievements: [
      'Built a project management web application with React and Express.js, implementing JWT authentication and role-based dashboards for secure task management, with MongoDB integration for real-time metrics and analytics',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Docker']
  },
]

const education = [
  {
    degree: 'Engineering degree, software engineering and digitalisation',
    school: 'ENSEM Engineering School',
    location: 'Morocco, Casablanca',
    period: 'Sept 2022 - Jun 2025',
    details: [
      'Software Engineering and Digitalization specialization',
      'Focus on AI, Machine Learning, and Digital Systems',
      'Final year student',
    ],
  },
  {
    degree: 'Mathematics and Physics Diploma for Admission to National Engineering Schools',
    school: 'CPGE Preparatory Classes',
    location: 'Morocco, Taza',
    period: 'Sept 2020 - Jul 2022',
    details: [
      'Preparatory program for engineering schools',
      'Strong foundation in mathematics and science fundamentals',
      'Successfully qualified for ENSEM engineering program',
    ],
  },
]

const skills = {
  'Software & Data Science': [
    'Python', 'Flask', 'FastAPI', 'JavaScript', 'React', 'Node.js', 'Dash', 'Streamlit', 'NumPy', 'Pandas', 'SQL', 'Matplotlib', 'Scikit-learn', 'NLTK', 'SpaCy', 'OpenCV'
  ],
  'AI & ML Frameworks & LLMs': [
    'PyTorch', 'TensorFlow', 'Hugging Face', 'LangChain', 'LangGraph', 'CrewAI', 'LlamaIndex', 'MCP', 'GPTs', 'LLaMA', 'Mistral', 'DeepSeek', 'Qwen', 'Gemini'
  ],
  'Databases & Cloud': [
    'MongoDB', 'PostgreSQL', 'Weaviate', 'Pinecone', 'ChromaDB', 'Neo4j', 'AWS (SageMaker, Textract, Rekognition, Comprehend, OpenSearch)', 'Azure (Document Intelligence, OpenAI Service, Blob Storage, VMs)', 'GCP (Vertex AI, Speech-to-Text/Text-to-Speech)'
  ],
  'Deployment & MLOps': [
    'Git', 'Docker', 'AWS EC2', 'Google App Engine', 'Hugging Face Inference', 'LangSmith', 'Weights & Biases', 'MLflow'
  ],
}

const projects = [
  'Email Assistant Agent – Developed an autonomous email assistant using LangGraph Google\'s Gemini AI model to triage messages, draft responses, and schedule meetings with Gmail/Calendar APIs. Integrated LangSmith for observability, memory persistence, and workflow optimization.',
  'GitHub MCP Tools Agent – Engineered an intelligent interface with LangGraph and LLaMA 3.3 to automate GitHub MCP operations via semantic search, parameter collection, and tool execution using Weaviate database. Deployed with Docker MCP Toolkits and monitored through LangSmith.',
  'AI-Powered Podcast Platform – Built an end-to-end system using AWS Transcribe, Comprehend, OpenSearch, SageMaker, CrewAI, and DeepSeek to convert podcasts into structured, searchable insights. Implemented automated evaluation pipelines and visualization dashboards.',
  'Generative AI Learning Platform – Built an adaptive English learning system using Qwen LLM on Vertex AI, RLHF for dynamic difficulty adjustment, Google Speech-to-Text/Text-to-Speech for interactive voice feedback, and ElasticSearch for fast retrieval and learner progress analytics.',
]

const languages = [
  'Arabic (Native)',
  'French (Working Proficiency)', 
  'English (Working Proficiency)'
]

export default function ResumePage() {
  useEffect(() => {
    document.title = 'Resume | Ibtissam Ech-Chaibi - Full Stack AI Software Engineer'
  }, [])

  return (
    <div className="min-h-screen relative bg-transparent print:bg-white">
      <AnimatedBackground variant="resume" />

      {/* Resume Content */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="max-w-4xl mx-auto relative group">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/20 via-accent/10 to-transparent blur-xl opacity-40 group-hover:opacity-60 transition-opacity print:hidden" />
          <div className="relative bg-card/80 backdrop-blur-sm rounded-2xl border border-border/60 shadow-xl print:border-0 print:shadow-none print:bg-white print:backdrop-blur-none">
          <div className="p-8 print:p-6">
            {/* Personal Info Header */}
            <header className="text-center mb-10 print:mb-6">
              <h1 className="text-4xl font-bold text-foreground mb-2">{personalInfo.name}</h1>
              <h2 className="text-xl text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 mb-5">{personalInfo.title}</h2>
              
              <div className="flex flex-wrap justify-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center">
                  <Mail className="w-4 h-4 mr-1" />
                  {personalInfo.email}
                </div>
                <div className="flex items-center">
                  <Phone className="w-4 h-4 mr-1" />
                  {personalInfo.phone}
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  {personalInfo.location}
                </div>
              </div>
              
              {/* Link bar */}
              <div className="flex flex-wrap justify-center gap-3 mt-4">
                <Link
                  href={`https://${personalInfo.linkedin}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Linkedin className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">{personalInfo.linkedin}</span>
                </Link>
                <Link
                  href={`https://${personalInfo.github}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-muted/60 to-muted/30 backdrop-blur-sm border border-border/50 text-[11px] sm:text-xs font-medium text-foreground/85 hover:text-foreground hover:from-primary/15 hover:to-accent/15 transition-all shadow-sm hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/40"
                >
                  <Github className="w-3.5 h-3.5 text-primary/80 group-hover:text-primary transition-colors" />
                  <span className="tracking-wide">{personalInfo.github}</span>
                </Link>
              </div>

              <div className="mt-6 flex justify-center gap-4 print:hidden">
                <Button size="sm" variant="outline" onClick={() => window.print()} className="text-xs">Print / PDF</Button>
                <Button size="sm" asChild className="text-xs">
                  <Link href="/contact">Contact Me</Link>
                </Button>
              </div>
            </header>

            {/* Professional Summary */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-5 flex items-center relative">
                <span className="absolute -left-4 top-1/2 -translate-y-1/2 hidden sm:block w-2 h-6 bg-gradient-to-b from-primary to-accent rounded" />
                <Star className="w-5 h-5 mr-2 text-primary drop-shadow" />
                Professional Summary
              </h3>
              <p className="text-muted-foreground leading-relaxed text-sm md:text-base">
                {professionalSummary}
              </p>
            </section>

            <Separator className="my-8" />

            {/* Experience */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Building className="w-5 h-5 mr-2 text-primary" />
                Work Experience
              </h3>
              <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                {experience.map((job, index) => (
                  <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                    {/* Special badge for hackathon win */}
                    {job.title.includes('2nd Place Winner') && (
                      <div className="mb-2">
                        <Badge className="bg-gradient-to-r from-amber-500 to-orange-500 text-white text-xs">
                          <Trophy className="w-3 h-3 mr-1" />
                          2nd Place Winner
                        </Badge>
                      </div>
                    )}
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h4 className="text-lg font-semibold text-foreground">{job.title}</h4>
                        <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                          <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{job.company}</span>
                          <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{job.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {job.period}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {job.achievements.map((achievement, idx) => (
                        <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-primary/60">{achievement}</li>
                      ))}
                    </ul>
                    {job.technologies && (
                      <div className="mt-3">
                        <div className="flex flex-wrap gap-1">
                          {job.technologies.map((tech) => (
                            <Badge key={tech} variant="secondary" className="text-[9px] px-2 py-0.5">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Education */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <GraduationCap className="w-5 h-5 mr-2 text-primary" />
                Education
              </h3>
              <div className="relative pl-4 sm:pl-6 before:content-[''] before:absolute before:top-0 before:left-1 before:w-px before:h-full before:bg-border">
                {education.map((edu, index) => (
                  <div key={index} className="relative pb-10 last:pb-0 pl-2 sm:pl-1">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <div>
                        <h4 className="text-base font-semibold text-foreground">{edu.degree}</h4>
                        <div className="flex flex-wrap items-center text-muted-foreground text-xs gap-x-3 gap-y-1">
                          <span className="inline-flex items-center"><Building className="w-3.5 h-3.5 mr-1" />{edu.school}</span>
                          <span className="inline-flex items-center"><MapPin className="w-3.5 h-3.5 mr-1" />{edu.location}</span>
                        </div>
                      </div>
                      <div className="flex items-center text-xs text-muted-foreground mt-1 sm:mt-0">
                        <Calendar className="w-3.5 h-3.5 mr-1" />
                        {edu.period}
                      </div>
                    </div>
                    <ul className="mt-2 space-y-1.5 text-[13px] leading-relaxed text-muted-foreground">
                      {edu.details.map((detail, idx) => (
                        <li key={idx} className="pl-4 relative before:content-[''] before:absolute before:left-0 before:top-2 before:w-1.5 before:h-1.5 before:rounded-full before:bg-accent/60">{detail}</li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Skills */}
            <section className="mb-10">
              <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                <Code className="w-5 h-5 mr-2 text-primary" />
                Technical Skills
              </h3>
              <div className="grid grid-cols-1 gap-6">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold text-foreground mb-3">{category}</h4>
                    <div className="flex flex-wrap gap-1">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-[10px] tracking-wide rounded-md bg-muted/70 hover:bg-muted">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </section>

            <Separator className="my-8" />

            {/* Projects and Languages */}
            <div className="grid grid-cols-1 gap-10">
              <section>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Award className="w-5 h-5 mr-2 text-primary" />
                  Key Projects
                </h3>
                <ul className="space-y-3">
                  {projects.map((project, index) => (
                    <li key={index} className="flex items-start group">
                      <div className="w-2 h-2 bg-gradient-to-br from-primary to-accent rounded-full mr-3 mt-2 flex-shrink-0 group-hover:scale-125 transition-transform" />
                      <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">{project}</span>
                    </li>
                  ))}
                </ul>
              </section>

              <section>
                <h3 className="text-xl font-bold text-foreground mb-6 flex items-center">
                  <Star className="w-5 h-5 mr-2 text-primary" />
                  Languages
                </h3>
                <div className="flex flex-wrap gap-2">
                  {languages.map((language, index) => (
                    <Badge key={index} variant="outline" className="text-sm">
                      {language}
                    </Badge>
                  ))}
                </div>
              </section>
            </div>

            {/* Footer */}
            <footer className="mt-14 pt-8 border-t border-border/60 text-center">
              <p className="text-sm text-muted-foreground mb-4">
                References available upon request
              </p>
              <div className="flex justify-center gap-4 print:hidden">
                <Button variant="outline" asChild>
                  <Link href="/projects">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Projects
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link href="/contact">
                    <Mail className="w-4 h-4 mr-2" />
                    Contact Me
                  </Link>
                </Button>
              </div>
            </footer>
          </div>
        </div>
      </div>
      </div>

      {/* Additional Actions */}
      <section className="py-16 bg-card print:hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Let&apos;s Connect
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Interested in working together? I&apos;d love to discuss how my skills and experience 
              can contribute to your next AI project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">
                  <Mail className="w-4 h-4 mr-2" />
                  Send Message
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/projects">
                  <ExternalLink className="w-4 h-4 mr-2" />
                  View Portfolio   
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}