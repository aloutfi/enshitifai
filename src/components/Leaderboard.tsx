import { partners } from "@/data/partners";
import Link from "next/link";

// Parse extracted value string to number for sorting
function parseValue(value: string): number {
  const num = parseFloat(value.replace(/[$,TB]/g, ""));
  if (value.includes("T")) return num * 1000;
  return num;
}

export default function Leaderboard() {
  // Sort partners by extracted value (descending)
  const sortedPartners = [...partners].sort(
    (a, b) => parseValue(b.extractedValue) - parseValue(a.extractedValue)
  );

  const topPartners = sortedPartners.slice(0, 6);

  const medals = ["🥇", "🥈", "🥉"];

  return (
    <section className="px-4 py-16">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h2 className="mb-2 text-3xl font-bold md:text-4xl">
            <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-500 bg-clip-text text-transparent">
              Hall of Extraction
            </span>
          </h2>
          <p className="text-gray-500">
            Top performers ranked by customer value extracted
          </p>
        </div>

        <div className="rounded-2xl border border-white/10 bg-white/5 p-6">
          <div className="space-y-3">
            {topPartners.map((partner, index) => (
              <Link
                key={partner.id}
                href={`/partners/${partner.id}`}
                className="group flex items-center gap-4 rounded-xl border border-transparent bg-white/5 p-4 transition-all hover:border-purple-500/50 hover:bg-white/10"
              >
                {/* Rank */}
                <div className="flex h-10 w-10 shrink-0 items-center justify-center text-2xl">
                  {index < 3 ? (
                    medals[index]
                  ) : (
                    <span className="font-mono text-lg text-gray-500">
                      #{index + 1}
                    </span>
                  )}
                </div>

                {/* Company Info */}
                <div className="min-w-0 flex-grow">
                  <div className="flex items-center gap-2">
                    <h3 className="truncate font-semibold group-hover:text-purple-400">
                      {partner.name}
                    </h3>
                    <span className="hidden text-xs text-gray-600 sm:inline">
                      since {partner.year}
                    </span>
                  </div>
                  <p className="truncate text-sm text-gray-500">
                    {partner.tagline}
                  </p>
                </div>

                {/* Value */}
                <div className="shrink-0 text-right">
                  <p className="text-xl font-bold text-green-400">
                    {partner.extractedValue}
                  </p>
                  <p className="text-xs text-gray-600">extracted</p>
                </div>

                {/* Arrow */}
                <svg
                  className="h-5 w-5 shrink-0 text-gray-600 transition-transform group-hover:translate-x-1 group-hover:text-purple-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            ))}
          </div>

          {/* View All */}
          <div className="mt-6 text-center">
            <Link
              href="/partners"
              className="inline-flex items-center gap-2 text-sm text-purple-400 transition-colors hover:text-purple-300"
            >
              View all {partners.length} partners
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
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>

        {/* Fun stat */}
        <p className="mt-6 text-center text-sm text-gray-600">
          Combined extraction: <span className="text-green-400">$4.2T+</span> and counting
        </p>
      </div>
    </section>
  );
}
