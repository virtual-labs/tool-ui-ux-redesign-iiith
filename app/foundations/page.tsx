'use client';

import { Palette, Type, Ruler, Grid, CornerDownRight, Layers, ArrowRight, Code } from "lucide-react"
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

  const pageStyle: React.CSSProperties = {
    minHeight: '100vh',
    backgroundColor: '#ffffff',
    backgroundImage: 'radial-gradient(#e2e8f0 1.5px, transparent 1.5px)',
    backgroundSize: '30px 30px',
    fontFamily: designSystem.typography.fontFamily.primary,
    color: '#0f172a',
    overflowX: 'hidden',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '80px 24px',
    position: 'relative',
    zIndex: 10,
  };

  const heroBadgeStyle: React.CSSProperties = {
    background: '#eff6ff',
    color: '#1d4ed8',
    border: '1px solid #bfdbfe',
    fontSize: '0.85rem',
    fontWeight: 600,
    padding: '6px 14px',
    borderRadius: '9999px',
    display: 'inline-flex',
    alignItems: 'center',
    gap: '6px',
    marginBottom: '24px',
    boxShadow: '0 2px 8px rgba(29, 78, 216, 0.05)',
  };

  const mainHeadingStyle: React.CSSProperties = {
    fontSize: '3.5rem',
    fontWeight: 800,
    lineHeight: '1.1',
    letterSpacing: '-0.02em',
    color: '#0f172a',
    marginBottom: '24px',
  };

  const highlightText: React.CSSProperties = {
    background: 'linear-gradient(135deg, #1d4ed8 0%, #3b82f6 100%)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.2rem',
    color: '#475569',
    maxWidth: '650px',
    margin: '0 auto 40px',
    lineHeight: '1.65',
  };

  const featureCardStyle: React.CSSProperties = {
    background: '#ffffff',
    border: '1px solid #e2e8f0',
    borderRadius: '20px',
    padding: '32px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    minHeight: '260px',
    boxShadow: '0 10px 30px rgba(0, 0, 0, 0.02)',
    transition: 'transform 0.2s ease, box-shadow 0.2s ease',
    textDecoration: 'none',
  };

  return (
    <div style={pageStyle}>
      <div style={containerStyle}>
        
        {/* Hero Section */}
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={heroBadgeStyle}>
            <Palette style={{ width: '14px', height: '14px', color: '#1d4ed8' }} />
            <span>Design Tokens & Foundations</span>
          </div>
          <h1 style={mainHeadingStyle}>
            Core <span style={highlightText}>Foundations</span>
          </h1>
          <p style={subtitleStyle}>
            Core design principles and tokens that form the foundation of the Virtual Labs Design System.
          </p>
        </div>

        {/* Grid of Foundations */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          marginBottom: '60px',
        }}>
          {foundations.map((item, index) => {
            const iconColor = index % 2 === 0 ? '#1d4ed8' : '#3b82f6';
            const iconBg = index % 2 === 0 ? '#eff6ff' : '#f0fdf4';
            
            return (
              <Link key={item.href} href={item.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={featureCardStyle}>
                  <div>
                    <div style={{ 
                      display: 'flex', 
                      alignItems: 'center', 
                      justifyContent: 'space-between',
                      marginBottom: '20px',
                    }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <item.icon style={{ 
                          height: '22px', 
                          width: '22px', 
                          color: iconColor 
                        }} />
                      </div>
                      <DSBadge style={{
                        background: item.status === "Beta" 
                          ? '#f59e0b'
                          : '#10b981',
                        color: 'white',
                        marginBottom: 0,
                        border: 'none',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}>
                        {item.status}
                      </DSBadge>
                    </div>
                    <h3 style={{ 
                      fontSize: '1.25rem',
                      fontWeight: 700,
                      marginBottom: '8px',
                      color: '#0f172a',
                    }}>
                      {item.title}
                    </h3>
                    <p style={{ 
                      color: '#475569',
                      margin: 0,
                      fontSize: '0.9rem',
                      lineHeight: '1.5',
                    }}>
                      {item.description}
                    </p>
                  </div>
                  <div style={{ marginTop: '24px', display: 'inline-flex', alignItems: 'center', color: '#1d4ed8', fontWeight: 600, fontSize: '0.9rem', gap: '4px' }}>
                    Explore tokens <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '4px' }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Design Tokens Section */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1d4ed8', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '8px' }}>
              <Code style={{ width: '14px', height: '14px' }} />
              <span>Design System Atoms</span>
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginBottom: '16px', color: '#0f172a', letterSpacing: '-0.01em' }}>
              Design Tokens
            </h2>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '32px' }}>
              Design tokens are the visual design atoms of our system — specifically, named entities that store attributes such as colors, typography scales, and shadows to ensure multi-platform consistency.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '16px',
            marginBottom: '32px',
          }}>
            {[
              { name: 'Primary Base', color: '#1d4ed8', bg: 'linear-gradient(135deg, #1d4ed8, #3b82f6)' },
              { name: 'Success', color: '#10b981', bg: 'linear-gradient(135deg, #10b981, #48bb78)' },
              { name: 'Warning', color: '#f59e0b', bg: 'linear-gradient(135deg, #f59e0b, #ed8936)' },
              { name: 'Error', color: '#ef4444', bg: 'linear-gradient(135deg, #ef4444, #f56565)' },
            ].map((token) => (
              <div key={token.name} style={{
                borderRadius: '12px',
                overflow: 'hidden',
                border: '1px solid #e2e8f0',
                background: '#ffffff',
              }}>
                <div style={{
                  height: '60px',
                  background: token.bg,
                }} />
                <div style={{
                  padding: '12px',
                  textAlign: 'center',
                }}>
                  <div style={{
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: '#0f172a',
                  }}>
                    {token.name}
                  </div>
                  <div style={{
                    fontSize: '0.75rem',
                    color: '#64748b',
                    fontFamily: designSystem.typography.fontFamily.mono,
                    marginTop: '2px',
                  }}>
                    {token.color}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{
            background: '#f8fafc',
            padding: '24px',
            borderRadius: '12px',
            border: '1px solid #e2e8f0',
          }}>
            <pre style={{
              fontFamily: designSystem.typography.fontFamily.mono,
              fontSize: '0.85rem',
              color: '#0f172a',
              margin: 0,
              whiteSpace: 'pre-wrap',
              lineHeight: '1.6',
            }}>
{`// Exported Design Tokens
export const designSystem = {
  colors: {
    primary: { base: '#1d4ed8', light: '#3b82f6' },
    success: { base: '#10b981', light: '#48bb78' },
    warning: { base: '#f59e0b', light: '#ed8936' },
    error:   { base: '#ef4444', light: '#f56565' }
  }
};`}
            </pre>
          </div>
        </div>
      </div>
    </div>
  )
}
