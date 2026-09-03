import type { Metadata } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Dr. Welberth Fernandes de Souza",
    template: "%s | Dr. Welberth Fernandes de Souza",
  },
  description:
    "Informação médica em reumatologia, doenças reumáticas e orientações para agendamento de consulta.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>
        <SiteHeader />
        {children}
        <SiteFooter />
      </body>
    </html>
  );
}
