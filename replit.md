# Overview

HirKit is an AI-powered recruitment platform that streamlines the hiring process through intelligent automation. The application provides comprehensive assessment tools (technical, non-technical, and psychological), automated interview scheduling, candidate management, and analytics. Built as a full-stack web application, it serves HR professionals and recruitment teams looking to modernize their hiring workflows with AI-driven matching and evaluation capabilities.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture
- **Framework**: React 18 with TypeScript using Vite as the build tool
- **UI Library**: shadcn/ui components built on Radix UI primitives for accessibility
- **Styling**: Tailwind CSS with custom design system including CSS variables for theming
- **State Management**: TanStack Query for server state management and caching
- **Routing**: React Router for client-side navigation
- **Authentication**: Custom auth context provider with session management via cookies and tokens

## Backend Architecture
- **Runtime**: Node.js with Express.js framework
- **Language**: TypeScript with ES modules
- **API Design**: RESTful APIs with structured error handling and logging middleware
- **Authentication**: Session-based auth with bcrypt for password hashing and secure token generation
- **Database Layer**: Drizzle ORM with repository pattern for data access abstraction
- **Request Handling**: Express middleware for JSON parsing, cookie parsing, and request logging

## Data Storage
- **Database**: PostgreSQL via Neon serverless with connection pooling
- **ORM**: Drizzle ORM with type-safe schema definitions and migrations
- **Schema**: User management with roles, session tracking, and extensible design for assessment data
- **Connection**: Neon serverless client with WebSocket support for optimal performance

## Authentication & Authorization
- **Session Management**: Server-side sessions stored in database with configurable expiration
- **Password Security**: bcrypt hashing with salt for secure password storage
- **Token-based Auth**: JWT-like tokens for API authentication with cookie and header support
- **Authorization Middleware**: Role-based access control with user context injection
- **Session Storage**: Database-backed sessions with automatic cleanup of expired sessions

## External Dependencies
- **Database**: Neon PostgreSQL serverless for managed database hosting
- **Development Tools**: Replit integration with cartographer for development environment
- **Email Services**: Not yet implemented (password reset functionality noted as requiring email service)
- **File Storage**: Not currently implemented but architecture supports future integration
- **Analytics**: Built-in analytics system for recruitment metrics and reporting