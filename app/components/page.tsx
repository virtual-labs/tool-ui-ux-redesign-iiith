'use client';

import { MousePointer, Square, Navigation, BarChart3, MessageSquare, Layout, ArrowRight } from "lucide-react"
import { designSystem } from "@/lib/design-system"
import { DSButton, DSCard, DSBadge, DSHeading1, DSHeading2, DSHeading3, DSParagraph, DSCode } from "@/components/design-system"

export default function ComponentsPage() {
  const componentCategories = [
    {
      title: "Buttons",
      description: "Interactive elements for actions and navigation",
      icon: MousePointer,
      href: "/components/buttons",
      count: 8,
      status: "Stable",
      gradient: "linear-gradient(135deg, #3182ce, #4299e1)",
    },
    {
      title: "Forms",
      description: "Input fields, selectors, and form controls",
      icon: Square,
      href: "/components/forms",
      count: 12,
      status: "Stable",
      gradient: "linear-gradient(135deg, #10b981, #48bb78)",
    },
    {
      title: "Navigation",
      description: "Menus, breadcrumbs, and navigation patterns",
      icon: Navigation,
      href: "/components/navigation",
      count: 6,
      status: "Stable",
      gradient: "linear-gradient(135deg, #8b5cf6, #a855f7)",
    },
    {
      title: "Data Display",
      description: "Tables, charts, and data visualization components",
      icon: BarChart3,
      href: "/components/data-display",
      count: 10,
      status: "Beta",
      gradient: "linear-gradient(135deg, #f59e0b, #ed8936)",
    },
    {
      title: "Feedback",
      description: "Alerts, toasts, and status indicators",
      icon: MessageSquare,
      href: "/components/feedback",
      count: 7,
      status: "Stable",
      gradient: "linear-gradient(135deg, #ef4444, #f87171)",
    },
    {
      title: "Layout",
      description: "Containers, grids, and structural components",
      icon: Layout,
      href: "/components/layout",
      count: 5,
      status: "Stable",
      gradient: "linear-gradient(135deg, #06b6d4, #67e8f9)",
    },
  ]

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: designSystem.colors.background.gradient,
    fontFamily: designSystem.typography.fontFamily.primary,
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: designSystem.layout.spacing.xl,
  };

  const heroStyle: React.CSSProperties = {
    textAlign: 'center',
    marginBottom: designSystem.layout.spacing.xxl,
    color: 'white',
  };

  const mainHeadingStyle: React.CSSProperties = {
    fontSize: '3.5rem',
    fontWeight: designSystem.typography.fontWeight.headers,
    background: 'linear-gradient(135deg, #ffffff, #e2e8f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: designSystem.layout.spacing.lg,
    lineHeight: '1.1',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.25rem',
    color: 'rgba(255, 255, 255, 0.9)',
    maxWidth: '600px',
    margin: '0 auto',
    lineHeight: '1.6',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        {/* Hero Section */}
        <div style={heroStyle}>
          <DSBadge style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            fontSize: '0.9rem',
            padding: `${designSystem.layout.spacing.sm} ${designSystem.layout.spacing.md}`,
            marginBottom: designSystem.layout.spacing.lg,
          }}>
            🧩 Component Library
          </DSBadge>
          <h1 style={mainHeadingStyle}>Components</h1>
          <p style={subtitleStyle}>
            Production-ready components built for Virtual Labs experiences. Copy and paste into your projects.
          </p>
        </div>

        {/* Quick Stats */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: designSystem.borderRadius.cards,
          padding: designSystem.layout.spacing.xl,
          marginBottom: designSystem.layout.spacing.xl,
          boxShadow: designSystem.elevation.level3,
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: designSystem.layout.spacing.lg,
            marginBottom: designSystem.layout.spacing.xl,
          }}>
            <DSCard style={{
              background: 'linear-gradient(135deg, #3182ce, #4299e1)',
              color: 'white',
              border: 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>48</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Components</div>
            </DSCard>
            <DSCard style={{
              background: 'linear-gradient(135deg, #10b981, #48bb78)',
              color: 'white',
              border: 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>42</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Stable</div>
            </DSCard>
            <DSCard style={{
              background: 'linear-gradient(135deg, #f59e0b, #ed8936)',
              color: 'white',
              border: 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>6</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Beta</div>
            </DSCard>
            <DSCard style={{
              background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
              color: 'white',
              border: 'none',
              textAlign: 'center',
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>100%</div>
              <div style={{ fontSize: '0.9rem', opacity: 0.9 }}>Accessible</div>
            </DSCard>
          </div>

          {/* Component Categories */}
          <DSHeading2 style={{
            fontSize: '2.25rem',
            textAlign: 'center',
            background: designSystem.colors.background.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: designSystem.layout.spacing.xl,
            fontWeight: designSystem.typography.fontWeight.headers,
          }}>
            📦 Component Categories
          </DSHeading2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: designSystem.layout.spacing.lg,
          }}>
            {componentCategories.map((category) => (
              <DSCard key={category.href} interactive style={{
                background: category.gradient,
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: designSystem.layout.spacing.md }}>
                  <category.icon style={{ width: '32px', height: '32px', color: 'white' }} />
                  <DSBadge style={{
                    background: category.status === "Beta" ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    fontSize: '0.8rem',
                  }}>
                    {category.status}
                  </DSBadge>
                </div>
                <DSHeading3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: designSystem.layout.spacing.sm }}>
                  {category.title}
                </DSHeading3>
                <DSParagraph style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.95rem',
                  marginBottom: designSystem.layout.spacing.md,
                  lineHeight: '1.5',
                }}>
                  {category.description}
                </DSParagraph>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: '0.9rem', opacity: 0.9 }}>{category.count} components</span>
                  <ArrowRight style={{ width: '16px', height: '16px', opacity: 0.9 }} />
                </div>
              </DSCard>
            ))}
          </div>
        </div>

        {/* Getting Started */}
        <div style={{
          background: 'white',
          borderRadius: designSystem.borderRadius.cards,
          padding: designSystem.layout.spacing.xl,
          boxShadow: designSystem.elevation.level3,
        }}>
          <DSHeading2 style={{
            fontSize: '2.25rem',
            textAlign: 'center',
            background: designSystem.colors.background.gradient,
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            backgroundClip: 'text',
            marginBottom: designSystem.layout.spacing.xl,
            fontWeight: designSystem.typography.fontWeight.headers,
          }}>
            🚀 Getting Started
          </DSHeading2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: designSystem.layout.spacing.lg,
            marginBottom: designSystem.layout.spacing.xl,
          }}>
            <DSCard style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
            }}>
              <DSHeading3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: designSystem.layout.spacing.md }}>
                📦 Installation
              </DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: designSystem.layout.spacing.lg,
                lineHeight: '1.6',
              }}>
                Add components to your project
              </DSParagraph>
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: designSystem.layout.spacing.md,
                borderRadius: designSystem.borderRadius.components,
                marginBottom: designSystem.layout.spacing.md,
                fontFamily: designSystem.typography.fontFamily.mono,
                fontSize: '0.9rem',
              }}>
                pnpm install @virtual-labs/ui
              </div>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem',
              }}>
                Or copy individual components from the documentation.
              </DSParagraph>
            </DSCard>

            <DSCard style={{
              background: 'linear-gradient(135deg, #10b981, #48bb78)',
              color: 'white',
              border: 'none',
            }}>
              <DSHeading3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: designSystem.layout.spacing.md }}>
                🧩 Usage
              </DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                marginBottom: designSystem.layout.spacing.lg,
                lineHeight: '1.6',
              }}>
                Import and use components in your React app
              </DSParagraph>
              <div style={{
                background: 'rgba(0, 0, 0, 0.3)',
                padding: designSystem.layout.spacing.md,
                borderRadius: designSystem.borderRadius.components,
                fontFamily: designSystem.typography.fontFamily.mono,
                fontSize: '0.85rem',
                lineHeight: '1.4',
              }}>
                {`import { Button } from '@virtual-labs/ui'

<Button variant="primary">
  Start Experiment
</Button>`}
              </div>
            </DSCard>
          </div>

          <DSCard style={{
            background: 'linear-gradient(135deg, #f59e0b, #ed8936)',
            color: 'white',
            border: 'none',
          }}>
            <DSHeading3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: designSystem.layout.spacing.md }}>
              📋 Component Anatomy
            </DSHeading3>
            <DSParagraph style={{
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: designSystem.layout.spacing.lg,
              lineHeight: '1.6',
            }}>
              Each component includes comprehensive documentation
            </DSParagraph>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: designSystem.layout.spacing.lg,
            }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>Usage Guidelines</div>
                <div style={{ opacity: 0.9, fontSize: '0.9rem' }}>When and how to use</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>API Reference</div>
                <div style={{ opacity: 0.9, fontSize: '0.9rem' }}>Props and variants</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>Code Examples</div>
                <div style={{ opacity: 0.9, fontSize: '0.9rem' }}>Copy-paste ready</div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>Accessibility</div>
                <div style={{ opacity: 0.9, fontSize: '0.9rem' }}>WCAG compliance</div>
              </div>
            </div>
          </DSCard>
        </div>
      </div>
    </div>
  )
}
