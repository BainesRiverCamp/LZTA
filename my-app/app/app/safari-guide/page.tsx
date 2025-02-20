import Image from "next/image"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const wildlife = [
  {
    name: "African Elephant",
    scientificName: "Loxodonta africana",
    description:
      "Majestic giants of the savanna, often seen in family herds along the Zambezi riverbanks. Our expert guides can bring you within respectful viewing distance for unforgettable encounters.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Lion",
    scientificName: "Panthera leo",
    description:
      "The kings of the African wilderness. Experience the thrill of witnessing these magnificent predators in their natural habitat during our exclusive dawn and dusk game drives.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Leopard",
    scientificName: "Panthera pardus",
    description:
      "Elusive and graceful, leopards are a prized sight. Our skilled trackers and state-of-the-art vehicles offer the best chances for observing these magnificent cats.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "African Buffalo",
    scientificName: "Syncerus caffer",
    description:
      "Formidable and impressive, buffalo herds are a common sight in the Lower Zambezi. Observe them safely from our custom-designed safari vehicles or elevated hides.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Hippopotamus",
    scientificName: "Hippopotamus amphibius",
    description:
      "The Zambezi River is home to numerous hippo pods. Experience their grunts and splashes during our luxurious river cruises, complete with gourmet snacks and sundowners.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    name: "Nile Crocodile",
    scientificName: "Crocodylus niloticus",
    description:
      "These prehistoric-looking reptiles bask on the riverbanks. Observe them safely during our guided canoe safaris, led by our expert naturalists.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

export default function SafariGuidePage() {
  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold text-secondary font-serif">Luxury Safari Guide</h1>
        <p className="mb-12 text-xl text-muted-foreground">
          Embark on an unparalleled journey into the heart of African wilderness. Our curated safari experiences in the
          Lower Zambezi National Park offer intimate encounters with some of the continent's most iconic wildlife, all
          while indulging in the height of luxury and comfort.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {wildlife.map((animal) => (
            <Card key={animal.name} className="overflow-hidden bg-card safari-border">
              <div className="relative h-48 w-full">
                <Image src={animal.image || "/placeholder.svg"} alt={animal.name} layout="fill" objectFit="cover" />
              </div>
              <CardHeader>
                <CardTitle className="text-xl text-secondary font-serif">{animal.name}</CardTitle>
                <CardDescription className="italic">{animal.scientificName}</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{animal.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </main>
  )
}

