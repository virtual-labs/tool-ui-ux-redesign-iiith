import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { FlaskConical, BarChart3, Workflow, Database, Monitor, Users } from "lucide-react"
import Link from "next/link"

export default function PatternsPage() {
  const patterns = [
    {
      title: "Lab Interface",
      description: "Complete laboratory interface patterns with controls, monitoring, and data display",
      icon: FlaskConical,
      href: "/patterns/lab-interface",
      status: "Stable",
      examples: ["Chemistry Lab", "Physics Simulator", "Biology Microscope"],
    },
    {
      title: "Data Visualization",
      description: "Charts, graphs, and scientific data presentation patterns",
      icon: BarChart3,
      href: "/patterns/data-visualization",
      status: "Stable",
      examples: ["Real-time Graphs", "Statistical Charts", "3D Visualizations"],
    },
    {
      title: "Experiment Flow",
      description: "Step-by-step experiment workflows and progress tracking",
      icon: Workflow,
      href: "/patterns/experiment-flow",
      status: "Beta",
      examples: ["Multi-step Procedures", "Progress Tracking", "Result Analysis"],
    },
    {
      title: "Data Collection",
      description: "Forms and interfaces for collecting experimental data",
      icon: Database,
      href: "/patterns/data-collection",
      status: "Stable",
      examples: ["Measurement Forms", "Observation Logs", "Parameter Input"],
    },
    {
      title: "Monitoring Dashboard",
      description: "Real-time monitoring and control dashboards for lab equipment",
      icon: Monitor,
      href: "/patterns/monitoring-dashboard",
      status: "Beta",
      examples: ["Equipment Status", "Sensor Readings", "Alert Systems"],
    },
    {
      title: "Collaborative Lab",
      description: "Multi-user collaboration patterns for shared experiments",
      icon: Users,
      href: "/patterns/collaborative-lab",
      status: "Alpha",
      examples: ["Shared Workspaces", "Real-time Sync", "Role Management"],
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Patterns</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Common design patterns and templates for Virtual Labs experiences. These patterns combine multiple
            components to solve specific use cases.
          </p>
        </div>

        {/* Pattern Categories */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {patterns.map((pattern) => (
            <Link key={pattern.href} href={pattern.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <pattern.icon className="h-8 w-8 text-primary" />
                    <Badge
                      variant={
                        pattern.status === "Alpha" ? "destructive" : pattern.status === "Beta" ? "secondary" : "default"
                      }
                    >
                      {pattern.status}
                    </Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{pattern.title}</CardTitle>
                  <CardDescription>{pattern.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    <h4 className="text-sm font-medium">Examples:</h4>
                    <div className="flex flex-wrap gap-1">
                      {pattern.examples.map((example) => (
                        <Badge key={example} variant="outline" className="text-xs">
                          {example}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Pattern Philosophy */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Pattern Philosophy</h2>

          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scientific Accuracy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Patterns reflect real laboratory workflows and scientific methodologies to provide authentic learning
                  experiences.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Progressive Disclosure</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Complex information is revealed progressively to avoid overwhelming users while maintaining access to
                  detailed data.
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Error Prevention</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Patterns include safeguards and validation to prevent common errors in laboratory procedures.
                </p>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Using Patterns</CardTitle>
              <CardDescription>How to implement and customize patterns in your Virtual Labs</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">1. Choose the Right Pattern</h4>
                <p className="text-sm text-muted-foreground">
                  Select patterns based on your specific laboratory type and user needs. Consider the complexity of
                  procedures and data involved.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">2. Customize for Your Context</h4>
                <p className="text-sm text-muted-foreground">
                  Adapt patterns to match your specific equipment, procedures, and educational objectives while
                  maintaining core usability principles.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">3. Test with Users</h4>
                <p className="text-sm text-muted-foreground">
                  Validate patterns with actual students and instructors to ensure they support effective learning and
                  teaching.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">4. Iterate and Improve</h4>
                <p className="text-sm text-muted-foreground">
                  Continuously refine patterns based on user feedback and learning outcomes data.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
