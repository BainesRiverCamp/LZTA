import { LodgesDirectory } from "@/components/lodges-directory"

export default function LodgesPage() {
  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold text-secondary font-serif">Explore Lower Zambezi Lodges</h1>
        <p className="mb-12 text-xl text-muted-foreground">
          Discover luxurious accommodations nestled in the heart of the Lower Zambezi, each offering unique experiences
          and unparalleled comfort.
        </p>
        <LodgesDirectory />
      </div>
    </main>
  )
}

