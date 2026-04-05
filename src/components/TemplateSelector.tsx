import { Template } from "@/types";
import { templates } from "@/lib/templates";

interface Props{
    selected: Template
    onSelect: (template:Template) => void
}

export default function TemplateSelector({ selected,onSelect}:Props){
    return(
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
      {templates.map(template => (
        <button
          key={template.id}
          onClick={() => onSelect(template)}
          className={`p-4 rounded-xl border-2 text-left transition-all duration-200 ${
            selected.id === template.id
              ? 'glass-accent p-4 text-left rounded-xl transition-all'
              : 'glass-accent p-4 text-left rounded-xl hover:border-violet-500/30'
          }`}
        >
          <div className="font-semibold text-sm text-white">{template.label}</div>
          <div className="text-xs mt-1 text-white/40">{template.description}</div>
        </button>
      ))}
    </div>
  )
}