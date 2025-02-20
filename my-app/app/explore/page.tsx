"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"

const tourSpots = [
  {
    id: 1,
    name: "Zambezi River",
    description: "The lifeblood of the park, home to hippos and crocodiles.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 2,
    name: "Mana Pools",
    description: "Famous for its large elephant population and walking safaris.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 3,
    name: "Chongwe River",
    description: "A prime spot for canoeing and fishing adventures.",
    image: "/placeholder.svg?height=400&width=600",
  },
  {
    id: 4,
    name: "Jeki Airstrip",
    description: "The main entry point for fly-in safaris to the park.",
    image: "/placeholder.svg?height=400&width=600",
  },
]

const mapPoints = [
  { id: 1, name: "Zambezi River", x: 50, y: 50 },
  { id: 2, name: "Mana Pools", x: 30, y: 70 },
  { id: 3, name: "Chongwe River", x: 70, y: 40 },
  { id: 4, name: "Jeki Airstrip", x: 60, y: 20 },
]

export default function ExplorePage() {
  const [currentSpot, setCurrentSpot] = useState(0)
  const [activePoint, setActivePoint] = useState<number | null>(null)

  const nextSpot = () => {
    setCurrentSpot((prev) => (prev + 1) % tourSpots.length)
  }

  const prevSpot = () => {
    setCurrentSpot((prev) => (prev - 1 + tourSpots.length) % tourSpots.length)
  }

  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold text-secondary font-serif">Explore Lower Zambezi</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <Card className="safari-border">
            <CardHeader>
              <CardTitle className="text-secondary">Interactive Map</CardTitle>
              <CardDescription>Discover key locations in Lower Zambezi National Park</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-square bg-muted safari-border overflow-hidden">
                {mapPoints.map((point) => (
                  <div
                    key={point.id}
                    className={`absolute w-4 h-4 rounded-full cursor-pointer transition-all duration-300 ${
                      activePoint === point.id ? "bg-secondary scale-150" : "bg-primary"
                    }`}
                    style={{ left: `${point.x}%`, top: `${point.y}%` }}
                    onMouseEnter={() => setActivePoint(point.id)}
                    onMouseLeave={() => setActivePoint(null)}
                  />
                ))}
                {activePoint && (
                  <div className="absolute bottom-4 left-4 right-4 bg-background/80 p-2 rounded safari-border">
                    <p className="text-secondary font-semibold">{mapPoints.find((p) => p.id === activePoint)?.name}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="safari-border">
            <CardHeader>
              <CardTitle className="text-secondary">Virtual Tour</CardTitle>
              <CardDescription>Experience the beauty of Lower Zambezi</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="relative aspect-video safari-border overflow-hidden">
                <img
                  src={tourSpots[currentSpot].image || "/placeholder.svg"}
                  alt={tourSpots[currentSpot].name}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-background/80 p-4">
                  <h3 className="text-lg font-semibold text-secondary">{tourSpots[currentSpot].name}</h3>
                  <p className="text-sm text-muted-foreground">{tourSpots[currentSpot].description}</p>
                </div>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-1/2 left-2 transform -translate-y-1/2"
                  onClick={prevSpot}
                >
                  <ChevronLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-1/2 right-2 transform -translate-y-1/2"
                  onClick={nextSpot}
                >
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </main>
  )
}

