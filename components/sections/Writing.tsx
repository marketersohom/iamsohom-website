import { getRecentPosts } from "@/lib/sanity";
import FadeUp from "@/components/FadeUp";
import { ArrowUpRight } from "lucide-react";

function formatDate(iso: string) {
  return new Date(iso).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export default async function Writing() {
  const posts = await getRecentPosts();

  return (
    <section id="writing" className="py-16 border-t border-[#1e1e1e]">
      <FadeUp>
        <span className="inline-block font-body text-[11px] font-medium tracking-[0.2em] text-gold uppercase mb-6">
          Writing
        </span>
      </FadeUp>

      <FadeUp delay={0.05}>
        <h2 className="font-display text-[36px] md:text-[44px] font-light text-cream leading-[1.15] mb-3 max-w-xl">
          Selected Writing.
        </h2>
      </FadeUp>

      <FadeUp delay={0.08}>
        <p className="font-body text-[13px] text-muted mb-10 max-w-md">
          All articles published on{" "}
          <a
            href="https://www.betagrowthpartners.com/blog"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gold/80 hover:text-gold transition-colors duration-150 underline underline-offset-4 decoration-gold/30"
          >
            betagrowthpartners.com
          </a>
          .
        </p>
      </FadeUp>

      {posts.length === 0 ? (
        <FadeUp delay={0.1}>
          <p className="font-body text-[13px] text-muted">No posts available at this time.</p>
        </FadeUp>
      ) : (
        <div className="space-y-4 max-w-2xl">
          {posts.map((post, i) => (
            <FadeUp key={post.slug} delay={0.06 * i}>
              <a
                href={`https://www.betagrowthpartners.com/blog/${post.slug}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group block border border-[#1e1e1e] rounded-xl p-6 bg-[#111111] hover:border-gold/30 transition-all duration-300"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1 min-w-0">
                    <p className="font-body text-[11px] text-muted mb-2.5 tracking-wide">
                      {formatDate(post.publishedAt)}
                    </p>
                    <h3 className="font-display text-[20px] font-medium text-cream group-hover:text-gold transition-colors duration-200 leading-snug mb-2">
                      {post.title}
                    </h3>
                    {post.excerpt && (
                      <p className="font-body text-[13px] text-muted leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>
                    )}
                  </div>
                  <ArrowUpRight
                    size={16}
                    className="flex-shrink-0 text-muted group-hover:text-gold transition-colors duration-200 mt-1"
                    strokeWidth={1.5}
                  />
                </div>
              </a>
            </FadeUp>
          ))}
        </div>
      )}
    </section>
  );
}
