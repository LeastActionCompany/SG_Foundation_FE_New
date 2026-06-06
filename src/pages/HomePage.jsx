import Footer from "../components/Footer";
import Header from "../components/Header";
import AboutSection from "../components/sections/AboutSection";
import ContactSection from "../components/sections/ContactSection";
import DonationSection from "../components/sections/DonationSection";
import GallerySection from "../components/sections/GallerySection";
import HeroSlider from "../components/HeroSlider";
import ImpactSection from "../components/sections/ImpactSection";
import ServicesSection from "../components/sections/ServicesSection";
import VolunteerSection from "../components/sections/VolunteerSection";
import TeamSection from "../components/TeamSection";

export default function HomePage() {
  return (
    <div className="min-h-screen text-ink">
      <Header />
      <main>
        <HeroSlider />
        <ServicesSection />
        <AboutSection />
        <ImpactSection />
        <VolunteerSection />
        <DonationSection />
        <GallerySection />
        <TeamSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
