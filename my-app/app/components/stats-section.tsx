"use client"

import { motion } from "framer-motion"

const stats = [
  {
    value: "15+",
    label: "Lodges & Camps",
  },
  {
    value: "250+",
    label: "Bird Species",
  },
  {
    value: "50km",
    label: "River Frontage",
  },
  {
    value: "4,092km²",
    label: "Protected Area",
  },
]

export function StatsSection() {
  return (
    <section className="relative min-h-screen">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      />
      <div className="absolute inset-0 stats-gradient" />
      <div className="relative z-10 flex min-h-screen items-end pb-20">
        <div className="container mx-auto px-4">
          <div className="grid gap-8 text-white md:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                className="text-center"
              >
                <div className="mb-2 text-4xl font-bold md:text-5xl lg:text-6xl">{stat.value}</div>
                <div className="text-lg text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

