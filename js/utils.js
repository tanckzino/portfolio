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

  /* Escapa e aplica *itálico* e quebras de linha simples. */
  U.inline = (value) =>
    U.esc(value)
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
    autoral: "Projeto autoral",
    veiculada: "Campanha veiculada",
    academico: "Trabalho acadêmico",
  };

  const COVER_STYLES = ["accent", "dark", "paper"];

  /* Capa: imagem, se houver; senão, composição tipográfica gerada. */
  U.cover = (p, index, opts) => {
    const o = opts || {};
    const src = o.hero ? p.heroImage || p.coverImage : p.coverImage;
    const wrap = (html) =>
      o.parallax === false ? html : `<div class="parallax-layer" data-parallax="${o.speed || 0.08}">${html}</div>`;
    if (U.filled(src)) {
      return wrap(`<img src="${U.esc(src)}" alt="${U.esc(o.alt || `Imagem de ${U.plain(p.title)}`)}" loading="${o.eager ? "eager" : "lazy"}" decoding="async">`);
    }
    const style = COVER_STYLES.includes(p.coverStyle)
      ? p.coverStyle
      : COVER_STYLES[(index || 0) % COVER_STYLES.length];
    return (`
      <div class="type-cover type-cover--${style}" aria-hidden="true">
        <span class="type-cover__top">
          <span>${U.esc(p.category || "")}</span>
          <span>${U.esc(p.year || "")}</span>
        </span>
        <span class="type-cover__title"${o.parallax === false ? "" : ` data-parallax="${o.speed || 0.06}"`}>${U.inline(p.tagline || p.title)}</span>
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

  const reducedMotion = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Cursor personalizado (anel + ponto com atraso) ----------
     Só em dispositivos com mouse; desativado em toque e reduced-motion. */
  U.cursor = () => {
    if (!window.matchMedia("(hover: hover) and (pointer: fine)").matches || reducedMotion()) return;

    const ring = document.createElement("span");
    const dot = document.createElement("span");
    ring.className = "cursor-ring";
    dot.className = "cursor-dot";
    ring.setAttribute("aria-hidden", "true");
    dot.setAttribute("aria-hidden", "true");
    document.body.append(ring, dot);
    document.documentElement.classList.add("has-cursor");

    const mouse = { x: -100, y: -100 };
    const r = { x: -100, y: -100 };
    const d = { x: -100, y: -100 };
    let visible = false;

    window.addEventListener("mousemove", (e) => {
      mouse.x = e.clientX;
      mouse.y = e.clientY;
      if (!visible) {
        visible = true;
        r.x = d.x = mouse.x;
        r.y = d.y = mouse.y;
        document.documentElement.classList.add("cursor-visible");
      }
    }, { passive: true });

    document.addEventListener("mouseleave", () => {
      visible = false;
      document.documentElement.classList.remove("cursor-visible");
    });
    window.addEventListener("mousedown", () => document.documentElement.classList.add("cursor-down"));
    window.addEventListener("mouseup", () => document.documentElement.classList.remove("cursor-down"));

    /* Cresce sobre elementos clicáveis; vira "Ver" sobre cards. */
    const HOVER = "a, button, [role='button'], label, summary, input, textarea, select";
    document.addEventListener("mouseover", (e) => {
      const card = e.target.closest(".work-card__link, .case-nav__next");
      const hit = e.target.closest(HOVER);
      document.documentElement.classList.toggle("cursor-hover", Boolean(hit) && !card);
      document.documentElement.classList.toggle("cursor-view", Boolean(card));
      document.documentElement.classList.toggle("cursor-zoom", Boolean(e.target.closest(".zoomable")));
    });

    const tick = () => {
      r.x += (mouse.x - r.x) * 0.16;
      r.y += (mouse.y - r.y) * 0.16;
      d.x += (mouse.x - d.x) * 0.5;
      d.y += (mouse.y - d.y) * 0.5;
      ring.style.transform = `translate3d(${r.x}px, ${r.y}px, 0)`;
      dot.style.transform = `translate3d(${d.x}px, ${d.y}px, 0)`;
      requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  /* ---------- Parallax na rolagem ----------
     Qualquer elemento com data-parallax="0.1" desliza conforme a rolagem. */
  U.parallax = () => {
    if (reducedMotion()) return;
    let items = [];
    let ticking = false;

    const collect = () => (items = [...document.querySelectorAll("[data-parallax]")]);
    const update = () => {
      ticking = false;
      const vh = window.innerHeight;
      items.forEach((el) => {
        const box = el.parentElement.getBoundingClientRect();
        if (box.bottom < -100 || box.top > vh + 100) return;
        const speed = parseFloat(el.getAttribute("data-parallax")) || 0.1;
        const offset = (box.top + box.height / 2 - vh / 2) * -speed;
        el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
      });
    };
    const request = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    collect();
    update();
    window.addEventListener("scroll", request, { passive: true });
    window.addEventListener("resize", () => { collect(); request(); });
    U.refreshParallax = () => { collect(); request(); };
  };

  U.ready = (fn) => {
    if (document.readyState !== "loading") fn();
    else document.addEventListener("DOMContentLoaded", fn);
  };

  window.U = U;
})();
