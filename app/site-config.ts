export type MedicalTraining = {
  shortInstitution: string;
  institution: string;
  program: string;
  heroLabel: string;
};

export const siteConfig = {
  url: "https://zoqvera.github.io/Dr.-Welberth/",
  title: "Dr. Welberth Fernandes de Souza",
  description:
    "Informação médica em reumatologia, doenças reumáticas e orientações para agendamento de consulta.",
  openGraphImage: "open_graph_welberth.jpg",
} as const;

export const doctorProfile = {
  name: "Welberth Fernandes de Souza",
  displayName: "Dr. Welberth Fernandes de Souza",
  professionalId: "MÉDICO — CRM-SP 270090",
  portraitUrl:
    "https://raw.githubusercontent.com/Zoqvera/Dr.-Welberth/main/dr.welberth_2.png",
  training: [
    {
      shortInstitution: "Unimontes",
      institution: "Universidade Estadual de Montes Claros — Unimontes",
      program: "Graduação em Medicina",
      heroLabel: "Medicina — Unimontes",
    },
    {
      shortInstitution: "HC-UFU",
      institution: "Hospital de Clínicas da Universidade Federal de Uberlândia — HC-UFU",
      program: "Residência Médica em Clínica Médica",
      heroLabel: "Clínica Médica — HC-UFU",
    },
    {
      shortInstitution: "HC-FMRP-USP",
      institution: "Hospital das Clínicas da Faculdade de Medicina de Ribeirão Preto — USP",
      program: "Formação em Reumatologia",
      heroLabel: "Formação em Reumatologia — HC-FMRP-USP",
    },
  ] satisfies MedicalTraining[],
} as const;
