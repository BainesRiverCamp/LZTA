export type Lodge = {
  id: number
  created_at: string
  name: string
  description: string
  location: string
  email: string
  phone: string
  website: string
  image_url: string
  is_featured: boolean
}

export type Activity = {
  id: number
  created_at: string
  name: string
  description: string
  duration: string
  price_range: string
  image_url: string
  lodge_id: number
}

export type Season = {
  id: number
  created_at: string
  name: string
  start_date: string
  end_date: string
  description: string
  weather_info: string
} 