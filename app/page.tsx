import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Palette, Code, Accessibility, BookOpen } from "lucide-react"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16">
        <div className="text-center max-w-4xl mx-auto">
          <Badge variant="secondary" className="mb-4">
            Virtual Labs Design System v1.0
          </Badge>
          <h1 className="text-5xl font-bold tracking-tight mb-6 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Virtual Labs Design System
          </h1>
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            A comprehensive design system for building consistent, accessible, and beautiful virtual laboratory
            experiences. Built with modern web standards and copy-paste components.
          </p>
          <div className="flex gap-4 justify-center flex-wrap">
            <Button size="lg" asChild>
              <Link href="/foundations">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <Link href="/components">Browse Components</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Palette className="h-8 w-8 text-blue-600 mb-2" />
              <CardTitle>Foundations</CardTitle>
              <CardDescription>Design tokens, colors, typography, and core principles</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" asChild className="p-0 h-auto">
                <Link href="/foundations">
                  Explore Foundations <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Code className="h-8 w-8 text-green-600 mb-2" />
              <CardTitle>Components</CardTitle>
              <CardDescription>Ready-to-use components with copy-paste code</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" asChild className="p-0 h-auto">
                <Link href="/components">
                  View Components <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <Accessibility className="h-8 w-8 text-purple-600 mb-2" />
              <CardTitle>Accessibility</CardTitle>
              <CardDescription>Guidelines for building inclusive experiences</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" asChild className="p-0 h-auto">
                <Link href="/accessibility">
                  Learn A11y <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
            <CardHeader>
              <BookOpen className="h-8 w-8 text-orange-600 mb-2" />
              <CardTitle>Guidelines</CardTitle>
              <CardDescription>Content design and implementation patterns</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="ghost" asChild className="p-0 h-auto">
                <Link href="/guidelines">
                  Read Guidelines <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Quick Start */}
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Quick Start</h2>
          <Card className="border-0 shadow-lg">
            <CardHeader>
              <CardTitle>Installation</CardTitle>
              <CardDescription>Get started with Virtual Labs Design System in your project</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">npm install @virtual-labs/design-system</code>
              </div>
              <p className="text-sm text-muted-foreground">
                Or copy and paste components directly from our documentation.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}
