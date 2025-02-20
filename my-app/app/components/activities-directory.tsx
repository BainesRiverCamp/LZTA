"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  SailboatIcon as Boat,
  Camera,
  Fish,
  Tent,
  TelescopeIcon as Binoculars,
  Footprints,
  Sunrise,
} from "lucide-react"
import { ActivityDetailsModal } from "@/components/activity-details-modal"
import type React from "react"

interface Activity {
  id: string
  name: string
  description: string
  longDescription: string
  category: string
  duration: string
  difficulty: "Easy" | "Moderate" | "Challenging"
  bestTime: string
  imageUrl: string
  icon: React.ElementType
  groupSize: string
  highlights: string[]
  included: string[]
}

const activities: Activity[] = [
  {
    id: "1",
    name: "Game Drives",
    description:
      "Embark on thrilling game drives through the diverse landscapes of the Lower Zambezi. Spot elephants, lions, leopards, and a variety of other wildlife in their natural habitat.",
    longDescription:
      "Experience the thrill of African wildlife up close on our signature game drives. Our expert guides will take you through the diverse landscapes of the Lower Zambezi, where you'll have the opportunity to observe the Big Five and countless other species in their natural habitat. Our custom-designed vehicles ensure comfort and optimal viewing angles for photography.",
    category: "Wildlife",
    duration: "3-4 hours",
    difficulty: "Easy",
    bestTime: "Year-round, best during dry season (May-October)",
    imageUrl: "/placeholder.svg?height=400&width=600",
    icon: Camera,
    groupSize: "Maximum 6 per vehicle",
    highlights: [
      "Expert guides with extensive local knowledge",
      "Custom-designed 4x4 vehicles with charging points",
      "Refreshments and snacks included",
      "Flexible timing for optimal wildlife viewing",
      "Photography tips and assistance",
    ],
    included: [
      "Professional guide",
      "Vehicle and fuel",
      "Refreshments",
      "Park fees",
      "Photography guidance",
      "Binoculars",
    ],
  },
  {
    id: "2",
    name: "River Safaris",
    description:
      "Cruise along the mighty Zambezi River, observing wildlife from a unique perspective. Perfect for bird watching and spotting hippos, crocodiles, and elephants along the riverbanks.",
    longDescription:
      "Glide along the mighty Zambezi River in our specially designed boats, offering a unique perspective on the region's wildlife. Watch as elephants come to drink, hippos wallow in the shallows, and countless bird species soar overhead. Our experienced skippers know all the best spots for wildlife viewing and photography.",
    category: "Water",
    duration: "2-3 hours",
    difficulty: "Easy",
    bestTime: "Year-round",
    imageUrl: "/placeholder.svg?height=400&width=600",
    icon: Boat,
    groupSize: "Maximum 8 per boat",
    highlights: [
      "Unique water-level wildlife viewing",
      "Excellent photographic opportunities",
      "Sundowner drinks and snacks",
      "Close encounters with water birds",
      "Safe viewing of hippos and crocodiles",
    ],
    included: [
      "Expert skipper",
      "Safety equipment",
      "Refreshments",
      "Binoculars",
      "Camera bean bags",
      "Waterproof gear",
    ],
  },
  {
    id: "3",
    name: "Sport Fishing",
    description:
      "Test your angling skills against the legendary Tiger Fish. Enjoy catch-and-release fishing in one of Africa's most pristine river systems.",
    longDescription:
      "Experience the thrill of sport fishing in the pristine waters of the Zambezi River. Our experienced guides will take you to the best fishing spots, where you can try your luck at catching the legendary Tiger Fish. All equipment is provided, and we practice catch-and-release to protect the river's ecosystem.",
    category: "Water",
    duration: "Half-day or full-day",
    difficulty: "Moderate",
    bestTime: "Best from August to November",
    imageUrl: "/placeholder.svg?height=400&width=600",
    icon: Fish,
    groupSize: "Maximum 4 per boat",
    highlights: [
      "Experienced fishing guides",
      "High-quality fishing equipment provided",
      "Catch-and-release fishing",
      "Stunning river scenery",
      "Opportunities to spot other wildlife",
    ],
    included: ["Professional guide", "Fishing rods and reels", "Bait and tackle", "Life jackets", "Sunscreen"],
  },
  {
    id: "4",
    name: "Bush Camping",
    description:
      "Experience the true wilderness with an overnight bush camping adventure. Fall asleep to the sounds of nature and wake up to stunning African sunrises.",
    longDescription:
      "Immerse yourself in the heart of the African wilderness with our overnight bush camping adventure. Our expert guides will set up camp in a secluded location, where you can fall asleep to the sounds of nature and wake up to breathtaking sunrises. We provide all the necessary equipment and ensure your safety and comfort.",
    category: "Adventure",
    duration: "Overnight",
    difficulty: "Moderate",
    bestTime: "Dry season (May-October)",
    imageUrl: "/placeholder.svg?height=400&width=600",
    icon: Tent,
    groupSize: "Maximum 8 per camp",
    highlights: [
      "Secluded camping location",
      "Expert guides for safety and support",
      "All camping equipment provided",
      "Stunning night sky viewing",
      "Authentic wilderness experience",
    ],
    included: ["Tents and sleeping bags", "Cooking equipment", "Meals and drinks", "Campfire", "First-aid kit"],
  },
  {
    id: "5",
    name: "Walking Safaris",
    description:
      "Get up close and personal with nature on a guided walking safari. Learn about tracking, plant life, and the smaller creatures often missed from a vehicle.",
    longDescription:
      "Experience the African bush on foot with our guided walking safaris. Our expert trackers will lead you through the wilderness, teaching you about animal tracking, plant life, and the smaller creatures often missed from a vehicle. This is a unique opportunity to connect with nature on a deeper level.",
    category: "Wildlife",
    duration: "2-3 hours",
    difficulty: "Moderate",
    bestTime: "Dry season (May-October)",
    imageUrl: "/placeholder.svg?height=400&width=600",
    icon: Footprints,
    groupSize: "Maximum 6 per group",
    highlights: [
      "Expert trackers with extensive knowledge",
      "Intimate wildlife encounters",
      "Learn about animal tracking and plant life",
      "Discover hidden gems of the bush",
      "Small group size for personalized experience",
    ],
    included: ["Professional guide", "Walking sticks", "Binoculars", "Water", "Snacks"],
  },
  {
    id: "6",
    name: "Birdwatching Tours",
    description:
      "With over 350 bird species, the Lower Zambezi is a birdwatcher's paradise. Join expert guides to spot and identify a wide variety of birds.",
    longDescription:
      "Explore the Lower Zambezi, a birdwatcher's paradise with over 350 species. Our expert bird guides will lead you to the best locations for spotting a wide variety of birds, from colorful bee-eaters to majestic fish eagles. Bring your binoculars and camera to capture the beauty of these feathered friends.",
    category: "Wildlife",
    duration: "2-4 hours",
    difficulty: "Easy",
    bestTime: "Year-round, best during wet season (November-April)",
    imageUrl: "/placeholder.svg?height=400&width=600",
    icon: Binoculars,
    groupSize: "Maximum 8 per group",
    highlights: [
      "Expert bird guides",
      "Excellent bird viewing locations",
      "Learn about bird identification",
      "Opportunities to spot other wildlife",
      "Relaxing and educational experience",
    ],
    included: ["Professional guide", "Binoculars", "Field guide", "Water", "Snacks"],
  },
  {
    id: "7",
    name: "Canoe Safaris",
    description:
      "Silently glide down the Zambezi's channels in a canoe, getting intimate views of wildlife and enjoying the serenity of the river.",
    longDescription:
      "Experience the Zambezi River from a unique perspective with our canoe safaris. Paddle silently down the river's channels, getting up close and personal with wildlife and enjoying the tranquility of the water. Our experienced guides will ensure your safety and help you spot a variety of animals and birds.",
    category: "Water",
    duration: "Half-day or full-day",
    difficulty: "Moderate",
    bestTime: "Dry season (May-October)",
    imageUrl: "/placeholder.svg?height=400&width=600",
    icon: Boat,
    groupSize: "Maximum 4 per canoe",
    highlights: [
      "Unique and intimate wildlife viewing",
      "Peaceful and serene experience",
      "Excellent photographic opportunities",
      "Learn about the river's ecosystem",
      "Experienced and safety-conscious guides",
    ],
    included: ["Canoe and paddles", "Life jackets", "Experienced guide", "Water", "Snacks"],
  },
  {
    id: "8",
    name: "Photographic Safaris",
    description:
      "Capture the beauty of the Lower Zambezi with guided photographic safaris. Perfect your wildlife photography skills with expert tips and prime shooting locations.",
    longDescription:
      "Capture stunning images of the Lower Zambezi's wildlife with our guided photographic safaris. Our expert photographers will take you to prime locations and provide tips and techniques to help you improve your skills. We'll focus on capturing the beauty of the animals and landscapes, creating memories that will last a lifetime.",
    category: "Wildlife",
    duration: "Full-day",
    difficulty: "Easy",
    bestTime: "Year-round",
    imageUrl: "/placeholder.svg?height=400&width=600",
    icon: Camera,
    groupSize: "Maximum 6 per group",
    highlights: [
      "Expert photography guidance",
      "Prime wildlife viewing locations",
      "Learn photography techniques",
      "Capture stunning images of wildlife and landscapes",
      "Small group size for personalized attention",
    ],
    included: ["Professional guide", "Transportation", "Park fees", "Refreshments", "Photography tips and assistance"],
  },
  {
    id: "9",
    name: "Sunset River Cruises",
    description:
      "End your day with a relaxing sunset cruise on the Zambezi. Enjoy drinks and snacks while watching the sun dip below the horizon, painting the sky in vibrant colors.",
    longDescription:
      "Relax and unwind with a sunset cruise on the Zambezi River. Enjoy drinks and snacks as you watch the sun dip below the horizon, painting the sky in vibrant colors. This is the perfect way to end a day of adventure, creating lasting memories.",
    category: "Leisure",
    duration: "2-3 hours",
    difficulty: "Easy",
    bestTime: "Year-round",
    imageUrl: "/placeholder.svg?height=400&width=600",
    icon: Sunrise,
    groupSize: "Maximum 10 per boat",
    highlights: [
      "Relaxing and scenic cruise",
      "Stunning sunset views",
      "Drinks and snacks included",
      "Comfortable seating",
      "Perfect way to end the day",
    ],
    included: ["Boat and skipper", "Drinks and snacks", "Comfortable seating", "Blankets"],
  },
]

export function ActivitiesDirectory() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)

  const filteredActivities = activities.filter((activity) => {
    const categoryMatch = selectedCategory === "all" || activity.category === selectedCategory
    const difficultyMatch = selectedDifficulty === "all" || activity.difficulty === selectedDifficulty
    return categoryMatch && difficultyMatch
  })

  return (
    <section>
      <div className="mb-8 flex flex-wrap gap-4 md:justify-start">
        <Select onValueChange={setSelectedCategory} defaultValue="all">
          <SelectTrigger className="w-[180px] bg-card">
            <SelectValue placeholder="Activity Category" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Categories</SelectItem>
            <SelectItem value="Wildlife">Wildlife</SelectItem>
            <SelectItem value="Water">Water</SelectItem>
            <SelectItem value="Adventure">Adventure</SelectItem>
            <SelectItem value="Leisure">Leisure</SelectItem>
          </SelectContent>
        </Select>

        <Select onValueChange={setSelectedDifficulty} defaultValue="all">
          <SelectTrigger className="w-[180px] bg-card">
            <SelectValue placeholder="Difficulty Level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Levels</SelectItem>
            <SelectItem value="Easy">Easy</SelectItem>
            <SelectItem value="Moderate">Moderate</SelectItem>
            <SelectItem value="Challenging">Challenging</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredActivities.map((activity) => (
          <Card key={activity.id} className="flex flex-col overflow-hidden bg-card safari-border">
            <div className="relative h-48 w-full">
              <img
                src={activity.imageUrl || "/placeholder.svg"}
                alt={activity.name}
                className="h-full w-full object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-secondary font-serif">{activity.name}</CardTitle>
                <activity.icon className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-4 text-muted-foreground">{activity.description}</CardDescription>
              <div className="grid grid-cols-2 gap-2 text-sm text-muted-foreground">
                <div>Duration: {activity.duration}</div>
                <div>Difficulty: {activity.difficulty}</div>
                <div>Category: {activity.category}</div>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="secondary" className="w-full" onClick={() => setSelectedActivity(activity)}>
                More Info
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <ActivityDetailsModal
        activity={selectedActivity}
        isOpen={!!selectedActivity}
        onClose={() => setSelectedActivity(null)}
      />
    </section>
  )
}

