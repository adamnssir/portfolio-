import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/motion/Reveal";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Badge } from "@/components/ui/Badge";
import { ProjectGallery } from "@/components/gallery/ProjectGallery";

const techLogos: Record<string, string> = {
  React: "/logotechnologie/reactjs-svgrepo-com.svg",
  Vite: "/logotechnologie/vitejs-svgrepo-com.svg",
  "Next.js": "/logotechnologie/nextjs-icon-svgrepo-com.svg",
  NestJS: "/logotechnologie/nestjs-svgrepo-com.svg",
  "Spring Boot": "/logotechnologie/Spring_Boot.svg.png",
  PostgreSQL: "/logotechnologie/postgresql-svgrepo-com.svg",
  MongoDB: "/logotechnologie/mongo-svgrepo-com.svg",
  TypeScript: "/logotechnologie/typescript-icon-svgrepo-com.svg",
  JavaScript: "/logotechnologie/javascript-svgrepo-com.svg",
  Docker: "/logotechnologie/docker-svgrepo-com.svg",
  "Docker Compose": "/logotechnologie/docker-svgrepo-com.svg",
  Jenkins: "/logotechnologie/jenkins-svgrepo-com.svg",
  Nginx: "/logotechnologie/nginx-svgrepo-com.svg",
  "GitLab CI/CD": "/logotechnologie/gitlab-svgrepo-com.svg",
  Stripe: "/logotechnologie/stripe-v2-svgrepo-com.svg",
  GitHub: "/logotechnologie/github-svgrepo-com.svg",
  "GitHub Actions": "/logotechnologie/github-svgrepo-com.svg",
  WebSocket: "/logotechnologie/websocket-svgrepo-com.svg",
  JWT: "/logotechnologie/jwt-icon.png",
  RBAC: "/logotechnologie/rbac.png",
  Jest: "/logotechnologie/jest-snapshot-svgrepo-com.svg",
  "Gemini API": "/logotechnologie/api gemini.png",
  "Node.js": "/logotechnologie/nodejs-svgrepo-com.svg",
  Android: "/logotechnologie/android-svgrepo-com.svg",
  "Android Studio": "/logotechnologie/android-svgrepo-com.svg",
  Kotlin: "/logotechnologie/kotlin-16-svgrepo-com.svg",
  Xcode: "/logotechnologie/xcode-svgrepo-com.svg",
  Swift: "/logotechnologie/swift-svgrepo-com.svg",
  MySQL: "/logotechnologie/mysql-logo-svgrepo-com.svg",
  XML: "/logotechnologie/xml-svgrepo-com.svg",
  Maven: "/logotechnologie/maven-svgrepo-com.svg",
  SonarQube: "/logotechnologie/sonarqube-svgrepo-com.svg",
  Prometheus: "/logotechnologie/prometheus-svgrepo-com.svg",
  Grafana: "/logotechnologie/grafana-svgrepo-com.svg",
  Nexus: "/logotechnologie/nexus-svgrepo-com.svg",
};

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-24 py-16 sm:py-20">
      <Container className="max-w-[96rem] px-5 sm:px-8 lg:px-16">
        <Reveal>
          <SectionHeading
            eyebrow="Projets"
            title="Projets académiques"
            description="Sélection de projets académiques avec technologies, outils et fonctionnalités clés."
          />
        </Reveal>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {portfolio.projects.map((project, idx) => {
            const isCollabHub = project.id === "collabhub-ai";
            return (
              <Reveal
                key={project.id}
                delay={0.04 * idx}
                className={[
                  "h-full rounded-[28px] bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.06)]",
                  isCollabHub ? "p-5 sm:p-6 lg:col-span-3" : "p-5 sm:p-6",
                ].join(" ")}
              >
                <div id={project.id} className="scroll-mt-24" />
                <div
                  className={[
                    "flex h-full flex-col gap-6",
                    isCollabHub ? "lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.9fr)] lg:items-start" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-slate-900 sm:text-2xl">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                      {project.description}
                    </p>
                    {isCollabHub ? (
                      <ul className="mt-4 space-y-2 text-sm text-slate-600">
                        {project.features.map((f) => (
                          <li key={f} className="flex gap-2">
                            <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#682732]/80" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((t) => (
                        <Badge
                          key={t}
                          className="px-3.5 py-1.5 text-sm"
                        >
                          <span className="inline-flex items-center gap-2.5">
                            {techLogos[t] ? (
                              <Image
                                src={techLogos[t]}
                                alt=""
                                width={16}
                                height={16}
                                className="h-4 w-4 object-contain"
                                unoptimized
                              />
                            ) : null}
                            <span>{t}</span>
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className={isCollabHub ? "space-y-6" : ""}>
                    {!isCollabHub ? (
                      <div className="rounded-3xl bg-[#682732]/5 p-4 shadow-[0_14px_30px_rgba(104,39,50,0.06)]">
                        <p className="text-base font-semibold text-slate-900">Fonctionnalités clés</p>
                        <ul className="mt-3 space-y-2 text-sm text-slate-600">
                          {project.features.map((f) => (
                            <li key={f} className="flex gap-2">
                              <span className="mt-[7px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#682732]/80" />
                              <span>{f}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ) : null}

                    {isCollabHub ? (
                      <ProjectGallery
                        images={project.images}
                        aspect="16:9"
                        className="mt-0"
                        thumbnailsClassName="grid-cols-4"
                      />
                    ) : null}
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
