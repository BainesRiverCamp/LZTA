import Image from "next/image"
import { Button } from "@/components/ui/button"

export default function AboutPage() {
  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold text-secondary font-serif">About Lower Zambezi Tourism Association</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-4 text-muted-foreground">
              The Lower Zambezi Tourism Association (LZTA) is a non-profit organization dedicated to promoting
              sustainable tourism and conservation in the Lower Zambezi region of Zambia. Our mission is to preserve the
              natural beauty and wildlife of this unique ecosystem while providing unforgettable experiences for
              visitors from around the world.
            </p>
            <p className="mb-4 text-muted-foreground">
              Founded in 1998, LZTA brings together lodge owners, tour operators, and conservation experts to ensure
              that tourism in the Lower Zambezi benefits both the local communities and the environment. We work closely
              with the Zambian Wildlife Authority and other stakeholders to implement best practices in eco-tourism and
              wildlife management.
            </p>
            <Button className="mt-4">Learn More About Our Conservation Efforts</Button>
          </div>
          <div className="relative h-[400px] safari-border overflow-hidden">
            <Image
              src="/placeholder.svg?height=400&width=600"
              alt="Lower Zambezi landscape"
              layout="fill"
              objectFit="cover"
            />
          </div>
        </div>

        <h2 className="mt-16 mb-8 text-3xl font-bold text-secondary font-serif">Our Objectives</h2>
        <ul className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {[
            "Promote sustainable tourism practices",
            "Protect and conserve the Lower Zambezi ecosystem",
            "Support local communities through eco-tourism",
            "Enhance visitor experiences and safety",
            "Facilitate cooperation among tourism stakeholders",
            "Raise awareness about the Lower Zambezi's unique biodiversity",
          ].map((objective, index) => (
            <li key={index} className="flex items-start">
              <span className="mr-2 text-primary">•</span>
              <span className="text-muted-foreground">{objective}</span>
            </li>
          ))}
        </ul>

        <h2 className="mt-16 mb-8 text-3xl font-bold text-secondary font-serif">Our Impact</h2>
        <div className="grid gap-8 md:grid-cols-3">
          {[
            {
              title: "Conservation",
              description: "Over 4,000 km² of protected wilderness area maintained and monitored.",
            },
            {
              title: "Community Support",
              description: "Annual investment of $500,000 in local education and healthcare initiatives.",
            },
            {
              title: "Sustainable Tourism",
              description: "Implementation of eco-friendly practices across all member lodges and camps.",
            },
          ].map((impact, index) => (
            <div key={index} className="bg-muted p-6 rounded-lg safari-border">
              <h3 className="mb-2 text-xl font-semibold text-secondary">{impact.title}</h3>
              <p className="text-muted-foreground">{impact.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <h2 className="mb-4 text-3xl font-bold text-secondary font-serif">Join Us in Preserving the Lower Zambezi</h2>
          <p className="mb-8 text-muted-foreground">
            Whether you're a traveler, conservationist, or industry professional, there are many ways to support our
            mission.
          </p>
          <Button size="lg">Get Involved</Button>
        </div>
      </div>
    </main>
  )
}

