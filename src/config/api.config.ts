// API Configuration
export const API_CONFIG = {
  BASE_URL: import.meta.env.VITE_API_BASE_URL || 'https://api.nexbit.ai',
  AUTH_TOKEN: import.meta.env.VITE_API_TOKEN || '',
  ENDPOINTS: {
    SEARCH_CHAT: '/v1/search/chat',
  },
}

