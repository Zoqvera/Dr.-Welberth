import Link from "next/link";
import type { Article } from "../content";
import { ArticleCover } from "./article-cover";

type ArticleCardProps = {
  article: Article;
  headingLevel: 2 | 3;
};

export function ArticleCard({ article, headingLevel }: ArticleCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="article-card">
      <ArticleCover category={article.category} slug={article.slug} />
      <div className="article-card-copy">
        <span>{article.category}</span>
        <Heading>{article.title}</Heading>
        <p>{article.excerpt}</p>
        <Link href={`/artigos/${article.slug}`}>Ler artigo →</Link>
      </div>
    </article>
  );
}
