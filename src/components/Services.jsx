import { Link } from 'react-router-dom'
import { useReveal, useRevealGroup } from '../hooks/useReveal'
import { imgMonaMaycon, imgBruninha, imgSandra } from '../assets/images'

const services = [
  {
    image: imgMonaMaycon,
    label: 'CASAMENTOS',
    title: 'Do sim\npara sempre',
    desc: 'Assessoria completa do planejamento à cerimônia. Cada detalhe pensado com amor para que o dia mais importante da sua vida seja absolutamente perfeito.',
    link: '/servicos',
  },
  {
    image: imgBruninha,
    label: 'DEBUTANTES',
    title: 'Quinze anos\ninesquecíveis',
    desc: 'Uma festa de debutante que ficará para sempre na memória de cada convidado. Sonho, elegância e emoção em cada detalhe dessa noite especial.',
    link: '/servicos',
  },
  {
    image: imgSandra,
    label: 'FESTAS & EVENTOS',
    title: 'Cada celebração\nmerece brilhar',
    desc: 'Aniversários, bodas, formaturas e eventos especiais. Porque cada momento marcante da sua vida merece ser vivido com sofisticação.',
    link: '/servicos',
  },
]

export default function Services() {
  const headerRef = useReveal(0.15)
  const groupRef  = useRevealGroup(0.1, 150)

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Section header */}
        <div ref={headerRef} className="reveal text-center mb-16 lg:mb-20">
          <p className="section-label mb-5">Tipos de Experiências</p>

          <div className="flex items-center justify-center gap-5 mb-6">
            <div className="w-12 h-px bg-primary/40" />
            <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
              <path d="M5 0L6 4L10 5L6 6L5 10L4 6L0 5L4 4L5 0Z" fill="#C9A96E" opacity="0.7"/>
            </svg>
            <div className="w-12 h-px bg-primary/40" />
          </div>

          <h2 className="font-cormorant font-light text-[clamp(2.4rem,5vw,4.2rem)] text-charcoal leading-[1.15]">
            Momentos que ficam<br />
            <em className="font-playfair italic text-primary">para sempre</em>
          </h2>
        </div>

        {/* Cards */}
        <div ref={groupRef} className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-7">
          {services.map((s, i) => (
            <Link
              key={s.label}
              to={s.link}
              data-reveal
              className="reveal service-card group relative block overflow-hidden aspect-[3/4] md:aspect-auto md:h-[580px] lg:h-[640px]"
            >
              {/* Background image */}
              <img
                src={s.image}
                alt={s.label}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
              />

              {/* Base overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/25 to-black/10" />

              {/* Hover overlay */}
              <div
                className="card-overlay absolute inset-0 bg-black/30 opacity-0"
              />

              {/* Content at bottom */}
              <div className="absolute bottom-0 left-0 right-0 p-7 lg:p-8 card-text">

                {/* Label */}
                <p className="section-label text-primary mb-3">{s.label}</p>

                {/* Title */}
                <h3 className="font-cormorant font-light text-[2rem] lg:text-[2.2rem] text-white leading-[1.15] mb-0 whitespace-pre-line">
                  {s.title}
                </h3>

                {/* Description — visible on hover */}
                <p className="font-dm font-light text-[13.5px] text-white/80 leading-relaxed mt-4 max-h-0 overflow-hidden opacity-0 transition-all duration-500 group-hover:max-h-32 group-hover:opacity-100">
                  {s.desc}
                </p>

                {/* CTA line */}
                <div className="flex items-center gap-3 mt-5 opacity-0 translate-y-2 transition-all duration-500 group-hover:opacity-100 group-hover:translate-y-0">
                  <span className="font-montserrat text-[9px] tracking-[0.3em] text-primary uppercase">
                    Saiba mais
                  </span>
                  <div className="flex-1 h-px bg-primary/60" />
                </div>
              </div>

              {/* Gold border on hover */}
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/40 transition-colors duration-500 pointer-events-none" />
            </Link>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <Link to="/servicos" className="btn-outline-dark">
            <span>Ver Todos os Serviços</span>
          </Link>
        </div>
      </div>
    </section>
  )
}
