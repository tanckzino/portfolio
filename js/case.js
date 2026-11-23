/* ==========================================================================
   PÁGINA DO CASE — case.html?slug=nome-da-campanha
   Seções opcionais somem automaticamente quando não há conteúdo.
   ========================================================================== */

(function () {
  "use strict";
  const U = window.U;
  const C = window.SITE_CONFIG || {};

  /* Cabeçalho padrão de seção: "O desafio" */
  const label = (text) => `<p class="case-label"><span>${U.esc(text)}</span></p>`;

  /* ---------- 01 · Hero ---------- */
  function hero(p, index) {
    const meta = [
      ["Marca", p.brand],
      ["Categoria", p.category],
      ["Ano", p.year],
      ["Situação", U.STATUS[p.projectType]],
    ].filter(([, v]) => U.filled(v));

    return `
      <header class="case-hero">
        <div class="container">
          ${label("Case")}
          <h1 class="case-hero__title">${U.lines(p.title)}</h1>
          ${U.filled(p.tagline) ? `<p class="case-hero__tagline reveal">${U.inline(p.tagline)}</p>` : ""}
          <dl class="case-hero__meta reveal">
            ${meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${k === "Marca" ? U.brandMark(p, { wordmark: true }) : U.esc(v)}</dd></div>`).join("")}
          </dl>
        </div>
        <figure class="case-hero__media reveal">
          ${U.cover(p, index, { hero: true, eager: true, alt: `Imagem principal da campanha ${U.plain(p.title)}` })}
        </figure>
      </header>`;
  }

  /* ---------- 02 · Desafio ---------- */
  function challenge(p) {
    if (!U.filled(p.challenge) && !U.filled(p.briefing)) return "";
    const btn = U.filled(p.briefing)
      ? `<button type="button" class="btn btn--ghost briefing-open" data-briefing-open>Ver briefing <span aria-hidden="true">↗</span></button>`
      : "";
    return `
      <section class="case-sec container reveal" aria-label="O desafio">
        <div class="case-sec__aside">${label("O desafio")}</div>
        <div class="case-sec__body prose">${U.paras(p.challenge)}${btn}</div>
      </section>`;
  }

  /* ---------- Briefing (janela) ---------- */
  function briefingDoc(p) {
    const b = p.briefing;
    if (!U.filled(b)) return "";
    const meta = (Array.isArray(b.meta) ? b.meta : []).filter(([, v]) => U.filled(v));
    const sections = (Array.isArray(b.sections) ? b.sections : []).filter(U.filled);
    return `
      <dialog class="briefing" id="briefing" aria-labelledby="briefing-title">
        <div class="briefing__sheet">
          <div class="briefing__bar">
            <p class="briefing__kicker">Briefing</p>
            <button type="button" class="briefing__close" data-close>Fechar <span aria-hidden="true">×</span></button>
          </div>
          <h2 class="briefing__title" id="briefing-title">${U.inline(b.title || `Briefing — ${p.brand || ""}`)}</h2>
          ${meta.length ? `<dl class="briefing__meta">${meta.map(([k, v]) => `<div><dt>${U.esc(k)}</dt><dd>${U.inline(v)}</dd></div>`).join("")}</dl>` : ""}
          ${sections
            .map(
              (s, i) => `
            <section class="briefing__sec">
              <h3><span>${U.pad(i + 1)}</span>${U.esc(s.title || "")}</h3>
              ${U.paras(s.text)}
              ${U.filled(s.question) ? `<blockquote class="briefing__question">${U.inline(s.question)}</blockquote>` : ""}
              ${Array.isArray(s.list) && s.list.some(U.filled) ? `<ul>${s.list.filter(U.filled).map((li) => `<li>${U.inline(li)}</li>`).join("")}</ul>` : ""}
            </section>`
            )
            .join("")}
        </div>
      </dialog>`;
  }

  function bindBriefing(root) {
    const dialog = document.getElementById("briefing");
    const open = root.querySelector("[data-briefing-open]");
    if (!dialog || !open) return;
    if (typeof dialog.showModal !== "function") { open.remove(); return; }
    open.addEventListener("click", () => dialog.showModal());
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
    });
    dialog.addEventListener("close", () => open.focus());
  }

  /* ---------- 03 · Insight ---------- */
  function insight(p) {
    if (!U.filled(p.insight)) return "";
    return `
      <section class="case-insight" aria-label="O insight">
        <div class="container">
          <div class="reveal">${label("O insight")}</div>
          <blockquote class="case-insight__quote reveal">
            <span class="case-insight__mark" aria-hidden="true">“</span>
            ${U.paras(p.insight)}
          </blockquote>
          ${U.filled(p.insightText) ? `<div class="case-insight__text prose reveal">${U.paras(p.insightText)}</div>` : ""}
        </div>
      </section>`;
  }

  /* ---------- 04 · Conceito ---------- */
  function concept(p) {
    const c = p.creativeConcept;
    if (!U.filled(c)) return "";
    const title = typeof c === "string" ? c : c.title;
    const text = typeof c === "string" ? "" : c.text;
    return `
      <section class="case-concept" aria-label="O conceito criativo">
        <div class="case-concept__poster container">
          <div class="case-concept__top reveal">${label("O conceito criativo")}<span class="case-concept__brand">${U.brandMark(p)}</span></div>
          ${U.filled(title) ? `<h2 class="case-concept__title">${U.lines(title)}</h2>` : ""}
          ${U.filled(text) ? `<div class="case-concept__text reveal">${U.paras(text)}</div>` : ""}
        </div>
      </section>`;
  }

  /* ---------- 05 · Execução ---------- */
  function executionItem(item) {
    if (!item || !U.filled(item)) return "";
    const lbl = U.filled(item.label) ? `<p class="exec__label">${U.esc(item.label)}</p>` : "";
    switch (item.type) {
      case "headline":
        return `<div class="exec exec--headline reveal">${lbl}<p class="exec__headline">${U.inline(item.text)}</p></div>`;
      case "slogan":
        return `<div class="exec exec--slogan reveal">${lbl}<p class="exec__slogan">${U.inline(item.text)}</p></div>`;
      case "copy":
        return `<div class="exec exec--copy reveal">${lbl}${U.filled(item.title) ? `<h3 class="exec__title">${U.inline(item.title)}</h3>` : ""}<div class="exec__copy prose">${U.paras(item.text)}</div></div>`;
      case "image":
        if (!U.filled(item.src)) return "";
        return `<figure class="exec exec--image${item.wide ? " is-wide" : ""} reveal">${lbl}
          <button type="button" class="zoomable" data-src="${U.esc(item.src)}" data-caption="${U.esc(U.plain(item.caption || ""))}" aria-label="Ampliar imagem: ${U.esc(U.plain(item.alt || item.caption || ""))}">
            <img src="${U.esc(item.src)}" alt="${U.esc(item.alt || "")}" loading="lazy" decoding="async">
          </button>
          ${U.filled(item.caption) ? `<figcaption>${U.inline(item.caption)}</figcaption>` : ""}</figure>`;
      case "video":
        if (!U.filled(item.src)) return "";
        return `<figure class="exec exec--video reveal">${lbl}${U.video(item)}${U.filled(item.caption) ? `<figcaption>${U.inline(item.caption)}</figcaption>` : ""}</figure>`;
      case "link": {
        const url = String(item.url || "").trim();
        if (!(U.isUrl(url) || U.isLocalFile(url))) return "";
        return `<div class="exec exec--link reveal"><a class="file-link" href="${U.esc(url)}" target="_blank" rel="noopener noreferrer">
          <span>${U.esc(item.label || "Material complementar")}</span>
          ${U.filled(item.description) ? `<small>${U.esc(item.description)}</small>` : ""}
          <span class="file-link__arrow" aria-hidden="true">↗</span><span class="visually-hidden">(abre em nova aba)</span></a></div>`;
      }
      default:
        return U.filled(item.text) ? `<div class="exec exec--copy reveal">${lbl}<div class="prose">${U.paras(item.text)}</div></div>` : "";
    }
  }

  function manifesto(m) {
    if (!U.filled(m)) return "";
    const text = typeof m === "string" ? m : m.text;
    const lines = Array.isArray(text) ? text : U.toParagraphs(text);
    if (!lines.length) return "";
    return `
      <div class="manifesto reveal">
        <p class="exec__label">${U.esc((m && m.title) || "Manifesto")}</p>
        <div class="manifesto__text">${lines.filter(U.filled).map((l) => `<p>${U.inline(l)}</p>`).join("")}</div>
        ${m && U.filled(m.signature) ? `<p class="manifesto__sign">${U.inline(m.signature)}</p>` : ""}
      </div>`;
  }

  function execution(p) {
    const items = (Array.isArray(p.execution) ? p.execution : []).map(executionItem).filter(Boolean);
    const man = manifesto(p.manifesto);
    if (!items.length && !man) return "";
    return `
      <section class="case-sec case-sec--stack container" aria-label="A execução">
        <div class="case-sec__aside reveal">${label("A execução")}</div>
        <div class="exec-list">${man}${items.join("")}</div>
      </section>`;
  }

  /* ---------- 06 · Roteiros ---------- */
  function scene(s, i) {
    if (!U.filled(s)) return "";
    const dialogue = (Array.isArray(s.dialogue) ? s.dialogue : [])
      .filter((d) => d && U.filled(d.line))
      .map(
        (d) => `
        <div class="sc-dialogue">
          ${U.filled(d.character) ? `<p class="sc-dialogue__char">${U.esc(d.character)}</p>` : ""}
          ${U.filled(d.direction) ? `<p class="sc-dialogue__dir">(${U.esc(d.direction)})</p>` : ""}
          <p class="sc-dialogue__line">${U.inline(d.line)}</p>
        </div>`
      )
      .join("");

    return `
      <li class="scene">
        <div class="scene__time">
          <span class="scene__num">Cena ${U.pad(i + 1)}</span>
          ${U.filled(s.time) ? `<span class="scene__clock">${U.esc(s.time)}</span>` : ""}
        </div>
        <div class="scene__content">
          ${U.filled(s.location) ? `<p class="sc-heading">${U.esc(s.location)}</p>` : ""}
          ${U.filled(s.visual) ? `<p class="sc-action">${U.inline(s.visual)}</p>` : ""}
          ${dialogue}
          ${U.filled(s.voiceover) ? `<p class="sc-tag sc-tag--vo"><span>Locução</span><span>${U.inline(s.voiceover)}</span></p>` : ""}
          ${U.filled(s.onScreenText) ? `<p class="sc-tag sc-tag--super"><span>Texto na tela</span><strong>${U.inline(s.onScreenText)}</strong></p>` : ""}
          ${U.filled(s.sound) ? `<p class="sc-tag sc-tag--sound"><span>Trilha / Som</span><span>${U.inline(s.sound)}</span></p>` : ""}
        </div>
      </li>`;
  }

  function script(s, i, pIndex) {
    if (!U.filled(s)) return "";
    const scenes = (Array.isArray(s.scenes) ? s.scenes : []).filter(U.filled);
    const id = `script-${pIndex}-${i}`;
    const meta = [
      ["Duração", s.duration],
      ["Formato", s.format],
      ["Cenas", scenes.length ? U.pad(scenes.length) : ""],
    ].filter(([, v]) => U.filled(v));

    return `
      <article class="script reveal">
        <header class="script__head">
          <p class="script__kicker">Roteiro ${U.pad(i + 1)}</p>
          ${U.filled(s.title) ? `<h3 class="script__title">${U.inline(s.title)}</h3>` : ""}
          ${meta.length ? `<dl class="script__meta">${meta.map(([k, v]) => `<div><dt>${k}</dt><dd>${U.esc(v)}</dd></div>`).join("")}</dl>` : ""}
        </header>
        ${U.filled(s.synopsis) ? `<div class="script__synopsis"><p class="exec__label">Sinopse</p>${U.paras(s.synopsis)}</div>` : ""}
        ${
          scenes.length || U.filled(s.signature)
            ? `
        <div class="script__body" id="${id}">
          <ol class="scene-list">${scenes.map(scene).join("")}</ol>
          ${U.filled(s.signature) ? `<p class="script__sign"><span>Assinatura</span><strong>${U.inline(s.signature)}</strong></p>` : ""}
        </div>`
            : ""
        }
      </article>`;
  }

  function scripts(p, pIndex) {
    const list = (Array.isArray(p.scripts) ? p.scripts : []).filter(U.filled);
    if (!list.length) return "";
    return `
      <section class="case-sec case-sec--script container" aria-label="Roteiros audiovisuais">
        <div class="script-section__label reveal">${label(list.length > 1 ? "Roteiros" : "Roteiro")}</div>
        <div class="script-list">${list.map((s, i) => script(s, i, pIndex)).join("")}</div>
      </section>`;
  }

  /* ---------- 07 · Desdobramentos ---------- */
  function gallery(p) {
    const items = (Array.isArray(p.gallery) ? p.gallery : []).filter((g) => g && U.filled(g.src));
    if (!items.length) return "";
    return `
      <section class="case-sec case-sec--stack container" aria-label="Desdobramentos">
        <div class="case-sec__aside reveal">${label("Desdobramentos")}</div>
        <div class="gallery">
          ${items
            .map((g) => {
              const isVideo = g.type === "video" || U.videoEmbed(g.src) || /\.(mp4|webm)$/i.test(g.src);
              const media = isVideo
                ? U.video(g)
                : `<button type="button" class="zoomable" data-src="${U.esc(g.src)}" data-caption="${U.esc(U.plain(g.caption || ""))}" aria-label="Ampliar: ${U.esc(U.plain(g.alt || g.caption || g.format || "imagem"))}">
                     <img src="${U.esc(g.src)}" alt="${U.esc(g.alt || "")}" loading="lazy" decoding="async"></button>`;
              return `
                <figure class="gallery__item${g.wide ? " is-wide" : ""} reveal">
                  ${media}
                  ${U.filled(g.format) || U.filled(g.caption) ? `<figcaption>${U.filled(g.format) ? `<span>${U.esc(g.format)}</span>` : ""}${U.inline(g.caption || "")}</figcaption>` : ""}
                </figure>`;
            })
            .join("")}
        </div>
      </section>`;
  }

  /* ---------- 08 · Ficha técnica ---------- */
  function credits(p) {
    const c = p.credits || {};
    const collab = Array.isArray(c.collaborators) ? c.collaborators.filter(U.filled) : U.filled(c.collaborators) ? [c.collaborators] : [];
    const rows = [
      ["Tipo de projeto", c.type],
      ["Meu papel", c.role],
      ["Direção de arte", c.artDirection],
      ["Colaboradores", collab.length ? collab.map(U.esc).join("<br>") : ""],
      ["Ano", p.year],
      ["Situação", U.STATUS[p.projectType]],
    ].filter(([, v]) => U.filled(v));
    if (!rows.length) return "";
    return `
      <section class="case-sec container reveal" aria-label="Ficha técnica">
        <div class="case-sec__aside">${label("Ficha técnica")}</div>
        <dl class="credits">
          ${rows.map(([k, v]) => `<div><dt>${k}</dt><dd>${k === "Colaboradores" ? v : U.esc(v)}</dd></div>`).join("")}
        </dl>
      </section>`;
  }

  /* ---------- 09 · Navegação ---------- */
  function nav(p, list) {
    const idx = list.findIndex((x) => x.slug === p.slug);
    const next = list.length > 1 ? list[(idx + 1) % list.length] : null;
    return `
      <nav class="case-nav" aria-label="Navegação entre cases">
        <div class="container">
          ${
            next
              ? `
          <a class="case-nav__next" href="${U.caseUrl(next.slug)}">
            <span class="case-nav__kicker">Próximo case <span aria-hidden="true">→</span></span>
            <span class="case-nav__title">${U.inline(next.title)}</span>
            <span class="case-nav__meta">${U.esc([next.brand, next.category].filter(U.filled).join(" · "))}</span>
            <span class="case-nav__media">${U.cover(next, list.indexOf(next))}</span>
          </a>`
              : ""
          }
          <div class="case-nav__back">
            <a class="btn btn--ghost" href="${U.homeUrl("#trabalhos")}"><span aria-hidden="true">←</span> Todos os trabalhos</a>
            <a class="btn btn--text" href="${U.homeUrl("#contato")}">Entre em contato</a>
          </div>
        </div>
      </nav>`;
  }

  function notFound(isDraft) {
    return `
      <section class="case-missing container">
        <p class="case-label"><span class="case-label__num">404</span><span>Case</span></p>
        <h1 class="case-missing__title">${isDraft ? "Este case ainda está <em>na gaveta.</em>" : "Essa ideia <em>não está aqui.</em>"}</h1>
        <p>${isDraft ? "Ele está sendo finalizado e será publicado em breve." : "O endereço pode ter mudado, ou o case ainda não foi publicado."}</p>
        <a class="btn btn--solid" href="${U.homeUrl("#trabalhos")}">Ver trabalhos</a>
      </section>`;
  }

  /* ---------- Lightbox ---------- */
  function bindLightbox(root) {
    const dialog = document.getElementById("lightbox");
    if (!dialog || typeof dialog.showModal !== "function") return;
    const img = dialog.querySelector("img");
    const cap = dialog.querySelector("figcaption");

    root.addEventListener("click", (e) => {
      const z = e.target.closest(".zoomable");
      if (!z) return;
      img.src = z.dataset.src;
      img.alt = z.querySelector("img") ? z.querySelector("img").alt : "";
      cap.textContent = z.dataset.caption || "";
      cap.hidden = !z.dataset.caption;
      dialog.showModal();
    });
    dialog.addEventListener("click", (e) => {
      if (e.target === dialog || e.target.closest("[data-close]")) dialog.close();
    });
    dialog.addEventListener("close", () => (img.src = ""));
  }

  function setMeta(p) {
    const name = C.name ? ` — ${C.name}` : "";
    document.title = `${U.plain(p.title)}${name}`;
    const desc = document.querySelector('meta[name="description"]');
    if (desc && U.filled(p.description)) desc.setAttribute("content", U.plain(p.description));
    const og = document.querySelector('meta[property="og:title"]');
    if (og) og.setAttribute("content", document.title);
  }

  U.ready(() => {
    U.bindSite();
    U.initNav();

    const root = document.getElementById("case");
    const slug = new URLSearchParams(window.location.search).get("slug");
    const list = U.getProjects();
    const p = list.find((x) => x.slug === slug);

    if (!p) {
      const exists = (window.PROJECTS || []).some((x) => x && x.slug === slug);
      root.innerHTML = notFound(exists);
      document.title = `Case não encontrado${C.name ? ` — ${C.name}` : ""}`;
      const robots = document.createElement("meta");
      robots.name = "robots";
      robots.content = "noindex";
      document.head.appendChild(robots);
    } else {
      const index = list.indexOf(p);
      root.innerHTML = [
        hero(p, index),
        challenge(p),
        insight(p),
        concept(p),
        execution(p),
        scripts(p, index),
        gallery(p),
        credits(p),
        nav(p, list),
      ].join("");
      setMeta(p);
      root.insertAdjacentHTML("beforeend", briefingDoc(p));
      bindBriefing(root);
      bindLightbox(root);
    }

    requestAnimationFrame(() => document.documentElement.classList.add("is-loaded"));
    U.reveal(root);
  });
})();
