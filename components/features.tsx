import { CheckCircle, Zap, Shield, BarChart } from "lucide-react"

export default function Features() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-primary" />,
      title: "Exclusivo",
      description: "Vagas selecionadas especialmente para universitários.",
    },
    {
      icon: <Shield className="h-10 w-10 text-primary" />,
      title: "Conectado",
      description: "Conexão direta com recrutadores das melhores empresas.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-primary" />,
      title: "Personalizado",
      description: "Recomendações de vagas baseadas no seu perfil acadêmico.",
    },

  ]

  return (
    <section id="features" className="py-20 bg-muted/50">
      <div className="w-full px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Recursos poderosos</h2>
          <p className="mt-4 text-muted-foreground md:text-xl">
          Tudo o que você precisa para ter sucesso no mercado competitivo de hoje
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

