import { Reveal } from '@/components/ui/Reveal'

export function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-4xl mx-auto">
      <Reveal>
        <h2 className="text-3xl font-semibold">Contact</h2>

        <p className="mt-6 text-neutral-600">
          Tu peux me contacter par email ou via LinkedIn.
        </p>

        <div className="mt-8 flex gap-4">
          <a className="px-6 py-3 rounded-lg bg-black text-white font-medium">
            Email
          </a>

          <a className="px-6 py-3 rounded-lg border font-medium">
            LinkedIn
          </a>
        </div>
      </Reveal>
    </section>
  )
}
