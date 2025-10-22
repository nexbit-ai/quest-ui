# Quest UI

The pursuit of right items

## Getting Started

### Installation

```bash
npm install
```

### Environment Setup

Create a `.env.local` file in the root directory (already created, but you can customize):

```bash
# API Configuration
VITE_API_BASE_URL=http://localhost:8080
VITE_API_TOKEN=
```

**Environment Variables:**
- `VITE_API_BASE_URL`: The base URL for your API (default: http://localhost:8080)
- `VITE_API_TOKEN`: Optional authentication token for API requests

### Development

```bash
npm run dev
```

This will start the development server. Open your browser and navigate to the URL shown in the terminal (typically http://localhost:5173).

### Build

```bash
npm run build
```

This will create a production-ready build in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
quest-ui/
├── src/
│   ├── components/
│   │   ├── Header.tsx        # Navigation header
│   │   ├── Header.css
│   │   ├── Hero.tsx          # Main hero section with search
│   │   ├── Hero.css
│   │   ├── DecorativeLine.tsx # SVG decorative element
│   │   └── DecorativeLine.css
│   ├── App.tsx               # Main app component
│   ├── App.css
│   ├── main.tsx              # Entry point
│   └── index.css             # Global styles
├── index.html
├── package.json
├── tsconfig.json
└── vite.config.ts
```

## Features

- Modern React 18 with TypeScript
- Vite for fast development and building
- Responsive design
- Clean, minimalist UI matching the South Park Commons aesthetic
- Search functionality with API integration
- Centralized API service layer
- Environment-based configuration

## API Integration

The search functionality is integrated with a backend API. The API layer is organized as follows:

### File Structure

```
src/
├── config/
│   └── api.config.ts       # API configuration (base URL, endpoints)
├── services/
│   └── api.service.ts      # API service layer
└── components/
    └── Hero.tsx            # Uses apiService for search
```

### API Configuration

All API configuration is centralized in `src/config/api.config.ts`:
- Base URL and auth token from environment variables
- Endpoint paths defined in one place
- Easy to update and maintain

### Making API Calls

The `apiService` provides methods for all API interactions:

```typescript
import { apiService } from '../services/api.service'

// Search chat
const response = await apiService.searchChat('your query here')
```

### API Endpoint

**Search Chat:**
- **Endpoint:** `POST /v1/search/chat`
- **Request Body:** `{ "message": "your search query" }`
- **Headers:** 
  - `Content-Type: application/json`
  - `Authorization: Bearer {token}` (if token is configured)

## Response Handling

The application handles 4 different types of responses from the backend:

### 1. Company List (`company_list`)
Displays a grid of companies matching the search query.
- **Route:** `/results/companies`
- **Component:** `CompanyListPage`
- **Features:** Company cards with logos, descriptions, metadata, tags, and links

### 2. Redirect (`redirect`)
Opens a specific URL in a new tab.
- **Behavior:** 
  - Relative URLs (e.g., `/fellowship`, `/team`) → Opens `https://www.southparkcommons.com{url}` in new tab
  - Absolute URLs (e.g., `https://example.com`) → Opens the exact URL in new tab
- **Use Cases:** South Park Commons pages, external resources

### 3. Answer (`answer`)
Displays detailed information/answer to the query.
- **Route:** `/results/answer`
- **Component:** `AnswerPage`
- **Features:** Formatted content with sections and related links

### 4. Error (`error`)
Shows a friendly error message to the user.
- **Behavior:** Displays a static, friendly message inline on the search page
- **Message:** "Nothing turned up for that. Try asking about a company, team, or domain related to SPC. Curiosity's a good start, though."
- **User stays on the homepage** and can try a new search

## Backend Contract

See `BACKEND_API_CONTRACT.md` for the complete API specification including:
- Request/response formats for all 4 response types
- Field descriptions and examples
- Status codes and error handling

Share this contract with your backend team for implementation.
