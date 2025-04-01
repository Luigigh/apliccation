import { Button } from "@/components/ui/button"

export default function CTA() {
  return (
    <section id="pricing" className="py-20 bg-primary/5">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl mb-6">Ready to Get Started?</h2>
          <p className="text-muted-foreground md:text-xl mb-8 max-w-[700px]">
            Join thousands of satisfied customers who have transformed their business with our platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">Start Free Trial</Button>
            <Button size="lg" variant="outline">
              Contact Sales
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

