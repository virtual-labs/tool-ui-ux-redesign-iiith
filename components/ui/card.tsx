import * as React from "react"
import { cn } from "@/lib/utils"

// Design system imports (only used in client components)
let commonStyles: any;
let useCardHover: any;

// Dynamic imports for client-side only
if (typeof window !== 'undefined') {
  commonStyles = require("@/lib/design-system").commonStyles;
  useCardHover = require("@/lib/design-hooks").useCardHover;
}

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  useDesignSystem?: boolean
  interactive?: boolean
}

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, useDesignSystem = false, interactive = false, style: customStyle, ...props }, ref) => {
    // Only use design system features on client side
    if (useDesignSystem && typeof window !== 'undefined' && commonStyles && useCardHover) {
      const baseStyle = interactive 
        ? { ...commonStyles.card.interactive, ...customStyle }
        : { ...commonStyles.card.default, ...customStyle };
      const { style, onMouseEnter, onMouseLeave } = useCardHover(baseStyle);
      
      return (
        <div
          ref={ref}
          style={style}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          {...props}
        />
      );
    }
    
    return (
      <div
        ref={ref}
        className={cn(
          "rounded-lg border bg-card text-card-foreground shadow-sm",
          className
        )}
        style={customStyle}
        {...props}
      />
    );
  }
)
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "text-2xl font-semibold leading-none tracking-tight",
      className
    )}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
