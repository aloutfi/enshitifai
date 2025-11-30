import Link from "next/link";
import ExtractionTicker from "@/components/ExtractionTicker";
import Leaderboard from "@/components/Leaderboard";
import { getTotalExtractedValue, partners } from "@/data/partners";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <section className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden px-4">
        {/* Gradient orbs */}
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/30 blur-3xl" />
        <div className="absolute right-1/4 top-1/3 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />
        <div className="absolute bottom-1/4 left-1/3 h-96 w-96 rounded-full bg-blue-600/20 blur-3xl" />

        <div className="relative z-10 mx-auto max-w-5xl text-center">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm backdrop-blur-sm">
            <span className="text-green-400">●</span>
            <span className="text-gray-300">Now accepting new extraction partners</span>
          </div>

          <h1 className="mb-6 text-5xl font-bold leading-tight tracking-tight md:text-7xl lg:text-8xl">
            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
              Unlock the True
            </span>
            <br />
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Value of Your Customers
            </span>
          </h1>

          <p className="mx-auto mb-8 max-w-2xl text-lg text-gray-400 md:text-xl">
            We help forward-thinking companies transition from{" "}
            <span className="text-gray-200">customer satisfaction</span> to{" "}
            <span className="text-green-400">customer value extraction</span>.
            Because shareholder value doesn&apos;t grow itself.
          </p>

          <div className="mb-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="group relative overflow-hidden rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/25"
            >
              <span className="relative z-10">Start Extracting</span>
              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 transition-opacity group-hover:opacity-100" />
            </Link>
            <Link
              href="/partners"
              className="rounded-full border border-white/20 px-8 py-4 text-lg font-semibold transition-all hover:bg-white/10"
            >
              View Case Studies
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-green-400 md:text-4xl">{getTotalExtractedValue()}</p>
              <p className="text-sm text-gray-500">Value Extracted</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white md:text-4xl">{partners.length}+</p>
              <p className="text-sm text-gray-500">Partners Served</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white md:text-4xl">0</p>
              <p className="text-sm text-gray-500">Lawsuits Won</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-white md:text-4xl">100%</p>
              <p className="text-sm text-gray-500">Profit Focus</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg
            className="h-6 w-6 text-gray-500"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </section>

      {/* Extraction Ticker */}
      <ExtractionTicker />

      {/* Hall of Extraction Leaderboard */}
      <Leaderboard />

      {/* Services Preview */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              Our{" "}
              <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
                Services
              </span>
            </h2>
            <p className="mx-auto max-w-2xl text-gray-400">
              Comprehensive solutions for maximum value extraction
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: "🔒",
                title: "Subscription Traps",
                description:
                  "Convert one-time purchases into recurring revenue streams. If they bought it, they can rent it again.",
              },
              {
                icon: "🌀",
                title: "Dark Pattern Design",
                description:
                  "UX optimization that makes the profitable choice the only visible choice.",
              },
              {
                icon: "📉",
                title: "Service Degradation",
                description:
                  "Strategic quality reduction to drive users toward premium tiers.",
              },
              {
                icon: "🚫",
                title: "Cancellation Labyrinths",
                description:
                  "Turn a 1-click signup into a 47-step odyssey of retention.",
              },
              {
                icon: "📊",
                title: "Shrinkflation Consulting",
                description:
                  "Same price, less product. The math checks out for shareholders.",
              },
              {
                icon: "🤖",
                title: "AI-Powered Extraction",
                description:
                  "Machine learning models trained on billions of data points to find new extraction vectors.",
              },
            ].map((service, index) => (
              <div
                key={index}
                className="group rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-purple-500/50 hover:bg-white/10"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{service.title}</h3>
                <p className="text-gray-400">{service.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 text-purple-400 transition-colors hover:text-purple-300"
            >
              View all services
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
      </section>

      {/* Testimonials */}
      <section className="border-y border-white/10 bg-white/5 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold md:text-5xl">
              What Our{" "}
              <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
                Partners
              </span>{" "}
              Say
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                quote:
                  "EnshitifAi helped us see that customer trust is a depletable resource, and we should deplete it faster.",
                author: "Definitely Not a CEO",
                company: "Major Tech Company",
                value: "$2.3B extracted",
              },
              {
                quote:
                  "Our users used to love us. Now they're trapped. Same thing, really.",
                author: "Anonymous Founder",
                company: "Popular Social Platform",
                value: "$890M extracted",
              },
              {
                quote:
                  "We never knew how much money we were leaving on the table by having a functional product.",
                author: "Chief Revenue Officer",
                company: "Streaming Service",
                value: "$1.1B extracted",
              },
            ].map((testimonial, index) => (
              <div
                key={index}
                className="rounded-2xl border border-white/10 bg-black p-6"
              >
                <div className="mb-4 text-green-400">{testimonial.value}</div>
                <p className="mb-6 text-lg italic text-gray-300">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-semibold">{testimonial.author}</p>
                  <p className="text-sm text-gray-500">{testimonial.company}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50" />
        <div className="absolute left-1/2 top-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-purple-600/30 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold md:text-6xl">
            Ready to Extract?
          </h2>
          <p className="mb-8 text-xl text-gray-300">
            Schedule your complimentary Value Extraction Assessment today.
            <br />
            <span className="text-gray-500">(Just $100,000 after the free consultation)</span>
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-gray-200"
          >
            Book a Call
            <span className="text-xl">💸</span>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-white/10 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs text-gray-600">
            <strong>DISCLAIMER:</strong> This is a satirical website. EnshitifAi is not a real company.
            This site is a parody commentary on the concept of &quot;enshittification&quot; as coined by Cory Doctorow.
            No actual consulting services are offered. All company references are for satirical purposes only.
          </p>
        </div>
      </section>
    </main>
  );
}
