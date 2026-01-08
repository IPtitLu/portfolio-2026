'use client'

import { ReactNode, useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Loader } from './Loader'

type PageWrapperProps = {
  children: ReactNode
}

export function PageWrapper({ children }: PageWrapperProps) {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simule le temps de chargement, ici 1.2s pour la barre
    const timer = setTimeout(() => setLoading(false), 1200)
    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <AnimatePresence>
        {loading && <Loader key="loader" />}
      </AnimatePresence>

      {!loading && <>{children}</>}
    </>
  )
}
