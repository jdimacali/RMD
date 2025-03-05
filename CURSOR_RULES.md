# Cursor Rules and Conventions

## Component Directory Structure

### Global Components (`/components`)

- Located in the project root directory (one level above the app folder)
- Contains components used across multiple pages/routes
- Example structure:
  ```
  /components
    /ui
      Container.tsx
      PageContainer.tsx
      Button.tsx
    /layout
      Footer.tsx
      Navbar.tsx
  ```
- Used for shared, reusable components
- No underscore prefix needed
- Import using `@/components/...`

### Route-Specific Components (`/app/_components`)

- Located inside the app directory
- Must be prefixed with underscore (`_components`) to prevent Next.js route conflicts
- Contains components specific to routes/pages
- Example structure:
  ```
  /app
    /_components
      /sections
        Hero.tsx
      /forms
        ContactForm.tsx
  ```
- Used only within specific routes/pages
- Import using relative paths

## Route Organization

- Route-specific components should be maintained in their respective directories:
  - About page components: `app/about/_components/`
  - Services page components: `app/services/_components/`
  - Contact page components: `app/contact/_components/`

## Styling Conventions

### Layout & Spacing

- Page padding: `py-24 sm:py-32 lg:pb-40`
- Container max-width: `max-w-7xl`
- Section spacing: `mt-24` between major sections
- Grid gaps: `gap-8` for large grids, `gap-4` for smaller components
- Mobile-first responsive design using Tailwind breakpoints

### Typography

- Main headings: `text-4xl sm:text-6xl font-bold tracking-tight`
- Section headings: `text-3xl font-bold tracking-tight`
- Subheadings: `text-lg font-semibold`
- Body text: `text-base leading-7`
- Text colors:
  - Headings: `text-primary`
  - Body: `text-gray-600`
  - Links: `text-primary hover:text-primary-dark`

### Components

- Buttons:
  ```css
  rounded-md bg-primary px-4 py-2.5 text-sm font-semibold text-white
  hover:bg-primary-dark transition-colors duration-200
  ```
- Cards:
  ```css
  rounded-lg border border-gray-200 bg-white p-6
  hover:shadow-md transition-all duration-200
  ```
- Icons:
  - Size: `h-5 w-5` or `h-6 w-6`
  - Color: `text-primary`

### Backgrounds

- Gradient background:
  ```css
  bg-gradient-to-b from-primary/5 via-primary/10 to-transparent
  ```
- Page structure:
  ```css
  relative isolate overflow-hidden
  ```

### Animations & Transitions

- Hover transitions: `transition-colors duration-200`
- Scale transitions: `transition-all duration-300`
- Button hover states: `hover:bg-primary-dark`
- Card hover states: `hover:shadow-md hover:scale-105`

### Container Structure

```jsx
<div className="relative isolate overflow-hidden">
  <div className="py-24 sm:py-32 lg:pb-40 bg-gradient-to-b from-primary/5 via-primary/10 to-transparent">
    <Container>{/* Content */}</Container>
  </div>
</div>
```

### Responsive Design

- Mobile-first approach
- Common breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px
- Responsive text sizes:
  - Headings: `text-4xl sm:text-6xl`
  - Body: `text-base sm:text-lg`

### Interactive Elements

- Buttons should have:
  - Hover states
  - Focus states
  - Loading states (when applicable)
  - Proper padding and spacing
  - Consistent icon placement

### Color Palette

- Primary: Used for main actions, headings, and emphasis
- Primary-dark: Used for hover states
- Gray-600: Used for body text
- Gray-200: Used for borders
- White: Used for backgrounds and text on dark backgrounds

## Import Conventions

- Use relative imports for route-specific components
- Use absolute imports with `@/` alias for global components
- Example:

  ```typescript
  // For global components
  import { Container } from "@/components/ui/Container";

  // For route-specific components
  import { Hero } from "./_components/sections/Hero";
  ```

## Asset Management

- Logo files should be stored in `/public/logo/`
- Stock images should be stored in `/public/images/stock/`
- Use meaningful and consistent naming conventions for assets

## Code Style

- Use TypeScript for all components
- Implement proper type definitions
- Use meaningful component and variable names
- Follow consistent formatting and indentation

## Component Best Practices

- Keep components focused and single-responsibility
- Implement proper error handling
- Use proper TypeScript types and interfaces
- Follow React best practices for hooks and state management

## Navigation

- Keep navigation consistent across all pages
- Implement proper routing using Next.js conventions
- Ensure mobile responsiveness for navigation components

## Performance

- Optimize images and assets
- Implement proper loading states
- Use Next.js Image component for optimized image loading

## Accessibility

- Implement proper ARIA labels
- Ensure keyboard navigation
- Maintain proper contrast ratios
- Use semantic HTML elements

## SEO

- Implement proper meta tags
- Use appropriate heading hierarchy
- Implement proper alt text for images

## Error Handling

- Implement proper error boundaries
- Handle loading and error states gracefully
- Provide meaningful error messages

## Documentation

- Keep this rules file updated
- Document complex components
- Include comments for complex logic
- Maintain a clear project structure

## Version Control

- Use meaningful commit messages
- Keep changes focused and atomic
- Follow proper branching strategy

These rules should be followed consistently across the project to maintain code quality and consistency.
