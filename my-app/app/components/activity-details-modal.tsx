import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Calendar, Clock, Users, Thermometer } from "lucide-react"

interface Activity {
  name: string
  category: string
  imageUrl?: string
  duration: string
  difficulty: string
  bestTime: string
  groupSize: string
  longDescription: string
  highlights: string[]
  included: string[]
}

interface ActivityDetailsModalProps {
  activity: Activity | null
  isOpen: boolean
  onClose: () => void
}

export function ActivityDetailsModal({ activity, isOpen, onClose }: ActivityDetailsModalProps) {
  if (!activity) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[900px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-secondary font-serif">{activity.name}</DialogTitle>
          <DialogDescription className="text-muted-foreground">{activity.category}</DialogDescription>
        </DialogHeader>
        <div className="space-y-6">
          <div className="relative h-80 w-full overflow-hidden rounded-lg">
            <img
              src={activity.imageUrl || "/placeholder.svg"}
              alt={activity.name}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Duration: {activity.duration}</span>
            </div>
            <div className="flex items-center gap-2">
              <Thermometer className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Difficulty: {activity.difficulty}</span>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Best Time: {activity.bestTime}</span>
            </div>
            <div className="flex items-center gap-2">
              <Users className="h-5 w-5 text-primary" />
              <span className="text-muted-foreground">Group Size: {activity.groupSize}</span>
            </div>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary">About This Activity</h3>
            <p className="text-muted-foreground">{activity.longDescription}</p>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary">What to Expect</h3>
            <ul className="grid gap-2">
              {activity.highlights.map((highlight, index) => (
                <li key={index} className="flex items-start">
                  <span className="mr-2 text-primary">•</span>
                  <span className="text-muted-foreground">{highlight}</span>
                </li>
              ))}
            </ul>
          </div>

          <Separator />

          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-secondary">What's Included</h3>
            <div className="grid grid-cols-2 gap-2">
              {activity.included.map((item, index) => (
                <Badge key={index} variant="outline" className="justify-start">
                  {item}
                </Badge>
              ))}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

