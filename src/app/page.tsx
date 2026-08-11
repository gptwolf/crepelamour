import type { Metadata } from "next";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SocialProof from "@/components/SocialProof";
import MenuSection from "@/components/MenuSection";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Visit from "@/components/Visit";
import Footer from "@/components/Footer";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Crepe Lamour — Mobile Crepe Catering | Southern California",
  },
  description: siteConfig.description,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Crepe Lamour — Mobile Crepe Catering | Southern California",
    description: siteConfig.description,
    url: "/",
    images: [
      {
        url: siteConfig.ogImage.url,
        width: siteConfig.ogImage.width,
        height: siteConfig.ogImage.height,
        alt: siteConfig.ogImage.alt,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Crepe Lamour — Mobile Crepe Catering",
    description:
      "Made-to-order crepes & mini pancakes for SoCal events. Book the cart.",
    images: [siteConfig.ogImage.url],
  },
};

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1">
        <Hero />
        <SocialProof />
        <MenuSection />
        <Gallery />
        <About />
        <Visit />
      </main>
      <Footer />
    </>
  );
}
