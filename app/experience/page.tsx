import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { Calendar, MapPin, Building, Code, Brain, Users, Award, ExternalLink, Download } from 'lucide-react'

export const metadata: Metadata = {
  title: 'Experience | Ibtissam Ech Chaibi - AI Engineer & Full-Stack Developer',
  description: 'Explore Ibtissam Ech Chaibi’s professional experience, projects, and achievements in AI, ML, and full-stack development.',
}

const workExperience = [
  {
    title: 'AI Engineer – Hack4SaferPlates Hackathon (2nd Place Winner)',
    company: 'SFDA',
    location: 'Riyadh, Saudi Arabia (Remote)',
    period: 'Sept 2025 - Sept 2025',
    type: 'Hackathon',
    description: 'Contributed to the AI component of an innovative food safety platform as part of the Fujairah Research Centre team, achieving 2nd place.',
    achievements: [
      'Developed an AI-powered PDF intelligence system to extract and verify food safety parameters.',
      'Designed an ensemble-based risk prediction model with time-series features and anomaly detection.'
    ],
    technologies: ['Python', 'Hugging Face (BART-large-MNLI)', 'scikit-learn', 'XGBoost', 'LightGBM', 'Random Forest', 'Gradient Boosting'],
  },
  {
    title: 'AI Software Engineer',
    company: 'Fujairah Research Center',
    location: 'Fujairah, UAE (On site)',
    period: 'Jan 2025 - Sept 2025',
    type: 'Full-Time',
    description: 'Built a multi-agent AI platform for honey quality verification, document processing, and production analytics for beekeepers and honey producers.',
    achievements: [
      'Fine-tuned Mistral Instruct 7B on specialized datasets with W&B monitoring for expert knowledge retrieval.',
      'Automated compliance validation of lab reports using Azure Document Intelligence with RoBERTa-base-SQuAD2 and BART-large-MNLI.',
      'Developed a RAG pipeline with LangChain, Neo4j, and LLaMA 4, tracked with LangSmith for intelligent document retrieval.',
      'Orchestrated scalable deployment of FastAPI microservices on Azure using MCP, LangGraph, and Docker.'
    ],
    technologies: ['Python', 'Hugging Face', 'LangChain', 'LangGraph', 'LangSmith', 'Neo4j', 'Mistral', 'LLaMA', 'Azure AI', 'Docker', 'W&B', 'Gradio', 'Dash'],
  },
  {
    title: 'AI Software Engineer (Contract)',
    company: 'Freelance Client',
    location: 'UAE (Remote)',
    period: 'Jul 2025 - Aug 2025',
    type: 'Freelance',
    description: 'Enhanced an aviation medical chatbot for pilots and crew using RAG, NLP, and domain-specific embeddings.',
    achievements: [
      'Integrated BioBERT and ClinicalBERT embeddings with Chroma for fast semantic search and compliance guidance.',
      'Designed system architecture including NER-based preprocessing, synonym mapping, and knowledge base structuring.',
      'Supported roadmap planning for testing, validation, and deployment aligned with aviation safety regulations.'
    ],
    technologies: ['Python', 'LangChain', 'LLaMA', 'BioBERT', 'ClinicalBERT', 'Chroma'],
  },
  {
    title: 'AI Software Engineer (Part-time)',
    company: 'Devtospace',
    location: 'Paris, France (Remote)',
    period: 'Sept 2024 - Dec 2024',
    type: 'Part-time',
    description: 'Developed a cloud-based KYC system on AWS combining AI-powered computer vision and automated document processing.',
    achievements: [
      'Implemented identity verification and structured data extraction using Amazon Textract, PyTorch, and OpenCV.',
      'Engineered liveness detection with Amazon Rekognition for anti-spoofing and real-time tracking.',
      'Deployed secure Flask REST API on AWS EC2 with S3 storage, Docker containerization, and CloudWatch monitoring integrated with a React front-end.'
    ],
    technologies: ['PyTorch', 'OpenCV', 'Amazon Rekognition', 'Amazon Textract', 'Amazon S3', 'Flask', 'Docker', 'MongoDB', 'AWS EC2', 'AWS CloudWatch', 'React'],
  },
  {
    title: 'AI Software Engineer Intern',
    company: '3D Smart Factory',
    location: 'Mohammedia, Morocco (Hybrid)',
    period: 'Jun 2024 - Sept 2024',
    type: 'Internship',
    description: 'Engineered a RAG-powered platform with LangChain and Google Gemini for personalized interview coaching and job intelligence.',
    achievements: [
      'Developed NLP pipelines with NLTK and Hugging Face Transformers for semantic search and document understanding.',
      'Integrated Pinecone for fast vector search and context-aware responses.',
      'Developed a job intelligence module using Google APIs to provide real-time market insights and adaptive job recommendations.',
      'Deployed containerized FastAPI backend with MongoDB on AWS, monitored via LangSmith, integrated with React front-end.'
    ],
    technologies: ['LangChain', 'Gemini Pro Vision', 'NLTK', 'SpaCy', 'Transformers', 'Pinecone', 'FastAPI', 'MongoDB', 'AWS', 'Google APIs', 'Docker', 'LangSmith', 'React'],
  },
  {
    title: 'ML Software Engineer Intern',
    company: 'Technocolabs Softwares',
    location: 'India (Remote)',
    period: 'May 2024 - Jun 2024',
    type: 'Internship',
    description: 'Built an ML system for automated mortgage approval and prepayment risk assessment.',
    achievements: [
      'Engineered borrower profile analysis using statistical modeling and advanced analytics.',
      'Created visualizations with Matplotlib and Seaborn to highlight key risk factors.',
      'Deployed a Flask web app integrating the full ML pipeline for real-time predictions.'
    ],
    technologies: ['Python', 'pandas', 'NumPy', 'Matplotlib', 'Seaborn', 'scikit-learn', 'Flask'],
  },
  {
    title: 'AI Engineer – Generative AI Mini Hackathon (2nd Place Winner)',
    company: 'Leyton',
    location: 'Casablanca Metropolitan Area · On-site',
    period: 'Mar 2024 - Mar 2024',
    type: 'Contract',
    description: 'Participated as part of ENSEM and EHTP teams, securing 2nd place for developing a Smart Retrieval System for research PDFs.',
    achievements: [
      'Engineered a Smart Retrieval System using LLaMA 2 and LlamaIndex, enabling semantic querying of text and images within PDFs.',
      'Automated Word report generation with integrated summarization, reducing report creation time by 60%.',
      'Developed a user-friendly Streamlit interface for researchers to extract actionable R&D insights with minimal technical expertise.'
    ],
    technologies: ['Python', 'LLaMA 2', 'LlamaIndex', 'ChromaDB', 'NLTK', 'Streamlit', 'Analytics', 'Visualization', 'Git', 'Language Processing', 'Large Language Models (LLM)', 'Problem Solving', 'Analytical Skills'],
  },
  {
    title: 'Software Engineer Intern',
    company: 'DigitalSky',
    location: 'Morocco (Hybrid)',
    period: 'Jun 2023 - Aug 2023',
    type: 'Internship',
    description: 'Developed a project management web application with React and Express.js.',
    achievements: [
      'Implemented JWT authentication and role-based dashboards for secure task management.',
      'Integrated MongoDB for real-time metrics and analytics.',
    ],
    technologies: ['React', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'Docker'],
  },
]

const education = [
  {
    degree: 'Engineering degree, Software Engineering and Digitalisation',
    school: 'ENSEM Engineering School',
    location: 'Casablanca, Morocco',
    period: 'Sept 2022 - Jun 2025',
    status: 'Current',
    description: 'Engineering program specializing in software engineering and digitalisation.',
    achievements: [
      'Completed preparatory classes (CPGE) for admission to major engineering schools.',
      'Focused on advanced software engineering, AI, ML, and cloud technologies.'
    ],
    coursework: ['Software Engineering', 'AI & ML', 'Data Structures', 'Algorithms', 'Cloud Computing'],
  },
  {
    degree: 'Mathematics and Physics Diploma for Admission to National Engineering Schools',
    school: 'CPGE Preparatory Classes',
    location: 'Taza, Morocco',
    period: 'Sept 2020 - Jul 2022',
    status: 'Completed',
    description: 'Two-year intensive program in Mathematics and Physics to prepare for competitive engineering school exams.',
    achievements: [
      'Acquired strong foundations in mathematics, physics, and computer science.',
      'Successfully admitted to ENSEM Engineering School.',
    ],
    coursework: ['Mathematics', 'Physics', 'Computer Science'],
  },
]

const projects = [
  {
    title: 'Email Assistant Agent',
    description: 'Built an autonomous email assistant with LangGraph and Google Gemini for inbox triage, drafting, and scheduling, integrated with LangSmith for workflow monitoring and memory persistence.',
  },
  {
    title: 'GitHub MCP Tools Agent',
    description: 'Developed a conversational agent to automate GitHub MCP operations using LangGraph orchestration, LLaMA 3.3, Weaviate vector search, Docker MCP toolkits, and LangSmith observability.',
  },
  {
    title: 'AI-Powered Podcast Platform',
    description: 'Designed an end-to-end pipeline to convert podcasts into structured, searchable insights using AWS Transcribe, Comprehend, OpenSearch, SageMaker, CrewAI, and DeepSeek for advanced NLP analysis.',
  },
  {
    title: 'Generative AI Learning Platform',
    description: 'Engineered an adaptive English learning prototype leveraging Qwen LLM on Vertex AI with RLHF, Google Speech APIs for interactive voice feedback, and ElasticSearch for personalized learner analytics.',
  },
]


export default function ExperiencePage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                Professional Experience
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                AI Engineer specialized in Generative AI, LLMs, and multi-agent systems with extensive hands-on experience in real-world AI solutions and cloud deployment.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/resume">
                    <Download className="w-4 h-4 mr-2" />
                    Download Resume
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/contact">
                    Get in Touch
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <Tabs defaultValue="experience" className="w-full">
                <div className="flex justify-center mb-12">
                  <TabsList className="grid w-full max-w-md grid-cols-4">
                    <TabsTrigger value="experience">Work</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="projects">Projects</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                  </TabsList>
                </div>

                <TabsContent value="experience">
                  <div className="space-y-8">
                    {workExperience.map((job, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div>
                              <CardTitle className="text-xl mb-2">{job.title}</CardTitle>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Building className="w-4 h-4 mr-1" />
                                  {job.company}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {job.location}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {job.period}
                                </div>
                              </div>
                            </div>
                            <Badge variant="default">{job.type}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-muted-foreground">{job.description}</p>
                          <div>
                            <h4 className="font-semibold mb-3">Key Achievements</h4>
                            <ul className="space-y-2">
                              {job.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-3">Technologies Used</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.technologies.map((tech) => (
                                <Badge key={tech} variant="secondary" className="text-xs">
                                  {tech}
                                </Badge>
                              ))}
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="education">
                  <div className="space-y-8">
                    {education.map((edu, index) => (
                      <Card key={index} className="overflow-hidden">
                        <CardHeader className="pb-4">
                          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
                            <div>
                              <CardTitle className="text-xl mb-2">{edu.degree}</CardTitle>
                              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                                <div className="flex items-center">
                                  <Building className="w-4 h-4 mr-1" />
                                  {edu.school}
                                </div>
                                <div className="flex items-center">
                                  <MapPin className="w-4 h-4 mr-1" />
                                  {edu.location}
                                </div>
                                <div className="flex items-center">
                                  <Calendar className="w-4 h-4 mr-1" />
                                  {edu.period}
                                </div>
                              </div>
                            </div>
                            <Badge variant={edu.status === 'Current' ? 'default' : 'secondary'}>{edu.status}</Badge>
                          </div>
                        </CardHeader>
                        <CardContent className="space-y-6">
                          <p className="text-muted-foreground">{edu.description}</p>
                          <div>
                            <h4 className="font-semibold mb-3">Achievements</h4>
                            <ul className="space-y-2">
                              {edu.achievements.map((achievement, idx) => (
                                <li key={idx} className="flex items-start">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-3 mt-2 flex-shrink-0" />
                                  <span className="text-muted-foreground">{achievement}</span>
                                </li>
                              ))}
                            </ul>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="projects">
                  <div className="space-y-6">
                    {projects.map((project, idx) => (
                      <Card key={idx} className="overflow-hidden">
                        <CardContent>
                          <CardTitle className="text-lg mb-2">{project.title}</CardTitle>
                          <p className="text-muted-foreground">{project.description}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </TabsContent>

                <TabsContent value="skills">
                  <div className="space-y-8">
                    <h2 className="text-3xl font-bold text-center mb-8">Technical Skills & Tools</h2>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {[
                        'Python', 'JavaScript', 'Node.js', 'SQL', 'pandas', 'NumPy', 'NLTK', 'spaCy', 'regex', 'NLPAug', 'BeautifulSoup', 'OpenCV',
                        'MongoDB', 'PostgreSQL', 'MySQL', 'Weaviate', 'Pinecone', 'ChromaDB', 'FAISS', 'Elasticsearch',
                        'PyTorch', 'TensorFlow', 'Hugging Face Transformers', 'LangChain', 'LangGraph', 'CrewAI', 'LLaMA', 'Mistral', 'DeepSeek', 'Qwen',
                        'AWS', 'Azure', 'GCP', 'LangSmith', 'W&B', 'MLflow', 'FastAPI', 'Flask', 'Streamlit', 'Gradio', 'React', 'Dash'
                      ].map(skill => (
                        <Badge key={skill} variant="secondary">{skill}</Badge>
                      ))}
                    </div>
                  </div>
                </TabsContent>
              </Tabs>
            </div>
          </div>
        </section>

        <section className="py-16 bg-card">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <Brain className="w-12 h-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">Ready to Leverage This Experience?</h2>
              <p className="text-xl text-muted-foreground mb-8">
                I&apos;m ready to bring AI, ML, and cloud expertise to your next project.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/contact">Let&apos;s Discuss Your Project</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <Link href="/projects">View My Work</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}