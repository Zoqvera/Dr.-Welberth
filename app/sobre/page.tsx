import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sobre",
  description: "Conheça a trajetória de formação médica de Welberth Fernandes de Souza.",
};

export default function SobrePage() {
  return (
    <main className="inner-page">
      <section className="page-hero">
        <p className="eyebrow">Sobre</p>
        <h1>Trajetória médica orientada por formação clínica e atualização contínua.</h1>
        <p className="lead">
          Esta página apresenta apenas informações profissionais já verificadas em fontes públicas. Dados regulatórios destinados à publicidade médica serão adicionados após validação documental.
        </p>
      </section>

      <section className="content-grid">
        <article className="prose-card">
          <h2>Formação</h2>
          <div className="timeline detailed">
            <div>
              <strong>Universidade Estadual de Montes Claros — Unimontes</strong>
              <span>Graduação em Medicina</span>
            </div>
            <div>
              <strong>Hospital de Clínicas da Universidade Federal de Uberlândia — HC-UFU</strong>
              <span>Residência Médica em Clínica Médica</span>
            </div>
            <div>
              <strong>Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto — USP</strong>
              <span>Formação em Reumatologia</span>
            </div>
          </div>
        </article>

        <aside className="note-card">
          <p className="eyebrow">Princípio editorial</p>
          <h2>Informação clara, sem promessas de resultado.</h2>
          <p>
            O conteúdo do site será educativo e baseado em referências confiáveis, sem substituir consulta, diagnóstico ou conduta individualizada.
          </p>
        </aside>
      </section>
    </main>
  );
}
