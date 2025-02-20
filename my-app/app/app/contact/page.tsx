"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MapPin, Phone, Mail } from "lucide-react"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prevState) => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted:", formData)
    // Reset form after submission
    setFormData({ name: "", email: "", subject: "", message: "" })
  }

  return (
    <main className="bg-background">
      <div className="container mx-auto px-4 py-16">
        <h1 className="mb-8 text-4xl font-bold text-secondary font-serif">Contact Us</h1>

        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <p className="mb-6 text-muted-foreground">
              Have questions about visiting the Lower Zambezi? Want to learn more about our conservation efforts? We're
              here to help. Fill out the form below or use our contact information to get in touch.
            </p>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <Input
                type="email"
                name="email"
                placeholder="Your Email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <Input
                type="text"
                name="subject"
                placeholder="Subject"
                value={formData.subject}
                onChange={handleChange}
                required
              />
              <Textarea
                name="message"
                placeholder="Your Message"
                value={formData.message}
                onChange={handleChange}
                required
              />
              <Button type="submit" className="w-full">
                Send Message
              </Button>
            </form>
          </div>

          <div className="space-y-6">
            <Card className="safari-border">
              <CardHeader>
                <CardTitle className="text-secondary">Contact Information</CardTitle>
                <CardDescription>Get in touch with us directly</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <MapPin className="h-5 w-5 text-primary" />
                  <span>Lower Zambezi National Park, Zambia</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Phone className="h-5 w-5 text-primary" />
                  <span>+260 XXX XXX XXX</span>
                </div>
                <div className="flex items-center space-x-2 text-muted-foreground">
                  <Mail className="h-5 w-5 text-primary" />
                  <span>info@lowerzambezi.com</span>
                </div>
              </CardContent>
            </Card>

            <Card className="safari-border">
              <CardHeader>
                <CardTitle className="text-secondary">Location</CardTitle>
                <CardDescription>Find us in the heart of Zambia</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="aspect-video relative safari-border overflow-hidden">
                  {/* Replace this with an actual map component if available */}
                  <img
                    src="/placeholder.svg?height=300&width=600"
                    alt="Map of Lower Zambezi"
                    className="w-full h-full object-cover"
                  />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </main>
  )
}

