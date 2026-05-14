import { useReveal, useRevealGroup } from '../hooks/useReveal'
import {
  imgCamilaJuan, imgAlinaChico, imgBruninha,
  imgMagnoliaGuto, imgLaviniaLins, imgSandra,
} from '../assets/images'

const feed = [
  { src: imgCamilaJuan,   label: 'Camila & Juan',        cat: 'Casamento'  },
  { src: imgAlinaChico,   label: 'Alina & Chico',        cat: 'Casamento'  },
  { src: imgBruninha,     label: 'Bruninha 15 anos',      cat: 'Debutante'  },
  { src: imgMagnoliaGuto, label: 'Magnólia & Guto',       cat: 'Casamento'  },
  { src: imgLaviniaLins,  label: 'Lavínia Lins 15 anos',  cat: 'Debutante'  },
  { src: imgSandra,       label: 'Sandra 50 anos',        cat: 'Evento'     },
]

export default function InstagramFeed() {
  const headerRef = useReveal(0.15)
  const groupRef  = useRevealGroup(0.08, 100)

  return (
    <section className="bg-cream py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">

        {/* Header */}
        <div ref={headerRef} className="reveal text-center mb-14">
          <p className="section-label mb-5">Portfólio</p>

          <h2 className="font-cormorant font-light text-[clamp(2.2rem,4.5vw,3.8rem)] text-charcoal leading-[1.15] mb-4">
            Momentos que realizamos<br />
            <em className="font-playfair italic text-primary">com todo nosso amor</em>
          </h2>

          <div className="flex items-center justify-center gap-3 mt-6">
            <div className="w-10 h-px bg-primary/40" />
            <a
              href="https://www.instagram.com/fatinhacastrocerimonial"
              target="_blank"
              rel="noopener noreferrer"
              className="font-montserrat text-[9px] tracking-[0.3em] text-primary hover:text-charcoal transition-colors duration-300 uppercase"
            >
              @fatinhacastrocerimonial
            </a>
            <div className="w-10 h-px bg-primary/40" />
          </div>
        </div>

        {/* Grid */}
        <div ref={groupRef} className="grid grid-cols-2 md:grid-cols-3 gap-3 lg:gap-4">
          {feed.map((item, i) => (
            <div
              key={i}
              data-reveal
              className="reveal gallery-item relative overflow-hidden aspect-square group cursor-pointer"
            >
              <img
                src={item.src}
                alt={item.label}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.07]"
              />

              {/* Hover overlay */}
              <div className="gallery-overlay absolute inset-0 bg-black/55 flex flex-col items-center justify-center gap-3 p-4">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="white" className="opacity-80">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
                <p className="font-cormorant font-light text-white text-lg text-center leading-tight">
                  {item.label}
                </p>
                <p className="font-montserrat text-[8.5px] tracking-[0.3em] text-primary uppercase">
                  {item.cat}
                </p>
              </div>

              {/* Gold corner accent */}
              <div className="absolute top-0 left-0 w-6 h-6 border-t border-l border-primary/0 group-hover:border-primary/70 transition-colors duration-500" />
              <div className="absolute bottom-0 right-0 w-6 h-6 border-b border-r border-primary/0 group-hover:border-primary/70 transition-colors duration-500" />
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <a
            href="https://www.instagram.com/fatinhacastrocerimonial"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-outline-dark"
          >
            <span>Ver Galeria Completa</span>
          </a>
        </div>
      </div>
    </section>
  )
}
