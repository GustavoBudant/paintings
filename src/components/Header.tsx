import Link from "next/link";

import { navLinks, siteConfig } from "@/lib/site";

export function Header() {
  return (
    <header className="bg-paintings-header px-6 py-5 text-white">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4">
        <Link
          href="/#inicio"
          className="text-2xl font-bold tracking-tight text-white"
        >
          {siteConfig.name}
        </Link>

        <nav
          aria-label="Navegação principal"
          className="flex items-center gap-6 text-sm font-medium text-gray-200"
        >
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="transition-colors hover:text-white"
            >
              {link.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
