export type Condition = {
  slug: string;
  name: string;
  summary: string;
  intro: string;
  topics: string[];
};

export type Article = {
  slug: string;
  title: string;
  category: string;
  excerpt: string;
  conditionSlug?: string;
};

export const conditions: Condition[] = [
  {
    slug: "artrite-reumatoide",
    name: "Artrite reumatoide",
    summary: "Doença inflamatória crônica que pode causar dor, inchaço e rigidez articular.",
    intro:
      "A artrite reumatoide é uma doença autoimune que pode afetar diferentes articulações e, em alguns casos, outros órgãos. O diagnóstico e o acompanhamento são individualizados.",
    topics: ["Sintomas mais comuns", "Como é feita a investigação", "Opções de tratamento", "Acompanhamento e qualidade de vida"],
  },
  {
    slug: "fibromialgia",
    name: "Fibromialgia",
    summary: "Condição associada a dor difusa, alterações do sono, fadiga e outros sintomas.",
    intro:
      "A fibromialgia é uma síndrome de dor crônica que costuma envolver sintomas físicos e funcionais variados. A avaliação clínica busca entender o conjunto de manifestações e excluir outras causas quando necessário.",
    topics: ["Dor generalizada", "Sono e fadiga", "Como é feita a avaliação", "Estratégias de tratamento"],
  },
  {
    slug: "lupus",
    name: "Lúpus",
    summary: "Doença autoimune com manifestações que podem variar bastante entre pacientes.",
    intro:
      "O lúpus eritematoso sistêmico pode afetar pele, articulações e diferentes órgãos. A apresentação clínica é variável, por isso o diagnóstico depende da análise conjunta de sintomas, exame físico e exames complementares.",
    topics: ["Manifestações clínicas", "Exames", "Tratamento", "Acompanhamento regular"],
  },
  {
    slug: "artrose",
    name: "Artrose",
    summary: "Alterações articulares degenerativas que podem causar dor e limitação de movimento.",
    intro:
      "A artrose, também chamada osteoartrite, envolve alterações progressivas nas estruturas da articulação. O tratamento busca controlar sintomas e preservar função e mobilidade.",
    topics: ["Dor e limitação", "Fatores de risco", "Diagnóstico", "Tratamento não medicamentoso e medicamentoso"],
  },
  {
    slug: "osteoporose",
    name: "Osteoporose",
    summary: "Condição caracterizada por redução da resistência óssea e maior risco de fraturas.",
    intro:
      "A osteoporose pode permanecer silenciosa por anos. A avaliação de risco, a densitometria quando indicada e medidas preventivas são componentes importantes do cuidado.",
    topics: ["Risco de fraturas", "Densitometria óssea", "Prevenção", "Tratamentos disponíveis"],
  },
  {
    slug: "gota",
    name: "Gota",
    summary: "Artrite inflamatória relacionada ao depósito de cristais de ácido úrico nas articulações.",
    intro:
      "A gota pode provocar crises súbitas de dor intensa e inflamação articular. O manejo envolve tanto o controle das crises quanto, quando indicado, a redução sustentada dos níveis de ácido úrico.",
    topics: ["Crises de gota", "Ácido úrico", "Diagnóstico", "Prevenção de novas crises"],
  },
];

export const articles: Article[] = [
  {
    slug: "rigidez-articular-pela-manha",
    title: "Rigidez nas articulações pela manhã: quando procurar avaliação médica?",
    category: "Sintomas",
    excerpt: "Entenda por que a duração e o padrão da rigidez podem ajudar na investigação clínica.",
  },
  {
    slug: "artrite-e-artrose-diferencas",
    title: "Artrite e artrose: quais são as principais diferenças?",
    category: "Doenças reumáticas",
    excerpt: "Os termos são parecidos, mas descrevem processos diferentes. Veja os conceitos centrais.",
    conditionSlug: "artrose",
  },
  {
    slug: "fibromialgia-como-e-investigada",
    title: "Fibromialgia: o que é e como costuma ser investigada?",
    category: "Fibromialgia",
    excerpt: "Uma introdução ao quadro clínico, aos sintomas associados e à avaliação médica.",
    conditionSlug: "fibromialgia",
  },
];

export function getCondition(slug: string) {
  return conditions.find((condition) => condition.slug === slug);
}

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}
