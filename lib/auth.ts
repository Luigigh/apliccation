"use server"

import { cookies } from "next/headers"
import { redirect } from "next/navigation"
import { neon } from "@neondatabase/serverless"
import bcrypt from "bcryptjs"

const sql = neon(process.env.DATABASE_URL!)

// Função de login que verifica as credenciais e redireciona apenas se forem válidas
export async function login(email: string, password: string) {
  try {
    // Buscar o usuário pelo email
    const users = await sql`
      SELECT * FROM users WHERE email = ${email} LIMIT 1
    `

    // Verificar se o usuário existe
    if (!users || users.length === 0) {
      throw new Error("Invalid email or password")
    }

    const user = users[0]

    // Verificar a senha
    const isPasswordValid = await bcrypt.compare(password, user.password)

    if (!isPasswordValid) {
      throw new Error("Invalid email or password")
    }

    // Definir o cookie de autenticação
    cookies().set("user_id", user.id.toString(), {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      maxAge: 60 * 60 * 24 * 7, // 1 semana
      path: "/",
    })

    // Redirecionar para o dashboard após login bem-sucedido
    redirect("/dashboard")
  } catch (error) {
    // Retornar o erro para ser tratado no cliente
    throw error
  }
}

export async function register(name: string, email: string, password: string) {
  try {
    // Verificar se o usuário já existe
    const existingUser = await sql`
      SELECT * FROM users WHERE email = ${email} LIMIT 1
    `

    if (existingUser && existingUser.length > 0) {
      throw new Error("User already exists")
    }

    // Hash da senha
    const hashedPassword = await bcrypt.hash(password, 10)

    // Criar o usuário
    const result = await sql`
      INSERT INTO users (name, email, password)
      VALUES (${name}, ${email}, ${hashedPassword})
      RETURNING id, name, email
    `

    if (!result || result.length === 0) {
      throw new Error("Failed to create user")
    }

    return { success: true }
  } catch (error) {
    throw error
  }
}

export async function logout() {
  cookies().delete("user_id")
  redirect("/")
}

export async function getUser() {
  const userId = cookies().get("user_id")?.value

  if (!userId) {
    return null
  }

  const user = await sql`
    SELECT id, name, email FROM users WHERE id = ${Number.parseInt(userId)} LIMIT 1
  `

  if (!user || user.length === 0) {
    return null
  }

  return user[0]
}

