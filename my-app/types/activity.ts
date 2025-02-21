export interface Activity {
  id: number
  created_at: string
  name: string
  description: string
  category: string
  duration: string
  difficulty: string
  best_time: string
  group_size: string
  long_description: string
  image_url: string
  what_to_expect: string[]
  whats_included: string[]
  lodge_id: number
  homepage_featured: boolean
  park_fees: boolean
  vehicle_fuel: boolean
  refreshments: boolean
  photography_guidance: boolean
  binoculars: boolean
  professional_guide: boolean
  icon_name: string
} 