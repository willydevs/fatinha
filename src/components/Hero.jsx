import { useEffect, useState } from 'react'
import { heroSlide1 } from '../assets/images'

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

    </section>
  )
}
