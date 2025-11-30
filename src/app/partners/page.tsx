import Link from "next/link";
import { partners } from "@/data/partners";

export const metadata = {
  title: "Our Partners | EnshitifAi",
  description: "Fortune 500 companies we've helped extract maximum value from their customers.",
};

export default function PartnersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Our{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Partners
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Industry leaders who trusted us to help them transition from customer-centric
            to shareholder-centric business models.
          </p>
        </div>
      </section>

      {/* Partner Grid */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {partners.map((partner) => (
              <Link
                key={partner.id}
                href={`/partners/${partner.id}`}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-green-500/50 hover:bg-white/10"
              >
                <div className="mb-4 flex items-center justify-between">
                  <h2 className="text-2xl font-bold transition-colors group-hover:text-green-400">
                    {partner.name}
                  </h2>
                  <span className="text-sm text-green-400">{partner.extractedValue}</span>
                </div>
                <p className="mb-4 text-sm italic text-gray-500">{partner.tagline}</p>
                <p className="mb-4 line-clamp-3 text-gray-400">{partner.description}</p>
                <div className="flex items-center gap-2 text-sm text-purple-400">
                  View case study
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
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Banner */}
      <section className="border-y border-white/10 bg-white/5 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 text-center md:grid-cols-4">
            <div>
              <p className="text-4xl font-bold text-green-400">$4.2T+</p>
              <p className="text-gray-500">Total Value Extracted</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">13</p>
              <p className="text-gray-500">Partner Companies</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">2.1B</p>
              <p className="text-gray-500">Users Affected</p>
            </div>
            <div>
              <p className="text-4xl font-bold text-white">∞</p>
              <p className="text-gray-500">Subscriptions Created</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Join Our Portfolio</h2>
          <p className="mb-8 text-xl text-gray-400">
            Ready to transform your relationship with customers into a extraction opportunity?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/25"
          >
            Become a Partner
            <span>💸</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
