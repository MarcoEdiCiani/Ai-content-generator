'use client'
import { useState } from 'react'
import { Template } from '@/types'
import { templates } from '@/lib/templates'
import HeroSection from '@/components/HomeSection'
import TemplateSelector from '@/components/TemplateSelector'
import ContentForm from '@/components/ContentForm'
import OutputDisplay from '@/components/OutputDisplay'

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

  const handleGenerate = async () => {
    setLoading(true)
    setContent('')
    setError('')
    try {
      const res = await fetch('/api/generate', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ templateId: selectedTemplate.id, fields, tone }),
      })
      const data = await res.json()
      if (data.error) setError(data.error)
      else setContent(data.content)
    } catch {
      setError('Errore di connessione. Riprova.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <main className="min-h-screen bg-[#fafaf7]">
      <HeroSection />

      <div className="max-w-4xl mx-auto px-6 py-10">

        {/* Template selector */}
        <p className="text-[11px] font-semibold tracking-widest text-[#a8a29e] uppercase mb-4">
          Scegli il tipo di contenuto
        </p>
        <div className="mb-8">
          <TemplateSelector selected={selectedTemplate} onSelect={handleTemplateSelect} />
        </div>

        {/* Form + Output */}
        <div className="grid md:grid-cols-2 gap-5">
          <div className="glass-card p-6">
            <p className="text-[11px] font-semibold tracking-widest text-[#a8a29e] uppercase mb-5">
              Dettagli
            </p>
            <ContentForm
              template={selectedTemplate}
              fields={fields}
              tone={tone}
              loading={loading}
              onFieldChange={(name, value) => setFields(prev => ({ ...prev, [name]: value }))}
              onToneChange={setTone}
              onSubmit={handleGenerate}
            />
          </div>
          <div className="glass-card p-6">
            <p className="text-[11px] font-semibold tracking-widest text-[#a8a29e] uppercase mb-5">
              Output generato
            </p>
            <OutputDisplay content={content} error={error} />
          </div>
        </div>

      </div>
    </main>
  )
}