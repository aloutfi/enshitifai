import Link from "next/link";

export const metadata = {
  title: "Services | EnshitifAi",
  description: "Comprehensive value extraction solutions for forward-thinking companies.",
};

const services = [
  {
    icon: "🔒",
    title: "Subscription Trap Architecture",
    price: "$75,000",
    description:
      "Transform one-time purchases into eternal revenue streams. Why let customers own something when they can rent it forever?",
    features: [
      "Convert owned features to subscription model",
      "Implement price-lock periods with hidden early termination fees",
      "Design 'freemium' tiers that are barely functional",
      "Create upgrade paths that feel mandatory",
      "Annual price increase framework (blame inflation)",
    ],
  },
  {
    icon: "🌀",
    title: "Dark Pattern Design System",
    price: "$100,000",
    description:
      "UX that makes the profitable choice feel like the only choice. Ethically questionable, financially optimal.",
    features: [
      "Confirmshaming copy templates ('No, I don't want to save money')",
      "Hidden unsubscribe flows (minimum 7 clicks)",
      "Pre-checked consent boxes for data harvesting",
      "Countdown timers that reset (urgency without truth)",
      "Bait-and-switch pricing displays",
    ],
  },
  {
    icon: "📉",
    title: "Strategic Service Degradation",
    price: "$50,000",
    description:
      "Carefully reduce free tier quality to nudge users toward paid options without causing mass exodus.",
    features: [
      "Feature sunset roadmap planning",
      "Artificial limitation implementation",
      "Ad load optimization (maximize without breaking)",
      "Support response time stretching",
      "Quality reduction that seems like 'optimization'",
    ],
  },
  {
    icon: "🚫",
    title: "Cancellation Labyrinth Engineering",
    price: "$80,000",
    description:
      "Transform a 1-click signup into a 47-step odyssey of guilt, confusion, and eventual surrender.",
    features: [
      "Multi-page cancellation flows",
      "Retention offer interruption sequences",
      "Phone-only cancellation requirements",
      "Cooling off period manipulation",
      "Win-back email harassment campaigns",
    ],
  },
  {
    icon: "💸",
    title: "Fee Structure Optimization",
    price: "$60,000",
    description:
      "Hidden fees, convenience fees, service fees, processing fees. The price tag is just the beginning.",
    features: [
      "Junk fee implementation strategy",
      "Resort fee / Destination fee modeling",
      "Payment processing fee pass-through",
      "Surge pricing algorithm development",
      "Dynamic pricing that always trends up",
    ],
  },
  {
    icon: "📊",
    title: "Shrinkflation Consulting",
    price: "$45,000",
    description:
      "Same price, less product. Smaller packages, shorter subscriptions, reduced features. The invisible price increase.",
    features: [
      "Package size reduction planning",
      "Feature set trimming strategy",
      "Quality ingredient substitution",
      "Serving size manipulation",
      "Container redesign (looks the same, holds less)",
    ],
  },
  {
    icon: "🤖",
    title: "AI-Powered Extraction",
    price: "$150,000",
    description:
      "Machine learning models trained to find extraction opportunities humans would miss. The algorithm doesn't feel guilt.",
    features: [
      "Personalized pricing (charge what they'll pay)",
      "Churn prediction for preemptive extraction",
      "Sentiment analysis to time fee increases",
      "Automated dark pattern A/B testing",
      "Customer lifetime value maximization AI",
    ],
  },
  {
    icon: "🔐",
    title: "Data Monetization Strategy",
    price: "$90,000",
    description:
      "Your users' data is an asset. Privacy policies are suggestions. GDPR is more of a vibe than a law.",
    features: [
      "Third-party data sharing partnerships",
      "Consent flow obfuscation",
      "Data broker marketplace entry",
      "Tracking pixel implementation",
      "Cross-platform user profiling",
    ],
  },
  {
    icon: "🎯",
    title: "Platform Lock-in Engineering",
    price: "$120,000",
    description:
      "Make leaving so painful that staying feels like the only option. Proprietary formats, ecosystem traps, the works.",
    features: [
      "Proprietary file format development",
      "Export limitation implementation",
      "Ecosystem dependency creation",
      "Switching cost maximization",
      "Integration exclusivity deals",
    ],
  },
];

export default function ServicesPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-6xl text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Our{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              Services
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Comprehensive solutions to help you extract maximum value from your customer base.
            All packages include complimentary ethics rationalization.
          </p>
        </div>
      </section>

      {/* Pricing Note */}
      <section className="px-4 pb-8">
        <div className="mx-auto max-w-6xl">
          <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4 text-center">
            <p className="text-yellow-400">
              <strong>Note:</strong> All prices are starting points. Like our partners,
              we believe in dynamic pricing based on what you can afford.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {services.map((service, index) => (
              <div
                key={index}
                className="group flex flex-col rounded-2xl border border-white/10 bg-white/5 p-6 transition-all hover:border-purple-500/50 hover:bg-white/10"
              >
                <div className="mb-4 text-4xl">{service.icon}</div>
                <h2 className="mb-2 text-xl font-bold">{service.title}</h2>
                <p className="mb-4 text-2xl font-bold text-green-400">
                  {service.price}
                  <span className="text-sm font-normal text-gray-500">/engagement</span>
                </p>
                <p className="mb-6 flex-grow text-gray-400">{service.description}</p>
                <ul className="mb-6 space-y-2">
                  {service.features.map((feature, fIndex) => (
                    <li key={fIndex} className="flex items-start gap-2 text-sm text-gray-300">
                      <span className="mt-1 text-green-400">✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="rounded-full border border-purple-500/50 py-2 text-center text-sm font-semibold text-purple-400 transition-all hover:bg-purple-500/20"
                >
                  Get Started
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enterprise */}
      <section className="border-y border-white/10 bg-gradient-to-r from-purple-900/20 to-pink-900/20 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Enterprise Solutions</h2>
          <p className="mb-6 text-xl text-gray-400">
            For companies serious about large-scale value extraction, we offer custom
            enterprise packages starting at <span className="text-green-400">$500,000</span>.
          </p>
          <p className="mb-8 text-gray-500">
            Includes dedicated extraction strategist, quarterly extraction reports,
            and a complimentary &quot;We&apos;re Actually Helping Customers&quot; PR kit.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 font-semibold text-black transition-all hover:bg-gray-200"
          >
            Contact Sales
            <span>💼</span>
          </Link>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            {[
              {
                q: "Is this legal?",
                a: "Our lawyers say 'technically yes' which is the best kind of yes. We operate in the gray areas between 'illegal' and 'will definitely be illegal someday.'",
              },
              {
                q: "What about customer backlash?",
                a: "We've found that customers complain but rarely leave. Where else are they going to go? That's the beauty of market consolidation.",
              },
              {
                q: "Do you offer refunds?",
                a: "Ha! No. But we can teach you how to not offer refunds too. That's actually one of our most popular services.",
              },
              {
                q: "How do you measure success?",
                a: "Shareholder value, quarterly revenue growth, and executive bonus targets. Customer satisfaction is not a KPI we track.",
              },
              {
                q: "What industries do you work with?",
                a: "All of them. Enshittification is industry-agnostic. If you have customers, we can help you extract more value from them.",
              },
            ].map((faq, index) => (
              <div key={index} className="rounded-xl border border-white/10 bg-white/5 p-6">
                <h3 className="mb-2 text-lg font-semibold">{faq.q}</h3>
                <p className="text-gray-400">{faq.a}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
