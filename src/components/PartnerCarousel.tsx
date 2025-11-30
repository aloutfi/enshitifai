"use client";

import { partners } from "@/data/partners";
import Link from "next/link";

export default function PartnerCarousel() {
  // Double the partners for seamless infinite scroll
  const doubledPartners = [...partners, ...partners];

  return (
    <div className="w-full overflow-hidden bg-white/5 py-12 backdrop-blur-sm">
      <div className="mb-8 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-purple-400">
          Trusted by Industry Leaders
        </p>
      </div>
      <div className="relative">
        <div className="animate-scroll flex gap-16 whitespace-nowrap">
          {doubledPartners.map((partner, index) => (
            <Link
              key={`${partner.id}-${index}`}
              href={`/partners/${partner.id}`}
              className="group flex min-w-[200px] flex-col items-center gap-3 transition-transform hover:scale-110"
            >
              <div className="flex h-16 w-40 items-center justify-center rounded-lg bg-white/10 px-6 py-4 transition-all group-hover:bg-white/20">
                <span className="text-2xl font-bold text-white/80 group-hover:text-white">
                  {partner.name}
                </span>
              </div>
              <span className="text-xs text-green-400 opacity-0 transition-opacity group-hover:opacity-100">
                {partner.extractedValue} extracted
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
