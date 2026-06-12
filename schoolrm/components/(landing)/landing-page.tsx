import { HeroSection } from "./hero";
import { LandingNavigation } from "./navigation/navigation";
import { AboutSection } from "./sections/about-section";
import { AdmissionsSection } from "./sections/admissions-section";
import { ContactSection } from "./sections/contact-section";
import { GallerySection } from "./sections/gallery-section";
import { NewsEventsSection } from "./sections/news-events-section";
import { ProgramsSection } from "./sections/programs-section";
import { StaffSection } from "./sections/staff-section";
import { LandingFooter } from "./footer/footer";

export function LandingPage() {
  return (
    <div className="bg-cream">
      <LandingNavigation />

      <main>
        <HeroSection />
        <AboutSection />
        <ProgramsSection />
        <AdmissionsSection />
        <StaffSection />
        <NewsEventsSection />
        <GallerySection />
        <ContactSection />
      </main>

      <LandingFooter />
    </div>
  );
}
