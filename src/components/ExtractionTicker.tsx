"use client";

import { partners } from "@/data/partners";
import Link from "next/link";
import { useEffect, useRef } from "react";

export default function ExtractionTicker() {
  const tickerRef = useRef<HTMLDivElement>(null);

  // Triple the partners for seamless infinite scroll
  const tickerItems = [...partners, ...partners, ...partners];

  useEffect(() => {
    const ticker = tickerRef.current;
    if (!ticker) return;

    let animationId: number;
    let position = 0;
    const speed = 0.5; // pixels per frame

    const animate = () => {
      position -= speed;
      const resetPoint = ticker.scrollWidth / 3;
      if (Math.abs(position) >= resetPoint) {
        position = 0;
      }
      ticker.style.transform = `translateX(${position}px)`;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    // Pause on hover
    const handleMouseEnter = () => cancelAnimationFrame(animationId);
    const handleMouseLeave = () => {
      animationId = requestAnimationFrame(animate);
    };

    ticker.addEventListener("mouseenter", handleMouseEnter);
    ticker.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      cancelAnimationFrame(animationId);
      ticker.removeEventListener("mouseenter", handleMouseEnter);
      ticker.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="w-full overflow-hidden border-y border-green-500/20 bg-black py-3">
      <div className="relative flex">
        <div ref={tickerRef} className="flex whitespace-nowrap">
          {tickerItems.map((partner, index) => (
            <Link
              key={`${partner.id}-${index}`}
              href={`/partners/${partner.id}`}
              className="group mx-4 inline-flex items-center gap-3 transition-opacity hover:opacity-100"
            >
              <span className="font-mono text-sm text-gray-500 group-hover:text-gray-300">
                {partner.name.toUpperCase()}
              </span>
              <span className="font-mono text-sm font-bold text-green-400">
                {partner.extractedValue}
              </span>
              <span className="text-green-500">▲</span>
              <span className="mx-2 text-gray-700">|</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
