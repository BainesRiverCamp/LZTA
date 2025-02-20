import { InteractiveTimeline } from "@/components/interactive-timeline"

export default function SeasonalGuidePage() {
  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold text-secondary font-serif">Seasonal Safari Guide</h1>
        <p className="mb-12 text-xl text-muted-foreground">
          Discover the perfect time for your luxury safari experience in the Lower Zambezi. Each month offers unique
          wildlife encounters and exclusive activities, ensuring an unforgettable journey throughout the year.
        </p>
      </div>
      <InteractiveTimeline />
    </main>
  )
}

