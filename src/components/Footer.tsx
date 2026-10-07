import { siteConfig } from "@/lib/site";

export function Footer() {
  return (
    <footer className="mt-auto border-t border-black/10 bg-paintings-card">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-3 px-6 py-10 text-center sm:flex-row sm:text-left">
        <p className="text-sm text-paintings-muted">{siteConfig.footer}</p>
        <p className="text-sm text-paintings-muted">{siteConfig.credit}</p>
      </div>
    </footer>
  );
}
