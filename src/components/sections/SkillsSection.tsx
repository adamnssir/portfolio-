import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TechBadge } from "@/components/ui/TechBadge";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-20 py-12 sm:py-20">
      <Container className="max-w-[96rem] px-4 sm:px-6 lg:px-16">
        <Reveal delay={0.2}>
          <div className="max-w-3xl">
            <p className="text-base sm:text-lg font-semibold uppercase tracking-[0.28em] text-[#682732]">
              Compétences
            </p>
            <h2 className="mt-2.5 sm:mt-3 text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-slate-900">
              Technologies maîtrisées
            </h2>
            <div className="mt-2.5 sm:mt-3 text-sm sm:text-base leading-7 sm:leading-8 text-slate-600">
              Un stack équilibré couvrant le frontend, le backend, les bases de données, le
              DevOps et le mobile.
            </div>
          </div>
        </Reveal>

        <div className="mt-8 sm:mt-10 grid gap-3.5 sm:gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((group, index) => (
            <Reveal
              key={group.title}
              delay={0.24 + 0.04 * index}
              className="rounded-3xl bg-white/95 p-4.5 sm:p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center gap-2.5 sm:gap-3">
                <span className="h-2.5 w-2.5 sm:h-3 sm:w-3 rounded-full bg-[#682732]/75" />
                <h3 className="text-xs sm:text-sm font-semibold text-slate-900">{group.title}</h3>
              </div>
              <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                {group.items.map((item) => (
                  <TechBadge key={item} name={item} />
                ))}
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
