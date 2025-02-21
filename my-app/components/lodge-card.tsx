import { Lodge } from "@/types/supabase"
import { DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Badge } from "@/components/ui/badge"
import { ScrollArea } from "@/components/ui/scroll-area"
import { MapPin, Mail, Phone, Globe, Star } from "lucide-react"
import Image from "next/image"

interface LodgeCardProps {
  lodge: Lodge
}

export function LodgeCard({ lodge }: LodgeCardProps) {
  return (
    <div className="grid gap-6">
      <DialogHeader>
        <DialogTitle>{lodge.name}</DialogTitle>
      </DialogHeader>

      <ScrollArea className="h-[80vh] pr-4">
        <div className="grid gap-6">
          {/* Lodge Image */}
          <div className="relative h-64 w-full">
            <Image
              src={lodge.image_url || "/placeholder.svg"}
              alt={lodge.name}
              fill
              className="rounded-lg object-cover"
            />
            {lodge.is_featured && (
              <div className="absolute top-2 right-2">
                <Star className="h-6 w-6 text-yellow-400 fill-yellow-400" />
              </div>
            )}
          </div>
          
          {/* Key Details */}
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <MapPin className="h-5 w-5 text-primary" />
              <div>
                <span className="text-sm text-muted-foreground">Location: </span>
                <span>{lodge.location}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div>
                <span className="text-sm text-muted-foreground">Email: </span>
                <span>{lodge.email}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="h-5 w-5 text-primary" />
              <div>
                <span className="text-sm text-muted-foreground">Phone: </span>
                <span>{lodge.phone}</span>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Globe className="h-5 w-5 text-primary" />
              <div>
                <span className="text-sm text-muted-foreground">Website: </span>
                <a href={lodge.website} target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          <hr className="border-border" />

          {/* About Section */}
          <div className="grid gap-3">
            <h3 className="text-lg font-semibold">About This Lodge</h3>
            <p className="text-muted-foreground">{lodge.description}</p>
          </div>

          <hr className="border-border" />

          {/* Features Section */}
          <div className="grid gap-3">
            <h3 className="text-lg font-semibold">Lodge Features</h3>
            <div className="flex flex-wrap gap-2">
              <Badge variant="outline" className="rounded-full">Luxury Accommodation</Badge>
              <Badge variant="outline" className="rounded-full">Restaurant & Bar</Badge>
              <Badge variant="outline" className="rounded-full">Swimming Pool</Badge>
              <Badge variant="outline" className="rounded-full">Wi-Fi</Badge>
              <Badge variant="outline" className="rounded-full">Game Drives</Badge>
              <Badge variant="outline" className="rounded-full">River Activities</Badge>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
} 