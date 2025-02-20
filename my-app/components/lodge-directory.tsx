"use client"

import { useState } from "react"
import { Star, Wifi, PocketIcon as Pool, Coffee, UtensilsCrossed, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { LodgeDetailsModal } from "@/components/lodge-details-modal"

interface Review {
  author: string
  rating: number
  comment: string
  date: string
}

interface Lodge {
  id: string
  name: string
  type: "Luxury" | "Mid-Range" | "Bush Camp"
  description: string
  longDescription: string
  priceRange: string
  rating: number
  location: string
  amenities: string[]
  imageUrl: string
  rooms: number
  activities: string[]
  reviews: Review[]
}

const lodges: Lodge[] = [
  {
    id: "1",
    name: "Royal Zambezi Lodge",
    type: "Luxury",
    description: "Exclusive luxury lodge offering pristine views of the Zambezi River and private plunge pools.",
    longDescription:
      "Nestled on the banks of the mighty Zambezi River, Royal Zambezi Lodge offers an unparalleled luxury safari experience. Each of our 15 private suites features a spacious deck with a plunge pool, providing intimate views of the river and its wildlife. Guests can indulge in gourmet cuisine prepared by our world-class chefs, relax with bespoke spa treatments, and embark on a range of expertly guided safari activities. Our commitment to conservation and community development ensures an authentic and responsible African wilderness experience.",
    priceRange: "$$$",
    rating: 5,
    location: "Lower Zambezi National Park",
    amenities: ["Pool", "Wifi", "Restaurant", "Spa", "Air Conditioning", "Private Viewing Deck"],
    imageUrl: "/placeholder.svg?height=400&width=600",
    rooms: 15,
    activities: [
      "Game Drives",
      "Walking Safaris",
      "Canoe Expeditions",
      "Tiger Fishing",
      "Bird Watching",
      "Sunset River Cruises",
    ],
    reviews: [
      {
        author: "Sarah J.",
        rating: 5,
        comment: "An absolutely magical experience. The staff went above and beyond to make our stay unforgettable.",
        date: "May 2023",
      },
      {
        author: "Michael T.",
        rating: 5,
        comment: "Luxury in the heart of the wilderness. The private plunge pools and river views are spectacular.",
        date: "June 2023",
      },
    ],
  },
  {
    id: "2",
    name: "Chongwe River Camp",
    type: "Mid-Range",
    description: "Beautiful tented camp situated at the confluence of the Chongwe and Zambezi Rivers.",
    longDescription:
      "Chongwe River Camp offers a perfect blend of comfort and wilderness immersion. Set where the Chongwe and Zambezi Rivers meet, our camp provides stunning views and excellent game viewing opportunities. With 9 classic safari tents and 2 luxury suites, we cater to a range of preferences. Our location allows for a variety of land and water-based activities, ensuring a diverse and exciting safari experience. The camp's design harmoniously blends with the natural surroundings, creating an authentic African bush atmosphere.",
    priceRange: "$$",
    rating: 4,
    location: "Chongwe Area",
    amenities: ["Pool", "Restaurant", "Viewing Deck", "Outdoor Showers"],
    imageUrl: "/placeholder.svg?height=400&width=600",
    rooms: 11,
    activities: [
      "Game Drives",
      "Walking Safaris",
      "Canoeing",
      "Fishing",
      "Cultural Village Visits",
      "Photographic Safaris",
    ],
    reviews: [
      {
        author: "Emma L.",
        rating: 4,
        comment: "A wonderful camp with a great location. The staff were friendly and the game viewing was excellent.",
        date: "July 2023",
      },
      {
        author: "David R.",
        rating: 5,
        comment: "The perfect balance of comfort and adventure. Loved the canoeing trips!",
        date: "August 2023",
      },
    ],
  },
  {
    id: "3",
    name: "Kutali Bush Camp",
    type: "Bush Camp",
    description: "Authentic bush experience with intimate wildlife encounters and personalized service.",
    longDescription:
      "For those seeking an authentic and intimate safari experience, Kutali Bush Camp delivers in spades. Our small, eco-friendly camp focuses on walking safaris and close wildlife encounters. With just 4 comfortable tents, guests enjoy personalized service and a true connection with the African bush. Solar power and careful resource management minimize our environmental impact. Our expert guides provide in-depth insights into the ecosystem, tracking skills, and bush lore, ensuring an educational and thrilling safari experience.",
    priceRange: "$$",
    rating: 4,
    location: "Remote Section",
    amenities: ["Eco-friendly", "Outdoor Dining", "Solar Power", "Guided Nature Walks"],
    imageUrl: "/placeholder.svg?height=400&width=600",
    rooms: 4,
    activities: [
      "Walking Safaris",
      "Night Drives",
      "Bird Watching",
      "Star Gazing",
      "Bush Skills Workshops",
      "Conservation Talks",
    ],
    reviews: [
      {
        author: "Alex M.",
        rating: 5,
        comment: "An incredible, back-to-nature experience. The walking safaris were the highlight of our trip.",
        date: "September 2023",
      },
      {
        author: "Laura K.",
        rating: 4,
        comment: "Kutali offers a true bush experience. The guides' knowledge was impressive.",
        date: "October 2023",
      },
    ],
  },
]

const amenityIcons = {
  Wifi: Wifi,
  Pool: Pool,
  Restaurant: UtensilsCrossed,
  Spa: Coffee,
}

export function LodgeDirectory() {
  const [selectedType, setSelectedType] = useState<string>("all")
  const [selectedPrice, setSelectedPrice] = useState<string>("all")
  const [selectedLodge, setSelectedLodge] = useState<Lodge | null>(null)

  const filteredLodges = lodges.filter((lodge) => {
    const typeMatch = selectedType === "all" || lodge.type === selectedType
    const priceMatch = selectedPrice === "all" || lodge.priceRange === selectedPrice
    return typeMatch && priceMatch
  })

  return (
    <section className="py-8">
      <div className="mb-8 flex flex-wrap gap-4 md:justify-start">
        <Select onValueChange={setSelectedType} defaultValue="all">
          <SelectTrigger className="w-[180px] bg-card">
            <SelectValue placeholder="Accommodation Type" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Types</SelectItem>
            <SelectItem value="Luxury">Luxury</SelectItem>
            <SelectItem value="Mid-Range">Mid-Range</SelectItem>
            <SelectItem value="Bush Camp">Bush Camp</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedPrice} defaultValue="all">
          <SelectTrigger className="w-[180px] bg-card">
            <SelectValue placeholder="Price Range" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Prices</SelectItem>
            <SelectItem value="$">Budget</SelectItem>
            <SelectItem value="$$">Mid-Range</SelectItem>
            <SelectItem value="$$$">Luxury</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredLodges.map((lodge) => (
          <Card key={lodge.id} className="overflow-hidden bg-card safari-border">
            <div className="relative h-48 w-full">
              <img src={lodge.imageUrl || "/placeholder.svg"} alt={lodge.name} className="h-full w-full object-cover" />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-secondary font-serif">{lodge.name}</CardTitle>
                <div className="flex items-center">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 text-sm text-secondary">{lodge.rating}</span>
                </div>
              </div>
              <div className="flex items-center text-sm text-muted-foreground">
                <MapPin className="mr-1 h-4 w-4" />
                {lodge.location}
              </div>
            </CardHeader>
            <CardContent>
              <CardDescription className="mb-4 text-muted-foreground">{lodge.description}</CardDescription>
              <div className="flex gap-2">
                {lodge.amenities.slice(0, 3).map((amenity) => {
                  const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons]
                  return IconComponent ? (
                    <div
                      key={amenity}
                      className="flex items-center rounded-full bg-muted px-3 py-1 text-sm text-muted-foreground"
                    >
                      <IconComponent className="mr-1 h-4 w-4" />
                      {amenity}
                    </div>
                  ) : null
                })}
              </div>
            </CardContent>
            <CardFooter className="flex items-center justify-between">
              <div className="text-lg font-semibold text-secondary">{lodge.priceRange}</div>
              <Button variant="secondary" onClick={() => setSelectedLodge(lodge)}>
                View Details
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <LodgeDetailsModal lodge={selectedLodge} isOpen={!!selectedLodge} onClose={() => setSelectedLodge(null)} />
    </section>
  )
}

