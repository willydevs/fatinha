import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { heroSlide1, heroSlide2, heroSlide3 } from '../assets/images'

const slides = [
  {
    image: heroSlide1,
    label: 'FATINHA CASTRO  ·  ASSESSORIA E CERIMONIAL',
    line1: 'A tarefa de sonhar',
    line2: 'é toda sua.',
    line3: 'A de realizar é toda nossa.',
    cta: { text: 'REALIZE SEU SONHO', path: '/contato' },
  },
  {
    image: heroSlide2,
    label: 'CASAMENTOS  ·  DEBUTANTES  ·  EVENTOS',
    line1: 'Nos detalhes',
    line2: 'está a felicidade.',
    line3: '',
    cta: { text: 'CONHEÇA NOSSO TRABALHO', path: '/galeria' },
  },
  {
    image: heroSlide3,
    label: 'FATINHA CASTRO  ·  ASSESSORIA E CERIMONIAL',
    line1: 'Preparados para a melhor',
    line2: 'festa de suas vidas?',
    line3: 'Já temos o mais importante: o amor.',
    extra: 'Agora só falta vocês!',
    cta: { text: 'FALE CONOSCO', path: '/contato' },
  },
]

const INTERVAL = 5800

export default function Hero() {
  const [current, setCurrent]   = useState(0)
  const [scrollY, setScrollY]   = useState(0)

  // Parallax
  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Auto-advance
  const next = useCallback(() => setCurrent(c => (c + 1) % slides.length), [])
  useEffect(() => {
    const id = setInterval(next, INTERVAL)
    return () => clearInterval(id)
  }, [next])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">

      {/* ── Background slides ───────────────────────────────────── */}
      {slides.map((slide, i) => (
        <div
          key={i}
          className="absolute inset-0 transition-opacity duration-[1200ms] ease-in-out"
          style={{ opacity: i === current ? 1 : 0 }}
        >
          <div
            className="absolute inset-[-8%] bg-cover bg-center will-change-transform"
            style={{
              backgroundImage: `url(${slide.image})`,
              transform: `translateY(${scrollY * 0.25}px)`,
            }}
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 hero-overlay z-[1]" />

      {/* ── Text content ────────────────────────────────────────── */}
      <div className="absolute inset-0 z-[2] flex flex-col items-center justify-center px-6 text-center">
        {slides.map((slide, i) => (
          <div
            key={i}
            className={`absolute inset-0 flex flex-col items-center justify-center px-6 text-center transition-opacity duration-[900ms] ease-in-out ${
              i === current ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            {/* Re-mount text to replay animation on slide change */}
            {i === current && (
              <SlideContent slide={slide} />
            )}
          </div>
        ))}
      </div>

      {/* ── Dot indicators ──────────────────────────────────────── */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-[3] flex items-center gap-3">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
            className={`slide-dot ${i === current ? 'active' : ''}`}
          />
        ))}
      </div>

      {/* ── Bounce arrow ────────────────────────────────────────── */}
      <div
        className="absolute bottom-[60px] left-1/2 z-[3] animate-[bounce-arrow_2.2s_ease-in-out_infinite]"
        style={{ transform: 'translateX(-50%)' }}
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
          className="text-white/60"
        >
          <path
            d="M5 7L10 13L15 7"
            stroke="currentColor"
            strokeWidth="1.2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </section>
  )
}

function SlideContent({ slide }) {
  return (
    <div className="flex flex-col items-center gap-0 text-white max-w-3xl mx-auto">

      {/* Label */}
      <p
        className="font-montserrat text-[9px] tracking-[0.5em] uppercase text-white/72 mb-7"
        style={{ animation: 'fadeIn 0.7s ease both', animationDelay: '0.05s' }}
      >
        {slide.label}
      </p>

      {/* Top golden line */}
      <div
        className="w-16 h-px bg-primary mb-7"
        style={{ animation: 'fadeIn 0.6s ease both', animationDelay: '0.15s' }}
      />

      {/* Main title */}
      <h1
        className="font-cormorant font-light text-[clamp(2.6rem,7vw,6rem)] leading-[1.12] text-center"
        style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) both', animationDelay: '0.2s' }}
      >
        {slide.line1}
      </h1>

      <h1
        className="font-cormorant font-light text-[clamp(2.6rem,7vw,6rem)] leading-[1.12] text-center text-primary"
        style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) both', animationDelay: '0.35s' }}
      >
        {slide.line2}
      </h1>

      {slide.line3 && (
        <p
          className="font-playfair italic text-[clamp(1.1rem,2.5vw,1.6rem)] text-white/82 mt-3 leading-snug"
          style={{ animation: 'fadeInUp 0.8s cubic-bezier(0.16,1,0.3,1) both', animationDelay: '0.5s' }}
        >
          {slide.line3}
        </p>
      )}

      {slide.extra && (
        <p
          className="font-playfair italic text-[clamp(1rem,2.2vw,1.4rem)] text-white/70 mt-1"
          style={{ animation: 'fadeInUp 0.7s ease both', animationDelay: '0.65s' }}
        >
          {slide.extra}
        </p>
      )}

      {/* Bottom golden line */}
      <div
        className="w-16 h-px bg-primary mt-7 mb-8"
        style={{ animation: 'fadeIn 0.6s ease both', animationDelay: '0.6s' }}
      />

      {/* CTA */}
      <Link
        to={slide.cta.path}
        className="btn-ghost"
        style={{ animation: 'fadeInUp 0.7s ease both', animationDelay: '0.75s' }}
      >
        {slide.cta.text}
      </Link>
    </div>
  )
}
