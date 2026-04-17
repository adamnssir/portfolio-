import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { TechBadge } from "@/components/ui/TechBadge";

export function SkillsSection() {
  return (
    <section id="skills" className="scroll-mt-24 py-16 sm:py-20">
      <Container className="max-w-[96rem] px-5 sm:px-8 lg:px-16">
        <Reveal delay={0.2}>
          <div className="max-w-3xl">
            <p className="text-lg font-semibold uppercase tracking-[0.28em] text-[#682732] sm:text-xl">
              Compétences
            </p>
            <h2 className="mt-3 text-3xl font-semibold tracking-tight text-slate-900 sm:text-4xl">
              Technologies maîtrisées
            </h2>
            <div className="mt-3 text-base leading-8 text-slate-600">
              Un stack équilibré couvrant le frontend, le backend, les bases de données, le
              DevOps et le mobile.
            </div>
          </div>
        </Reveal>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {portfolio.skills.map((group, index) => (
            <Reveal
              key={group.title}
              delay={0.24 + 0.04 * index}
              className="rounded-3xl bg-white/95 p-6 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
            >
              <div className="flex items-center gap-3">
                <span className="h-3 w-3 rounded-full bg-[#682732]/75" />
                <h3 className="text-sm font-semibold text-slate-900">{group.title}</h3>
              </div>
              <div className="mt-4 flex flex-wrap gap-2">
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
