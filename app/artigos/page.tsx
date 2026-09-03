import type { Metadata } from "next";
import { ArticleCard } from "../components/article-card";
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
            <ArticleCard article={article} headingLevel={2} key={article.slug} />
          ))}
        </div>
      </section>
    </main>
  );
}
