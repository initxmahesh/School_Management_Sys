import { HeroLeftContent, HeroRightVisual } from "./hero";
import { LandingNavigation } from "./navigation/navigation";

export function LandingPage() {
  return (
    <div className="min-h-screen bg-cream">
      <section className="relative min-h-screen">
        <LandingNavigation />

        <div className="grid min-h-[calc(100vh-72px)] lg:min-h-[calc(100vh-88px)] lg:grid-cols-2">
          <div className="relative flex flex-col bg-cream">
            {/* <HeroLeftContent /> */}
          </div>

          <div className="relative flex min-h-[420px] flex-col bg-linear-to-br from-[#6cb1db] via-[#78b9e1] to-[#7fbdE4] lg:min-h-full">
            {/* <HeroRightVisual /> */}
          </div>
        </div>
      </section>
    </div>
  );
}
