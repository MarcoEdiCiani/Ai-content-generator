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
              ? 'border-violet-500 bg-violet-50 text-violet-900'
              : 'border-gray-200 bg-white hover:border-violet-300 text-gray-700'
          }`}
        >
          <div className="font-semibold text-sm">{template.label}</div>
          <div className="text-xs mt-1 opacity-70">{template.description}</div>
        </button>
      ))}
    </div>
  )
}