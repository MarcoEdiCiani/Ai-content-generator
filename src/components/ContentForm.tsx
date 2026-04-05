import { Template } from '@/types'
import { tones } from '@/lib/templates'

interface Props {
  template: Template
  fields: Record<string, string>
  tone: string
  loading: boolean
  onFieldChange: (name: string, value: string) => void
  onToneChange: (tone: string) => void
  onSubmit: () => void
}

const inputStyle = {
  width: '100%',
  padding: '10px 14px',
  border: '1px solid #ddd5c0',
  borderRadius: 8,
  fontSize: 13,
  color: '#1a1714',
  background: '#faf9f6',
  fontFamily: 'Fira Sans, sans-serif',
  outline: 'none',
}

const labelStyle = {
  display: 'block',
  fontSize: 11,
  fontWeight: 500,
  letterSpacing: '0.1em',
  textTransform: 'uppercase' as const,
  color: '#b8a88a',
  marginBottom: 7,
}

export default function ContentForm({ template, fields, tone, loading, onFieldChange, onToneChange, onSubmit }: Props) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>

      {template.fields.map(field => (
        <div key={field.name}>
          <label style={labelStyle}>{field.label}</label>
          {field.type === 'textarea' ? (
            <textarea
              rows={3}
              placeholder={field.placeholder}
              value={fields[field.name] || ''}
              onChange={e => onFieldChange(field.name, e.target.value)}
              style={{ ...inputStyle, resize: 'none' }}
            />
          ) : (
            <input
              type="text"
              placeholder={field.placeholder}
              value={fields[field.name] || ''}
              onChange={e => onFieldChange(field.name, e.target.value)}
              style={inputStyle}
            />
          )}
        </div>
      ))}

      {/* Tono */}
      <div>
        <label style={labelStyle}>Tono</label>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6 }}>
          {tones.map(t => (
            <button
              key={t.value}
              onClick={() => onToneChange(t.value)}
              style={{
                padding: '6px 14px',
                borderRadius: 999,
                border: tone === t.value ? '1px solid #c4882a' : '1px solid #ddd5c0',
                background: tone === t.value ? '#c4882a' : '#faf9f6',
                color: tone === t.value ? '#fff' : '#8c7e6a',
                fontSize: 12,
                cursor: 'pointer',
                fontFamily: 'Fira Sans, sans-serif',
                transition: 'all 0.2s',
              }}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      {/* Bottone genera */}
      <button
        onClick={onSubmit}
        disabled={loading}
        style={{
          width: '100%',
          padding: '13px',
          borderRadius: 10,
          border: 'none',
          cursor: loading ? 'not-allowed' : 'pointer',
          fontSize: 14,
          fontWeight: 500,
          fontFamily: 'Fira Sans, sans-serif',
          background: loading ? '#d4c4a0' : '#c4882a',
          color: '#fff',
          boxShadow: loading ? 'none' : '0 4px 20px rgba(196,136,42,0.35)',
          transition: 'all 0.2s',
          letterSpacing: '0.02em',
        }}
      >
        {loading ? 'Generazione in corso...' : '✦  Genera Copy'}
      </button>

    </div>
  )
}