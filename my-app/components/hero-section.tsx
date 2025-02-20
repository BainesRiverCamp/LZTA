"use client"

import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

export function HeroSection() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      />
      <div className="absolute inset-0 luxury-gradient" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-secondary px-4">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-6 text-center text-5xl font-bold md:text-7xl font-serif"
        >
          Discover Unparalleled Luxury in the Lower Zambezi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-8 max-w-2xl text-center text-lg text-muted-foreground"
        >
          Immerse yourself in exclusive safaris, world-class tiger fishing, and bespoke wilderness experiences in one of
          Africa's last untouched paradises
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Button size="lg" className="text-lg bg-primary text-primary-foreground hover:bg-primary/90">
            Curate Your Adventure
          </Button>
        </motion.div>
      </div>
    </div>
  )
}

