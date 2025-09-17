import { Metadata } from 'next'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { ExternalLink, Github, Calendar, Clock, Code, Brain, Database, Cpu, Rocket, ChevronDown, ChevronUp } from 'lucide-react'
import { AnimatedBackground } from '@/components/3d/animated-background'
import { useState } from 'react'

export const metadata: Metadata = {
  title: 'Projects |Ibtissam Ech-Chaibi -- Full-Stack AI Software Engineer',
  description: 'Explore my portfolio of AI, full-stack development, and cloud services, showcasing innovative solutions and technical excellence, and demonstrating efficient project deployment'
}

// Your existing projects array here...
const projects = [
  // ... (keep your existing projects array as is)
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

// Enhanced Project Card Component
const EnhancedProjectCard = ({ project }: { project: any }) => {
  const [isSkillsExpanded, setIsSkillsExpanded] = useState(false)

  const getLinkDetails = (type: string) => {
    switch (type) {
      case 'github':
        return { text: 'View Code', icon: <Github className="w-4 h-4" /> }
      case 'freelancer':
        return { text: 'Project Details', icon: <ExternalLink className="w-4 h-4" /> }
      case 'live':
        return { text: 'Live Site', icon: <Rocket className="w-4 h-4" /> }
      case 'demo':
        return { text: 'Live Demo', icon: <Rocket className="w-4 h-4" /> }
      case 'kaggle':
        return { text: 'View Notebook', icon: <ExternalLink className="w-4 h-4" /> }
      default:
        return { text: 'View Link', icon: <ExternalLink className="w-4 h-4" /> }
    }
  }

  const toggleSkills = () => {
    setIsSkillsExpanded(!isSkillsExpanded)
  }

  const visibleTags = isSkillsExpanded ? project.tags : project.tags.slice(0, 4)
  const remainingCount = project.tags.length - 4

  return (
    <Card className="group overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-0 bg-gradient-to-br from-background via-background to-muted/20 backdrop-blur-sm">
      {/* Enhanced Header */}
      <div className="relative overflow-hidden">
        <div className={`w-full h-64 bg-gradient-to-br ${project.imageGradient} flex flex-col items-center justify-center group-hover:scale-105 transition-all duration-500 relative`}>
          {/* Animated Background Pattern */}
          <div className="absolute inset-0 opacity-20">
            <div 
              className="absolute inset-0 animate-pulse"
              style={{
                backgroundImage: `
                  radial-gradient(circle at 25% 25%, rgba(255,255,255,0.3) 2px, transparent 2px),
                  radial-gradient(circle at 75% 75%, rgba(255,255,255,0.3) 2px, transparent 2px)
                `,
                backgroundSize: '40px 40px'
              }}
            />
          </div>
          
          <div className="text-white text-center p-6 z-20 relative">
            <div className="mb-4 opacity-90 transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
              {getProjectIcon(project.category)}
            </div>
            <h3 className="font-bold text-lg mb-3 leading-tight group-hover:text-white/90 transition-colors">
              {project.title}
            </h3>
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-md rounded-full text-sm font-semibold border border-white/30 shadow-lg">
              {project.category}
            </div>
          </div>
          
          {/* Enhanced Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/10 z-10" />
          
          {/* Animated Border Effect */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse" />
          </div>
        </div>

        {/* Enhanced Badges */}
        <div className="absolute top-4 left-4 z-30">
          <Badge
            variant={project.status === 'Completed' ? 'default' : 'secondary'}
            className="text-xs font-semibold bg-background/90 backdrop-blur-sm shadow-lg border-0"
          >
            {project.status}
          </Badge>
        </div>
        
        {project.featured && (
          <div className="absolute top-4 right-4 z-30">
            <Badge 
              variant="outline" 
              className="text-xs bg-amber-100/90 text-amber-800 border-amber-200 backdrop-blur-sm shadow-lg font-semibold"
            >
              ⭐ Featured
            </Badge>
          </div>
        )}
      </div>

      {/* Enhanced Content */}
      <CardHeader className="pb-3">
        <div className="flex items-center justify-between mb-3">
          <Badge variant="outline" className="text-xs font-medium bg-muted/50">
            {project.category}
          </Badge>
          <div className="flex items-center text-xs text-muted-foreground font-medium">
            <Calendar className="w-3 h-3 mr-1.5" />
            {project.year}
          </div>
        </div>
        
        <CardTitle className="text-xl leading-tight group-hover:text-primary transition-colors">
          {project.title}
        </CardTitle>
        
        <CardDescription className="text-sm leading-relaxed line-clamp-3">
          {project.description}
        </CardDescription>
      </CardHeader>

      <CardContent className="space-y-4">
        {/* Meta Information */}
        <div className="flex items-center justify-between text-xs text-muted-foreground">
          <div className="flex items-center font-medium">
            <Clock className="w-3 h-3 mr-1.5" />
            {project.timeline}
          </div>
          <div className="text-right">
            <span className="font-medium">Client:</span> {project.client}
          </div>
        </div>

        {/* Enhanced Skills Section */}
        <div className="space-y-3">
          <div className="flex flex-wrap gap-2">
            {visibleTags.map((tag, index) => (
              <Badge
                key={tag}
                variant="secondary"
                className="text-xs font-medium bg-primary/10 text-primary hover:bg-primary/20 transition-all duration-200 hover:scale-105 border-primary/20"
                style={{
                  animationDelay: `${index * 0.1}s`,
                  animation: isSkillsExpanded ? 'fadeInUp 0.3s ease-out forwards' : 'none'
                }}
              >
                {tag}
              </Badge>
            ))}
            
            {!isSkillsExpanded && remainingCount > 0 && (
              <button
                onClick={toggleSkills}
                className="inline-flex items-center px-3 py-1 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-md text-xs font-medium transition-all duration-200 hover:scale-105 border border-border hover:border-primary/20"
              >
                +{remainingCount} more
                <ChevronDown className="w-3 h-3 ml-1" />
              </button>
            )}
            
            {isSkillsExpanded && remainingCount > 0 && (
              <button
                onClick={toggleSkills}
                className="inline-flex items-center px-3 py-1 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-md text-xs font-medium transition-all duration-200 hover:scale-105 border border-border hover:border-primary/20"
              >
                Show less
                <ChevronUp className="w-3 h-3 ml-1" />
              </button>
            )}
          </div>
        </div>
      </CardContent>

      {/* Enhanced Footer */}
      <CardFooter className="flex-wrap gap-3 border-t bg-muted/30 backdrop-blur-sm">
        {project.links && project.links.length > 0 ? (
          project.links.map((link) => {
            const details = getLinkDetails(link.type)
            return (
              <Link
                key={link.type}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center px-4 py-2 bg-primary text-primary-foreground hover:bg-primary/90 rounded-lg text-sm font-medium transition-all duration-200 hover:scale-105 hover:shadow-md group/link"
              >
                <span className="group-hover/link:scale-110 transition-transform duration-200">
                  {details.icon}
                </span>
                <span className="ml-2">{details.text}</span>
              </Link>
            )
          })
        ) : (
          <p className="text-sm text-muted-foreground italic">No public links available.</p>
        )}
      </CardFooter>
      
      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </Card>
  )
}

export default function ProjectsPage() {
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
        {/* Enhanced Header Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium mb-6">
                🚀 Portfolio Showcase
              </div>
              
              <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6 bg-gradient-to-r from-primary via-primary/80 to-primary bg-clip-text text-transparent">
                My Projects
              </h1>
              
              <p className="text-xl lg:text-2xl text-muted-foreground mb-8 leading-relaxed">
                A showcase of innovative solutions, from AI-powered applications to full-stack platforms. 
                Each project represents a unique challenge solved with cutting-edge technology.
              </p>
              
              <div className="flex flex-wrap justify-center gap-3">
                <Badge variant="secondary" className="text-sm px-4 py-2 font-semibold">
                  {projects.length} Projects Completed
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2 font-semibold">
                  Multiple Industries
                </Badge>
                <Badge variant="secondary" className="text-sm px-4 py-2 font-semibold">
                  AI/ML Specialist
                </Badge>
              </div>
            </div>
          </div>
        </section>

        {/* Enhanced Projects Section */}
        <section className="pb-16 lg:pb-24">
          <div className="container mx-auto px-4">
            <Tabs defaultValue="All" className="w-full">
              <div className="flex justify-center mb-12">
                <TabsList className="h-auto rounded-2xl bg-background/80 supports-[backdrop-filter]:bg-background/60 backdrop-blur-xl border border-primary/10 shadow-xl p-2 gap-2">
                  {categories.map((category) => (
                    <TabsTrigger
                      key={category}
                      value={category}
                      className="group relative rounded-xl px-6 py-3 text-sm font-semibold text-muted-foreground transition-all duration-300
                               hover:text-foreground hover:bg-background/80 hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/30
                               data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=active]:shadow-lg data-[state=active]:scale-105"
                    >
                      <span className="flex items-center gap-3">
                        <span className="opacity-80 group-data-[state=active]:opacity-100">{getCategoryIcon(category)}</span>
                        <span>{category}</span>
                        <span
                          className="inline-flex items-center justify-center text-xs font-bold px-2.5 py-1 rounded-full
                                     bg-primary/20 text-primary group-data-[state=active]:bg-primary-foreground/20 group-data-[state=active]:text-primary-foreground"
                        >
                          {categoryCounts[category]}
                        </span>
                      </span>
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {categories.map((category) => (
                <TabsContent key={category} value={category} className="mt-0">
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects
                      .filter((project) => category === 'All' || project.category === category)
                      .map((project) => (
                        <EnhancedProjectCard key={project.id} project={project} />
                      ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>
        </section>

        {/* Enhanced CTA Section */}
        <section className="py-16 bg-gradient-to-r from-primary/5 via-primary/10 to-primary/5 backdrop-blur-sm border-y border-primary/10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-3xl lg:text-4xl font-bold text-foreground mb-6">
                Ready to Start Your Project?
              </h2>
              <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                Let's discuss how I can help bring your vision to life with innovative AI solutions and robust full-stack development.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="px-8 py-3 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105">
                  <Link href="/contact">Start a Conversation</Link>
                </Button>
                <Button variant="outline" size="lg" asChild className="px-8 py-3 text-lg font-semibold border-2 hover:bg-primary hover:text-primary-foreground transition-all duration-200 hover:scale-105">
                  <Link href="/resume">Download Resume</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}