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
    id: "syNjZiNd5ss",
    title: "Teknikövningar blå nivå",
    description: "Teknikövningar för spelare på blå nivå. A-lagsspelarna Linnea Juhlin, Frida Swahn, Sebastian Sääker och Tom Colling visar några övningar som alla ungdomar kan köra hemma.",
    category: "bollkontroll"
  },
  {
    id: "9irhdDKZCkg",
    title: "Teknikövningar röd nivå",
    description: "Övningar för att förbättra din bollkontroll.",
    category: "bollkontroll"
  },

  // ─── BOLLKONTROLL – UTMANINGAR ─────────────────────────────
  {
    id: "0pOdD75Mc0k",
    title: "5 Skill Moves to Impress Your Friends",
    description: "Olika svårare bollkontrolls övningar. På engelska.",
    category: "bollkontroll",
    subcategory: "utmaning"
  },
  {
    id: "UPtyRyLBawo",
    title: "Avancerade teknikövningar",
    description: "Utmanande bollkontrollsövningar för den som vill testa gränserna.",
    category: "bollkontroll",
    subcategory: "utmaning"
  },

  // ─── SNABBHET & STYRKA ─────────────────────────────────────
  {
    id: "k5n6p-MRwF0",
    title: "5 Speed & Agility Drills (English)",
    description: "5 övningar för att öka snabbhet. Antingen lägger ni något band att hoppa över eller så tänker ni att något ligger där. På engelska.",
    category: "snabbhet-styrka"
  },
  {
    id: "4IuLRXOPl8c",
    title: "Explosiveness & Power Exercises (English)",
    description: "Övningar för att bli snabbare i starter och riktningsbyten. På engelska.",
    category: "snabbhet-styrka"
  },

  // ─── MÅLVAKT ───────────────────────────────────────────────
  {
    id: "O10CXuOkW0g",
    title: "Grundställning och förflyttningar",
    description: "Lär dig rätt grundställning och hur du positionerar dig i målet samt olika förflyttningar.",
    category: "malvakt"
  },
  {
    id: "mCuQeu79MCo",
    title: "Öga-hand koordination",
    description: "Öva bollkontroll för målvakter och utespelare.",
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

function renderVideos(category, containerId, subcategory) {
  const id = containerId || "video-container";
  const container = document.getElementById(id);
  if (!container) return;

  const filtered = VIDEOS.filter(v => {
    if (v.category !== category) return false;
    if (subcategory === "utmaning") return v.subcategory === "utmaning";
    return !v.subcategory; // default: only non-challenge videos
  });

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
