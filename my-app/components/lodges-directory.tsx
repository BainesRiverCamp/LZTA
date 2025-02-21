"use client"

import React from "react"
import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Star, Users } from "lucide-react"
import { LodgeCard } from "@/components/lodge-card"
import { getAllLodges } from "@/lib/db-utils"
import type { Lodge } from "@/types/supabase"
import Image from "next/image"
import { Dialog, DialogContent } from "@/components/ui/dialog"

export function LodgesDirectory() {
  const [lodges, setLodges] = useState<Lodge[]>([])
  const [selectedLocation, setSelectedLocation] = useState<string>("all")
  const [selectedLodge, setSelectedLodge] = useState<Lodge | null>(null)

  useEffect(() => {
    async function loadLodges() {
      const allLodges = await getAllLodges()
      setLodges(allLodges)
    }

    loadLodges()
  }, [])

  const filteredLodges = lodges.filter((lodge) => {
    return selectedLocation === "all" || lodge.location === selectedLocation
  })

  return (
    <section>
      <div className="mb-8 flex flex-wrap gap-4 md:justify-start">
        <Select onValueChange={setSelectedLocation} defaultValue="all">
          <SelectTrigger className="w-[180px] bg-card">
            <SelectValue placeholder="Location" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Locations</SelectItem>
            <SelectItem value="Lower Zambezi National Park">Lower Zambezi National Park</SelectItem>
            <SelectItem value="Lower Zambezi">Lower Zambezi</SelectItem>
          </SelectContent>
        </Select>
      </div>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {filteredLodges.map((lodge) => (
          <Card key={lodge.id} className="flex flex-col overflow-hidden bg-card safari-border">
            <div className="relative h-48 w-full">
              <Image
                src={lodge.image_url || "/placeholder.svg"}
                alt={lodge.name}
                fill
                className="object-cover"
              />
              {lodge.is_featured && (
                <div className="absolute top-2 right-2">
                  <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
                </div>
              )}
            </div>
            <CardHeader>
              <div className="flex items-center justify-between">
                <CardTitle className="text-xl text-secondary font-serif">{lodge.name}</CardTitle>
                <MapPin className="h-6 w-6 text-primary" />
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="mb-4 text-muted-foreground">{lodge.description}</CardDescription>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <MapPin className="h-4 w-4" />
                <span>{lodge.location}</span>
              </div>
            </CardContent>
            <CardFooter className="mt-auto">
              <Button variant="secondary" className="w-full" onClick={() => setSelectedLodge(lodge)}>
                More Info
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <Dialog open={!!selectedLodge} onOpenChange={(open) => !open && setSelectedLodge(null)}>
        {selectedLodge && (
          <DialogContent className="max-w-3xl">
            <LodgeCard lodge={selectedLodge} />
          </DialogContent>
        )}
      </Dialog>
    </section>
  )
} 