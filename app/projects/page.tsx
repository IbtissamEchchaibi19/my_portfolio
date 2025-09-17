'use client'

import { useState } from 'react'
import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github, Calendar, Clock, Code, Brain, Database, Cpu, Rocket, ChevronDown, ChevronUp } from 'lucide-react'
import { AnimatedBackground } from '@/components/3d/animated-background'

// Your existing projects data...
const projects = [
  {
    id: 'verification-api',
    title: 'Document Verification API',
    description: 'An end-to-end API designed with FastAPI for automated document verification and compliance checks. Combines Azure Document Intelligence for OCR, HuggingFace NLP models (BART-Large-MNLI, RoBERTa) for semantic validation, and a modular rules engine for flexible verification workflows.',
    image: null,
    imageGradient: 'from-amber-500 to-yellow-600',
    tags: ['FastAPI', 'Docker', 'Azure Document Intelligence', 'HuggingFace Transformers', 'PyTorch', 'BART-Large-MNLI', 'RoBERTa QA', 'PDF Processing'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '1 months',
    year: '2025',
    client: 'Real-World Prototyping',
    featured: true,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/qualityapi/tree/master' },
      { type: 'demo', url: 'https://vimeo.com/1117823921?share=copy' }
    ],
  },
  {
    id: 'document-analytics-api',
    title: 'Document Analytics & Visualization API',
    description: 'Built with FastAPI and integrated with PyMuPDF, Camelot, and regex pipelines to extract, process, and analyze data from PDFs. Features a Plotly Dash dashboard for real-time visualization, enabling insights generation and automated reporting from structured and unstructured documents.',
    image: null,
    imageGradient: 'from-emerald-500 to-cyan-600',
    tags: ['FastAPI', 'Docker', 'PyMuPDF', 'Camelot', 'Plotly Dash', 'Azure Blob Storage', 'Regex Extraction', 'Document Intelligence'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '1 months',
    year: '2025',
    client: 'Real-World Prototyping',
    featured: true,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/invoicesdashapi/blob/master' },
      { type: 'demo', url: 'https://vimeo.com/1117865542?share=copy' }
    ],
  },
  {
    id: 'rag-expert-system',
    title: 'RAG-Powered Expert System',
    description: 'Engineered a Retrieval-Augmented Generation (RAG) pipeline using LangChain, Pinecone, Groq, and HuggingFace embeddings. Includes semantic vector search, contextual conversational memory, and an evaluation framework for relevance, accuracy, and hallucination detection.',
    image: null,
    imageGradient: 'from-amber-500 to-yellow-600',
    tags: ['LangChain', 'FastAPI', 'Pinecone', 'Groq', 'HuggingFace Embeddings', 'Gradio', 'RAG Evaluation', 'Vector Search'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2 months',
    year: '2025',
    client: 'Real-World Prototyping',
    featured: true,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/beekeepchatbot' },
      { type: 'demo', url: 'https://www.loom.com/share/4bdcc5864fa84e80a6b863e23876e9b3?sid=db383b17-768d-49de-b7dc-8f36b260df0a' }
    ],
  },
  {
    id: 'graph-rag-system',
    title: 'GraphRAG Query System',
    description: 'Developed a document intelligence system integrating Neo4j for knowledge graphs, SentenceTransformers for semantic embeddings, and Google Gemini for response generation. Features Streamlit-based visualization, enabling graph-structured exploration of documents and advanced Q&A over structured data.',
    image: null,
    imageGradient: 'from-cyan-600 to-blue-700',
    tags: ['GraphRAG', 'Neo4j', 'Streamlit', 'Google Gemini', 'SentenceTransformers', 'Knowledge Graphs', 'Semantic Search', 'Document Intelligence'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2 months',
    year: '2025',
   client: 'Real-World Prototyping',
    featured: true,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/GraphRAG-Retreving-Reports/tree/master' },
      { type: 'demo', url: 'https://vimeo.com/manage/videos/1118154921' }
    ],
  },
  {
    id: 'mistral-7b-finetune',
    title: 'Mistral-7B Fine-Tuning Pipeline',
    description: 'Implemented a fine-tuning framework for Mistral-7B using QLoRA for memory efficiency. Includes automated dataset preparation, low-rank adaptation, and evaluation metrics integrated with Weights & Biases. Demonstrates scalable domain-specific language model adaptation on commodity hardware.',
    image: null,
    imageGradient: 'from-yellow-400 to-orange-600',
    tags: ['Mistral-7B', 'QLoRA', 'Fine-Tuning', 'Lightning AI', 'Weights & Biases', 'Domain Adaptation', 'PDF Processing', 'AI Evaluation Metrics'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '1 months',
    year: '2025',
   client: 'Real-World Prototyping',
    featured: true,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/FineTuningLLM/tree/master' }
    ],
  },
  {
    id: 'ai-gmail-assistant',
    title: 'AI-Powered Email Assistant',
    description: 'Designed an intelligent email assistant capable of autonomous triage, drafting responses, scheduling meetings, and inbox management. Built with LangGraph for agent orchestration, Google Gemini 2.5 as the core LLM, and persistent memory for long-term context handling.',
    image: null,
    imageGradient: 'from-blue-400 to-indigo-600',
    tags: ['LangGraph', 'LangChain', 'Google Gemini', 'Gmail API', 'AI Agents', 'Human-in-the-Loop', 'Workflow Orchestration', 'Persistent Memory'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2 weeks',
    year: '2025',
    client: 'Real-World Prototyping',
    featured: true,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/Email-Assistance-Agent/blob/master' },
      { type: 'demo', url: 'https://vimeo.com/1111290857?share=copy' }
    ],
  },
  {
    id: 'github-mcp-agent',
    title: 'GitHub MCP Agent',
    description: 'Built a conversational AI agent integrating with GitHub\'s Model Context Protocol (MCP). Allows tool discovery, configuration, and execution through natural language queries. Powered by LangGraph orchestration, Llama 3.3 70B, and Weaviate for hybrid semantic search.',
    image: null,
    imageGradient: 'from-purple-500 to-pink-600',
    tags: ['LangGraph', 'Llama 3.3', 'Weaviate', 'GitHub MCP', 'Docker', 'Semantic Search', 'AI Agents', 'Vector Database'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2 weeks',
    year: '2025',
   client: 'Real-World Prototyping',
    featured: true,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/github-mcp-agent/blob/master' },
      { type: 'demo', url: 'https://vimeo.com/1118396656?share=copy' }
    ],
  },
  {
    id: 'environmental-surveillance-ai',
    title: 'Real-Time Surveillance AI System',
    description: 'Developed a real-time monitoring system with anomaly detection, ensemble ML models (XGBoost, LightGBM), and time-series forecasting. Features interactive dashboards with Plotly and Streamlit, real-time alerting, and predictive analytics for trend detection and risk modeling.',
    image: null,
    imageGradient: 'from-teal-500 to-blue-600',
    tags: ['Python', 'Streamlit', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Plotly', 'Time Series', 'Machine Learning', 'Dashboard'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '1 week',
    year: '2025',
    client: 'Real-World Prototyping',
    featured: true,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/Wastewater-Surveillance-AI-System/blob/master' },
      { type: 'demo', url: 'https://vimeo.com/1117814824?share=copy' }
    ],
  },
  {
    id: 'risk-prediction-ai',
    title: 'AI Risk Prediction System',
    description: 'Implemented a risk prediction engine combining ensemble ML models, multi-factor data analysis, and bilingual dashboards. Provides proactive monitoring with dynamic scoring, visualization, and insights for early decision-making and risk management.',
    image: null,
    imageGradient: 'from-orange-500 to-red-600',
    tags: ['Python', 'Streamlit', 'Scikit-learn', 'XGBoost', 'LightGBM', 'Plotly', 'Machine Learning', 'Dashboard', 'Risk Prediction'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '1 week',
    year: '2025',
   client: 'Real-World Prototyping',
    featured: true,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/Thiqah-Foods-AI/tree/master' },
      { type: 'demo', url: 'https://vimeo.com/1118413096?share=copy' }
    ],
  },
  {
    id: 'ai-resume-assistant',
    title: 'AI Resume Assistant',
    description: 'Created an AI assistant for career support with FastAPI and React. Features resume analysis, job-specific cover letter generation, tailored interview questions, and RAG-based job insights retrieval using LangChain, Google Gemini, and MongoDB.',
    image: null,
    imageGradient: 'from-green-500 to-blue-600',
    tags: ['Python', 'FastAPI', 'React', 'LangChain', 'Google Gemini', 'MongoDB', 'Pinecone', 'RAG Systems', 'Career AI'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '1 months',
    year: '2024',
   client: 'Real-World Prototyping',
    featured: true,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/JobSeeker/blob/main' },
      { type: 'demo', url: 'https://vimeo.com/1118414850?share=copy' }
    ],
  },
  {
    id: 'facial-verification-system',
    title: 'Facial Recognition & Identity Verification',
    description: 'Built a biometric verification system integrating FaceNet embeddings for facial recognition, AWS Textract for OCR, and Flask APIs for deployment. Includes image–document cross-validation, JWT-based authentication, MongoDB for secure storage, and AWS S3 for media handling.',
    image: null,
    imageGradient: 'from-purple-600 to-indigo-700',
    tags: ['Python', 'Flask','React','PyTorch', 'OpenCV', 'dlib', 'AWS Textract', 'MongoDB', 'Amazon S3', 'JWT Authentication', 'Biometric Systems'],
    category: 'Full-Stack',
    status: 'Completed',
    timeline: '1 months',
    year: '2024',
    client: 'Real-World Prototyping',
    featured: true,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/kyc-api/blob/main/' },
      { type: 'demo', url: 'https://www.loom.com/share/10dbf7e324724eecaeb4fbfe86bb88dc?sid=b461ea41-88df-4542-abc6-0d7c18513bb1' }
    ],
  },
  {
    id: 'podcast-platform',
    title: 'AI-Powered Podcast Platform',
    description: 'Built an end-to-end system using AWS Transcribe, Comprehend, OpenSearch, SageMaker, CrewAI, and DeepSeek to convert podcasts into structured, searchable insights. Implemented automated evaluation pipelines and visualization dashboards for real-time analysis.',
    image: null,
    imageGradient: 'from-pink-500 to-red-600',
    tags: ['AWS Transcribe', 'AWS Comprehend', 'OpenSearch', 'SageMaker', 'CrewAI', 'DeepSeek', 'NLP', 'Speech-to-Text', 'Podcast Analytics'],
    category: 'Cloud',
    status: 'Completed',
    timeline: ' 2 weeks',
    year: '2025',
    client: 'Independent Project',
    featured: false,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/Podcast-Platform' }
    ],
  },
  {
    id: 'genai-learning-platform',
    title: 'Generative AI Learning Platform',
    description: 'Developed an adaptive English learning prototype leveraging Qwen LLM on Vertex AI with RLHF. Integrated Google Speech APIs for interactive voice-based learning, real-time assessment, and dynamic content generation pipelines for personalized learning paths.',
    image: null,
    imageGradient: 'from-indigo-500 to-blue-600',
    tags: ['Qwen LLM', 'RLHF', 'Google Speech APIs', 'Vertex AI', 'Generative AI', 'Adaptive Learning', 'NLP', 'Speech Recognition'],
    category: 'Cloud',
    status: 'Completed',
    timeline: '2 weeks',
    year: '2025',
    client: 'Independent Project',
    featured: false,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/GenAI-Learning-Platform' }
    ],
  },
  {
    id: 'crop-disease-chatbot',
    title: 'Crop Disease Detection & Advisory Chatbot',
    description: 'Developed an AI-powered system to detect crop conditions from images and provide advisory guidance. Utilizes OpenCV and TensorFlow for image analysis, spaCy for generating contextual recommendations, and integrates with agricultural data sources for enriched insights.',
    image: null,
    imageGradient: 'from-green-500 to-lime-600',
    tags: ['Python', 'OpenCV', 'TensorFlow', 'spaCy', 'Computer Vision', 'NLP', 'Advisory Chatbot', 'Image Analysis'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '2 weeks',
    year: '2024',
    client: 'Independent Project',
    featured: false,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/Crop-Disease-Detection-and-Advisory-Chatbot'}
    ],
  },
  {
    id: 'speech-emotion-analyzer',
    title: 'Speech Emotion Analyzer',
    description: 'Built a neural network-based system to recognize emotions from spoken audio. Uses librosa for audio feature extraction, TensorFlow for model training and classification, and provides real-time emotion detection suitable for conversational analysis or interactive applications.',
    image: null,
    imageGradient: 'from-blue-400 to-indigo-600',
    tags: ['Python', 'Librosa', 'TensorFlow', 'Neural Networks', 'Audio Processing', 'Emotion Recognition', 'Speech Analysis', 'Real-Time AI'],
    category: 'AI/ML',
    status: 'Completed',
    timeline: '3 weeks',
    year: '2024',
    client: 'Independent Project',
    featured: false,
    links: [
      { type: 'github', url: 'https://github.com/IbtissamEchchaibi19/Speech-Emotion-Analyzer' }
    ],
  },

]

const categories = ['All', 'AI/ML', 'Full-Stack', 'Cloud']

const getProjectIcon = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return <Brain className="w-8 h-8" />
    case 'Full-Stack':
      return <Code className="w-8 h-8" />
    case 'Distributed Systems':
      return <Database className="w-8 h-8" />
    default:
      return <Cpu className="w-8 h-8" />
  }
}

const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return <Brain className="w-4 h-4" />
    case 'Full-Stack':
      return <Code className="w-4 h-4" />
    case 'Distributed Systems':
      return <Database className="w-4 h-4" />
    default:
      return <Cpu className="w-4 h-4" />
  }
}

// Skills component with expand/collapse functionality
function ProjectSkills({ tags, projectId }: { tags: string[], projectId: string }) {
  const [expandedProjects, setExpandedProjects] = useState<Set<string>>(new Set())
  const maxVisibleTags = 4
  const isExpanded = expandedProjects.has(projectId)
  const hasMoreTags = tags.length > maxVisibleTags

  const toggleExpanded = () => {
    const newExpandedProjects = new Set(expandedProjects)
    if (isExpanded) {
      newExpandedProjects.delete(projectId)
    } else {
      newExpandedProjects.add(projectId)
    }
    setExpandedProjects(newExpandedProjects)
  }

  const visibleTags = isExpanded ? tags : tags.slice(0, maxVisibleTags)

  return (
    <div className="space-y-2">
      <div className="flex flex-wrap gap-1">
        {visibleTags.map((tag) => (
          <Badge key={tag} variant="secondary" className="text-xs">
            {tag}
          </Badge>
        ))}
        {hasMoreTags && (
          <button
            onClick={toggleExpanded}
            className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium rounded-md border border-border bg-background hover:bg-accent hover:text-accent-foreground transition-colors"
          >
            {isExpanded ? (
              <>
                <ChevronUp className="w-3 h-3" />
                <span>Show Less</span>
              </>
            ) : (
              <>
                <span>+{tags.length - maxVisibleTags}</span>
                <ChevronDown className="w-3 h-3" />
              </>
            )}
          </button>
        )}
      </div>
    </div>
  )
}

export default function ProjectsPage() {
  // Helper function to get details for each link type
  const getLinkDetails = (type: string) => {
    switch (type) {
      case 'github':
        return { text: 'View Code', icon: <Github className="w-4 h-4" /> }
      case 'freelancer':
        return { text: 'Project Details', icon: <ExternalLink className="w-4 h-4" /> }
      case 'live':
        return { text: 'Live Site', icon: <Rocket className="w-4 h-4" /> }
      case 'kaggle':
        return { text: 'View Notebook', icon: <ExternalLink className="w-4 h-4" /> }
      default:
        return { text: 'View Demo', icon: <ExternalLink className="w-4 h-4" /> }
    }
  }

  // Counts per category for tab badges
  const categoryCounts: Record<string, number> = Object.fromEntries(
    categories.map((c) => [
      c,
      c === 'All' ? projects.length : projects.filter((p) => p.category === c).length,
    ])
  )

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                My Projects
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                A showcase of innovative solutions, from AI-powered applications to full-stack platforms. Each project represents a unique challenge solved with cutting-edge technology and best practices.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary" className="text-sm">
                  {projects.length} Projects Completed
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  Multiple Industries
                </Badge>
                <Badge variant="secondary" className="text-sm">
                  AI/ML Specialist
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="h-auto rounded-full bg-background/50 supports-[backdrop-filter]:bg-background/60 backdrop-blur border border-primary/10 shadow-sm p-1 gap-1">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="group relative rounded-full px-4 py-2 text-sm font-medium text-muted-foreground transition-all
                               hover:text-foreground hover:bg-background/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
                               data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm data-[state=active]:ring-1 data-[state=active]:ring-primary/20"
                    >
                      <span className="flex items-center gap-2">
                        <span className="opacity-80">{getCategoryIcon(category)}</span>
                        <span>{category}</span>
                        <span
                          className="ml-1 inline-flex items-center justify-center text-[10px] font-semibold px-2 py-0.5 rounded-full
                                     bg-primary/10 text-primary group-data-[state=active]:bg-primary group-data-[state=active]:text-primary-foreground"
                        >
                          {categoryCounts[category]}
                        </span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects
                      .filter((project) => category === 'All' || project.category === category)
                      .map((project) => (
                        <Card key={project.id} className="flex flex-col overflow-hidden group hover:shadow-lg transition-shadow duration-300">
                          <div className="relative overflow-hidden">
                            <div className={`w-full h-60 bg-gradient-to-br ${project.imageGradient} flex flex-col items-center justify-center group-hover:scale-105 transition-transform duration-300 relative`}>
                              <div className="text-white text-center p-4 z-10">
                                <div className="mb-3 opacity-80">
                                  {getProjectIcon(project.category)}
                                </div>
                                <h3 className="font-bold text-base mb-1 line-clamp-2">{project.title}</h3>
                                <p className="text-xs opacity-80">{project.category}</p>
                              </div>
                              <div className="absolute inset-0 bg-black/20"></div>
                            </div>
                            <div className="absolute top-4 left-4">
                              <Badge
                                variant={project.status === 'Completed' ? 'default' : 'secondary'}
                                className="text-xs"
                              >
                                {project.status}
                              </Badge>
                            </div>
                            {project.featured && (
                              <div className="absolute top-4 right-4">
                                <Badge variant="outline" className="text-xs bg-background/80 backdrop-blur-sm">
                                  Featured
                                </Badge>
                              </div>
                            )}
                          </div>

                          <div className="flex flex-col flex-grow">
                            <CardHeader>
                              <div className="flex items-center justify-between mb-2">
                                <Badge variant="outline" className="text-xs">
                                  {project.category}
                                </Badge>
                                <div className="flex items-center text-xs text-muted-foreground">
                                  <Calendar className="w-3 h-3 mr-1" />
                                  {project.year}
                                </div>
                              </div>
                              <CardTitle className="text-xl">{project.title}</CardTitle>
                              <CardDescription className="text-sm">
                                {project.description}
                              </CardDescription>
                            </CardHeader>

                            <CardContent className="flex-grow">
                              <div className="mb-4">
                                <div className="flex items-center text-xs text-muted-foreground mb-2">
                                  <Clock className="w-3 h-3 mr-1" />
                                  {project.timeline}
                                </div>
                                <p className="text-sm text-muted-foreground">
                                  Client: {project.client}
                                </p>
                              </div>
                              
                              {/* Updated Skills Section with Expandable Functionality */}
                              <ProjectSkills tags={project.tags} projectId={project.id} />
                            </CardContent>

                            <CardFooter className="flex-wrap gap-x-4 gap-y-2 border-t pt-4 mt-auto">
                              {project.links && project.links.length > 0 ? (
                                project.links.map((link) => {
                                  const details = getLinkDetails(link.type)
                                  return (
                                    <Link
                                      key={link.type}
                                      href={link.url}
                                      target="_blank"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center text-sm font-medium text-primary hover:underline"
                                    >
                                      {details.icon}
                                      <span className="ml-2">{details.text}</span>
                                    </Link>
                                  )
                                })
                              ) : (
                                <p className="text-sm text-muted-foreground italic">No public links available.</p>
                              )}
                            </CardFooter>
                          </div>
                        </Card>
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Ready to Start Your Project?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let&apos;s discuss how I can help bring your vision to life with innovative AI solutions and robust full-stack development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg">
                <Link href="/contact">Start a Conversation</Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <Link href="/resume">Download Resume</Link>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}