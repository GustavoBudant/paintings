import { Blog } from "@/components/Blog";
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Portfolio } from "@/components/Portfolio";

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Features />
      <Portfolio />
      <Blog />
      <Footer />
    </>
  );
}
