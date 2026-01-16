import { experiences } from '@/content/experience'
import { educations } from '@/content/education'
import { Reveal } from '@/components/ui/Reveal'

export function Parcours() {
  return (
    <section id="parcours" className="pt-20 pb-20 bg-neutral-100">
      <div className="max-w-4xl mx-auto px-6">
        
        <Reveal>
          <h2 className="text-3xl font-semibold text-neutral-900 tracking-tight">
            Parcours
          </h2>
        </Reveal>

        {/* Expérience */}
        <div className="mt-20">
          <Reveal>
            <h3 className="text-xl font-medium text-neutral-800">
              Expérience
            </h3>
          </Reveal>

          <div className="mt-10 space-y-12">
            {experiences.slice(0, 3).map((exp, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div>
                  <p className="text-sm text-neutral-500">{exp.year}</p>
                  <h4 className="mt-1 font-medium text-neutral-900">
                    {exp.role} · {exp.company}
                  </h4>
                  <p className="text-sm text-neutral-500">{exp.location}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Formation */}
        <div className="mt-24">
          <Reveal>
            <h3 className="text-xl font-medium text-neutral-800">
              Formation
            </h3>
          </Reveal>

          <div className="mt-10 space-y-12">
            {educations.slice(0, 2).map((edu, index) => (
              <Reveal key={index} delay={index * 0.05}>
                <div>
                  <p className="text-sm text-neutral-500">{edu.year}</p>
                  <h4 className="mt-1 font-medium text-neutral-900">
                    {edu.title}
                  </h4>
                  <p className="text-sm text-neutral-500">
                    {edu.school} · {edu.location}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
