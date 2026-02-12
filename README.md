# OTA Booking Frontend Architecture

A production-grade OTA (Online Travel Agency) booking frontend application built with Next.js 16, TypeScript, Tailwind CSS, and Zustand.

## Tech Stack

- **Framework**: Next.js 16.1 with App Router
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS
- **State Management**: Zustand
- **Validation**: Zod
- **Forms**: React Hook Form
- **Testing**: Vitest + React Testing Library + fast-check

## Getting Started

1. Install dependencies:

```bash
yarn install
```

2. Run the development server:

```bash
yarn dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Testing

Run tests:

```bash
yarn test
```

Run tests with UI:

```bash
yarn test:ui
```

Run tests with coverage:

```bash
yarn test:coverage
```

## Project Structure

```
src/
├── app/              # Next.js App Router pages
├── components/       # React components
├── features/         # Feature-specific logic
├── lib/             # Utilities and helpers
├── hooks/           # Custom React hooks
└── styles/          # Global styles
```

## Features

- Flight search with validation
- Multi-step booking flow (traveler info → seats/add-ons → review)
- State persistence with localStorage
- Optimistic UI updates
- Comprehensive error handling
- Responsive design (mobile, tablet, desktop)
- Property-based testing with fast-check

## License

MIT
