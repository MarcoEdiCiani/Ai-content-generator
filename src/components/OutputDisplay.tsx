import { useState } from 'react'

interface Props {
  content: string
  error: string
}

export default function OutputDisplay({ content, error }: Props) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(content)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  if (error) {
    return (
      <div className="glass-accent p-5">
        ⚠️ {error}
      </div>
    )
  }

  if (!content) {
    return (
      <div className="text-white/80 text-sm leading-relaxed whitespace-pre-wrap font-dm">
        <div className="text-4xl mb-2"></div>
        <div className="text-sm">Il tuo testo apparirà qui</div>
      </div>
    )
  }

  return (
    <div className="relative p-5 bg-gray-50 border border-gray-200 rounded-xl">
      <pre className="whitespace-pre-wrap text-sm text-gray-800 font-sans leading-relaxed">
        {content}
      </pre>
      <button
        onClick={handleCopy}
        className="mt-4 px-4 py-2 glass text-white/60 text-sm rounded-xl hover:text-white transition-all"
      >
        {copied ? 'Copiato!' : 'Copia testo'}
      </button>
    </div>
  )
}