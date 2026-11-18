/* ==========================================================================
   HOME — renderiza hero, grid de trabalhos, sobre e contato
   ========================================================================== */

(function () {
  "use strict";
  const U = window.U;
  const C = window.SITE_CONFIG || {};

  const $ = (sel) => document.querySelector(sel);

  const placeholderTag = '<span class="placeholder-tag">Texto provisório</span>';

  /* ---------- Hero ---------- */
  function renderHero() {
    const headline = $("#hero-headline");
    if (headline && U.filled(C.headline)) headline.innerHTML = U.lines(C.headline);

    const specs = $("#hero-specialties");
    if (specs && Array.isArray(C.specialties)) {
      specs.innerHTML = C.specialties.filter(U.filled).map((s) => `<li>${U.esc(s)}</li>`).join("");
    }

    const intro = $("#hero-intro");
    if (intro) {
      intro.innerHTML = U.filled(C.intro)
        ? `${U.inline(C.intro)}${C.introIsPlaceholder ? " " + placeholderTag : ""}`
        : "";
    }
  }

  /* ---------- Trabalhos ---------- */
  function cardTemplate(p, i) {
    const draft = p.published !== true ? '<span class="draft-badge">Rascunho</span>' : "";
    return `
      <article class="work-card reveal" data-category="${U.esc(p.category || "")}">
        <a class="work-card__link" href="${U.caseUrl(p.slug)}">
          <div class="work-card__media">
            ${U.cover(p, i)}
            <span class="work-card__cue" aria-hidden="true">Ver case</span>
            ${draft}
          </div>
          <div class="work-card__body">
            <p class="work-card__meta">
              <span class="work-card__index">${U.pad(i + 1)}</span>
              <span>${U.esc(p.category || "")}</span>
              <span>${U.esc(p.year || "")}</span>
            </p>
            <h3 class="work-card__title"><span>${U.inline(p.title)}</span></h3>
            ${U.filled(p.brand) ? `<p class="work-card__brand">${U.esc(p.brand)}</p>` : ""}
            ${U.filled(p.description) ? `<p class="work-card__desc">${U.inline(p.description)}</p>` : ""}
          </div>
        </a>
      </article>`;
  }

  function emptyState() {
    return `
      <div class="empty-state reveal">
        <p class="empty-state__label">Rascunho n° 01</p>
        <ul class="empty-state__drafts" aria-hidden="true">
          <li><s>Em breve, grandes ideias.</s></li>
          <li><s>Aguarde novidades.</s></li>
          <li><s>Algo incrível está chegando.</s></li>
        </ul>
        <p class="empty-state__final">Novas ideias em construção<span class="caret" aria-hidden="true"></span></p>
        <p class="empty-state__note">Os primeiros cases estão sendo finalizados. Enquanto isso, <a href="#contato">vamos conversar</a>.</p>
      </div>`;
  }

  function renderWorks() {
    const grid = $("#work-grid");
    const count = $("#work-count");
    const filters = $("#work-filters");
    if (!grid) return;

    const projects = U.getProjects();
    if (count) count.textContent = projects.length ? `(${U.pad(projects.length)})` : "";

    if (!projects.length) {
      grid.classList.add("is-empty");
      grid.innerHTML = emptyState();
      return;
    }

    grid.innerHTML = projects.map(cardTemplate).join("");

    /* Filtros por categoria — só aparecem com 2+ categorias diferentes. */
    const cats = [...new Set(projects.map((p) => p.category).filter(U.filled))];
    if (filters && cats.length > 1) {
      filters.hidden = false;
      filters.innerHTML =
        `<button type="button" class="chip is-active" aria-pressed="true" data-filter="*">Todos</button>` +
        cats.map((c) => `<button type="button" class="chip" aria-pressed="false" data-filter="${U.esc(c)}">${U.esc(c)}</button>`).join("");

      filters.addEventListener("click", (e) => {
        const btn = e.target.closest("[data-filter]");
        if (!btn) return;
        const value = btn.getAttribute("data-filter");
        filters.querySelectorAll(".chip").forEach((b) => {
          const on = b === btn;
          b.classList.toggle("is-active", on);
          b.setAttribute("aria-pressed", String(on));
        });
        grid.classList.toggle("is-filtered", value !== "*");
        grid.querySelectorAll(".work-card").forEach((card) => {
          card.hidden = value !== "*" && card.getAttribute("data-category") !== value;
        });
      });
    }
  }

  /* ---------- Sobre ---------- */
  function renderAbout() {
    const a = C.about || {};
    const statement = $("#about-statement");
    const body = $("#about-body");
    const focus = $("#about-focus");

    if (statement) statement.innerHTML = U.inline(a.statement || "");
    if (body) {
      body.innerHTML = (a.isPlaceholder ? `<p>${placeholderTag}</p>` : "") + U.paras(a.paragraphs);
    }
    if (focus) {
      if (U.filled(a.focus)) {
        focus.innerHTML = `
          <h3 class="about__focus-title">${U.esc(a.focusTitle || "Áreas")}</h3>
          <ol class="about__focus-list">
            ${a.focus.filter(U.filled).map((f, i) => `<li><span>${U.pad(i + 1)}</span>${U.esc(f)}</li>`).join("")}
          </ol>`;
      } else {
        focus.remove();
      }
    }
  }

  /* ---------- Contato ---------- */
  function renderContact() {
    const c = C.contact || {};
    const headline = $("#contact-headline");
    const text = $("#contact-text");
    const list = $("#contact-links");

    if (headline && U.filled(c.headline)) headline.innerHTML = U.lines(c.headline);
    if (text) text.innerHTML = U.inline(c.text || "");
    if (!list) return;

    const links = [];
    if (U.isEmail(c.email)) {
      links.push({ label: "E-mail", value: c.email.trim(), href: `mailto:${c.email.trim()}` });
    }
    if (U.isUrl(c.linkedin)) links.push({ label: "LinkedIn", value: "Ver perfil", href: c.linkedin.trim(), ext: true });
    if (U.isUrl(c.instagram)) links.push({ label: "Instagram", value: "Ver perfil", href: c.instagram.trim(), ext: true });
    if (U.isUrl(c.resume) || U.isLocalFile(c.resume)) {
      links.push({ label: "Currículo", value: "Baixar PDF", href: c.resume.trim(), ext: true });
    }

    if (!links.length) {
      list.innerHTML = `<p class="contact__empty">${U.esc(c.emptyMessage || "Canais de contato em atualização.")}</p>`;
      return;
    }

    list.innerHTML = `<ul class="contact__list">${links
      .map(
        (l) => `
        <li>
          <a class="contact__link" href="${U.esc(l.href)}"${l.ext ? ' target="_blank" rel="noopener noreferrer"' : ""}>
            <span class="contact__label">${U.esc(l.label)}</span>
            <span class="contact__value">${U.esc(l.value)}</span>
            <span class="contact__arrow" aria-hidden="true">↗</span>
            ${l.ext ? '<span class="visually-hidden">(abre em nova aba)</span>' : ""}
          </a>
        </li>`
      )
      .join("")}</ul>`;
  }

  U.ready(() => {
    U.bindSite();
    U.initNav();
    renderHero();
    renderWorks();
    renderAbout();
    renderContact();
    if (C.name) document.title = `${C.name} — ${C.role || "Portfólio"}`;
    requestAnimationFrame(() => document.documentElement.classList.add("is-loaded"));
    U.reveal();
    U.cursor();
    U.parallax();
  });
})();
