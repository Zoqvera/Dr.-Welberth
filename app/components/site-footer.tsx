import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div>
        <strong>Dr. Welberth Fernandes de Souza</strong>
        <p>Conteúdo médico e informações para pacientes.</p>
      </div>
      <div className="footer-links">
        <Link href="/privacidade">Política de Privacidade</Link>
        <Link href="/termos">Termos de Uso</Link>
      </div>
      <p className="footer-legal">
        Conteúdo educativo. Informações profissionais obrigatórias serão publicadas após validação documental antes do lançamento comercial.
      </p>
    </footer>
  );
}
