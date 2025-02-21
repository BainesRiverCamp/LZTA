'use client'

import { Activity } from "@/types/activity"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar, CheckCircle2, Mountain } from "lucide-react"
import Image from "next/image"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"

interface ActivityCardProps {
  activity: Activity
}

export function ActivityCard({ activity }: ActivityCardProps) {
  return (
    <div className="grid gap-6">
      <DialogHeader>
        <DialogTitle>{activity.name}</DialogTitle>
      </DialogHeader>

      <ScrollArea className="h-[80vh] pr-4">
        <div className="grid gap-6">
          {/* Activity Image */}
          <div className="relative h-64 w-full">
            <Image
              src={activity.image_url || "/placeholder.svg"}
              alt={activity.name}
              fill
              className="rounded-lg object-cover"
            />
          </div>
          
          {/* Key Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Clock className="h-5 w-5 text-primary" />
              <div>
                <span className="text-sm text-muted-foreground">Duration: </span>
                <span>{activity.duration}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <span className="text-sm text-muted-foreground">Best Time: </span>
                <span>{activity.best_time}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Users className="h-5 w-5 text-primary" />
              <div>
                <span className="text-sm text-muted-foreground">Group Size: </span>
                <span>{activity.group_size}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mountain className="h-5 w-5 text-primary" />
              <div>
                <span className="text-sm text-muted-foreground">Difficulty: </span>
                <Badge variant="secondary">{activity.difficulty}</Badge>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* About Section */}
          <div className="grid gap-3">
            <h3 className="text-lg font-semibold">About This Activity</h3>
            <p className="text-muted-foreground">{activity.long_description}</p>
          </div>

          <hr className="border-border" />

          {/* What to Expect */}
          <div className="grid gap-3">
            <h3 className="text-lg font-semibold">What to Expect</h3>
            <div className="grid gap-2">
              {activity.what_to_expect?.map((item: string, index: number) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <hr className="border-border" />

          {/* What's Included */}
          <div className="grid gap-3">
            <h3 className="text-lg font-semibold">What's Included</h3>
            <div className="flex flex-wrap gap-2">
              {activity.park_fees && (
                <Badge variant="outline" className="rounded-full">Park fees</Badge>
              )}
              {activity.vehicle_fuel && (
                <Badge variant="outline" className="rounded-full">Vehicle and fuel</Badge>
              )}
              {activity.refreshments && (
                <Badge variant="outline" className="rounded-full">Refreshments</Badge>
              )}
              {activity.photography_guidance && (
                <Badge variant="outline" className="rounded-full">Photography guidance</Badge>
              )}
              {activity.binoculars && (
                <Badge variant="outline" className="rounded-full">Binoculars</Badge>
              )}
              {activity.professional_guide && (
                <Badge variant="outline" className="rounded-full">Professional guide</Badge>
              )}
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
} 