# Dr. Welberth Fernandes de Souza

Site profissional e portal de conteúdo médico com foco em informação reumatológica e agendamento.

## Stack

- Next.js 15
- React 19
- TypeScript
- App Router

## Implementado

- Home institucional responsiva
- Cabeçalho e rodapé globais
- Página `/sobre`
- Página `/doencas`
- Rotas dinâmicas `/doencas/[slug]`
- Página `/artigos`
- Rotas dinâmicas `/artigos/[slug]`
- Página `/agendamento` com fluxo planejado de quatro etapas
- Páginas preliminares `/privacidade` e `/termos`
- Página 404 personalizada
- Metadata individual para páginas e conteúdos
- Conteúdo centralizado em `app/content.ts`
- Estrutura preparada para links internos entre doenças e artigos

## Conteúdo inicial

Guias estruturados para:

- Artrite reumatoide
- Fibromialgia
- Lúpus
- Artrose
- Osteoporose
- Gota

Os textos clínicos definitivos deverão passar por revisão médica antes da publicação.

## Desenvolvimento local

```bash
npm install
npm run dev
```

Acesse `http://localhost:3000`.

## Próximas etapas

1. Validar CRM, RQE e forma correta de apresentação profissional.
2. Conectar o repositório à Vercel e validar o build de produção.
3. Inserir fotografia profissional e identidade visual definitiva.
4. Definir provedor e regras da agenda.
5. Implementar persistência de agendamentos e painel administrativo.
6. Finalizar política de privacidade e tratamento de cookies.
7. Configurar domínio, sitemap, robots, dados estruturados e Search Console.
8. Integrar analytics com eventos de conversão.
