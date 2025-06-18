"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const spacingScale = {
  "0": "0px",
  "1": "4px",
  "2": "8px",
  "3": "12px",
  "4": "16px",
  "5": "20px",
  "6": "24px",
  "8": "32px",
  "10": "40px",
  "12": "48px",
  "16": "64px",
  "20": "80px",
  "24": "96px",
  "32": "128px",
  "40": "160px",
  "48": "192px",
  "56": "224px",
  "64": "256px",
}

const semanticSpacing = {
  xs: "4px",
  sm: "8px",
  md: "16px",
  lg: "24px",
  xl: "32px",
  "2xl": "48px",
  "3xl": "64px",
}

function SpacingDemo({ size, value, name }: { size: string; value: string; name: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(`space-${size}`)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center gap-4 p-4 border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex items-center gap-2 min-w-0 flex-1">
        <div className="bg-blue-500 flex-shrink-0" style={{ width: value, height: "16px" }} />
        <div className="min-w-0">
          <div className="font-mono text-sm">{name}</div>
          <div className="text-xs text-muted-foreground">{value}</div>
        </div>
      </div>
      <Button variant="ghost" size="sm" onClick={copyToClipboard} className="flex-shrink-0">
        {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
      </Button>
    </div>
  )
}

export default function SpacingPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Spacing</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Consistent spacing creates visual hierarchy and improves readability in Virtual Labs interfaces.
          </p>
          <Badge variant="default">Stable</Badge>
        </div>

        {/* Spacing Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Spacing Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">8px Base Unit</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All spacing values are multiples of 8px for consistent alignment and visual rhythm.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Semantic Naming</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Use semantic names (xs, sm, md, lg) for common spacing patterns in lab interfaces.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Context Aware</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Spacing adapts to content density needs in different lab interface contexts.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Spacing Scale */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Spacing Scale</h2>
          <Card>
            <CardHeader>
              <CardTitle>Base Scale</CardTitle>
              <CardDescription>Numerical spacing tokens based on 4px increments</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {Object.entries(spacingScale).map(([token, value]) => (
                  <SpacingDemo key={token} size={token} value={value} name={`space-${token}`} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Semantic Spacing */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Semantic Spacing</h2>
          <Card>
            <CardHeader>
              <CardTitle>Semantic Tokens</CardTitle>
              <CardDescription>Named spacing tokens for common use cases</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid gap-2">
                {Object.entries(semanticSpacing).map(([token, value]) => (
                  <SpacingDemo key={token} size={token} value={value} name={`space-${token}`} />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lab Interface Spacing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Control Panels</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Use consistent spacing between controls for easy scanning
                  </p>
                  <div className="bg-muted p-3 rounded text-xs font-mono">
                    gap-4 (16px) between control groups
                    <br />
                    gap-2 (8px) between related controls
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Data Display</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Adequate spacing for readability of scientific data
                  </p>
                  <div className="bg-muted p-3 rounded text-xs font-mono">
                    space-y-6 (24px) between data sections
                    <br />
                    space-y-2 (8px) between data rows
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Responsive Spacing</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Mobile Devices</h4>
                  <p className="text-sm text-muted-foreground mb-2">
                    Reduce spacing on smaller screens while maintaining usability
                  </p>
                  <div className="bg-muted p-3 rounded text-xs font-mono">
                    px-4 (16px) container padding
                    <br />
                    gap-3 (12px) between elements
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Desktop</h4>
                  <p className="text-sm text-muted-foreground mb-2">Generous spacing for complex lab interfaces</p>
                  <div className="bg-muted p-3 rounded text-xs font-mono">
                    px-8 (32px) container padding
                    <br />
                    gap-6 (24px) between sections
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
              <CardDescription>Use these Tailwind classes for consistent spacing</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`/* Padding */
p-4    /* 16px all sides */
px-6   /* 24px horizontal */
py-3   /* 12px vertical */

/* Margin */
m-4    /* 16px all sides */
mx-auto /* center horizontally */
my-8   /* 32px vertical */

/* Gap (Flexbox/Grid) */
gap-4  /* 16px gap */
gap-x-6 /* 24px horizontal gap */
gap-y-2 /* 8px vertical gap */

/* Space Between */
space-y-4 /* 16px vertical space between children */
space-x-2 /* 8px horizontal space between children */`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CSS Custom Properties</CardTitle>
              <CardDescription>Custom properties for advanced spacing control</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`:root {
  /* Base spacing scale */
  --vl-space-1: 4px;
  --vl-space-2: 8px;
  --vl-space-3: 12px;
  --vl-space-4: 16px;
  --vl-space-6: 24px;
  --vl-space-8: 32px;
  
  /* Semantic spacing */
  --vl-space-xs: var(--vl-space-1);
  --vl-space-sm: var(--vl-space-2);
  --vl-space-md: var(--vl-space-4);
  --vl-space-lg: var(--vl-space-6);
  --vl-space-xl: var(--vl-space-8);
  
  /* Component-specific spacing */
  --vl-control-gap: var(--vl-space-4);
  --vl-section-gap: var(--vl-space-6);
  --vl-container-padding: var(--vl-space-6);
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
