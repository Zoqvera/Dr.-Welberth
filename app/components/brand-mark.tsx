type BrandMarkProps = {
  className?: string;
  title?: string;
};

export function BrandMark({ className = "", title }: BrandMarkProps) {
  const labelled = Boolean(title);

  return (
    <svg
      className={`brand-symbol ${className}`.trim()}
      viewBox="0 0 64 64"
      role={labelled ? "img" : undefined}
      aria-hidden={labelled ? undefined : true}
      aria-label={title}
    >
      <circle className="brand-symbol-ring" cx="32" cy="32" r="28" />
      <path
        className="brand-symbol-stroke"
        d="M14 21.5 20.5 42 27.5 27.5 34 42 40.5 21.5"
      />
      <path className="brand-symbol-stroke" d="M43.5 21.5v20.5M43.5 21.5H52M43.5 30.5h7" />
      <circle className="brand-symbol-joint" cx="32" cy="18" r="2.25" />
    </svg>
  );
}
