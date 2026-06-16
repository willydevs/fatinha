import { useState, useEffect, useCallback } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { fatinaPhoto1, fatinaPhoto2, fatinaPhoto3, heroSlide2, imgCamilaJuan, imgBruninha, imgSandra } from '../assets/images'

const photos = [fatinaPhoto1, fatinaPhoto2, fatinaPhoto3]

const values = [
  {
    icon: '✦',
    title: 'Atenção aos Detalhes',
    desc: 'Cada flor, cada luz, cada momento é pensado e executado com precisão e carinho absoluto.',
  },
  {
    icon: '✦',
    title: 'Escuta Genuína',
    desc: 'Nosso processo começa pela escuta. Entendemos profundamente o que você sonha para criar algo verdadeiramente seu.',
  },
  {
    icon: '✦',
    title: 'Presença Total',
    desc: 'Estamos presentes em cada etapa — do primeiro contato até o fim da festa — para que você possa simplesmente viver.',
  },
  {
    icon: '✦',
    title: 'Amor pelo Que Faz',
    desc: 'Não é só trabalho. É vocação. Cada evento é tratado como se fosse o nosso próprio grande momento.',
  },
]

function PageHero() {
  return (
    <section className="relative">
      <div
        className="relative flex items-center justify-center h-[440px] md:h-[520px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroSlide2})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/72" />
        <div className="relative z-10 text-center text-white px-6 pt-[78px] lg:pt-[92px]">
          <p className="section-label mb-5 text-primary">Nossa história</p>
          <h1 className="font-cormorant font-light text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.1]">
            Sobre Fatinha Castro
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

export default function Sobre() {
  const [photoIdx, setPhotoIdx] = useState(0)
  const s1 = useReveal(0.15)
  const s2 = useReveal(0.15, 150)
  const s3 = useReveal(0.1)

  const nextPhoto = useCallback(() => setPhotoIdx(i => (i + 1) % photos.length), [])
  useEffect(() => {
    const id = setInterval(nextPhoto, 5000)
    return () => clearInterval(id)
  }, [nextPhoto])

  return (
    <>
      <PageHero />

      {/* ── Story section ────────────────────────────────────────── */}
      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">

            {/* Photo slideshow */}
            <div ref={s1} className="reveal-left">
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
            </div>

            {/* Story text */}
            <div ref={s2} className="reveal-right flex flex-col gap-5">
              <p className="section-label">Minha história</p>
              <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3.2rem)] text-charcoal leading-[1.2] mb-2">
                Uma paixão que nasceu<br />
                <em className="font-playfair italic text-primary">do coração</em>
              </h2>
              <p className="font-dm font-light text-[15px] text-taupe leading-[1.95]">
                Desde criança, meu olho sempre brilhava diante de festas e celebrações. Havia algo de mágico no jeito que um evento bem organizado conseguia reunir pessoas, criar memórias e transformar simples momentos em histórias inesquecíveis.
              </p>
              <p className="font-dm font-light text-[15px] text-taupe leading-[1.95]">
                Com o tempo, esse amor se transformou em propósito. Hoje, após mais de 8 anos e centenas de eventos realizados, posso dizer com certeza: <em className="font-cormorant italic text-[1.1rem] text-charcoal">cada festa que organizo leva um pedaço do meu coração.</em>
              </p>
              <p className="font-dm font-light text-[15px] text-taupe leading-[1.95]">
                Casamentos, debutantes, festas de aniversário — não importa o formato. O que me move é a possibilidade de olhar nos olhos de cada cliente no final da noite e ver que realizamos juntos algo além do esperado.
              </p>
              <p className="font-cormorant italic font-light text-[2rem] text-primary mt-2">
                Fatinha Castro
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Values section ───────────────────────────────────────── */}
      <section className="bg-white py-24 lg:py-32">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div ref={s3} className="reveal text-center mb-16">
            <p className="section-label mb-5">Nossos Valores</p>
            <h2 className="font-cormorant font-light text-[clamp(2.2rem,4.5vw,3.6rem)] text-charcoal leading-[1.15]">
              O que nos move
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div
                key={v.title}
                className="flex flex-col items-center text-center p-8 border border-primary/10 hover:border-primary/40 transition-colors duration-400 group"
                style={{ animation: `fadeInUp 0.7s ease both`, animationDelay: `${i * 0.12}s` }}
              >
                <span className="text-primary text-[1.2rem] mb-5">{v.icon}</span>
                <h3 className="font-cormorant font-light text-[1.35rem] text-charcoal mb-4 leading-tight">
                  {v.title}
                </h3>
                <p className="font-dm font-light text-[13.5px] text-taupe leading-relaxed">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mini gallery ─────────────────────────────────────────── */}
      <section className="bg-cream py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-10">
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {[imgCamilaJuan, imgBruninha, imgSandra].map((img, i) => (
              <div key={i} className="overflow-hidden aspect-square">
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-[1.05]"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ──────────────────────────────────────────────────── */}
      <section className="bg-secondary py-20 text-center">
        <div className="max-w-2xl mx-auto px-6">
          <p className="section-label mb-5">Vamos conversar?</p>
          <h2 className="font-cormorant font-light text-[clamp(2rem,4.5vw,3.4rem)] text-white leading-[1.2] mb-8">
            Pronta para realizar<br />
            <em className="font-playfair italic text-primary">o seu evento dos sonhos</em>
          </h2>
          <Link to="/contato" className="btn-gold">
            Entrar em Contato
          </Link>
        </div>
      </section>
    </>
  )
}
