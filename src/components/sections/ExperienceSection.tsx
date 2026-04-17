import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ProjectGallery } from "@/components/gallery/ProjectGallery";

const techLogos: Record<string, string> = {
  React: "/logotechnologie/reactjs-svgrepo-com.svg",
  "Next.js": "/logotechnologie/nextjs-icon-svgrepo-com.svg",
  NestJS: "/logotechnologie/nestjs-svgrepo-com.svg",
  "Spring Boot": "/logotechnologie/Spring_Boot.svg.png",
  PostgreSQL: "/logotechnologie/postgresql-svgrepo-com.svg",
  MySQL: "/logotechnologie/mysql-logo-svgrepo-com.svg",
  MongoDB: "/logotechnologie/mongo-svgrepo-com.svg",
  TypeScript: "/logotechnologie/typescript-icon-svgrepo-com.svg",
  JavaScript: "/logotechnologie/javascript-svgrepo-com.svg",
  Docker: "/logotechnologie/docker-svgrepo-com.svg",
  "Docker Compose": "/logotechnologie/docker-svgrepo-com.svg",
  Jenkins: "/logotechnologie/jenkins-svgrepo-com.svg",
  SonarQube: "/logotechnologie/sonarqube-svgrepo-com.svg",
  Nexus: "/logotechnologie/nexus-svgrepo-com.svg",
  Prometheus: "/logotechnologie/prometheus-svgrepo-com.svg",
  Grafana: "/logotechnologie/grafana-svgrepo-com.svg",
  Nginx: "/logotechnologie/nginx-svgrepo-com.svg",
  "GitLab CI/CD": "/logotechnologie/gitlab-svgrepo-com.svg",
  Stripe: "/logotechnologie/stripe-v2-svgrepo-com.svg",
  GitHub: "/logotechnologie/github-svgrepo-com.svg",
  "GitHub Actions": "/logotechnologie/github-142-svgrepo-com.svg",
  WebSocket: "/logotechnologie/websocket-svgrepo-com.svg",
  JWT: "/logotechnologie/jwt-icon.png",
  RBAC: "/logotechnologie/rbac.png",
  Jest: "/logotechnologie/jest-snapshot-svgrepo-com.svg",
  "Node.js": "/logotechnologie/nodejs-svgrepo-com.svg",
  Kotlin: "/logotechnologie/kotlin-16-svgrepo-com.svg",
  Swift: "/logotechnologie/swift-svgrepo-com.svg",
  "Android Studio": "/logotechnologie/android-svgrepo-com.svg",
  Xcode: "/logotechnologie/xcode-svgrepo-com.svg",
  XML: "/logotechnologie/xml-svgrepo-com.svg",
  Vite: "/logotechnologie/vitejs-svgrepo-com.svg",
  "Gemini API": "/logotechnologie/api gemini.png",
  Maven: "/logotechnologie/maven-svgrepo-com.svg",
};

export function ExperienceSection() {
  const sortedExperience = [...portfolio.experience].sort(
    (a, b) => getPeriodSortValue(b.period) - getPeriodSortValue(a.period),
  );

  return (
    <section id="experience" className="-mt-4 scroll-mt-20 bg-[var(--background)] pb-12 pt-0 sm:-mt-6 sm:pb-20 sm:pt-1">
      <Container className="max-w-[96rem] px-4 sm:px-6 lg:px-16">
        <Reveal>
          <SectionHeading
            eyebrow="Expérience"
            title="Parcours professionnel"
            description="Les principales expériences menées en développement web, mobile, backend et intégration DevOps."
          />
        </Reveal>

        <div className="mt-1 grid gap-4 sm:gap-5">
            {sortedExperience.map((item, index) => (
              <Reveal
                key={`${item.title}-${item.company}`}
                delay={0.04 * index}
                y={0}
                initial={{
                  opacity: 0,
                  x: index % 2 === 0 ? -72 : 72,
                }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.05, ease: [0.16, 1, 0.3, 1], delay: 0.06 * index }}
                viewport={{ once: true, amount: 0.2 }}
                className="h-full overflow-hidden rounded-3xl bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.06)]"
              >
                <div className="grid gap-5 p-4 sm:p-5 lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.9fr)] lg:items-start xl:gap-8 xl:p-6">
                  <div>
                    <div className="flex flex-col gap-2">
                      <p className="text-xs sm:text-sm lg:text-base font-semibold text-[#682732]">{item.period}</p>
                      <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold text-slate-900">{item.title}</h3>
                      <p className="text-xs sm:text-sm lg:text-base text-slate-600">
                        {item.company}
                        {item.location ? <span className="text-slate-400"> · {item.location}</span> : null}
                      </p>
                    </div>

                    <p className="mt-3 text-sm leading-6 sm:leading-7 lg:text-base lg:leading-8 text-slate-600">{item.summary}</p>

                    <ul className="mt-3 space-y-1.5 text-sm lg:text-base text-slate-600">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex gap-2">
                          <span className="mt-[6px] sm:mt-[7px] lg:mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#682732]/80" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {item.stack.map((tech) => (
                        <Badge
                          key={tech}
                          className="px-2.5 sm:px-3.5 py-1.5 text-xs sm:text-sm lg:text-base"
                        >
                          <span className="inline-flex items-center gap-2 sm:gap-2.5">
                            {techLogos[tech] ? (
                              <Image
                                src={techLogos[tech]}
                                alt=""
                                width={14}
                                height={14}
                                className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 object-contain"
                                unoptimized
                              />
                            ) : null}
                            <span>{tech}</span>
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <ProjectGallery
                    images={item.images}
                    aspect="16:9"
                    className="mt-0"
                    thumbnailsClassName="grid-cols-3 sm:grid-cols-4"
                  />
                </div>
              </Reveal>
            ))}
        </div>
      </Container>
    </section>
  );
}

function getPeriodSortValue(period: string) {
  const months: Record<string, number> = {
    janv: 1,
    fev: 2,
    "fév": 2,
    mars: 3,
    avr: 4,
    mai: 5,
    juin: 6,
    juil: 7,
    aout: 8,
    "août": 8,
    sept: 9,
    oct: 10,
    nov: 11,
    dec: 12,
    "déc": 12,
  };

  const lower = period.toLowerCase();
  const yearMatch = lower.match(/\d{4}/);
  const year = yearMatch ? Number(yearMatch[0]) : Number.MAX_SAFE_INTEGER;
  const monthKey = Object.keys(months).find((m) => lower.includes(m));
  const month = monthKey ? months[monthKey] : 0;

  return year * 100 + month;
}
