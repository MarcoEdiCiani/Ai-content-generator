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
    <div className="p-4 rounded-xl text-sm" style={{ background: '#fef2f2', border: '1px solid #fecaca', color: '#b91c1c' }}>
      ⚠️ {error}
    </div>
  )

  if (!content) return (
    <div className="rounded-2xl p-10 text-center" style={{ border: '1.5px dashed #e5d9b6' }}>
      <div className="text-3xl mb-3">✦</div>
      <div className="text-sm text-stone-400">Il tuo copy apparirà qui</div>
    </div>
  )

  return (
    <div className="rounded-2xl p-5" style={{ background: '#fffbf0', border: '1px solid #f0e4c0' }}>
      <pre className="whitespace-pre-wrap text-sm text-stone-700 font-sans leading-relaxed">{content}</pre>
      <button onClick={handleCopy}
        className="mt-4 px-4 py-2 rounded-xl text-sm transition-all"
        style={{ border: '1px solid #e5d9b6', background: '#fff', color: copied ? '#d97706' : '#78716c' }}>
        {copied ? '✓ Copiato!' : '⎘ Copia testo'}
      </button>
    </div>
  )
}