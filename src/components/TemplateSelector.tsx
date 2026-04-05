import { Template } from '@/types'
import { templates } from '@/lib/templates'

interface Props {
  selected: Template
  onSelect: (template: Template) => void
}

export default function TemplateSelector({ selected, onSelect }: Props) {
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 8, marginBottom: 8 }}>
      {templates.map(template => (
        <button
          key={template.id}
          onClick={() => onSelect(template)}
          style={{
            padding: '14px 16px',
            borderRadius: 12,
            border: selected.id === template.id ? '1.5px solid #c4882a' : '1px solid #ece8df',
            background: selected.id === template.id ? '#fdf8ef' : '#fff',
            cursor: 'pointer',
            textAlign: 'left',
            transition: 'all 0.2s',
            boxShadow: selected.id === template.id ? '0 4px 16px rgba(196,136,42,0.12)' : 'none',
          }}
        >
          <div style={{ fontSize: 13, fontWeight: 500, color: '#1a1714', marginBottom: 3 }}>
            {template.label}
          </div>
          <div style={{ fontSize: 11, color: '#b8a88a' }}>
            {template.description}
          </div>
        </button>
      ))}
    </div>
  )
}