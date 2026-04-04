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
      <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-sm">
        ⚠️ {error}
      </div>
    )
  }

  if (!content) {
    return (
      <div className="p-8 border-2 border-dashed border-gray-200 rounded-xl text-center text-gray-400">
        <div className="text-4xl mb-2"></div>
        <div className="text-sm">Il tuo copy apparirà qui</div>
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
        className="mt-4 px-4 py-2 bg-white border border-gray-300 hover:border-violet-400 text-sm rounded-lg transition-all"
      >
        {copied ? 'Copiato!' : 'Copia testo'}
      </button>
    </div>
  )
}