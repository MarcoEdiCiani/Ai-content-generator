import { Template } from '@/types'
import { templates } from '@/lib/templates'

interface Props {
  selected: Template
  onSelect: (template: Template) => void
}

export default function TemplateSelector({ selected, onSelect }: Props) {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {templates.map(template => (
        <button key={template.id} onClick={() => onSelect(template)}
          className="p-4 rounded-2xl text-left transition-all duration-200"
          style={{
            border: selected.id === template.id ? '1.5px solid #f59e0b' : '1.5px solid #f0e4c0',
            background: selected.id === template.id ? '#fffbf0' : '#ffffff',
            boxShadow: selected.id === template.id ? '0 4px 20px rgba(245,158,11,0.15)' : 'none',
          }}>
          <div className="text-sm font-semibold text-stone-800 mb-1">{template.label}</div>
          <div className="text-xs text-stone-400">{template.description}</div>
        </button>
      ))}
    </div>
  )
}