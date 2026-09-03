import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Termos de Uso",
  description: "Termos de uso do site e limites do conteúdo educativo.",
};

export default function TermosPage() {
  return (
    <main className="inner-page">
      <article className="article-page legal-page">
        <div className="article-header">
          <p className="eyebrow">Termos</p>
          <h1>Termos de Uso</h1>
          <p className="lead">Versão preliminar para a fase de desenvolvimento.</p>
        </div>
        <div className="article-body">
          <p>
            Os materiais publicados neste site terão caráter exclusivamente informativo e educativo. Eles não constituem diagnóstico, prescrição, prognóstico ou orientação individual de tratamento.
          </p>
          <h2>Uso responsável do conteúdo</h2>
          <p>
            Informações gerais sobre sintomas e doenças não substituem consulta médica. Situações de urgência ou emergência devem ser encaminhadas aos serviços de saúde apropriados.
          </p>
          <h2>Agendamento</h2>
          <p>
            A solicitação de horário somente será considerada confirmada quando o fluxo definitivo de agenda emitir a respectiva confirmação ao paciente.
          </p>
        </div>
      </article>
    </main>
  );
}
