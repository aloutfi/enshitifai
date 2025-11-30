import Link from "next/link";

export const metadata = {
  title: "Careers | EnshitifAi",
  description: "Join the world's leading customer value extraction consultancy. We're hiring extractors at all levels.",
};

const jobs = [
  {
    id: "senior-dark-pattern-architect",
    title: "Senior Dark Pattern Architect",
    department: "UX Extraction",
    location: "Remote (Cayman Islands HQ)",
    type: "Full-time",
    salary: "$180,000 - $250,000",
    description: "Design user interfaces that guide users toward profitable decisions they didn't know they wanted to make.",
    requirements: [
      "7+ years of experience making simple things complicated",
      "Portfolio of confirmshaming copy that made users feel bad about saving money",
      "Expert knowledge of GDPR (specifically, how to technically comply while violating its spirit)",
      "Ability to design a 12-step cancellation flow that feels like 'just being thorough'",
      "Passion for A/B testing the limits of user tolerance",
    ],
    niceToHave: [
      "Previous experience at a company that's been featured in a 'Dark Patterns Hall of Shame'",
      "Ability to say 'we're just optimizing the user journey' with a straight face",
    ],
  },
  {
    id: "extraction-data-scientist",
    title: "Extraction Data Scientist",
    department: "AI & Analytics",
    location: "Remote",
    type: "Full-time",
    salary: "$200,000 - $300,000",
    description: "Build ML models that predict exactly how much degradation customers will tolerate before churning.",
    requirements: [
      "PhD in Computer Science, Statistics, or Applied Exploitation",
      "5+ years building models that optimize for metrics humans would be ashamed of",
      "Experience with TensorFlow, PyTorch, or our proprietary ExtractionML framework",
      "Proven track record of increasing revenue while decreasing customer satisfaction scores",
      "Comfort with ethical ambiguity (we provide rationalization training)",
    ],
    niceToHave: [
      "Published papers on 'dynamic pricing optimization' (we know what that really means)",
      "Experience training models on data users didn't know they were providing",
    ],
  },
  {
    id: "subscription-trap-engineer",
    title: "Subscription Trap Engineer",
    department: "Revenue Optimization",
    location: "San Francisco, CA",
    type: "Full-time",
    salary: "$160,000 - $220,000",
    description: "Convert one-time purchases into eternal revenue streams through creative subscription architecture.",
    requirements: [
      "5+ years turning 'buy' buttons into 'subscribe' buttons",
      "Deep understanding of auto-renewal dark arts",
      "Experience hiding 'cancel subscription' behind at least 5 clicks",
      "Proficiency in writing terms of service that technically allow anything",
      "Track record of implementing annual price increases without customer notification",
    ],
    niceToHave: [
      "Experience with 'free trial' flows that require a credit card and prayer to exit",
      "Knowledge of jurisdictions with weak consumer protection laws",
    ],
  },
  {
    id: "customer-retention-specialist",
    title: "Customer Retention Specialist (Hostage Negotiator)",
    department: "Customer Persistence",
    location: "Remote",
    type: "Full-time",
    salary: "$90,000 - $130,000",
    description: "Prevent customers from leaving through strategic offers, guilt, and labyrinthine phone trees.",
    requirements: [
      "3+ years in customer retention, churn prevention, or actual hostage negotiation",
      "Ability to keep someone on the phone for 45+ minutes",
      "Expert-level guilt-tripping and FOMO creation",
      "Experience with 'win-back' email sequences that border on harassment",
      "Thick skin (customers will be angry; that means it's working)",
    ],
    niceToHave: [
      "Psychology degree (for manipulation purposes)",
      "Previous work at a gym, cable company, or timeshare",
    ],
  },
  {
    id: "shrinkflation-analyst",
    title: "Shrinkflation Analyst",
    department: "Package Optimization",
    location: "Remote",
    type: "Full-time",
    salary: "$120,000 - $160,000",
    description: "Identify opportunities to reduce product/service quantity while maintaining or increasing prices.",
    requirements: [
      "4+ years in product management, preferably making products worse",
      "Expert Excel skills for calculating optimal size-to-price deception ratios",
      "Experience redesigning packaging to obscure quantity reductions",
      "Ability to write 'new and improved!' copy for objectively worse products",
      "No soul (or ability to compartmentalize)",
    ],
    niceToHave: [
      "Previous work in the snack food or toilet paper industries",
      "Experience reducing 'family size' to what used to be 'regular size'",
    ],
  },
  {
    id: "chief-rationalization-officer",
    title: "Chief Rationalization Officer",
    department: "Executive",
    location: "Cayman Islands",
    type: "Full-time",
    salary: "$400,000 - $600,000 + equity",
    description: "Help leadership sleep at night by developing compelling narratives about why extraction is actually good.",
    requirements: [
      "10+ years in corporate communications, PR, or organized religion",
      "Ability to frame anything as 'creating value for stakeholders'",
      "Expert at whataboutism ('but our competitors do it too!')",
      "Experience testifying before Congress without saying anything",
      "MBA from a school that doesn't teach ethics (most of them)",
    ],
    niceToHave: [
      "Previous role as a tobacco or oil company spokesperson",
      "Ability to cry on command during shareholder meetings",
    ],
  },
  {
    id: "intern-extraction",
    title: "Extraction Intern (Unpaid)",
    department: "Various",
    location: "Remote",
    type: "Internship",
    salary: "Experience™ + LinkedIn Recommendation",
    description: "Learn the fundamentals of customer value extraction from industry leaders. Great for building your portfolio of morally questionable work.",
    requirements: [
      "Currently enrolled in business school (ethics courses waived)",
      "Willingness to work 60 hours/week for 'exposure'",
      "Own laptop, own software licenses, own lunch",
      "Ability to describe unpaid labor as 'investing in yourself'",
      "Parent willing to subsidize your San Francisco rent",
    ],
    niceToHave: [
      "Previous unpaid internship experience (shows you can be exploited)",
      "Trust fund (for living expenses)",
    ],
  },
];

const perks = [
  {
    icon: "💰",
    title: "Competitive Extraction of Your Labor",
    description: "We pay market rate, which we helped define by suppressing wages industry-wide.",
  },
  {
    icon: "🏖️",
    title: "Unlimited PTO*",
    description: "*Unlimited as long as your work gets done, which it won't, so you'll never take any.",
  },
  {
    icon: "🏥",
    title: "Health Insurance",
    description: "After a 90-day waiting period, 6-month enrollment window, and $8,000 deductible.",
  },
  {
    icon: "📈",
    title: "Equity",
    description: "Shares in a company that profits from human misery. Vest over 4 years with a 1-year cliff.",
  },
  {
    icon: "🍕",
    title: "Free Snacks",
    description: "Shrinkflated snacks from our partners. Great for testing product degradation firsthand.",
  },
  {
    icon: "🧘",
    title: "Wellness Stipend",
    description: "$50/month for therapy. You'll need it.",
  },
];

export default function CareersPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-green-500/30 bg-green-500/10 px-4 py-2 text-sm text-green-400">
            <span>🚀</span>
            <span>We&apos;re hiring!</span>
          </div>
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Join the{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Extraction
            </span>{" "}
            Revolution
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            We&apos;re building a world-class team of extraction specialists, dark pattern
            designers, and professional rationalizers. Sound like you?
          </p>
        </div>
      </section>

      {/* Culture */}
      <section className="border-y border-white/10 bg-white/5 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-3xl font-bold">Our Culture</h2>
          <p className="mb-8 text-lg text-gray-400">
            At EnshitifAi, we move fast and break things (specifically, customer trust).
            We&apos;re a family here*—which means we&apos;ll guilt you into working weekends and
            underpay you because &quot;we&apos;re all in this together.&quot;
          </p>
          <p className="text-sm text-gray-600">
            *Not an actual family. No familial legal protections apply.
          </p>
        </div>
      </section>

      {/* Perks */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <h2 className="mb-12 text-center text-3xl font-bold">
            Benefits &{" "}
            <span className="bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
              Perks
            </span>
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {perks.map((perk, index) => (
              <div
                key={index}
                className="rounded-xl border border-white/10 bg-white/5 p-6"
              >
                <div className="mb-3 text-3xl">{perk.icon}</div>
                <h3 className="mb-2 font-semibold">{perk.title}</h3>
                <p className="text-sm text-gray-400">{perk.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open Roles */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-4 text-center text-3xl font-bold">Open Positions</h2>
          <p className="mb-12 text-center text-gray-400">
            Find your place in the extraction economy
          </p>

          <div className="space-y-4">
            {jobs.map((job) => (
              <div
                key={job.id}
                className="group rounded-xl border border-white/10 bg-white/5 p-6 transition-all hover:border-purple-500/50 hover:bg-white/10"
              >
                <div className="mb-4 flex flex-wrap items-start justify-between gap-4">
                  <div>
                    <h3 className="text-xl font-bold group-hover:text-purple-400">
                      {job.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {job.department} • {job.location} • {job.type}
                    </p>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold text-green-400">{job.salary}</p>
                  </div>
                </div>

                <p className="mb-4 text-gray-400">{job.description}</p>

                <div className="mb-4">
                  <p className="mb-2 text-sm font-semibold text-gray-300">Requirements:</p>
                  <ul className="space-y-1">
                    {job.requirements.slice(0, 3).map((req, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-gray-400">
                        <span className="text-purple-400">•</span>
                        {req}
                      </li>
                    ))}
                    {job.requirements.length > 3 && (
                      <li className="text-sm text-gray-500">
                        +{job.requirements.length - 3} more requirements...
                      </li>
                    )}
                  </ul>
                </div>

                <button className="rounded-full border border-purple-500/50 px-4 py-2 text-sm font-semibold text-purple-400 transition-all hover:bg-purple-500/20">
                  Apply Now (Form Doesn&apos;t Work)
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Process */}
      <section className="border-t border-white/10 bg-white/5 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-8 text-center text-3xl font-bold">Our Hiring Process</h2>
          <div className="grid gap-6 md:grid-cols-4">
            {[
              {
                step: "01",
                title: "Apply",
                description: "Submit your resume into our ATS void. We'll ghost you for 3-6 months.",
              },
              {
                step: "02",
                title: "Phone Screen",
                description: "30-minute call with a recruiter who hasn't read your resume.",
              },
              {
                step: "03",
                title: "Take-Home",
                description: "40-hour 'small project' to 'see how you think.' We may use it in production.",
              },
              {
                step: "04",
                title: "Panel Interviews",
                description: "6 hours of interviews where everyone asks the same questions.",
              },
            ].map((phase) => (
              <div key={phase.step} className="text-center">
                <div className="mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-purple-600 to-pink-600 text-lg font-bold">
                  {phase.step}
                </div>
                <h3 className="mb-2 font-semibold">{phase.title}</h3>
                <p className="text-sm text-gray-400">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-4 text-2xl font-bold">Don&apos;t See Your Role?</h2>
          <p className="mb-6 text-gray-400">
            We&apos;re always looking for talented extractors. Send us your resume and
            we&apos;ll keep it on file (by which we mean delete it immediately).
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-purple-600 to-pink-600 px-6 py-3 font-semibold transition-all hover:shadow-lg hover:shadow-purple-500/25"
          >
            Get in Touch
            <span>📧</span>
          </Link>
        </div>
      </section>

      {/* Disclaimer */}
      <section className="border-t border-white/10 px-4 py-8">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-xs text-gray-600">
            <strong>DISCLAIMER:</strong> These are not real job postings. EnshitifAi is a
            satirical website. Please do not actually apply. If you did apply, we admire
            your commitment to the bit.
          </p>
        </div>
      </section>
    </main>
  );
}
