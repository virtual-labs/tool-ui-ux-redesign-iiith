'use client';

import { useState } from "react"
import { MousePointer, Square, Navigation, BarChart3, MessageSquare, Layout, ArrowRight } from "lucide-react"
import Link from "next/link"
import { designSystem } from "@/lib/design-system"
import { DSButton, DSCard, DSBadge, DSHeading1, DSHeading2, DSHeading3, DSParagraph, DSCode, DSInput } from "@/components/design-system"

export default function ComponentsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "Stable" | "Beta">("All");

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

  const filteredCategories = componentCategories.filter(category => {
    const matchesSearch = category.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      category.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = statusFilter === "All" || category.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

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
    minHeight: '220px',
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
            <MousePointer style={{ width: '14px', height: '14px', color: '#1d4ed8' }} />
            <span>Interactive UI Elements</span>
          </div>
          <h1 style={mainHeadingStyle}>
            Browse <span style={highlightText}>Components</span>
          </h1>
          <p style={subtitleStyle}>
            Reusable, accessible, and high-performance UI blocks for virtual laboratories and experiments.
          </p>
        </div>

        {/* Stats Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '16px',
          marginBottom: '60px',
        }}>
          {[
            { value: '48', label: 'Components', bg: '#eff6ff', border: '#bfdbfe', color: '#1d4ed8' },
            { value: '42', label: 'Stable', bg: '#f0fdf4', border: '#bbf7d0', color: '#16a34a' },
            { value: '6', label: 'Beta', bg: '#fffbeb', border: '#fde68a', color: '#d97706' },
            { value: '100%', label: 'Accessible', bg: '#faf5ff', border: '#e9d5ff', color: '#9333ea' },
          ].map((stat, i) => (
            <div key={i} style={{
              background: stat.bg,
              border: `1px solid ${stat.border}`,
              borderRadius: '16px',
              padding: '24px',
              textAlign: 'center',
              boxShadow: '0 4px 12px rgba(0, 0, 0, 0.01)',
            }}>
              <div style={{ fontSize: '2.5rem', fontWeight: 800, color: stat.color, marginBottom: '4px' }}>{stat.value}</div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#475569' }}>{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Filter and Search Section */}
        <div style={{
          display: 'flex',
          flexDirection: 'row',
          gap: '16px',
          marginBottom: '40px',
          justifyContent: 'center',
          alignItems: 'center',
          flexWrap: 'wrap',
          maxWidth: '700px',
          margin: '0 auto 40px',
        }}>
          <DSInput 
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            containerStyle={{ flex: 1, minWidth: '280px' }}
          />
          <div style={{ display: 'flex', gap: '8px' }}>
            {(["All", "Stable", "Beta"] as const).map((status) => (
              <button
                key={status}
                onClick={() => setStatusFilter(status)}
                style={{
                  padding: '10px 20px',
                  borderRadius: '8px',
                  border: '1px solid #cbd5e1',
                  backgroundColor: statusFilter === status ? '#1d4ed8' : '#ffffff',
                  color: statusFilter === status ? '#ffffff' : '#0f172a',
                  cursor: 'pointer',
                  fontWeight: 600,
                  fontSize: '0.875rem',
                  transition: 'all 0.2s ease',
                  boxShadow: '0 2px 4px rgba(0, 0, 0, 0.02)',
                }}
              >
                {status}
              </button>
            ))}
          </div>
        </div>

        {/* Component Categories Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '24px',
          marginBottom: '80px',
        }}>
          {filteredCategories.map((category) => (
            <Link key={category.href} href={category.href} style={{ textDecoration: 'none', display: 'block' }}>
              <div style={featureCardStyle}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{
                      width: '44px',
                      height: '44px',
                      borderRadius: '10px',
                      background: '#eff6ff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                    }}>
                      <category.icon style={{ width: '22px', height: '22px', color: '#1d4ed8' }} />
                    </div>
                    <DSBadge style={{
                      background: category.status === "Beta" ? '#f59e0b' : '#10b981',
                      color: '#ffffff',
                      border: 'none',
                      fontSize: '0.75rem',
                      fontWeight: 600,
                    }}>
                      {category.status}
                    </DSBadge>
                  </div>
                  <h3 style={{ color: '#0f172a', fontSize: '1.25rem', fontWeight: 700, marginBottom: '8px' }}>
                    {category.title}
                  </h3>
                  <p style={{
                    color: '#475569',
                    fontSize: '0.9rem',
                    marginBottom: '0',
                    lineHeight: '1.5',
                  }}>
                    {category.description}
                  </p>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '24px' }}>
                  <span style={{ fontSize: '0.85rem', color: '#64748b', fontWeight: 500 }}>{category.count} components</span>
                  <div style={{ display: 'flex', alignItems: 'center', color: '#1d4ed8', fontWeight: 600, fontSize: '0.9rem', gap: '4px' }}>
                    View docs <ArrowRight style={{ width: '16px', height: '16px' }} />
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Getting Started Guide */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
        }}>
          <div style={{ textAlign: 'center', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.01em' }}>
              Getting Started
            </h2>
            <p style={{ color: '#475569', fontSize: '0.95rem', maxWidth: '600px', margin: '8px auto 0' }}>
              Add components to your frontend repository and build robust scientific UI steps.
            </p>
          </div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '24px',
            marginBottom: '24px',
          }}>
            <div style={{
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '28px',
              background: '#f8fafc',
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: '#0f172a' }}>
                📦 Installation
              </h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '16px' }}>
                Add core UI package to your project:
              </p>
              <div style={{
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                padding: '12px 16px',
                borderRadius: '8px',
                fontFamily: designSystem.typography.fontFamily.mono,
                fontSize: '0.85rem',
                color: '#0f172a',
              }}>
                pnpm install @virtual-labs/ui
              </div>
            </div>

            <div style={{
              border: '1px solid #e2e8f0',
              borderRadius: '16px',
              padding: '28px',
              background: '#f8fafc',
            }}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '12px', color: '#0f172a' }}>
                🧩 Usage
              </h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '16px' }}>
                Import components and start building immediately:
              </p>
              <div style={{
                background: '#ffffff',
                border: '1px solid #cbd5e1',
                padding: '12px 16px',
                borderRadius: '8px',
                fontFamily: designSystem.typography.fontFamily.mono,
                fontSize: '0.8rem',
                color: '#0f172a',
                lineHeight: '1.4',
              }}>
{`import { DSButton } from '@virtual-labs/ui';

<DSButton variant="primary">
  Run Simulation
</DSButton>`}
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  )
}
