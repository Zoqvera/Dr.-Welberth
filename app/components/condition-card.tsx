import Link from "next/link";
import type { Condition } from "../content";
import { ConditionIcon } from "./condition-icon";

type ConditionCardProps = {
  condition: Condition;
  headingLevel: 2 | 3;
  linkLabel: string;
};

export function ConditionCard({ condition, headingLevel, linkLabel }: ConditionCardProps) {
  const Heading = headingLevel === 2 ? "h2" : "h3";

  return (
    <article className="condition-card">
      <div className="condition-card-top">
        <ConditionIcon slug={condition.slug} />
        <span>Guia</span>
      </div>
      <Heading>{condition.name}</Heading>
      <p>{condition.summary}</p>
      <Link href={`/doencas/${condition.slug}`}>{linkLabel}</Link>
    </article>
  );
}
