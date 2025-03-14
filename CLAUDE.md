# CLAUDE.md - Agent Assistance Guide

## Build Commands
- `bun run dev` - Start development server with Turbopack
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run storybook` - Run Storybook on port 6006
- `bun run build-storybook` - Build Storybook
- `bun run test` - Run Vitest tests
- `bun run test -- --story=Button` - Run tests for specific story component
- `bun run plop` - Run Plop.js generators

## Code Style Guidelines
- Use TypeScript with strict mode enabled
- Follow path aliases with `@/*` for src directory imports
- Component organization with functional components and Storybook stories
- Use TailwindCSS for styling
- React key naming: use unique IDs or indices only when items won't reorder
- Error handling: use try/catch with appropriate logging
- Props should use explicit interfaces, not inferred types
- Sort imports: React first, then external deps, then internal modules
- Component files should be PascalCase, utility files camelCase
- Prefer const over let; avoid var