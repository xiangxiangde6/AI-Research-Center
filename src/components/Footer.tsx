// src/components/Footer.tsx
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-black/20 bg-[rgb(var(--brand))]">
      <div className="container-6xl py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Contact */}
          <div>
            <h3 className="text-2xl font-semibold">Contact</h3>
            <p className="mt-2">
              School of Engineering, Computer &amp; Mathematical Sciences<br />
              Auckland University of Technology
            </p>
            <p className="mt-2">
              <a href="mailto:cair@aut.example" className="underline">
                cair@aut.example
              </a>
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold">Quick Links</h3>
            <ul className="mt-2 list-disc pl-5 space-y-1">
              <li>
                <Link href="/projects" className="underline">Projects</Link>
              </li>
              <li>
                <Link href="/people" className="underline">People</Link>
              </li>
              <li>
                <Link href="/news-and-events" className="underline">News &amp; Events</Link>
              </li>
              <li>
                <Link href="/study" className="underline">Study</Link>
              </li>
            </ul>
          </div>

          {/* Subscribe */}
          <div>
            <h3 className="text-2xl font-semibold">Subscribe</h3>
            <p className="mt-2">
              Subscribe to our newsletter and seminar<br />announcements
            </p>
            <button
              type="button"
              className="mt-4 inline-flex items-center rounded-xl px-4 py-2 text-white bg-black hover:bg-black/80"
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
