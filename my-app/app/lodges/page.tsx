import { LodgeDirectory } from "@/components/lodge-directory"

export default function LodgesPage() {
  return (
    <main>
      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 text-4xl font-bold text-white">Our Lodges</h1>
        <LodgeDirectory />
      </div>
    </main>
  )
}

