'use client'

import { motion } from 'framer-motion'
import { JSX } from 'react'
import {
  FaReact, FaAngular, FaJava, FaPhp, FaHtml5,
  FaCss3Alt, FaJs, FaDocker,
} from 'react-icons/fa'
import {
  SiNextdotjs, SiSymfony, SiSpring,
  SiIced, SiTestinglibrary, SiTensorflow, SiFigma,
} from 'react-icons/si'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

type Badge = {
  name: string
  icon: JSX.Element
}

const badges: Badge[] = [
  { name: 'React', icon: <FaReact size={22} /> },
  { name: 'Next.js', icon: <SiNextdotjs size={22} /> },
  { name: 'Angular', icon: <FaAngular size={22} /> },
  { name: 'Java', icon: <FaJava size={22} /> },
  { name: 'Spring', icon: <SiSpring size={22} /> },
  { name: 'PHP', icon: <FaPhp size={22} /> },
  { name: 'Symfony', icon: <SiSymfony size={22} /> },
  { name: 'HTML', icon: <FaHtml5 size={22} /> },
  { name: 'CSS', icon: <FaCss3Alt size={22} /> },
  { name: 'JS', icon: <FaJs size={22} /> },
  { name: 'Docker', icon: <FaDocker size={22} /> },
  { name: 'CI/CD', icon: <SiIced size={22} /> },
  { name: 'Testing', icon: <SiTestinglibrary size={22} /> },
  { name: 'IA', icon: <SiTensorflow size={22} /> },
  { name: 'UX/UI', icon: <SiFigma size={22} /> },
]

export function HeroBadgesScroll() {
  const repeated = [...badges, ...badges]

  return (
    <div className="relative w-full sm:mt-6 mt-2 mb-6 pb-10">
      {/* ===== MOBILE ===== */}
      <div className="sm:hidden relative">
        <div className="flex gap-4 overflow-x-auto px-6 pb-2 scroll-smooth">
          {badges.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-md
                         rounded-2xl px-4 py-2 min-w-max shadow-sm"
            >
              {badge.icon}
              <span className="text-sm font-medium text-neutral-900">
                {badge.name}
              </span>
            </div>
          ))}
        </div>
        <FiChevronLeft
          size={20}
          className="absolute left-2 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
        />
        <FiChevronRight
          size={20}
          className="absolute right-2 top-1/2 -translate-y-1/2 text-neutral-400 pointer-events-none"
        />
      </div>

      {/* ===== DESKTOP ===== */}
      <div className="hidden sm:block overflow-hidden">
        <motion.div
          className="flex gap-4 w-max"
          animate={{ x: ['0%', '-50%'] }}
          transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
          style={{ willChange: 'transform' }}
        >
          {repeated.map((badge, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white/80 backdrop-blur-md
                         rounded-2xl px-4 py-2 min-w-max shadow-sm"
            >
              {badge.icon}
              <span className="text-sm font-medium text-neutral-900">
                {badge.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  )
}
