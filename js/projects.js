/* ==========================================================================
   CADASTRO DE PROJETOS (CASES)
   --------------------------------------------------------------------------
   COMO ADICIONAR UM CASE NOVO
   1. Copie um dos objetos abaixo (de { até },) e cole no fim da lista.
   2. Troque o "slug" (vira a URL: case.html?slug=seu-slug). Use só letras
      minúsculas, números e hífens. Ele precisa ser único.
   3. Preencha os campos. Qualquer campo opcional deixado vazio ("" ou [])
      faz a seção correspondente desaparecer da página do case.
   4. Quando estiver pronto, mude  published: false  para  published: true.

   PRÉ-VISUALIZAR RASCUNHOS
   Abra  index.html?preview=1  ou  case.html?slug=seu-slug&preview=1
   para ver os projetos com published: false (só você verá; o modo
   não aparece para visitantes que não usam o parâmetro).

   FORMATAÇÃO DE TEXTO
   - Use *asteriscos* para itálico/destaque.
   - Textos longos podem ser uma string (parágrafos separados por linha em
     branco "\n\n") ou um array de strings (um item = um parágrafo).

   IMAGENS
   Coloque os arquivos em /assets/img/ e informe o caminho, ex.:
   "assets/img/minha-campanha/capa.jpg". Sem imagem de capa, o site gera
   automaticamente uma capa tipográfica (coverStyle: "accent" | "dark" | "paper").

   VÍDEOS
   Aceita link do YouTube, Vimeo ou arquivo .mp4.

   CAMPOS DE REFERÊNCIA
   id, slug, published, title, brand, year, category, description, tagline,
   coverImage, coverStyle, heroImage, challenge, insight, creativeConcept,
   manifesto, execution, scripts, gallery, credits, projectType

   category  → "Campanha Publicitária" | "Filme Publicitário" | "Storytelling" |
               "Branded Content" | "Redação Criativa" | "Roteiro Audiovisual"
   projectType (situação) → "autoral" | "veiculada" | "academico"

   Os quatro projetos abaixo são MODELOS de estrutura, com marcas fictícias.
   Eles começam com published: false e não aparecem no site publicado.
   Substitua o conteúdo pelos seus trabalhos reais antes de publicar.
   ========================================================================== */

window.PROJECTS = [
  /* ------------------------------------------------------------------------
     MODELO 1 — CAMPANHA ESPORTIVA (exemplo completo de todos os campos)
     ------------------------------------------------------------------------ */
  {
    id: 1,
    slug: "campanha-esportiva",
    published: false,

    title: "O último quilômetro",
    brand: "[Marca esportiva — exemplo]",
    year: "2026",
    category: "Campanha Publicitária",
    description:
      "Uma campanha sobre a parte da corrida que ninguém fotografa: quando o corpo pede para parar e alguma coisa decide continuar.",
    tagline: "Ninguém lembra da largada.",

    coverImage: "", // ex.: "assets/img/campanha-esportiva/capa.jpg"
    coverStyle: "accent",
    heroImage: "",  // ex.: "assets/img/campanha-esportiva/hero.jpg"

    challenge: [
      "[EXEMPLO] Descreva o briefing: qual era a marca, o produto, o público e o objetivo de comunicação.",
      "[EXEMPLO] Explique o problema: o que tornava esse briefing difícil? Qual era a barreira entre a marca e as pessoas?",
    ],

    insight:
      "Todo corredor amador já negociou consigo mesmo no último quilômetro. *E quase todos já ganharam essa discussão.*",

    creativeConcept: {
      title: "Ninguém lembra da largada.",
      text:
        "[EXEMPLO] Apresente a grande ideia em poucas linhas: como o insight vira um território de comunicação e por que ele é proprietário da marca.",
    },

    manifesto: {
      title: "Manifesto",
      text: [
        "A largada tem música, tem foto, tem gente gritando seu nome.",
        "O último quilômetro tem só você.",
        "E uma voz que diz que já está bom.",
        "Que ninguém vai saber.",
        "Mas você vai.",
        "*Ninguém lembra da largada.*",
      ],
    },

    /* Peças da execução. Tipos aceitos:
       headline | slogan | copy | image | video | link */
    execution: [
      { type: "headline", label: "Headline principal", text: "Seu corpo vai pedir para parar. *Ele sempre pede.*" },
      { type: "copy", label: "Texto de anúncio", title: "Km 41", text: "[EXEMPLO] Body copy do anúncio. Escreva aqui o texto completo da peça." },
      { type: "slogan", label: "Assinatura", text: "[Marca]. Até o fim." },
      // { type: "image", src: "assets/img/campanha-esportiva/anuncio.jpg", alt: "Descrição da imagem", caption: "Anúncio de revista" },
      // { type: "video", src: "https://www.youtube.com/watch?v=XXXXXXXXXXX", caption: "Filme 30\"" },
      // { type: "link", label: "Apresentação completa (PDF)", url: "assets/campanha-esportiva.pdf" },
    ],

    scripts: [
      {
        title: "Filme 30\" — Negociação",
        duration: "30\"",
        format: "Filme para TV e digital",
        synopsis:
          "Uma corredora amadora no último quilômetro de sua primeira maratona. Ouvimos a conversa interna entre a parte dela que quer parar e a parte que não deixa.",
        scenes: [
          {
            time: "00:00 — 00:06",
            location: "EXT. AVENIDA — MANHÃ",
            visual: "Close no tênis batendo no asfalto. O som da multidão está abafado, distante. Placa: KM 41.",
            voiceover: "",
            dialogue: [
              { character: "VOZ INTERNA 1", direction: "cansada", line: "Já está bom. Você chegou longe." },
            ],
            onScreenText: "",
            sound: "Respiração pesada em primeiro plano.",
          },
          {
            time: "00:06 — 00:15",
            location: "EXT. AVENIDA — CONTÍNUO",
            visual: "Ela diminui o ritmo. Corredores passam por ela, desfocados.",
            dialogue: [
              { character: "VOZ INTERNA 2", direction: "firme", line: "Você não veio até aqui para ser lembrada pela largada." },
            ],
            sound: "A trilha começa, mínima.",
          },
          {
            time: "00:15 — 00:25",
            location: "EXT. RETA FINAL",
            visual: "Ela volta a acelerar. A câmera sobe e revela a linha de chegada ainda longe.",
            voiceover: "LOC. (OFF): Ninguém lembra da largada.",
            onScreenText: "Ninguém lembra da largada.",
            sound: "Trilha cresce. Multidão volta ao volume normal.",
          },
          {
            time: "00:25 — 00:30",
            location: "PACKSHOT",
            visual: "Logo da marca sobre fundo neutro.",
            onScreenText: "[Marca]. Até o fim.",
            sound: "Corte seco na trilha.",
          },
        ],
        signature: "[Marca]. Até o fim.",
      },
    ],

    /* Desdobramentos: OOH, posts, cartazes, adaptações... */
    gallery: [
      // { src: "assets/img/campanha-esportiva/ooh.jpg", alt: "Outdoor na avenida", caption: "Mídia exterior", format: "OOH" },
    ],

    credits: {
      type: "Campanha integrada",
      role: "Conceito, redação e roteiro",
      artDirection: "", // preencha apenas se houver
      collaborators: [], // ex.: ["Nome — Direção de arte"]
    },
    projectType: "autoral",
  },

  /* ------------------------------------------------------------------------
     MODELO 2 — CAMPANHA AUTOMOTIVA
     ------------------------------------------------------------------------ */
  {
    id: 2,
    slug: "campanha-automotiva",
    published: false,

    title: "Primeira viagem",
    brand: "[Marca automotiva — exemplo]",
    year: "2026",
    category: "Filme Publicitário",
    description:
      "Um filme sobre a primeira viagem de carro de uma família, contada do banco de trás.",
    tagline: "Toda estrada começa no banco de trás.",

    coverImage: "",
    coverStyle: "dark",
    heroImage: "",

    challenge:
      "[EXEMPLO] Qual era o briefing? Qual modelo, qual público, qual percepção a marca precisava mudar ou construir?",

    insight:
      "A gente esquece o destino das viagens de infância. *Mas lembra de quem estava no carro.*",

    creativeConcept: {
      title: "Toda estrada começa no banco de trás.",
      text: "[EXEMPLO] A grande ideia em poucas linhas.",
    },

    manifesto: null,

    execution: [
      { type: "headline", label: "Headline", text: "O GPS sabe o caminho. *A memória sabe o resto.*" },
    ],

    scripts: [
      {
        title: "Filme 60\" — Banco de trás",
        duration: "60\"",
        format: "Filme para cinema e digital",
        synopsis:
          "Duas crianças no banco de trás de um carro durante a primeira viagem longa da família. Tudo é visto a partir da altura delas.",
        scenes: [
          {
            time: "00:00 — 00:20",
            location: "INT. CARRO — ESTRADA — DIA",
            visual: "Câmera na altura dos olhos das crianças. Pela janela, a paisagem passa rápido.",
            dialogue: [
              { character: "CRIANÇA", line: "Falta muito?" },
              { character: "PAI", direction: "sem tirar os olhos da estrada", line: "Falta o suficiente." },
            ],
            sound: "Rádio baixinho. Vento na janela entreaberta.",
          },
          {
            time: "00:20 — 00:50",
            location: "INT. CARRO — ESTRADA — ENTARDECER",
            visual: "As crianças dormem uma no ombro da outra. Os pais trocam um olhar pelo retrovisor.",
            voiceover: "LOC. (OFF): A gente esquece para onde foi. Mas lembra de quem estava no carro.",
            sound: "Trilha entra.",
          },
          {
            time: "00:50 — 01:00",
            location: "PACKSHOT",
            visual: "O carro se afasta na estrada ao pôr do sol.",
            onScreenText: "Toda estrada começa no banco de trás.",
          },
        ],
        signature: "[Marca automotiva]",
      },
    ],

    gallery: [],

    credits: {
      type: "Filme publicitário",
      role: "Conceito e roteiro",
      artDirection: "",
      collaborators: [],
    },
    projectType: "autoral",
  },

  /* ------------------------------------------------------------------------
     MODELO 3 — BRANDED CONTENT PARA CAFETERIA
     ------------------------------------------------------------------------ */
  {
    id: 3,
    slug: "branded-content-cafeteria",
    published: false,

    title: "Conversas de balcão",
    brand: "[Cafeteria — exemplo]",
    year: "2026",
    category: "Branded Content",
    description:
      "Uma série de vídeos curtos com histórias reais contadas por quem passa pelo balcão todos os dias.",
    tagline: "Todo café vem com uma história.",

    coverImage: "",
    coverStyle: "paper",
    heroImage: "",

    challenge:
      "[EXEMPLO] Descreva o desafio da marca: como uma cafeteria de bairro cria conteúdo relevante sem soar como anúncio?",

    insight:
      "Ninguém vai à cafeteria do bairro só pelo café. *Vai pela meia hora de conversa que vem junto.*",

    creativeConcept: {
      title: "Todo café vem com uma história.",
      text: "[EXEMPLO] Explique o formato do conteúdo e por que ele pertence à marca.",
    },

    manifesto: null,

    execution: [
      { type: "copy", label: "Formato", title: "Série de episódios curtos", text: "[EXEMPLO] Descreva a série: número de episódios, duração, plataformas e linha editorial." },
    ],

    scripts: [
      {
        title: "Episódio 01 — O pedido de sempre",
        duration: "90\"",
        format: "Vídeo vertical para redes sociais",
        synopsis:
          "Um cliente que pede a mesma coisa há anos conta por que nunca mudou o pedido.",
        scenes: [
          {
            time: "00:00 — 00:10",
            location: "INT. CAFETERIA — MANHÃ",
            visual: "Plano detalhe da xícara sendo servida. Corte para o cliente sentado no balcão.",
            onScreenText: "Conversas de balcão — Ep. 01",
            sound: "Som ambiente: máquina de espresso, louça.",
          },
          {
            time: "00:10 — 01:20",
            location: "INT. CAFETERIA — CONTÍNUO",
            visual: "Entrevista em plano médio. Inserts das mãos, da xícara, da rua pela janela.",
            dialogue: [
              { character: "CLIENTE", line: "[Depoimento real — transcreva aqui a fala principal.]" },
            ],
          },
          {
            time: "01:20 — 01:30",
            location: "ASSINATURA",
            visual: "Logo da cafeteria sobre o balcão.",
            onScreenText: "Todo café vem com uma história.",
          },
        ],
        signature: "[Cafeteria]",
      },
    ],

    gallery: [],

    credits: {
      type: "Branded content",
      role: "Conceito, roteiro e linha editorial",
      artDirection: "",
      collaborators: [],
    },
    projectType: "autoral",
  },

  /* ------------------------------------------------------------------------
     MODELO 4 — CAMPANHA DE CONSCIENTIZAÇÃO
     ------------------------------------------------------------------------ */
  {
    id: 4,
    slug: "campanha-conscientizacao",
    published: false,

    title: "O que não se vê",
    brand: "[Organização — exemplo]",
    year: "2026",
    category: "Storytelling",
    description:
      "Uma campanha de conscientização construída a partir do que fica fora do enquadramento.",
    tagline: "Nem tudo que importa aparece na foto.",

    coverImage: "",
    coverStyle: "dark",
    heroImage: "",

    challenge:
      "[EXEMPLO] Qual causa? Qual comportamento a campanha precisava mudar? Por que as campanhas anteriores sobre o tema não funcionavam?",

    insight:
      "[EXEMPLO] Escreva aqui a observação humana ou cultural que sustenta a ideia.",

    creativeConcept: {
      title: "Nem tudo que importa aparece na foto.",
      text: "[EXEMPLO] A grande ideia em poucas linhas.",
    },

    manifesto: null,

    execution: [
      { type: "headline", label: "Headline", text: "[EXEMPLO] Headline da peça principal." },
    ],

    scripts: [
      {
        title: "Spot de rádio 30\"",
        duration: "30\"",
        format: "Áudio — rádio e streaming",
        synopsis: "[EXEMPLO] Uma peça só de áudio, construída a partir de sons do cotidiano.",
        scenes: [
          {
            time: "00:00 — 00:20",
            sound: "[EXEMPLO] Descreva a paisagem sonora.",
            voiceover: "LOC.: [EXEMPLO] Texto da locução.",
          },
          {
            time: "00:20 — 00:30",
            voiceover: "LOC.: Nem tudo que importa aparece na foto.",
            sound: "Silêncio.",
          },
        ],
        signature: "[Organização]",
      },
    ],

    gallery: [],

    credits: {
      type: "Campanha de conscientização",
      role: "Conceito e redação",
      artDirection: "",
      collaborators: [],
    },
    projectType: "academico",
  },
];
