# Progress Tracker

Update this file after every meaningful implementation
change.

## Current Phase

- In Progress

## Current Goal

- Authentication and route protection (next feature)

## Completed

- Next.js boilerplate cleanup (removed default CSS, assets, page-specific module CSS)
- Added project context documentation files
- Updated `globals.css` to Tailwind directives only
- Replaced main page component with minimal Ghost AI placeholder
- **01-design-system**: Installed shadcn/ui (Button, Card, Dialog, Input, Tabs, Textarea, ScrollArea), installed lucide-react, created `lib/utils.ts` with `cn()` helper, wired Ghost AI dark theme tokens into `globals.css` via `@theme inline`. Build passes with zero errors.

## In Progress

- None yet.

## Next Up

- Authentication and route protection
- Project creation and management UI
- Canvas workspace layout

## Open Questions

- None currently

## Architecture Decisions

- Using shadcn/ui on top of Tailwind v4 for UI primitives — do not modify generated `components/ui/*` files after installation.
- Dark theme only — all color tokens defined as CSS custom properties in `globals.css` and mapped via `@theme inline`. The `:root` holds dark values directly (no light/dark split). `class="dark"` added to `<html>` so shadcn's `.dark` variant selectors resolve correctly.
- `lib/utils.ts` provides `cn()` (clsx + tailwind-merge) for conditional class merging.

## Session Notes

- Project is Next.js 16.2.7 with React 19, Tailwind v4, TypeScript strict mode.
- shadcn components must be installed via shadcn CLI and left unmodified after generation.
- All color tokens are CSS custom properties; use Tailwind utility aliases (`bg-bg-base`, `text-text-primary`, `border-border-default`, `text-accent-primary`, etc.) — never hardcode hex or raw zinc-* classes.
