import type { Metadata } from "next";
import Link from "next/link";
import { ArticleCover } from "../components/article-cover";
import { articles } from "../content";

export const metadata: Metadata = {
  title: "Artigos",
  description: "Artigos educativos sobre sintomas, doenças reumáticas e cuidados em saúde.",
};

export default function ArtigosPage() {
  return (
    <main className="inner-page">
      <section className="page-hero compact">
        <p className="eyebrow">Biblioteca</p>
        <h1>Artigos sobre saúde reumatológica</h1>
        <p className="lead">
          Conteúdo educativo em linguagem acessível, organizado para facilitar a busca por temas e condições.
        </p>
      </section>

      <section className="section flush-top">
        <div className="article-list">
          {articles.map((article) => (
            <article className="article-card" key={article.slug}>
              <ArticleCover category={article.category} slug={article.slug} />
              <div className="article-card-copy">
                <span>{article.category}</span>
                <h2>{article.title}</h2>
                <p>{article.excerpt}</p>
                <Link href={`/artigos/${article.slug}`}>Ler artigo →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
