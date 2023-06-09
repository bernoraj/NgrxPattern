export interface Jobs {
    [x: string]: any
    data: Daum[]
    links: Links
    meta: Meta
  }
  
  export interface Daum {
    slug: string
    company_name: string
    title: string
    description: string
    remote: boolean
    url: string
    tags: string[]
    job_types: string[]
    location: string
    created_at: number
  }
  
  export interface Links {
    first: string
    last: any
    prev: any
    next: string
  }
  
  export interface Meta {
    current_page: number
    from: number
    path: string
    per_page: number
    to: number
    terms: string
    info: string
  }