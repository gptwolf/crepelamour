import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <MenuSection />
        <Gallery />
        <About />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
