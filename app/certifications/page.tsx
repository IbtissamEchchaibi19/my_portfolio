'use client' // Add this line at the very top

import { AnimatedBackground } from '@/components/3d/animated-background'
import { Separator } from '@/components/ui/separator'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Award, Calendar, ExternalLink, BookOpen, Trophy, Star, Brain, Code, Database, Cloud, GraduationCap } from 'lucide-react'

const certifications = [
  {
    title: 'Master LangGraph and LangChain with Ollama - Agentic RAG',
    provider: 'Udemy',
    issued: 'Sep 2025',
    skills: ['LangGraph', 'LangChain', 'Agentic RAG'],
    logo: 'Udemy',
    hasCredential: true,
    link: 'https://www.udemy.com/certificate/UC-58253f75-7feb-48bd-b2c4-6b357b1775ed/',
    category: 'AI/ML'
  },
  {
    title: 'LLM Engineering: Master AI, Large Language Models & Agents',
    provider: 'Udemy',
    issued: 'Jan 2025',
    skills: ['RAG', 'Agents', 'Fine Tuning'],
    logo: 'Udemy',
    hasCredential: true,
    link: 'https://www.udemy.com/certificate/UC-2f3bccc9-ce29-430b-a756-0e0556e74f2f/',
    category: 'AI/ML'
  },
  {
    title: 'Learn LlamaIndex by building FAST a real world generative AI LLM powered application (Python)',
    provider: 'Udemy',
    issued: 'Jan 2025',
    skills: ['LlamaIndex', 'Generative AI', 'LLM', 'Python'],
    logo: 'Udemy',
    hasCredential: true,
    link: 'https://www.udemy.com/certificate/UC-b792fdf4-319a-4e0a-beef-ab0468c3f04b/',
    category: 'AI/ML'
  },
  {
    title: 'Data Analysis with Python',
    provider: 'IBM',
    issued: 'Apr 2024',
    skills: ['Matplotlib', 'SQL', 'Python (Programming Language)', 'pandas', 'Seaborn'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://coursera.org/share/9018ab22e16d42e46d9f567d096d6755',
    category: 'Data Science'
  },
  {
    title: 'HTML & CSS & BOOTSTRAP',
    provider: 'Noble Work Foundation',
    issued: 'Feb 2023',
    skills: ['HTML', 'CSS', 'Bootstrap'],
    logo: 'Noble Work Foundation',
    hasCredential: true,
    link: 'https://www.udemy.com/certificate/UC-92979d15-6368-4065-a693-b03144fb0387/',
    category: 'Web Development'
  },
  {
    title: 'How the internet works & the web development process',
    provider: 'Udemy',
    issued: 'Feb 2023',
    skills: ['Web Development', 'Internet Protocols'],
    logo: 'Udemy',
    hasCredential: true,
    link: 'https://www.udemy.com/certificate/UC-bd03ee30-d616-4823-884a-61e5ae6ac69e/',
    category: 'Web Development'
  },
  {
    title: 'AWS Cloud Technical Essentials',
    provider: 'Amazon Web Services (AWS)',
    issued: 'Aug 2024',
    skills: ['Amazon S3', 'Amazon EC2'],
    logo: 'AWS',
    hasCredential: true,
    link: 'https://coursera.org/share/677fdf5a3bf87e21b1aa8b85f5558b23',
    category: 'Cloud Computing'
  },
  {
    title: 'Deep Learning with Python (TensorFlow)',
    provider: 'freeCodeCamp',
    issued: 'Jul 2024',
    skills: ['Keras', 'CNC', 'spaCy', 'LSTM', 'Python (Programming Language)'],
    logo: 'freeCodeCamp',
    hasCredential: true,
    link: 'https://freecodecamp.org/certification/btissam19/machine-learning-with-python-v7',
    category: 'AI/ML'
  },
  {
    title: 'Foundational Generative AI - Certificate',
    provider: 'iNeuron.ai',
    issued: 'Jul 2024',
    skills: ['Large Language Models (LLM)', 'Pinecone', 'LlamaIndex', 'LSTM', 'Python (Programming Language)'],
    logo: 'iNeuron.ai',
    hasCredential: true,
    link: 'https://learn.ineuron.ai/certificate/077bb0ca-40bc-4c5c-9b59-ec4302274309',
    category: 'AI/ML'
  },
  {
    title: 'IBM Data Science Proficiency Certificate',
    provider: 'IBM',
    issued: 'Jan 2024',
    skills: ['Matplotlib', 'Scikit-Learn', 'Applied Mathematics', 'pandas'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.coursera.org/account/accomplishments/specialization/CJYQN2B7BYWQ',
    category: 'Data Science'
  },
  {
    title: 'Data Visualization with Python',
    provider: 'IBM',
    issued: 'May 2024',
    skills: ['Matplotlib', 'Python (Programming Language)', 'pandas', 'Seaborn'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://coursera.org/share/5925bdce49015893d9f7783b52fba920',
    category: 'Data Science'
  },
  {
    title: 'AI Career Essentials',
    provider: 'ALX AiCE',
    issued: 'Feb 2024',
    skills: ['AI Fundamentals', 'Career Development'],
    logo: 'ALX',
    hasCredential: true,
    link: 'https://www.linkedin.com/in/ibtissam-ech-chaibi/details/certifications/1714659373688/single-media-viewer/?profileId=ACoAAD0LSm8BTySiI3P66gUW8ttt6J1ilB6_Miw',
    category: 'AI/ML'
  },
  {
    title: 'Machine Learning with Python',
    provider: 'IBM',
    issued: 'Mar 2024',
    skills: ['Scikit-Learn', 'Python (Programming Language)'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://coursera.org/share/f0c8124625495a812465bc7393917815',
    category: 'AI/ML'
  },
  {
    title: 'Python for Data Science, AI & Development',
    provider: 'IBM',
    issued: 'Mar 2024',
    skills: ['FastAPI', 'Matplotlib', 'Flask', 'Python (Programming Language)'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://coursera.org/share/1d9a08a9f4f6cbe5e3612c444edf572b',
    category: 'Data Science'
  },
  {
    title: 'Data Science Methodology',
    provider: 'IBM',
    issued: 'Feb 2024',
    skills: ['Data Science', 'Methodology'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://coursera.org/share/43b8d538772cde29e185b98ed073483d',
    category: 'Data Science'
  },
  {
    title: 'Tools for Data Science',
    provider: 'IBM',
    issued: 'Feb 2024',
    skills: ['Data Science Tools'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://coursera.org/share/af1d9b2487c5aedf24e0f4cc4edb2440',
    category: 'Data Science'
  },
  {
    title: 'What is Data Science?',
    provider: 'IBM',
    issued: 'Feb 2024',
    skills: ['Data Science Fundamentals'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://www.coursera.org/account/accomplishments/certificate/WKS7RGP8UK7L',
    category: 'Data Science'
  },
  {
    title: 'Developing Back-End Apps with Node.js and Express',
    provider: 'IBM',
    issued: 'Jan 2024',
    skills: ['React.js', 'Express.js', 'Node.js'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://coursera.org/share/b025f8ddca696d82e1b737480c82b769',
    category: 'Web Development'
  },
  {
    title: 'Developing Front-End Apps with React',
    provider: 'IBM',
    issued: 'Dec 2023',
    skills: ['React.js', 'Frontend Development'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://coursera.org/share/3b7b7f890c9a72d6e2a4d2247f1c4d77',
    category: 'Web Development'
  },
  {
    title: 'Introduction to Cloud Computing',
    provider: 'IBM',
    issued: 'Jan 2024',
    skills: ['Amazon S3', 'Amazon EC2'],
    logo: 'IBM',
    hasCredential: true,
    link: 'https://coursera.org/share/438a8e16af4786782c8a739aef79e999',
    category: 'Cloud Computing'
  },
  {
    title: 'Git command',
    provider: 'Udemy',
    issued: 'Aug 2023',
    skills: ['Git'],
    logo: 'Udemy',
    hasCredential: true,
    link: 'https://www.udemy.com/certificate/UC-8b181660-9a19-4733-a104-7d68a44b77a5/',
    category: 'Web Development'
  },
  {
    title: 'What is a web development framework?',
    provider: 'Udemy',
    issued: 'Apr 2023',
    skills: ['Web Development Frameworks'],
    logo: 'Udemy',
    hasCredential: true,
    link: 'https://www.udemy.com/certificate/UC-b6bd7b83-eecc-4f11-ac84-772f83acb5ad/',
    category: 'Web Development'
  },
  {
    title: 'TailwindCSS',
    provider: 'Udemy',
    issued: 'Apr 2023',
    skills: ['TailwindCSS'],
    logo: 'Udemy',
    hasCredential: true,
    link: 'https://www.udemy.com/certificate/UC-81f76853-7cf7-4ae7-a57c-187c3c77108e/',
    category: 'Web Development'
  }
]

const categories = ['All', 'AI/ML', 'Data Science', 'Web Development', 'Cloud Computing']

// Helper function to get category icons
const getCategoryIcon = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return <Brain className="w-4 h-4" />
    case 'Data Science':
      return <Database className="w-4 h-4" />
    case 'Web Development':
      return <Code className="w-4 h-4" />
    case 'Cloud Computing':
      return <Cloud className="w-4 h-4" />
    default:
      return <GraduationCap className="w-4 h-4" />
  }
}

// Helper function to get category gradient colors
const getCategoryGradient = (category: string) => {
  switch (category) {
    case 'AI/ML':
      return 'from-purple-500 to-pink-600'
    case 'Data Science':
      return 'from-blue-500 to-cyan-600'
    case 'Web Development':
      return 'from-green-500 to-emerald-600'
    case 'Cloud Computing':
      return 'from-orange-500 to-red-600'
    default:
      return 'from-gray-500 to-slate-600'
  }
}

function CertificationCard({ cert, index }: { cert: typeof certifications[0], index: number }) {
  return (
    <div 
      className="group relative bg-card/50 backdrop-blur-sm border rounded-lg p-6 transition-all duration-300 hover:bg-card/70 hover:scale-[1.02] hover:shadow-lg animate-fade-up overflow-hidden"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      {/* Category indicator */}
      <div className={`absolute top-0 left-0 w-1 h-full bg-gradient-to-b ${getCategoryGradient(cert.category)}`}></div>
      
      <div className="flex items-start justify-between mb-4">
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <Badge 
              variant="outline" 
              className="text-xs bg-background/50 backdrop-blur-sm"
            >
              <span className="mr-1">{getCategoryIcon(cert.category)}</span>
              {cert.category}
            </Badge>
            <div className="flex items-center text-muted-foreground text-xs">
              <Calendar className="w-3 h-3 mr-1" />
              {cert.issued}
            </div>
          </div>
          
          <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
            {cert.title}
          </h3>
          
          <div className="flex items-center text-muted-foreground text-sm mb-2">
            <BookOpen className="w-4 h-4 mr-2 flex-shrink-0" />
            <span className="truncate">{cert.provider}</span>
          </div>
        </div>
        
        <div className="flex items-center ml-4">
          <div className={`p-2 rounded-full bg-gradient-to-br ${getCategoryGradient(cert.category)} bg-opacity-10`}>
            <Trophy className="w-5 h-5 text-muted-foreground" />
          </div>
        </div>
      </div>

      {cert.skills && cert.skills.length > 0 && (
        <div className="mb-4">
          <p className="text-sm font-medium text-foreground mb-2">Skills Covered:</p>
          <div className="flex flex-wrap gap-1">
            {cert.skills.slice(0, 3).map((skill, idx) => (
              <Badge key={idx} variant="secondary" className="text-xs">
                {skill}
              </Badge>
            ))}
            {cert.skills.length > 3 && (
              <Badge variant="secondary" className="text-xs">
                +{cert.skills.length - 3} more
              </Badge>
            )}
          </div>
        </div>
      )}

      {cert.hasCredential && cert.link && (
        <div className="flex justify-end pt-4 border-t border-border/30">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-xs opacity-70 hover:opacity-100 group-hover:bg-primary/10"
            onClick={() => window.open(cert.link, '_blank')}
          >
            <ExternalLink className="w-3 h-3 mr-1" />
            View Credential
          </Button>
        </div>
      )}
    </div>
  )
}

export default function CertificationsPage() {
  const totalSkills = new Set(certifications.flatMap(cert => cert.skills || [])).size
  const providers = new Set(certifications.map(cert => cert.provider)).size

  // Counts per category for tab badges
  const categoryCounts: Record<string, number> = Object.fromEntries(
    categories.map((c) => [
      c,
      c === 'All' ? certifications.length : certifications.filter((cert) => cert.category === c).length,
    ])
  )

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      {/* Background */}
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>

      <div className="relative z-10">
        {/* Hero Section */}
        <section className="pt-20 pb-12 md:pt-28 md:pb-16 lg:pt-32 lg:pb-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              {/* Main Title */}
              <div className="flex flex-col items-center justify-center mb-6">
                <div className="relative mb-4">
                  <Award className="w-12 h-12 md:w-14 md:h-14 text-primary animate-pulse" />
                  <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 bg-primary/20 rounded-full animate-ping"></div>
                  <div className="absolute inset-0 w-12 h-12 md:w-14 md:h-14 border-2 border-primary/30 rounded-full animate-spin-slow"></div>
                </div>
                
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground">
                  Professional Certifications
                </h1>
              </div>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
                Professional certifications and courses completed in AI, Machine Learning, 
                Data Science, and Web Development to stay current with industry trends.
              </p>

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6 max-w-2xl mx-auto mb-8">
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 md:p-6 transition-all hover:bg-card/70 animate-fade-up hover:scale-105" style={{ animationDelay: '0.1s' }}>
                  <div className="flex items-center justify-center mb-2">
                    <Award className="w-5 h-5 md:w-6 md:h-6 text-primary mr-2" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{certifications.length}</span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">Total Certificates</p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 md:p-6 transition-all hover:bg-card/70 animate-fade-up hover:scale-105" style={{ animationDelay: '0.2s' }}>
                  <div className="flex items-center justify-center mb-2">
                    <BookOpen className="w-5 h-5 md:w-6 md:h-6 text-primary mr-2" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{providers}</span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">Providers</p>
                </div>
                
                <div className="bg-card/50 backdrop-blur-sm border border-border/50 rounded-lg p-4 md:p-6 transition-all hover:bg-card/70 animate-fade-up hover:scale-105" style={{ animationDelay: '0.3s' }}>
                  <div className="flex items-center justify-center mb-2">
                    <Star className="w-5 h-5 md:w-6 md:h-6 text-primary mr-2" />
                    <span className="text-2xl md:text-3xl font-bold text-foreground">{totalSkills}</span>
                  </div>
                  <p className="text-sm md:text-base text-muted-foreground">Skills Covered</p>
                </div>
              </div>

              {/* Decorative Separator */}
              <div className="flex items-center justify-center my-8">
                <Separator className="max-w-xs opacity-30" />
                <div className="mx-4 w-2 h-2 bg-primary rounded-full"></div>
                <Separator className="max-w-xs opacity-30" />
              </div>
            </div>
          </div>
        </section>

        {/* Certifications Section with Tabs */}
        <section className="pb-20 md:pb-28 lg:pb-32">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <Tabs defaultValue="All" className="w-full">
              {/* Category Tabs */}
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

              {/* Tab Content */}
              {categories.map((category) => (
                <TabsContent key={category} value={category}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {certifications
                      .filter((cert) => category === 'All' || cert.category === category)
                      .map((cert, index) => (
                        <CertificationCard key={cert.title + cert.issued} cert={cert} index={index} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>
      </div>
    </div>
  )
}