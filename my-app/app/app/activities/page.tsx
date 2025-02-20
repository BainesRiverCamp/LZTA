import { ActivitiesDirectory } from "@/components/activities-directory"

export default function ActivitiesPage() {
  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold text-secondary font-serif">Explore Lower Zambezi Activities</h1>
        <p className="mb-12 text-xl text-muted-foreground">
          Discover a wide range of exciting activities that showcase the natural beauty and wildlife of the Lower
          Zambezi region.
        </p>
        <ActivitiesDirectory />
      </div>
    </main>
  )
}

