# Backend API Contract

## Endpoint: Search Chat

**URL:** `POST /v1/search/chat`

**Headers:**
```
Content-Type: application/json
Authorization: Bearer {token} (optional)
```

**Request Body:**
```json
{
  "message": "string - The user's search query"
}
```

---

## Response Types

The API must return a JSON response with a `type` field that indicates which kind of response it is. There are 4 possible response types:

### 1. Company List Response

**When to use:** When the user's query should return a list of companies (e.g., "show me AI companies", "companies in blockchain")

**Response Structure:**
```json
{
  "type": "company_list",
  "query": "original user query",
  "data": {
    "title": "Companies in AI",
    "description": "Here are the AI companies in our portfolio",
    "companies": [
      {
        "id": "company-123",
        "name": "Example AI Corp",
        "description": "Building the future of AI...",
        "logo": "https://example.com/logo.png",
        "website": "https://example.com",
        "stage": "Series A",
        "founded": "2020",
        "team_size": "15-50",
        "tags": ["AI", "Machine Learning", "Enterprise"]
      }
    ],
    "total_count": 25
  }
}
```

**Field Descriptions:**
- `type`: Always `"company_list"`
- `query`: The original user query for context
- `data.title`: Title to display above the list
- `data.description`: (Optional) Additional context about the results
- `data.companies`: Array of company objects
  - `id`: Unique identifier for the company
  - `name`: Company name
  - `description`: Brief description of what the company does
  - `logo`: (Optional) URL to company logo
  - `website`: (Optional) Company website URL
  - `stage`: (Optional) Funding stage (e.g., "Seed", "Series A")
  - `founded`: (Optional) Year founded
  - `team_size`: (Optional) Size of the team
  - `tags`: (Optional) Array of relevant tags/categories
- `data.total_count`: Total number of companies matching the query

---

### 2. Redirect Response

**When to use:** When the user's query should open a specific page in a new tab (e.g., "tell me about Fellowship", "who is on the team", "show me company X")

**Response Structure:**
```json
{
  "type": "redirect",
  "query": "original user query",
  "data": {
    "url": "/founder-fellowship",
    "title": "Founder Fellowship",
    "description": "Redirecting you to the Founder Fellowship page..."
  }
}
```

**Field Descriptions:**
- `type`: Always `"redirect"`
- `query`: The original user query
- `data.url`: The URL to open in a new tab
  - **Relative URLs** (e.g., `/fellowship`, `/team`): Will open `https://www.southparkcommons.com{url}` in a new tab
  - **Absolute URLs** (e.g., `https://example.com`): Will open the exact URL in a new tab
- `data.title`: Title of the destination page
- `data.description`: (Optional) Brief description of where the user will be taken

---

### 3. Answer Response

**When to use:** When the user's query requires a theoretical/informational answer (e.g., "what is SPC's investment thesis", "what do you look for in founders")

**Response Structure:**
```json
{
  "type": "answer",
  "query": "original user query",
  "data": {
    "title": "Our Investment Thesis",
    "content": "At SPC, we believe in supporting founders during the critical -1 to 0 phase...",
    "sections": [
      {
        "heading": "What We Look For",
        "content": "We seek talented technologists and founders who are figuring out what's next..."
      },
      {
        "heading": "Our Approach",
        "content": "We provide a community-driven environment..."
      }
    ],
    "related_links": [
      {
        "title": "About the Fellowship",
        "url": "/founder-fellowship"
      },
      {
        "title": "Our Story",
        "url": "/our-story"
      }
    ]
  }
}
```

**Field Descriptions:**
- `type`: Always `"answer"`
- `query`: The original user query
- `data.title`: Main title of the answer
- `data.content`: Main content/answer (supports HTML or plain text)
- `data.sections`: (Optional) Array of content sections with headings
  - `heading`: Section heading
  - `content`: Section content (supports HTML or plain text)
- `data.related_links`: (Optional) Related links for further exploration
  - `title`: Link text
  - `url`: Link URL

---

### 4. Error Response

**When to use:** When the query cannot be processed or no relevant information is found

**Response Structure:**
```json
{
  "type": "error",
  "query": "original user query",
  "data": {
    "message": "I couldn't find any information related to your query. Please try rephrasing or ask something else.",
    "code": "NOT_FOUND"
  }
}
```

**Field Descriptions:**
- `type`: Always `"error"`
- `query`: The original user query
- `data.message`: Error message for logging/debugging (not shown to user)
- `data.code`: (Optional) Error code for debugging
  - Common codes: `"NOT_FOUND"`, `"INVALID_QUERY"`, `"SERVER_ERROR"`

**Note:** The frontend displays a static, friendly message to users regardless of the error message sent. The `data.message` field is logged for debugging purposes only.

---

## Example Requests and Responses

### Example 1: Company List Query

**Request:**
```json
{
  "message": "Show me companies working on AI"
}
```

**Response:**
```json
{
  "type": "company_list",
  "query": "Show me companies working on AI",
  "data": {
    "title": "AI Companies",
    "description": "Companies in our portfolio working on artificial intelligence",
    "companies": [
      {
        "id": "luma-ai",
        "name": "Luma AI",
        "description": "Building state-of-the-art multimodal AI models",
        "logo": "https://luma.ai/logo.png",
        "website": "https://luma.ai",
        "tags": ["AI", "Computer Vision", "3D"]
      }
    ],
    "total_count": 8
  }
}
```

### Example 2: Redirect Query

**Request:**
```json
{
  "message": "Tell me about the fellowship program"
}
```

**Response:**
```json
{
  "type": "redirect",
  "query": "Tell me about the fellowship program",
  "data": {
    "url": "/founder-fellowship",
    "title": "Founder Fellowship",
    "description": "Opens the Founder Fellowship page in a new tab"
  }
}
```

### Example 3: Answer Query

**Request:**
```json
{
  "message": "What is SPC's investment philosophy?"
}
```

**Response:**
```json
{
  "type": "answer",
  "query": "What is SPC's investment philosophy?",
  "data": {
    "title": "Our Investment Philosophy",
    "content": "South Park Commons focuses on the -1 to 0 phase, helping talented individuals figure out what to work on next.",
    "sections": [
      {
        "heading": "The -1 to 0 Journey",
        "content": "We believe the journey from -1 (figuring out what to build) to 0 (starting to build) is critical and underserved."
      }
    ],
    "related_links": [
      {
        "title": "Our Story",
        "url": "/our-story"
      }
    ]
  }
}
```

### Example 4: Error Response

**Request:**
```json
{
  "message": "asdfghjkl"
}
```

**Response:**
```json
{
  "type": "error",
  "query": "asdfghjkl",
  "data": {
    "message": "Invalid query format",
    "code": "INVALID_QUERY"
  }
}
```

**What the user sees:**
"Nothing turned up for that. Try asking about a company, team, or domain related to SPC. Curiosity's a good start, though."

---

## Status Codes

- `200 OK`: Successful response (all response types)
- `400 Bad Request`: Invalid request body
- `401 Unauthorized`: Missing or invalid authentication token
- `500 Internal Server Error`: Server error

## Notes

1. The `query` field should always echo back the user's original query
2. All text content can include HTML for rich formatting (will be sanitized on frontend)
3. URLs in `redirect` type:
   - **Relative URLs** (e.g., `/fellowship`, `/team`, `/companies`) will redirect to `https://www.southparkcommons.com{url}`
   - **Absolute URLs** (e.g., `https://example.com`, `https://other-site.com/page`) will redirect to the exact URL as provided
   - Use relative URLs for South Park Commons pages, absolute URLs for external sites
4. Logo URLs should be valid, accessible image URLs (HTTPS preferred)
5. Keep descriptions concise and user-friendly
6. The frontend will handle routing and rendering based on the `type` field

