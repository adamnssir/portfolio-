import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";

export function AboutSection() {
  return (
    <section id="about" className="scroll-mt-24 py-16 sm:py-20">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Profil"
            title="Un profil junior orienté produit, qualité et impact"
            description={portfolio.about.profile}
          />
        </Reveal>

        <div className="mt-10 grid gap-4 lg:grid-cols-3">
          <Reveal delay={0.05} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-[#682732]/10">
            <h3 className="text-sm font-semibold text-slate-900">Expertise</h3>
            <p className="mt-2 text-sm leading-7 text-slate-600">
              {portfolio.about.focus}
            </p>
          </Reveal>

          <Reveal delay={0.1} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-[#682732]/10">
            <h3 className="text-sm font-semibold text-slate-900">Formation</h3>
            <div className="mt-2 space-y-4">
              {portfolio.about.education.map((item) => (
                <div key={item.degree}>
                  <p className="text-sm font-semibold text-slate-800">{item.degree}</p>
                  <p className="mt-1 text-sm leading-7 text-slate-600">{item.school}</p>
                  {item.details ? (
                    <p className="text-sm text-[#682732]">{item.details}</p>
                  ) : null}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="rounded-3xl border border-slate-200 bg-white/90 p-6 shadow-sm shadow-[#682732]/10">
            <h3 className="text-sm font-semibold text-slate-900">Informations complémentaires</h3>
            <div className="mt-2 space-y-4 text-sm leading-7 text-slate-600">
              <div>
                <p className="font-semibold text-slate-800">Langues</p>
                <p>{portfolio.about.languages.join(" · ")}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Méthodologies</p>
                <p>{portfolio.about.methodologies.join(" · ")}</p>
              </div>
              <div>
                <p className="font-semibold text-slate-800">Disponibilité</p>
                <p>{portfolio.about.availability}</p>
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
