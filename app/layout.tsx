import type { Metadata, Viewport } from "next";
import { SiteFooter } from "./components/site-footer";
import { SiteHeader } from "./components/site-header";
import "./globals.css";
import "./pages.css";
import "./refinements.css";
import "./mobile.css";

const siteUrl = "https://zoqvera.github.io/Dr.-Welberth/";
const siteTitle = "Dr. Welberth Fernandes de Souza";
const siteDescription =
  "Informação médica em reumatologia, doenças reumáticas e orientações para agendamento de consulta.";
const openGraphImageUrl = `${siteUrl}open_graph_welberth.png`;

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: siteUrl,
    siteName: siteTitle,
    title: siteTitle,
    description: siteDescription,
    images: [
      {
        url: openGraphImageUrl,
        alt: siteTitle,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
    images: [openGraphImageUrl],
  },
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
