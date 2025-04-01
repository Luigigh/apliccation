import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

export function middleware(request: NextRequest) {
  const path = request.nextUrl.pathname

  // Define which paths are protected (require authentication)
  const isProtectedPath = path.startsWith("/dashboard")

  // Get the user_id cookie
  const userId = request.cookies.get("user_id")?.value

  // If the path is protected and there's no user_id cookie, redirect to home
  if (isProtectedPath && !userId) {
    return NextResponse.redirect(new URL("/", request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*"],
}

