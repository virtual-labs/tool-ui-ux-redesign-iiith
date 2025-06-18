import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MousePointer, Square, Navigation, BarChart3, MessageSquare, Layout, ArrowRight } from "lucide-react"
import Link from "next/link"

export default function ComponentsPage() {
  const componentCategories = [
    {
      title: "Buttons",
      description: "Interactive elements for actions and navigation",
      icon: MousePointer,
      href: "/components/buttons",
      count: 8,
      status: "Stable",
    },
    {
      title: "Forms",
      description: "Input fields, selectors, and form controls",
      icon: Square,
      href: "/components/forms",
      count: 12,
      status: "Stable",
    },
    {
      title: "Navigation",
      description: "Menus, breadcrumbs, and navigation patterns",
      icon: Navigation,
      href: "/components/navigation",
      count: 6,
      status: "Stable",
    },
    {
      title: "Data Display",
      description: "Tables, charts, and data visualization components",
      icon: BarChart3,
      href: "/components/data-display",
      count: 10,
      status: "Beta",
    },
    {
      title: "Feedback",
      description: "Alerts, toasts, and status indicators",
      icon: MessageSquare,
      href: "/components/feedback",
      count: 7,
      status: "Stable",
    },
    {
      title: "Layout",
      description: "Containers, grids, and structural components",
      icon: Layout,
      href: "/components/layout",
      count: 5,
      status: "Stable",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Components</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Production-ready components built for Virtual Labs experiences. Copy and paste into your projects.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-primary">48</div>
              <div className="text-sm text-muted-foreground">Components</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-green-600">42</div>
              <div className="text-sm text-muted-foreground">Stable</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-yellow-600">6</div>
              <div className="text-sm text-muted-foreground">Beta</div>
            </CardContent>
          </Card>
          <Card>
            <CardContent className="p-4 text-center">
              <div className="text-2xl font-bold text-blue-600">100%</div>
              <div className="text-sm text-muted-foreground">Accessible</div>
            </CardContent>
          </Card>
        </div>

        {/* Component Categories */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {componentCategories.map((category) => (
            <Link key={category.href} href={category.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer group">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <category.icon className="h-8 w-8 text-primary" />
                    <Badge variant={category.status === "Beta" ? "secondary" : "default"}>{category.status}</Badge>
                  </div>
                  <CardTitle className="group-hover:text-primary transition-colors">{category.title}</CardTitle>
                  <CardDescription>{category.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-muted-foreground">{category.count} components</span>
                    <ArrowRight className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>

        {/* Getting Started */}
        <div className="space-y-8">
          <h2 className="text-2xl font-bold">Getting Started</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Installation</CardTitle>
                <CardDescription>Add components to your project</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm">npm install @virtual-labs/ui</code>
                </div>
                <p className="text-sm text-muted-foreground">Or copy individual components from the documentation.</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Usage</CardTitle>
                <CardDescription>Import and use components in your React app</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-muted p-4 rounded-lg">
                  <code className="text-sm">
                    {`import { Button } from '@virtual-labs/ui'

<Button variant="primary">
  Start Experiment
</Button>`}
                  </code>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card>
            <CardHeader>
              <CardTitle>Component Anatomy</CardTitle>
              <CardDescription>Each component includes comprehensive documentation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-4 gap-4 text-sm">
                <div className="space-y-2">
                  <div className="font-medium">Usage Guidelines</div>
                  <div className="text-muted-foreground">When and how to use</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">API Reference</div>
                  <div className="text-muted-foreground">Props and variants</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Code Examples</div>
                  <div className="text-muted-foreground">Copy-paste ready</div>
                </div>
                <div className="space-y-2">
                  <div className="font-medium">Accessibility</div>
                  <div className="text-muted-foreground">WCAG compliance</div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
