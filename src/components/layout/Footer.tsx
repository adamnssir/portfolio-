import { portfolio } from "@/data/portfolio";
import { Container } from "@/components/ui/Container";

export function Footer() {
  return (
    <footer className="border-t border-slate-200/80 bg-white/70">
      <Container className="flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-slate-500">
          <span className="text-slate-900">{portfolio.name}</span> · {portfolio.title}
        </div>
      </Container>
    </footer>
  );
}
