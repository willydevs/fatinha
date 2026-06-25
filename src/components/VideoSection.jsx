import { useRef } from 'react'
import { useReveal } from '../hooks/useReveal'
import { bgEventoUnico } from '../assets/images'

export default function VideoSection() {
  const titleRef = useReveal(0.2)
  const textRef  = useReveal(0.2, 180)
  const ctaRef   = useReveal(0.2, 340)

  return (
    <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">

      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center scale-105"
        style={{ backgroundImage: `url(${bgEventoUnico})` }}
      />

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/50 to-black/68" />

      {/* Content */}
      <div className="relative z-10 text-center text-white px-6 max-w-4xl mx-auto py-24">

        {/* Top ornament */}
        <div className="flex items-center justify-center gap-5 mb-9">
          <div className="w-14 h-px bg-primary/70" />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" className="text-primary">
            <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8L6 0Z" fill="#C9A96E"/>
          </svg>
          <div className="w-14 h-px bg-primary/70" />
        </div>

        <p className="section-label mb-7 tracking-[0.45em]">Nossa Filosofia</p>

        <h2
          ref={titleRef}
          className="reveal font-cormorant font-light text-[clamp(2.4rem,6vw,5.2rem)] leading-[1.12] mb-7"
        >
          Cada evento é único,
          <br />
          <em className="font-playfair italic text-primary">assim como vocês.</em>
        </h2>

        <p
          ref={textRef}
          className="reveal font-dm font-light text-[15px] md:text-[16.5px] text-white/82 max-w-2xl mx-auto leading-[1.85] mb-10"
        >
          Do primeiro encontro até o último detalhe da festa, estamos ao seu lado
          com dedicação, escuta e amor. Para que vocês possam simplesmente viver
          — intensamente — cada segundo desse momento único.
        </p>

        <div ref={ctaRef} className="reveal">
          <a
            href="https://assessoriavip.com.br/funnelFormLead/80456960-1f9a-11ec-9ebb-455e2798ed85"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-ghost"
          >
            Solicite um Orçamento
          </a>
        </div>

        {/* Bottom ornament */}
        <div className="flex items-center justify-center gap-5 mt-12">
          <div className="w-14 h-px bg-primary/70" />
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none">
            <path d="M6 0L7.2 4.8L12 6L7.2 7.2L6 12L4.8 7.2L0 6L4.8 4.8L6 0Z" fill="#C9A96E"/>
          </svg>
          <div className="w-14 h-px bg-primary/70" />
        </div>
      </div>
    </section>
  )
}
