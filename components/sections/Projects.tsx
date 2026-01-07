import { Reveal } from '@/components/ui/Reveal'

export function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-neutral-50">
      <div className="max-w-5xl mx-auto">
        <Reveal>
          <h2 className="text-3xl font-semibold text-black">Projets</h2>
        </Reveal>

        <div className="mt-10 grid gap-6 md:grid-cols-2">
          <Reveal delay={0.1}>
            <div className="p-6 border rounded-lg">
              <h3 className="font-medium text-black">Projet Web</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Description rapide du projet.
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="p-6 border rounded-lg">
              <h3 className="font-medium text-black">Projet Mobile</h3>
              <p className="mt-2 text-sm text-neutral-600">
                Description rapide du projet.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
