'use client';

import React from 'react';
import Link from 'next/link';
import { designSystem, commonStyles } from '@/lib/design-system';
import { useButtonHover, useCardHover } from '@/lib/design-hooks';

// Design System Button Component
interface DSButtonProps {
  children: React.ReactNode;
  href?: string;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  style?: React.CSSProperties;
  onClick?: () => void;
  [key: string]: any;
}

export function DSButton({ 
  children, 
  href, 
  variant = 'primary',
  style: customStyle = {},
  ...props 
}: DSButtonProps) {
  const baseStyle = { ...commonStyles.button[variant], ...customStyle };
  const { style, onMouseEnter, onMouseLeave } = useButtonHover(baseStyle);
  
  if (href) {
    return (
      <Link
        href={href}
        style={style}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        {...props}
      >
        {children}
      </Link>
    );
  }
  
  return (
    <button
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      {...props}
    >
      {children}
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
