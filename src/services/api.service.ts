import { API_CONFIG } from '../config/api.config'
import { SearchChatResponse } from '../types/api.types'

export interface SearchChatRequest {
  message: string
}

class ApiService {
  private baseUrl: string
  private authToken: string

  constructor() {
    this.baseUrl = API_CONFIG.BASE_URL
    this.authToken = API_CONFIG.AUTH_TOKEN
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseUrl}${endpoint}`
    
    const headers: HeadersInit = {
      'Content-Type': 'application/json',
      ...options.headers,
    }

    // Add auth token if available
    if (this.authToken) {
      headers['Authorization'] = `Bearer ${this.authToken}`
    }

    const config: RequestInit = {
      ...options,
      headers,
    }

    try {
      const response = await fetch(url, config)

      if (!response.ok) {
        throw new Error(`API Error: ${response.status} ${response.statusText}`)
      }

      return await response.json()
    } catch (error) {
      console.error('API Request failed:', error)
      throw error
    }
  }

  // Search Chat API
  async searchChat(message: string): Promise<SearchChatResponse> {
    return this.request<SearchChatResponse>(
      API_CONFIG.ENDPOINTS.SEARCH_CHAT,
      {
        method: 'POST',
        body: JSON.stringify({ message }),
      }
    )
  }
}

// Export a singleton instance
export const apiService = new ApiService()

