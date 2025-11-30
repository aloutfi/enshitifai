import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <div className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt="EnshitifAi Logo"
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 bg-clip-text text-xl font-bold text-transparent">
                EnshitifAi
              </span>
            </div>
            <p className="mt-4 text-sm text-gray-400">
              Maximizing shareholder value by minimizing customer value since 2024.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white">Services</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/services" className="hover:text-white">
                  Value Extraction Audit
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Subscription Optimization
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Dark Pattern Design
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white">
                  Cancellation Flow Consulting
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Company</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white">
                  About
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-white">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-white">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white">Legal</h3>
            <ul className="mt-4 space-y-2 text-sm text-gray-400">
              <li>
                <span className="cursor-pointer hover:text-white">
                  Privacy Policy*
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white">
                  Terms of Service**
                </span>
              </li>
              <li>
                <span className="cursor-pointer hover:text-white">
                  Cookie Policy***
                </span>
              </li>
            </ul>
            <p className="mt-4 text-xs text-gray-600">
              * We collect everything
              <br />
              ** Subject to change without notice
              <br />
              *** All cookies, all the time
            </p>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-8">
          <div className="flex flex-col items-center justify-between gap-4 md:flex-row">
            <p className="text-sm text-gray-400">
              &copy; 2024 EnshitifAi. No rights reserved. This is satire.
            </p>
            <p className="text-xs text-gray-600">
              A parody website. Not affiliated with any companies mentioned.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
