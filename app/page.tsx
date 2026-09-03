import Link from "next/link";
import { ArticleCover } from "./components/article-cover";
import { ConditionIcon } from "./components/condition-icon";
import { articles, conditions } from "./content";

export default function Home() {
  return (
    <main>
      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Cuidado clínico • Informação baseada em evidências</p>
          <h1>Compreender a doença é parte do cuidado.</h1>
          <div className="hero-actions">
            <Link className="button primary" href="/agendamento">Agendar consulta</Link>
            <Link className="button secondary" href="/doencas">Conhecer condições</Link>
          </div>
        </div>
        <div className="hero-panel" aria-label="Apresentação do médico">
          <figure className="doctor-portrait-frame">
            <img
              className="doctor-portrait"
              src="https://raw.githubusercontent.com/Zoqvera/Dr.-Welberth/main/dr.welberth_2.png"
              alt="Dr. Welberth Fernandes de Souza"
            />
            <figcaption
              className="ai-image-label"
              style={{
                background: "#ffd54a",
                borderTopColor: "rgba(24, 38, 34, 0.18)",
                color: "#182622",
              }}
            >
              Imagem provisória gerada por IA
            </figcaption>
          </figure>
          <div>
            <p className="panel-kicker">Trajetória médica</p>
            <h2>Welberth Fernandes de Souza</h2>
            <p>MÉDICO — CRM-SP 270090</p>
            <p>Medicina — Unimontes</p>
            <p>Clínica Médica — HC-UFU</p>
            <p>Formação em Reumatologia — HC-FMRP-USP</p>
          </div>
        </div>
      </section>

      <section className="section" id="condicoes">
        <div className="section-heading horizontal">
          <div>
            <p className="eyebrow">Informação para pacientes</p>
            <h2>Condições reumatológicas</h2>
            <p>Cada condição tem uma página própria, pensada para explicar o essencial em linguagem acessível.</p>
          </div>
          <Link href="/doencas">Ver todas →</Link>
        </div>
        <div className="card-grid">
          {conditions.map((condition) => (
            <article className="condition-card" key={condition.slug}>
              <div className="condition-card-top">
                <ConditionIcon slug={condition.slug} />
                <span>Guia</span>
              </div>
              <h3>{condition.name}</h3>
              <p>{condition.summary}</p>
              <Link href={`/doencas/${condition.slug}`}>Explorar conteúdo →</Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section split" id="sobre">
        <div>
          <p className="eyebrow">Sobre</p>
          <h2>Formação clínica sólida, comunicação clara.</h2>
        </div>
        <div className="about-copy">
          <p>
            Este espaço foi concebido para unir atendimento médico, educação em saúde e conteúdo
            confiável, com transparência sobre formação e credenciais profissionais.
          </p>
          <div className="timeline">
            <div><strong>Unimontes</strong><span>Graduação em Medicina</span></div>
            <div><strong>HC-UFU</strong><span>Residência em Clínica Médica</span></div>
            <div><strong>HC-FMRP-USP</strong><span>Formação em Reumatologia</span></div>
          </div>
          <p><Link className="text-link" href="/sobre">Conheça a trajetória →</Link></p>
        </div>
      </section>

      <section className="section articles-section" id="artigos">
        <div className="section-heading horizontal">
          <div>
            <p className="eyebrow">Biblioteca</p>
            <h2>Artigos para entender melhor sua saúde.</h2>
          </div>
          <Link href="/artigos">Ver todos →</Link>
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <article className="article-card" key={article.slug}>
              <ArticleCover category={article.category} slug={article.slug} />
              <div className="article-card-copy">
                <span>{article.category}</span>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <Link href={`/artigos/${article.slug}`}>Ler artigo →</Link>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="booking" id="agendamento">
        <div>
          <p className="eyebrow light">Agendamento</p>
          <h2>Solicite sua consulta.</h2>
          <p>
            O fluxo de agenda será conectado à disponibilidade real do médico. A página já pode receber
            escolha de modalidade, data, horário e dados básicos do paciente.
          </p>
        </div>
        <Link className="booking-link" href="/agendamento">Abrir agendamento</Link>
      </section>
    </main>
  );
}
