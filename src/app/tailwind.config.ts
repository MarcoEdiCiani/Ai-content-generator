import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        syne: ['Syne', 'sans-serif'],
        dm: ['DM Sans', 'sans-serif'],
      },
      colors: {
        // ⬇ ZONE COLORI — modifica qui per cambiare tutto il tema
        brand: {
          bg:      '#0a0a12',   // sfondo principale
          surface: '#ffffff08', // glassmorphism card
          border:  '#ffffff12', // bordi sottili
          accent:  '#7c3aed',   // viola principale
          accent2: '#0891b2',   // ciano secondario
          text:    '#ffffff',   // testo principale
          muted:   '#ffffff40', // testo secondario
        },
      },
      backgroundImage: {
        // ⬇ ZONE GRADIENTI
        'brand-gradient': 'linear-gradient(135deg, #a78bfa, #67e8f9)',
        'brand-bg':       'linear-gradient(135deg, #0a0a12 0%, #0d0d1f 50%, #0a0a12 100%)',
      },
      boxShadow: {
        'glass': '0 8px 32px rgba(0,0,0,0.3), inset 0 1px 0 rgba(255,255,255,0.08)',
        'glow':  '0 0 40px rgba(124,58,237,0.2)',
      },
    },
  },
  plugins: [],
}

export default config