import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { logo } from '../assets/images'

const leftLinks = [
  { name: 'INÍCIO', path: '/' },
  { name: 'SOBRE', path: '/sobre' },
  { name: 'SERVIÇOS', path: '/servicos' },
]

const rightLinks = [
  { name: 'DEPOIMENTOS', path: '/#depoimentos' },
  { name: 'GALERIA', path: '/galeria' },
  { name: 'CONTATO', path: '/contato' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => { setMenuOpen(false) }, [location.pathname, location.hash])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const isActive = (path) => {
    if (path === '/') return location.pathname === '/' && !location.hash
    if (path.startsWith('/#')) return location.pathname === '/' && location.hash === path.slice(1)
    return location.pathname.startsWith(path)
  }

  const linkCls = (path) =>
    `nav-link font-montserrat text-[9.5px] font-medium tracking-[0.28em] transition-colors duration-300 ${
      isActive(path)
        ? 'text-primary'
        : scrolled
        ? 'text-charcoal hover:text-primary'
        : 'text-white hover:text-primary'
    }`

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/93 backdrop-blur-md shadow-[0_2px_24px_rgba(0,0,0,0.07)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 lg:px-10 relative flex items-center h-[78px] lg:h-[92px]">
          <nav className="hidden lg:flex items-center gap-9 flex-1">
            {leftLinks.map(l => (
              <Link key={l.name} to={l.path} className={linkCls(l.path)}>
                {l.name}
              </Link>
            ))}
          </nav>

          <Link
            to="/"
            className="absolute left-1/2 -translate-x-1/2 flex flex-col items-center gap-[3px] group"
          >
            <img
              src={logo}
              alt="Logo Fatinha Castro"
              className={`h-7 w-auto mb-0.5 transition-opacity duration-300 ${scrolled ? 'opacity-80' : 'opacity-90'} group-hover:opacity-100`}
              onError={e => e.target.style.display = 'none'}
            />
            <span className={`font-cormorant font-light tracking-[0.32em] text-[17px] lg:text-[19px] leading-none transition-colors duration-300 ${scrolled ? 'text-secondary' : 'text-white'}`}>
              FATINHA CASTRO
            </span>
            <span className={`font-montserrat text-[7px] tracking-[0.42em] uppercase leading-none transition-colors duration-300 ${scrolled ? 'text-primary' : 'text-white/68'}`}>
              ASSESSORIA E CERIMONIAL
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-9 flex-1 justify-end">
            {rightLinks.map(l => (
              <Link key={l.name} to={l.path} className={linkCls(l.path)}>
                {l.name}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMenuOpen(true)}
            aria-label="Abrir menu"
            className="lg:hidden ml-auto flex flex-col gap-[5px] cursor-pointer"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className={`block w-[22px] h-[1px] transition-colors duration-300 ${
                  scrolled ? 'bg-charcoal' : 'bg-white'
                }`}
              />
            ))}
          </button>
        </div>
      </header>

      <div
        className={`fixed inset-0 z-[60] bg-white flex flex-col items-center justify-center lg:hidden transition-all duration-500 ${
          menuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <button
          onClick={() => setMenuOpen(false)}
          aria-label="Fechar menu"
          className="absolute top-7 right-7 flex flex-col gap-[5px] cursor-pointer"
        >
          <span className="block w-[22px] h-[1px] bg-charcoal rotate-45 translate-y-[3px]" />
          <span className="block w-[22px] h-[1px] bg-charcoal -rotate-45 -translate-y-[2px]" />
        </button>

        <div className="absolute top-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1">
          <span className="font-cormorant font-light text-[17px] tracking-[0.3em] text-secondary">
            FATINHA CASTRO
          </span>
          <span className="font-montserrat text-[7px] tracking-[0.42em] text-primary uppercase">
            ASSESSORIA E CERIMONIAL
          </span>
        </div>

        <nav className="flex flex-col items-center gap-7">
          {[...leftLinks, ...rightLinks].map((l, i) => (
            <Link
              key={`${l.name}-${i}`}
              to={l.path}
              className={`font-cormorant font-light text-[2.1rem] tracking-[0.18em] transition-colors duration-300 ${
                isActive(l.path) ? 'text-primary' : 'text-charcoal hover:text-primary'
              }`}
            >
              {l.name}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-10 flex flex-col items-center gap-3">
          <div className="w-12 h-px bg-primary/50" />
          <p className="font-montserrat text-[8.5px] tracking-[0.4em] text-taupe uppercase">
            Realizando sonhos
          </p>
        </div>
      </div>
    </>
  )
}
