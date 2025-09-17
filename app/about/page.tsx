import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Brain,
  Code,
  Award,
  Users,
  Coffee,
  Globe,
  BookOpen,
  ExternalLink,
  Calendar,
  MapPin
} from 'lucide-react'

export const metadata: Metadata = {
  title: 'About | AI Engineer & Applied ML Specialist',
  description: 'Learn about Ibtissam Ech-Chaibi, an AI Engineer specializing in Generative AI, LLMs, and multi-agent systems, with experience in real-world AI solutions.',
}

const skills = [
  { category: 'Software Development', items: ['Python', 'JavaScript', 'Node.js','React','NextJS', 'SQL'] },
  { category: 'Data Preparation & Augmentation', items: ['pandas', 'NumPy', 'NLTK', 'spaCy', 'regex', 'OpenCV', 'NLPAug', 'BeautifulSoup'] },
  { category: 'Databases & Vector Stores', items: ['MongoDB', 'PostgreSQL', 'MySQL', 'Weaviate', 'Pinecone', 'ChromaDB', 'FAISS', 'Elasticsearch'] },
  { category: 'AI Development Tools', items: ['PyTorch', 'TensorFlow', 'HuggingFace Transformers', 'LangChain', 'LangGraph', 'CrewAI', 'LLaMA', 'Mistral', 'DeepSeek', 'Qwen', 'MCP'] },
  { category: 'Cloud AI Solutions', items: ['AWS (SageMaker, Textract, Rekognition)', 'Azure (Document Intelligence, OpenAI Service)', 'GCP (Vertex AI, Gemini, Google AI Studio)'] },
  { category: 'Deployment & Monitoring', items: ['Docker', 'FastAPI', 'Flask', 'Streamlit', 'Gradio', 'LangSmith', 'Weights & Biases', 'MLflow'] },
]

const achievements = [
  {
    title: 'Honey Quality Verification Multi-Agent System',
    description: 'Built a multi-agent AI system integrating LangChain, LLaMA/Mistral, Azure AI, and dashboards for actionable insights.',
    icon: Award,
    year: '2025',
  },
  {
    title: 'Aviation Medical RAG Chatbot',
    description: 'Enhanced a medical guidance chatbot using BioBERT embeddings, FAISS vector search, and NLP pipelines for regulatory compliance.',
    icon: Brain,
    year: '2025',
  },
  {
    title: 'Cloud-Based KYC System',
    description: 'Developed AI-powered document processing and liveness detection on AWS with EC2, S3, Textract, Rekognition, and Flask APIs.',
    icon: Code,
    year: '2024',
  },
  {
    title: 'Personalized AI Interview Coaching Platform',
    description: 'Engineered a RAG-powered platform with LangChain, Google Gemini, Pinecone, and FastAPI for resume insights and job recommendations.',
    icon: Users,
    year: '2024',
  },
]

const values = [
  {
    title: 'Innovation First',
    description: 'I strive to push boundaries with AI, delivering creative solutions to complex real-world problems.',
    icon: Brain,
    gradient: 'from-blue-500/20 to-purple-500/20',
  },
  {
    title: 'Quality & Craftsmanship',
    description: 'Every system I build follows best practices, modular design, and maintainable architecture.',
    icon: Award,
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Continuous Learning',
    description: 'I stay at the forefront of AI and ML technologies, exploring emerging models and frameworks.',
    icon: BookOpen,
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Collaboration',
    description: 'I value teamwork and open communication to deliver impactful and scalable AI solutions.',
    icon: Users,
    gradient: 'from-pink-500/20 to-violet-500/20',
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* 3D Animated Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>
      
      <div className="relative z-10">
        {/* Hero Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
  {/* Text Column */}
  <div>
    <div className="flex items-center mb-4">
      <Badge variant="outline" className="mr-3">About Me</Badge>
      <div className="flex items-center text-sm text-muted-foreground">
        <MapPin className="w-4 h-4 mr-1" /> Casablanca, Morocco
      </div>
    </div>
    <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
      Crafting Scalable AI Solutions
    </h1>
    <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
      I&apos;m an AI Engineer specializing in Generative AI, LLMs, and multi-agent systems. I design real-world AI systems, including RAG pipelines, cloud AI solutions, and agentic AI architectures, with professional experience across UAE, France, and Morocco.
    </p>
    <div className="flex flex-col sm:flex-row gap-4">
      <Button asChild size="lg">
        <Link href="/contact">Let&apos;s Work Together</Link>
      </Button>
      <Button variant="outline" size="lg" asChild>
        <Link href="/resume">
          <ExternalLink className="w-4 h-4 mr-2" /> View Resume
        </Link>
      </Button>
    </div>
  </div>

  {/* Image Column */}
  <div className="flex justify-center lg:justify-end">
    <img
      src="https://raw.githubusercontent.com/IbtissamEchchaibi19/image-hub/main/linkdinpict.jpg"
      alt="Ibtissam Ech-Chaibi"
      className="rounded-xl w-80 h-auto object-cover shadow-lg"
    />
  </div>
</div>

            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">My Journey</h2>
              <div className="prose prose-lg max-w-none text-muted-foreground">
                <p className="text-lg leading-relaxed mb-6">
                  My journey into Computer Science began with two years of intensive mathematics and physics preparatory classes in Morocco,
                   which sharpened my problem-solving mindset and built the analytical foundation I still rely on today.
                </p>
                <p className="text-lg leading-relaxed mb-6">
                At ENSEM Engineering School, I deepened my expertise in software engineering and digitalization, where I transitioned from building secure full-stack applications to exploring the intelligence behind systems. Internships in Morocco and India introduced me to applied machine learning automating financial risk analysis, designing dashboards, and experimenting with NLP pipelines.
              </p>
                <p className="text-lg leading-relaxed mb-6">
                in France, I engineered a cloud-based KYC platform with liveness detection on AWS, while in the UAE, I built multi-agent AI platforms, fine-tuned domain-specific LLMs, and deployed scalable cloud architectures. Hackathon wins, freelance projects, and self-driven initiatives further reinforced my ability to turn complex AI models into actionable, real-world solutions.
                </p>
                <p className="text-lg leading-relaxed">
Today, I continue to push the boundaries of AI innovation, contribute to open-source projects, and share knowledge with the community, while constantly exploring emerging models, tools, and frameworks across different domains of computer science. .
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Technical Expertise</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {skills.map((skillGroup) => (
                  <Card key={skillGroup.category} className="hover:shadow-md transition-shadow">
                    <CardHeader>
                      <CardTitle className="text-lg">{skillGroup.category}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="flex flex-wrap gap-2">
                        {skillGroup.items.map((skill) => (
                          <Badge key={skill} variant="secondary" className="text-xs">
                            {skill}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">What Drives Me</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <Card key={value.title} className="relative overflow-hidden group hover:shadow-xl transition-all duration-300 border-0">
                    <div className={`absolute inset-0 bg-gradient-to-br ${value.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
                    <CardContent className="relative p-8">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-6">
                          <div className={`w-14 h-14 bg-gradient-to-br ${value.gradient} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <value.icon className="w-7 h-7 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center mb-3">
                            <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">
                              {value.title}
                            </h3>
                            <div className="ml-auto">
                              <Badge variant="outline" className="text-xs opacity-60">
                                0{index + 1}
                              </Badge>
                            </div>
                          </div>
                          <p className="text-muted-foreground leading-relaxed group-hover:text-foreground/80 transition-colors duration-300">
                            {value.description}
                          </p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">Key Achievements</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {achievements.map((achievement) => (
                  <Card key={achievement.title} className="hover:shadow-md transition-shadow">
                    <CardContent className="p-6">
                      <div className="flex items-start">
                        <div className="flex-shrink-0 mr-4">
                          <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                            <achievement.icon className="w-6 h-6 text-primary" />
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between mb-2">
                            <h3 className="text-lg font-semibold">{achievement.title}</h3>
                            <Badge variant="outline" className="text-xs">{achievement.year}</Badge>
                          </div>
                          <p className="text-muted-foreground">{achievement.description}</p>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Personal Touch Section */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6">
                <Coffee className="w-8 h-8 text-primary" />
              </div>
              <h2 className="text-3xl font-bold mb-6">Beyond the Code</h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                When I&apos;m not building AI solutions, I contribute to open-source projects, mentor aspiring developers, and explore emerging AI technologies. Beyond code, I enjoy creating content, reading AI blogs, delving into philosophy and psychology books, and engaging with podcasts as a curious lifelong learner. I thrive on collaboration and continuous learning to create impactful solutions
              </p>
              <div className="flex justify-center gap-8 text-sm text-muted-foreground">
                <div className="flex items-center"><Globe className="w-4 h-4 mr-2" />3 Languages</div>
                <div className="flex items-center"><BookOpen className="w-4 h-4 mr-2" />Continuous Learner</div>
                <div className="flex items-center"><Users className="w-4 h-4 mr-2" />Open Source Contributor</div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-br from-primary/5 to-primary/10 relative overflow-hidden">
          <div className="absolute inset-0 bg-grid-pattern opacity-5" />
          <div className="container mx-auto px-4 text-center relative">
            <div className="max-w-3xl mx-auto">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-primary/10 rounded-2xl mb-8 shadow-lg">
                <Code className="w-10 h-10 text-primary" />
              </div>
              <h2 className="text-4xl font-bold text-foreground mb-6">Let&apos;s Build Something Amazing</h2>
              <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto leading-relaxed">
                I&apos;m always excited to collaborate on innovative AI projects. Whether you need a scalable AI solution or full-stack expertise, let's connect and create something extraordinary.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="shadow-lg hover:shadow-xl transition-shadow">
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="shadow-lg hover:shadow-xl transition-shadow bg-background/80 backdrop-blur">
                  <Link href="/experience">View Experience</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}