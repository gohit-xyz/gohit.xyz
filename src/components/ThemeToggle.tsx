import React, { useEffect, useState } from 'react'
import { MoonIcon } from './icons/global/moon'
import { SunIcon } from './icons/global/sun'

const THEME_KEY = 'theme'

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState<boolean | null>(null)

  useEffect(() => {
    try {
      const saved = localStorage.getItem(THEME_KEY)
      if (saved === 'dark' || saved === 'light') {
        setIsDark(saved === 'dark')
        document.documentElement.classList.toggle('dark', saved === 'dark')
      } else {
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
        setIsDark(prefersDark)
        document.documentElement.classList.toggle('dark', prefersDark)
      }
    } catch (e) {
      // fail silently
    }
  }, [])

  function toggle() {
    const next = !isDark
    setIsDark(next)
    try {
      localStorage.setItem(THEME_KEY, next ? 'dark' : 'light')
    } catch (e) {
      // ignore
    }
    document.documentElement.classList.toggle('dark', next)
  }

  // If we haven't mounted yet, render nothing to avoid mismatch
  if (isDark === null) return null

  return (
    <button aria-label="Toggle theme" className="theme-toggle" onClick={toggle}>
      {/* Show opposite icon for action (click to switch modes) */}
      {isDark ? <SunIcon className="w-6 h-6" /> : <MoonIcon className="w-6 h-6" />}
    </button>
  )
}
