import { PrismaClient } from "@prisma/client"

const prisma = new PrismaClient()

const activities = [
  {
    name: "Game Drives",
    description:
      "Embark on thrilling game drives through the diverse landscapes of the Lower Zambezi. Spot elephants, lions, leopards, and a variety of other wildlife in their natural habitat.",
    category: "Wildlife",
    duration: "3-4 hours",
    difficulty: "Easy",
    bestTime: "Year-round, best during dry season (May-October)",
    imageUrl: "/images/game-drives.jpg",
    icon: "Camera",
  },
  {
    name: "River Safaris",
    description:
      "Cruise along the mighty Zambezi River, observing wildlife from a unique perspective. Perfect for bird watching and spotting hippos, crocodiles, and elephants along the riverbanks.",
    category: "Water",
    duration: "2-3 hours",
    difficulty: "Easy",
    bestTime: "Year-round",
    imageUrl: "/images/river-safaris.jpg",
    icon: "Boat",
  },
  {
    name: "Sport Fishing",
    description:
      "Test your angling skills against the legendary Tiger Fish. Enjoy catch-and-release fishing in one of Africa's most pristine river systems.",
    category: "Water",
    duration: "Half-day or full-day",
    difficulty: "Moderate",
    bestTime: "Best from August to November",
    imageUrl: "/images/sport-fishing.jpg",
    icon: "Fish",
  },
  {
    name: "Bush Camping",
    description:
      "Experience the true wilderness with an overnight bush camping adventure. Fall asleep to the sounds of nature and wake up to stunning African sunrises.",
    category: "Adventure",
    duration: "Overnight",
    difficulty: "Moderate",
    bestTime: "Dry season (May-October)",
    imageUrl: "/images/bush-camping.jpg",
    icon: "Tent",
  },
  {
    name: "Walking Safaris",
    description:
      "Get up close and personal with nature on a guided walking safari. Learn about tracking, plant life, and the smaller creatures often missed from a vehicle.",
    category: "Wildlife",
    duration: "2-3 hours",
    difficulty: "Moderate",
    bestTime: "Dry season (May-October)",
    imageUrl: "/images/walking-safaris.jpg",
    icon: "Footprints",
  },
  {
    name: "Birdwatching Tours",
    description:
      "With over 350 bird species, the Lower Zambezi is a birdwatcher's paradise. Join expert guides to spot and identify a wide variety of birds.",
    category: "Wildlife",
    duration: "2-4 hours",
    difficulty: "Easy",
    bestTime: "Year-round, best during wet season (November-April)",
    imageUrl: "/images/birdwatching-tours.jpg",
    icon: "Binoculars",
  },
  {
    name: "Canoe Safaris",
    description:
      "Silently glide down the Zambezi's channels in a canoe, getting intimate views of wildlife and enjoying the serenity of the river.",
    category: "Water",
    duration: "Half-day or full-day",
    difficulty: "Moderate",
    bestTime: "Dry season (May-October)",
    imageUrl: "/images/canoe-safaris.jpg",
    icon: "Boat",
  },
  {
    name: "Photographic Safaris",
    description:
      "Capture the beauty of the Lower Zambezi with guided photographic safaris. Perfect your wildlife photography skills with expert tips and prime shooting locations.",
    category: "Wildlife",
    duration: "Full-day",
    difficulty: "Easy",
    bestTime: "Year-round",
    imageUrl: "/images/photographic-safaris.jpg",
    icon: "Camera",
  },
  {
    name: "Sunset River Cruises",
    description:
      "End your day with a relaxing sunset cruise on the Zambezi. Enjoy drinks and snacks while watching the sun dip below the horizon, painting the sky in vibrant colors.",
    category: "Leisure",
    duration: "2-3 hours",
    difficulty: "Easy",
    bestTime: "Year-round",
    imageUrl: "/images/sunset-river-cruises.jpg",
    icon: "Sunrise",
  },
]

async function main() {
  for (const activity of activities) {
    await prisma.activity.create({
      data: activity,
    })
  }
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
