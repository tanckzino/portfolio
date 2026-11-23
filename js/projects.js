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
   Abra  portfolio.html?preview=1  ou  case.html?slug=seu-slug&preview=1
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
   id, slug, published, title, brand, brandLogo, brandWordmark, year, category, description, tagline,
   coverImage, coverLogo, coverStyle, heroImage, challenge, insight, creativeConcept,
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
     CASE 01 — SPOTIFY
     ------------------------------------------------------------------------ */
  {
    id: 5,
    slug: "spotify-o-que-se-passa-no-fone-dela",
    published: true,

    title: "O que se passa no fone dela?",
    brand: "Spotify",
    brandLogo: "assets/img/spotify/logo.svg",
    brandWordmark: "assets/img/spotify/logo-texto.webp",
    year: "2026",
    category: "Filme Publicitário",
    description:
      "Um filme bem-humorado no qual dois adolescentes tentam adivinhar o que desconhecidos estão ouvindo e descobrem que as aparências enganam.",
    tagline: "Cada um tem seu próprio flow.",

    coverImage: "", // capa do card: logo (coverLogo). A foto fica só no topo do case.
    coverLogo: "assets/img/spotify/logo-texto.webp",
    coverAlt: "Dois estudantes num ponto de ônibus olham uma garota gótica de fone passar.",
    coverStyle: "dark",
    heroImage: "assets/img/spotify/cena-ponto-de-onibus.jpg",

    /* Briefing: abre pelo botão "Ver briefing" na seção do desafio. */
    briefing: {
      title: "Briefing criativo — Spotify",
      meta: [
        ["Marca", "Spotify"],
        ["Tipo de campanha", "Institucional"],
        ["Mercado", "Brasil"],
        ["Tema", "A música que você ouve conta quem você é."],
      ],
      sections: [
        {
          title: "Contexto",
          text: [
            "A música está presente em praticamente todos os momentos da rotina. No transporte público, na academia, no trabalho, nos estudos ou simplesmente enquanto caminhamos pela cidade.",
            "Mas a música não é apenas entretenimento. Ela também representa gostos, emoções, memórias e aspectos da identidade de cada pessoa.",
            "O Spotify quer explorar essa relação pessoal entre as pessoas e aquilo que elas escutam.",
          ],
        },
        {
          title: "O desafio",
          text: [
            "Criar uma campanha institucional que mostre como a música faz parte da identidade das pessoas.",
            "A campanha deve gerar identificação, curiosidade e conexão emocional com o público, reforçando a presença do Spotify no cotidiano.",
          ],
          question: "Como mostrar que aquilo que escutamos pode revelar aspectos de quem somos?",
        },
        {
          title: "Público-alvo",
          text: [
            "Jovens adultos de 18 a 34 anos, conectados à cultura, às tendências, ao entretenimento e às redes sociais.",
            "Pessoas que utilizam a música para acompanhar atividades, expressar sentimentos e construir experiências pessoais.",
          ],
        },
        {
          title: "Objetivos de comunicação",
          list: [
            "Fortalecer a conexão emocional entre o público e o Spotify.",
            "Reforçar a marca como parte da vida e da identidade das pessoas.",
            "Criar uma campanha memorável, com potencial de gerar conversas e identificação.",
            "Explorar um comportamento humano verdadeiro por meio de criatividade e storytelling.",
          ],
        },
        {
          title: "Restrições",
          text: [
            "A campanha não deve utilizar argumentos comerciais, como preços, planos, descontos ou benefícios de assinatura.",
            "O foco é construir valor de marca, não vender um plano do Spotify.",
            "Existe liberdade criativa para explorar humor, emoção, provocação, situações cotidianas e diferentes formatos narrativos.",
          ],
        },
      ],
    },

    challenge:
      "Demonstrar que os gostos musicais ultrapassam os estereótipos associados à aparência das pessoas.",

    insight:
      "Quando vemos alguém usando fones de ouvido, podemos imaginar o que essa pessoa escuta. *Mas nossas suposições dizem mais sobre nossos preconceitos do que sobre os gostos dela.*",

    creativeConcept: {
      title: "Cada um tem seu próprio flow.",
      text:
        "Um filme bem-humorado no qual dois adolescentes tentam adivinhar o que desconhecidos estão ouvindo e descobrem que as aparências enganam.",
    },

    manifesto: null,

    execution: [
      { type: "copy", label: "Peça principal", title: "Roteiro audiovisual", text: "Roteiro audiovisual com cenas, diálogos e indicações sonoras." },
      { type: "copy", label: "Tom", text: "Descontraído, provocativo e bem-humorado." },
      { type: "copy", label: "Linguagem audiovisual", text: "Cortes dinâmicos, ambientação urbana e transições sonoras entre o ambiente externo e o áudio dos fones." },
      { type: "slogan", label: "Assinatura", text: "Spotify. *Cada um tem seu próprio flow.*" },
    ],

    scripts: [
      {
        title: "Filme 30\" — O que se passa no fone dela?",
        duration: "30\"",
        format: "Filme publicitário — campanha conceitual",
        synopsis:
          "Dois amigos num ponto de ônibus tentam adivinhar o que desconhecidos estão ouvindo. Erram todas.",
        scenes: [
          {
            time: "00:00 — 00:05",
            location: "ABERTURA — O SUPERPODER",
            visual: "Dois amigos adolescentes, de mochila e uniforme escolar, estão sentados em um ponto de ônibus. Ao fundo, uma avenida movimentada, com carros e pedestres.",
            dialogue: [
              { character: "AMIGO 1", line: "Super-audição seria um superpoder inútil." },
              { character: "AMIGO 2", line: "Inútil? Imagina descobrir o que todo mundo tá ouvindo no fone!" },
            ],
            sound: "Sons urbanos, trânsito e conversas ao fundo.",
          },
          {
            time: "00:05 — 00:11",
            location: "PRIMEIRA DESCOBERTA — A GAROTA GÓTICA",
            visual: "A câmera acompanha o olhar dos meninos até uma garota vestida com roupas góticas, caminhando de fone.",
            dialogue: [
              { character: "AMIGO 1", line: "Aquela ali? Rock pesado, certeza." },
              { character: "AMIGO 2", line: "Errou." },
            ],
            sound: "Transição sonora: o ruído da avenida desaparece. Entramos no universo sonoro da garota. No fone: BTS — *Dynamite*.",
          },
          {
            time: "00:11 — 00:17",
            location: "SEGUNDA DESCOBERTA — O EXECUTIVO",
            visual: "Um homem de terno e gravata atravessa a calçada, com expressão séria e passos apressados.",
            dialogue: [
              { character: "AMIGO 1", line: "Tá, mas aquele de terno? Música clássica." },
              { character: "AMIGO 2", line: "Errou de novo!" },
            ],
            sound: "Transição sonora: a câmera se aproxima e revela o que toca nos fones. No fone: João Gomes — *Dengo*.",
          },
          {
            time: "00:17 — 00:23",
            location: "TERCEIRA DESCOBERTA — O SKATISTA",
            visual: "Um jovem de streetwear, segurando um skate, passa pelo ponto de ônibus. A câmera acompanha o skatista.",
            dialogue: [
              { character: "AMIGO 2", line: "Minha vez. Aquele ali? Rap pesado." },
              { character: "AMIGO 1", line: "Tá difícil, hein!" },
            ],
            sound: "No fone: uma voz tranquila de podcast diz: \"Respire fundo. Encontre sua paz interior...\"",
          },
          {
            time: "00:23 — 00:27",
            location: "CLÍMAX — A REFLEXÃO",
            visual: "A câmera retorna aos dois amigos. Eles trocam olhares e riem das tentativas frustradas. Ao fundo, o ônibus se aproxima.",
            dialogue: [
              { character: "AMIGO 1", line: "Não dá pra adivinhar ninguém só olhando." },
              { character: "AMIGO 2", line: "É... cada um tem seu próprio flow." },
            ],
          },
          {
            time: "00:27 — 00:30",
            location: "ENCERRAMENTO — SPOTIFY",
            visual: "Os dois se levantam para entrar no ônibus. Tela final: logo Spotify sobre fundo preto, acompanhado da identidade verde da marca.",
            dialogue: [
              { character: "AMIGO 1", line: "Me dá meu lado do fone." },
              { character: "AMIGO 2", line: "Só se o Spotify ficar comigo!" },
            ],
            onScreenText: "Spotify. Cada um tem seu próprio flow.",
          },
        ],
        signature: "Spotify. Cada um tem seu próprio flow.",
      },
    ],

    gallery: [],

    credits: {
      type: "Filme publicitário — campanha conceitual",
      role: "Conceito e roteiro",
      artDirection: "",
      collaborators: [],
    },
    projectType: "autoral",
  },

  /* ------------------------------------------------------------------------
     CASE 02 — CARMED X HALLOWEEN
     ------------------------------------------------------------------------ */
  {
    id: 6,
    slug: "carmed-x-halloween",
    published: true,

    title: "Carmed x Halloween",
    brand: "Carmed",
    brandWordmark: "assets/img/carmed/logo.png",
    year: "2026",
    category: "Campanha Publicitária",
    description:
      "Campanha de lançamento da coleção de Halloween da Carmed: uma festa à fantasia para influenciadores, pensada para ser vivida, gravada e compartilhada.",
    tagline: "Com gostosuras e travessuras.",

    coverImage: "",
    coverLogo: "assets/img/carmed/logo.png",
    coverStyle: "accent",
    heroImage: "",

    challenge: [
      "*Como transformar o lançamento de uma coleção em um acontecimento?*",
      "Para o Halloween, a Carmed apresentaria uma edição temática de seus hidratantes labiais: **Carmed x Halloween**.",
      "O desafio era desenvolver uma campanha de lançamento capaz de despertar o interesse pelos novos produtos, gerar conversas nas redes sociais e aproximar a marca de seu público por meio de experiências e entretenimento.",
      "Mais do que anunciar uma nova coleção, queríamos fazer o público acompanhar o lançamento.",
    ],

    insight: "No Halloween, todo mundo quer aparecer. *E todo mundo quer ver o que acontece.*",
    insightText: [
      "Fantasias, sustos, desafios e momentos inesperados fazem parte da data. São experiências que naturalmente despertam curiosidade e rendem histórias para compartilhar.",
      "E quando essas experiências envolvem influenciadores, elas também podem se transformar em entretenimento para milhares de pessoas que não estão presentes.",
      "**O insight central:** por que apenas divulgar uma coleção de Halloween quando podemos criar um Halloween inteiro para divulgá-la?",
    ],

    creativeConcept: {
      title: "Com gostosuras e *travessuras.*",
      text: [
        "Nossa proposta foi transformar o lançamento em uma experiência de marca, conectando o universo do Halloween à personalidade divertida e descontraída da Carmed.",
        "As gostosuras chegam com os produtos. As travessuras acontecem nas experiências.",
        "Assim nasceu a ideia do **Halloween Carmed**: uma festa à fantasia exclusiva para influenciadores, planejada para gerar entretenimento, conteúdo e repercussão nas redes sociais.",
        "O evento seria o centro da campanha, mas a comunicação começaria dias antes e continuaria depois da festa.",
      ],
    },

    manifesto: null,

    execution: [
      {
        type: "copy",
        label: "Pré-evento",
        title: "O Halloween começa antes",
        text: [
          "**Press kits e influência.** Dias antes do evento, os influenciadores convidados receberiam press kits exclusivos com os produtos da coleção Carmed x Halloween. A proposta era que os kits fossem apresentados em publicações no feed e nos stories, gerando curiosidade sobre os lançamentos e sobre a festa.",
          "**Conteúdo obrigatório: Arrume-se Comigo com Carmed.** Cada influenciador também produziria um vídeo no formato *Get Ready With Me* (GRWM), mostrando sua preparação para o Halloween Carmed. A fantasia seria a protagonista da preparação, enquanto a Carmed faria parte do ritual de beleza.",
          "O objetivo era inserir o produto em um formato já familiar ao público, transformando a preparação para a festa em mais um momento de divulgação.",
        ],
      },
      {
        type: "copy",
        label: "O evento",
        title: "Halloween Carmed",
        text: [
          "*Uma festa criada para ser vivida, gravada e compartilhada.*",
          "O Halloween Carmed reuniria influenciadores em uma festa à fantasia com experiências interativas, desafios e momentos pensados para gerar conteúdo. Três ativações formariam a programação.",
        ],
      },
      {
        type: "copy",
        label: "Ativação 01",
        title: "Vivo ou morto",
        text: [
          "Uma brincadeira clássica transformada em desafio de Halloween.",
          "Cada participante começaria com três vidas. A cada erro, perderia uma vida e deveria tomar uma misteriosa **poção temática**.",
          "A dinâmica foi pensada para produzir reações divertidas, incentivar a participação dos convidados e render conteúdos para as redes sociais.",
        ],
      },
      {
        type: "copy",
        label: "Ativação 02",
        title: "Cabine do susto",
        text: [
          "*Uma foto normal. Uma reação nem tanto.*",
          "Os convidados entrariam em uma cabine temática para tirar fotos. O que eles não saberiam é que, logo após o registro, seriam surpreendidos por um susto. Toda a reação seria gravada.",
          "Os vídeos seriam disponibilizados rapidamente aos influenciadores, permitindo que compartilhassem os momentos em seus perfis ainda durante a festa.",
          "A ideia era transformar uma simples cabine de fotos em uma fonte de conteúdos espontâneos e inesperados.",
        ],
      },
      {
        type: "copy",
        label: "Ativação 03",
        title: "Concurso de melhor fantasia",
        text: [
          "O Halloween Carmed também teria uma competição para eleger a melhor fantasia da noite. O influenciador vencedor receberia:",
          "— Um troféu de melhor fantasia.\n— Um kit de produtos Carmed x Halloween.\n— R$ 1.000 em produtos Carmed destinados a uma ação de sorteio em seu Instagram.",
          "Além de incentivar a criatividade dos convidados, a premiação permitiria estender a repercussão do evento aos seguidores do vencedor.",
        ],
      },
      {
        type: "copy",
        label: "Cobertura",
        title: "Um Met Gala do Halloween",
        text: [
          "*Quem disse que só quem foi à festa pode participar dela?*",
          "Inspirados na cobertura de grandes eventos como o Met Gala, planejamos transformar o Halloween Carmed em um espetáculo digital: um perfil exclusivo no Instagram para acompanhar a festa em tempo real, com **Defante e Toguro como apresentadores**.",
          "**Chegada dos convidados.** Stories apresentando os influenciadores conforme chegassem ao evento, com marcações para estimular repostagens.",
          "**Entrevistas rápidas.** Conversas descontraídas com os convidados sobre fantasias, expectativas e acontecimentos da noite.",
          "**Bastidores e ativações.** Publicações com fotos, vídeos, desafios, sustos e momentos inesperados da festa.",
          "**Conteúdo em tempo real.** Atualizações constantes no feed e nos stories para permitir que o público acompanhasse o Halloween Carmed mesmo sem estar presente.",
          "O objetivo era fazer a festa ultrapassar os limites do espaço físico, transformando os acontecimentos em entretenimento digital.",
        ],
      },
      {
        type: "copy",
        label: "Amplificação",
        title: "Todo mundo vai ficar sabendo",
        text: [
          "Para expandir a divulgação da coleção além dos convidados e de seus seguidores, a campanha contaria com uma estratégia de mídia integrada.",
          "**Páginas de entretenimento e fofoca.** Compra de mídia em perfis do Instagram e do X (Twitter), aproveitando o formato de repercussão dessas páginas para distribuir conteúdos relacionados à festa, aos influenciadores e às ativações.",
          "**Hashtag oficial: #HalloweenCarmed.** Uma hashtag para reunir publicações dos influenciadores, conteúdos da cobertura e interações relacionadas à campanha.",
          "**Mídia exterior (OOH).** Outdoors distribuídos por São Paulo para divulgar a coleção Carmed x Halloween e levar a identidade visual do lançamento também para as ruas.",
          "A integração entre influência, conteúdo digital e mídia exterior buscaria ampliar os pontos de contato do público com a campanha.",
        ],
      },
      {
        type: "copy",
        label: "A ideia por trás de tudo",
        title: "Antes, durante e depois",
        text: [
          "A estratégia foi construída para fazer o lançamento acontecer em diferentes momentos.",
          "**Antes da festa**, os press kits e os vídeos de preparação despertariam curiosidade.",
          "**Durante a festa**, as ativações e a cobertura em tempo real produziriam entretenimento e oportunidades de compartilhamento.",
          "**Depois da festa**, os conteúdos registrados, a repercussão nas redes e a ação promocional prolongariam a presença da coleção no ambiente digital.",
          "Cada etapa foi pensada para alimentar a próxima.",
        ],
      },
      {
        type: "copy",
        label: "Defesa criativa",
        title: "Algo para contar",
        text: [
          "O Halloween Carmed nasceu de uma ideia: **não queríamos apenas que os influenciadores falassem sobre o lançamento. Queríamos dar a eles algo para contar.**",
          "Em vez de depender exclusivamente de publicações tradicionais de produto, propusemos experiências capazes de gerar histórias, reações e conversas.",
          "O evento seria o ponto de partida. O verdadeiro alcance da campanha viria das pessoas compartilhando aquilo que viveram — ou acompanharam pelas redes sociais.",
          "Porque, no Halloween, as melhores histórias sempre têm um pouco de gostosura e um pouco de travessura.",
        ],
      },
      { type: "slogan", label: "Assinatura", text: "Carmed x Halloween. *Com gostosuras e travessuras.*" },
    ],

    scripts: [],
    gallery: [],

    credits: {
      type: "Campanha de lançamento — marketing de influência, experiência de marca e criação publicitária",
      role: "Projeto desenvolvido em equipe",
      artDirection: "",
      collaborators: [],
    },
    projectType: "academico",
  },

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
