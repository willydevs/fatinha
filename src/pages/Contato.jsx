import { useReveal } from '../hooks/useReveal'
import { heroSlide3 } from '../assets/images'

function PageHero() {
  return (
    <section className="relative">
      <div
        className="relative flex items-center justify-center h-[440px] md:h-[520px] bg-cover bg-center"
        style={{ backgroundImage: `url(${heroSlide3})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/72" />
        <div className="relative z-10 text-center text-white px-6 pt-[78px] lg:pt-[92px]">
          <p className="section-label mb-5 text-primary">Fale conosco</p>
          <h1 className="font-cormorant font-light text-[clamp(2.8rem,7vw,5.5rem)] leading-[1.1]">
            Vamos Conversar
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

export default function Contato() {
  const infoRef = useReveal(0.1)
  const ctaRef  = useReveal(0.1, 200)

  return (
    <>
      <PageHero />

      <section className="bg-cream py-24 lg:py-32">
        <div className="max-w-4xl mx-auto px-6 lg:px-10">

          {/* CTA principal */}
          <div ref={ctaRef} className="reveal text-center mb-20">
            <p className="section-label mb-5">Solicite um Orçamento</p>
            <h2 className="font-cormorant font-light text-[clamp(2rem,4vw,3rem)] text-charcoal leading-[1.2] mb-8">
              Conte-nos sobre<br />
              <em className="font-playfair italic text-primary">o seu evento</em>
            </h2>
            <a
              href="https://assessoriavip.com.br/funnelFormLead/80456960-1f9a-11ec-9ebb-455e2798ed85"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-gold"
            >
              Solicite um Orçamento
            </a>
          </div>

          {/* Info de contato */}
          <div ref={infoRef} className="reveal flex flex-col gap-10 max-w-xl mx-auto">
            <div>
              <p className="section-label mb-5 text-center">Informações</p>
              <h3 className="font-cormorant font-light text-[1.8rem] text-charcoal leading-[1.2] mb-8 text-center">
                Estamos aqui<br />
                <em className="font-playfair italic text-primary">para você</em>
              </h3>
            </div>

            {[
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                ),
                label: 'WhatsApp',
                value: '79 9 9892.9798',
                href: 'https://wa.me/557998929798',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
                    <polyline points="22,6 12,13 2,6"/>
                  </svg>
                ),
                label: 'E-mail',
                value: 'fatinhacastrocerimonial@gmail.com',
                href: 'mailto:fatinhacastrocerimonial@gmail.com',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                  </svg>
                ),
                label: 'Instagram',
                value: '@fatinhaccerimonial',
                href: 'https://www.instagram.com/fatinhaccerimonial/',
              },
              {
                icon: (
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/>
                    <circle cx="12" cy="10" r="3"/>
                  </svg>
                ),
                label: 'Localização',
                value: 'Aracaju - SE',
                href: null,
              },
            ].map(c => (
              <div key={c.label} className="flex items-start gap-4 group">
                <div className="w-11 h-11 border border-primary/25 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  {c.icon}
                </div>
                <div>
                  <p className="section-label text-[8px] mb-1">{c.label}</p>
                  {c.href ? (
                    <a
                      href={c.href}
                      target={c.href.startsWith('http') ? '_blank' : undefined}
                      rel="noopener noreferrer"
                      className="font-dm font-light text-[14px] text-charcoal hover:text-primary transition-colors duration-300"
                    >
                      {c.value}
                    </a>
                  ) : (
                    <p className="font-dm font-light text-[14px] text-charcoal">{c.value}</p>
                  )}
                </div>
              </div>
            ))}

            {/* Ornament */}
            <div className="border border-primary/15 p-7 mt-2">
              <p className="font-cormorant italic font-light text-[1.3rem] text-charcoal leading-[1.6]">
                "Seu sonho merece um planejamento conduzido com transparência, precisão e excelência. Conte-nos sobre sua celebração e daremos início a uma jornada extraordinária."
              </p>
              <p className="font-cormorant italic text-primary text-[1.1rem] mt-4">— Fatinha Castro</p>
            </div>
          </div>

        </div>
      </section>
    </>
  )
}
