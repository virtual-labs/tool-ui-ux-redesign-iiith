'use client';

import React from 'react';
import Link from 'next/link';
import { Loader2 } from 'lucide-react';
import { designSystem, commonStyles } from '@/lib/design-system';
import { useButtonHover, useCardHover } from '@/lib/design-hooks';

// Design System Button Component
interface DSButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  style?: React.CSSProperties;
  onClick?: () => void;
  isLoading?: boolean;
  disabled?: boolean;
  [key: string]: any;
}

export function DSButton({ 
  children, 
  href, 
  variant = 'primary',
  style: customStyle = {},
  isLoading = false,
  disabled = false,
  ...props 
}: DSButtonProps) {
  const isInteractionDisabled = disabled || isLoading;
  
  const baseStyle = { 
    ...commonStyles.button[variant], 
    ...(isInteractionDisabled ? {
      opacity: 0.6,
      cursor: 'not-allowed',
      transform: 'none',
      boxShadow: 'none',
      pointerEvents: 'none' as const,
    } : {}),
    ...customStyle 
  };
  
  const { style, onMouseEnter, onMouseLeave } = useButtonHover(baseStyle);
  
  // If interaction is disabled, override style transform/shadow
  const finalStyle = isInteractionDisabled 
    ? { ...style, transform: 'none', boxShadow: 'none' } 
    : style;

  const content = (
    <>
      {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" style={{ marginRight: designSystem.layout.spacing.sm }} />}
      {children}
    </>
  );
  
  if (href && !isInteractionDisabled) {
    return (
      <Link
        href={href}
        style={finalStyle}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        {content}
      </Link>
    );
  }
  
  return (
    <button
      style={finalStyle}
      disabled={isInteractionDisabled}
      onMouseEnter={isInteractionDisabled ? undefined : onMouseEnter}
      onMouseLeave={isInteractionDisabled ? undefined : onMouseLeave}
      {...props}
    >
      {content}
    </button>
  );
}

// Design System Card Component
interface DSCardProps {
  children: React.ReactNode;
  interactive?: boolean;
  style?: React.CSSProperties;
  [key: string]: any;
}

export function DSCard({ 
  children, 
  interactive = false,
  style: customStyle = {},
  ...props 
}: DSCardProps) {
  const baseStyle = interactive 
    ? { ...commonStyles.card.interactive, ...customStyle }
    : { ...commonStyles.card.default, ...customStyle };
  const { style, onMouseEnter, onMouseLeave } = useCardHover(baseStyle);
  
  return (
    <div
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
    </div>
  );
}

// Design System Badge Component
interface DSBadgeProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function DSBadge({ children, style: customStyle = {} }: DSBadgeProps) {
  const style = {
    display: 'inline-block',
    background: designSystem.colors.neutral.light,
    color: designSystem.colors.primary.base,
    padding: `${designSystem.layout.spacing.xs} ${designSystem.layout.spacing.sm}`,
    borderRadius: designSystem.borderRadius.components,
    fontSize: designSystem.typography.fontSize.small,
    fontWeight: designSystem.typography.fontWeight.labels,
    fontFamily: designSystem.typography.fontFamily.primary,
    border: `1px solid ${designSystem.colors.primary.light}`,
    marginBottom: designSystem.layout.spacing.md,
    ...customStyle
  };

  return (
    <span style={style}>
      {children}
    </span>
  );
}

// Design System Typography Components
interface DSTypographyProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
}

export function DSHeading1({ children, style: customStyle = {} }: DSTypographyProps) {
  const style = { ...commonStyles.typography.h1, ...customStyle };
  return <h1 style={style}>{children}</h1>;
}

export function DSHeading2({ children, style: customStyle = {} }: DSTypographyProps) {
  const style = { ...commonStyles.typography.h2, ...customStyle };
  return <h2 style={style}>{children}</h2>;
}

export function DSHeading3({ children, style: customStyle = {} }: DSTypographyProps) {
  const style = { ...commonStyles.typography.h3, ...customStyle };
  return <h3 style={style}>{children}</h3>;
}

export function DSParagraph({ children, style: customStyle = {} }: DSTypographyProps) {
  const style = { ...commonStyles.typography.body, ...customStyle };
  return <p style={style}>{children}</p>;
}

export function DSCode({ children, style: customStyle = {} }: DSTypographyProps) {
  const style = { ...commonStyles.typography.code, ...customStyle };
  return <code style={style}>{children}</code>;
}

// Design System Input Component
interface DSInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  suffix?: string;
  error?: string;
  label?: string;
  containerStyle?: React.CSSProperties;
}

export function DSInput({
  suffix,
  error,
  label,
  containerStyle = {},
  style: customStyle = {},
  id,
  ...props
}: DSInputProps) {
  const inputStyle: React.CSSProperties = {
    ...commonStyles.input.default,
    borderColor: error ? designSystem.colors.error.base : `var(--border, ${designSystem.colors.neutral.medium})`,
    paddingRight: suffix ? '45px' : designSystem.layout.spacing.md,
    ...customStyle
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: designSystem.layout.spacing.xs, width: '100%', ...containerStyle }}>
      {label && (
        <label htmlFor={id} style={{ ...commonStyles.typography.label, marginBottom: 0 }}>
          {label}
        </label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center', width: '100%' }}>
        <input id={id} style={inputStyle} {...props} />
        {suffix && (
          <span style={{
            position: 'absolute',
            right: designSystem.layout.spacing.md,
            color: designSystem.colors.neutral.medium,
            fontSize: designSystem.typography.fontSize.body,
            fontWeight: designSystem.typography.fontWeight.labels,
            pointerEvents: 'none'
          }}>
            {suffix}
          </span>
        )}
      </div>
      {error && (
        <span style={{
          color: designSystem.colors.error.base,
          fontSize: designSystem.typography.fontSize.small,
          marginTop: '2px',
          display: 'flex',
          alignItems: 'center',
          gap: '4px'
        }}>
          ⚠️ {error}
        </span>
      )}
    </div>
  );
}

// Design System Stepper Component
interface DSStepperProps {
  steps: { label: string; description?: string }[];
  currentStep: number;
  style?: React.CSSProperties;
}

export function DSStepper({ steps, currentStep, style: customStyle = {} }: DSStepperProps) {
  return (
    <div style={{ display: 'flex', alignItems: 'center', width: '100%', gap: '10px', overflowX: 'auto', padding: '10px 0', ...customStyle }}>
      {steps.map((step, index) => {
        const isActive = index === currentStep;
        const isCompleted = index < currentStep;
        const color = isCompleted 
          ? designSystem.colors.success.base 
          : (isActive ? designSystem.colors.primary.base : designSystem.colors.neutral.medium);

        return (
          <React.Fragment key={index}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', flexShrink: 0 }}>
              <div style={{
                width: '32px',
                height: '32px',
                borderRadius: designSystem.borderRadius.circular,
                backgroundColor: isCompleted ? designSystem.colors.success.base : (isActive ? designSystem.colors.primary.base : '#e2e8f0'),
                color: isCompleted || isActive ? 'white' : designSystem.colors.neutral.dark,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontWeight: 'bold',
                fontSize: '0.9rem',
                border: isActive ? `2px solid ${designSystem.colors.primary.light}` : 'none',
                transition: designSystem.motion.transitions.default
              }}>
                {isCompleted ? '✓' : index + 1}
              </div>
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ 
                  fontWeight: isActive ? 600 : 400, 
                  color: isActive ? designSystem.colors.neutral.dark : designSystem.colors.neutral.medium,
                  fontSize: '0.9rem'
                }}>
                  {step.label}
                </span>
                {step.description && (
                  <span style={{ fontSize: '0.75rem', color: designSystem.colors.neutral.medium }}>
                    {step.description}
                  </span>
                )}
              </div>
            </div>
            {index < steps.length - 1 && (
              <div style={{
                flexGrow: 1,
                height: '2px',
                backgroundColor: isCompleted ? designSystem.colors.success.base : '#e2e8f0',
                minWidth: '30px',
                transition: designSystem.motion.transitions.default
              }} />
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

// Design System Modal/Overlay Component
interface DSModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
  style?: React.CSSProperties;
}

export function DSModal({
  isOpen,
  onClose,
  title,
  children,
  footer,
  style: customStyle = {}
}: DSModalProps) {
  if (!isOpen) return null;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1000,
      backdropFilter: 'blur(4px)',
    }}>
      <div style={{
        backgroundColor: 'white',
        borderRadius: designSystem.borderRadius.cards,
        boxShadow: designSystem.elevation.level3,
        width: '90%',
        maxWidth: '500px',
        maxHeight: '85vh',
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        border: 'none',
        ...customStyle
      }}>
        {/* Header */}
        <div style={{
          padding: designSystem.layout.spacing.lg,
          borderBottom: '1px solid #e2e8f0',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center'
        }}>
          <h3 style={{ ...commonStyles.typography.h3, margin: 0 }}>{title}</h3>
          <button 
            onClick={onClose}
            style={{
              background: 'none',
              border: 'none',
              fontSize: '1.5rem',
              cursor: 'pointer',
              color: designSystem.colors.neutral.medium
            }}
          >
            ×
          </button>
        </div>

        {/* Content */}
        <div style={{
          padding: designSystem.layout.spacing.lg,
          overflowY: 'auto',
          color: designSystem.colors.neutral.dark,
          fontSize: designSystem.typography.fontSize.body,
          lineHeight: 1.6
        }}>
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div style={{
            padding: designSystem.layout.spacing.lg,
            borderTop: '1px solid #e2e8f0',
            display: 'flex',
            justifyContent: 'flex-end',
            gap: designSystem.layout.spacing.md,
            backgroundColor: '#f8fafc'
          }}>
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}
