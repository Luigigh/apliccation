import { CheckCircle, Zap, Shield, BarChart } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Lightning Fast",
      description: "Our platform is optimized for speed, ensuring you never have to wait for results.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Secure by Design",
      description: "Your data is protected with enterprise-grade security and encryption.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Easy to Use",
      description: "Intuitive interface designed for users of all technical backgrounds.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-primary" />,
      title: "Advanced Analytics",
      description: "Gain insights with comprehensive reporting and data visualization tools.",
    },
  ]

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="container px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Powerful Features</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
            Everything you need to succeed in today's competitive market
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-background rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

