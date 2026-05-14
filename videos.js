/*
 * videos.js – Central videokonfiguration
 *
 * Lägg till, ta bort eller ändra videor här.
 * Varje video behöver:
 *   id          – Videons ID (YouTube: delen efter ?v= / Vimeo: siffrorna i URL:en)
 *   title       – Rubrik som visas under videon
 *   description – Kort beskrivning
 *   category    – En av: "bollkontroll", "snabbhet-styrka", "malvakt"
 *   platform    – "youtube" (standard) eller "vimeo" (valfritt, utelämna för YouTube)
 *
 * Exempel YouTube: https://www.youtube.com/watch?v=abc123     →  id: "abc123"
 * Exempel Vimeo:   https://vimeo.com/123456789               →  id: "123456789", platform: "vimeo"
 */

const VIDEOS = [

  // ─── BOLLKONTROLL ──────────────────────────────────────────
  {
    id: "Qo6T064iIsfLVguG",
    title: "Teknikövningar blå nivå",
    description: "Teknikövningar för spelare på blå nivå. A-lagsspelarna Linnea Juhlin, Frida Swahn, Sebastian Sääker och Tom Colling visar några övningar som alla ungdomar kan köra hemma.",
    category: "bollkontroll"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Dragningar och finter",
    description: "Övningar för att förbättra dina dragningar och lura motståndaren.",
    category: "bollkontroll"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Bollkontroll i fart",
    description: "Träna på att behålla kontrollen när du springer med bollen.",
    category: "bollkontroll"
  },
  {
    id: "0pOdD75Mc0k",
    title: "5 Skill Moves to Impress Your Friends",
    description: "OBS, svåra och mer utmanande men våga försök. Inga förväntningar att ni ska kunna detta.",
    category: "bollkontroll"
  },

  // ─── SNABBHET & STYRKA ─────────────────────────────────────
  {
    id: "dQw4w9WgXcQ",
    title: "Snabbhetsstege – fotarbete",
    description: "Förbättra din snabbhet och koordination med stegeövningar.",
    category: "snabbhet-styrka"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Spänst och explosivitet",
    description: "Övningar för att bli snabbare i starter och riktningsbyten.",
    category: "snabbhet-styrka"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Styrketräning utan redskap",
    description: "Kroppsövningar som bygger styrka – perfekt att göra hemma.",
    category: "snabbhet-styrka"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Uthållighet och kondition",
    description: "Intervallträning anpassad för innebandyspelare.",
    category: "snabbhet-styrka"
  },

  // ─── MÅLVAKT ───────────────────────────────────────────────
  {
    id: "O10CXuOkW0g",
    title: "Grundställning och förflyttningar",
    description: "Lär dig rätt grundställning och hur du positionerar dig i målet sam olika förflyttningar.",
    category: "malvakt"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Räddningar – låga skott",
    description: "Teknik för att rädda skott längs marken och i benhöjd.",
    category: "malvakt"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Räddningar – höga skott",
    description: "Så räddar du skott i överkropp- och huvudhöjd.",
    category: "malvakt"
  }
];

/*
 * ─── Rendering-funktion (används av kategorisidorna) ─────────
 * Anropas automatiskt – du behöver inte ändra denna.
 */
function escapeHTML(str) {
  const div = document.createElement("div");
  div.textContent = str;
  return div.innerHTML;
}

function renderVideos(category) {
  const container = document.getElementById("video-container");
  if (!container) return;

  const filtered = VIDEOS.filter(v => v.category === category);

  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center;padding:2rem;color:#888;">Inga videor tillagda ännu. Lägg till i <code>videos.js</code>.</p>';
    return;
  }

  container.innerHTML = filtered.map(v => {
    const safeTitle = escapeHTML(v.title);
    const safeDesc = escapeHTML(v.description);
    const embedUrl = v.platform === "vimeo"
      ? `https://player.vimeo.com/video/${encodeURIComponent(v.id)}`
      : `https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}`;
    return `
    <div class="video-card">
      <div class="embed-wrapper">
        <iframe
          src="${embedUrl}"
          title="${safeTitle}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      <div class="info">
        <h3>${safeTitle}</h3>
        <p>${safeDesc}</p>
      </div>
    </div>
  `;
  }).join("");
}
