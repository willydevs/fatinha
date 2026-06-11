import { useState, useEffect } from 'react'
import { useReveal } from '../hooks/useReveal'
import { galeriaItems, imgMagnoliaGuto } from '../assets/images'

const INSTAGRAM_FEED_ID = '' // ← cole aqui o Feed ID do behold.so após conectar o Instagram

const filters = [
  { key: 'all',       label: 'Todos'      },
  { key: 'casamento', label: 'Casamentos' },
  { key: 'debutante', label: 'Debutantes' },
  { key: 'evento',    label: 'Eventos'    },
]

function PageHero() {
  return (
    <section className="relative">
      <div
        className="relative flex items-center justify-center h-[440px] md:h-[520px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imgMagnoliaGuto})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/72" />
        <div className="relative z-10 text-center text-white px-6 pt-[78px] lg:pt-[92px]">
          <p className="section-label mb-5 text-primary">Nosso trabalho</p>
          <h1 className="font-cormorant font-light text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.1]">
            Galeria
          </h1>
          <div className="flex items-center justify-center gap-5 mt-5">
            <div className="w-12 h-px bg-primary/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-primary" />
            <div className="w-12 h-px bg-primary/60" />
          </div>
        </div>
      </div>
    </section>
  )
}

function Lightbox({ item, onClose }) {
  useEffect(() => {
    const handler = e => { if (e.key === 'Escape') onClose() }
    window.addEventListener('keydown', handler)
    return () => window.removeEventListener('keydown', handler)
  }, [onClose])

  if (!item) return null
  return (
    <div
      className="fixed inset-0 z-[80] bg-black/92 flex items-center justify-center p-4"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[90vh] w-full"
        onClick={e => e.stopPropagation()}
      >
        <img
          src={item.src}
          alt={item.label}
          className="w-full h-full object-contain max-h-[80vh]"
        />
        <div className="mt-4 text-center">
          <p className="font-cormorant font-light text-white text-xl">{item.label}</p>
          <p className="font-montserrat text-[9px] tracking-[0.3em] text-primary uppercase mt-1">
            {item.cat === 'casamento' ? 'Casamento' : item.cat === 'debutante' ? 'Debutante' : 'Evento'}
          </p>
        </div>
        <button
          onClick={onClose}
          aria-label="Fechar"
          className="absolute -top-4 -right-4 w-10 h-10 bg-primary flex items-center justify-center text-white hover:bg-primary/80 transition-colors duration-300"
        >
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M1 1L13 13M13 1L1 13"/>
          </svg>
        </button>
      </div>
    </div>
  )
}

function PortfolioTab() {
  const [filter, setFilter] = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const headerRef = useReveal(0.15)

  const visible = filter === 'all'
    ? galeriaItems
    : galeriaItems.filter(i => i.cat === filter)

  return (
    <>
      <div ref={headerRef} className="reveal text-center mb-12">
        <p className="section-label mb-5">Portfólio</p>
        <h2 className="font-cormorant font-light text-[clamp(2.2rem,4.5vw,3.6rem)] text-charcoal leading-[1.15]">
          Memórias que<br />
          <em className="font-playfair italic text-primary">realizamos juntos</em>
        </h2>
      </div>

      {/* Filters */}
      <div className="flex flex-wrap items-center justify-center gap-3 mb-12">
        {filters.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            className={`font-montserrat text-[9.5px] tracking-[0.28em] uppercase px-6 py-2.5 border transition-all duration-300 ${
              filter === f.key
                ? 'bg-primary border-primary text-white'
                : 'border-charcoal/25 text-taupe hover:border-primary hover:text-primary'
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
        {visible.map((item, i) => (
          <div
            key={`${item.label}-${i}`}
            className="gallery-item relative overflow-hidden aspect-square cursor-pointer group"
            onClick={() => setLightbox(item)}
            style={{ animation: 'fadeInUp 0.5s ease both', animationDelay: `${i * 0.04}s` }}
          >
            <img
              src={item.src}
              alt={item.label}
              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.07]"
            />
            <div className="gallery-overlay absolute inset-0 bg-black/52 flex flex-col items-center justify-center gap-2 p-3">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" stroke="white" strokeWidth="1.2">
                <circle cx="11" cy="11" r="9"/>
                <path d="M8 11h6M11 8v6" strokeLinecap="round"/>
              </svg>
              <p className="font-cormorant font-light text-white text-center text-[1rem] leading-tight">
                {item.label}
              </p>
              <p className="font-montserrat text-[7.5px] tracking-[0.3em] text-primary uppercase">
                {item.cat === 'casamento' ? 'Casamento' : item.cat === 'debutante' ? 'Debutante' : 'Evento'}
              </p>
            </div>
            <div className="absolute top-2 left-2 w-5 h-5 border-t border-l border-primary/0 group-hover:border-primary/70 transition-colors duration-500" />
            <div className="absolute bottom-2 right-2 w-5 h-5 border-b border-r border-primary/0 group-hover:border-primary/70 transition-colors duration-500" />
          </div>
        ))}
      </div>

      <p className="text-center font-montserrat text-[10px] tracking-[0.25em] text-taupe uppercase mt-10">
        {visible.length} {visible.length === 1 ? 'evento' : 'eventos'} encontrados
      </p>

      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
    </>
  )
}

function InstagramTab() {
  const headerRef = useReveal(0.15)

  useEffect(() => {
    if (!INSTAGRAM_FEED_ID) return
    if (document.querySelector('script[src="https://w.behold.so/widget.js"]')) return
    const script = document.createElement('script')
    script.src = 'https://w.behold.so/widget.js'
    script.type = 'module'
    document.head.appendChild(script)
  }, [])

  return (
    <>
      <div ref={headerRef} className="reveal text-center mb-12">
        <p className="section-label mb-5">Instagram</p>
        <h2 className="font-cormorant font-light text-[clamp(2.2rem,4.5vw,3.6rem)] text-charcoal leading-[1.15]">
          Acompanhe no<br />
          <em className="font-playfair italic text-primary">@fatinhaccerimonial</em>
        </h2>
      </div>

      {INSTAGRAM_FEED_ID ? (
        /* Feed ao vivo via behold.so */
        <div className="w-full">
          {/* eslint-disable-next-line react/no-unknown-property */}
          <behold-widget feed-id={INSTAGRAM_FEED_ID} />
        </div>
      ) : (
        /* Placeholder enquanto o feed ID não está configurado */
        <div className="flex flex-col items-center gap-8 py-16">
          <div className="w-20 h-20 rounded-full bg-gradient-to-tr from-yellow-400 via-pink-500 to-purple-600 flex items-center justify-center">
            <svg width="36" height="36" viewBox="0 0 24 24" fill="white">
              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
            </svg>
          </div>

          <div className="text-center max-w-md">
            <p className="font-cormorant text-[1.4rem] text-charcoal mb-3">Feed do Instagram</p>
            <p className="font-dm font-light text-[14px] text-taupe leading-relaxed mb-6">
              Para ativar o feed ao vivo, acesse{' '}
              <a href="https://behold.so" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                behold.so
              </a>
              , conecte o Instagram <strong>@fatinhaccerimonial</strong> e cole o Feed ID no arquivo{' '}
              <code className="text-[12px] bg-charcoal/8 px-1.5 py-0.5 rounded">Galeria.jsx</code>{' '}
              na variável <code className="text-[12px] bg-charcoal/8 px-1.5 py-0.5 rounded">INSTAGRAM_FEED_ID</code>.
            </p>
            <a
              href="https://www.instagram.com/fatinhaccerimonial/"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold inline-flex items-center gap-2"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Ver no Instagram
            </a>
          </div>
        </div>
      )}
    </>
  )
}

export default function Galeria() {
  const [tab, setTab] = useState('portfolio')

  return (
    <>
      <PageHero />

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Tab switcher */}
          <div className="flex items-center justify-center gap-1 mb-14">
            <button
              onClick={() => setTab('portfolio')}
              className={`flex items-center gap-2 px-8 py-3 font-montserrat text-[9.5px] tracking-[0.28em] uppercase transition-all duration-300 ${
                tab === 'portfolio'
                  ? 'bg-charcoal text-white'
                  : 'bg-transparent border border-charcoal/25 text-taupe hover:border-primary hover:text-primary'
              }`}
            >
              <svg width="13" height="13" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.4">
                <rect x="1" y="1" width="6" height="6"/><rect x="9" y="1" width="6" height="6"/>
                <rect x="1" y="9" width="6" height="6"/><rect x="9" y="9" width="6" height="6"/>
              </svg>
              Portfólio
            </button>
            <button
              onClick={() => setTab('instagram')}
              className={`flex items-center gap-2 px-8 py-3 font-montserrat text-[9.5px] tracking-[0.28em] uppercase transition-all duration-300 ${
                tab === 'instagram'
                  ? 'bg-charcoal text-white'
                  : 'bg-transparent border border-charcoal/25 text-taupe hover:border-primary hover:text-primary'
              }`}
            >
              <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
              Instagram
            </button>
          </div>

          {tab === 'portfolio' ? <PortfolioTab /> : <InstagramTab />}

        </div>
      </section>
    </>
  )
}
