import type { MetadataRoute } from "next";

// iamsohom.com is a single-page personal portfolio. Anchor sections (#about, #rla, #work)
// resolve to the same URL, so listing them in the sitemap misleads search engines.
// Add real sub-pages here if/when they're built (e.g. /writing/[slug], /work/[slug]).
export default function sitemap(): MetadataRoute.Sitemap {
  const base = "https://iamsohom.com";

  return [
    {
      url: base,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
