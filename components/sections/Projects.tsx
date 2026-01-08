import { Reveal } from "../ui/Reveal";

export function Projects() {
  return (
    <section id="projects" className="py-32 bg-neutral-50">
      <div className="max-w-6xl mx-auto px-6">
        <Reveal>
          <h2 className="text-3xl font-semibold">Projets</h2>
        </Reveal>

        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {[1, 2, 3].map((_, i) => (
            <Reveal key={i} delay={i * 0.1}>
              <div className="aspect-[4/5] rounded-2xl bg-neutral-200" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
