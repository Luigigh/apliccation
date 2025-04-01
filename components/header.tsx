"use client"

import Link from "next/link"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu } from "lucide-react"
import LoginModal from "./login-modal"

export default function Header() {
  const [isLoginOpen, setIsLoginOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-sm border-b">
      <div className="w-full flex items-center justify-between h-16 px-4 md:px-6">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold">InterIn</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6">
          <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
            Recursos
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button onClick={() => setIsLoginOpen(true)}>
            Login
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="outline" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="#features" className="text-sm font-medium hover:underline underline-offset-4">
                  Features
                </Link>
                <Link href="#testimonials" className="text-sm font-medium hover:underline underline-offset-4">
                  Testimonials
                </Link>
                <Link href="#pricing" className="text-sm font-medium hover:underline underline-offset-4">
                  Pricing
                </Link>
                <Button variant="ghost" onClick={() => setIsLoginOpen(true)}>
                  Login
                </Button>
                <Button onClick={() => setIsLoginOpen(true)}>Sign Up</Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
      <LoginModal isOpen={isLoginOpen} onClose={() => setIsLoginOpen(false)} />
    </header>
  )
}

