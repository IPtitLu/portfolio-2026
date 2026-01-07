'use client'

import { motion } from 'framer-motion'

export function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6">
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        className="max-w-3xl text-center"
      >
        <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
          Lucas Perez
        </h1>

        <p className="mt-6 text-lg text-neutral-600">
          Développeur Fullstack & Devops
        </p>
        <p className="mt-6 text-lg text-white">
          🚧 Portfolio 2026 en construction 🚧
        </p>

        <div className="mt-10 flex justify-center gap-4">
          <a
            href="#projects"
            className="px-6 py-3 rounded-lg bg-black text-white font-medium"
          >
            Voir mes projets
          </a>

          <a
            href="mailto:lucasperez.dev.pro@gmail.com"
            className="px-6 py-3 rounded-lg border font-medium"
          >
            Me contacter
          </a>
        </div>
      </motion.div>
    </section>
  )
}
