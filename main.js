/* 依照 content.js 的內容產生網頁。一般更新內容不需要改這個檔案。 */
(function () {
  const S = window.SITE;
  const UI = {
    about: { zh: "關於我", en: "About" },
    interests: { zh: "研究興趣", en: "Research Interests" },
    education: { zh: "學歷", en: "Education" },
    publications: { zh: "研究成果", en: "Publications" },
    projects: { zh: "專案經歷", en: "Projects" },
    skills: { zh: "技能", en: "Skills" },
    selfLearning: { zh: "自學課程", en: "Self-Learning" },
    activities: { zh: "活動與社團", en: "Activities" },
    languages: { zh: "語言", en: "Languages" },
    more: { zh: "更多", en: "More" },
    email: { zh: "Email", en: "Email" },
    cv: { zh: "下載履歷", en: "Download CV" },
    updated: { zh: "最後更新", en: "Last updated" },
  };

  // 預設英文；訪客按過切換按鈕後會記住他的選擇
  let lang = "en";
  try {
    lang = localStorage.getItem("lang") || "en";
  } catch (e) {}

  const t = (v) => (v == null ? "" : typeof v === "string" ? v : v[lang] || v.zh || v.en || "");
  const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" }[c]));
  const has = (a) => Array.isArray(a) && a.length > 0;
  const $ = (id) => document.getElementById(id);

  const ICONS = {
    mail: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M4 5h16a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2zm0 2v.4l8 5 8-5V7H4zm16 2.75-7.47 4.67a1 1 0 0 1-1.06 0L4 9.75V17h16V9.75z"/></svg>',
    github: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-3.16 19.49c.5.09.68-.22.68-.48v-1.7c-2.78.6-3.37-1.34-3.37-1.34-.45-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.9 1.52 2.34 1.08 2.91.83.09-.65.35-1.08.63-1.33-2.22-.25-4.55-1.11-4.55-4.94 0-1.09.39-1.98 1.03-2.68-.1-.25-.45-1.27.1-2.64 0 0 .84-.27 2.75 1.02a9.6 9.6 0 0 1 5 0c1.91-1.3 2.75-1.02 2.75-1.02.55 1.37.2 2.39.1 2.64.64.7 1.03 1.59 1.03 2.68 0 3.84-2.34 4.68-4.57 4.93.36.31.68.92.68 1.85v2.75c0 .27.18.58.69.48A10 10 0 0 0 12 2z"/></svg>',
    linkedin: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14zM8.34 18.34V10H5.67v8.34h2.67zM7 8.85a1.55 1.55 0 1 0 0-3.1 1.55 1.55 0 0 0 0 3.1zm11.34 9.49v-4.57c0-2.46-1.31-3.6-3.06-3.6-1.41 0-2.04.78-2.39 1.33V10h-2.67v8.34h2.67v-4.4c0-1.16.22-2.28 1.66-2.28 1.42 0 1.44 1.33 1.44 2.35v4.33h2.35z"/></svg>',
    file: '<svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M6 2h8l6 6v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2zm7 1.5V9h5.5L13 3.5zM12 11v5.17l-2.09-2.09-1.41 1.42L12 19l3.5-3.5-1.41-1.42L12 16.17V11h0z"/></svg>',
  };

  function section(key, inner, extraClass) {
    return `<section class="section ${extraClass || ""}" id="${key}"><h2 class="section-title">${esc(t(UI[key]))}</h2>${inner}</section>`;
  }

  function renderHero() {
    const p = S.profile;
    $("photo").src = p.photo;
    $("photo").alt = `${p.nameZh} ${p.nameEn}`;
    // 大字顯示目前語言的名字，小字顯示另一種
    $("nameZh").textContent = lang === "en" ? p.nameEn : p.nameZh;
    $("nameEn").textContent = lang === "en" ? p.nameZh : p.nameEn;
    $("title").textContent = t(p.title);
    $("tagline").textContent = t(p.tagline);
    const links = [];
    if (p.email) links.push(`<a class="btn btn-primary" href="mailto:${esc(p.email)}">${ICONS.mail}<span>${esc(p.email)}</span></a>`);
    if (p.github) links.push(`<a class="btn" href="${esc(p.github)}" target="_blank" rel="noopener">${ICONS.github}<span>GitHub</span></a>`);
    if (p.linkedin) links.push(`<a class="btn" href="${esc(p.linkedin)}" target="_blank" rel="noopener">${ICONS.linkedin}<span>LinkedIn</span></a>`);
    if (p.cv) links.push(`<a class="btn" href="${esc(p.cv)}" target="_blank" rel="noopener">${ICONS.file}<span>${esc(t(UI.cv))}</span></a>`);
    $("links").innerHTML = links.join("");
  }

  function renderSections() {
    const out = [];
    const nav = [];
    const add = (key, html, cls) => {
      out.push(section(key, html, cls));
      nav.push(key);
    };

    if (has(S.skills)) {
      add("skills", `<div class="skill-groups">${S.skills
        .map((g) => `<div class="skill-group"><h3>${esc(t(g.group))}</h3><div class="tags">${g.items
          .map((x) => `<span class="tag">${esc(t(x))}</span>`).join("")}</div></div>`)
        .join("")}</div>`);
    }

    if (S.about) {
      const paras = Array.isArray(S.about[lang]) ? S.about[lang] : S.about.zh;
      add("about", `<div class="prose">${paras.map((x) => `<p>${x}</p>`).join("")}</div>`);
    }

    if (has(S.interests)) {
      add("interests", `<div class="cards">${S.interests
        .map((i) => `<article class="card"><h3>${esc(t(i.title))}</h3><p>${t(i.desc)}</p></article>`)
        .join("")}</div>`);
    }

    if (has(S.education)) {
      add("education", `<ol class="timeline">${S.education
        .map((e) => `<li class="tl-item">
            <div class="tl-head"><h3>${esc(t(e.school))}</h3><span class="period">${esc(t(e.period))}</span></div>
            <p class="sub">${esc(t(e.degree))}</p>
            ${has(e.details) ? `<ul class="bullets">${e.details.map((d) => `<li>${t(d)}</li>`).join("")}</ul>` : ""}
          </li>`)
        .join("")}</ol>`);
    }

    if (has(S.publications)) {
      add("publications", `<ul class="pubs">${S.publications
        .map((p) => `<li><h3>${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(t(p.title))}</a>` : esc(t(p.title))}</h3>
            <p class="sub">${esc(t(p.venue))}</p>${p.desc ? `<p>${t(p.desc)}</p>` : ""}</li>`)
        .join("")}</ul>`);
    }

    if (has(S.projects)) {
      add("projects", S.projects
        .map((p) => `<article class="project">
            <div class="tl-head"><h3>${p.link ? `<a href="${esc(p.link)}" target="_blank" rel="noopener">${esc(t(p.title))}</a>` : esc(t(p.title))}</h3>
              <span class="period">${esc(t(p.period))}</span></div>
            <p class="sub">${esc(t(p.org))}${p.role ? ` · ${esc(t(p.role))}` : ""}</p>
            <div class="project-body">
              <ul class="bullets">${(p.points || []).map((x) => `<li>${t(x)}</li>`).join("")}</ul>
              ${has(p.images) ? `<div class="gallery">${p.images
                .map((im) => `<figure><img src="${esc(im.src)}" alt="${esc(t(im.alt))}" loading="lazy"><figcaption>${esc(t(im.alt))}</figcaption></figure>`)
                .join("")}</div>` : ""}
            </div>
            ${has(p.tags) ? `<div class="tags">${p.tags.map((x) => `<span class="tag">${esc(t(x))}</span>`).join("")}</div>` : ""}
          </article>`)
        .join(""));
    }

    // 自學、活動、語言 放在同一列
    const mini = [];
    if (has(S.selfLearning)) {
      mini.push(section("selfLearning", `<ul class="plain">${S.selfLearning
        .map((x) => `<li><strong>${esc(t(x.name))}</strong><span>${esc(t(x.by))}</span></li>`).join("")}</ul>`, "mini"));
    }
    if (has(S.activities)) {
      mini.push(section("activities", `<ul class="plain">${S.activities
        .map((x) => `<li><strong>${esc(t(x.name))}</strong>${t(x.desc) ? `<span>${esc(t(x.desc))}</span>` : ""}</li>`).join("")}</ul>`, "mini"));
    }
    if (has(S.languages)) {
      mini.push(section("languages", `<ul class="plain">${S.languages
        .map((x) => `<li><strong>${esc(t(x.name))}</strong><span>${esc(t(x.level))}</span></li>`).join("")}</ul>`, "mini"));
    }
    if (mini.length) {
      out.push(`<div class="mini-grid">${mini.join("")}</div>`);
      nav.push(has(S.selfLearning) ? "selfLearning" : has(S.activities) ? "activities" : "languages");
    }

    $("sections").innerHTML = out.join("");
    $("nav").innerHTML = nav
      .map((k) => `<a href="#${k}">${esc(t(["selfLearning", "activities", "languages"].includes(k) ? UI.more : UI[k]))}</a>`)
      .join("");
  }

  function renderFooter() {
    const d = new Date(document.lastModified);
    const date = isNaN(d) ? "" : `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(d.getDate()).padStart(2, "0")}`;
    $("footer").innerHTML = `<span>© ${new Date().getFullYear()} ${esc(S.profile.nameZh)} ${esc(S.profile.nameEn)}</span>${date ? `<span>${esc(t(UI.updated))} ${date}</span>` : ""}`;
  }

  function render() {
    document.documentElement.lang = lang === "zh" ? "zh-Hant" : "en";
    $("langBtn").textContent = lang === "zh" ? "EN" : "中文";
    $("langBtn").setAttribute("aria-label", lang === "zh" ? "Switch to English" : "切換為中文");
    renderHero();
    renderSections();
    renderFooter();
  }

  $("langBtn").addEventListener("click", () => {
    lang = lang === "zh" ? "en" : "zh";
    try { localStorage.setItem("lang", lang); } catch (e) {}
    render();
  });

  // 深淺色模式：預設跟隨系統，按鈕可手動切換
  function applyTheme(theme) {
    if (theme) document.documentElement.dataset.theme = theme;
    else delete document.documentElement.dataset.theme;
  }
  try { applyTheme(localStorage.getItem("theme")); } catch (e) {}
  $("themeBtn").addEventListener("click", () => {
    const current = document.documentElement.dataset.theme ||
      (matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
    const next = current === "dark" ? "light" : "dark";
    applyTheme(next);
    try { localStorage.setItem("theme", next); } catch (e) {}
  });

  render();
})();
