'use client'

import { motion } from 'framer-motion'
import { JSX } from 'react'
import { FaReact, FaAngular, FaJava, FaPhp, FaHtml5, FaCss3Alt, FaJs, FaDocker } from 'react-icons/fa'
import { SiNextdotjs, SiSymfony, SiSpring, SiIced, SiTestinglibrary, SiTensorflow, SiFigma } from 'react-icons/si'

type Badge = {
  name: string
  icon: JSX.Element
}

const badges: Badge[] = [
  { name: 'React', icon: <FaReact size={24} color="#000" /> },
  { name: 'Next.js', icon: <SiNextdotjs size={24} color="#000" /> },
  { name: 'Angular', icon: <FaAngular size={24} color="#000" /> },
  { name: 'Java', icon: <FaJava size={24} color="#000" /> },
  { name: 'Spring', icon: <SiSpring size={24} color="#000" /> },
  { name: 'PHP', icon: <FaPhp size={24} color="#000" /> },
  { name: 'Symfony', icon: <SiSymfony size={24} color="#000" /> },
  { name: 'HTML', icon: <FaHtml5 size={24} color="#000" /> },
  { name: 'CSS', icon: <FaCss3Alt size={24} color="#000" /> },
  { name: 'JS', icon: <FaJs size={24} color="#000" /> },
  { name: 'Docker', icon: <FaDocker size={24} color="#000" /> },
  { name: 'CI/CD', icon: <SiIced size={24} color="#000" /> },
  { name: 'Testing', icon: <SiTestinglibrary size={24} color="#000" /> },
  { name: 'IA', icon: <SiTensorflow size={24} color="#000" /> },
  { name: 'UX/UI', icon: <SiFigma size={24} color="#000" /> },
]

export function HeroBadgesScroll() {
  const repeated = [...badges, ...badges] // pour scroll infini

  return (
    <div className="w-full overflow-hidden mt-4 pb-10">
      <motion.div
        className="flex gap-4 w-max"
        animate={{ x: ['0%', '-50%'] }}
        transition={{ duration: 40, repeat: Infinity, ease: 'linear' }}
      >
        {repeated.map((badge, index) => (
          <div
            key={index}
            className="flex items-center gap-2 bg-white/80 backdrop-blur-md rounded-2xl px-4 py-2 min-w-max"
          >
            {badge.icon}
            <span className="text-sm font-medium text-neutral-900">{badge.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
