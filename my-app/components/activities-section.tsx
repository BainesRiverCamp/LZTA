"use client"

import { useEffect, useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { SailboatIcon as Boat, Camera, Fish, Tent } from "lucide-react"
import { getFeaturedActivities } from "@/lib/db-utils"
import type { Activity } from "@/types/supabase"

// Map activity names to their respective icons
const activityIcons = {
  "Private Game Drives": Camera,
  "Exclusive River Safaris": Boat,
  "World-Class Tiger Fishing": Fish,
  "Luxury Fly Camping": Tent,
} as const

export function ActivitiesSection() {
  const [activities, setActivities] = useState<Activity[]>([])

  useEffect(() => {
    async function loadActivities() {
      const featuredActivities = await getFeaturedActivities()
      setActivities(featuredActivities)
    }

    loadActivities()
  }, [])

  return (
    <section className="py-20 bg-secondary/10">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-4xl font-bold text-primary font-serif">Curated Experiences</h2>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {activities.map((activity) => {
            const Icon = activityIcons[activity.name as keyof typeof activityIcons] || Camera

            return (
              <Card key={activity.id} className="bg-card/50 backdrop-blur safari-border">
                <CardHeader>
                  <Icon className="mb-4 h-8 w-8 text-primary" />
                  <CardTitle className="text-xl text-primary font-serif">{activity.name}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-muted-foreground">{activity.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}

