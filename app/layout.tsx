import type { Metadata, Viewport } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";
import "./pages.css";
import "./refinements.css";

export const metadata: Metadata = {
  title: {
    default: "Dr. Welberth Fernandes de Souza",
    template: "%s | Dr. Welberth Fernandes de Souza",
  },
  description:
    "Informação médica em reumatologia, doenças reumáticas e orientações para agendamento de consulta.",
};

export const viewport: Viewport = {
  themeColor: "#113830",
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
