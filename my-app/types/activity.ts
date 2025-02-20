export interface Activity {
  id: number
  name: string
  description: string
  category: string
  duration: string
  difficulty: string
  bestTime: string
  groupSize: string
  longDescription?: string
  image_url: string
  whatToExpect: string[]
  whats_included: string[]
  lodge_id: number
  park_fees: boolean
  vehicle_fuel: boolean
  refreshments: boolean
  photography_guidance: boolean
  binoculars: boolean
  professional_guide: boolean
} 