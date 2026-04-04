'use client'

import { useState } from 'react'
import { Template } from '@/types'
import { templates } from '@/lib/templates'
import TemplateSelector from '@/components/TemplateSelector'
import ContentForm from '@/components/ContentForm'
import OutputDisplay from '@/components/OutputDisplay'
import HomeSection from '@/components/HomeSection'

export default function Home() {
  const [selectedTemplate, setSelectedTemplate] = useState<Template>(templates[0])
  const [fields, setFields] = useState<Record<string, string>>({})
  const [tone, setTone] = useState('professionale')
  const [loading, setLoading] = useState(false)
  const [content, setContent] = useState('')
  const [error, setError] = useState('')

  const handleTemplateSelect = (template: Template) => {
    setSelectedTemplate(template)
    setFields({})
    setContent('')
    setError('')
  }

  const handleFieldChange = (name: string, value: string) => {
    setFields(prev => ({ ...prev, [name]: value }))
  }

  const handleGenerate = async () => {
    setLoading(true)
    setContent('')
    setError('')

    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          templateId: selectedTemplate.id,
          fields,
          tone,
        }),
      })

      const data = await res.json()

      if (data.error) {
        setError(data.error)
      } else {
        setContent(data.content)
      }
    } catch {
      setError('Errore di connessione. Riprova.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">

        {/* Header */}
        <HomeSection/>

        {/* Template Selector */}
        <section className="bg-white rounded-lg p-5 mb-6 border-gray-200">
          <h2 className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-3">
            Scegli il tipo di contenuto
          </h2>
          <TemplateSelector
            selected={selectedTemplate}
            onSelect={handleTemplateSelect}
          />
        </section>

        {/* Form + Output */}
        <section className="grid md:grid-cols-2 gap-5">
          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <h2 className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-3">
              Inserisci i dettagli
            </h2>
            <ContentForm
              template={selectedTemplate}
              fields={fields}
              tone={tone}
              loading={loading}
              onFieldChange={handleFieldChange}
              onToneChange={setTone}
              onSubmit={handleGenerate}
            />
          </div>

          <div className="bg-white rounded-lg p-5 border border-gray-200">
            <h2 className="text-xs font-medium text-blue-500 uppercase tracking-wide mb-4">
              Contenuto generato
            </h2>
            <OutputDisplay content={content} error={error} />
          </div>
        </section>

        <footer className="text-center mt-10 text-gray-400 text-xs">
          &copy; 2026 MAE.DEV
        </footer>

      </div>
    </main>
  )
}