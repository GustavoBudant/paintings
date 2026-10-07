import { features } from "@/lib/site";

export function Features() {
  return (
    <section className="mx-auto grid max-w-6xl gap-8 px-6 py-14 sm:grid-cols-3">
      {features.map((feature) => (
        <div key={feature.title} className="flex flex-col items-center gap-4 text-center">
          <span className="flex h-16 w-16 items-center justify-center rounded-full bg-white shadow-sm">
            <img src={feature.icon} alt="" className="h-9 w-9" />
          </span>
          <h3 className="text-lg font-semibold">{feature.title}</h3>
          <p className="text-sm leading-relaxed text-paintings-muted">
            {feature.description}
          </p>
        </div>
      ))}
    </section>
  );
}
