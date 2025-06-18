"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Copy, Check, Play, Download, Settings, Trash2 } from "lucide-react"

export default function ButtonsPage() {
  const [copiedCode, setCopiedCode] = useState<string | null>(null)

  const copyCode = (code: string) => {
    navigator.clipboard.writeText(code)
    setCopiedCode(code)
    setTimeout(() => setCopiedCode(null), 2000)
  }

  const buttonVariants = [
    { variant: "default", label: "Primary" },
    { variant: "secondary", label: "Secondary" },
    { variant: "outline", label: "Outline" },
    { variant: "ghost", label: "Ghost" },
    { variant: "destructive", label: "Destructive" },
  ]

  const buttonSizes = [
    { size: "sm", label: "Small" },
    { size: "default", label: "Default" },
    { size: "lg", label: "Large" },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Buttons</h1>
          <p className="text-xl text-muted-foreground mb-4">
            Interactive elements that trigger actions in Virtual Labs interfaces.
          </p>
          <Badge variant="default">Stable</Badge>
        </div>

        <Tabs defaultValue="examples" className="space-y-8">
          <TabsList>
            <TabsTrigger value="examples">Examples</TabsTrigger>
            <TabsTrigger value="usage">Usage</TabsTrigger>
            <TabsTrigger value="api">API</TabsTrigger>
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          </TabsList>

          <TabsContent value="examples" className="space-y-8">
            {/* Variants */}
            <Card>
              <CardHeader>
                <CardTitle>Variants</CardTitle>
                <CardDescription>Different button styles for various use cases</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button variant="default">Primary</Button>
                  <Button variant="secondary">Secondary</Button>
                  <Button variant="outline">Outline</Button>
                  <Button variant="ghost">Ghost</Button>
                  <Button variant="destructive">Destructive</Button>
                </div>
                <div className="bg-muted p-4 rounded-lg relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyCode(`<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`)
                    }
                  >
                    {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <pre className="text-sm overflow-x-auto">
                    <code>{`<Button variant="default">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="outline">Outline</Button>
<Button variant="ghost">Ghost</Button>
<Button variant="destructive">Destructive</Button>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* Sizes */}
            <Card>
              <CardHeader>
                <CardTitle>Sizes</CardTitle>
                <CardDescription>Different button sizes for various contexts</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4 mb-6">
                  <Button size="sm">Small</Button>
                  <Button size="default">Default</Button>
                  <Button size="lg">Large</Button>
                </div>
                <div className="bg-muted p-4 rounded-lg relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyCode(`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`)
                    }
                  >
                    {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <pre className="text-sm">
                    <code>{`<Button size="sm">Small</Button>
<Button size="default">Default</Button>
<Button size="lg">Large</Button>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* With Icons */}
            <Card>
              <CardHeader>
                <CardTitle>With Icons</CardTitle>
                <CardDescription>Buttons with icons for enhanced visual communication</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button>
                    <Play className="mr-2 h-4 w-4" />
                    Start Experiment
                  </Button>
                  <Button variant="outline">
                    <Download className="mr-2 h-4 w-4" />
                    Download Results
                  </Button>
                  <Button variant="ghost">
                    <Settings className="mr-2 h-4 w-4" />
                    Settings
                  </Button>
                  <Button variant="destructive">
                    <Trash2 className="mr-2 h-4 w-4" />
                    Delete
                  </Button>
                </div>
                <div className="bg-muted p-4 rounded-lg relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyCode(`<Button>
  <Play className="mr-2 h-4 w-4" />
  Start Experiment
</Button>`)
                    }
                  >
                    {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <pre className="text-sm">
                    <code>{`<Button>
  <Play className="mr-2 h-4 w-4" />
  Start Experiment
</Button>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>

            {/* States */}
            <Card>
              <CardHeader>
                <CardTitle>States</CardTitle>
                <CardDescription>Different button states for user feedback</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button>Normal</Button>
                  <Button disabled>Disabled</Button>
                  <Button className="opacity-75">Loading</Button>
                </div>
                <div className="bg-muted p-4 rounded-lg relative">
                  <Button
                    variant="ghost"
                    size="sm"
                    className="absolute top-2 right-2"
                    onClick={() =>
                      copyCode(`<Button>Normal</Button>
<Button disabled>Disabled</Button>`)
                    }
                  >
                    {copiedCode ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                  <pre className="text-sm">
                    <code>{`<Button>Normal</Button>
<Button disabled>Disabled</Button>`}</code>
                  </pre>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="usage" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>When to Use</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Primary Buttons</h4>
                  <p className="text-sm text-muted-foreground">
                    Use for the main action on a page or in a section. There should typically be only one primary button
                    visible at a time.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Secondary Buttons</h4>
                  <p className="text-sm text-muted-foreground">
                    Use for secondary actions that are important but not the primary focus.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Outline Buttons</h4>
                  <p className="text-sm text-muted-foreground">
                    Use for actions that need less visual weight or when you need multiple buttons of equal importance.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Ghost Buttons</h4>
                  <p className="text-sm text-muted-foreground">
                    Use for tertiary actions or when you need a button with minimal visual impact.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Destructive Buttons</h4>
                  <p className="text-sm text-muted-foreground">
                    Use for actions that are destructive or irreversible, like deleting data.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lab-Specific Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Experiment Controls</h4>
                  <p className="text-sm text-muted-foreground">
                    Use primary buttons for "Start Experiment" and "Run Simulation". Use secondary for "Pause" and
                    "Reset".
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Data Actions</h4>
                  <p className="text-sm text-muted-foreground">
                    Use outline buttons for "Export Data" and "Save Results". Use ghost buttons for "View Details".
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Safety Actions</h4>
                  <p className="text-sm text-muted-foreground">
                    Use destructive buttons for "Emergency Stop" and "Clear All Data" actions.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="api" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Props</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="overflow-x-auto">
                  <table className="w-full text-sm">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left p-2">Prop</th>
                        <th className="text-left p-2">Type</th>
                        <th className="text-left p-2">Default</th>
                        <th className="text-left p-2">Description</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b">
                        <td className="p-2 font-mono">variant</td>
                        <td className="p-2">"default" | "secondary" | "outline" | "ghost" | "destructive"</td>
                        <td className="p-2">"default"</td>
                        <td className="p-2">Visual style variant</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">size</td>
                        <td className="p-2">"sm" | "default" | "lg"</td>
                        <td className="p-2">"default"</td>
                        <td className="p-2">Button size</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">disabled</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">Disable the button</td>
                      </tr>
                      <tr className="border-b">
                        <td className="p-2 font-mono">asChild</td>
                        <td className="p-2">boolean</td>
                        <td className="p-2">false</td>
                        <td className="p-2">Render as child element</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="accessibility" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Accessibility Features</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Keyboard Navigation</h4>
                  <p className="text-sm text-muted-foreground">
                    Buttons are focusable and can be activated with Enter or Space keys.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Screen Reader Support</h4>
                  <p className="text-sm text-muted-foreground">
                    Buttons have proper ARIA labels and roles for screen reader compatibility.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Color Contrast</h4>
                  <p className="text-sm text-muted-foreground">
                    All button variants meet WCAG 2.1 AA contrast requirements.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Focus Indicators</h4>
                  <p className="text-sm text-muted-foreground">
                    Clear focus indicators are provided for keyboard navigation.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Best Practices</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Button Text</h4>
                  <p className="text-sm text-muted-foreground">
                    Use clear, action-oriented text. Avoid generic terms like "Click here" or "Submit".
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Loading States</h4>
                  <p className="text-sm text-muted-foreground">
                    Provide visual feedback during loading states and disable the button to prevent multiple
                    submissions.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Icon Usage</h4>
                  <p className="text-sm text-muted-foreground">
                    When using icons, ensure they have appropriate alt text or are purely decorative.
                  </p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
