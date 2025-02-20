import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Star, Wifi, PocketIcon as Pool, Coffee, UtensilsCrossed, MapPin, Users, Calendar } from "lucide-react"

interface Review {
  author: string
  rating: number
  comment: string
  date: string
}

interface Lodge {
  id: string
  name: string
  type: "Luxury" | "Mid-Range" | "Bush Camp"
  description: string
  longDescription: string
  priceRange: string
  rating: number
  location: string
  amenities: string[]
  imageUrl: string
  rooms: number
  activities: string[]
  reviews: Review[]
}

interface LodgeDetailsModalProps {
  lodge: Lodge | null
  isOpen: boolean
  onClose: () => void
}

const amenityIcons = {
  Wifi: Wifi,
  Pool: Pool,
  Restaurant: UtensilsCrossed,
  Spa: Coffee,
}

export function LodgeDetailsModal({ lodge, isOpen, onClose }: LodgeDetailsModalProps) {
  if (!lodge) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-secondary font-serif">{lodge.name}</DialogTitle>
          <DialogDescription className="flex items-center text-sm text-muted-foreground">
            <MapPin className="mr-1 h-4 w-4" />
            {lodge.location}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <img src={lodge.imageUrl || "/placeholder.svg"} alt={lodge.name} className="h-full w-full object-cover" />
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              {[...Array(5)].map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${i < lodge.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                />
              ))}
              <span className="ml-2 text-muted-foreground">({lodge.reviews.length} reviews)</span>
            </div>
            <Badge variant="secondary" className="text-lg font-semibold">
              {lodge.priceRange}
            </Badge>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-secondary">Overview</h3>
            <p className="text-muted-foreground">{lodge.longDescription}</p>
            <div className="flex items-center gap-4">
              <div className="flex items-center">
                <Users className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">{lodge.rooms} rooms</span>
              </div>
              <div className="flex items-center">
                <Calendar className="h-5 w-5 mr-2 text-primary" />
                <span className="text-muted-foreground">Available year-round</span>
              </div>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-secondary">Amenities</h3>
            <div className="grid grid-cols-2 gap-4">
              {lodge.amenities.map((amenity) => {
                const IconComponent = amenityIcons[amenity as keyof typeof amenityIcons]
                return (
                  <Badge key={amenity} variant="outline" className="flex items-center gap-2 px-3 py-1">
                    {IconComponent && <IconComponent className="h-4 w-4" />}
                    {amenity}
                  </Badge>
                )
              })}
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-secondary">Activities</h3>
            <ul className="grid grid-cols-2 gap-2">
              {lodge.activities.map((activity, index) => (
                <li key={index} className="flex items-center text-muted-foreground">
                  <span className="mr-2 text-primary">•</span>
                  {activity}
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-2xl font-semibold text-secondary">Guest Reviews</h3>
            <div className="space-y-4">
              {lodge.reviews.map((review, index) => (
                <div key={index} className="border-b border-border pb-4 last:border-b-0">
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-semibold text-secondary">{review.author}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-4 w-4 ${i < review.rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                  </div>
                  <p className="text-muted-foreground">{review.comment}</p>
                  <span className="text-sm text-muted-foreground">{review.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

