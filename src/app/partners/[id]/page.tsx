import { notFound } from "next/navigation";
import Link from "next/link";
import { partners, getPartnerById } from "@/data/partners";

interface PartnerPageProps {
  params: Promise<{ id: string }>;
}

export async function generateStaticParams() {
  return partners.map((partner) => ({
    id: partner.id,
  }));
}

export async function generateMetadata({ params }: PartnerPageProps) {
  const { id } = await params;
  const partner = getPartnerById(id);
  if (!partner) return { title: "Partner Not Found" };

  return {
    title: `${partner.name} Case Study | EnshitifAi`,
    description: `How we helped ${partner.name} extract ${partner.extractedValue} in customer value.`,
  };
}

export default async function PartnerPage({ params }: PartnerPageProps) {
  const { id } = await params;
  const partner = getPartnerById(id);

  if (!partner) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl">
          <Link
            href="/partners"
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
            Back to Partners
          </Link>

          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            <span>Partner since {partner.year}</span>
          </div>

          <h1 className="mb-4 text-5xl font-bold md:text-7xl">{partner.name}</h1>
          <p className="mb-6 text-xl italic text-gray-500">{partner.tagline}</p>

          <div className="flex flex-wrap gap-4">
            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4">
              <p className="text-3xl font-bold text-green-400">{partner.extractedValue}</p>
              <p className="text-sm text-gray-500">Value Extracted</p>
            </div>
            <div className="rounded-xl border border-white/10 bg-white/5 px-6 py-4">
              <p className="text-3xl font-bold text-white">{partner.achievements.length}</p>
              <p className="text-sm text-gray-500">Key Initiatives</p>
            </div>
          </div>
        </div>
      </section>

      {/* Story */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-6 text-3xl font-bold">The Story</h2>
          <p className="text-lg leading-relaxed text-gray-300">{partner.description}</p>
        </div>
      </section>

      {/* Achievements */}
      <section className="border-y border-white/10 bg-white/5 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-3xl font-bold">
            Key{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Achievements
            </span>
          </h2>
          <div className="space-y-4">
            {partner.achievements.map((achievement, index) => (
              <div
                key={index}
                className="flex gap-4 rounded-xl border border-white/10 bg-black/50 p-4"
              >
                <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-green-500/20 text-sm font-bold text-green-400">
                  {index + 1}
                </div>
                <p className="text-gray-300">{achievement}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="rounded-2xl border border-purple-500/30 bg-gradient-to-r from-purple-900/20 to-pink-900/20 p-8">
            <div className="mb-4 text-4xl text-purple-400">&ldquo;</div>
            <p className="mb-6 text-2xl italic text-gray-200">
              {partner.testimonial.quote}
            </p>
            <div>
              <p className="font-semibold">{partner.testimonial.author}</p>
              <p className="text-sm text-gray-500">{partner.testimonial.title}</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-4 text-3xl font-bold">Want Results Like These?</h2>
          <p className="mb-8 text-gray-400">
            Schedule your complimentary Value Extraction Assessment today.
          </p>
          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-8 py-4 font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/25"
            >
              Get Started
            </Link>
            <Link
              href="/partners"
              className="rounded-full border border-white/20 px-8 py-4 font-semibold transition-all hover:bg-white/10"
            >
              View More Partners
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
