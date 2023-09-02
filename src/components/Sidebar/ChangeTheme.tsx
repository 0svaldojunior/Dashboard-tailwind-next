'use client'

import { Moon, Sun } from 'lucide-react'
import { useState } from 'react'
import { Button } from '../Button'

export function ChangeTheme() {
  const [theme, setTheme] = useState(false)

  function toggleDarkMode() {
    const htmlElement = document.querySelector('html')

    if (htmlElement) {
      const hasDarkClass = htmlElement.classList.contains('dark')

      if (hasDarkClass) {
        htmlElement.classList.remove('dark')
        setTheme((state) => !state)
      } else {
        htmlElement.classList.add('dark')
        setTheme((state) => !state)
      }
    }
  }

  return (
    <Button
      variant="ghost"
      onClick={toggleDarkMode}
      className="group flex w-full items-center gap-3 rounded px-3 py-2 hover:bg-violet-50 dark:hover:bg-zinc-800"
    >
      {theme ? (
        <Moon className="h-5 w-5 text-zinc-500" />
      ) : (
        <Sun className="h-5 w-5 text-zinc-500" />
      )}
      <span className="text-base font-medium text-zinc-700 group-hover:text-violet-500 dark:text-zinc-100 dark:hover:text-violet-300">
        Change Theme
      </span>
    </Button>
  )
}
