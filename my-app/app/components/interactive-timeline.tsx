"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const months = [
  {
    name: "January",
    description:
      "Experience the lush green season with dramatic skies and newborn wildlife. Ideal for photography enthusiasts and bird watchers.",
    activities: ["Bird Watching", "Photography Safaris", "Boat Cruises"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    name: "February",
    description:
      "Witness the peak of the emerald season. Enjoy exclusive game viewing experiences with fewer visitors and stunning landscapes.",
    activities: ["Walking Safaris", "Canoeing", "Cultural Visits"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    name: "March",
    description:
      "As the rains subside, experience the transition to the dry season. Perfect for combining water and land activities.",
    activities: ["Game Drives", "Fishing", "Sundowner Cruises"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    name: "April",
    description:
      "Enjoy mild temperatures and clear skies. An excellent time for photography and diverse wildlife sightings.",
    activities: ["Photographic Safaris", "Bush Walks", "Night Drives"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    name: "May",
    description:
      "The start of the peak safari season. Vegetation thins out, providing excellent visibility for game viewing.",
    activities: ["Big Game Viewing", "Fly Camping", "Helicopter Tours"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    name: "June",
    description:
      "Experience perfect safari conditions with cool mornings and evenings. Ideal for longer game drives and walking safaris.",
    activities: ["Extended Game Drives", "Walking Safaris", "Star Gazing"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    name: "July",
    description: "Prime time for wildlife viewing. Enjoy exclusive sightings of predators and large herbivore herds.",
    activities: ["Predator Tracking", "Tiger Fishing", "Private Guide Experiences"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    name: "August",
    description:
      "The height of the dry season offers unparalleled game viewing. Perfect for multi-day walking safaris and fly camping.",
    activities: ["Multi-day Walking Safaris", "Fly Fishing", "Wildlife Photography"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    name: "September",
    description:
      "Experience the drama of the late dry season. Witness incredible predator-prey interactions and large elephant herds.",
    activities: ["Elephant Encounters", "Predator Safaris", "Canoe Expeditions"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    name: "October",
    description:
      "The warmest month offers intense wildlife action. Ideal for photography and experiencing the raw power of nature.",
    activities: ["Big Cat Safaris", "Photography Workshops", "Adrenaline Adventures"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    name: "November",
    description:
      "Witness the transition to the green season. Experience dramatic skies, the first rains, and newborn animals.",
    activities: ["Bird Watching", "Green Season Safaris", "Photographic Expeditions"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
  {
    name: "December",
    description:
      "Enjoy lush landscapes and abundant birdlife. Perfect for combining safari experiences with festive season celebrations.",
    activities: ["Festive Safari Packages", "Boat Safaris", "Wellness Retreats"],
    image: "/placeholder.svg?height=1080&width=1920",
  },
]

export function InteractiveTimeline() {
  const [selectedMonth, setSelectedMonth] = useState(0)

  return (
    <div className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-all duration-1000 ease-in-out"
        style={{
          backgroundImage: `url('${months[selectedMonth].image}')`,
        }}
      />
      <div className="absolute inset-0 bg-black/50" />
      <div className="relative z-10 container mx-auto px-4 py-16">
        <h2 className="mb-12 text-4xl font-bold text-white font-serif text-center">Seasonal Safari Calendar</h2>

        <div className="flex justify-center mb-8 overflow-x-auto">
          {months.map((month, index) => (
            <Button
              key={month.name}
              variant={selectedMonth === index ? "secondary" : "ghost"}
              className="mx-1 text-white"
              onClick={() => setSelectedMonth(index)}
            >
              {month.name.slice(0, 3)}
            </Button>
          ))}
        </div>

        <motion.div
          key={selectedMonth}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Card className="bg-background/80 backdrop-blur-md safari-border">
            <CardHeader>
              <CardTitle className="text-2xl text-secondary font-serif">{months[selectedMonth].name}</CardTitle>
              <CardDescription className="text-lg text-muted-foreground">
                {months[selectedMonth].description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <h3 className="text-xl font-semibold text-secondary mb-2">Signature Experiences:</h3>
              <ul className="list-disc list-inside text-muted-foreground">
                {months[selectedMonth].activities.map((activity, index) => (
                  <li key={index}>{activity}</li>
                ))}
              </ul>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}

