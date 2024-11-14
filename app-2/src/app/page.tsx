import { Header } from "@/components/header";
import { Hero } from "@/components/hero";
import { Component } from "@/components/component";
import { Faq } from "@/components/faq";
import { BlogSection } from "@/components/blog-section";
import { Hero2 } from "@/components/hero-2";
import { FeaturesSection } from "@/components/features-section";
import { Footer } from "@/components/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <Hero />
      <Component />
      <Faq />
      <BlogSection />
      <Hero2 />
      <FeaturesSection />
      <Footer />
    </>
  );
}
