import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" href="/" aria-label="Dr. Welberth Fernandes — página inicial">
        <strong style={{ maxWidth: "none" }}>Dr. Welberth Fernandes</strong>
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
