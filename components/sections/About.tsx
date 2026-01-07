import { Reveal } from '@/components/ui/Reveal'

export function About() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto">
      <Reveal>
        <h2 className="text-3xl font-semibold">À propos</h2>

        <p className="mt-6 text-neutral-600 leading-relaxed">
          Développeur web fullstack avec une forte spécialisation frontend.
          J’accorde une importance particulière à la performance, à la
          maintenabilité et à l’expérience utilisateur.
        </p>
      </Reveal>
    </section>
  )
}
