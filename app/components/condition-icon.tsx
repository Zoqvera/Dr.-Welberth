const iconPaths: Record<string, React.ReactNode> = {
  "artrite-reumatoide": (
    <>
      <circle cx="22" cy="22" r="5" />
      <circle cx="42" cy="42" r="5" />
      <path d="M25.5 25.5 38.5 38.5M18 28l-4 8m32-8 4-8" />
    </>
  ),
  fibromialgia: (
    <>
      <circle cx="32" cy="32" r="8" />
      <path d="M32 12v8M32 44v8M12 32h8M44 32h8M18 18l6 6M40 40l6 6M46 18l-6 6M24 40l-6 6" />
    </>
  ),
  lupus: (
    <>
      <path d="M32 34c-7-12-15-14-20-8 7 0 9 6 10 12 2-5 5-7 10-4Z" />
      <path d="M32 34c7-12 15-14 20-8-7 0-9 6-10 12-2-5-5-7-10-4Z" />
      <path d="M32 34v12" />
    </>
  ),
  artrose: (
    <>
      <circle cx="24" cy="24" r="8" />
      <circle cx="40" cy="40" r="8" />
      <path d="M29.5 29.5 34.5 34.5M17 36l-5 7M47 28l5-7" />
    </>
  ),
  osteoporose: (
    <>
      <path d="M22 15c5 2 15 2 20 0l-3 34c-4-2-10-2-14 0l-3-34Z" />
      <path d="M26 23h12M25 31h14M25 39h14" />
    </>
  ),
  gota: (
    <>
      <path d="m32 13 7 11-7 8-7-8 7-11Z" />
      <path d="m20 35 6 8-6 7-6-7 6-8Zm24-4 6 7-6 7-6-7 6-7Z" />
    </>
  ),
};

type ConditionIconProps = {
  slug: string;
};

export function ConditionIcon({ slug }: ConditionIconProps) {
  return (
    <span className="condition-icon" aria-hidden="true">
      <svg viewBox="0 0 64 64">
        <g fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          {iconPaths[slug] ?? iconPaths.artrose}
        </g>
      </svg>
    </span>
  );
}
