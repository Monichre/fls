# CLAUDE.md - Agent Assistance Guide

## Build Commands
- `bun run dev` - Start development server
- `bun run build` - Build for production
- `bun run start` - Start production server
- `bun run lint` - Run ESLint
- `bun run storybook` - Run Storybook on port 6006
- `bun run build-storybook` - Build Storybook
- `bun run test` - Run Vitest tests
- `bun run test -- --story=ComponentName` - Run tests for specific story
- `bun run new` - Run Plop.js generators for components and pages

## Code Style Guidelines
- Use TypeScript with strict mode enabled
- Follow path aliases with `@/*` for src directory imports
- Use functional React components with Storybook stories
- Style with TailwindCSS following project conventions
- React key naming: use unique IDs or indices only when items won't reorder
- Error handling: use try/catch with appropriate logging
- Props must use explicit interfaces, never inferred types
- Imports order: React first, then external dependencies, then internal modules
- File naming: PascalCase for components, camelCase for utilities
- Variable naming: prefer const over let; avoid var
- Components should use props destructuring and default values where appropriate