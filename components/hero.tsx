import { Button } from "@/components/ui/button"
import Header from "./header"

export default function Hero() {
  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
            Your Ultimate Solution for <span className="text-primary">Modern Business</span>
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
            Streamline your workflow, boost productivity, and take your business to the next level with our
            comprehensive platform.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Button size="lg">Get Started</Button>
            <Button size="lg" variant="outline">
              Learn More
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div>
    </div>
  )
}

