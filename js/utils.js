/* ==========================================================================
   UTILITÁRIOS COMPARTILHADOS (home + case)
   Não é preciso editar este arquivo para cadastrar projetos.
   ========================================================================== */

(function () {
  "use strict";

  const U = {};
  const params = new URLSearchParams(window.location.search);

  /* ---------- Texto ---------- */

  U.esc = (value) =>
    String(value == null ? "" : value).replace(/[&<>"']/g, (c) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    })[c]);

  /* Escapa e aplica **negrito**, *itálico* e quebras de linha simples. */
  U.inline = (value) =>
    U.esc(value)
      .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
      .replace(/\*(.+?)\*/g, "<em>$1</em>")
      .replace(/\n/g, "<br>");

  /* Remove a marcação para usar em <title>, alt etc. */
  U.plain = (value) => String(value == null ? "" : value).replace(/\*/g, "");

  /* Verdadeiro se houver conteúdo real (string, array ou objeto preenchido). */
  U.filled = (value) => {
    if (value == null || value === false) return false;
    if (typeof value === "string") return value.trim().length > 0;
    if (typeof value === "number") return true;
    if (Array.isArray(value)) return value.some(U.filled);
    if (typeof value === "object") return Object.values(value).some(U.filled);
    return Boolean(value);
  };

  /* String com parágrafos separados por linha em branco, ou array. */
  U.toParagraphs = (value) => {
    if (!U.filled(value)) return [];
    const list = Array.isArray(value) ? value : String(value).split(/\n\s*\n/);
    return list.filter(U.filled).map((p) => String(p).trim());
  };

  U.paras = (value, cls) =>
    U.toParagraphs(value)
      .map((p) => `<p${cls ? ` class="${cls}"` : ""}>${U.inline(p)}</p>`)
      .join("");

  U.lines = (value) => {
    const list = Array.isArray(value) ? value : [value];
    return list
      .filter(U.filled)
      .map((l) => `<span class="line"><span class="line__inner">${U.inline(l)}</span></span>`)
      .join("");
  };

  U.pad = (n) => String(n).padStart(2, "0");

  /* ---------- Validação de links ---------- */

  U.isEmail = (v) =>
    typeof v === "string" && /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(v.trim());

  U.isUrl = (v) => {
    if (typeof v !== "string" || !v.trim()) return false;
    try {
      const u = new URL(v.trim());
      return (u.protocol === "https:" || u.protocol === "http:") && u.hostname.includes(".");
    } catch (e) {
      return false;
    }
  };

  /* Arquivo local relativo, ex.: "assets/curriculo.pdf" */
  U.isLocalFile = (v) =>
    typeof v === "string" && /^(\.?\/)?[\w\-./]+\.[a-z0-9]{2,5}$/i.test(v.trim()) && !v.includes("..");

  /* ---------- Projetos ---------- */

  U.isPreview = params.get("preview") === "1";

  U.getProjects = () =>
    (Array.isArray(window.PROJECTS) ? window.PROJECTS : []).filter(
      (p) => p && typeof p.slug === "string" && p.slug.trim() && (p.published === true || U.isPreview)
    );

  U.caseUrl = (slug) =>
    `case.html?slug=${encodeURIComponent(slug)}${U.isPreview ? "&preview=1" : ""}`;

  U.homeUrl = (hash) => `index.html${U.isPreview ? "?preview=1" : ""}${hash || ""}`;

  U.STATUS = {
    autoral: "Trabalho fictício",
    veiculada: "Campanha veiculada",
    academico: "Trabalho acadêmico",
  };

  const COVER_STYLES = ["accent", "dark", "paper"];

  /* Marca: logo (se houver brandLogo) + nome.
     Sem brandLogo mas com brandWordmark (logo que já tem o nome), usa ela em todo lugar. */
  U.brandMark = (p, opts) => {
    const wm = ((opts && opts.wordmark) || !U.filled(p.brandLogo)) && p.brandWordmark;
    if (wm && (U.isLocalFile(wm) || U.isUrl(wm))) {
      return `<img class="brand-wordmark" src="${U.esc(wm)}" alt="${U.esc(p.brand || "")}">`;
    }
    const name = U.esc(p.brand || "");
    if (!U.isLocalFile(p.brandLogo) && !U.isUrl(p.brandLogo)) return name;
    return `<span class="brand-mark"><img src="${U.esc(p.brandLogo)}" alt="" width="20" height="20">${name}</span>`;
  };

  /* Capa: imagem, se houver; senão, composição tipográfica gerada. */
  U.cover = (p, index, opts) => {
    const o = opts || {};
    const src = o.hero ? p.heroImage || p.coverImage : p.coverImage;
    if (U.filled(src)) {
      return `<div class="cover-img"><img src="${U.esc(src)}" alt="${U.esc(p.coverAlt || o.alt || `Imagem de ${U.plain(p.title)}`)}" loading="${o.eager ? "eager" : "lazy"}" decoding="async"></div>`;
    }
    /* Capa com a logo da marca em destaque (coverLogo). */
    if (U.isLocalFile(p.coverLogo) || U.isUrl(p.coverLogo)) {
      const bg = COVER_STYLES.includes(p.coverStyle) ? p.coverStyle : "dark";
      return `<div class="logo-cover type-cover--${bg}"><img src="${U.esc(p.coverLogo)}" alt="${U.esc(p.brand || "")}" loading="${o.eager ? "eager" : "lazy"}" decoding="async"></div>`;
    }
    const style = COVER_STYLES.includes(p.coverStyle)
      ? p.coverStyle
      : COVER_STYLES[(index || 0) % COVER_STYLES.length];
    return (`
      <div class="type-cover type-cover--${style}" aria-hidden="true">
        <span class="type-cover__top">
          <span>${U.brandMark(p) || U.esc(p.category || "")}</span>
          <span>${U.esc(p.year || "")}</span>
        </span>
        <span class="type-cover__title">${U.inline(p.tagline || p.title)}</span>
        <span class="type-cover__foot">
          <span>${U.esc(U.plain(p.title))}</span>
          <span class="type-cover__mark">N° ${U.pad((index || 0) + 1)}</span>
        </span>
      </div>`);
  };

  /* ---------- Mídia ---------- */

  U.videoEmbed = (src) => {
    const s = String(src || "").trim();
    const yt = s.match(/(?:youtube\.com\/(?:watch\?v=|embed\/|shorts\/)|youtu\.be\/)([\w-]{11})/);
    if (yt) return `https://www.youtube-nocookie.com/embed/${yt[1]}`;
    const vm = s.match(/vimeo\.com\/(?:video\/)?(\d+)/);
    if (vm) return `https://player.vimeo.com/video/${vm[1]}`;
    return null;
  };

  U.video = (item) => {
    const embed = U.videoEmbed(item.src);
    const title = U.esc(U.plain(item.caption || item.title || "Vídeo"));
    if (embed) {
      return `<div class="video-frame"><iframe src="${U.esc(embed)}" title="${title}" loading="lazy" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>`;
    }
    return `<div class="video-frame"><video controls preload="metadata" ${item.poster ? `poster="${U.esc(item.poster)}"` : ""}><source src="${U.esc(item.src)}">Seu navegador não suporta vídeo.</video></div>`;
  };

  /* ---------- Site (nome, rodapé, navegação) ---------- */

  U.bindSite = () => {
    const c = window.SITE_CONFIG || {};
    document.querySelectorAll("[data-site='name']").forEach((el) => (el.textContent = c.name || ""));
    document.querySelectorAll("[data-site='role']").forEach((el) => (el.textContent = c.role || ""));
    document.querySelectorAll("[data-site='year']").forEach((el) => (el.textContent = new Date().getFullYear()));
    document.querySelectorAll("[data-home-link]").forEach((el) => {
      el.setAttribute("href", U.homeUrl(el.getAttribute("data-home-link") || ""));
    });
    if (U.isPreview) {
      const bar = document.createElement("div");
      bar.className = "preview-bar";
      bar.setAttribute("role", "status");
      bar.innerHTML = "Modo pré-visualização — rascunhos (published: false) estão visíveis.";
      document.body.prepend(bar);
      document.documentElement.classList.add("is-preview");
    }
  };

  U.initNav = () => {
    const header = document.querySelector(".site-header");
    const toggle = document.querySelector(".nav-toggle");
    const menu = document.getElementById("site-menu");

    const onScroll = () => header && header.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    if (!toggle || !menu) return;

    const setOpen = (open) => {
      toggle.setAttribute("aria-expanded", String(open));
      toggle.querySelector(".nav-toggle__label").textContent = open ? "Fechar" : "Menu";
      document.body.classList.toggle("menu-open", open);
    };

    toggle.addEventListener("click", () => setOpen(toggle.getAttribute("aria-expanded") !== "true"));
    menu.querySelectorAll("a").forEach((a) => a.addEventListener("click", () => setOpen(false)));
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && document.body.classList.contains("menu-open")) {
        setOpen(false);
        toggle.focus();
      }
    });
    window.matchMedia("(min-width: 861px)").addEventListener("change", (e) => e.matches && setOpen(false));
  };

  /* Animações de entrada (respeita prefers-reduced-motion via CSS). */
  U.reveal = (root) => {
    const items = (root || document).querySelectorAll(".reveal:not(.is-visible)");
    if (!("IntersectionObserver" in window)) {
      items.forEach((el) => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      { rootMargin: "0px 0px -8% 0px", threshold: 0.08 }
    );
    items.forEach((el) => io.observe(el));
  };

  U.ready = (fn) => {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  };

  window.U = U;
})();
