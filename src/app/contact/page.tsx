"use client";

import { useState } from "react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-black text-white">
      {/* Hero */}
      <section className="relative overflow-hidden px-4 py-24">
        <div className="absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-purple-600/20 blur-3xl" />
        <div className="absolute right-1/4 bottom-1/4 h-96 w-96 rounded-full bg-green-600/20 blur-3xl" />

        <div className="relative mx-auto max-w-4xl text-center">
          <h1 className="mb-6 text-5xl font-bold md:text-7xl">
            Let&apos;s{" "}
            <span className="bg-gradient-to-r from-green-400 to-emerald-500 bg-clip-text text-transparent">
              Extract
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-xl text-gray-400">
            Ready to unlock the true value of your customer relationships?
            Fill out the form below and our extraction specialists will be in touch.
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="px-4 pb-24">
        <div className="mx-auto max-w-2xl">
          {submitted ? (
            <div className="rounded-2xl border border-green-500/30 bg-green-500/10 p-8 text-center">
              <div className="mb-4 text-6xl">💸</div>
              <h2 className="mb-4 text-2xl font-bold text-green-400">
                Submission Received!
              </h2>
              <p className="mb-6 text-gray-300">
                Just kidding—this is a parody website. We didn&apos;t actually collect
                any of your data. (Unlike the companies we satirize, we respect your privacy.)
              </p>
              <p className="text-gray-400">
                But seriously, if you want to learn more about &quot;enshittification,&quot;
                check out Cory Doctorow&apos;s work on the topic.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-8">
                <h2 className="mb-6 text-2xl font-bold">Extraction Inquiry Form</h2>

                <div className="space-y-4">
                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Company Name
                    </label>
                    <input
                      type="text"
                      placeholder="e.g., MegaCorp Industries"
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Your Title
                    </label>
                    <select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
                      <option value="">Select your title</option>
                      <option value="ceo">CEO / Founder</option>
                      <option value="cfo">CFO / Finance</option>
                      <option value="cpo">CPO / Product</option>
                      <option value="vp">VP of Something</option>
                      <option value="director">Director of Extraction</option>
                      <option value="other">Other (we&apos;ll make something up)</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Current Customer Satisfaction Score
                    </label>
                    <select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
                      <option value="">How happy are your customers?</option>
                      <option value="high">High (lots of room to extract)</option>
                      <option value="medium">Medium (some extraction possible)</option>
                      <option value="low">Low (we love a challenge)</option>
                      <option value="unknown">We don&apos;t track this (smart!)</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Extraction Goals
                    </label>
                    <div className="space-y-2">
                      {[
                        "Increase subscription revenue",
                        "Reduce cancellations through friction",
                        "Monetize user data",
                        "Implement surge pricing",
                        "Convert free users to paid",
                        "Hide fees more effectively",
                        "All of the above",
                      ].map((goal, index) => (
                        <label key={index} className="flex items-center gap-3">
                          <input
                            type="checkbox"
                            className="h-4 w-4 rounded border-white/20 bg-white/10 text-purple-600 focus:ring-purple-500"
                          />
                          <span className="text-gray-300">{goal}</span>
                        </label>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Budget for Value Extraction
                    </label>
                    <select className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500">
                      <option value="">Select your budget</option>
                      <option value="50k">$50,000 - $100,000</option>
                      <option value="100k">$100,000 - $250,000</option>
                      <option value="250k">$250,000 - $500,000</option>
                      <option value="500k">$500,000+ (serious extractor)</option>
                      <option value="unlimited">Unlimited (love to see it)</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-sm font-medium text-gray-300">
                      Additional Details
                    </label>
                    <textarea
                      rows={4}
                      placeholder="Tell us about your customers and how you'd like to extract more value from them..."
                      className="w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-white placeholder-gray-500 focus:border-purple-500 focus:outline-none focus:ring-1 focus:ring-purple-500"
                    />
                  </div>
                </div>
              </div>

              {/* Consent Parody */}
              <div className="rounded-xl border border-yellow-500/30 bg-yellow-500/10 p-4">
                <label className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    required
                    className="mt-1 h-4 w-4 rounded border-white/20 bg-white/10 text-purple-600 focus:ring-purple-500"
                  />
                  <span className="text-sm text-gray-300">
                    I agree to receive marketing emails forever, have my data sold to third
                    parties, and accept that the &quot;unsubscribe&quot; link will lead to a
                    47-page form. I also acknowledge this is satire and no actual data is collected.
                  </span>
                </label>
              </div>

              <button
                type="submit"
                className="w-full rounded-full bg-gradient-to-r from-purple-600 to-pink-600 py-4 text-lg font-semibold transition-all hover:shadow-2xl hover:shadow-purple-500/25"
              >
                Submit Extraction Request 💸
              </button>

              <p className="text-center text-xs text-gray-600">
                By submitting, you agree to our Terms of Extraction, Privacy Exploitation Policy,
                and Cookie Infestation Agreement. (Just kidding, this form doesn&apos;t actually do anything.)
              </p>
            </form>
          )}
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="border-t border-white/10 bg-white/5 px-4 py-16">
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="mb-6 text-2xl font-bold">Prefer to Chat?</h2>
          <p className="mb-8 text-gray-400">
            Our extraction specialists are standing by to help you squeeze every last
            drop of value from your customer base.
          </p>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="text-center">
              <div className="mb-2 text-3xl">📞</div>
              <p className="text-sm text-gray-500">Phone</p>
              <p className="font-mono text-gray-300">1-800-EXTRACT</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl">📧</div>
              <p className="text-sm text-gray-500">Email</p>
              <p className="font-mono text-gray-300">extract@enshitifai.com</p>
            </div>
            <div className="text-center">
              <div className="mb-2 text-3xl">📍</div>
              <p className="text-sm text-gray-500">Location</p>
              <p className="font-mono text-gray-300">Cayman Islands (for tax reasons)</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
