import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { articles, conditions, getCondition } from "../../content";

export function generateStaticParams() {
  return conditions.map((condition) => ({ slug: condition.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const condition = getCondition(slug);

  if (!condition) return {};

  return {
    title: condition.name,
    description: condition.summary,
  };
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const condition = getCondition(slug);

  if (!condition) notFound();

  const relatedArticles = articles.filter((article) => article.conditionSlug === condition.slug);

  return (
    <main className="inner-page">
      <section className="page-hero compact">
        <p className="eyebrow">Guia para pacientes</p>
        <h1>{condition.name}</h1>
        <p className="lead">{condition.intro}</p>
      </section>

      <section className="content-grid">
        <article className="prose-card">
          <h2>O que você encontrará neste guia</h2>
          <ul className="topic-list">
            {condition.topics.map((topic) => <li key={topic}>{topic}</li>)}
          </ul>
          <div className="medical-disclaimer">
            <strong>Nota importante</strong>
            <p>Este conteúdo é educativo e não permite confirmar ou excluir um diagnóstico. Sintomas devem ser avaliados no contexto clínico individual.</p>
          </div>
        </article>

        <aside className="note-card">
          <p className="eyebrow">Próximo passo</p>
          <h2>Precisa de avaliação médica?</h2>
          <p>O agendamento será conectado à agenda profissional antes do lançamento público.</p>
          <Link className="button primary inline-button" href="/agendamento">Ir para agendamento</Link>
        </aside>
      </section>

      {relatedArticles.length > 0 && (
        <section className="section articles-section">
          <div className="section-heading">
            <p className="eyebrow">Leituras relacionadas</p>
            <h2>Continue explorando</h2>
          </div>
          <div className="article-list">
            {relatedArticles.map((article) => (
              <article key={article.slug}>
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <Link href={`/artigos/${article.slug}`}>Ler artigo →</Link>
              </article>
            ))}
          </div>
        </section>
      )}
    </main>
  );
}
