'use client'

import { Activity } from "@/types/activity"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Clock, Users, Calendar, CheckCircle2 } from "lucide-react"
import Image from "next/image"
import { useState } from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"

interface ActivityCardProps {
  activity: Activity
}

export function ActivityCard({ activity }: ActivityCardProps) {
  const [showDetails, setShowDetails] = useState(false)

  const whatToExpect = activity.whatToExpect || []
  const included = activity.whats_included || []

  return (
    <>
      <Card className="overflow-hidden bg-card safari-border h-full flex flex-col">
        <div className="relative h-48 w-full">
          <Image 
            src={activity.image_url || "/placeholder.svg"} 
            alt={activity.name}
            fill
            className="object-cover"
          />
        </div>
        <CardHeader>
          <CardTitle className="text-xl text-secondary font-serif">{activity.name}</CardTitle>
          <div className="flex flex-wrap gap-2 text-sm text-muted-foreground">
            {activity.duration && (
              <div className="flex items-center">
                <Clock className="mr-1 h-4 w-4" />
                {activity.duration}
              </div>
            )}
            {activity.groupSize && (
              <div className="flex items-center">
                <Users className="mr-1 h-4 w-4" />
                {activity.groupSize}
              </div>
            )}
            {activity.bestTime && (
              <div className="flex items-center">
                <Calendar className="mr-1 h-4 w-4" />
                {activity.bestTime}
              </div>
            )}
          </div>
        </CardHeader>
        <CardContent className="flex-grow">
          <CardDescription className="text-muted-foreground">
            {activity.description}
          </CardDescription>
        </CardContent>
        <CardFooter>
          <Button 
            variant="secondary" 
            className="w-full"
            onClick={() => setShowDetails(true)}
          >
            More Info
          </Button>
        </CardFooter>
      </Card>

      <Dialog open={showDetails} onOpenChange={setShowDetails}>
        <DialogContent className="max-w-4xl h-[90vh] overflow-y-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <div className="relative h-[300px] w-full rounded-lg overflow-hidden mb-6">
                <Image 
                  src={activity.image_url || "/placeholder.svg"} 
                  alt={activity.name}
                  fill
                  className="object-cover"
                />
              </div>
              
              <div className="space-y-4">
                <div>
                  <Badge variant="outline" className="mb-2">
                    {activity.category}
                  </Badge>
                  <h1 className="text-2xl font-bold font-serif">{activity.name}</h1>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="flex items-center gap-2">
                    <Clock className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Duration</p>
                      <p className="text-sm text-muted-foreground">{activity.duration}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Group Size</p>
                      <p className="text-sm text-muted-foreground">{activity.groupSize}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-muted-foreground" />
                    <div>
                      <p className="text-sm font-medium">Best Time</p>
                      <p className="text-sm text-muted-foreground">{activity.bestTime}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-2">
                    <span className="h-5 w-5 text-muted-foreground">🎯</span>
                    <div>
                      <p className="text-sm font-medium">Difficulty</p>
                      <p className="text-sm text-muted-foreground">{activity.difficulty}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="text-lg font-semibold mb-2">About This Activity</h2>
                <p className="text-muted-foreground">{activity.longDescription}</p>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">What to Expect</h2>
                <ul className="space-y-2">
                  {whatToExpect.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      <CheckCircle2 className="h-5 w-5 text-green-500 mt-0.5" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h2 className="text-lg font-semibold mb-2">What's Included</h2>
                <div className="grid grid-cols-2 gap-4">
                  {[
                    { label: 'Professional guide', included: activity.professional_guide },
                    { label: 'Vehicle and fuel', included: activity.vehicle_fuel },
                    { label: 'Park fees', included: activity.park_fees },
                    { label: 'Photography guidance', included: activity.photography_guidance },
                    { label: 'Refreshments', included: activity.refreshments },
                    { label: 'Binoculars', included: activity.binoculars },
                  ].map((item, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <CheckCircle2 className={`h-5 w-5 ${item.included ? 'text-green-500' : 'text-gray-300'}`} />
                      <span className={item.included ? 'text-foreground' : 'text-muted-foreground'}>
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
} 