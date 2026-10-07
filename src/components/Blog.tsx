import { blogPosts } from "@/lib/site";

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-20 bg-paintings-card">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <h2 className="text-center text-3xl font-bold tracking-tight">
          The Blog
        </h2>

        <div className="mt-14 grid gap-10 md:grid-cols-2">
          {blogPosts.map((post) => (
            <article key={post.title} className="overflow-hidden rounded-lg bg-paintings-bg">
              <div className="card-img">
                <img src={post.image} alt={post.title} />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold">{post.title}</h3>
                <p className="mt-1 text-sm text-paintings-muted">{post.meta}</p>
                <p className="mt-4 text-sm leading-relaxed text-paintings-muted">
                  {post.excerpt}
                </p>
                <div className="mt-4 flex items-center justify-between text-sm">
                  <a
                    href="#"
                    className="font-semibold text-paintings-accent hover:underline"
                  >
                    Continue Reading →
                  </a>
                  <span className="text-paintings-muted">33 comments</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
