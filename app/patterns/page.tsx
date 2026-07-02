'use client';

import { FlaskConical, BarChart3, Workflow, Database, Monitor, Users, ArrowRight } from "lucide-react"
import Link from "next/link"
import { designSystem } from "@/lib/design-system"
import { DSButton, DSCard, DSBadge, DSHeading1, DSHeading2, DSHeading3, DSParagraph, DSCode } from "@/components/design-system"

export default function PatternsPage() {
  const patterns = [
    {
      title: "Lab Interface",
      description: "Complete laboratory interface patterns with controls, monitoring, and data display",
      icon: FlaskConical,
      href: "/patterns/lab-interface",
      status: "Stable",
      examples: ["Chemistry Lab", "Physics Simulator", "Biology Microscope"],
      gradient: "linear-gradient(135deg, #3182ce, #4299e1)",
    },
    {
      title: "Data Visualization",
      description: "Charts, graphs, and scientific data presentation patterns",
      icon: BarChart3,
      href: "/patterns/data-visualization",
      status: "Stable",
      examples: ["Real-time Graphs", "Statistical Charts", "3D Visualizations"],
      gradient: "linear-gradient(135deg, #10b981, #48bb78)",
    },
    {
      title: "Experiment Flow",
      description: "Step-by-step experiment workflows and progress tracking",
      icon: Workflow,
      href: "/patterns/experiment-flow",
      status: "Beta",
      examples: ["Multi-step Procedures", "Progress Tracking", "Result Analysis"],
      gradient: "linear-gradient(135deg, #8b5cf6, #a855f7)",
    },
    {
      title: "Data Collection",
      description: "Forms and interfaces for collecting experimental data",
      icon: Database,
      href: "/patterns/data-collection",
      status: "Stable",
      examples: ["Measurement Forms", "Observation Logs", "Parameter Input"],
      gradient: "linear-gradient(135deg, #f59e0b, #ed8936)",
    },
    {
      title: "Monitoring Dashboard",
      description: "Real-time monitoring and control dashboards for lab equipment",
      icon: Monitor,
      href: "/patterns/monitoring-dashboard",
      status: "Beta",
      examples: ["Equipment Status", "Sensor Readings", "Alert Systems"],
      gradient: "linear-gradient(135deg, #ef4444, #f87171)",
    },
    {
      title: "Collaborative Lab",
      description: "Multi-user collaboration patterns for shared experiments",
      icon: Users,
      href: "/patterns/collaborative-lab",
      status: "Alpha",
      examples: ["Shared Workspaces", "Real-time Sync", "Role Management"],
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
            <FlaskConical style={{ width: '14px', height: '14px', color: '#1d4ed8' }} />
            <span>Design Blueprints</span>
          </div>
          <h1 style={mainHeadingStyle}>
            Layout <span style={highlightText}>Patterns</span>
          </h1>
          <p style={subtitleStyle}>
            Common design patterns and templates for Virtual Labs experiences. These patterns combine multiple components to solve specific use cases.
          </p>
        </div>

        {/* Grid of Patterns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '24px',
          marginBottom: '60px',
        }}>
          {patterns.map((pattern, index) => {
            const iconColor = index % 2 === 0 ? '#1d4ed8' : '#3b82f6';
            const iconBg = index % 2 === 0 ? '#eff6ff' : '#f0fdf4';

            return (
              <Link key={pattern.href} href={pattern.href} style={{ textDecoration: 'none', color: 'inherit' }}>
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
                        <pattern.icon style={{ width: '22px', height: '22px', color: iconColor }} />
                      </div>
                      <DSBadge style={{
                        background: pattern.status === "Alpha" ? '#ef4444' : pattern.status === "Beta" ? '#f59e0b' : '#10b981',
                        color: 'white',
                        border: 'none',
                        fontSize: '0.75rem',
                        fontWeight: 600,
                      }}>
                        {pattern.status}
                      </DSBadge>
                    </div>
                    <h3 style={{ color: '#0f172a', fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
                      {pattern.title}
                    </h3>
                    <p style={{
                      color: '#475569',
                      fontSize: '0.9rem',
                      marginBottom: '16px',
                      lineHeight: '1.5',
                    }}>
                      {pattern.description}
                    </p>
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                      {pattern.examples.slice(0, 2).map((example) => (
                        <span key={example} style={{
                          background: '#f1f5f9',
                          color: '#475569',
                          fontSize: '0.75rem',
                          padding: '4px 10px',
                          borderRadius: '6px',
                          border: '1px solid #e2e8f0',
                        }}>
                          {example}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#1d4ed8', fontWeight: 600, fontSize: '0.9rem', gap: '4px', marginTop: '24px' }}>
                    View pattern blueprints <ArrowRight style={{ width: '16px', height: '16px', marginLeft: '4px' }} />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Philosophy Section */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>
              Pattern Philosophy
            </h2>
            <p style={{ color: '#475569', fontSize: '0.95rem', maxWidth: '600px', margin: '8px auto 0' }}>
              Core principles guiding how complex laboratory processes are organized in our frontend layouts.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '24px',
            marginBottom: '40px',
          }}>
            {[
              { title: '🔬 Scientific Accuracy', desc: 'Layouts are structurally matched to real titration, division, and pendulum mechanics to mirror physical learning environments.' },
              { title: '📊 Progressive Disclosure', desc: 'Complex calculations, configurations, and graphs are disclosed incrementally to prevent cognitive load in student dashboards.' },
              { title: '⚠️ Safeguarded Boundaries', desc: 'Built-in validations, color codes, and sensor warnings instantly catch errors in titration flows or heat equations.' },
            ].map((p, idx) => (
              <div key={idx} style={{
                border: '1px solid #e2e8f0',
                borderRadius: '16px',
                padding: '24px',
                background: '#f8fafc',
              }}>
                <h3 style={{ fontSize: '1.15rem', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>{p.title}</h3>
                <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.5', margin: 0 }}>{p.desc}</p>
              </div>
            ))}
          </div>

          <div style={{
            borderTop: '1px solid #e2e8f0',
            paddingTop: '32px',
          }}>
            <h3 style={{ fontSize: '1.25rem', fontWeight: 700, marginBottom: '16px', color: '#0f172a' }}>
              🚀 Implementing Layout Blueprints
            </h3>
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
              gap: '24px',
            }}>
              {[
                { step: '1. Layout Type', text: 'Select sidebar control panels vs observations panel based on experiment layout preferences.' },
                { step: '2. Custom Controls', text: 'Define the ranges for heat simulation coefficients and calibration factors.' },
                { step: '3. Test Scenarios', text: 'Always run client tests under 768px and 1200px breakpoints to confirm responsiveness.' },
              ].map((s, idx) => (
                <div key={idx}>
                  <div style={{ fontWeight: 700, color: '#1d4ed8', fontSize: '0.95rem', marginBottom: '4px' }}>{s.step}</div>
                  <div style={{ color: '#475569', fontSize: '0.875rem', lineHeight: '1.5' }}>{s.text}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
