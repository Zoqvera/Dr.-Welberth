import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArticleCover } from "../../components/article-cover";
import { articles, getArticle, getCondition } from "../../content";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) return {};

  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function ArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) notFound();

  const relatedCondition = article.conditionSlug ? getCondition(article.conditionSlug) : undefined;

  return (
    <main className="inner-page">
      <article className="article-page">
        <div className="article-header">
          <p className="eyebrow">{article.category}</p>
          <h1>{article.title}</h1>
          <p className="lead">{article.excerpt}</p>
          <div className="article-meta">
            <span>Conteúdo educativo</span>
            <span>Revisão médica pendente para publicação</span>
          </div>
        </div>

        <div className="article-page-cover">
          <ArticleCover category={article.category} slug={article.slug} />
        </div>

        <div className="article-body">
          <p>
            Esta é a estrutura editorial inicial do artigo. O texto clínico definitivo será incluído após revisão médica, com referências e data de atualização.
          </p>
          <h2>Como este conteúdo será organizado</h2>
          <p>
            A versão publicada explicará conceitos essenciais, sinais que merecem atenção, como a avaliação costuma ser conduzida e quais dúvidas levar à consulta. O objetivo é informar sem induzir autodiagnóstico.
          </p>
          <div className="medical-disclaimer">
            <strong>Informação de saúde não substitui consulta</strong>
            <p>Diagnóstico e tratamento dependem de avaliação individual, histórico clínico, exame físico e, quando indicados, exames complementares.</p>
          </div>
          {relatedCondition && (
            <p>
              <Link className="text-link" href={`/doencas/${relatedCondition.slug}`}>
                Ver guia sobre {relatedCondition.name} →
              </Link>
            </p>
          )}
        </div>
      </article>
    </main>
  );
}
