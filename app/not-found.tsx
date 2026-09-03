import Link from "next/link";

export default function NotFound() {
  return (
    <main className="inner-page">
      <section className="page-hero compact">
        <p className="eyebrow">404</p>
        <h1>Página não encontrada</h1>
        <p className="lead">O endereço pode ter mudado ou o conteúdo ainda não foi publicado.</p>
        <p><Link className="button primary inline-button" href="/">Voltar para a página inicial</Link></p>
      </section>
    </main>
  );
}
