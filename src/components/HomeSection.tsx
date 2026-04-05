
export default function HomeSection(){
    return (
    <div className="relative overflow-hidden text-center"
      style={{ background: 'linear-gradient(160deg, #fffbf0 0%, #fff8e6 50%, #fef3c7 100%)', borderBottom: '1px solid #f0e4c0' }}>

      {/* Orbs */}
      <div className="pointer-events-none absolute -top-24 -left-20 w-[400px] h-[400px] rounded-full opacity-30"
        style={{ background: 'radial-gradient(circle, #fbbf24, transparent 70%)', filter: 'blur(80px)' }} />
      <div className="pointer-events-none absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, #f59e0b, transparent 70%)', filter: 'blur(70px)' }} />

      {/* Dot grid */}
      <div className="pointer-events-none absolute inset-0"
        style={{ backgroundImage: 'radial-gradient(circle, rgba(251,191,36,0.15) 1px, transparent 1px)', backgroundSize: '28px 28px' }} />

      <div className="relative z-10 px-6 pt-14 pb-16">

        {/* Badge */}
        <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 text-xs font-medium tracking-widest uppercase"
          style={{ background: 'rgba(251,191,36,0.2)', border: '1px solid rgba(245,158,11,0.35)', color: '#92400e' }}>
          <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
          AI-Powered Marketing Tool
        </div>

        {/* Headline */}
        <h1 className="font-[Syne] text-5xl md:text-6xl font-extrabold tracking-tight leading-tight text-stone-900 mb-4">
          Copy che{' '}
          <span style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
            converte
          </span>
          ,<br />in 5 secondi.
        </h1>

        <p className="text-stone-500 font-light text-lg max-w-md mx-auto leading-relaxed mb-12">
          Scegli un template, inserisci i dettagli.<br />
          Gemini AI genera copy professionale istantaneamente.
        </p>

        {/* Flow steps */}
        <div className="flex items-center justify-center mb-10">
          {[
            { n: '1', icon: '📋', title: 'Template', desc: 'Scegli tipo e compila' },
            { n: '2', icon: '✦', title: 'Gemini AI', desc: 'Analizza e genera', active: true },
            { n: '3', icon: '⚡', title: 'Output', desc: 'Copia e pubblica' },
          ].map((step, i) => (
            <div key={step.n} className="flex items-center">
              <div className="relative w-44 text-center rounded-2xl px-4 py-5 transition-all duration-200"
                style={{
                  background: step.active ? 'rgba(251,191,36,0.15)' : 'rgba(255,255,255,0.7)',
                  border: step.active ? '1px solid rgba(245,158,11,0.45)' : '1px solid rgba(245,158,11,0.2)',
                  backdropFilter: 'blur(12px)',
                  boxShadow: step.active ? '0 4px 24px rgba(245,158,11,0.2)' : '0 2px 12px rgba(0,0,0,0.04)',
                }}>
                <div className="absolute -top-2.5 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-amber-400 text-white text-[10px] font-bold flex items-center justify-center font-[Syne]">
                  {step.n}
                </div>
                <div className="text-2xl mb-2">{step.icon}</div>
                <div className="text-sm font-bold text-stone-800 mb-1 font-[Syne]">{step.title}</div>
                <div className="text-[11px] text-stone-400 leading-relaxed">{step.desc}</div>
              </div>

              {i < 2 && (
                <div className="w-8 flex-shrink-0 relative flex items-center justify-center">
                  <div className="absolute w-full h-px" style={{ background: 'linear-gradient(90deg, rgba(245,158,11,0.3), rgba(245,158,11,0.7))' }} />
                  <div className="w-2 h-2 border-t-2 border-r-2 border-amber-400 rotate-45 bg-amber-50 z-10" />
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Pills */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {['Social Post', 'Email Subject', 'Descrizione Prodotto', 'Ad Copy', 'Blog Intro'].map(t => (
            <span key={t} className="px-4 py-1.5 rounded-full text-xs transition-all"
              style={{ border: '1px solid #e5d9b6', background: 'rgba(255,255,255,0.6)', color: '#92400e' }}>
              {t}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div className="flex justify-center pt-8" style={{ borderTop: '1px solid #f0e4c0' }}>
          {[
            { v: '5', l: 'template' },
            { v: '<5s', l: 'generazione' },
            { v: '∞', l: 'gratis con Gemini' },
          ].map((s, i) => (
            <div key={s.l} className="flex-1 text-center px-8"
              style={{ borderRight: i < 2 ? '1px solid #f0e4c0' : 'none' }}>
              <div className="text-2xl font-extrabold font-[Syne] mb-1"
                style={{ background: 'linear-gradient(135deg,#f59e0b,#d97706)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                {s.v}
              </div>
              <div className="text-xs text-stone-400">{s.l}</div>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
    
}