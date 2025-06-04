'use client'

import { ReactNode } from 'react'
import { ThemeProvider, useTheme } from 'next-themes'
import { Toaster } from 'sonner'

const Providers = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      {children}
      <ToastProvider />
    </ThemeProvider>
  )
}

const ToastProvider = () => {
  const { resolvedTheme } = useTheme()

  return (
    <Toaster
      position="bottom-right"
      theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
    />
  )
}

export default Providers
