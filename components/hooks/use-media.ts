import { useEffect, useState } from 'react'

const breakpoints = {
  sm: '(min-width: 640px)',
  md: '(min-width: 768px)',
  lg: '(min-width: 1024px)',
  xl: '(min-width: 1280px)',
  '2xl': '(min-width: 1536px)'
} as const

type BreakPoint = keyof typeof breakpoints

export const useMedia = (query: string): boolean => {
  const [matches, setMatches] = useState(() => {
    if (typeof window === 'undefined') return false
    return window.matchMedia(query).matches
  })

  useEffect(() => {
    if (typeof window === 'undefined') return
    const mediaQueryList = window.matchMedia(query)
    const listener = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }
    mediaQueryList.addEventListener('change', listener)
    setMatches(mediaQueryList.matches)
    return () => {
      mediaQueryList.removeEventListener('change', listener)
    }
  }, [query])

  return matches
}

export const useBreakPoint = (bp: BreakPoint): boolean => {
  return useMedia(breakpoints[bp])
}
