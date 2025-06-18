"use client"

import type React from "react"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const typeScale = {
  "text-xs": { size: "12px", lineHeight: "16px", use: "Captions, small labels" },
  "text-sm": { size: "14px", lineHeight: "20px", use: "Body text, form labels" },
  "text-base": { size: "16px", lineHeight: "24px", use: "Default body text" },
  "text-lg": { size: "18px", lineHeight: "28px", use: "Large body text" },
  "text-xl": { size: "20px", lineHeight: "28px", use: "Small headings" },
  "text-2xl": { size: "24px", lineHeight: "32px", use: "Section headings" },
  "text-3xl": { size: "30px", lineHeight: "36px", use: "Page headings" },
  "text-4xl": { size: "36px", lineHeight: "40px", use: "Display headings" },
  "text-5xl": { size: "48px", lineHeight: "1", use: "Hero headings" },
}

const fontWeights = {
  "font-light": { weight: "300", use: "Light emphasis" },
  "font-normal": { weight: "400", use: "Body text" },
  "font-medium": { weight: "500", use: "Emphasis, labels" },
  "font-semibold": { weight: "600", use: "Headings, important text" },
  "font-bold": { weight: "700", use: "Strong emphasis" },
}

function TypeDemo({
  className,
  children,
  description,
}: { className: string; children: React.ReactNode; description: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(className)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="flex items-center justify-between p-4 border rounded-lg hover:bg-muted/50 transition-colors">
      <div className="flex-1">
        <div className={className}>{children}</div>
        <div className="text-xs text-muted-foreground mt-1">{description}</div>
      </div>
      <div className="flex items-center gap-2">
        <code className="text-xs bg-muted px-2 py-1 rounded">{className}</code>
        <Button variant="ghost" size="sm" onClick={copyToClipboard}>
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </Button>
      </div>
    </div>
  )
}

export default function TypographyPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Typography</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Typography system designed for scientific content, data readability, and educational clarity in Virtual
            Labs.
          </p>
          <Badge variant="default">Stable</Badge>
        </div>

        {/* Typography Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Typography Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scientific Clarity</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Typography prioritizes readability of scientific data, formulas, and technical content.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Educational Hierarchy</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Clear information hierarchy supports learning objectives and content comprehension.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Accessibility First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Font choices and sizing ensure readability for users with diverse visual needs.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Font Families */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Font Families</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Font - Inter</CardTitle>
                <CardDescription>Used for all interface text, headings, and body content</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="font-sans">
                  <div className="text-2xl font-bold mb-2">Inter Font Family</div>
                  <div className="text-base mb-2">The quick brown fox jumps over the lazy dog. 1234567890</div>
                  <div className="text-sm text-muted-foreground">
                    Optimized for digital interfaces with excellent readability at all sizes.
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <code>font-family: Inter, system-ui, sans-serif;</code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Monospace Font - JetBrains Mono</CardTitle>
                <CardDescription>Used for code, data values, and scientific notation</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="font-mono">
                  <div className="text-2xl font-bold mb-2">JetBrains Mono</div>
                  <div className="text-base mb-2">pH: 7.42 | Temp: 25.3°C | 0123456789</div>
                  <div className="text-sm text-muted-foreground">
                    Designed for code and data with enhanced readability of numbers and symbols.
                  </div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <code>font-family: 'JetBrains Mono', 'Fira Code', monospace;</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Type Scale */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Type Scale</h2>
          <Card>
            <CardHeader>
              <CardTitle>Font Sizes</CardTitle>
              <CardDescription>Harmonious scale for all text elements</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(typeScale).map(([className, { size, lineHeight, use }]) => (
                  <TypeDemo key={className} className={className} description={`${size} / ${lineHeight} - ${use}`}>
                    The quick brown fox jumps over the lazy dog
                  </TypeDemo>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Font Weights */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Font Weights</h2>
          <Card>
            <CardHeader>
              <CardTitle>Weight Variations</CardTitle>
              <CardDescription>Different weights for emphasis and hierarchy</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                {Object.entries(fontWeights).map(([className, { weight, use }]) => (
                  <TypeDemo key={className} className={`text-lg ${className}`} description={`${weight} - ${use}`}>
                    Virtual Labs Typography System
                  </TypeDemo>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Scientific Typography */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Scientific Typography</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Mathematical Notation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="text-lg">
                    E = mc<sup>2</sup>
                  </div>
                  <div className="text-lg">
                    H<sub>2</sub>O + NaCl → Solution
                  </div>
                  <div className="text-lg">ΔG = ΔH - TΔS</div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <code>{`<sup>2</sup> for superscript
<sub>2</sub> for subscript`}</code>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Data Presentation</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <div className="font-mono text-lg">25.4°C ± 0.1</div>
                  <div className="font-mono text-lg">1.23 × 10⁻⁶ mol/L</div>
                  <div className="font-mono text-lg">pH: 7.42</div>
                  <div className="font-mono text-lg">λ = 589.3 nm</div>
                </div>
                <div className="bg-muted p-3 rounded text-sm">
                  <code>Use monospace for precise measurements</code>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Usage Guidelines */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Lab Interface Typography</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Control Labels</h4>
                  <p className="text-sm text-muted-foreground mb-2">Use medium weight, small to base size</p>
                  <div className="text-sm font-medium">Temperature Control</div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Data Values</h4>
                  <p className="text-sm text-muted-foreground mb-2">Always use monospace for measurements</p>
                  <div className="font-mono text-base">25.4°C</div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Status Messages</h4>
                  <p className="text-sm text-muted-foreground mb-2">Clear, scannable text for system feedback</p>
                  <div className="text-sm text-green-600">✓ Experiment running</div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Educational Content</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <h4 className="font-medium mb-2">Instructions</h4>
                  <p className="text-sm text-muted-foreground mb-2">Clear, step-by-step guidance</p>
                  <div className="text-base">1. Adjust the temperature to 25°C</div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Explanations</h4>
                  <p className="text-sm text-muted-foreground mb-2">Readable body text for concepts</p>
                  <div className="text-base leading-relaxed">
                    The pH scale measures the acidity or alkalinity of a solution.
                  </div>
                </div>
                <div>
                  <h4 className="font-medium mb-2">Formulas</h4>
                  <p className="text-sm text-muted-foreground mb-2">Mathematical expressions</p>
                  <div className="text-lg">
                    pH = -log[H<sup>+</sup>]
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
              <CardTitle>CSS Classes</CardTitle>
              <CardDescription>Tailwind typography utilities</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`/* Font Sizes */
text-xs     /* 12px */
text-sm     /* 14px */
text-base   /* 16px */
text-lg     /* 18px */
text-xl     /* 20px */
text-2xl    /* 24px */
text-3xl    /* 30px */
text-4xl    /* 36px */

/* Font Weights */
font-light    /* 300 */
font-normal   /* 400 */
font-medium   /* 500 */
font-semibold /* 600 */
font-bold     /* 700 */

/* Font Families */
font-sans     /* Inter */
font-mono     /* JetBrains Mono */

/* Line Heights */
leading-tight   /* 1.25 */
leading-normal  /* 1.5 */
leading-relaxed /* 1.625 */`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>CSS Custom Properties</CardTitle>
              <CardDescription>Typography tokens for consistent styling</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`:root {
  /* Font Families */
  --vl-font-sans: Inter, system-ui, sans-serif;
  --vl-font-mono: 'JetBrains Mono', 'Fira Code', monospace;
  
  /* Font Sizes */
  --vl-text-xs: 0.75rem;    /* 12px */
  --vl-text-sm: 0.875rem;   /* 14px */
  --vl-text-base: 1rem;     /* 16px */
  --vl-text-lg: 1.125rem;   /* 18px */
  --vl-text-xl: 1.25rem;    /* 20px */
  --vl-text-2xl: 1.5rem;    /* 24px */
  --vl-text-3xl: 1.875rem;  /* 30px */
  --vl-text-4xl: 2.25rem;   /* 36px */
  
  /* Line Heights */
  --vl-leading-tight: 1.25;
  --vl-leading-normal: 1.5;
  --vl-leading-relaxed: 1.625;
  
  /* Component-specific typography */
  --vl-heading-font: var(--vl-font-sans);
  --vl-body-font: var(--vl-font-sans);
  --vl-data-font: var(--vl-font-mono);
  --vl-code-font: var(--vl-font-mono);
}`}</code>
                </pre>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle>Accessibility Considerations</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div>
                <h4 className="font-medium mb-2">Minimum Font Sizes</h4>
                <p className="text-sm text-muted-foreground">
                  Never use text smaller than 12px (text-xs) for body content. Use 14px (text-sm) minimum for important
                  information.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Color Contrast</h4>
                <p className="text-sm text-muted-foreground">
                  Ensure sufficient contrast ratios: 4.5:1 for normal text, 3:1 for large text (18px+ or 14px+ bold).
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Line Length</h4>
                <p className="text-sm text-muted-foreground">
                  Optimal line length is 45-75 characters for body text. Use max-width utilities to control line length.
                </p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Responsive Typography</h4>
                <p className="text-sm text-muted-foreground">
                  Use responsive text sizes (sm:text-lg, md:text-xl) to ensure readability across devices.
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
