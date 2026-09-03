import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Dr. Welberth Fernandes — página inicial">
        <strong>Dr. Welberth Fernandes</strong>
      </Link>
      <nav aria-label="Navegação principal">
        <Link href="/sobre">Sobre</Link>
        <Link href="/doencas">Condições</Link>
        <Link href="/artigos">Artigos</Link>
        <Link className="nav-cta" href="/agendamento" aria-label="Agendar consulta">
          <span className="nav-cta-desktop">Agendar consulta</span>
          <span className="nav-cta-mobile" aria-hidden="true">Agendar</span>
        </Link>
      </nav>
    </header>
  );
}
