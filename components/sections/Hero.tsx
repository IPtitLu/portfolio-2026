'use client'

import { HeroBackground } from '../ui/HeroBackground'
import { HeroBadgesScroll } from '../ui/HeroBadgesScroll'
import { HeroText } from '../ui/HeroText'
import { HeroImage } from '../ui/HeroImage'
import { HeroScrollArrow } from '../ui/HeroScrollArrow'
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi'
import { motion } from 'framer-motion'

export function Hero() {
  const socialLinks = [
    { href: 'https://github.com/IPtitLu', icon: <FiGithub size={24} /> },
    { href: 'https://www.linkedin.com/in/lucas-perez-71994b17a/', icon: <FiLinkedin size={24} /> },
    { href: 'mailto:lucasperez.dev.pro@gmail.com', icon: <FiMail size={24} /> },
  ]

  return (
    <section className="relative min-h-screen flex items-center justify-center flex-col bg-[#f3f4f6] overflow-hidden">
      <HeroBackground />

      <motion.div
        className="relative z-10 mx-auto max-w-6xl sm:p-6 px-12 pt-12 pb-6 grid grid-cols-1 md:grid-cols-2 sm:gap-16 gap-6 items-center sm:mb-0"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <div className="order-1 md:order-2">
          <HeroImage src="/pp.jpg" alt="Lucas Perez" />
        </div>
        <div className="order-2 md:order-1">
          <HeroText
            name="Lucas Perez - Développeur Web"
            title="Front & Backend"
            description="Développement d’applications web modernes, performantes et maintenables, avec une attention particulière au design et à l’expérience utilisateur."
            socialLinks={socialLinks}
          />
        </div>      
      </motion.div>

      <HeroBadgesScroll />

      <HeroScrollArrow targetId="projects" />
    </section>
  )
}
