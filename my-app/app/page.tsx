import { ActivitiesSection } from "@/components/activities-section"
import { HeroSection } from "@/components/hero-section"
import { StatsSection } from "@/components/stats-section"

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ActivitiesSection />
      <StatsSection />
    </main>
  )
}

