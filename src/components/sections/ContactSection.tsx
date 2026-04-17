import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ContactForm } from "@/components/sections/ContactForm";

export function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Contact"
            title="Discutons de votre prochain projet"
          />
        </Reveal>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1fr_1.2fr]">
          <Reveal delay={0.05} className="rounded-3xl bg-white/95 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
            <h3 className="text-sm font-semibold text-slate-900">Coordonnées</h3>
            <div className="mt-4 space-y-3 text-sm">
              <a
                href={`mailto:${portfolio.email}`}
                className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 transition hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732]"
              >
                {portfolio.email}
              </a>
              <a
                href={`tel:${portfolio.phone.replace(/\s+/g, "")}`}
                className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 transition hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732]"
              >
                {portfolio.phone}
              </a>
              <a
                href={portfolio.links.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 transition hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732]"
              >
                LinkedIn
              </a>
              {portfolio.links.github ? (
                <a
                  href={portfolio.links.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-slate-700 transition hover:border-[#682732]/25 hover:bg-[#682732]/5 hover:text-[#682732]"
                >
                  GitHub
                </a>
              ) : null}
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
