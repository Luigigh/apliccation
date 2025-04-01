import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      quote:
        "This platform has completely transformed how we operate. The efficiency gains alone have paid for the investment many times over.",
      author: "Sarah Johnson",
      role: "CEO, TechStart Inc.",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "The customer support is exceptional. Any time we've had questions, the team has been quick to respond and incredibly helpful.",
      author: "Michael Chen",
      role: "CTO, Innovate Solutions",
      avatar: "/placeholder.svg?height=100&width=100",
    },
    {
      quote:
        "We've tried many similar services, but none compare to the ease of use and powerful features this platform offers.",
      author: "Emma Rodriguez",
      role: "Marketing Director, Global Brands",
      avatar: "/placeholder.svg?height=100&width=100",
    },
  ]

  return (
    <section id="testimonials" className="py-20">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">What Our Customers Say</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Don't just take our word for it - hear from our satisfied customers
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="overflow-hidden">
              <CardContent className="p-6">
                <Quote className="h-8 w-8 text-primary mb-4" />
                <p className="mb-4 italic">{testimonial.quote}</p>
                <div className="flex items-center gap-4">
                  <Image
                    src={testimonial.avatar || "/placeholder.svg"}
                    alt={testimonial.author}
                    width={50}
                    height={50}
                    className="rounded-full"
                  />
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

