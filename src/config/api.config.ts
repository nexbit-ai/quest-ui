// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'http://localhost:8080',
  AUTH_TOKEN: import.meta.env.VITE_API_TOKEN || '',
  ENDPOINTS: {
    SEARCH_CHAT: '/v1/search/chat',
  },
}

