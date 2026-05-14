/*
 * videos.js – Central videokonfiguration
 *
 * Lägg till, ta bort eller ändra videor här.
 * Varje video behöver:
 *   id          – YouTube-videons ID (delen efter ?v= i URL:en)
 *   title       – Rubrik som visas under videon
 *   description – Kort beskrivning
 *   category    – En av: "bollkontroll", "snabbhet-styrka", "malvakt"
 *
 * Exempel: https://www.youtube.com/watch?v=abc123  →  id: "abc123"
 */

const VIDEOS = [

  // ─── BOLLKONTROLL ──────────────────────────────────────────
  {
    id: "dQw4w9WgXcQ",
    title: "Grundläggande bollkontroll",
    description: "Lär dig de viktigaste teknikerna för att kontrollera bollen med klubban.",
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
    id: "dQw4w9WgXcQ",
    title: "Mottagning och passning",
    description: "Så tar du emot och spelar vidare bollen snabbt och säkert.",
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
    id: "dQw4w9WgXcQ",
    title: "Grundställning och positionering",
    description: "Lär dig rätt grundställning och hur du positionerar dig i målet.",
    category: "malvakt"
  },
  {
    id: "dQw4w9WgXcQ",
    title: "Benarbete och förflyttningar",
    description: "Träna snabba förflyttningar mellan stolparna.",
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
function renderVideos(category) {
  const container = document.getElementById("video-container");
  if (!container) return;

  const filtered = VIDEOS.filter(v => v.category === category);

  if (filtered.length === 0) {
    container.innerHTML = '<p style="text-align:center;padding:2rem;color:#888;">Inga videor tillagda ännu. Lägg till i <code>videos.js</code>.</p>';
    return;
  }

  container.innerHTML = filtered.map(v => `
    <div class="video-card">
      <div class="embed-wrapper">
        <iframe
          src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(v.id)}"
          title="${v.title}"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowfullscreen
          loading="lazy"
        ></iframe>
      </div>
      <div class="info">
        <h3>${v.title}</h3>
        <p>${v.description}</p>
      </div>
    </div>
  `).join("");
}
