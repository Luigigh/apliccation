"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import Header from "./header"
import { ArrowRight } from "lucide-react"
import LoginModal from "./login-modal"

export default function Hero() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)



  return (
    <div className="relative min-h-screen flex flex-col">
      <Header />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 py-24 md:py-32">
        <div className="space-y-4 max-w-3xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
          Conectando Universitários a Oportunidades
          </h1>
          <p className="mx-auto max-w-[700px] text-muted-foreground md:text-xl">
          Encontre estágios, trainee e vagas para jovens talentos nas melhores empresas do mercado.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
          <Button size="lg" className="gap-2" onClick={() => setIsLoginOpen(true)}>
            Começar <ArrowRight className="h-4 w-4" />
          </Button>
            
          </div>
        </div>
      </div>
      <div className="absolute inset-0 -z-10 h-full w-full bg-background [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,hsl(var(--background))_100%)]"></div>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </div>
  )
}

