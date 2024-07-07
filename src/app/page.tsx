import Nav from "../components/Nav";
import Hero from "../components/Hero";
import FlashSalesSection from "../components/FlashSalesSection";
import BestProductsSection from "../components/BestProductsSection";
import ExploreProductsSection from "../components/ExploreProductsSection";
import WhySection from "../components/WhySection";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <FlashSalesSection />
      <BestProductsSection />
      <ExploreProductsSection />
      <WhySection />
      <Footer />
    </>
  );
}
