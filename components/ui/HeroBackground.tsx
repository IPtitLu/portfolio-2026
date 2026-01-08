'use client'

import { motion } from 'framer-motion'

function random(min: number, max: number) {
  return Math.random() * (max - min) + min
}

export function HeroBackground() {
  return (
    <div className="absolute inset-0 overflow-hidden">

      {/* Blob 1 - bleu clair doux */}
      <motion.div
        className="absolute -top-32 -left-32 rounded-full blur-2xl bg-[#A3BFFA]/70"
        style={{ width: 700, height: 700 }}
        animate={{
          x: [0, random(-350, 350), random(-350, 350), 0],
          y: [0, random(-250, 250), random(-250, 250), 0],
          width: [700, random(500, 900), random(500, 900), 700],
          height: [700, random(500, 900), random(500, 900), 700],
        }}
        transition={{
          duration: random(50, 70),
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 2 - bleu pastel clair */}
      <motion.div
        className="absolute -bottom-36 right-1/4 rounded-full blur-2xl bg-[#C9B3F5]/60"
        style={{ width: 800, height: 800 }}
        animate={{
          x: [0, random(-400, 400), random(-400, 400), 0],
          y: [0, random(-200, 200), random(-200, 200), 0],
          width: [800, random(600, 1000), random(600, 1000), 800],
          height: [800, random(600, 1000), random(600, 1000), 800],
        }}
        transition={{
          duration: random(60, 80),
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      {/* Blob 3 - jaune doux */}
      <motion.div
        className="absolute top-1/3 -right-36 rounded-full blur-2xl bg-[#FFAC3B]/50"
        style={{ width: 600, height: 600 }}
        animate={{
          x: [0, random(-300, 300), random(-300, 300), 0],
          y: [0, random(-150, 150), random(-150, 150), 0],
          width: [600, random(400, 900), random(400, 900), 600],
          height: [600, random(400, 900), random(400, 900), 600],
        }}
        transition={{
          duration: random(55, 75),
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

    </div>
  )
}
