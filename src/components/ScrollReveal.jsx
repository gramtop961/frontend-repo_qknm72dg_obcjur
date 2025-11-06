import { useEffect } from 'react'

export default function ScrollReveal({ selector = '.reveal' }) {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('in-view')
        })
      },
      { threshold: 0.12 }
    )

    const elements = document.querySelectorAll(selector)
    elements.forEach((el) => io.observe(el))

    return () => io.disconnect()
  }, [selector])

  return null
}
