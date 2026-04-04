import { Template } from "@/types";
import { tones } from "@/lib/templates";

interface Props {
    template: Template
    fields: Record<string,string>
    tone:string
    loading:boolean
    onFieldChange: (name:string, value:string)=> void
    onToneChange:(tone:string) => void
    onSubmit: ()=> void
}

export default function ContentForm({
  template, fields, tone, loading,
  onFieldChange, onToneChange, onSubmit
}: Props) {
  return (
    <div className="space-y-4">
      {template.fields.map(field => (
        <div key={field.name}>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            {field.label}
          </label>
          {field.type === 'textarea' ? (
            <textarea
              rows={3}
              placeholder={field.placeholder}
              value={fields[field.name] || ''}
              onChange={e => onFieldChange(field.name, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-black placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-violet-400 resize-none"
            />
          ) : (
            <input
              type="text"
              placeholder={field.placeholder}
              value={fields[field.name] || ''}
              onChange={e => onFieldChange(field.name, e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm text-black focus:outline-none focus:ring-2 focus:ring-violet-400"
            />
          )}
        </div>
      ))}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">Tono</label>
        <div className="flex flex-wrap gap-2">
          {tones.map(t => (
            <button
              key={t.value}
              onClick={() => onToneChange(t.value)}
              className={`px-3 py-1.5 rounded-full text-sm border transition-all ${
                tone === t.value
                  ? 'bg-blue-500 text-white border-blue-500'
                  : 'bg-white text-gray-600 border-gray-300 hover:border-blue-400'
              }`}
            >
              {t.label}
            </button>
          ))}
        </div>
      </div>

      <button
        onClick={onSubmit}
        disabled={loading}
        className="w-full py-3 bg-blue-600 hover:bg-gray-700 disabled:bg-violet-300 text-white font-semibold rounded-xl transition-all duration-200"
      >
        {loading ? 'Generazione in corso...' : ' Genera Copy'}
      </button>
    </div>
  )
}