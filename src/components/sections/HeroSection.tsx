import Image from "next/image";
import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";
import { CopyInlineButton } from "@/components/ui/CopyInlineButton";
import { Reveal } from "@/components/motion/Reveal";
import { TypewriterText } from "@/components/ui/TypewriterText";

type ContactKind = "gmail" | "linkedin" | "github" | "phone";

type HeroContact = {
  key: ContactKind;
  label: string;
  href?: string;
  external?: boolean;
};

export function HeroSection() {
  const sortedEducation = [...portfolio.about.education].sort(
    (a, b) => getStartYearFromPeriod(a.period) - getStartYearFromPeriod(b.period),
  );

  const contacts: HeroContact[] = [
    { key: "linkedin", label: "LinkedIn", href: portfolio.links.linkedin, external: true },
    { key: "github", label: "GitHub", href: portfolio.links.github, external: true },
    { key: "gmail", label: "Gmail", href: `mailto:${portfolio.email}` },
    { key: "phone", label: "Téléphone", href: `tel:${portfolio.phone.replace(/\s+/g, "")}` },
  ];

  return (
    <section id="top" className="relative overflow-hidden">
    
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute -top-24 left-1/2 h-[520px] w-[520px] -translate-x-1/2 rounded-full bg-[#682732]/10 blur-3xl" />
        <div className="absolute top-24 left-16 h-[360px] w-[360px] rounded-full bg-[#8b4350]/8 blur-3xl" />
        <div className="absolute top-40 right-10 h-[420px] w-[420px] rounded-full bg-[#b4707b]/10 blur-3xl" />
      </div>

      <Container className="relative max-w-[96rem] px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-16">
        <div id="about" className="scroll-mt-24" />

        <Reveal>
          <div>
            <p className="text-lg font-semibold uppercase tracking-[0.28em] text-[#682732] sm:text-xl">
              Profil
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.05} className="mt-2">
          <div className="grid items-center gap-10 lg:grid-cols-[380px_minmax(0,1fr)] lg:gap-20">
            <div className="w-full max-w-[380px]">
              <div className="relative">
                <div className="absolute -left-4 -top-4 h-24 w-24 rounded-full bg-[#d8b1b8]/45 blur-2xl" />
                <div className="absolute -bottom-5 -right-5 h-28 w-28 rounded-full bg-[#c68c96]/35 blur-2xl" />
                <div className="absolute inset-0 rotate-6 rounded-[36px] bg-gradient-to-br from-[#d8b1b8]/45 to-[#f3e7ea]/65" />
                <div className="relative overflow-hidden rounded-[36px] bg-white p-2 shadow-[0_24px_60px_rgba(104,39,50,0.18)]">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#f3e7ea]/80 via-transparent to-[#ead1d6]/70" />
                  <div className="relative aspect-[4/5] overflow-hidden rounded-[28px]">
                    <Image
                      src="/photo5.png"
                      alt={`Photo de ${portfolio.name}`}
                      fill
                      sizes="(min-width: 1024px) 300px, 70vw"
                      className="object-cover"
                      priority
                    />
                  </div>
                </div>
              </div>
            </div>

            <div>
              <TypewriterText
                prefix="Je m'appelle"
                text={portfolio.name}
                className="text-3xl text-slate-900 sm:text-5xl lg:text-6xl"
                animatedClassName="inline-block font-black uppercase tracking-[0.12em] text-[#682732] drop-shadow-[0_0_10px_rgba(104,39,50,0.22)]"
                loopPauseMs={3000}
              />
              <p className="mt-3 text-lg font-medium text-slate-600 sm:text-2xl">{portfolio.title}</p>
              <p className="mt-2 text-base font-semibold text-[#682732] sm:text-lg">
                {portfolio.heroStack}
              </p>

              <div className="mt-7">
               
                <ul className="hero-contact-wrapper" aria-label="Contact rapide">
                  {contacts.map((contact) => (
                    <li key={contact.key} className="hero-contact-item">
                      {contact.href ? (
                        contact.key === "gmail" || contact.key === "phone" ? (
                          <div className="hero-contact-combo">
                            <a
                              href={contact.href}
                              className={`hero-contact-icon hero-contact-icon-main hero-contact-${contact.key}`}
                              aria-label={contact.label}
                              target={contact.external ? "_blank" : undefined}
                              rel={contact.external ? "noopener noreferrer" : undefined}
                            >
                              <ContactGlyph kind={contact.key} />
                              <span className="hero-contact-text">{getContactText(contact)}</span>
                            </a>
                            <CopyInlineButton
                              value={contact.key === "gmail" ? portfolio.email : portfolio.phone}
                              label={contact.key === "gmail" ? "l'adresse email" : "le numero de telephone"}
                              className="hero-copy-btn-integrated"
                            />
                          </div>
                        ) : (
                          <a
                            href={contact.href}
                            className={`hero-contact-icon hero-contact-${contact.key}`}
                            aria-label={contact.label}
                            target={contact.external ? "_blank" : undefined}
                            rel={contact.external ? "noopener noreferrer" : undefined}
                          >
                            <ContactGlyph kind={contact.key} />
                            <span className="hero-contact-text">{getContactText(contact)}</span>
                          </a>
                        )
                      ) : (
                        <span
                          className={`hero-contact-icon hero-contact-${contact.key} hero-contact-disabled`}
                          aria-label={`${contact.label} non configuré`}
                        >
                          <ContactGlyph kind={contact.key} />
                          <span className="hero-contact-text">{getContactText(contact)}</span>
                        </span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1} className="mt-6">
          <div className="grid gap-6 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,1.35fr)] lg:items-stretch">
            <div className="flex h-full flex-col rounded-3xl bg-white/95 px-5 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-6 sm:py-5">
              <p className="mt-4 text-justify text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
                {portfolio.summary}
              </p>
              <div className="mt-7 flex flex-col items-center gap-4 text-center">
                <a
                  href="#experience"
                  className="hero-learn-more"
                >
                  <span className="hero-learn-more-circle" aria-hidden="true">
                    <span className="hero-learn-more-icon hero-learn-more-arrow" />
                  </span>
                  <span className="hero-learn-more-text">Mes experiences</span>
                </a>
              </div>
            </div>

            <div className="flex h-full flex-col rounded-3xl bg-white/95 px-6 py-4 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:px-7 sm:py-5">
              <p className="text-lg font-semibold uppercase tracking-[0.28em] text-[#682732] sm:text-xl">
                Formation
              </p>
              <div className="mt-4 grid gap-3">
                {sortedEducation.map((item) => (
                  <div
                    key={item.degree}
                    className="rounded-3xl bg-[#682732]/4 p-4"
                  >
                    <div className="min-w-0">
                      <p className="text-lg font-semibold text-slate-900">{item.degree}</p>
                      <div className="mt-1 flex items-center justify-between gap-3 text-sm">
                        <p className="whitespace-nowrap leading-7 text-slate-600">{item.school}</p>
                        {item.period ? (
                          <p className="shrink-0 whitespace-nowrap font-medium text-[#682732]">
                            {item.period}
                          </p>
                        ) : null}
                      </div>
                      {item.details ? (
                        <p className="mt-1 text-sm font-medium text-[#682732]">{item.details}</p>
                      ) : null}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>

      </Container>
    </section>
  );
}

function getContactText(contact: HeroContact) {
  if (contact.key === "gmail") return portfolio.email;
  if (contact.key === "phone") return portfolio.phone;
  return contact.label;
}

function getStartYearFromPeriod(period?: string) {
  if (!period) return Number.MAX_SAFE_INTEGER;
  const match = period.match(/\d{4}/);
  return match ? Number(match[0]) : Number.MAX_SAFE_INTEGER;
}

function ContactGlyph(props: { kind: ContactKind }) {
  if (props.kind === "gmail") {
    return (
      <svg viewBox="0 0 24 24" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M2.25 5.5A2.25 2.25 0 0 1 4.5 3.25h15A2.25 2.25 0 0 1 21.75 5.5v13A2.25 2.25 0 0 1 19.5 20.75h-15A2.25 2.25 0 0 1 2.25 18.5v-13Zm2.33.75 7.42 5.35 7.42-5.35H4.58Zm14.92 2.77-6.84 4.94a1.125 1.125 0 0 1-1.32 0L4.5 9.02V18.5h15V9.02Z" />
      </svg>
    );
  }

  if (props.kind === "linkedin") {
    return (
      <svg viewBox="0 0 24 24" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M6.94 8.5a1.72 1.72 0 1 1 0-3.44 1.72 1.72 0 0 1 0 3.44ZM5.42 9.82h3.03v8.76H5.42V9.82Zm4.93 0h2.9v1.2h.04c.4-.77 1.4-1.58 2.9-1.58 3.1 0 3.68 2.04 3.68 4.7v4.44h-3.03v-3.93c0-.94-.02-2.14-1.3-2.14-1.31 0-1.51 1.02-1.51 2.08v4h-3.03V9.82Z" />
      </svg>
    );
  }

  if (props.kind === "github") {
    return (
      <svg viewBox="0 0 24 24" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M12 .5a11.5 11.5 0 0 0-3.64 22.41c.58.1.79-.25.79-.56v-2.16c-3.22.7-3.9-1.38-3.9-1.38-.53-1.33-1.28-1.68-1.28-1.68-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.72-1.55-2.57-.29-5.27-1.28-5.27-5.7 0-1.26.45-2.3 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .97-.31 3.17 1.18a10.97 10.97 0 0 1 5.77 0c2.2-1.5 3.16-1.18 3.16-1.18.64 1.58.24 2.75.12 3.04.75.8 1.19 1.84 1.19 3.1 0 4.43-2.7 5.4-5.28 5.69.42.36.79 1.06.79 2.15v3.18c0 .31.2.67.8.56A11.5 11.5 0 0 0 12 .5Z" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 24 24" height="1.2em" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6.62 2.8a2 2 0 0 1 2.19-.5l2.18.72a2 2 0 0 1 1.31 1.6l.18 1.67a1 1 0 0 1-.74 1.06l-1.37.36a.7.7 0 0 0-.46.92 12.33 12.33 0 0 0 5.44 5.44.7.7 0 0 0 .92-.46l.36-1.37a1 1 0 0 1 1.06-.74l1.67.18a2 2 0 0 1 1.6 1.31l.72 2.18a2 2 0 0 1-.5 2.19l-1.08 1.08a3 3 0 0 1-2.96.78 18.5 18.5 0 0 1-9.32-5.39A18.5 18.5 0 0 1 2.4 6.84a3 3 0 0 1 .78-2.96L4.26 2.8a2 2 0 0 1 2.36 0Z" />
    </svg>
  );
}
