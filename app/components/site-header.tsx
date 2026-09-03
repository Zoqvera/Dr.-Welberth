import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Página inicial">
        <span className="brand-mark">WF</span>
        <span>
          <strong>Dr. Welberth Fernandes</strong>
          <small>Medicina e informação em reumatologia</small>
        </span>
      </Link>
      <nav aria-label="Navegação principal">
        <Link href="/sobre">Sobre</Link>
        <Link href="/doencas">Condições</Link>
        <Link href="/artigos">Artigos</Link>
        <Link className="nav-cta" href="/agendamento">Agendar consulta</Link>
      </nav>
    </header>
  );
}
