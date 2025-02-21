"use client"

import React from "react"
import { useState, useEffect } from "react"
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
import { ActivityCard } from "@/components/activity-card"
import { getAllActivities } from "@/lib/db-utils"
import type { Activity } from "@/types/activity"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

// Map activity icons
const activityIcons: { [key: string]: React.ElementType } = {
  Camera,
  Boat,
  Fish,
  Tent,
  Binoculars,
  Footprints,
  Sunrise,
}

export function ActivitiesDirectory() {
  const [activities, setActivities] = useState<Activity[]>([])
  const [selectedCategory, setSelectedCategory] = useState<string>("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState<string>("all")
  const [selectedActivity, setSelectedActivity] = useState<Activity | null>(null)

  useEffect(() => {
    async function loadActivities() {
      const allActivities = await getAllActivities()
      setActivities(allActivities)
    }

    loadActivities()
  }, [])

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
              <Image
                src={activity.image_url || "/placeholder.svg"}
                alt={activity.name}
                fill
                className="object-cover"
              />
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-secondary font-serif">{activity.name}</CardTitle>
                {activityIcons[activity.icon_name] && 
                  React.createElement(activityIcons[activity.icon_name], {
                    className: "h-6 w-6 text-primary"
                  })
                }
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

      <Dialog open={!!selectedActivity} onOpenChange={(open) => !open && setSelectedActivity(null)}>
        {selectedActivity && (
          <DialogContent className="max-w-3xl">
            <ActivityCard activity={selectedActivity} />
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
}

