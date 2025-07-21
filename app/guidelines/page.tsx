'use client'

import React from 'react'
import { PenTool, Accessibility, Code, Users, BookOpen, Shield } from "lucide-react"
import { designSystem } from "@/lib/design-system"
import { DSButton, DSCard, DSBadge, DSHeading2, DSHeading3, DSParagraph } from "@/components/design-system"

export default function GuidelinesPage() {
  const guidelines = [
    {
      title: "Content Design",
      description: "Writing guidelines, voice, tone, and content strategy for Virtual Labs",
      icon: PenTool,
      href: "/guidelines/content",
      topics: ["Writing Style", "Scientific Language", "Error Messages", "Help Text"],
      gradient: "linear-gradient(135deg, #3182ce, #4299e1)",
    },
    {
      title: "Accessibility",
      description: "Creating inclusive experiences for all users in educational contexts",
      icon: Accessibility,
      href: "/guidelines/accessibility",
      topics: ["WCAG Compliance", "Screen Readers", "Keyboard Navigation", "Color Contrast"],
      gradient: "linear-gradient(135deg, #10b981, #48bb78)",
    },
    {
      title: "Implementation",
      description: "Technical guidelines for implementing the design system",
      icon: Code,
      href: "/guidelines/implementation",
      topics: ["Code Standards", "Performance", "Browser Support", "Testing"],
      gradient: "linear-gradient(135deg, #8b5cf6, #a855f7)",
    },
    {
      title: "User Research",
      description: "Guidelines for conducting research in educational technology contexts",
      icon: Users,
      href: "/guidelines/research",
      topics: ["Student Testing", "Instructor Feedback", "Learning Analytics", "Usability Studies"],
      gradient: "linear-gradient(135deg, #f59e0b, #ed8936)",
    },
    {
      title: "Educational Design",
      description: "Pedagogical principles for effective virtual laboratory experiences",
      icon: BookOpen,
      href: "/guidelines/educational",
      topics: ["Learning Objectives", "Scaffolding", "Assessment", "Feedback Loops"],
      gradient: "linear-gradient(135deg, #ef4444, #f87171)",
    },
    {
      title: "Safety & Ethics",
      description: "Guidelines for safe and ethical virtual laboratory design",
      icon: Shield,
      href: "/guidelines/safety",
      topics: ["Data Privacy", "Safety Protocols", "Ethical Considerations", "Compliance"],
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
    maxWidth: '700px',
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
            📋 Design Guidelines
          </DSBadge>
          <h1 style={mainHeadingStyle}>Guidelines</h1>
          <p style={subtitleStyle}>
            Comprehensive guidelines for creating effective, accessible, and educational Virtual Labs experiences.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div style={{
          background: 'rgba(255, 255, 255, 0.95)',
          backdropFilter: 'blur(20px)',
          borderRadius: designSystem.borderRadius.cards,
          padding: designSystem.layout.spacing.xl,
          marginBottom: designSystem.layout.spacing.xl,
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
            📚 Design Guidelines
          </DSHeading2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: designSystem.layout.spacing.lg,
          }}>
            {guidelines.map((guideline) => (
              <DSCard key={guideline.href} interactive style={{
                background: guideline.gradient,
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}>
                <guideline.icon style={{ width: '32px', height: '32px', color: 'white', marginBottom: designSystem.layout.spacing.md }} />
                <DSHeading3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: designSystem.layout.spacing.sm }}>
                  {guideline.title}
                </DSHeading3>
                <DSParagraph style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.95rem',
                  marginBottom: designSystem.layout.spacing.md,
                  lineHeight: '1.5',
                }}>
                  {guideline.description}
                </DSParagraph>
                <div style={{ marginBottom: designSystem.layout.spacing.sm }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: designSystem.layout.spacing.xs }}>Key Topics:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: designSystem.layout.spacing.xs }}>
                    {guideline.topics.map((topic) => (
                      <DSBadge key={topic} style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        fontSize: '0.75rem',
                        padding: `${designSystem.layout.spacing.xs} ${designSystem.layout.spacing.sm}`,
                      }}>
                        {topic}
                      </DSBadge>
                    ))}
                  </div>
                </div>
              </DSCard>
            ))}
          </div>
        </div>

        {/* Core Principles */}
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
            🎯 Core Principles
          </DSHeading2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
            gap: designSystem.layout.spacing.lg,
            marginBottom: designSystem.layout.spacing.xl,
          }}>
            <DSCard style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
            }}>
              <DSHeading3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: designSystem.layout.spacing.md }}>
                🎓 Education-First Design
              </DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.6',
                marginBottom: designSystem.layout.spacing.md,
              }}>
                Every design decision should support learning objectives and enhance the educational experience.
              </DSParagraph>
              <ul style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                paddingLeft: designSystem.layout.spacing.md,
              }}>
                <li>Prioritize learning goals over aesthetic preferences</li>
                <li>Design for different learning styles and abilities</li>
                <li>Support both guided and exploratory learning</li>
              </ul>
            </DSCard>

            <DSCard style={{
              background: 'linear-gradient(135deg, #10b981, #48bb78)',
              color: 'white',
              border: 'none',
            }}>
              <DSHeading3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: designSystem.layout.spacing.md }}>
                ♿ Universal Access
              </DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.6',
                marginBottom: designSystem.layout.spacing.md,
              }}>
                Design experiences that are accessible to users with diverse abilities and technical setups.
              </DSParagraph>
              <ul style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                paddingLeft: designSystem.layout.spacing.md,
              }}>
                <li>Meet WCAG 2.1 AA standards</li>
                <li>Support keyboard navigation</li>
                <li>Provide alternative text and descriptions</li>
              </ul>
            </DSCard>

            <DSCard style={{
              background: 'linear-gradient(135deg, #f59e0b, #ed8936)',
              color: 'white',
              border: 'none',
            }}>
              <DSHeading3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: designSystem.layout.spacing.md }}>
                🔬 Scientific Rigor
              </DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.6',
                marginBottom: designSystem.layout.spacing.md,
              }}>
                Maintain accuracy and authenticity in representing scientific concepts and procedures.
              </DSParagraph>
              <ul style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                paddingLeft: designSystem.layout.spacing.md,
              }}>
                <li>Validate content with subject matter experts</li>
                <li>Use appropriate scientific terminology</li>
                <li>Represent real-world constraints accurately</li>
              </ul>
            </DSCard>

            <DSCard style={{
              background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
              color: 'white',
              border: 'none',
            }}>
              <DSHeading3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: designSystem.layout.spacing.md }}>
                🚀 Progressive Enhancement
              </DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.6',
                marginBottom: designSystem.layout.spacing.md,
              }}>
                Build core functionality that works everywhere, then enhance for capable devices.
              </DSParagraph>
              <ul style={{
                color: 'rgba(255, 255, 255, 0.8)',
                fontSize: '0.9rem',
                lineHeight: '1.5',
                paddingLeft: designSystem.layout.spacing.md,
              }}>
                <li>Start with basic HTML and CSS</li>
                <li>Layer on JavaScript enhancements</li>
                <li>Optimize for various connection speeds</li>
              </ul>
            </DSCard>
          </div>

          {/* Implementation Checklist */}
          <DSCard style={{
            background: 'linear-gradient(135deg, #ef4444, #f87171)',
            color: 'white',
            border: 'none',
          }}>
            <DSHeading3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: designSystem.layout.spacing.md }}>
              ✅ Implementation Checklist
            </DSHeading3>
            <DSParagraph style={{
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: designSystem.layout.spacing.lg,
              lineHeight: '1.6',
            }}>
              Essential steps for implementing guidelines in your Virtual Labs project
            </DSParagraph>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
              gap: designSystem.layout.spacing.lg,
            }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>📋 Planning Phase</div>
                <ul style={{ opacity: 0.9, fontSize: '0.9rem', lineHeight: '1.5', paddingLeft: designSystem.layout.spacing.md }}>
                  <li>Define learning objectives</li>
                  <li>Identify target users and contexts</li>
                  <li>Establish content requirements</li>
                  <li>Plan accessibility features</li>
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>🎨 Design Phase</div>
                <ul style={{ opacity: 0.9, fontSize: '0.9rem', lineHeight: '1.5', paddingLeft: designSystem.layout.spacing.md }}>
                  <li>Apply design system components</li>
                  <li>Create user flow diagrams</li>
                  <li>Design responsive layouts</li>
                  <li>Plan content hierarchy</li>
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>💻 Development Phase</div>
                <ul style={{ opacity: 0.9, fontSize: '0.9rem', lineHeight: '1.5', paddingLeft: designSystem.layout.spacing.md }}>
                  <li>Follow coding standards</li>
                  <li>Implement accessibility features</li>
                  <li>Optimize performance</li>
                  <li>Test across devices</li>
                </ul>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>🔍 Testing Phase</div>
                <ul style={{ opacity: 0.9, fontSize: '0.9rem', lineHeight: '1.5', paddingLeft: designSystem.layout.spacing.md }}>
                  <li>Conduct usability testing</li>
                  <li>Validate with educators</li>
                  <li>Test accessibility compliance</li>
                  <li>Gather user feedback</li>
                </ul>
              </div>
            </div>
          </DSCard>
        </div>
      </div>
    </div>
  )
}
