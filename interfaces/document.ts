export interface IDocument {
  slug: string
  author: string
  category: string
  title: string
  summary: string
  description: string

  subtitle?: string
  bibliography?: string[]
  references?: string[]
  possible_main_content?: boolean
}
