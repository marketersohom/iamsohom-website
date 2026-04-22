import { createClient } from "@sanity/client";

const client = createClient({
  projectId: "579x1r4t",
  dataset: "production",
  apiVersion: "2024-01-01",
  useCdn: true,
});

export interface Post {
  title: string;
  slug: string;
  publishedAt: string;
  excerpt: string | null;
}

export async function getRecentPosts(): Promise<Post[]> {
  const query = `*[_type == "post" && defined(publishedAt)] | order(publishedAt desc) [0...3] {
    title,
    "slug": slug.current,
    publishedAt,
    excerpt,
    description,
    "firstParagraph": body[0].children[0].text
  }`;

  try {
    const posts = await client.fetch<Record<string, string | null>[]>(query);
    return posts.map((p) => ({
      title: String(p.title ?? ""),
      slug: String(p.slug ?? ""),
      publishedAt: String(p.publishedAt ?? ""),
      excerpt: (p.excerpt || p.description || p.firstParagraph) ?? null,
    }));
  } catch {
    return [];
  }
}
