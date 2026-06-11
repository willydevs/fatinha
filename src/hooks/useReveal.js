import { useEffect, useRef } from 'react'

export function useReveal(threshold = 0.12, delay = 0) {
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('active'), delay)
          observer.unobserve(el)
        }
      },
      { threshold }
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [threshold, delay])

  return ref
}

export function useRevealGroup(threshold = 0.1, staggerMs = 120) {
  const groupRef = useRef(null)

  useEffect(() => {
    const group = groupRef.current
    if (!group) return

    const items = group.querySelectorAll('[data-reveal]')

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          items.forEach((el, i) => {
            setTimeout(() => el.classList.add('active'), i * staggerMs)
          })
          observer.unobserve(group)
        }
      },
      { threshold }
    )

    observer.observe(group)
    return () => observer.disconnect()
  }, [threshold, staggerMs])

  return groupRef
}
