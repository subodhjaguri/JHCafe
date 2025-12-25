# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build and Development Commands

```bash
npm run dev      # Start development server on port 8080
npm run build    # Production build
npm run lint     # Run ESLint
npm run preview  # Preview production build
```

## Architecture

This is a single-page cafe website built with Vite, React 18, TypeScript, and Tailwind CSS.

### Project Structure

- `src/pages/Index.tsx` - Main landing page that composes all section components
- `src/components/` - Page section components (Hero, About, Menu, Gallery, Contact, Footer, Navbar, WhatsAppButton)
- `src/components/ui/` - shadcn/ui primitives (do not edit directly)
- `src/data/menuData.ts` - Menu items data
- `src/config/siteConfig.ts` - Site-wide configuration
- `src/hooks/` - Custom React hooks (use-mobile, use-toast)
- `src/lib/utils.ts` - Utility functions including `cn()` for class merging

### Key Patterns

- **Path alias**: Use `@/` to import from `src/` (e.g., `@/components/Navbar`)
- **Styling**: Tailwind CSS with custom theme colors (cream, warm-gray, deep-brown, gold-glow) and CSS variables for theming
- **UI Components**: shadcn/ui components with Radix UI primitives
- **State Management**: React Query for server state, React hooks for local state
- **Routing**: React Router with catch-all 404 handling

### Tailwind Configuration

Custom theme extends default with:
- Fonts: Inter (sans), Playfair Display (serif)
- Custom animations: fade-up, fade-in, shimmer
- CSS variable-based color system for theming
