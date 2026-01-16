'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { useState } from 'react'

interface ProjectCardProps {
  title: string
  description: string
  images: string[]
  tech: string[]
  href: string
  active: boolean
}

export function ProjectCard({
  title,
  description,
  images,
  tech,
}: ProjectCardProps) {
  const [current, setCurrent] = useState(0)

  return (
    <motion.div
      className="
        group
        relative
        w-[70vw] max-w-[900px]
        h-[420px]
        rounded-2xl
        overflow-hidden
        bg-neutral-200
        shadow-xl
        flex-shrink-0
      "
      transition={{ type: 'spring', stiffness: 200, damping: 25 }}
    >
      {/* Image */}
      <Image
        src={images[current]}
        alt={title}
        fill
        priority
        className="
          object-cover
          transition-all
          duration-500
          ease-out
          group-hover:blur-xs
          group-hover:scale-101
        "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:bg-black/50" />

      {/* Content */}
      <div className="relative z-10 h-full flex flex-col justify-end p-6">
        <h3 className="text-white text-xl font-semibold">
          {title}
        </h3>

        <p className="text-white/90 mt-2 max-w-md">
          {description}
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {tech.map((t, i) => (
            <span
              key={i}
              className="
                bg-white/20
                text-white
                px-3 py-1
                rounded-full
                text-xs
                backdrop-blur
              "
            >
              {t}
            </span>
          ))}
        </div>

        {/* Dots */}
        {images.length > 1 && (
          <div className="mt-6 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrent(index)}
                className={`h-2 w-2 rounded-full transition ${
                  index === current ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>
    </motion.div>
  )
}
