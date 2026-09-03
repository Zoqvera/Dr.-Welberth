import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Política de Privacidade",
  description: "Informações sobre privacidade e tratamento de dados no site.",
};

export default function PrivacidadePage() {
  return (
    <main className="inner-page">
      <article className="article-page legal-page">
        <div className="article-header">
          <p className="eyebrow">Privacidade</p>
          <h1>Política de Privacidade</h1>
          <p className="lead">Versão preliminar para a fase de desenvolvimento.</p>
        </div>
        <div className="article-body">
          <p>
            A versão definitiva desta política será publicada antes da coleta de dados de pacientes. Ela deverá identificar o controlador, as finalidades do tratamento, as bases legais aplicáveis, os prazos de retenção e os canais para exercício dos direitos previstos na legislação.
          </p>
          <h2>Princípio adotado no projeto</h2>
          <p>
            O site será construído com minimização de dados: o agendamento inicial solicitará apenas as informações necessárias para identificar o paciente, possibilitar contato e registrar a solicitação de horário. Dados clínicos não serão solicitados nesse fluxo sem necessidade definida e infraestrutura apropriada.
          </p>
        </div>
      </article>
    </main>
  );
}
