"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const borderRadiusScale = {
  none: "0px",
  sm: "2px",
  DEFAULT: "4px",
  md: "6px",
  lg: "8px",
  xl: "12px",
  "2xl": "16px",
  "3xl": "24px",
  full: "9999px",
}

const semanticRadius = {
  button: "6px",
  card: "8px",
  input: "4px",
  modal: "12px",
  badge: "9999px",
}

function RadiusDemo({ name, value, example }: { name: string; value: string; example: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`rounded-${name === "DEFAULT" ? "" : name}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="w-16 h-16 bg-blue-500 flex-shrink-0" style={{ borderRadius: value }} />
      <div className="flex-1 min-w-0">
        <div className="font-mono text-sm font-medium">rounded{name !== "DEFAULT" ? `-${name}` : ""}</div>
        <div className="text-xs text-muted-foreground">{value}</div>
        <div className="text-xs text-muted-foreground mt-1">{example}</div>
      </div>
      <Button variant="ghost" size="sm" onClick={copyToClipboard} className="flex-shrink-0">
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      </Button>
    </div>
  )
}

export default function BorderRadiusPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Border Radius</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Consistent corner radius values that create a cohesive and modern feel across Virtual Labs interfaces.
          </p>
          <Badge variant="default">Stable</Badge>
        </div>

        {/* Radius Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Border Radius Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scientific Precision</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Subtle radius values that don't distract from scientific data and measurements.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Hierarchy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Different radius values create visual hierarchy and component distinction.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Consistency</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Standardized values ensure consistent appearance across all lab interfaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Border Radius Scale */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Border Radius Scale</h2>
          <Card>
            <CardHeader>
              <CardTitle>Base Scale</CardTitle>
              <CardDescription>Standard border radius tokens for all components</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-3">
                {Object.entries(borderRadiusScale).map(([token, value]) => (
                  <RadiusDemo
                    key={token}
                    name={token}
                    value={value}
                    example={
                      token === "none"
                        ? "Sharp edges, data tables"
                        : token === "sm"
                          ? "Small elements, badges"
                          : token === "DEFAULT"
                            ? "Buttons, inputs"
                            : token === "md"
                              ? "Cards, panels"
                              : token === "lg"
                                ? "Modals, large cards"
                                : token === "xl"
                                  ? "Hero sections"
                                  : token === "2xl"
                                    ? "Large containers"
                                    : token === "3xl"
                                      ? "Special elements"
                                      : "Pills, tags"
                    }
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Semantic Usage */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Semantic Usage</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Component Mapping</CardTitle>
                <CardDescription>Recommended radius values for common components</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-3">
                  {Object.entries(semanticRadius).map(([component, value]) => (
                    <div key={component} className="flex items-center justify-between p-3 bg-muted rounded">
                      <span className="font-medium capitalize">{component}</span>
                      <span className="text-sm text-muted-foreground font-mono">{value}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Lab-Specific Guidelines</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Data Visualization</h4>
                  <p className="text-sm text-muted-foreground">
                    Use minimal radius (2-4px) for charts and graphs to maintain data precision.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Control Panels</h4>
                  <p className="text-sm text-muted-foreground">
                    Medium radius (6-8px) for control elements to balance usability and aesthetics.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Equipment Simulation</h4>
                  <p className="text-sm text-muted-foreground">
                    Varied radius to match real equipment shapes and maintain authenticity.
                  </p>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Status Indicators</h4>
                  <p className="text-sm text-muted-foreground">
                    Full radius for circular indicators, small radius for rectangular badges.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Visual Examples */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Visual Examples</h2>

          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lab Interface Components</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
                  <div className="text-sm font-medium mb-2">Large Card (rounded-lg)</div>
                  <div className="grid grid-cols-2 gap-2">
                    <div className="p-2 bg-white border rounded">
                      <div className="text-xs">Button (rounded)</div>
                    </div>
                    <div className="p-2 bg-white border rounded-sm">
                      <div className="text-xs">Input (rounded-sm)</div>
                    </div>
                  </div>
                </div>

                <div className="flex gap-2">
                  <div className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs">
                    Status Badge (rounded-full)
                  </div>
                  <div className="px-2 py-1 bg-blue-100 text-blue-800 rounded text-xs">Tag (rounded)</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Display</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border rounded-md overflow-hidden">
                  <div className="bg-muted px-3 py-2 text-sm font-medium">Data Table (rounded-md)</div>
                  <div className="p-3 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span>Temperature</span>
                      <span>25.4°C</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span>Pressure</span>
                      <span>1.2 atm</span>
                    </div>
                  </div>
                </div>

                <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-xl">
                  <div className="text-sm font-medium">Alert Panel (rounded-xl)</div>
                  <div className="text-xs text-muted-foreground mt-1">Important lab safety information</div>
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
              <CardDescription>Border radius utility classes</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`/* All corners */
rounded-none    /* 0px */
rounded-sm      /* 2px */
rounded         /* 4px */
rounded-md      /* 6px */
rounded-lg      /* 8px */
rounded-xl      /* 12px */
rounded-2xl     /* 16px */
rounded-3xl     /* 24px */
rounded-full    /* 9999px */

/* Individual corners */
rounded-t-lg    /* top corners */
rounded-r-lg    /* right corners */
rounded-b-lg    /* bottom corners */
rounded-l-lg    /* left corners */

/* Single corners */
rounded-tl-lg   /* top-left */
rounded-tr-lg   /* top-right */
rounded-bl-lg   /* bottom-left */
rounded-br-lg   /* bottom-right */`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CSS Custom Properties</CardTitle>
              <CardDescription>Custom properties for border radius</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`:root {
  /* Base radius scale */
  --vl-radius-none: 0px;
  --vl-radius-sm: 2px;
  --vl-radius: 4px;
  --vl-radius-md: 6px;
  --vl-radius-lg: 8px;
  --vl-radius-xl: 12px;
  --vl-radius-2xl: 16px;
  --vl-radius-3xl: 24px;
  --vl-radius-full: 9999px;
  
  /* Component-specific radius */
  --vl-button-radius: var(--vl-radius-md);
  --vl-card-radius: var(--vl-radius-lg);
  --vl-input-radius: var(--vl-radius);
  --vl-modal-radius: var(--vl-radius-xl);
  --vl-badge-radius: var(--vl-radius-full);
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
