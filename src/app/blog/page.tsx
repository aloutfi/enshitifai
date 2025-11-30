import Link from "next/link";
import { blogPosts, getAllTags } from "@/data/blog";

export const metadata = {
  title: "Insights & Thought Leadership | EnshitifAi",
  description: "Industry-leading perspectives on customer value extraction, subscription optimization, and shareholder value maximization.",
};

export default function BlogPage() {
  const tags = getAllTags();

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4 text-sm font-semibold uppercase tracking-widest text-purple-400">
            Insights & Thought Leadership
          </div>
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            The{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Extraction
            </span>{" "}
            Blog
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Actionable insights, best practices, and thought leadership from the
            world&apos;s leading customer value extraction consultancy.
          </p>
        </div>
      </section>

      {/* Tags */}
      <section className="border-b border-white/10 px-4 py-6">
        <div className="mx-auto max-w-4xl">
          <div className="flex flex-wrap items-center gap-2">
            <span className="text-sm text-gray-500">Topics:</span>
            {tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-gray-400 transition-colors hover:bg-white/10"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="space-y-8">
            {blogPosts.map((post, index) => (
              <Link
                key={post.id}
                href={`/blog/${post.id}`}
                className="group block rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-purple-500/50 hover:bg-white/10 md:p-8"
              >
                <div className="mb-4 flex flex-wrap items-center gap-3 text-sm">
                  <span className="text-gray-500">{post.date}</span>
                  <span className="text-gray-700">•</span>
                  <span className="text-gray-500">{post.readTime}</span>
                  {index === 0 && (
                    <span className="rounded-full bg-purple-500/20 px-2 py-0.5 text-xs text-purple-400">
                      Latest
                    </span>
                  )}
                </div>

                <h2 className="mb-2 text-2xl font-bold transition-colors group-hover:text-purple-400 md:text-3xl">
                  {post.title}
                </h2>
                <p className="mb-4 text-gray-500">{post.subtitle}</p>
                <p className="mb-6 text-gray-400">{post.excerpt}</p>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-sm font-bold">
                      {post.author
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </div>
                    <div>
                      <p className="text-sm font-medium">{post.author}</p>
                      <p className="text-xs text-gray-500">{post.authorTitle}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-purple-400">
                    <span className="text-sm">Read more</span>
                    <svg
                      className="h-4 w-4 transition-transform group-hover:translate-x-1"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="border-t border-white/10 bg-white/5 px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold">Subscribe to Our Newsletter</h2>
          <p className="mb-6 text-gray-400">
            Get extraction insights delivered straight to your inbox. Unsubscribe
            anytime.*
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
            <input
              type="email"
              placeholder="your@email.com"
              className="rounded-full border border-white/10 bg-white/5 px-6 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none"
            />
            <button className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25">
              Subscribe
            </button>
          </div>
          <p className="mt-4 text-xs text-gray-600">
            *Unsubscribe process involves 3 confirmation emails, a phone call, and
            a 30-day &quot;cooling off&quot; period. (Just kidding. This form doesn&apos;t work.)
          </p>
        </div>
      </section>
    </main>
  );
}
