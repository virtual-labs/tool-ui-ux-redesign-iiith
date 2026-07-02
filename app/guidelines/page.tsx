'use client'

import React from 'react'
import { PenTool, Accessibility, Code, Users, BookOpen, Shield, ArrowRight } from "lucide-react"
import Link from 'next/link'
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
      gradient: "linear-gradient(135deg, #1d4ed8, #3b82f6)",
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
            <PenTool style={{ width: '14px', height: '14px', color: '#1d4ed8' }} />
            <span>Product Principles</span>
          </div>
          <h1 style={mainHeadingStyle}>
            Design <span style={highlightText}>Guidelines</span>
          </h1>
          <p style={subtitleStyle}>
            Comprehensive guidelines for creating effective, accessible, and educational Virtual Labs experiences.
          </p>
        </div>

        {/* Guidelines Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          marginBottom: '60px',
        }}>
          {guidelines.map((guideline, index) => {
            const iconColor = index % 2 === 0 ? '#1d4ed8' : '#3b82f6';
            const iconBg = index % 2 === 0 ? '#eff6ff' : '#f0fdf4';

            return (
              <Link key={guideline.href} href={guideline.href} style={{ textDecoration: 'none', color: 'inherit' }}>
                <div style={featureCardStyle}>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                      <div style={{
                        width: '48px',
                        height: '48px',
                        borderRadius: '12px',
                        background: iconBg,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}>
                        <guideline.icon style={{ width: '22px', height: '22px', color: iconColor }} />
                      </div>
                      <span style={{ fontSize: '0.8rem', color: '#64748b', fontWeight: 600 }}>
                        {guideline.topics.length} topics
                      </span>
                    </div>
                    <h3 style={{ color: '#0f172a', fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
                      {guideline.title}
                    </h3>
                    <p style={{
                      color: '#475569',
                      fontSize: '0.9rem',
                      marginBottom: '16px',
                      lineHeight: '1.5',
                    }}>
                      {guideline.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {guideline.topics.slice(0, 3).map((topic) => (
                        <span key={topic} style={{
                          background: '#f1f5f9',
                          color: '#475569',
                          fontSize: '0.75rem',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          border: '1px solid #e2e8f0',
                        }}>
                          {topic}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#1d4ed8', fontWeight: 600, fontSize: '0.9rem', gap: '4px', marginTop: '24px' }}>
                    Read principles <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '4px' }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Core Principles */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
          marginBottom: '60px',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>
              Core Principles
            </h2>
            <p style={{ color: '#475569', fontSize: '0.95rem', maxWidth: '600px', margin: '8px auto 0' }}>
              Our design ethos places the student at the center of every layout, action, and color feedback.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}>
            {[
              {
                title: '🎓 Education-First Design',
                desc: 'Every layout decision supports learning objectives. Support both guided walkthroughs and deep exploratory sandboxes.',
                list: ['Prioritize learning goals over raw aesthetic trends', 'Structure templates for diverse learning levels', 'Include scaffolding support']
              },
              {
                title: '♿ Universal Access',
                desc: 'Experiences must remain accessible regardless of device size, speed, or user accessibility constraints.',
                list: ['Strict compliance with WCAG 2.1 AA', 'Robust keyboard navigation support', 'High color contrasts on all state badges']
              },
              {
                title: '🔬 Scientific Rigor',
                desc: 'Maintain high fidelity in simulations. Reagents, temperatures, and charts must accurately reflect physics equations.',
                list: ['Formulate math formulas cleanly', 'Leverage exact unit suffixes', 'Reflect real-world titration curves']
              },
              {
                title: '🚀 Progressive Enhancement',
                desc: 'Create components that run beautifully on default setups before layering animations.',
                list: ['Keep core logic responsive', 'Layer micro-interactions safely', 'Validate speed on standard connections']
              }
            ].map((p, idx) => (
              <div key={idx} style={{
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '28px',
                background: '#f8fafc',
              }}>
                <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: '#0f172a' }}>
                  {p.title}
                </h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '16px' }}>
                  {p.desc}
                </p>
                <ul style={{ paddingLeft: '20px', margin: 0, color: '#64748b', fontSize: '0.85rem', lineHeight: '1.6' }}>
                  {p.list.map((li, i) => <li key={i}>{li}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Checklist */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
        }}>
          <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '24px', color: '#0f172a' }}>
            ✅ Implementation Checklist
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: '24px',
          }}>
            {[
              { phase: '📋 Planning', points: ['Establish learning goals', 'Identify target audience', 'Collect layout content'] },
              { phase: '🎨 Design', points: ['Apply DSComponent styles', 'Draft titration/division states', 'Check contrast states'] },
              { phase: '💻 Development', points: ['Incorporate unit suffixes', 'Validate responsive grids', 'Confirm Fast Refresh build'] },
              { phase: '🔍 Testing', points: ['Usability study runs', 'Educational compliance checks', 'A11y validator checks'] },
            ].map((c, idx) => (
              <div key={idx}>
                <div style={{ fontWeight: 700, color: '#1d4ed8', fontSize: '1rem', marginBottom: '12px' }}>{c.phase}</div>
                <ul style={{ paddingLeft: '16px', margin: 0, color: '#475569', fontSize: '0.875rem', lineHeight: '1.6' }}>
                  {c.points.map((pt, i) => <li key={i}>{pt}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}
