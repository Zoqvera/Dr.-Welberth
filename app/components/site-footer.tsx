import Link from "next/link";

export function SiteFooter() {
  return (
    <footer>
      <div>
        <strong>Dr. Welberth Fernandes de Souza</strong>
        <p>MÉDICO — CRM-SP 270090</p>
        <p>Conteúdo médico e informações para pacientes.</p>
      </div>
      <div className="footer-links">
        <Link href="/privacidade">Política de Privacidade</Link>
        <Link href="/termos">Termos de Uso</Link>
      </div>
      <p className="footer-legal">
        Conteúdo educativo. A apresentação de especialidade e RQE será incluída somente após validação documental.
      </p>
      <p className="footer-credit">
        Desenvolvido por <a href="https://zoqvera.com">Zoqvera</a>
      </p>
    </footer>
  );
}
