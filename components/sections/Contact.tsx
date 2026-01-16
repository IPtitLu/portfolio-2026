import { Reveal } from "../ui/Reveal";

export function Contact() {
  return (
    <section className="pb-20">
      <div className="max-w-xl mx-auto px-6 text-center">
        <Reveal>
          <h2 className="text-3xl font-semibold">Contact</h2>
          <p className="mt-6 text-neutral-600">
            Intéressé par mon profil ou un projet ?
          </p>

          <a
            href="mailto:lucasperez.dev.pro@gmail.fr"
            className="inline-block mt-10 px-8 py-4 rounded-full bg-black text-white font-medium"
          >
            Me contacter
          </a>
        </Reveal>
      </div>
    </section>
  )
}
