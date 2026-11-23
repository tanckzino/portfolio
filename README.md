# Portfólio — Redator Publicitário

Site estático (HTML, CSS e JavaScript puro). Não precisa de build nem de dependências.

## Estrutura

```
portfolio.html    Home: hero, trabalhos, sobre, contato
case.html         Página dinâmica do case (case.html?slug=...)
404.html          Página de erro
css/style.css     Todo o visual
js/config.js      ← EDITE: nome, headline, textos do "Sobre", links de contato
js/projects.js    ← EDITE: cadastro de cases
js/utils.js       Funções compartilhadas
js/home.js        Renderização da home
js/case.js        Renderização do case
assets/           Favicon, imagens (assets/img/...) e currículo em PDF
vercel.json       Cabeçalhos de segurança e cache
```

## Primeiros passos

1. **`js/config.js`**: troque `name`, revise `intro` e os parágrafos do `about`. Depois mude `introIsPlaceholder` e `about.isPlaceholder` para `false` (isso remove a etiqueta "Texto provisório").
2. **Contato**: preencha `email`, `linkedin` e, se quiser, `instagram` e `resume`. Campo vazio ou link inválido = botão escondido. Se nenhum for válido, aparece um aviso neutro.
3. **Currículo**: coloque o PDF em `assets/` e use `resume: "assets/curriculo.pdf"`.

## Cadastrar um case

1. Abra `js/projects.js`, copie um dos quatro modelos e cole no fim da lista.
2. Defina um `slug` único (ex.: `minha-campanha`). A URL será `case.html?slug=minha-campanha`.
3. Preencha os campos. Os que ficarem vazios (`""`, `[]` ou `null`) somem da página automaticamente.
4. Mude para `published: true`.

Enquanto nenhum case estiver publicado, a home mostra o estado vazio "Novas ideias em construção".

### Pré-visualizar rascunhos

- `portfolio.html?preview=1`: mostra também os projetos com `published: false`
- `case.html?slug=campanha-esportiva&preview=1`

Uma barra preta no rodapé indica o modo de pré-visualização. Os visitantes não veem rascunhos.

### Tipos de peça em `execution`

| type       | campos                                  |
|------------|-----------------------------------------|
| `headline` | `label`, `text`                         |
| `slogan`   | `label`, `text`                         |
| `copy`     | `label`, `title`, `text`                |
| `image`    | `src`, `alt`, `caption`, `wide`         |
| `video`    | `src` (YouTube, Vimeo ou .mp4), `poster`, `caption` |
| `link`     | `label`, `url`, `description`           |

### Roteiros (`scripts`)

Cada roteiro tem `title`, `duration`, `format`, `synopsis`, `signature` e `scenes`.
Cada cena tem `time`, `location`, `visual`, `voiceover`, `dialogue` (lista de `{ character, direction, line }`), `onScreenText` e `sound`.
Roteiros longos aparecem recolhidos, com o botão "Ler roteiro completo".

### Desdobramentos (`gallery`)

`{ src, alt, caption, format: "OOH", wide: true }`. Também aceita vídeo no `src`.

### Texto

`*asteriscos*` viram itálico em destaque. Para vários parágrafos, use um array de strings ou separe com uma linha em branco (`\n\n`).

## Testar localmente

Abra o `portfolio.html` direto no navegador ou rode um servidor simples:

```
npx serve .
```

## Publicar na Vercel

1. Suba a pasta para um repositório no GitHub.
2. Na Vercel: **Add New → Project**, importe o repositório e use Framework Preset = **Other**, sem build command e sem output directory.
3. Deploy. Cada `git push` publica de novo.

Ou pela CLI: `npx vercel` dentro da pasta.
