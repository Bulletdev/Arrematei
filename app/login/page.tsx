"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Eye, EyeOff } from "lucide-react"
import Link from "next/link"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [formState, setFormState] = useState({
    email: "",
    password: "",
    rememberMe: false,
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Aqui você implementaria a lógica de login
    console.log("Login submitted", formState)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Login</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Senha
                </label>
                <div className="relative">
                  <Input
                    type={showPassword ? "text" : "password"}
                    id="password"
                    name="password"
                    value={formState.password}
                    onChange={handleChange}
                    required
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5 text-gray-400" />
                    ) : (
                      <Eye className="h-5 w-5 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <Checkbox
                    id="rememberMe"
                    name="rememberMe"
                    checked={formState.rememberMe}
                    onCheckedChange={(checked) => setFormState((prev) => ({ ...prev, rememberMe: checked === true }))}
                  />
                  <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-600">
                    Lembrar-me
                  </label>
                </div>
                <Link href="/recuperar-senha" className="text-sm text-emerald-600 hover:underline">
                  Esqueceu a senha?
                </Link>
              </div>

              <Button type="submit" className="w-full">
                Entrar
              </Button>
            </form>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600">
                Não tem uma conta?{" "}
                <Link href="/cadastro" className="text-emerald-600 hover:underline">
                  Cadastre-se
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

