"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Copy, Check } from "lucide-react"
import { useState } from "react"

const colorPalette = {
  primary: {
    50: "#eff6ff",
    100: "#dbeafe",
    200: "#bfdbfe",
    300: "#93c5fd",
    400: "#60a5fa",
    500: "#3b82f6",
    600: "#2563eb",
    700: "#1d4ed8",
    800: "#1e40af",
    900: "#1e3a8a",
  },
  secondary: {
    50: "#f8fafc",
    100: "#f1f5f9",
    200: "#e2e8f0",
    300: "#cbd5e1",
    400: "#94a3b8",
    500: "#64748b",
    600: "#475569",
    700: "#334155",
    800: "#1e293b",
    900: "#0f172a",
  },
  success: {
    50: "#f0fdf4",
    100: "#dcfce7",
    200: "#bbf7d0",
    300: "#86efac",
    400: "#4ade80",
    500: "#22c55e",
    600: "#16a34a",
    700: "#15803d",
    800: "#166534",
    900: "#14532d",
  },
  warning: {
    50: "#fffbeb",
    100: "#fef3c7",
    200: "#fde68a",
    300: "#fcd34d",
    400: "#fbbf24",
    500: "#f59e0b",
    600: "#d97706",
    700: "#b45309",
    800: "#92400e",
    900: "#78350f",
  },
  error: {
    50: "#fef2f2",
    100: "#fee2e2",
    200: "#fecaca",
    300: "#fca5a5",
    400: "#f87171",
    500: "#ef4444",
    600: "#dc2626",
    700: "#b91c1c",
    800: "#991b1b",
    900: "#7f1d1d",
  },
}

function ColorSwatch({ name, value, shade }: { name: string; value: string; shade: string }) {
  const [copied, setCopied] = useState(false)

  const copyToClipboard = () => {
    navigator.clipboard.writeText(value)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="group relative">
      <div
        className="h-16 w-full rounded-lg border cursor-pointer transition-transform hover:scale-105"
        style={{ backgroundColor: value }}
        onClick={copyToClipboard}
      />
      <div className="mt-2 flex items-center justify-between">
        <div>
          <p className="text-sm font-medium">{shade}</p>
          <p className="text-xs text-muted-foreground font-mono">{value}</p>
        </div>
        <Button
          variant="ghost"
          size="sm"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
          onClick={copyToClipboard}
        >
          {copied ? <Check className="h-3 w-3" /> : <Copy className="h-3 w-3" />}
        </Button>
      </div>
    </div>
  )
}

export default function ColorsPage() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-4xl font-bold mb-4">Colors</h1>
          <p className="text-xl text-muted-foreground mb-6">
            Our color system is designed to be accessible, consistent, and meaningful across all Virtual Labs
            experiences.
          </p>
          <Badge variant="default">Stable</Badge>
        </div>

        {/* Color Principles */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold mb-6">Color Principles</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Accessibility First</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  All color combinations meet WCAG 2.1 AA standards for contrast ratios.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Semantic Meaning</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Colors convey meaning and state consistently across the system.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">Scientific Context</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Color choices support scientific data visualization and lab interfaces.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Color Palettes */}
        <div className="space-y-12">
          {Object.entries(colorPalette).map(([colorName, shades]) => (
            <div key={colorName}>
              <h3 className="text-xl font-bold mb-4 capitalize">{colorName}</h3>
              <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-10 gap-4">
                {Object.entries(shades).map(([shade, value]) => (
                  <ColorSwatch key={`${colorName}-${shade}`} name={colorName} value={value} shade={shade} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Usage Guidelines */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Usage Guidelines</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <Card>
              <CardHeader>
                <CardTitle>Primary Colors</CardTitle>
                <CardDescription>Use for primary actions, links, and key interface elements</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-blue-600"></div>
                    <span className="text-sm">Primary buttons and CTAs</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-blue-500"></div>
                    <span className="text-sm">Interactive elements</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-blue-700"></div>
                    <span className="text-sm">Hover and active states</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Semantic Colors</CardTitle>
                <CardDescription>Convey status, feedback, and system states</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-green-600"></div>
                    <span className="text-sm">Success states and confirmations</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-yellow-600"></div>
                    <span className="text-sm">Warnings and cautions</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-4 h-4 rounded bg-red-600"></div>
                    <span className="text-sm">Errors and destructive actions</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Code Examples */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-6">Implementation</h2>
          <Card>
            <CardHeader>
              <CardTitle>CSS Custom Properties</CardTitle>
              <CardDescription>Use these CSS custom properties in your stylesheets</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="bg-muted p-4 rounded-lg overflow-x-auto">
                <pre className="text-sm">
                  <code>{`:root {
  /* Primary Colors */
  --vl-primary-50: #eff6ff;
  --vl-primary-500: #3b82f6;
  --vl-primary-600: #2563eb;
  
  /* Semantic Colors */
  --vl-success: #16a34a;
  --vl-warning: #d97706;
  --vl-error: #dc2626;
  
  /* Usage */
  --vl-color-primary: var(--vl-primary-600);
  --vl-color-text: var(--vl-secondary-900);
  --vl-color-background: #ffffff;
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
