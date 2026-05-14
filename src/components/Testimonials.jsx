import { useState, useEffect, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    quote: 'A Fatinha realizou o casamento dos nossos sonhos. Cada detalhe foi executado com uma perfeição que nos deixou sem palavras. No dia da cerimônia, só tivemos que nos preocupar em nos amar.',
    name: 'Alina & Chico',
    role: 'Casamento',
    stars: 5,
  },
  {
    quote: 'Confiei minha festa de 15 anos nas mãos da Fatinha e ela superou todas as minhas expectativas. Foi a noite mais linda da minha vida. Cada convidado comentou o quanto estava especial.',
    name: 'Bruninha',
    role: 'Festa de Debutante',
    stars: 5,
  },
  {
    quote: 'Minha festa de 50 anos foi um sonho! A Fatinha organizou tudo com tanto carinho e profissionalismo que parecia que ela estava planejando o evento mais importante da própria vida.',
    name: 'Sandra M.',
    role: 'Aniversário de 50 anos',
    stars: 5,
  },
  {
    quote: 'Do planejamento ao casamento, a Fatinha foi nossa parceira em tudo. Não é só uma assessora — é alguém que coloca o coração em cada detalhe do seu grande dia. Recomendo de olhos fechados.',
    name: 'Mona & Maycon',
    role: 'Casamento',
    stars: 5,
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)
  const headerRef = useReveal(0.15)

  const next = useCallback(() => setCurrent(c => (c + 1) % testimonials.length), [])
  const prev = useCallback(() => setCurrent(c => (c - 1 + testimonials.length) % testimonials.length), [])

  useEffect(() => {
    const id = setInterval(next, 6500)
    return () => clearInterval(id)
  }, [next])

  const t = testimonials[current]

  return (
    <section className="bg-accent py-24 lg:py-32 overflow-hidden">
      <div className="max-w-5xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-14">
          <p className="section-label mb-5">Depoimentos</p>
          <h2 className="font-cormorant font-light text-[clamp(2.2rem,4.5vw,3.8rem)] text-charcoal leading-[1.15]">
            O que dizem sobre nós
          </h2>
        </div>

        {/* Testimonial card */}
        <div className="relative">

          {/* Large quote mark */}
          <span
            className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6 font-cormorant text-[7rem] leading-none text-primary/12 select-none pointer-events-none"
            aria-hidden="true"
          >
            "
          </span>

          <div
            key={current}
            className="bg-white shadow-[0_8px_60px_rgba(0,0,0,0.07)] p-10 lg:p-14 text-center"
            style={{ animation: 'fadeIn 0.6s ease both' }}
          >
            {/* Stars */}
            <div className="flex justify-center gap-1.5 mb-7">
              {Array.from({ length: t.stars }).map((_, i) => (
                <svg key={i} width="14" height="14" viewBox="0 0 14 14" fill="#C9A96E">
                  <path d="M7 0L8.56 5.12L14 5.15L9.76 8.32L11.35 13.43L7 10.24L2.65 13.43L4.24 8.32L0 5.15L5.44 5.12L7 0Z"/>
                </svg>
              ))}
            </div>

            <p className="font-cormorant font-light text-[clamp(1.2rem,2.5vw,1.55rem)] text-charcoal leading-[1.7] italic mb-9 max-w-3xl mx-auto">
              "{t.quote}"
            </p>

            <div className="flex items-center justify-center gap-4">
              <div className="w-10 h-px bg-primary/40" />
              <div className="text-center">
                <p className="font-cormorant text-[1.2rem] font-light tracking-wide text-charcoal">
                  {t.name}
                </p>
                <p className="font-montserrat text-[9px] tracking-[0.3em] text-primary uppercase mt-0.5">
                  {t.role}
                </p>
              </div>
              <div className="w-10 h-px bg-primary/40" />
            </div>
          </div>

          {/* Navigation arrows */}
          <div className="flex justify-center items-center gap-5 mt-8">
            <button
              onClick={prev}
              aria-label="Anterior"
              className="w-10 h-10 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M10 3L5 8L10 13" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>

            {/* Dots */}
            <div className="flex gap-2.5">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  aria-label={`Depoimento ${i + 1}`}
                  className={`w-[7px] h-[7px] rounded-full transition-all duration-300 ${
                    i === current ? 'bg-primary scale-125' : 'bg-primary/30'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              aria-label="Próximo"
              className="w-10 h-10 border border-primary/40 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-colors duration-300"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.2">
                <path d="M6 3L11 8L6 13" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
