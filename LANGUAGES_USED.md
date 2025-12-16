# Languages & Technologies Used in This Project

## 📋 Summary

This project uses **multiple languages and technologies** for different parts:

## 🎨 Frontend (Next.js/React)

### Primary Language
- **TypeScript** (`.ts`, `.tsx` files)
  - Type-safe JavaScript
  - Used for all React components, pages, and utilities
  - Files: `frontend/components/**/*.tsx`, `app/**/*.tsx`, `shared/**/*.ts`

### Styling
- **CSS** (`.css` files)
  - Global styles: `app/globals.css`
- **Tailwind CSS**
  - Utility-first CSS framework
  - Used for all component styling

### Configuration
- **JSON** (`.json` files)
  - `package.json` - Dependencies and scripts
  - `tsconfig.json` - TypeScript configuration
  - `components.json` - shadcn/ui configuration
  - `package-lock.json` - Dependency lock file

## 🔧 Backend (.NET Core)

### Primary Language
- **C#** (`.cs` files)
  - .NET Core Web API
  - Located in: `InterviewApp.API/Program.cs`
  - Handles authentication, database operations, and API endpoints

### Database
- **SQL** (SQL Server)
  - Database queries and operations
  - Connection via `Microsoft.Data.SqlClient`
  - Database: `InterviewAppDB`

## 📊 Technology Stack Breakdown

### Frontend Stack
```
TypeScript (Type-safe JavaScript)
├── React 19.0.0
├── Next.js 15.2.2 (App Router)
├── Tailwind CSS 4
├── shadcn/ui (UI components)
└── Vapi AI SDK (Voice AI)
```

### Backend Stack
```
C# (.NET Core)
├── ASP.NET Core Web API
├── Dapper (ORM for SQL)
├── Microsoft.Data.SqlClient
└── SQL Server Database
```

### External APIs
- **Vapi AI** - Voice AI integration (TypeScript SDK)
- **OpenAI** (if needed) - AI models

## 📁 File Extensions by Language

| Language | Extensions | Location |
|----------|-----------|----------|
| **TypeScript** | `.ts`, `.tsx` | `frontend/`, `app/`, `shared/`, `api/` |
| **C#** | `.cs` | `InterviewApp.API/` |
| **CSS** | `.css` | `app/globals.css` |
| **JSON** | `.json` | Root, config files |
| **SQL** | Embedded in C# | `.NET API` |

## 🔄 How They Work Together

```
┌─────────────────────────────────────┐
│   Frontend (TypeScript/React)       │
│   - Next.js App (port 3001)         │
│   - React Components                │
│   - Vapi AI Integration             │
└──────────────┬──────────────────────┘
               │ HTTP Requests
               ▼
┌─────────────────────────────────────┐
│   Backend (.NET Core / C#)          │
│   - ASP.NET Core API (port 5216)    │
│   - Authentication                  │
│   - Business Logic                  │
└──────────────┬──────────────────────┘
               │ SQL Queries
               ▼
┌─────────────────────────────────────┐
│   Database (SQL Server)             │
│   - InterviewAppDB                  │
│   - Users Table                     │
└─────────────────────────────────────┘
```

## 📝 Code Examples

### TypeScript (Frontend)
```typescript
// frontend/components/auth/AuthForm.tsx
const handleSubmit = async (e: React.FormEvent) => {
  const res = await fetch("http://localhost:5216/auth/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });
};
```

### C# (Backend)
```csharp
// InterviewApp.API/Program.cs
app.MapPost("/auth/login", async ([FromBody] LoginDto dto) => {
    var user = await conn.QueryFirstOrDefaultAsync<dynamic>(
        "SELECT * FROM Users WHERE Email = @Email",
        new { dto.Email });
    return Results.Ok(user);
});
```

### SQL (Database)
```sql
-- Executed via C# Dapper
SELECT Id, FullName, Email FROM Users WHERE Email = @Email
```

## 🎯 Summary

**Languages Used:**
1. ✅ **TypeScript** - Frontend (React/Next.js)
2. ✅ **C#** - Backend (.NET Core API)
3. ✅ **SQL** - Database queries
4. ✅ **CSS** - Styling
5. ✅ **JSON** - Configuration

**Frameworks:**
- Next.js 15 (React framework)
- ASP.NET Core (C# web framework)
- Tailwind CSS (CSS framework)
- Dapper (C# ORM)

