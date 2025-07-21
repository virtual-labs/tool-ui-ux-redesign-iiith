// VLabs Design System Configuration
// Based on StyleRecommendations.txt by Santhoshini Thota

export const designSystem = {
  // Colors - Updated to match StyleRecommendations.txt exactly
  colors: {
    primary: {
      base: '#3182ce',
      light: '#4299e1',
      gradient: 'linear-gradient(135deg, #3182ce, #4299e1)'
    },
    success: {
      base: '#10b981',
      light: '#48bb78'
    },
    warning: {
      base: '#f59e0b',
      light: '#ed8936'
    },
    error: {
      base: '#ef4444',
      light: '#f56565'
    },
    neutral: {
      dark: '#2d3748',
      medium: '#64748b',
      light: '#f8fafc'
    },
    background: {
      gradient: 'linear-gradient(135deg, #667eea, #764ba2)',
      light: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      surface: '#ffffff'
    }
  },

  // Typography
  typography: {
    fontFamily: {
      primary: '"Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      mono: '"Fira Code", "SF Mono", Monaco, Inconsolata, "Roboto Mono", "Source Code Pro", monospace'
    },
    fontSize: {
      h1: '2em',
      h2: '1.5em',
      h3: '1.1em',
      body: '0.875rem',
      small: '0.75rem'
    },
    fontWeight: {
      headers: 700,
      subheads: 600,
      labels: 500,
      body: 400
    }
  },

  // Layout
  layout: {
    grid: {
      sidebar: '320px',
      main: '1fr',
      observations: '350px',
      gap: '15px'
    },
    breakpoints: {
      mobile: '768px',
      desktop: '1200px'
    },
    spacing: {
      xs: '4px',
      sm: '8px',
      md: '15px',
      lg: '20px',
      xl: '32px',
      xxl: '48px'
    }
  },

  // Border Radius
  borderRadius: {
    cards: '15px',
    components: '12px',
    buttons: '8px',
    inputs: '6px',
    progress: '4px',
    circular: '50%'
  },

  // Elevation (Box Shadows)
  elevation: {
    level1: '0 10px 30px rgba(0,0,0,0.1)',
    level2: '0 8px 25px rgba(66,153,225,0.3)',
    level3: '0 25px 50px rgba(0,0,0,0.15)',
    hover: '0 12px 35px rgba(0,0,0,0.15)'
  },

  // Motion & Transitions
  motion: {
    transitions: {
      default: 'all 0.3s ease',
      fast: 'all 0.2s ease',
      slow: 'all 0.5s ease'
    },
    hover: {
      transform: 'translateY(-2px)'
    }
  }
} as const;

// CSS-in-JS style objects for common patterns
export const commonStyles = {
  // Button styles based on design system
  button: {
    primary: {
      background: designSystem.colors.primary.gradient,
      color: 'white',
      borderRadius: designSystem.borderRadius.buttons,
      padding: `${designSystem.layout.spacing.sm} ${designSystem.layout.spacing.lg}`,
      fontWeight: designSystem.typography.fontWeight.labels,
      fontSize: designSystem.typography.fontSize.body,
      fontFamily: designSystem.typography.fontFamily.primary,
      border: 'none',
      cursor: 'pointer',
      transition: designSystem.motion.transitions.default,
      boxShadow: designSystem.elevation.level1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: designSystem.layout.spacing.sm,
    },
    secondary: {
      background: 'rgba(255, 255, 255, 0.9)',
      color: designSystem.colors.primary.base,
      border: `2px solid ${designSystem.colors.primary.base}`,
      borderRadius: designSystem.borderRadius.buttons,
      padding: `${designSystem.layout.spacing.sm} ${designSystem.layout.spacing.lg}`,
      fontWeight: designSystem.typography.fontWeight.labels,
      fontSize: designSystem.typography.fontSize.body,
      fontFamily: designSystem.typography.fontFamily.primary,
      cursor: 'pointer',
      transition: designSystem.motion.transitions.default,
      boxShadow: designSystem.elevation.level1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: designSystem.layout.spacing.sm,
    },
    success: {
      background: `linear-gradient(135deg, ${designSystem.colors.success.base}, ${designSystem.colors.success.light})`,
      color: 'white',
      borderRadius: designSystem.borderRadius.buttons,
      padding: `${designSystem.layout.spacing.sm} ${designSystem.layout.spacing.lg}`,
      fontWeight: designSystem.typography.fontWeight.labels,
      fontSize: designSystem.typography.fontSize.body,
      fontFamily: designSystem.typography.fontFamily.primary,
      border: 'none',
      cursor: 'pointer',
      transition: designSystem.motion.transitions.default,
      boxShadow: designSystem.elevation.level1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: designSystem.layout.spacing.sm,
    },
    warning: {
      background: `linear-gradient(135deg, ${designSystem.colors.warning.base}, ${designSystem.colors.warning.light})`,
      color: 'white',
      borderRadius: designSystem.borderRadius.buttons,
      padding: `${designSystem.layout.spacing.sm} ${designSystem.layout.spacing.lg}`,
      fontWeight: designSystem.typography.fontWeight.labels,
      fontSize: designSystem.typography.fontSize.body,
      fontFamily: designSystem.typography.fontFamily.primary,
      border: 'none',
      cursor: 'pointer',
      transition: designSystem.motion.transitions.default,
      boxShadow: designSystem.elevation.level1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: designSystem.layout.spacing.sm,
    },
    error: {
      background: `linear-gradient(135deg, ${designSystem.colors.error.base}, ${designSystem.colors.error.light})`,
      color: 'white',
      borderRadius: designSystem.borderRadius.buttons,
      padding: `${designSystem.layout.spacing.sm} ${designSystem.layout.spacing.lg}`,
      fontWeight: designSystem.typography.fontWeight.labels,
      fontSize: designSystem.typography.fontSize.body,
      fontFamily: designSystem.typography.fontFamily.primary,
      border: 'none',
      cursor: 'pointer',
      transition: designSystem.motion.transitions.default,
      boxShadow: designSystem.elevation.level1,
      display: 'inline-flex',
      alignItems: 'center',
      justifyContent: 'center',
      gap: designSystem.layout.spacing.sm,
    }
  },

  // Card styles
  card: {
    default: {
      background: 'white',
      borderRadius: designSystem.borderRadius.cards,
      boxShadow: designSystem.elevation.level1,
      padding: designSystem.layout.spacing.lg,
      transition: designSystem.motion.transitions.default,
      border: 'none'
    },
    elevated: {
      background: 'white',
      borderRadius: designSystem.borderRadius.cards,
      boxShadow: designSystem.elevation.level2,
      padding: designSystem.layout.spacing.lg,
      transition: designSystem.motion.transitions.default,
      border: 'none'
    },
    interactive: {
      background: 'white',
      borderRadius: designSystem.borderRadius.cards,
      boxShadow: designSystem.elevation.level1,
      padding: designSystem.layout.spacing.lg,
      transition: designSystem.motion.transitions.default,
      cursor: 'pointer',
      border: 'none'
    }
  },

  // Input styles
  input: {
    default: {
      borderRadius: designSystem.borderRadius.inputs,
      border: `1px solid ${designSystem.colors.neutral.medium}`,
      padding: `${designSystem.layout.spacing.sm} ${designSystem.layout.spacing.md}`,
      fontSize: designSystem.typography.fontSize.body,
      fontFamily: designSystem.typography.fontFamily.primary,
      transition: designSystem.motion.transitions.default,
      outline: 'none',
      width: '100%'
    }
  },

  // Typography styles
  typography: {
    h1: {
      fontSize: designSystem.typography.fontSize.h1,
      fontWeight: designSystem.typography.fontWeight.headers,
      fontFamily: designSystem.typography.fontFamily.primary,
      lineHeight: '1.2',
      margin: '0 0 1rem 0'
    },
    h2: {
      fontSize: designSystem.typography.fontSize.h2,
      fontWeight: designSystem.typography.fontWeight.headers,
      fontFamily: designSystem.typography.fontFamily.primary,
      lineHeight: '1.3',
      margin: '0 0 0.875rem 0'
    },
    h3: {
      fontSize: designSystem.typography.fontSize.h3,
      fontWeight: designSystem.typography.fontWeight.subheads,
      fontFamily: designSystem.typography.fontFamily.primary,
      lineHeight: '1.4',
      margin: '0 0 0.75rem 0'
    },
    body: {
      fontSize: designSystem.typography.fontSize.body,
      fontWeight: designSystem.typography.fontWeight.body,
      fontFamily: designSystem.typography.fontFamily.primary,
      lineHeight: '1.6',
      margin: '0 0 1rem 0'
    },
    label: {
      fontSize: designSystem.typography.fontSize.body,
      fontWeight: designSystem.typography.fontWeight.labels,
      fontFamily: designSystem.typography.fontFamily.primary,
      lineHeight: '1.4',
      margin: '0 0 0.5rem 0'
    },
    code: {
      fontSize: designSystem.typography.fontSize.small,
      fontFamily: designSystem.typography.fontFamily.mono,
      background: designSystem.colors.neutral.light,
      padding: `${designSystem.layout.spacing.xs} ${designSystem.layout.spacing.sm}`,
      borderRadius: designSystem.borderRadius.inputs,
      border: `1px solid ${designSystem.colors.neutral.medium}`
    }
  },

  // Layout styles
  layout: {
    threeColumn: {
      display: 'grid',
      gridTemplateColumns: `${designSystem.layout.grid.sidebar} ${designSystem.layout.grid.main} ${designSystem.layout.grid.observations}`,
      gap: designSystem.layout.spacing.md,
      minHeight: '100vh'
    },
    container: {
      maxWidth: '1200px',
      margin: '0 auto',
      padding: `0 ${designSystem.layout.spacing.lg}`
    },
    section: {
      padding: `${designSystem.layout.spacing.xxl} 0`
    }
  }
};
