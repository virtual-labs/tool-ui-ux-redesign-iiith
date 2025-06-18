"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const elevationScale = {
  none: "none",
  sm: "0 1px 2px 0 rgb(0 0 0 / 0.05)",
  DEFAULT: "0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1)",
  md: "0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1)",
  lg: "0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)",
  xl: "0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1)",
  "2xl": "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  inner: "inset 0 2px 4px 0 rgb(0 0 0 / 0.05)",
}

const semanticElevation = {
  card: "shadow-md",
  button: "shadow-sm",
  modal: "shadow-2xl",
  dropdown: "shadow-lg",
  tooltip: "shadow-lg",
  floating: "shadow-xl",
}

function ElevationDemo({ name, value, usage }: { name: string; value: string; usage: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`shadow-${name === "DEFAULT" ? "" : name}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="p-6 bg-white rounded-lg border">
      <div
        className="w-full h-24 bg-white rounded-lg border flex items-center justify-center mb-4"
        style={{ boxShadow: value }}
      >
        <div className="text-sm text-muted-foreground">shadow{name !== "DEFAULT" ? `-${name}` : ""}</div>
      </div>
      <div className="flex items-center justify-between">
        <div>
          <div className="font-mono text-sm font-medium">shadow{name !== "DEFAULT" ? `-${name}` : ""}</div>
          <div className="text-xs text-muted-foreground">{usage}</div>
        </div>
        <Button variant="ghost" size="sm" onClick={copyToClipboard}>
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </Button>
      </div>
    </div>
  )
}

export default function ElevationPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Elevation</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Shadow system that creates depth and hierarchy in Virtual Labs interfaces while maintaining focus on
            scientific content.
          </p>
          <Badge variant="secondary">Beta</Badge>
        </div>

        {/* Elevation Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Elevation Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Subtle Depth</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Shadows are subtle to avoid distracting from scientific data and measurements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Functional Hierarchy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Elevation indicates interactivity and importance, not just visual appeal.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Context Aware</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Shadow intensity adapts to the interface context and user focus areas.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Elevation Scale */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Elevation Scale</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 bg-gray-50 p-6 rounded-lg">
            {Object.entries(elevationScale).map(([token, value]) => (
              <ElevationDemo
                key={token}
                name={token}
                value={value}
                usage={
                  token === "none"
                    ? "Flat elements, data tables"
                    : token === "sm"
                      ? "Subtle cards, buttons"
                      : token === "DEFAULT"
                        ? "Standard cards, panels"
                        : token === "md"
                          ? "Elevated cards, dropdowns"
                          : token === "lg"
                            ? "Modals, overlays"
                            : token === "xl"
                              ? "Floating panels"
                              : token === "2xl"
                                ? "High-priority modals"
                                : "Inset elements, inputs"
                }
              />
            ))}
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lab Interface Elevation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Control Panels</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Use medium elevation to distinguish from background
                  </p>
                  <div className="p-3 bg-white shadow-md rounded border text-xs">shadow-md for control panels</div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Data Displays</h4>
                  <p className="text-sm text-muted-foreground mb-2">Minimal elevation to keep focus on data</p>
                  <div className="p-3 bg-white shadow-sm rounded border text-xs">shadow-sm for data cards</div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Interactive Elements</h4>
                  <p className="text-sm text-muted-foreground mb-2">Elevation increases on hover/focus</p>
                  <div className="p-3 bg-white shadow-lg rounded border text-xs">shadow-lg for active elements</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Semantic Mapping</CardTitle>
                <CardDescription>Component-specific elevation recommendations</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(semanticElevation).map(([component, shadow]) => (
                    <div key={component} className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="font-medium capitalize">{component}</span>
                      <span className="text-sm text-muted-foreground font-mono">{shadow}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Interactive Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Interactive Examples</h2>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Hover Effects</CardTitle>
                <CardDescription>Elevation changes on interaction</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-white shadow-sm rounded-lg border transition-shadow hover:shadow-md cursor-pointer">
                  <div className="text-sm font-medium">Hover for elevation change</div>
                  <div className="text-xs text-muted-foreground">shadow-sm → shadow-md</div>
                </div>

                <div className="p-4 bg-white shadow-md rounded-lg border transition-shadow hover:shadow-lg cursor-pointer">
                  <div className="text-sm font-medium">Interactive card</div>
                  <div className="text-xs text-muted-foreground">shadow-md → shadow-lg</div>
                </div>

                <div className="p-4 bg-white shadow-lg rounded-lg border transition-shadow hover:shadow-xl cursor-pointer">
                  <div className="text-sm font-medium">Floating element</div>
                  <div className="text-xs text-muted-foreground">shadow-lg → shadow-xl</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Layered Interface</CardTitle>
                <CardDescription>Multiple elevation levels</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="relative p-6 bg-white shadow-2xl rounded-lg">
                  <div className="text-sm font-medium mb-4">Modal (shadow-2xl)</div>
                  <div className="space-y-3">
                    <div className="p-3 bg-gray-50 shadow-md rounded">
                      <div className="text-xs">Card (shadow-md)</div>
                    </div>
                    <div className="flex gap-2">
                      <div className="px-3 py-1 bg-white shadow-sm rounded text-xs">Button (shadow-sm)</div>
                      <div className="px-3 py-1 bg-white shadow-sm rounded text-xs">Button (shadow-sm)</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Implementation */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold">Implementation</h2>

          <Card>
            <CardHeader>
              <CardTitle>Tailwind CSS Classes</CardTitle>
              <CardDescription>Shadow utility classes for elevation</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`/* Static shadows */
shadow-none     /* No shadow */
shadow-sm       /* Small shadow */
shadow          /* Default shadow */
shadow-md       /* Medium shadow */
shadow-lg       /* Large shadow */
shadow-xl       /* Extra large shadow */
shadow-2xl      /* 2x large shadow */
shadow-inner    /* Inner shadow */

/* Hover effects */
hover:shadow-lg         /* Shadow on hover */
focus:shadow-lg         /* Shadow on focus */
transition-shadow       /* Smooth shadow transitions */

/* Responsive shadows */
md:shadow-lg           /* Large shadow on medium screens */
lg:shadow-xl           /* Extra large on large screens */`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CSS Custom Properties</CardTitle>
              <CardDescription>Custom shadow definitions</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`:root {
  /* Base shadow scale */
  --vl-shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --vl-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --vl-shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --vl-shadow-lg: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --vl-shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);
  --vl-shadow-2xl: 0 25px 50px -12px rgb(0 0 0 / 0.25);
  
  /* Component-specific shadows */
  --vl-card-shadow: var(--vl-shadow-md);
  --vl-button-shadow: var(--vl-shadow-sm);
  --vl-modal-shadow: var(--vl-shadow-2xl);
  --vl-dropdown-shadow: var(--vl-shadow-lg);
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Best Practices</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Performance</h4>
                <p className="text-sm text-muted-foreground">
                  Use CSS transitions for smooth shadow changes. Avoid animating complex shadows on low-end devices.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Accessibility</h4>
                <p className="text-sm text-muted-foreground">
                  Don't rely solely on shadows to convey information. Ensure sufficient color contrast remains.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Scientific Context</h4>
                <p className="text-sm text-muted-foreground">
                  Keep shadows subtle in data-heavy interfaces to maintain focus on scientific content.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
