import Link from "next/link"

export default function Footer() {
  return (
    <footer className="w-full border-t py-6">
        <div className="px-4 flex flex-col items-center justify-center gap-4 md:flex-row md:justify-between">
          <p className="text-center text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} InterIn. Todos os direitos reservados.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline">
              Termos
            </Link>
            <Link href="#" className="text-sm font-medium hover:underline">
              Privacidade
            </Link>
          </div>
        </div>
      </footer>
  )
}

