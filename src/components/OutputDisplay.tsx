'use client'
import { useState } from 'react'

interface Props { content: string; error: string }

export default function OutputDisplay({ content, error }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (error) return (
    <div style={{ padding: 16, borderRadius: 10, background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c', fontSize: 13 }}>
      ⚠️ {error}
    </div>
  )

  if (!content) return (
    <div style={{ border: '1.5px dashed #ddd5c0', borderRadius: 12, padding: '48px 24px', textAlign: 'center' }}>
      <div style={{ fontSize: 24, color: '#ddd5c0', marginBottom: 10 }}>✦</div>
      <div style={{ fontSize: 13, fontWeight: 300, color: '#b8a88a' }}>Il tuo copy apparirà qui</div>
    </div>
  )

  return (
    <div style={{ background: '#fdf8ef', border: '1px solid #e8d9b0', borderRadius: 12, padding: 20 }}>
      <pre style={{ whiteSpace: 'pre-wrap', fontSize: 13, color: '#1a1714', fontFamily: 'Fira Sans, sans-serif', lineHeight: 1.8, fontWeight: 300 }}>
        {content}
      </pre>
      <button
        onClick={handleCopy}
        style={{
          marginTop: 16,
          padding: '8px 16px',
          borderRadius: 8,
          border: '1px solid #ddd5c0',
          background: '#fff',
          fontSize: 12,
          color: copied ? '#c4882a' : '#8c7e6a',
          cursor: 'pointer',
          fontFamily: 'Fira Sans, sans-serif',
          transition: 'all 0.2s',
        }}
      >
        {copied ? '✓ Copiato!' : '⎘  Copia testo'}
      </button>
    </div>
  )
}