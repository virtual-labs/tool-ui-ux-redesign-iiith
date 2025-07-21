# Virtual Labs UI/UX Design System

A comprehensive design system and style guide for Virtual Labs educational platform, built with Next.js, TypeScript, and Tailwind CSS.

## 🚀 Overview

This project provides a complete design system documentation site for Virtual Labs, featuring:

- **Design Foundations**: Colors, typography, spacing, border radius, elevation
- **Components**: Reusable UI components with consistent styling
- **Patterns**: Common interface patterns for virtual laboratory experiences
- **Guidelines**: Comprehensive guidelines for accessibility, content, implementation, and educational design

## 🛠️ Tech Stack

- **Framework**: Next.js 15 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React

## 📁 Project Structure

```
├── app/                    # Next.js app directory
│   ├── components/         # Component documentation pages
│   ├── foundations/        # Design foundations pages
│   ├── guidelines/         # Design guidelines pages
│   └── patterns/          # Pattern documentation pages
├── components/            # Reusable React components
│   ├── design-system/     # Design system components
│   └── ui/               # Base UI components
├── lib/                  # Utility functions and design system
└── public/              # Static assets
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- pnpm (recommended) or npm/yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```bash
   pnpm install
   ```

3. Run the development server:
   ```bash
   pnpm dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

### Available Scripts

- `pnpm dev` - Start development server
- `pnpm build` - Build for production
- `pnpm start` - Start production server
- `pnpm lint` - Run ESLint

## 🎨 Design System Features

### Foundations
- **Colors**: Primary, secondary, accent palettes with semantic variants
- **Typography**: Responsive font scales and hierarchy
- **Spacing**: Consistent spacing system
- **Elevation**: Shadow and layering system

### Components
- Buttons (primary, secondary, outline variants)
- Cards with interactive states
- Form elements (inputs, selects, checkboxes)
- Navigation components
- Data display components

### Guidelines
- **Accessibility**: WCAG 2.1 AA compliance guidelines
- **Content**: Voice, tone, and writing standards
- **Educational**: Pedagogical design principles
- **Implementation**: Technical guidelines and best practices

## 🤝 Contributing

1. Follow the existing code style and conventions
2. Ensure all components are accessible (WCAG 2.1 AA)
3. Test components across different screen sizes
4. Update documentation when adding new components

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🏫 About Virtual Labs

Virtual Labs is an educational initiative providing remote access to laboratories in various disciplines of science and engineering.
