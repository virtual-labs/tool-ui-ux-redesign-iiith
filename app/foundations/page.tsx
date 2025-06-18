import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Palette, Type, Ruler, Grid, CornerDownRight, Layers } from "lucide-react"
import Link from "next/link"

export default function FoundationsPage() {
  const foundations = [
    {
      title: "Colors",
      description: "Color palette, semantic colors, and usage guidelines",
      icon: Palette,
      href: "/foundations/colors",
      status: "Stable",
    },
    {
      title: "Typography",
      description: "Font families, scales, and text styling principles",
      icon: Type,
      href: "/foundations/typography",
      status: "Stable",
    },
    {
      title: "Spacing",
      description: "Spacing scale and layout principles",
      icon: Ruler,
      href: "/foundations/spacing",
      status: "Stable",
    },
    {
      title: "Layout Grid",
      description: "Grid systems and responsive breakpoints",
      icon: Grid,
      href: "/foundations/layout",
      status: "Stable",
    },
    {
      title: "Border Radius",
      description: "Corner radius tokens and usage patterns",
      icon: CornerDownRight,
      href: "/foundations/border-radius",
      status: "Stable",
    },
    {
      title: "Elevation",
      description: "Shadow system and depth principles",
      icon: Layers,
      href: "/foundations/elevation",
      status: "Beta",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Foundations</h1>
          <p className="text-xl text-muted-foreground">
            Core design principles and tokens that form the foundation of the Virtual Labs Design System.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {foundations.map((item) => (
            <Link key={item.href} href={item.href}>
              <Card className="h-full hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex items-center justify-between">
                    <item.icon className="h-8 w-8 text-primary" />
                    <Badge variant={item.status === "Beta" ? "secondary" : "default"}>{item.status}</Badge>
                  </div>
                  <CardTitle>{item.title}</CardTitle>
                  <CardDescription>{item.description}</CardDescription>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Design Tokens</h2>
          <Card>
            <CardHeader>
              <CardTitle>What are Design Tokens?</CardTitle>
              <CardDescription>
                Design tokens are the visual design atoms of the design system — specifically, they are named entities
                that store visual design attributes.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-sm text-muted-foreground">
                We use design tokens to maintain consistency across all Virtual Labs products and ensure that design
                decisions are centralized and easily maintainable.
              </p>
              <div className="bg-muted p-4 rounded-lg">
                <code className="text-sm">
                  {`// Example: Color tokens
--vl-color-primary: #2563eb;
--vl-color-secondary: #64748b;
--vl-color-success: #16a34a;
--vl-color-warning: #d97706;
--vl-color-error: #dc2626;`}
                </code>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
