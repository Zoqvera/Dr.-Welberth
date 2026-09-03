const conditions = [
  "Artrite reumatoide",
  "Fibromialgia",
  "Lúpus",
  "Artrose",
  "Osteoporose",
  "Gota",
];

const articles = [
  {
    title: "Rigidez nas articulações pela manhã: quando procurar avaliação médica?",
    category: "Sintomas",
  },
  {
    title: "Artrite e artrose: quais são as principais diferenças?",
    category: "Doenças reumáticas",
  },
  {
    title: "Fibromialgia: o que é e como costuma ser investigada?",
    category: "Fibromialgia",
  },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Página inicial">
          <span className="brand-mark">WF</span>
          <span>
            <strong>Dr. Welberth Fernandes</strong>
            <small>Medicina e informação em reumatologia</small>
          </span>
        </a>
        <nav aria-label="Navegação principal">
          <a href="#sobre">Sobre</a>
          <a href="#condicoes">Condições</a>
          <a href="#artigos">Artigos</a>
          <a className="nav-cta" href="#agendamento">Agendar consulta</a>
        </nav>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow">Cuidado clínico • Informação baseada em evidências</p>
          <h1>Compreender a doença é parte do cuidado.</h1>
          <p className="hero-text">
            Conteúdo médico claro sobre doenças reumáticas, sintomas, investigação e tratamento,
            além de um caminho simples para solicitar uma consulta.
          </p>
          <div className="hero-actions">
            <a className="button primary" href="#agendamento">Agendar consulta</a>
            <a className="button secondary" href="#condicoes">Conhecer condições</a>
          </div>
          <p className="credential-note">
            As credenciais profissionais e o enquadramento da especialidade serão publicados após
            validação documental para manter a comunicação médica precisa.
          </p>
        </div>
        <div className="hero-panel" aria-label="Apresentação do médico">
          <div className="portrait-placeholder">Foto profissional</div>
          <div>
            <p className="panel-kicker">Trajetória médica</p>
            <h2>Welberth Fernandes de Souza</h2>
            <p>Medicina — Unimontes</p>
            <p>Clínica Médica — HC-UFU</p>
            <p>Formação em Reumatologia — HC-FMRP-USP</p>
          </div>
        </div>
      </section>

      <section className="section" id="condicoes">
        <div className="section-heading">
          <p className="eyebrow">Informação para pacientes</p>
          <h2>Condições reumatológicas</h2>
          <p>
            Cada condição terá uma página própria, com linguagem acessível, referências e conteúdo
            revisado periodicamente.
          </p>
        </div>
        <div className="card-grid">
          {conditions.map((condition) => (
            <article className="condition-card" key={condition}>
              <span>Guia</span>
              <h3>{condition}</h3>
              <p>Sintomas, diagnóstico, acompanhamento e possibilidades de tratamento.</p>
              <a href="#artigos">Explorar conteúdo →</a>
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
            A proposta deste espaço é unir atendimento médico, educação em saúde e conteúdo
            confiável. A apresentação profissional definitiva será publicada somente após a
            confirmação dos dados que devem constar na publicidade médica.
          </p>
          <div className="timeline">
            <div><strong>Unimontes</strong><span>Graduação em Medicina</span></div>
            <div><strong>HC-UFU</strong><span>Residência em Clínica Médica</span></div>
            <div><strong>HC-FMRP-USP</strong><span>Formação em Reumatologia</span></div>
          </div>
        </div>
      </section>

      <section className="section articles-section" id="artigos">
        <div className="section-heading horizontal">
          <div>
            <p className="eyebrow">Biblioteca</p>
            <h2>Artigos para entender melhor sua saúde.</h2>
          </div>
          <a href="#" aria-label="Ver todos os artigos">Ver todos →</a>
        </div>
        <div className="article-list">
          {articles.map((article) => (
            <article key={article.title}>
              <span>{article.category}</span>
              <h3>{article.title}</h3>
              <p>Leitura educativa. O conteúdo não substitui avaliação médica individual.</p>
              <a href="#">Ler artigo →</a>
            </article>
          ))}
        </div>
      </section>

      <section className="booking" id="agendamento">
        <div>
          <p className="eyebrow light">Agendamento</p>
          <h2>Solicite sua consulta.</h2>
          <p>
            O módulo de agenda será conectado depois à disponibilidade real do médico. Nesta etapa,
            a interface já está preparada para receber o fluxo de escolha de modalidade, data e horário.
          </p>
        </div>
        <button type="button" disabled>Agenda em configuração</button>
      </section>

      <footer>
        <div>
          <strong>Dr. Welberth Fernandes de Souza</strong>
          <p>Conteúdo médico e informações para pacientes.</p>
        </div>
        <div className="footer-links">
          <a href="#">Política de Privacidade</a>
          <a href="#">Termos de Uso</a>
        </div>
        <p className="footer-legal">
          Dados profissionais obrigatórios serão incluídos após validação antes da publicação comercial.
        </p>
      </footer>
    </main>
  );
}
