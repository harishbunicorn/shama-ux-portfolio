import HomeHero from "./components/HomeHero";
import AboutSection from "./components/AboutSection";
import Navbar from "./components/NavBar";
import Projects from "./components/Projects";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import BonusSection from "./components/BonusSection";
import Footer from "./components/Footer";

export default function Page() {
  return (
    <main>
      <Navbar />
      <HomeHero />
      <Projects />
      <AboutSection />
      <Contact />
      <BonusSection />
      <Testimonials />
      <Footer />
    </main>
  );
}