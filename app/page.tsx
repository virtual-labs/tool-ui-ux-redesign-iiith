'use client';

import React, { useState } from "react";
import { ArrowRight, Palette, Code, Layers, Sparkles, Beaker, Check, Activity } from "lucide-react";
import Link from "next/link";
import { designSystem } from "@/lib/design-system";
import { DSButton, DSCard, DSBadge, DSHeading2, DSHeading3, DSParagraph, DSInput } from "@/components/design-system";

export default function HomePage() {
  const [demoLoading, setDemoLoading] = useState(false);
  const [demoInput, setDemoInput] = useState("25");

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
    fontSize: '4.25rem',
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
  };

  return (
    <div style={pageStyle}>
      {/* Header Grid */}
      <div style={containerStyle}>
        
        {/* Hero Copy */}
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <div style={heroBadgeStyle}>
            <Sparkles style={{ width: '14px', height: '14px', color: '#1d4ed8' }} />
            <span>Virtual Labs Redesign v2.1</span>
          </div>
          <h1 style={mainHeadingStyle}>
            The Science of <span style={highlightText}>Clean Interface</span>
          </h1>
          <p style={subtitleStyle}>
            An editorial, highly readable design system for chemistry, physics, and biology simulations. Designed to maximize readability and usability for students.
          </p>

          <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <DSButton href="/components" variant="primary" style={{ padding: '12px 24px', fontSize: '0.95rem', borderRadius: '10px', fontWeight: 600, backgroundColor: '#1d4ed8' }}>
              Explore Components <ArrowRight style={{ marginLeft: '8px', width: '16px', height: '16px' }} />
            </DSButton>
            <DSButton href="/foundations" variant="secondary" style={{
              padding: '12px 24px',
              fontSize: '0.95rem',
              borderRadius: '10px',
              fontWeight: 600,
              backgroundColor: '#ffffff',
              border: '1px solid #cbd5e1',
              color: '#0f172a'
            }}>
              View Foundations
            </DSButton>
          </div>
        </div>

        {/* Key Pillars Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '24px',
          marginBottom: '80px'
        }}>
          {/* Foundations Card */}
          <div style={featureCardStyle}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#eff6ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <Palette style={{ color: '#1d4ed8', width: '22px', height: '22px' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>Visual Foundations</h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>
                Centralized CSS color variables, structured typography scales, padding metrics, and clean card shadows.
              </p>
            </div>
            <Link href="/foundations" style={{ display: 'inline-flex', alignItems: 'center', color: '#1d4ed8', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', gap: '4px' }}>
              Explore foundations <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>

          {/* Components Card */}
          <div style={featureCardStyle}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#f0fdf4',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <Code style={{ color: '#16a34a', width: '22px', height: '22px' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>UI Components</h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>
                Loaders, unit suffixes fields, stepper timelines, dialog boxes, alert banners, and interactive buttons.
              </p>
            </div>
            <Link href="/components" style={{ display: 'inline-flex', alignItems: 'center', color: '#16a34a', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', gap: '4px' }}>
              Browse components <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>

          {/* Patterns Card */}
          <div style={featureCardStyle}>
            <div>
              <div style={{
                width: '48px',
                height: '48px',
                borderRadius: '12px',
                backgroundColor: '#faf5ff',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '20px',
              }}>
                <Layers style={{ color: '#9333ea', width: '22px', height: '22px' }} />
              </div>
              <h3 style={{ fontSize: '1.2rem', fontWeight: 700, marginBottom: '8px', color: '#0f172a' }}>Layout Patterns</h3>
              <p style={{ color: '#475569', fontSize: '0.9rem', lineHeight: '1.5', marginBottom: '20px' }}>
                Modular columns, charting tools, and live search indexes to organize large simulation dashboards.
              </p>
            </div>
            <Link href="/patterns" style={{ display: 'inline-flex', alignItems: 'center', color: '#9333ea', textDecoration: 'none', fontWeight: 600, fontSize: '0.9rem', gap: '4px' }}>
              View patterns <ArrowRight style={{ width: '16px', height: '16px' }} />
            </Link>
          </div>
        </div>

        {/* High-Fidelity Interactive Sandbox Widget */}
        <div style={{
          background: '#ffffff',
          borderRadius: '20px',
          border: '1px solid #e2e8f0',
          padding: '40px',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '40px',
          alignItems: 'center',
          boxShadow: '0 20px 40px rgba(0, 0, 0, 0.03)',
        }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1d4ed8', fontWeight: 600, fontSize: '0.85rem', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
              <Activity style={{ width: '14px', height: '14px' }} />
              <span>Interactive Sandbox</span>
            </div>
            <h2 style={{ fontSize: '2rem', fontWeight: 800, marginTop: '8px', marginBottom: '16px', color: '#0f172a', letterSpacing: '-0.01em' }}>Test Drive the Redesign</h2>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: '1.6', marginBottom: '0' }}>
              Interact directly with our updated Design System controls. Toggle dynamic loaders, verify input field boundaries, and review responsive code.
            </p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', backgroundColor: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #e2e8f0' }}>
            
            {/* Input Demo */}
            <DSInput 
              label="Simulation Heat Coefficient" 
              suffix="°C/s" 
              value={demoInput} 
              onChange={(e) => setDemoInput(e.target.value)} 
              placeholder="25"
            />

            {/* Button Demo */}
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px' }}>
              <DSButton 
                variant="primary" 
                isLoading={demoLoading} 
                onClick={() => {
                  setDemoLoading(true);
                  setTimeout(() => setDemoLoading(false), 2000);
                }}
                style={{ backgroundColor: '#1d4ed8' }}
              >
                Run Heat Simulation
              </DSButton>
              <DSButton 
                variant="secondary" 
                onClick={() => setDemoInput("25")} 
                style={{ backgroundColor: '#ffffff', color: '#0f172a', border: '1px solid #cbd5e1' }}
              >
                Reset
              </DSButton>
            </div>

          </div>
        </div>

      </div>
    </div>
  );
}
