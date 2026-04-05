export default function HomeSection() {
  return (
    <div style={{
      background: '#faf9f6',
      borderBottom: '1px solid #ece8df',
      padding: '72px 40px 80px',
      textAlign: 'center',
      position: 'relative',
      overflow: 'hidden',
    }}>

      {/* Glow sottile */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none',
        background: 'radial-gradient(ellipse 60% 40% at 50% 0%, rgba(196,136,42,0.07), transparent)',
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Eyebrow */}
        <p style={{ fontSize: 11, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#b8a88a', fontWeight: 400, marginBottom: 32 }}>
          Slogan da inventare
                  </p>

        {/* Headline */}
        <h1 style={{ fontFamily: 'Playfair Display, serif', fontSize: 58, fontWeight: 400, lineHeight: 1.1, color: '#1a1714', marginBottom: 20 }}>
          Crea i tuoi{' '}
          <em style={{ fontStyle: 'italic', color: '#c4882a' }}>messaggi</em>
          ,<br />in cinque secondi.
        </h1>

        {/* Subtitle */}
        <p style={{ fontSize: 17, fontWeight: 300, color: '#8c7e6a', maxWidth: 400, margin: '0 auto 64px', lineHeight: 1.8 }}>
          Scegli un template, descrivi il prodotto.<br />Il resto lo fa  l'AI.
        </p>

        {/* Flow editoriale */}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'flex-start', justifyContent: 'center', maxWidth: 560, margin: '0 auto 60px' }}>

          {/* Linea orizzontale */}
          <div style={{
            position: 'absolute', top: 28, left: '10%', right: '10%', height: 1,
            background: 'linear-gradient(90deg, transparent, #ddd5c0 20%, #ddd5c0 80%, transparent)',
          }} />

          {[
            { n: '01', title: 'Scrivi', desc: 'Scegli un template e descrivi il prodotto', italic: false },
            { n: '02', title: 'Genera', desc: 'Gemini elabora e scrive il copy', italic: true },
            { n: '03', title: 'Pubblica', desc: 'Copia il testo e usalo dove vuoi', italic: false },
          ].map((step) => (
            <div key={step.n} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 14 }}>
              <span style={{
                fontFamily: 'Playfair Display, serif',
                fontSize: 13,
                color: step.italic ? '#1a1714' : '#c4882a',
                background: '#faf9f6',
                padding: '22px 12px',
                position: 'relative',
                zIndex: 1,
                lineHeight: 1,
              }}>
                {step.n}
              </span>
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  fontFamily: 'Playfair Display, serif',
                  fontSize: 16,
                  fontStyle: step.italic ? 'italic' : 'normal',
                  color: '#1a1714',
                  marginBottom: 6,
                }}>
                  {step.title}
                </div>
                <div style={{ fontSize: 12, fontWeight: 300, color: '#a89880', lineHeight: 1.7, maxWidth: 130, margin: '0 auto' }}>
                  {step.desc}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Pills */}
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 8, marginBottom: 56 }}>
          {['Social Post', 'Email Subject', 'Descrizione Prodotto', 'Ad Copy', 'Blog Intro'].map(t => (
            <span key={t} style={{
              padding: '7px 20px', borderRadius: 999,
              border: '1px solid #ddd5c0', background: 'transparent',
              fontSize: 12, color: '#8c7e6a', fontFamily: 'Fira Sans, sans-serif',
            }}>
              {t}
            </span>
          ))}
        </div>

        {/* Stats */}
        <div style={{ display: 'flex', justifyContent: 'center', borderTop: '1px solid #ece8df', paddingTop: 40, maxWidth: 400, margin: '0 auto' }}>
          {[
            { v: '5', l: 'Template' },
            { v: '<5s', l: 'Generazione' },
            { v: '∞', l: 'Gratis' },
          ].map((s, i) => (
            <div key={s.l} style={{ flex: 1, textAlign: 'center', padding: '0 20px', borderRight: i < 2 ? '1px solid #ece8df' : 'none' }}>
              <span style={{ fontFamily: 'Playfair Display, serif', fontSize: 26, fontStyle: 'italic', color: '#c4882a', display: 'block', marginBottom: 5 }}>
                {s.v}
              </span>
              <span style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#b8a88a' }}>
                {s.l}
              </span>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}