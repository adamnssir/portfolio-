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

export function ProjectsSection() {
  return (
    <section id="projects" className="scroll-mt-20 py-12 sm:py-20">
      <Container className="max-w-[96rem] px-4 sm:px-6 lg:px-16">
        <Reveal>
          <SectionHeading
            eyebrow="Projets"
            title="Projets académiques"
            description="Sélection de projets académiques avec technologies, outils et fonctionnalités clés."
          />
        </Reveal>

        <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 lg:grid-cols-3">
          {portfolio.projects.map((project, idx) => {
            const isCollabHub = project.id === "collabhub-ai";
            return (
              <Reveal
                key={project.id}
                delay={0.04 * idx}
                className={[
                  "h-full rounded-[28px] bg-white/95 shadow-[0_18px_45px_rgba(15,23,42,0.06)]",
                  isCollabHub ? "p-4 sm:p-6 lg:col-span-3" : "p-4 sm:p-6",
                ].join(" ")}
              >
                <div id={project.id} className="scroll-mt-20" />
                <div
                  className={[
                    "flex h-full flex-col gap-5 sm:gap-6",
                    isCollabHub ? "lg:grid lg:grid-cols-[minmax(0,1.2fr)_minmax(280px,0.9fr)] lg:items-start" : "",
                  ]
                    .filter(Boolean)
                    .join(" ")}
                >
                  <div>
                    <h3 className="text-lg sm:text-xl lg:text-2xl font-semibold tracking-tight text-slate-900">
                      {project.title}
                    </h3>
                    <p className="mt-3 text-sm leading-6 sm:leading-7 lg:text-base lg:leading-8 text-slate-600">
                      {project.description}
                    </p>
                    {isCollabHub ? (
                      <ul className="mt-3 sm:mt-4 space-y-1.5 sm:space-y-2 text-sm lg:text-base text-slate-600">
                        {project.features.map((f) => (
                          <li key={f} className="flex gap-2">
                            <span className="mt-[6px] sm:mt-[7px] lg:mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#682732]/80" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                    <div className="mt-4 sm:mt-5 flex flex-wrap gap-2">
                      {project.stack.map((t) => (
                        <Badge key={t} className="text-xs sm:text-sm lg:text-base">
                          <span className="inline-flex items-center gap-2 sm:gap-2.5">
                            {techLogos[t] ? (
                              <Image
                                src={techLogos[t]}
                                alt=""
                                width={14}
                                height={14}
                                className="h-3.5 w-3.5 sm:h-4 sm:w-4 lg:h-5 lg:w-5 object-contain"
                                unoptimized
                              />
                            ) : null}
                            <span>{t}</span>
                          </span>
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className={isCollabHub ? "space-y-5 sm:space-y-6" : ""}>
                    {!isCollabHub ? (
                      <div className="rounded-3xl bg-[#682732]/5 p-3.5 sm:p-4 shadow-[0_14px_30px_rgba(104,39,50,0.06)]">
                        <p className="text-sm sm:text-base lg:text-lg font-semibold text-slate-900">Fonctionnalités clés</p>
                        <ul className="mt-2.5 sm:mt-3 space-y-1.5 sm:space-y-2 text-sm lg:text-base text-slate-600">
                          {project.features.map((f) => (
                            <li key={f} className="flex gap-2">
                              <span className="mt-[6px] sm:mt-[7px] lg:mt-[8px] h-1.5 w-1.5 shrink-0 rounded-full bg-[#682732]/80" />
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
                        thumbnailsClassName="grid-cols-3 sm:grid-cols-4"
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
