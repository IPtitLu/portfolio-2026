'use client'

import { motion } from 'framer-motion'
import { JSX } from 'react'

interface SocialLink {
  href: string
  icon: JSX.Element
}

interface HeroTextProps {
  name: string
  title: string
  description: string
  socialLinks?: SocialLink[]
}

export function HeroText({ name, title, description, socialLinks }: HeroTextProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
    >
      <p className="text-sm uppercase tracking-widest text-neutral-800">{name}</p>
      <h1 className="mt-4 text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900">{title}</h1>
      <p className="mt-6 max-w-md text-neutral-600">{description}</p>

      {socialLinks && (
        <div className="mt-6 hidden md:flex items-center gap-3 text-neutral-700">
          {socialLinks.map((link, idx) => (
            <a key={idx} href={link.href} target="_blank" className="hover:text-neutral-500 transition">
              {link.icon}
            </a>
          ))}
        </div>
      )}
    </motion.div>
  )
}
