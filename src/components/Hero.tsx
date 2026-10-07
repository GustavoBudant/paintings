import { heroButtons, siteConfig } from "@/lib/site";

export function Hero() {
  return (
    <section id="inicio" className="scroll-mt-20">
      <img
        src="/img/banner.svg"
        alt="Pinturas em destaque"
        className="w-full object-cover"
      />

      <div className="mx-auto max-w-3xl px-6 py-16 text-center">
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          {siteConfig.name}
        </h1>
        <p className="mt-4 text-xl font-semibold text-paintings-muted">
          {siteConfig.tagline}
        </p>
        <p className="mx-auto mt-4 max-w-xl text-base leading-relaxed text-paintings-muted">
          {siteConfig.intro}
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          {heroButtons.map((button) =>
            button.primary ? (
              <a key={button.label} href={button.href} className="btn-primary">
                {button.label}
              </a>
            ) : (
              <a key={button.label} href={button.href} className="btn-secondary">
                {button.label}
              </a>
            ),
          )}
        </div>
      </div>
    </section>
  );
}
