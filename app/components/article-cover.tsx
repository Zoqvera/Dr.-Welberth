type ArticleCoverProps = {
  category: string;
  slug: string;
};

function getVariant(slug: string) {
  const sum = Array.from(slug).reduce((total, char) => total + char.charCodeAt(0), 0);
  return (sum % 3) + 1;
}

export function ArticleCover({ category, slug }: ArticleCoverProps) {
  const variant = getVariant(slug);

  return (
    <div className={`article-cover article-cover-${variant}`} aria-hidden="true">
      <span className="article-cover-label">{category}</span>
      <svg viewBox="0 0 320 190" preserveAspectRatio="none">
        <circle className="article-cover-shape shape-a" cx="68" cy="54" r="48" />
        <circle className="article-cover-shape shape-b" cx="252" cy="136" r="72" />
        <path className="article-cover-line" d="M-10 142C72 84 145 208 330 76" />
        <path className="article-cover-line thin" d="M-12 105C90 46 154 166 332 36" />
      </svg>
      <span className="article-cover-mark">WF</span>
    </div>
  );
}
