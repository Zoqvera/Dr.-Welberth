import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Agendamento",
  description: "Página de solicitação de consulta do Dr. Welberth Fernandes de Souza.",
};

export default function AgendamentoPage() {
  return (
    <main className="inner-page">
      <section className="page-hero compact">
        <p className="eyebrow">Agendamento</p>
        <h1>Solicite uma consulta</h1>
        <p className="lead">
          Esta etapa apresenta o fluxo planejado. A disponibilidade real e o envio de dados serão ativados somente após integração com a agenda profissional e definição do tratamento adequado dos dados pessoais.
        </p>
      </section>

      <section className="booking-flow" aria-label="Fluxo planejado de agendamento">
        <div className="booking-step">
          <span>01</span>
          <div><strong>Modalidade</strong><p>Escolha entre as modalidades efetivamente oferecidas pelo médico.</p></div>
        </div>
        <div className="booking-step">
          <span>02</span>
          <div><strong>Data e horário</strong><p>Consulte apenas horários realmente disponíveis.</p></div>
        </div>
        <div className="booking-step">
          <span>03</span>
          <div><strong>Dados básicos</strong><p>Coleta mínima necessária para identificação e contato.</p></div>
        </div>
        <div className="booking-step">
          <span>04</span>
          <div><strong>Confirmação</strong><p>Resumo do pedido e instruções para a consulta.</p></div>
        </div>
      </section>

      <section className="note-card wide-note">
        <p className="eyebrow">Privacidade desde o início</p>
        <h2>O formulário não pedirá histórico clínico detalhado nesta etapa.</h2>
        <p>
          Dados de saúde exigem tratamento específico. O primeiro fluxo será deliberadamente enxuto e separado do eventual prontuário ou sistema clínico.
        </p>
        <button type="button" disabled>Agenda ainda não conectada</button>
      </section>
    </main>
  );
}
