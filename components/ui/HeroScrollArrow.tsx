'use client'

import { FiArrowDown } from 'react-icons/fi'
import { motion } from 'framer-motion'

interface HeroScrollArrowProps {
  targetId: string
}

export function HeroScrollArrow({ targetId }: HeroScrollArrowProps) {
  const handleClick = () => {
    const section = document.getElementById(targetId)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }
  }

  return (
    <motion.div
      className="absolute sm:bottom-16 bottom-6 left-1/2 -translate-x-1/2 z-20 cursor-pointer"
      animate={{ y: [0, 8, 0] }}
      transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
      style={{ willChange: 'transform' }}
      onClick={handleClick}
    >
      <FiArrowDown size={32} className="text-neutral-700 hover:text-neutral-900 transition" />
    </motion.div>
  )
}
