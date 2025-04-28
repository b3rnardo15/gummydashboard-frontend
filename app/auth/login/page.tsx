"use client"

import type React from "react"
import Image from "next/image"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function Login() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [error, setError] = useState("")
  const [loading, setLoading] = useState(false)
  const router = useRouter()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError("")

    try {
      // Simulação de autenticação - em um ambiente real, isso seria uma chamada API
      if (email === "admin@example.com" && password === "admin123") {
        // Admin
        localStorage.setItem(
          "user",
          JSON.stringify({
            email,
            name: "Administrador",
            role: "admin",
            areas: ["Logística", "Marketing", "Operações", "CS", "Comercial"],
          }),
        )
        router.push("/dashboard")
      } else if (email === "logistica@example.com" && password === "logistica123") {
        // Usuário de Logística
        localStorage.setItem(
          "user",
          JSON.stringify({
            email,
            name: "Usuário Logística",
            role: "user",
            areas: ["Logística"],
          }),
        )
        router.push("/dashboard")
      } else if (email === "marketing@example.com" && password === "marketing123") {
        // Usuário de Marketing
        localStorage.setItem(
          "user",
          JSON.stringify({
            email,
            name: "Usuário Marketing",
            role: "user",
            areas: ["Marketing"],
          }),
        )
        router.push("/dashboard")
      } else if (email === "operacoes@example.com" && password === "operacoes123") {
        // Usuário de Operações
        localStorage.setItem(
          "user",
          JSON.stringify({
            email,
            name: "Usuário Operações",
            role: "user",
            areas: ["Operações"],
          }),
        )
        router.push("/dashboard")
      } else if (email === "cs@example.com" && password === "cs123") {
        // Usuário de CS
        localStorage.setItem(
          "user",
          JSON.stringify({
            email,
            name: "Usuário CS",
            role: "user",
            areas: ["CS"],
          }),
        )
        router.push("/dashboard")
      } else if (email === "comercial@example.com" && password === "comercial123") {
        // Usuário de Comercial
        localStorage.setItem(
          "user",
          JSON.stringify({
            email,
            name: "Usuário Comercial",
            role: "user",
            areas: ["Comercial"],
          }),
        )
        router.push("/dashboard")
      } else {
        setError("Credenciais inválidas. Por favor, tente novamente.")
      }
    } catch (err) {
      setError("Ocorreu um erro durante o login. Por favor, tente novamente.")
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-pink-50 to-pink-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
        <div>
          <div className="flex justify-center">
            <Image src="/images/gummy-logo.png" alt="Gummy Original" width={200} height={80} className="mb-4" />
          </div>
          <h2 className="mt-2 text-center text-3xl font-extrabold text-gray-900 dark:text-white">Dashboards Gummy</h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-300">
            Faça login para acessar os dashboards
          </p>
        </div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div className="rounded-md shadow-sm -space-y-px">
            <div>
              <label htmlFor="email-address" className="sr-only">
                Email
              </label>
              <input
                id="email-address"
                name="email"
                type="email"
                autoComplete="email"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 rounded-t-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Senha
              </label>
              <input
                id="password"
                name="password"
                type="password"
                autoComplete="current-password"
                required
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 dark:border-gray-600 placeholder-gray-500 dark:placeholder-gray-400 text-gray-900 dark:text-white dark:bg-gray-700 rounded-b-md focus:outline-none focus:ring-pink-500 focus:border-pink-500 focus:z-10 sm:text-sm"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
          </div>

          {error && <div className="text-red-500 text-sm text-center">{error}</div>}

          <div>
            <button
              type="submit"
              disabled={loading}
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-pink-600 hover:bg-pink-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500 dark:focus:ring-offset-gray-800"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </div>

          <div className="text-center text-xs text-gray-500 dark:text-gray-400 mt-4">
            <p>Credenciais de teste:</p>
            <p>Admin: admin@example.com / admin123</p>
            <p>Usuário: logistica@example.com / logistica123</p>
          </div>
        </form>
      </div>
    </div>
  )
}
