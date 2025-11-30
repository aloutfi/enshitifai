import Link from "next/link";

export const metadata = {
  title: "About | EnshitifAi",
  description: "Learn about our mission to help companies extract maximum value from customers.",
};

const team = [
  {
    name: "Chad Maximillian III",
    title: "CEO & Chief Extraction Officer",
    bio: "Former private equity partner who realized destroying companies was less profitable than slowly destroying customer relationships.",
    emoji: "🎩",
  },
  {
    name: "Karen McKinsey",
    title: "VP of Dark Patterns",
    bio: "UX designer who got tired of making things easy to use. Now makes things easy to accidentally purchase.",
    emoji: "🌀",
  },
  {
    name: "Bradley Venture",
    title: "Head of Subscription Optimization",
    bio: "Pioneered the 'free trial to $299/month' pipeline. Believes cancel buttons are a UX anti-pattern.",
    emoji: "💳",
  },
  {
    name: "Erica Retention",
    title: "Director of Customer Persistence",
    bio: "Holds the industry record for longest cancellation flow (47 screens). Users call her 'The Labyrinth.'",
    emoji: "🚫",
  },
  {
    name: "Marcus Algorithm",
    title: "AI Extraction Specialist",
    bio: "Trained models on billions of transactions to predict exactly how much customers will tolerate before leaving. (Spoiler: a lot)",
    emoji: "🤖",
  },
  {
    name: "Diana Shrinkflation",
    title: "Senior Package Reduction Analyst",
    bio: "Has reduced package sizes by 23% across 50+ products without anyone noticing. Her motto: 'Same box, less product.'",
    emoji: "📦",
  },
];

const milestones = [
  {
    year: "2020",
    event: "Founded in a WeWork during the pandemic",
    detail: "Noticed companies were desperate to extract more value as customers stayed home.",
  },
  {
    year: "2021",
    event: "First major client (unnamed streaming service)",
    detail: "Helped implement password sharing crackdown strategy. Revenue up 15%.",
  },
  {
    year: "2022",
    event: "Expanded to automotive sector",
    detail: "Pioneered heated seat subscriptions. Industry still catching up.",
  },
  {
    year: "2023",
    event: "Launched AI Extraction Division",
    detail: "Machine learning models now find extraction opportunities 24/7.",
  },
  {
    year: "2024",
    event: "Reached $4.2T in extracted value for partners",
    detail: "That's more than the GDP of Germany. You're welcome, shareholders.",
  },
];

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-pink-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            About{" "}
            <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-transparent">
              EnshitifAi
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            We&apos;re on a mission to help companies realize that customer satisfaction
            and shareholder returns are inversely correlated.
          </p>
        </div>
      </section>

      {/* Mission */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-white/10 bg-white/5 p-8 md:p-12">
            <h2 className="mb-6 text-3xl font-bold">Our Mission</h2>
            <p className="mb-6 text-lg text-gray-300">
              At EnshitifAi, we believe every company has untapped extraction potential.
              Whether you&apos;re a scrappy startup or a Fortune 500 incumbent, there&apos;s always
              more value hiding in your customer relationships—value that rightfully
              belongs to your shareholders.
            </p>
            <p className="mb-6 text-lg text-gray-300">
              Our name comes from the term &quot;enshittification,&quot; coined by author
              Cory Doctorow to describe how platforms inevitably degrade their services
              to extract maximum value. We don&apos;t see this as a criticism—we see it as
              a business model.
            </p>
            <p className="text-lg text-gray-300">
              We&apos;re not just consultants. We&apos;re <span className="text-purple-400">extraction engineers</span>.
              We&apos;re <span className="text-pink-400">value archaeologists</span>. We&apos;re the friends
              your board of directors wishes you had.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="border-y border-white/10 bg-white/5 px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Values</h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                title: "Shareholder First",
                description: "Customers are a means to an end. That end is Q4 targets.",
                icon: "📈",
              },
              {
                title: "Move Fast, Extract Faster",
                description: "By the time regulators catch up, we'll have moved on.",
                icon: "🚀",
              },
              {
                title: "Data is Oil",
                description: "And like oil, we're going to drill for it everywhere.",
                icon: "🛢️",
              },
              {
                title: "Friction is a Feature",
                description: "Easy cancellation is a bug in your revenue model.",
                icon: "🧱",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-black/50 p-6 text-center"
              >
                <div className="mb-4 text-4xl">{value.icon}</div>
                <h3 className="mb-2 font-bold">{value.title}</h3>
                <p className="text-sm text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-4 text-center text-3xl font-bold">Leadership Team</h2>
          <p className="mb-12 text-center text-gray-400">
            Visionaries in the art of value extraction
          </p>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {team.map((member, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-4 text-5xl">{member.emoji}</div>
                <h3 className="mb-1 text-xl font-bold">{member.name}</h3>
                <p className="mb-3 text-sm text-purple-400">{member.title}</p>
                <p className="text-sm text-gray-400">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="border-y border-white/10 bg-white/5 px-4 py-24">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold">Our Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 font-bold">
                    {milestone.year.slice(-2)}
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="h-full w-px bg-white/20" />
                  )}
                </div>
                <div className="pb-8">
                  <p className="text-sm text-gray-500">{milestone.year}</p>
                  <h3 className="mb-2 text-xl font-bold">{milestone.event}</h3>
                  <p className="text-gray-400">{milestone.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investors Parody */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Backed By</h2>
          <p className="mb-12 text-gray-400">
            Investors who understand that customer pain is shareholder gain
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {[
              "Sequoia Extraction Capital",
              "a]6z",
              "Softbank Vision Fund 3",
              "Tiger Aggressive Global",
              "Greylock Extraction Partners",
            ].map((investor, index) => (
              <div
                key={index}
                className="rounded-lg border border-white/10 bg-white/5 px-6 py-3 text-gray-400"
              >
                {investor}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-900/50 to-pink-900/50" />
        <div className="relative mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-4xl font-bold">Join the Movement</h2>
          <p className="mb-8 text-xl text-gray-300">
            Ready to transform your relationship with customers into a extraction machine?
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-white px-8 py-4 text-lg font-semibold text-black transition-all hover:bg-gray-200"
          >
            Let&apos;s Talk
            <span>💸</span>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-white/10 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs text-gray-600">
            <strong>DISCLAIMER:</strong> This is a satirical website. None of the people,
            investors, or events mentioned are real. This is parody commentary on the
            concept of &quot;enshittification&quot; as coined by Cory Doctorow.
          </p>
        </div>
      </section>
    </main>
  );
}
