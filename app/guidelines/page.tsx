import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { PenTool, Accessibility, Code, Users, BookOpen, Shield } from "lucide-react"
import Link from "next/link"

export default function GuidelinesPage() {
  const guidelines = [
    {
      title: "Content Design",
      description: "Writing guidelines, voice, tone, and content strategy for Virtual Labs",
      icon: PenTool,
      href: "/guidelines/content",
      topics: ["Writing Style", "Scientific Language", "Error Messages", "Help Text"],
    },
    {
      title: "Accessibility",
      description: "Creating inclusive experiences for all users in educational contexts",
      icon: Accessibility,
      href: "/guidelines/accessibility",
      topics: ["WCAG Compliance", "Screen Readers", "Keyboard Navigation", "Color Contrast"],
    },
    {
      title: "Implementation",
      description: "Technical guidelines for implementing the design system",
      icon: Code,
      href: "/guidelines/implementation",
      topics: ["Code Standards", "Performance", "Browser Support", "Testing"],
    },
    {
      title: "User Research",
      description: "Guidelines for conducting research in educational technology contexts",
      icon: Users,
      href: "/guidelines/research",
      topics: ["Student Testing", "Instructor Feedback", "Learning Analytics", "Usability Studies"],
    },
    {
      title: "Educational Design",
      description: "Pedagogical principles for effective virtual laboratory experiences",
      icon: BookOpen,
      href: "/guidelines/educational",
      topics: ["Learning Objectives", "Scaffolding", "Assessment", "Feedback Loops"],
    },
    {
      title: "Safety & Ethics",
      description: "Guidelines for safe and ethical virtual laboratory design",
      icon: Shield,
      href: "/guidelines/safety",
      topics: ["Data Privacy", "Safety Protocols", "Ethical Considerations", "Compliance"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Guidelines</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Comprehensive guidelines for creating effective, accessible, and educational Virtual Labs experiences.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {guidelines.map((guideline) => (
            <Link key={guideline.href} href={guideline.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <guideline.icon className="h-8 w-8 text-primary mb-2" />
                  <CardTitle className="group-hover:text-primary transition-colors">{guideline.title}</CardTitle>
                  <CardDescription>{guideline.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Key Topics:</h4>
                    <div className="flex flex-wrap gap-1">
                      {guideline.topics.map((topic) => (
                        <Badge key={topic} variant="outline" className="text-xs">
                          {topic}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Core Principles */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Core Principles</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Education-First Design</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Every design decision should support learning objectives and enhance the educational experience.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Clear learning pathways</li>
                  <li>• Immediate feedback mechanisms</li>
                  <li>• Progressive skill building</li>
                  <li>• Authentic scientific practices</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Inclusive by Default</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Design for diverse learners with varying abilities, backgrounds, and technical access.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Multiple input methods</li>
                  <li>• Flexible pacing options</li>
                  <li>• Alternative content formats</li>
                  <li>• Cultural sensitivity</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Scientific Authenticity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Virtual labs should accurately represent real scientific processes and methodologies.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Realistic equipment behavior</li>
                  <li>• Accurate data relationships</li>
                  <li>• Proper safety protocols</li>
                  <li>• Scientific method integration</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Iterative Improvement</CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                <p className="text-sm text-muted-foreground">
                  Continuously improve based on user feedback, learning analytics, and educational research.
                </p>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Regular user testing</li>
                  <li>• Data-driven decisions</li>
                  <li>• Educator collaboration</li>
                  <li>• Student outcome tracking</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Implementation Checklist</CardTitle>
              <CardDescription>Essential considerations when implementing Virtual Labs designs</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <h4 className="font-medium">Before Development</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Define clear learning objectives
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Identify target user groups
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Plan accessibility requirements
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Review content guidelines
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium">During Development</h4>
                  <ul className="text-sm text-muted-foreground space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Follow component specifications
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Test with assistive technologies
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Validate educational effectiveness
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></span>
                      Ensure cross-platform compatibility
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
