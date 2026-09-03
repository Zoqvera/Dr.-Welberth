import type { Metadata } from "next";
import { ConditionCard } from "../components/condition-card";
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
            <ConditionCard
              condition={condition}
              headingLevel={2}
              key={condition.slug}
              linkLabel="Abrir guia →"
            />
          ))}
        </div>
      </section>
    </main>
  );
}
