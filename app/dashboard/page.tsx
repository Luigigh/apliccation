"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Search, Filter, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

// Dados de exemplo para os cards
const ITEMS = [
  {
    id: 1,
    title: "Análise de Mercado",
    description: "Relatório detalhado sobre tendências de mercado e oportunidades de crescimento.",
    category: "Relatórios",
    tags: ["Mercado", "Análise", "Tendências"],
    date: "2023-10-15",
    author: "Ana Silva",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 2,
    title: "Plano de Marketing Digital",
    description: "Estratégia completa para aumentar a presença online e engajamento nas redes sociais.",
    category: "Marketing",
    tags: ["Digital", "Redes Sociais", "SEO"],
    date: "2023-10-12",
    author: "Carlos Mendes",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 3,
    title: "Relatório Financeiro Q3",
    description: "Resultados financeiros do terceiro trimestre com projeções para o próximo período.",
    category: "Finanças",
    tags: ["Relatório", "Finanças", "Trimestral"],
    date: "2023-10-10",
    author: "Mariana Costa",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 4,
    title: "Pesquisa de Satisfação de Clientes",
    description: "Resultados da pesquisa anual de satisfação com análise de feedback dos clientes.",
    category: "Clientes",
    tags: ["Pesquisa", "Satisfação", "Feedback"],
    date: "2023-10-08",
    author: "Roberto Alves",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 5,
    title: "Plano de Desenvolvimento de Produto",
    description: "Roadmap para o desenvolvimento e lançamento do novo produto no próximo semestre.",
    category: "Produto",
    tags: ["Desenvolvimento", "Roadmap", "Inovação"],
    date: "2023-10-05",
    author: "Juliana Martins",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 6,
    title: "Análise de Concorrentes",
    description: "Estudo comparativo dos principais concorrentes no mercado e suas estratégias.",
    category: "Relatórios",
    tags: ["Concorrência", "Análise", "Mercado"],
    date: "2023-10-03",
    author: "Fernando Gomes",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 7,
    title: "Estratégia de Expansão Internacional",
    description: "Plano detalhado para entrada em novos mercados internacionais no próximo ano.",
    category: "Estratégia",
    tags: ["Internacional", "Expansão", "Crescimento"],
    date: "2023-09-28",
    author: "Luciana Ferreira",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
  {
    id: 8,
    title: "Relatório de Sustentabilidade",
    description: "Iniciativas de sustentabilidade da empresa e impacto ambiental reduzido.",
    category: "Sustentabilidade",
    tags: ["ESG", "Ambiente", "Responsabilidade"],
    date: "2023-09-25",
    author: "Paulo Mendonça",
    authorAvatar: "/placeholder.svg?height=40&width=40",
  },
]

// Categorias para filtro
const CATEGORIES = [
  "Todos",
  "Relatórios",
  "Marketing",
  "Finanças",
  "Clientes",
  "Produto",
  "Estratégia",
  "Sustentabilidade",
]

export default function Dashboard() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("Todos")
  const router = useRouter()

  // Função para filtrar os itens com base na pesquisa e categoria
  const filteredItems = ITEMS.filter((item) => {
    const matchesSearch =
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.tags.some((tag) => tag.toLowerCase().includes(searchQuery.toLowerCase()))

    const matchesCategory = selectedCategory === "Todos" || item.category === selectedCategory

    return matchesSearch && matchesCategory
  })

  const handleLogout = async () => {
    // Simulação de logout - em produção, isso chamaria a função de logout real
    document.cookie = "user_id=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;"
    router.push("/")
  }

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      {/* Header */}
      <header className="sticky top-0 z-10 bg-background border-b">
        <div className="container flex items-center justify-between h-16 px-4">
          <div className="flex items-center gap-4">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline" size="icon" className="md:hidden">
                  <Menu className="h-5 w-5" />
                  <span className="sr-only">Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left">
                <SheetHeader className="mb-4">
                  <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col gap-2">
                  {CATEGORIES.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "ghost"}
                      className="justify-start"
                      onClick={() => {
                        setSelectedCategory(category)
                      }}
                    >
                      {category}
                    </Button>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
            <Link href="/dashboard" className="flex items-center gap-2">
              <span className="text-xl font-bold">BrandName</span>
            </Link>
          </div>

          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Pesquisar..."
                className="w-[300px] pl-8"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Avatar className="h-8 w-8">
                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Avatar" />
                    <AvatarFallback>U</AvatarFallback>
                  </Avatar>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem>Perfil</DropdownMenuItem>
                <DropdownMenuItem>Configurações</DropdownMenuItem>
                <DropdownMenuItem onClick={handleLogout}>Sair</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </div>
        </div>
      </header>

      {/* Mobile Search */}
      <div className="md:hidden p-4 bg-background border-b">
        <div className="relative">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Pesquisar..."
            className="w-full pl-8"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 container py-6 px-4">
        <div className="flex flex-col md:flex-row gap-6">
          {/* Sidebar - Categories */}
          <aside className="hidden md:block w-[200px] shrink-0">
            <h2 className="text-lg font-semibold mb-4">Categorias</h2>
            <nav className="space-y-1">
              {CATEGORIES.map((category) => (
                <Button
                  key={category}
                  variant={selectedCategory === category ? "default" : "ghost"}
                  className="w-full justify-start"
                  onClick={() => setSelectedCategory(category)}
                >
                  {category}
                </Button>
              ))}
            </nav>
          </aside>

          {/* Main Content */}
          <main className="flex-1">
            <div className="flex items-center justify-between mb-6">
              <h1 className="text-2xl font-bold">Dashboard</h1>
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="h-4 w-4" />
                Filtros
              </Button>
            </div>

            {/* Filter Chips */}
            {(searchQuery || selectedCategory !== "Todos") && (
              <div className="flex flex-wrap gap-2 mb-6">
                {searchQuery && (
                  <Badge variant="secondary" className="gap-1">
                    Pesquisa: {searchQuery}
                    <button className="ml-1 hover:text-destructive" onClick={() => setSearchQuery("")}>
                      ×
                    </button>
                  </Badge>
                )}
                {selectedCategory !== "Todos" && (
                  <Badge variant="secondary" className="gap-1">
                    Categoria: {selectedCategory}
                    <button className="ml-1 hover:text-destructive" onClick={() => setSelectedCategory("Todos")}>
                      ×
                    </button>
                  </Badge>
                )}
              </div>
            )}

            {/* Cards Grid */}
            {filteredItems.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredItems.map((item) => (
                  <Card key={item.id} className="h-full flex flex-col">
                    <CardHeader>
                      <div className="flex justify-between items-start">
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <Badge>{item.category}</Badge>
                      </div>
                    </CardHeader>
                    <CardContent className="flex-1">
                      <p className="text-muted-foreground">{item.description}</p>
                      <div className="flex flex-wrap gap-2 mt-4">
                        {item.tags.map((tag) => (
                          <Badge key={tag} variant="outline">
                            {tag}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                    <CardFooter className="flex items-center justify-between pt-4 border-t">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-6 w-6">
                          <AvatarImage src={item.authorAvatar} alt={item.author} />
                          <AvatarFallback>{item.author[0]}</AvatarFallback>
                        </Avatar>
                        <span className="text-sm text-muted-foreground">{item.author}</span>
                      </div>
                      <span className="text-sm text-muted-foreground">
                        {new Date(item.date).toLocaleDateString("pt-BR")}
                      </span>
                    </CardFooter>
                  </Card>
                ))}
              </div>
            ) : (
              <div className="text-center py-12">
                <h3 className="text-lg font-medium">Nenhum resultado encontrado</h3>
                <p className="text-muted-foreground mt-2">Tente ajustar seus filtros ou termos de pesquisa.</p>
                <Button
                  variant="outline"
                  className="mt-4"
                  onClick={() => {
                    setSearchQuery("")
                    setSelectedCategory("Todos")
                  }}
                >
                  Limpar filtros
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t py-6 bg-muted/30">
        <div className="container px-4 text-center text-sm text-muted-foreground">
          <p>© 2023 BrandName. Todos os direitos reservados.</p>
        </div>
      </footer>
    </div>
  )
}

