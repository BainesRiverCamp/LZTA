"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SailboatIcon as Boat, Camera, Fish, Tent } from "lucide-react"

const activities = [
  {
    title: "Private Game Drives",
    description:
      "Embark on personalized safari experiences in our state-of-the-art vehicles, guided by expert naturalists.",
    icon: Camera,
  },
  {
    title: "Exclusive River Safaris",
    description: "Cruise the majestic Zambezi in comfort and style, observing wildlife from our luxurious boats.",
    icon: Boat,
  },
  {
    title: "World-Class Tiger Fishing",
    description:
      "Challenge yourself against the legendary Tiger Fish with our professional fishing guides and top-tier equipment.",
    icon: Fish,
  },
  {
    title: "Luxury Fly Camping",
    description: "Experience the wilderness in unparalleled comfort with our bespoke fly camping experiences.",
    icon: Tent,
  },
]

export function ActivitiesSection() {
  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary font-serif">Curated Experiences</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => (
            <Card key={activity.title} className="bg-card/50 backdrop-blur safari-border">
              <CardHeader>
                <activity.icon className="mb-4 h-8 w-8 text-primary" />
                <CardTitle className="text-xl text-primary font-serif">{activity.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground">{activity.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

