import { portfolioSections } from "@/lib/site";

export function Portfolio() {
  return (
    <section id="portfolio" className="scroll-mt-20 bg-paintings-bg">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          My Portfolio
        </h2>

        <div className="mt-14 space-y-20">
          {portfolioSections.map((section) => (
            <div key={section.title}>
              <h3 className="text-2xl font-semibold">{section.title}</h3>
              <p className="mt-3 max-w-2xl text-paintings-muted">
                {section.description}
              </p>

              <div className="mt-8 grid gap-8 md:grid-cols-2">
                {section.cards.map((card) => (
                  <article
                    key={card.title}
                    className="overflow-hidden rounded-lg bg-paintings-card shadow-sm"
                  >
                    <div className="card-img">
                      <img src={card.image} alt={card.title} />
                    </div>
                    <div className="p-6">
                      <h4 className="text-lg font-semibold">{card.title}</h4>
                      <p className="mt-2 text-sm leading-relaxed text-paintings-muted">
                        {card.description}
                      </p>
                      <a
                        href="#"
                        className="mt-4 inline-block font-semibold text-paintings-accent hover:underline"
                      >
                        Find out more →
                      </a>
                    </div>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
