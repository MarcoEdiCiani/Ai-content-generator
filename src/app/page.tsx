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
    <main style={{ minHeight: '100vh', background: '#faf9f6' }}>
      <HeroSection />
      <div style={{ maxWidth: 860, margin: '0 auto', padding: '48px 24px' }}>

        {/* Template selector */}
        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b8a88a', marginBottom: 16 }}>
          Tipo di contenuto
        </p>
        <TemplateSelector selected={selectedTemplate} onSelect={handleTemplateSelect} />

        {/* Form + Output */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginTop: 32 }}>
          <div style={{ background: '#fff', border: '1px solid #ece8df', borderRadius: 16, padding: 28 }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b8a88a', marginBottom: 24 }}>
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
          <div style={{ background: '#fff', border: '1px solid #ece8df', borderRadius: 16, padding: 28 }}>
            <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.18em', textTransform: 'uppercase', color: '#b8a88a', marginBottom: 24 }}>
              Output generato
            </p>
            <OutputDisplay content={content} error={error} />
          </div>
        </div>

      </div>
    </main>
  )
}