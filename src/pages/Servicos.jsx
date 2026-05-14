import { Link } from 'react-router-dom'
import { useReveal, useRevealGroup } from '../hooks/useReveal'
import {
  imgMonaMaycon, imgBruninha, imgSandra,
  imgJessicaDiego, imgLaviniaLins, imgIngridResende,
  imgCamilaJuan,
} from '../assets/images'

const services = [
  {
    image: imgMonaMaycon,
    label: 'CASAMENTOS',
    title: 'Assessoria de Casamento',
    desc: 'Do primeiro "sim" ao último abraço da festa. Cuidamos de cada etapa do planejamento para que vocês vivam plenamente o dia mais importante das suas vidas.',
    items: [
      'Consultoria inicial e planejamento completo',
      'Gerenciamento de fornecedores',
      'Criação do cronograma detalhado',
      'Coordenação da cerimônia e recepção',
      'Assessoria no dia do evento (Day-Of)',
      'Suporte logístico e operacional',
    ],
    featured: true,
  },
  {
    image: imgBruninha,
    label: 'DEBUTANTES',
    title: 'Festa de 15 Anos',
    desc: 'A mais especial das celebrações femininas. Criamos uma experiência única que reflete a personalidade da debutante e emociona cada convidado.',
    items: [
      'Planejamento temático personalizado',
      'Coordenação de valsa e apresentações',
      'Organização de cortejo e daminha',
      'Decoração em harmonia com o tema',
      'Gestão de fornecedores especializados',
      'Acompanhamento no dia da festa',
    ],
    featured: false,
  },
  {
    image: imgSandra,
    label: 'FESTAS & EVENTOS',
    title: 'Celebrações Especiais',
    desc: 'Aniversários, bodas, formaturas, eventos corporativos. Cada ocasião é única e merece ser vivida com elegância e organização impecável.',
    items: [
      'Aniversários de todas as idades',
      'Bodas e renovações de votos',
      'Formaturas e eventos acadêmicos',
      'Eventos corporativos e confraternizações',
      'Festas temáticas personalizadas',
      'Coquetéis e jantares especiais',
    ],
    featured: false,
  },
]

const process = [
  { num: '01', title: 'Primeiro contato', desc: 'Agendamos uma conversa para ouvir sua história, entender sua visão e sonhar juntos.' },
  { num: '02', title: 'Proposta personalizada', desc: 'Desenvolvemos uma proposta sob medida para o seu evento, respeitando seu orçamento e estilo.' },
  { num: '03', title: 'Planejamento', desc: 'Iniciamos o planejamento detalhado: fornecedores, cronograma, logística e todos os detalhes.' },
  { num: '04', title: 'O grande dia', desc: 'No dia do evento, cuidamos de tudo para que você viva cada momento com leveza e alegria.' },
]

function PageHero() {
  return (
    <section className="relative">
      <div
        className="relative flex items-center justify-center h-[440px] md:h-[520px] bg-cover bg-center"
        style={{ backgroundImage: `url(${imgCamilaJuan})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/72" />
        <div className="relative z-10 text-center text-white px-6 pt-[78px] lg:pt-[92px]">
          <p className="section-label mb-5 text-primary">O que oferecemos</p>
          <h1 className="font-cormorant font-light text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.1]">
            Nossos Serviços
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

export default function Servicos() {
  const h1 = useReveal(0.15)
  const h2 = useReveal(0.12)

  return (
    <>
      <PageHero />

      {/* ── Services ─────────────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10 flex flex-col gap-20 lg:gap-28">
          {services.map((s, i) => (
            <div
              key={s.label}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${i % 2 === 1 ? 'lg:[&>*:first-child]:order-2' : ''}`}
            >
              {/* Image */}
              <div className="gold-frame">
                <div className="overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[480px]">
                  <img
                    src={s.image}
                    alt={s.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.04]"
                  />
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col gap-5">
                <p className="section-label">{s.label}</p>
                <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3rem)] text-charcoal leading-[1.2]">
                  {s.title}
                </h2>
                <p className="font-dm font-light text-[15px] text-taupe leading-[1.9]">
                  {s.desc}
                </p>
                <ul className="flex flex-col gap-3 mt-2">
                  {s.items.map(item => (
                    <li key={item} className="flex items-start gap-3">
                      <span className="text-primary mt-1 text-[10px] flex-shrink-0">✦</span>
                      <span className="font-dm font-light text-[14px] text-charcoal">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contato" className="btn-gold self-start mt-3">
                  Solicitar Orçamento
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── Process ──────────────────────────────────────────────── */}
      <section className="bg-secondary py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div ref={h1} className="reveal text-center mb-16">
            <p className="section-label mb-5">Como Trabalhamos</p>
            <h2 className="font-cormorant font-light text-[clamp(2.2rem,4.5vw,3.6rem)] text-white leading-[1.15]">
              Do sonho à realidade,<br />
              <em className="font-playfair italic text-primary">passo a passo</em>
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((p, i) => (
              <div key={p.num} className="flex flex-col items-center text-center group">
                <div className="relative mb-6">
                  <span className="font-cormorant font-light text-[5rem] leading-none text-primary/20 group-hover:text-primary/40 transition-colors duration-500">
                    {p.num}
                  </span>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-12 h-px bg-primary/30 group-hover:bg-primary/60 transition-colors duration-500" />
                  </div>
                </div>
                <h3 className="font-cormorant font-light text-[1.35rem] text-white mb-3">{p.title}</h3>
                <p className="font-dm font-light text-[13.5px] text-white/55 leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-accent py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <div ref={h2} className="reveal">
            <p className="section-label mb-5">Pronto para começar?</p>
            <h2 className="font-cormorant font-light text-[clamp(2rem,4.5vw,3.4rem)] text-charcoal leading-[1.2] mb-8">
              Vamos planejar juntos<br />
              <em className="font-playfair italic text-primary">o seu evento perfeito</em>
            </h2>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link to="/contato" className="btn-gold">Entrar em Contato</Link>
              <Link to="/galeria" className="btn-outline-dark"><span>Ver Nosso Portfólio</span></Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
