import type { Metadata } from "next";
import Link from "next/link";
import { conditions } from "../content";

export const metadata: Metadata = {
  title: "Doenças reumatológicas",
  description: "Guias introdutórios sobre doenças e condições reumatológicas.",
};

export default function DoencasPage() {
  return (
    <main className="inner-page">
      <section className="page-hero compact">
        <p className="eyebrow">Biblioteca clínica</p>
        <h1>Condições reumatológicas</h1>
        <p className="lead">
          Guias educativos para compreender sintomas, investigação, acompanhamento e possibilidades de tratamento.
        </p>
      </section>

      <section className="section flush-top">
        <div className="card-grid">
          {conditions.map((condition) => (
            <article className="condition-card" key={condition.slug}>
              <span>Guia</span>
              <h2>{condition.name}</h2>
              <p>{condition.summary}</p>
              <Link href={`/doencas/${condition.slug}`}>Abrir guia →</Link>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
