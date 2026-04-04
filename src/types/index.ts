export type TemplateId=
 |'social-post'
 |'email-subject'
 |'product-description'
 |'ad-copy'
 |'blog-intro'

 export interface Template{
    id: TemplateId
    label : string
    description: string
    fields: Field[]
    systemPrompt: string
 }

 export interface Field{
    name:string
    label:string
    placeholder:string
    type: 'text'|'textarea'
 }

 export interface GenerateRequest{
    templateId: TemplateId
    fields: Record<string,string>
    tone: string
 }

 export interface GenerateResponse{
    content:string
    error?:string

 }