'use client';

import { useState, useCallback } from 'react';
import { designSystem } from './design-system';

// Hook for hover effects
export function useHover() {
  const [isHovered, setIsHovered] = useState(false);

  const onMouseEnter = useCallback(() => setIsHovered(true), []);
  const onMouseLeave = useCallback(() => setIsHovered(false), []);

  return {
    isHovered,
    onMouseEnter,
    onMouseLeave,
  };
}

// Hook for button hover effects
export function useButtonHover(baseStyle: React.CSSProperties) {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();

  const style = isHovered
    ? {
        ...baseStyle,
        transform: designSystem.motion.hover.transform,
        boxShadow: designSystem.elevation.hover,
      }
    : baseStyle;

  return {
    style,
    onMouseEnter,
    onMouseLeave,
  };
}

// Hook for card hover effects
export function useCardHover(baseStyle: React.CSSProperties) {
  const { isHovered, onMouseEnter, onMouseLeave } = useHover();

  const style = isHovered
    ? {
        ...baseStyle,
        transform: designSystem.motion.hover.transform,
        boxShadow: designSystem.elevation.level3,
      }
    : baseStyle;

  return {
    style,
    onMouseEnter,
    onMouseLeave,
  };
}

// Hook for input focus effects
export function useInputFocus() {
  const [isFocused, setIsFocused] = useState(false);

  const onFocus = useCallback(() => setIsFocused(true), []);
  const onBlur = useCallback(() => setIsFocused(false), []);

  return {
    isFocused,
    onFocus,
    onBlur,
  };
}

// Helper function to merge styles
export function mergeStyles(...styles: (React.CSSProperties | undefined)[]): React.CSSProperties {
  return Object.assign({}, ...styles.filter(Boolean));
}
