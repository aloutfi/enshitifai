import { notFound } from "next/navigation";
import Link from "next/link";
import { blogPosts, getBlogPostById } from "@/data/blog";

interface BlogPostPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    id: post.id,
  }));
}

export async function generateMetadata({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getBlogPostById(id);
  if (!post) return { title: "Post Not Found" };

  return {
    title: `${post.title} | EnshitifAi Blog`,
    description: post.excerpt,
  };
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const { id } = await params;
  const post = getBlogPostById(id);

  if (!post) {
    notFound();
  }

  // Find adjacent posts for navigation
  const currentIndex = blogPosts.findIndex((p) => p.id === post.id);
  const prevPost = currentIndex < blogPosts.length - 1 ? blogPosts[currentIndex + 1] : null;
  const nextPost = currentIndex > 0 ? blogPosts[currentIndex - 1] : null;

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="mb-8 inline-flex items-center gap-2 text-gray-400 transition-colors hover:text-white"
          >
            <svg
              className="h-4 w-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Blog
          </Link>

          <div className="mb-6 flex flex-wrap items-center gap-3 text-sm">
            <span className="text-gray-500">{post.date}</span>
            <span className="text-gray-700">•</span>
            <span className="text-gray-500">{post.readTime}</span>
          </div>

          <h1 className="mb-4 text-4xl font-bold leading-tight md:text-5xl">
            {post.title}
          </h1>
          <p className="mb-8 text-xl text-gray-400">{post.subtitle}</p>

          <div className="flex flex-wrap items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-bold">
                {post.author
                  .split(" ")
                  .map((n) => n[0])
                  .join("")}
              </div>
              <div>
                <p className="font-medium">{post.author}</p>
                <p className="text-sm text-gray-500">{post.authorTitle}</p>
              </div>
            </div>

            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="px-4 py-12">
        <article className="prose prose-invert prose-lg mx-auto max-w-3xl prose-headings:text-white prose-p:text-gray-300 prose-strong:text-white prose-a:text-purple-400 prose-code:text-pink-400">
          <div
            className="space-y-6 [&>h2]:mt-12 [&>h2]:mb-4 [&>h2]:text-2xl [&>h2]:font-bold [&>h3]:mt-8 [&>h3]:mb-3 [&>h3]:text-xl [&>h3]:font-semibold [&>p]:leading-relaxed [&>ul]:list-disc [&>ul]:pl-6 [&>ol]:list-decimal [&>ol]:pl-6 [&>li]:my-2 [&>blockquote]:border-l-4 [&>blockquote]:border-purple-500 [&>blockquote]:pl-4 [&>blockquote]:italic [&>blockquote]:text-gray-400 [&>hr]:my-8 [&>hr]:border-white/10"
            dangerouslySetInnerHTML={{
              __html: (() => {
                const lines = post.content.split("\n");
                const result: string[] = [];
                let inTable = false;
                let isFirstTableRow = true;

                for (let i = 0; i < lines.length; i++) {
                  const line = lines[i];

                  // Table handling
                  if (line.trim().startsWith("|") && line.trim().endsWith("|")) {
                    if (!inTable) {
                      inTable = true;
                      isFirstTableRow = true;
                      result.push('<table class="w-full border-collapse my-6 text-sm">');
                    }

                    // Skip separator rows
                    if (line.includes("---")) {
                      isFirstTableRow = false;
                      continue;
                    }

                    const cells = line.split("|").filter(c => c.trim() !== "");
                    const tag = isFirstTableRow ? "th" : "td";
                    const cellClass = isFirstTableRow
                      ? "border border-white/20 bg-white/10 px-4 py-2 text-left font-semibold"
                      : "border border-white/10 px-4 py-2";
                    result.push(`<tr>${cells.map(c => `<${tag} class="${cellClass}">${c.trim().replace(/\*\*/g, "")}</${tag}>`).join("")}</tr>`);
                    continue;
                  } else if (inTable) {
                    inTable = false;
                    isFirstTableRow = true;
                    result.push("</table>");
                  }

                  // Other markdown
                  if (line.startsWith("## ")) {
                    result.push(`<h2>${line.slice(3)}</h2>`);
                  } else if (line.startsWith("### ")) {
                    result.push(`<h3>${line.slice(4)}</h3>`);
                  } else if (line.match(/^\d+\.\s\*\*/)) {
                    // Numbered list with bold
                    result.push(`<li class="my-2">${line.replace(/^\d+\.\s/, "").replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</li>`);
                  } else if (line.startsWith("- ")) {
                    result.push(`<li class="my-2">${line.slice(2).replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</li>`);
                  } else if (line.startsWith("---")) {
                    result.push("<hr />");
                  } else if (line.trim() === "") {
                    result.push("<br />");
                  } else if (line.startsWith("*") && line.endsWith("*") && !line.includes("**")) {
                    result.push(`<p><em>${line.slice(1, -1)}</em></p>`);
                  } else if (line.trim().length > 0) {
                    result.push(`<p>${line
                      .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")
                      .replace(/\*(.*?)\*/g, "<em>$1</em>")}</p>`);
                  }
                }

                if (inTable) result.push("</table>");
                return result.join("\n");
              })(),
            }}
          />
        </article>
      </section>

      {/* Share */}
      <section className="border-t border-white/10 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <p className="text-gray-400">
              Enjoyed this thought leadership? Share it with your network.
            </p>
            <div className="flex gap-3">
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-colors hover:bg-white/10">
                Share on LinkedIn
              </button>
              <button className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm transition-colors hover:bg-white/10">
                Share on X
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-white/10 px-4 py-12">
        <div className="mx-auto max-w-3xl">
          <div className="grid gap-4 md:grid-cols-2">
            {prevPost && (
              <Link
                href={`/blog/${prevPost.id}`}
                className="group rounded-xl border border-white/10 bg-white/5 p-4 transition-all hover:border-purple-500/50 hover:bg-white/10"
              >
                <p className="mb-1 text-sm text-gray-500">← Previous</p>
                <p className="font-medium group-hover:text-purple-400">
                  {prevPost.title}
                </p>
              </Link>
            )}
            {nextPost && (
              <Link
                href={`/blog/${nextPost.id}`}
                className="group rounded-xl border border-white/10 bg-white/5 p-4 text-right transition-all hover:border-purple-500/50 hover:bg-white/10 md:col-start-2"
              >
                <p className="mb-1 text-sm text-gray-500">Next →</p>
                <p className="font-medium group-hover:text-purple-400">
                  {nextPost.title}
                </p>
              </Link>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="border-t border-white/10 bg-gradient-to-r from-purple-900/20 to-pink-900/20 px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold">Ready to Start Extracting?</h2>
          <p className="mb-6 text-gray-400">
            Let&apos;s discuss how EnshitifAi can help maximize your shareholder value.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 font-semibold text-black transition-all hover:bg-gray-200"
          >
            Schedule a Consultation
            <span>💸</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
