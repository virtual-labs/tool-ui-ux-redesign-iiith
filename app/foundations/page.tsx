'use client';

import { Palette, Type, Ruler, Grid, CornerDownRight, Layers } from "lucide-react"
import Link from "next/link"
import { DSCard, DSHeading1, DSHeading2, DSHeading3, DSParagraph, DSBadge } from "@/components/design-system"
import { designSystem } from "@/lib/design-system"

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
    <div style={{
      minHeight: '100vh',
      background: designSystem.colors.background.gradient,
      fontFamily: designSystem.typography.fontFamily.primary,
    }}>
      {/* Hero Section with Gradient Background */}
      <div style={{
        background: designSystem.colors.background.gradient,
        padding: `${designSystem.layout.spacing.xxl} ${designSystem.layout.spacing.lg}`,
        textAlign: 'center',
        color: 'white',
      }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <DSHeading1 style={{
            fontSize: '3rem',
            marginBottom: designSystem.layout.spacing.md,
            color: 'white',
            fontWeight: designSystem.typography.fontWeight.headers,
          }}>
            ✨ Foundations
          </DSHeading1>
          <DSParagraph style={{
            fontSize: '1.3rem',
            color: 'rgba(255, 255, 255, 0.9)',
            lineHeight: '1.6',
            marginBottom: 0,
          }}>
            Core design principles and tokens that form the foundation of the Virtual Labs Design System.
          </DSParagraph>
        </div>
      </div>

      {/* Main Content */}
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        padding: `${designSystem.layout.spacing.xxl} ${designSystem.layout.spacing.lg}`,
        marginTop: '-40px',
        position: 'relative',
        zIndex: 1,
      }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: designSystem.layout.spacing.lg,
          marginBottom: designSystem.layout.spacing.xxl,
        }}>
          {foundations.map((item, index) => {
            // Create different gradient backgrounds for each card
            const gradients = [
              'linear-gradient(135deg, #667eea, #764ba2)', // Purple
              'linear-gradient(135deg, #3182ce, #4299e1)', // Blue
              'linear-gradient(135deg, #10b981, #48bb78)', // Green
              'linear-gradient(135deg, #f59e0b, #ed8936)', // Orange
              'linear-gradient(135deg, #8b5cf6, #a855f7)', // Purple variant
              'linear-gradient(135deg, #ef4444, #f56565)', // Red
            ];
            
            return (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <DSCard interactive style={{ 
                  height: '100%', 
                  cursor: 'pointer',
                  background: 'white',
                  overflow: 'hidden',
                  position: 'relative',
                }}>
                  {/* Colorful header bar */}
                  <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    height: '4px',
                    background: gradients[index % gradients.length],
                  }} />
                  
                  <div style={{ 
                    display: 'flex', 
                    alignItems: 'center', 
                    justifyContent: 'space-between',
                    marginBottom: designSystem.layout.spacing.md,
                    marginTop: designSystem.layout.spacing.sm,
                  }}>
                    <div style={{
                      width: '50px',
                      height: '50px',
                      borderRadius: '12px',
                      background: gradients[index % gradients.length],
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <item.icon style={{ 
                        height: '24px', 
                        width: '24px', 
                        color: 'white' 
                      }} />
                    </div>
                    <DSBadge style={{
                      background: item.status === "Beta" 
                        ? designSystem.colors.warning.base
                        : designSystem.colors.success.base,
                      color: 'white',
                      marginBottom: 0,
                      fontSize: '0.75rem',
                      fontWeight: designSystem.typography.fontWeight.labels,
                    }}>
                      {item.status}
                    </DSBadge>
                  </div>
                  <DSHeading3 style={{ 
                    marginBottom: designSystem.layout.spacing.sm,
                    color: designSystem.colors.neutral.dark,
                    fontSize: '1.25rem',
                  }}>
                    {item.title}
                  </DSHeading3>
                  <DSParagraph style={{ 
                    color: designSystem.colors.neutral.medium,
                    margin: 0,
                    fontSize: '0.95rem',
                    lineHeight: '1.5',
                  }}>
                    {item.description}
                  </DSParagraph>
                </DSCard>
              </Link>
            );
          })}
        </div>

        {/* Design Tokens Section */}
        <div style={{
          background: 'white',
          borderRadius: designSystem.borderRadius.cards,
          boxShadow: designSystem.elevation.level2,
          overflow: 'hidden',
        }}>
          {/* Colorful header for the section */}
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            padding: designSystem.layout.spacing.lg,
            color: 'white',
          }}>
            <DSHeading2 style={{ 
              color: 'white',
              marginBottom: designSystem.layout.spacing.sm,
              fontSize: '1.75rem',
            }}>
              🎨 Design Tokens
            </DSHeading2>
            <DSParagraph style={{
              color: 'rgba(255, 255, 255, 0.9)',
              margin: 0,
              fontSize: '1rem',
            }}>
              The building blocks of our design system
            </DSParagraph>
          </div>
          
          <div style={{ padding: designSystem.layout.spacing.lg }}>
            <DSHeading3 style={{ 
              marginBottom: designSystem.layout.spacing.md,
              color: designSystem.colors.neutral.dark,
            }}>
              What are Design Tokens?
            </DSHeading3>
            <DSParagraph style={{
              color: designSystem.colors.neutral.medium,
              marginBottom: designSystem.layout.spacing.lg,
              fontSize: '1rem',
              lineHeight: '1.6',
            }}>
              Design tokens are the visual design atoms of the design system — specifically, they are named entities
              that store visual design attributes. They ensure consistency across all Virtual Labs products.
            </DSParagraph>
            
            {/* Color tokens showcase */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: designSystem.layout.spacing.md,
              marginBottom: designSystem.layout.spacing.lg,
            }}>
              {[
                { name: 'Primary', color: designSystem.colors.primary.base, bg: designSystem.colors.primary.gradient },
                { name: 'Success', color: designSystem.colors.success.base, bg: `linear-gradient(135deg, ${designSystem.colors.success.base}, ${designSystem.colors.success.light})` },
                { name: 'Warning', color: designSystem.colors.warning.base, bg: `linear-gradient(135deg, ${designSystem.colors.warning.base}, ${designSystem.colors.warning.light})` },
                { name: 'Error', color: designSystem.colors.error.base, bg: `linear-gradient(135deg, ${designSystem.colors.error.base}, ${designSystem.colors.error.light})` },
              ].map((token) => (
                <div key={token.name} style={{
                  borderRadius: designSystem.borderRadius.components,
                  overflow: 'hidden',
                  border: `1px solid ${designSystem.colors.neutral.light}`,
                }}>
                  <div style={{
                    height: '60px',
                    background: token.bg,
                  }} />
                  <div style={{
                    padding: designSystem.layout.spacing.sm,
                    textAlign: 'center',
                  }}>
                    <div style={{
                      fontSize: '0.85rem',
                      fontWeight: designSystem.typography.fontWeight.labels,
                      color: designSystem.colors.neutral.dark,
                    }}>
                      {token.name}
                    </div>
                    <div style={{
                      fontSize: '0.75rem',
                      color: designSystem.colors.neutral.medium,
                      fontFamily: designSystem.typography.fontFamily.mono,
                    }}>
                      {token.color}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div style={{
              background: designSystem.colors.neutral.dark,
              padding: designSystem.layout.spacing.lg,
              borderRadius: designSystem.borderRadius.components,
              border: `1px solid ${designSystem.colors.neutral.medium}`,
            }}>
              <pre style={{
                fontFamily: designSystem.typography.fontFamily.mono,
                fontSize: '0.9rem',
                color: designSystem.colors.success.light,
                margin: 0,
                whiteSpace: 'pre-wrap',
                lineHeight: '1.5',
              }}>
{`// Example: VLabs Color Tokens
--vl-color-primary: #3182ce;
--vl-color-primary-light: #4299e1;
--vl-color-success: #10b981;
--vl-color-warning: #f59e0b;
--vl-color-error: #ef4444;
--vl-bg-gradient: linear-gradient(135deg, #667eea, #764ba2);`}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
