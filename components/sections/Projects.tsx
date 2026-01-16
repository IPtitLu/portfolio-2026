'use client'

import { Reveal } from '../ui/Reveal'
import { ProjectCard } from '../ui/ProjectCard'
import { useDragScroll } from '@/hooks/useDragScroll'

const projects = [
  {
    title: 'Walk of Art',
    description: 'Plateforme de gestion et de diffusion d’œuvres artistiques sur des panneaux publicitaires urbains, avec programmation temporelle et contrôle des affichages.',
    images: ['/walk-of-art.png', '/woa-2.png', '/woa-3.png'],
    tech: ['Symfony', 'Bootstrap', 'PHP'],
  },
  {
    title: 'Koliseum Academy',
    description: 'Application mobile-first pour la gestion d’entraînements de sports de combat, permettant la réservation de cours individualisés ou en petits groupes, avec une expérience personnalisée inspirée des meilleures plateformes de réservation.',
    images: ['/koliseumMaquette3.png'],
    tech: ['NodeJS', 'Express', 'CI-CD', 'Semantic Versionning', 'Testing / Jest', 'PostgreSql', 'React', 'Tailwind', 'JWT'],
  },
  {
    title: 'Swoaper',
    description: 'Marketplace de revente de sneakers intégrant un système de souscription pour des services de nettoyage et d’entretien premium.',
    images: ['/swoaper.png', '/swoaper-2.png', '/swoaper-3.png'],
    tech: ['React', 'Tailwind', 'Vercel'],
  },
  {
    title: 'Portfolio 2023',
    description: 'Portfolio personnel développé pour présenter mon profil, mes projets et mes compétences durant mes études de master.',
    images: ['/portfolio-2023.png'],
    tech: ['React', 'Tailwind', 'Vercel'],
  },
  {
    title: 'Carpool',
    description: 'Plateforme de mise en relation pour des services de transport premium à faible impact environnemental, avec une flotte de véhicules écoresponsables.',
    images: ['/carpool-2.png'],
    tech: ['React', 'Tailwind', 'Vercel'],
  }
]

export function Projects() {
  const dragRef = useDragScroll<HTMLDivElement>()

  return (
    <section id="projects" className="py-32 bg-neutral-50 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold text-neutral-900  tracking-tight">
            Projets
          </h2>
        </Reveal>
      </div>

      <div
        ref={dragRef}
        className="
          mt-8
          flex gap-8 px-6
          overflow-x-auto
          no-scrollbar
          snap-x snap-mandatory
          cursor-grab
          select-none
        "
      >
        {projects.map((project, i) => (
          <div key={i} className="snap-center">
            <ProjectCard {...project} />
          </div>
        ))}
      </div>
    </section>
  )
}