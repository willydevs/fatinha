import { useState } from 'react'
import { useReveal } from '../hooks/useReveal'
import { galeriaItems, imgMagnoliaGuto } from '../assets/images'

const filters = [
  { key: 'all',       label: 'Todos' },
  { key: 'casamento', label: 'Casamentos' },
  { key: 'debutante', label: 'Debutantes' },
  { key: 'evento',    label: 'Eventos' },
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

export default function Galeria() {
  const [filter, setFilter]     = useState('all')
  const [lightbox, setLightbox] = useState(null)
  const headerRef = useReveal(0.15)

  const visible = filter === 'all'
    ? galeriaItems
    : galeriaItems.filter(i => i.cat === filter)

  return (
    <>
      <PageHero />

      <section className="bg-cream py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">

          {/* Header */}
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
                style={{ animation: `fadeInUp 0.6s ease both`, animationDelay: `${i * 0.06}s` }}
              >
                <img
                  src={item.src}
                  alt={item.label}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
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

          {/* Count */}
          <p className="text-center font-montserrat text-[10px] tracking-[0.25em] text-taupe uppercase mt-10">
            {visible.length} {visible.length === 1 ? 'evento' : 'eventos'} encontrados
          </p>
        </div>
      </section>

      {/* Lightbox */}
      <Lightbox item={lightbox} onClose={() => setLightbox(null)} />
    </>
  )
}
