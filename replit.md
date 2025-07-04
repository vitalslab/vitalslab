# VitalsLab - Medical Education Gaming Platform

## Overview

VitalsLab is a comprehensive medical education gaming platform that combines React frontend with Express.js backend to deliver interactive medical learning experiences. The platform features three main games: Medle (medical Wordle), Anatomy Quiz, and Diagnosis Game, designed to help medical students and healthcare professionals enhance their knowledge through gamification.

## System Architecture

### Frontend Architecture
- **Framework**: React 18 with TypeScript
- **Build Tool**: Vite for fast development and optimized builds
- **UI Framework**: Shadcn/ui components with Radix UI primitives
- **Styling**: Tailwind CSS with custom design tokens and CSS variables
- **Routing**: Wouter for lightweight client-side routing
- **State Management**: TanStack Query for server state management
- **Form Handling**: React Hook Form with Zod validation

### Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **Database**: PostgreSQL with Drizzle ORM
- **Database Provider**: Neon Database (@neondatabase/serverless)
- **Session Management**: Express sessions with PostgreSQL store
- **API Design**: RESTful API with structured error handling

### Development Setup
- **Monorepo Structure**: Shared TypeScript definitions between client and server
- **Development Server**: Vite dev server with Express API integration
- **Hot Module Replacement**: Full HMR support for React components
- **Type Safety**: End-to-end TypeScript coverage with shared schemas

## Key Components

### Database Schema
The application uses a comprehensive PostgreSQL schema with the following main tables:
- **users**: User authentication and profile management
- **medleWords**: Medical terminology for Wordle-style game
- **anatomyQuestions**: Multiple choice anatomy questions
- **diagnosisCases**: Complex medical case scenarios
- **gameProgress**: User progress tracking across games
- **userStats**: Performance statistics and achievements

### Game Components
1. **Medle Game**: Medical Wordle implementation with category-based word selection
2. **Anatomy Quiz**: Interactive multiple-choice questions with explanations
3. **Diagnosis Game**: Case-based learning with patient scenarios and differential diagnosis

### API Endpoints
- `/api/medle/*`: Medle game data and random word generation
- `/api/anatomy/*`: Anatomy questions and categories
- `/api/diagnosis/*`: Medical cases and diagnosis scenarios
- Progress tracking and statistics endpoints for all games

## Data Flow

### Client-Server Communication
1. React components use TanStack Query for data fetching
2. RESTful API calls handle game data, user progress, and statistics
3. Real-time feedback through toast notifications
4. Optimistic updates for better user experience

### Game State Management
1. Local component state for active game sessions
2. Server-side persistence for progress and statistics
3. Category-based content filtering
4. Difficulty progression tracking

### Authentication Flow
- Session-based authentication with PostgreSQL session store
- User registration and login endpoints
- Protected routes for personalized content
- Progress tracking tied to user accounts

## External Dependencies

### Frontend Dependencies
- **UI Components**: Extensive Radix UI component library
- **Icons**: Lucide React icons
- **Utilities**: Class variance authority, clsx, date-fns
- **Development**: Vite plugins for Replit integration

### Backend Dependencies
- **Database**: Drizzle ORM with PostgreSQL driver
- **Validation**: Zod for runtime type checking
- **Session**: Connect-pg-simple for PostgreSQL session store
- **Development**: tsx for TypeScript execution

### Database Provider
- **Neon Database**: Serverless PostgreSQL with connection pooling
- **Drizzle Kit**: Database migrations and schema management
- **Connection**: Environment-based DATABASE_URL configuration

## Deployment Strategy

### Build Process
1. **Frontend**: Vite builds optimized React bundle to `dist/public`
2. **Backend**: esbuild compiles TypeScript server to `dist/index.js`
3. **Database**: Drizzle migrations applied via `db:push` command
4. **Static Assets**: Served from Express in production

### Production Configuration
- Environment variables for database connection
- Static file serving for built React app
- Error handling middleware for API routes
- Session configuration for user authentication

### Development Workflow
- `npm run dev`: Concurrent development with HMR
- `npm run build`: Production build process
- `npm run start`: Production server startup
- `npm run db:push`: Database schema updates

## Changelog

```
Changelog:
- July 04, 2025. Initial setup
- July 04, 2025. Added PostgreSQL database integration with Drizzle ORM
  - Created database schema with medical content tables
  - Implemented DatabaseStorage class replacing in-memory storage
  - Seeded database with 20 medical terms, 10 anatomy questions, and 5 diagnosis cases
  - Updated Medle game with individual letter input boxes for better user experience
- July 04, 2025. Implemented complete authentication and trial system
  - Added trial system allowing 2 games without registration
  - Created authentication with email/password using Passport.js
  - Added trial gate component and auth page with medical theme
  - Updated home page with login/logout functionality
- July 04, 2025. Updated medical categories for Medle game
  - Changed categories to: Anatomy, Physiology, Biochemistry, Pathology, Pharmacology, Clinical Skills
  - Updated database with 30 complex medical terms across these categories
  - Added advanced medical terminology appropriate for medical students
- July 04, 2025. Typography and branding updates
  - Added Inter font for titles and headings
  - Implemented clean sans-serif font stack for body text
  - Changed website name from "MedEd Games" to "VitalsLab"
  - Fixed Wordle duplicate letter logic for proper game mechanics
- July 04, 2025. SEO optimization
  - Added comprehensive SEO meta tags targeting "medical games," "anatomy quiz," and "diagnosis game"
  - Optimized page title and description for search ranking
  - Added keywords meta tag with relevant medical education terms
  - Improved content structure with SEO-friendly headings
  - Added canonical URL, robots meta, and language tags
```

## User Preferences

```
Preferred communication style: Simple, everyday language.
```