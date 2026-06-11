import { useEffect, useState } from 'react'
import { heroSlide1, logoWhite } from '../assets/images'

export default function Hero() {
  const [scrollY, setScrollY] = useState(0)

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <section className="relative h-screen min-h-[600px] overflow-hidden">

      {/* Background */}
      <div
        className="absolute inset-[-8%] bg-cover bg-center will-change-transform"
        style={{
          backgroundImage: `url(${heroSlide1})`,
          transform: `translateY(${scrollY * 0.25}px)`,
        }}
      />

      {/* Overlay suave */}
      <div className="absolute inset-0 bg-black/25" />

      {/* Logo — centralizada no mobile, posicionada no terço direito no desktop */}
      <div className="absolute inset-0 z-10 flex items-center justify-center lg:items-center lg:justify-end lg:pr-[18%]">
        <img
          src={logoWhite}
          alt="Fatinha Castro"
          className="w-[clamp(160px,20vw,280px)] h-auto opacity-90"
          style={{ animation: 'fadeIn 1.2s ease both' }}
        />
      </div>

    </section>
  )
}
