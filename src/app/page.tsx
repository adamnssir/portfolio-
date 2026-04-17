import { ExperienceSection } from "@/components/sections/ExperienceSection";
import { HeroSection } from "@/components/sections/HeroSection";
import { ProjectsSection } from "@/components/sections/ProjectsSection";
import { SkillsSection } from "@/components/sections/SkillsSection";

export default function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <ExperienceSection />
      <ProjectsSection />
      <SkillsSection />
    </div>
  );
}
