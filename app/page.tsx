'use client';

import { ArrowRight, Palette, Code, Accessibility, BookOpen } from "lucide-react"
import { designSystem } from "@/lib/design-system"
import { DSButton, DSCard, DSBadge, DSHeading1, DSHeading2, DSHeading3, DSParagraph, DSCode } from "@/components/design-system"

export default function HomePage() {
  const heroSectionStyle: React.CSSProperties = {
    minHeight: '100vh',
    background: designSystem.colors.background.gradient,
    fontFamily: designSystem.typography.fontFamily.primary,
    position: 'relative',
    overflow: 'hidden',
  };

  const containerStyle: React.CSSProperties = {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: `${designSystem.layout.spacing.xxl} ${designSystem.layout.spacing.lg}`,
  };

  const heroContentStyle: React.CSSProperties = {
    textAlign: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    color: 'white',
    position: 'relative',
    zIndex: 2,
  };

  const mainHeadingStyle: React.CSSProperties = {
    fontSize: '4rem',
    fontWeight: designSystem.typography.fontWeight.headers,
    fontFamily: designSystem.typography.fontFamily.primary,
    background: 'linear-gradient(135deg, #ffffff, #e2e8f0)',
    WebkitBackgroundClip: 'text',
    WebkitTextFillColor: 'transparent',
    backgroundClip: 'text',
    marginBottom: designSystem.layout.spacing.lg,
    lineHeight: '1.1',
    textShadow: '0 2px 4px rgba(0,0,0,0.1)',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '1.3rem',
    fontWeight: designSystem.typography.fontWeight.body,
    fontFamily: designSystem.typography.fontFamily.primary,
    color: 'rgba(255, 255, 255, 0.95)',
    marginBottom: designSystem.layout.spacing.xl,
    lineHeight: '1.6',
    textShadow: '0 1px 2px rgba(0,0,0,0.1)',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: designSystem.layout.spacing.md,
    justifyContent: 'center',
    flexWrap: 'wrap',
  };

  return (
    <div style={heroSectionStyle}>
      {/* Animated background elements */}
      <div style={{
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        background: 'radial-gradient(circle at 20% 30%, rgba(255,255,255,0.1) 0%, transparent 70%), radial-gradient(circle at 80% 70%, rgba(255,255,255,0.1) 0%, transparent 70%)',
        zIndex: 1,
      }} />
      
      {/* Hero Section */}
      <section style={containerStyle}>
        <div style={heroContentStyle}>
          <DSBadge style={{
            background: 'rgba(255, 255, 255, 0.2)',
            color: 'white',
            border: '1px solid rgba(255, 255, 255, 0.3)',
            backdropFilter: 'blur(10px)',
            fontSize: '0.9rem',
            padding: `${designSystem.layout.spacing.sm} ${designSystem.layout.spacing.md}`,
          }}>
            ✨ Virtual Labs Design System v1.0
          </DSBadge>
          <h1 style={mainHeadingStyle}>
            Virtual Labs Design System
          </h1>
          <p style={subtitleStyle}>
            A comprehensive design system for building consistent, accessible, and beautiful virtual laboratory
            experiences. Built with modern web standards and copy-paste components.
          </p>
          <div style={buttonContainerStyle}>
            <DSButton href="/foundations" variant="primary" style={{
              fontSize: '1.1rem',
              padding: `${designSystem.layout.spacing.md} ${designSystem.layout.spacing.xl}`,
              boxShadow: '0 8px 32px rgba(0,0,0,0.2)',
            }}>
              Get Started <ArrowRight style={{ marginLeft: designSystem.layout.spacing.sm, width: '20px', height: '20px' }} />
            </DSButton>
            <DSButton href="/components" variant="secondary" style={{
              fontSize: '1.1rem',
              padding: `${designSystem.layout.spacing.md} ${designSystem.layout.spacing.xl}`,
              backdropFilter: 'blur(10px)',
              background: 'rgba(255, 255, 255, 0.15)',
              border: '2px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
            }}>
              Browse Components
            </DSButton>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section style={{
        ...containerStyle,
        background: 'rgba(255, 255, 255, 0.95)',
        backdropFilter: 'blur(20px)',
        borderRadius: `${designSystem.borderRadius.cards} ${designSystem.borderRadius.cards} 0 0`,
        marginTop: '-60px',
        position: 'relative',
        zIndex: 3,
        boxShadow: '0 -10px 40px rgba(0,0,0,0.1)',
      }}>
        <DSHeading2 style={{
          fontSize: '2.5rem',
          textAlign: 'center',
          background: designSystem.colors.background.gradient,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          marginBottom: designSystem.layout.spacing.xl,
          fontWeight: designSystem.typography.fontWeight.headers,
        }}>
          🚀 Explore Our Design System
        </DSHeading2>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: designSystem.layout.spacing.lg,
        }}>
          <DSCard interactive style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            color: 'white',
            border: 'none',
          }}>
            <div style={{ marginBottom: designSystem.layout.spacing.md }}>
              <Palette style={{ 
                width: '40px', 
                height: '40px', 
                color: 'white',
                marginBottom: designSystem.layout.spacing.md 
              }} />
              <DSHeading3 style={{ color: 'white', fontSize: '1.3rem' }}>Foundations</DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.95rem',
                marginBottom: designSystem.layout.spacing.md,
                lineHeight: '1.5',
              }}>
                Design tokens, colors, typography, and core principles
              </DSParagraph>
            </div>
            <DSButton href="/foundations" variant="secondary" style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              backdropFilter: 'blur(10px)',
            }}>
              Explore Foundations <ArrowRight style={{ marginLeft: designSystem.layout.spacing.sm, width: '16px', height: '16px' }} />
            </DSButton>
          </DSCard>

          <DSCard interactive style={{
            background: 'linear-gradient(135deg, #10b981, #48bb78)',
            color: 'white',
            border: 'none',
          }}>
            <div style={{ marginBottom: designSystem.layout.spacing.md }}>
              <Code style={{ 
                width: '40px', 
                height: '40px', 
                color: 'white',
                marginBottom: designSystem.layout.spacing.md 
              }} />
              <DSHeading3 style={{ color: 'white', fontSize: '1.3rem' }}>Components</DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.95rem',
                marginBottom: designSystem.layout.spacing.md,
                lineHeight: '1.5',
              }}>
                Ready-to-use components with copy-paste code
              </DSParagraph>
            </div>
            <DSButton href="/components" variant="secondary" style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              backdropFilter: 'blur(10px)',
            }}>
              View Components <ArrowRight style={{ marginLeft: designSystem.layout.spacing.sm, width: '16px', height: '16px' }} />
            </DSButton>
          </DSCard>

          <DSCard interactive style={{
            background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
            color: 'white',
            border: 'none',
          }}>
            <div style={{ marginBottom: designSystem.layout.spacing.md }}>
              <Accessibility style={{ 
                width: '40px', 
                height: '40px', 
                color: 'white',
                marginBottom: designSystem.layout.spacing.md 
              }} />
              <DSHeading3 style={{ color: 'white', fontSize: '1.3rem' }}>Accessibility</DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.95rem',
                marginBottom: designSystem.layout.spacing.md,
                lineHeight: '1.5',
              }}>
                Guidelines for building inclusive experiences
              </DSParagraph>
            </div>
            <DSButton href="/guidelines/accessibility" variant="secondary" style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              backdropFilter: 'blur(10px)',
            }}>
              Learn A11y <ArrowRight style={{ marginLeft: designSystem.layout.spacing.sm, width: '16px', height: '16px' }} />
            </DSButton>
          </DSCard>

          <DSCard interactive style={{
            background: 'linear-gradient(135deg, #f59e0b, #ed8936)',
            color: 'white',
            border: 'none',
          }}>
            <div style={{ marginBottom: designSystem.layout.spacing.md }}>
              <BookOpen style={{ 
                width: '40px', 
                height: '40px', 
                color: 'white',
                marginBottom: designSystem.layout.spacing.md 
              }} />
              <DSHeading3 style={{ color: 'white', fontSize: '1.3rem' }}>Guidelines</DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                fontSize: '0.95rem',
                marginBottom: designSystem.layout.spacing.md,
                lineHeight: '1.5',
              }}>
                Content design and implementation patterns
              </DSParagraph>
            </div>
            <DSButton href="/guidelines" variant="secondary" style={{
              background: 'rgba(255, 255, 255, 0.2)',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              color: 'white',
              backdropFilter: 'blur(10px)',
            }}>
              Read Guidelines <ArrowRight style={{ marginLeft: designSystem.layout.spacing.sm, width: '16px', height: '16px' }} />
            </DSButton>
          </DSCard>
        </div>
      </section>

      {/* Quick Start */}
      <section style={{
        ...containerStyle,
        background: 'white',
        marginTop: '-40px',
        borderRadius: designSystem.borderRadius.cards,
        boxShadow: designSystem.elevation.level3,
        position: 'relative',
        zIndex: 2,
      }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
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
            🚀 Quick Start
          </DSHeading2>
          
          <div style={{
            background: 'linear-gradient(135deg, #667eea, #764ba2)',
            borderRadius: designSystem.borderRadius.cards,
            padding: designSystem.layout.spacing.lg,
            color: 'white',
            marginBottom: designSystem.layout.spacing.lg,
          }}>
            <DSHeading3 style={{
              color: 'white',
              marginBottom: designSystem.layout.spacing.md,
              fontSize: '1.5rem',
            }}>
              🎨 Installation
            </DSHeading3>
            <DSParagraph style={{
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: designSystem.layout.spacing.lg,
              fontSize: '1.1rem',
              lineHeight: '1.6',
            }}>
              Get started with Virtual Labs Design System in your project
            </DSParagraph>
            
            <div style={{
              background: 'rgba(0, 0, 0, 0.3)',
              padding: designSystem.layout.spacing.lg,
              borderRadius: designSystem.borderRadius.components,
              marginBottom: designSystem.layout.spacing.lg,
              backdropFilter: 'blur(10px)',
            }}>
              <pre style={{
                fontFamily: designSystem.typography.fontFamily.mono,
                fontSize: '1rem',
                color: '#4ade80',
                margin: 0,
                whiteSpace: 'pre-wrap',
                lineHeight: '1.5',
              }}>
{`pnpm install @virtual-labs/design-system

# or with yarn
yarn add @virtual-labs/design-system`}
              </pre>
            </div>
            
            <div style={{
              display: 'flex',
              gap: designSystem.layout.spacing.md,
              flexWrap: 'wrap',
            }}>
              <DSButton href="/foundations" variant="secondary" style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                backdropFilter: 'blur(10px)',
              }}>
                📚 View Documentation
              </DSButton>
              <DSButton href="/components" variant="secondary" style={{
                background: 'rgba(255, 255, 255, 0.2)',
                border: '1px solid rgba(255, 255, 255, 0.3)',
                color: 'white',
                backdropFilter: 'blur(10px)',
              }}>
                🧩 Browse Components
              </DSButton>
            </div>
          </div>
          
          <DSParagraph style={{
            textAlign: 'center',
            color: designSystem.colors.neutral.medium,
            fontSize: '1rem',
            margin: 0,
            fontStyle: 'italic',
          }}>
            ✨ Or copy and paste components directly from our documentation
          </DSParagraph>
        </div>
      </section>
    </div>
  )
}
