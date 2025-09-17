'use client'

import { useState, useEffect } from 'react'
import emailjs from '@emailjs/browser'
import Link from 'next/link'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { AnimatedBackground } from '@/components/3d/animated-background'
import {
  Mail,
  MapPin,
  Calendar,
  Clock,
  Send,
  CheckCircle,
  Cpu,
  Server,
  Code,
  Github,
  Linkedin,
} from 'lucide-react'

// Updated contact info
const contactMethods = [
  {
    title: 'Email',
    description: 'Best way to reach me',
    value: 'ibtissam.echchaibi@gmail.com',
    icon: Mail,
    action: 'mailto:ibtissam.echchaibi@gmail.com',
    primary: true,
  },
  {
    title: 'Location',
    description: 'Based in Morocco',
    value: 'Available for remote work globally',
    icon: MapPin,
    action: null,
    primary: false,
  },
]

// Expertise updated from CV
const expertiseAreas = [
  {
    title: 'Multi-Agent & RAG Systems',
    description:
      'Built intelligent multi-agent AI platforms for document processing, honey quality verification, aviation medical chatbots, and domain-specific retrieval systems.',
    icon: Cpu,
  },
  {
    title: 'Cloud & MLOps Deployment',
    description:
      'Deployed scalable AI microservices using FastAPI, Docker, and CI/CD pipelines across AWS, Azure, and GCP with monitoring via LangSmith, W&B, and MLflow.',
    icon: Server,
  },
  {
    title: 'Full-Stack AI Applications',
    description:
      'Engineered end-to-end platforms integrating React/Next.js frontends with AI-powered backends, dashboards, and real-time analytics.',
    icon: Code,
  },
]

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
    projectType: 'general',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  // Initialize EmailJS when component mounts
  useEffect(() => {
    const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      // EmailJS service configuration from environment variables
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      
      console.log('Environment variables check:', {
        serviceId: serviceId ? 'Found' : 'Missing',
        templateId: templateId ? 'Found' : 'Missing',
        publicKey: publicKey ? 'Found' : 'Missing'
      })
      
      // Check if all required environment variables are present
      if (!serviceId || !templateId || !publicKey) {
        throw new Error('EmailJS configuration is missing. Please check your environment variables.')
      }
      
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        project_type: formData.projectType,
        message: formData.message,
        to_name: 'Ibtissam Ech Chaibi',
        reply_to: formData.email,
      }
      
      console.log('Sending email with params:', templateParams)
      
      const result = await emailjs.send(
        serviceId, 
        templateId, 
        templateParams,
        {
          publicKey: publicKey,
        }
      )
      
      console.log('Email sent successfully:', result)
      
      setIsSubmitted(true)
      setIsSubmitting(false)
      
      // Reset form
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: '',
        projectType: 'general',
      })
      
    } catch (error: any) {
      console.error('Full error object:', error)
      console.error('Error status:', error?.status)
      console.error('Error text:', error?.text)
      
      setIsSubmitting(false)
      
      // More detailed error message based on EmailJS error
      let errorMessage = 'Failed to send message. Please try again or contact me directly at ibtissam.echchaibi@gmail.com'
      
      if (error?.status === 400) {
        errorMessage = 'Email configuration error. Please contact me directly at ibtissam.echchaibi@gmail.com'
      } else if (error?.status === 401) {
        errorMessage = 'Email service authentication failed. Please contact me directly at ibtissam.echchaibi@gmail.com'
      } else if (error?.text) {
        errorMessage = `Email service error: ${error.text}. Please contact me directly at ibtissam.echchaibi@gmail.com`
      }
      
      alert(errorMessage)
    }
  }

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background relative overflow-x-hidden flex items-center justify-center">
        <div className="fixed top-0 left-0 w-full h-full -z-10">
          <AnimatedBackground />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-md mx-auto text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <h1 className="text-2xl font-bold mb-4">Message Sent Successfully!</h1>
            <p className="text-muted-foreground mb-8">
              Thank you for reaching out! I'll get back to you within 24 hours at the email address you provided.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button onClick={() => setIsSubmitted(false)}>Send Another Message</Button>
              <Button variant="outline" asChild>
                <Link href="/">Back to Home</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background relative overflow-x-hidden">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <AnimatedBackground />
      </div>
      <div className="relative z-10">
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto text-center">
              <Badge variant="outline" className="mb-4">
                AI Engineer & Full-Stack Developer
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
                From Academia to Application
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                I&apos;m a Software Engineer passionate about building intelligent, scalable solutions.
                I have experience delivering production AI systems and full-stack applications. I am
                available for <strong>full-time roles</strong>, <strong>contract</strong>, and{' '}
                <strong>freelance projects</strong>.
              </p>
              <div className="flex flex-wrap justify-center gap-2">
                <Badge variant="secondary">
                  <Clock className="w-3 h-3 mr-1" /> 24h Response Time
                </Badge>
                <Badge variant="secondary">
                  <Calendar className="w-3 h-3 mr-1" /> Open to Opportunities
                </Badge>
                <Badge variant="secondary">
                  <MapPin className="w-3 h-3 mr-1" /> Remote Available
                </Badge>
              </div>
            </div>
          </div>
        </section>

        <section className="pb-16">
          <div className="container mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                {/* Left Column - Professional Profile */}
                <div className="space-y-8">
                  <Card className="overflow-hidden">
                    <CardHeader className="p-0">
                      <div className="bg-muted p-4 border-b">
                        <CardTitle>Professional Profile</CardTitle>
                      </div>
                    </CardHeader>
                    <CardContent className="p-4 space-y-4">
                      <div className="flex flex-col items-center text-center">
                        <img
                          src="https://raw.githubusercontent.com/IbtissamEchchaibi19/image-hub/main/linkdinpict.jpg"
                          alt="Ibtissam Ech-Chaibi"
                          className="rounded-xl w-32 h-32 object-cover shadow-lg mb-4"
                        />
                        <div>
                          <h4 className="font-bold">IBTISSAM ECH CHAIBI</h4>
                          <p className="text-xs text-muted-foreground mb-2">
                            Software Engineer — AI & Full-Stack
                          </p>
                          <Link
                            href="https://www.freelancer.com/u/ibtissamech"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-sm font-semibold text-primary hover:underline"
                          >
                            Hire me on freelancer.com
                          </Link>
                        </div>
                      </div>
                      <div className="grid grid-cols-1 gap-3">
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link
                            href="https://linkedin.com/in/ibtissam-ech-chaibi"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Linkedin className="w-4 h-4 mr-2" /> LinkedIn
                          </Link>
                        </Button>
                        <Button variant="outline" className="w-full justify-start" asChild>
                          <Link
                            href="https://github.com/IbtissamEchchaibi19"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <Github className="w-4 h-4 mr-2" /> GitHub
                          </Link>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Contact */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Contact Information</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {contactMethods.map((method) => (
                        <div key={method.title} className="flex items-start">
                          <div
                            className={`w-10 h-10 rounded-lg flex items-center justify-center mr-4 ${
                              method.primary ? 'bg-primary text-primary-foreground' : 'bg-muted'
                            }`}
                          >
                            <method.icon className="w-5 h-5" />
                          </div>
                          <div>
                            <h4 className="font-semibold">{method.title}</h4>
                            {method.action ? (
                              <Link
                                href={method.action}
                                className="text-sm text-primary hover:underline"
                              >
                                {method.value}
                              </Link>
                            ) : (
                              <p className="text-sm">{method.value}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>
                </div>

                {/* Middle Column - Key Expertise and Current Status */}
                <div className="space-y-8">
                  {/* Key Expertise */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Key Expertise</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {expertiseAreas.map((service) => (
                        <div key={service.title} className="flex items-start">
                          <service.icon className="w-5 h-5 text-primary mr-3 mt-1" />
                          <div>
                            <h4 className="font-semibold text-sm">{service.title}</h4>
                            <p className="text-xs text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      ))}
                    </CardContent>
                  </Card>

                  {/* Current Status */}
                  <Card>
                    <CardHeader>
                      <CardTitle>Current Status</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="space-y-3 text-sm">
                        <div className="flex items-center justify-between">
                          <span>Freelance Work</span>
                          <Badge variant="default" className="text-xs bg-green-600">
                            Available
                          </Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Full-Time Role</span>
                          <Badge variant="default" className="text-xs">Actively Seeking</Badge>
                        </div>
                        <div className="flex items-center justify-between">
                          <span>Time Zone</span>
                          <span className="text-muted-foreground">GMT+1 (Morocco)</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                {/* Right Column - Contact Form */}
                <div>
                  <Card>
                    <CardHeader>
                      <CardTitle className="text-2xl">Send Me a Message</CardTitle>
                      <CardDescription>
                        Have a role, project, or question? Fill out the form below.
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium mb-2">
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formData.name}
                            onChange={handleInputChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium mb-2">
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                            placeholder="your.email@example.com"
                          />
                        </div>
                        <div>
                          <label htmlFor="projectType" className="block text-sm font-medium mb-2">
                            Inquiry Type
                          </label>
                          <select
                            id="projectType"
                            name="projectType"
                            value={formData.projectType}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-input bg-background rounded-md focus:outline-none focus:ring-2 focus:ring-ring focus:border-transparent"
                          >
                            <option value="freelance">Freelance Project Inquiry</option>
                            <option value="fulltime">Full-Time / Job Opportunity</option>
                            <option value="collaboration">Collaboration Proposal</option>
                            <option value="general">General Question</option>
                          </select>
                        </div>
                        <div>
                          <label htmlFor="subject" className="block text-sm font-medium mb-2">
                            Subject *
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            value={formData.subject}
                            onChange={handleInputChange}
                            required
                            placeholder="Brief description of your inquiry"
                          />
                        </div>
                        <div>
                          <label htmlFor="message" className="block text-sm font-medium mb-2">
                            Message *
                          </label>
                          <Textarea
                            id="message"
                            name="message"
                            value={formData.message}
                            onChange={handleInputChange}
                            required
                            rows={6}
                            placeholder="Tell me more about the opportunity, project, timeline, etc..."
                          />
                        </div>
                        <Button type="submit" size="lg" className="w-full" disabled={isSubmitting}>
                          {isSubmitting ? (
                            <>
                              <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />{' '}
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send className="w-4 h-4 mr-2" /> Send Message
                            </>
                          )}
                        </Button>
                      </form>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 bg-card">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-12">
                Frequently Asked Questions
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="font-semibold mb-2">
                    What is your current availability?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I&apos;m currently available for new freelance projects and open to full-time
                    or long-term contract opportunities. I typically respond within 24 hours and can
                    start quickly.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Do you only work through Freelancer.com?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    While I have a strong reputation on platforms, I am open to direct collaborations
                    and long-term contracts outside of any marketplace.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    What technologies are you most passionate about?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    I&apos;m passionate about distributed systems, cloud-native architecture (AWS,
                    Azure, GCP), and applying deep learning to solve real-world business problems.
                  </p>
                </div>
                <div>
                  <h3 className="font-semibold mb-2">
                    Can you handle a project from front to back?
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Yes. As a software engineer, I manage projects from UI/UX implementation in
                    React/Next.js to backend and AI model integration into cloud deployment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}