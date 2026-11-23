/* ==========================================================================
   CONFIGURAÇÕES GERAIS DO SITE
   --------------------------------------------------------------------------
   Edite aqui seu nome, textos da home, "Sobre" e links de contato.
   Tudo o que está marcado como PROVISÓRIO deve ser substituído por você.

   Links de contato: deixe "" (vazio) para esconder o botão.
   Um botão só aparece quando o link é válido:
     - email:     "voce@dominio.com"
     - linkedin:  "https://www.linkedin.com/in/seu-perfil"
     - instagram: "https://www.instagram.com/seu-perfil"
     - resume:    "https://..." ou um arquivo local, ex.: "assets/curriculo.pdf"
   ========================================================================== */

window.SITE_CONFIG = {
  /* ---------- Identidade ---------- */
  name: "Emanuel Tanck",
  role: "Redator Publicitário",
  specialties: ["Ideias.", "Roteiros.", "Histórias."],

  /* ---------- Sobre ---------- */
  about: {
    isPlaceholder: false,
    statement:
      "Toda boa ideia já foi *um filme, um disco, um livro* ou uma conversa que ninguém imaginou que viraria campanha.",
    paragraphs: [
      "Sou o Emanuel. Estudo Publicidade e Propaganda na Univali e escolhi a redação porque é ali que a publicidade começa: numa folha em branco, tentando descobrir o que uma marca tem de verdade para dizer.",
      "Há três anos trabalho como gestor de tráfego. Foi lá que aprendi, na prática, que a atenção das pessoas é disputada segundo a segundo, e que nenhum ajuste de segmentação salva uma ideia sem alma. Os números me ensinaram a respeitar o público. A curiosidade me fez querer falar com ele de outro jeito.",
      "Levo repertório a sério. Cinema, música, literatura, arte, a rua, a conversa que escuto sem querer: tudo vai parar no caderno e, cedo ou tarde, vira ponto de partida. Acredito que quem consome cultura com atenção escreve com mais verdade, e com menos clichê.",
      "Agora procuro um time de criação, agência ou produtora para fazer isso todos os dias: transformar briefing em ideia, e ideia em história.",
    ],
    focusTitle: "Onde eu trabalho melhor",
    focus: [
      "Campanhas publicitárias",
      "Conceito criativo e direção conceitual",
      "Roteiros audiovisuais",
      "Storytelling e narrativa",
      "Branded content",
      "Redação criativa para marcas",
    ],
  },

  /* ---------- Contato ---------- */
  contact: {
    headline: ["Todo briefing esconde", "*uma boa história.*"],
    text:
      "Se você está montando uma dupla, um time de criação ou uma produção, vamos conversar.",
    email: "",     // ex.: "voce@dominio.com"
    linkedin: "https://www.linkedin.com/in/emanuel-tanck-b06499343/",
    instagram: "", // opcional
    resume: "",    // opcional — ex.: "assets/curriculo.pdf"
    emptyMessage:
      "Os canais de contato estão sendo atualizados. Volte em breve.",
  },

  /* ---------- SEO ---------- */
  seo: {
    description:
      "Portfólio de redação publicitária: campanhas, conceitos criativos, roteiros audiovisuais e branded content.",
  },
};
