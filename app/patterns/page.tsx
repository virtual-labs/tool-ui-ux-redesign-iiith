'use client';

import { FlaskConical, BarChart3, Workflow, Database, Monitor, Users } from "lucide-react"
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
            🧬 Design Patterns
          </DSBadge>
          <h1 style={mainHeadingStyle}>Patterns</h1>
          <p style={subtitleStyle}>
            Common design patterns and templates for Virtual Labs experiences. These patterns combine multiple
            components to solve specific use cases.
          </p>
        </div>

        {/* Pattern Categories */}
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
            🧬 Laboratory Patterns
          </DSHeading2>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))',
            gap: designSystem.layout.spacing.lg,
          }}>
            {patterns.map((pattern) => (
              <DSCard key={pattern.href} interactive style={{
                background: pattern.gradient,
                color: 'white',
                border: 'none',
                cursor: 'pointer',
              }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: designSystem.layout.spacing.md }}>
                  <pattern.icon style={{ width: '32px', height: '32px', color: 'white' }} />
                  <DSBadge style={{
                    background: pattern.status === "Alpha" ? 'rgba(239, 68, 68, 0.3)' : pattern.status === "Beta" ? 'rgba(255, 255, 255, 0.3)' : 'rgba(255, 255, 255, 0.2)',
                    color: 'white',
                    border: '1px solid rgba(255, 255, 255, 0.3)',
                    fontSize: '0.8rem',
                  }}>
                    {pattern.status}
                  </DSBadge>
                </div>
                <DSHeading3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: designSystem.layout.spacing.sm }}>
                  {pattern.title}
                </DSHeading3>
                <DSParagraph style={{
                  color: 'rgba(255, 255, 255, 0.9)',
                  fontSize: '0.95rem',
                  marginBottom: designSystem.layout.spacing.md,
                  lineHeight: '1.5',
                }}>
                  {pattern.description}
                </DSParagraph>
                <div style={{ marginBottom: designSystem.layout.spacing.sm }}>
                  <div style={{ fontSize: '0.9rem', fontWeight: 'bold', marginBottom: designSystem.layout.spacing.xs }}>Examples:</div>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: designSystem.layout.spacing.xs }}>
                    {pattern.examples.map((example) => (
                      <DSBadge key={example} style={{
                        background: 'rgba(255, 255, 255, 0.2)',
                        color: 'white',
                        border: '1px solid rgba(255, 255, 255, 0.3)',
                        fontSize: '0.75rem',
                        padding: `${designSystem.layout.spacing.xs} ${designSystem.layout.spacing.sm}`,
                      }}>
                        {example}
                      </DSBadge>
                    ))}
                  </div>
                </div>
              </DSCard>
            ))}
          </div>
        </div>

        {/* Pattern Philosophy */}
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
            🎯 Pattern Philosophy
          </DSHeading2>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: designSystem.layout.spacing.lg,
            marginBottom: designSystem.layout.spacing.xl,
          }}>
            <DSCard style={{
              background: 'linear-gradient(135deg, #667eea, #764ba2)',
              color: 'white',
              border: 'none',
            }}>
              <DSHeading3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: designSystem.layout.spacing.md }}>
                🔬 Scientific Accuracy
              </DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.6',
              }}>
                Patterns reflect real laboratory workflows and scientific methodologies to provide authentic learning
                experiences.
              </DSParagraph>
            </DSCard>

            <DSCard style={{
              background: 'linear-gradient(135deg, #10b981, #48bb78)',
              color: 'white',
              border: 'none',
            }}>
              <DSHeading3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: designSystem.layout.spacing.md }}>
                📊 Progressive Disclosure
              </DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.6',
              }}>
                Complex information is revealed progressively to avoid overwhelming users while maintaining access to
                detailed data.
              </DSParagraph>
            </DSCard>

            <DSCard style={{
              background: 'linear-gradient(135deg, #f59e0b, #ed8936)',
              color: 'white',
              border: 'none',
            }}>
              <DSHeading3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: designSystem.layout.spacing.md }}>
                ⚠️ Error Prevention
              </DSHeading3>
              <DSParagraph style={{
                color: 'rgba(255, 255, 255, 0.9)',
                lineHeight: '1.6',
              }}>
                Patterns include safeguards and validation to prevent common errors in laboratory procedures.
              </DSParagraph>
            </DSCard>
          </div>

          <DSCard style={{
            background: 'linear-gradient(135deg, #8b5cf6, #a855f7)',
            color: 'white',
            border: 'none',
          }}>
            <DSHeading3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: designSystem.layout.spacing.md }}>
              🚀 Using Patterns
            </DSHeading3>
            <DSParagraph style={{
              color: 'rgba(255, 255, 255, 0.9)',
              marginBottom: designSystem.layout.spacing.lg,
              lineHeight: '1.6',
            }}>
              How to implement and customize patterns in your Virtual Labs
            </DSParagraph>
            
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
              gap: designSystem.layout.spacing.lg,
            }}>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>1. Choose the Right Pattern</div>
                <div style={{ opacity: 0.9, fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Select patterns based on your specific laboratory type and user needs. Consider the complexity of
                  procedures and data involved.
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>2. Customize for Your Context</div>
                <div style={{ opacity: 0.9, fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Adapt patterns to match your specific equipment, procedures, and educational objectives while
                  maintaining core usability principles.
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>3. Test with Users</div>
                <div style={{ opacity: 0.9, fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Validate patterns with actual students and instructors to ensure they support effective learning and
                  teaching.
                </div>
              </div>
              <div>
                <div style={{ fontWeight: 'bold', marginBottom: designSystem.layout.spacing.sm }}>4. Iterate and Improve</div>
                <div style={{ opacity: 0.9, fontSize: '0.9rem', lineHeight: '1.5' }}>
                  Continuously refine patterns based on user feedback and learning outcomes data.
                </div>
              </div>
            </div>
          </DSCard>
        </div>
      </div>
    </div>
  )
}
