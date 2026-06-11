import { useState, useEffect, useRef, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { fatinaPhoto1, fatinaPhoto2, fatinaPhoto3 } from '../assets/images'

const photos = [fatinaPhoto1, fatinaPhoto2, fatinaPhoto3]

function yearsActive() {
  const now = new Date()
  const y = now.getFullYear() - 2017
  return now.getMonth() >= 4 ? y : y - 1 // contagem completa a partir de maio
}

const stats = [
  { value: 140, suffix: '+', label: 'Eventos realizados' },
  { value: yearsActive(), suffix: '+', label: 'Anos de experiência' },
]

function Counter({ target, suffix, active }) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!active) return
    const duration = 1800
    const step = Math.ceil(target / (duration / 16))
    let current = 0
    const id = setInterval(() => {
      current = Math.min(current + step, target)
      setCount(current)
      if (current >= target) clearInterval(id)
    }, 16)
    return () => clearInterval(id)
  }, [active, target])

  return (
    <span className="counter-num text-[clamp(2.8rem,6vw,4.2rem)]">
      {count}{suffix}
    </span>
  )
}

export default function About() {
  const [statsActive, setStatsActive] = useState(false)
  const [photoIdx, setPhotoIdx] = useState(0)
  const statsRef = useRef(null)
  const imgRef   = useReveal(0.15)
  const txtRef   = useReveal(0.15, 150)

  const nextPhoto = useCallback(() => setPhotoIdx(i => (i + 1) % photos.length), [])

  useEffect(() => {
    const id = setInterval(nextPhoto, 5000)
    return () => clearInterval(id)
  }, [nextPhoto])

  useEffect(() => {
    const el = statsRef.current
    if (!el) return
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setStatsActive(true); obs.unobserve(el) } },
      { threshold: 0.3 }
    )
    obs.observe(el)
    return () => obs.disconnect()
  }, [])

  return (
    <section className="bg-white py-24 lg:py-36 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Main content — 2 columns */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

          {/* Photo slideshow */}
          <div ref={imgRef} className="reveal-left relative">
            <div className="gold-frame">
              <div className="relative overflow-hidden aspect-[3/4]">
                {photos.map((src, i) => (
                  <img
                    key={i}
                    src={src}
                    alt="Fatinha Castro"
                    className="absolute inset-0 w-full h-full object-cover object-top transition-opacity duration-700"
                    style={{ opacity: i === photoIdx ? 1 : 0 }}
                  />
                ))}
                <div className="absolute inset-0 bg-gradient-to-t from-black/15 to-transparent pointer-events-none" />

                {/* Dot indicators */}
                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                  {photos.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setPhotoIdx(i)}
                      aria-label={`Foto ${i + 1}`}
                      className={`w-[7px] h-[7px] rounded-full transition-all duration-300 ${
                        i === photoIdx ? 'bg-primary scale-125' : 'bg-white/60'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            {/* Floating accent badge */}
            <div className="absolute -bottom-5 -right-5 lg:-right-8 glass-dark rounded-none p-5 lg:p-6 text-center shadow-2xl">
              <p className="font-cormorant font-light text-[1.6rem] text-primary leading-none">Maio</p>
              <p className="font-cormorant font-light text-[2rem] text-primary leading-none">2017</p>
              <p className="font-montserrat text-[8.5px] tracking-[0.3em] text-white/80 uppercase mt-1">Desde então</p>
            </div>
          </div>

          {/* Text */}
          <div ref={txtRef} className="reveal-right flex flex-col">
            <p className="section-label mb-5">Sobre Mim</p>

            <div className="flex items-center gap-4 mb-7">
              <div className="w-10 h-px bg-primary/60" />
              <svg width="10" height="10" viewBox="0 0 10 10">
                <path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4L5 0Z" fill="#C9A96E" opacity="0.6"/>
              </svg>
              <div className="w-10 h-px bg-primary/60" />
            </div>

            <h2 className="font-cormorant font-light text-[clamp(2.2rem,4.5vw,3.6rem)] text-charcoal leading-[1.15] mb-6">
              Transformar sonhos<br />
              em <em className="font-playfair italic text-primary">memórias eternas</em>
            </h2>

            <p className="font-dm font-light text-[15px] text-taupe leading-[1.9] mb-5">
              Minha história com eventos começou no amor genuíno por celebrações. Acredito que cada festa conta uma história única — e meu papel é garantir que essa história seja contada com perfeição, emoção e muito amor.
            </p>

            <p className="font-dm font-light text-[15px] text-taupe leading-[1.9] mb-8">
              Com dedicação a cada detalhe, trabalho ao lado de cada família para criar experiências que vão muito além do esperado. Do primeiro encontro ao último abraço da festa, estou presente para que vocês possam simplesmente viver esse momento único.
            </p>

            {/* Signature */}
            <p className="font-cormorant italic font-light text-[1.9rem] text-primary mb-8">
              Fatinha Castro
            </p>

            <Link to="/sobre" className="btn-gold self-start">
              Conheça minha história
            </Link>
          </div>
        </div>

        {/* Stats row */}
        <div
          ref={statsRef}
          className="mt-20 lg:mt-28 pt-14 border-t border-primary/15 grid grid-cols-2 gap-10 text-center max-w-xl mx-auto w-full"
        >
          {stats.map(s => (
            <div key={s.label} className="flex flex-col items-center gap-2">
              {s.text
                ? <span className="counter-num text-[clamp(2rem,4.5vw,3.2rem)]">{s.text}</span>
                : <Counter target={s.value} suffix={s.suffix} active={statsActive} />
              }
              <p className="font-montserrat text-[10px] tracking-[0.25em] text-taupe uppercase mt-1">
                {s.label}
              </p>
              <div className="w-8 h-px bg-primary/40 mt-1" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
