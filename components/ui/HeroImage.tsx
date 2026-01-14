'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

interface HeroImageProps {
  src: string
  alt: string
}

export function HeroImage({ src, alt }: HeroImageProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.96 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut', delay: 0.3 }}
      className="relative sm:w-full w-full max-w-sm mx-auto aspect-square 
                 rounded-2xl overflow-hidden bg-white 
                 border border-neutral-200
                 shadow-[0_20px_40px_rgba(0,0,0,0.04)]"
      style={{ willChange: 'transform' }}
    >
      <Image src={src} alt={alt} fill className="object-cover" priority />
    </motion.div>
  )
}
