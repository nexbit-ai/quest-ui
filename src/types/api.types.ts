// API Response Types

export enum ResponseType {
  COMPANY_LIST = 'company_list',
  REDIRECT = 'redirect',
  ANSWER = 'answer',
  ERROR = 'error'
}

// Base response structure
export interface BaseApiResponse {
  type: ResponseType
  query: string
}

// Company interface
export interface Company {
  id?: string
  name: string
  description: string
  logo?: string
  website?: string
  stage?: string
  founded?: string
  team_size?: string
  tags?: string[]
  founders?: string
}

// 1. Company List Response
export interface CompanyListResponse extends BaseApiResponse {
  type: ResponseType.COMPANY_LIST
  data: {
    title: string
    description?: string
    companies: Company[]
    total_count: number
  }
}

// 2. Redirect Response
export interface RedirectResponse extends BaseApiResponse {
  type: ResponseType.REDIRECT
  data: {
    url: string
    title: string
    description?: string
  }
}

// 3. Answer Response
export interface AnswerResponse extends BaseApiResponse {
  type: ResponseType.ANSWER
  data: {
    title: string
    description?: string
    content?: string // Can be HTML or markdown
    companies?: Company[]
    sections?: Array<{
      heading: string
      content: string
    }>
    related_links?: Array<{
      title: string
      url: string
    }>
  }
}

// 4. Error Response
export interface ErrorResponse extends BaseApiResponse {
  type: ResponseType.ERROR
  data: {
    message: string
    code?: string
  }
}

// Union type for all possible responses
export type SearchChatResponse = 
  | CompanyListResponse 
  | RedirectResponse 
  | AnswerResponse 
  | ErrorResponse

