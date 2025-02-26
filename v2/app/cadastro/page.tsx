"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Eye, EyeOff, CheckCircle } from "lucide-react"

export default function CadastroPage() {
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    telefone: "",
    senha: "",
    confirmarSenha: "",
    termos: false,
  })

  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target
    setFormState((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulando envio do formulário
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitSuccess(true)
      setFormState({
        nome: "",
        email: "",
        telefone: "",
        senha: "",
        confirmarSenha: "",
        termos: false,
      })
    }, 1500)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-md mx-auto">
            <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6 text-center">Crie sua Conta</h1>
            <p className="text-gray-600 mb-8 text-center">
              Junte-se à Arrematei e comece a participar dos melhores licitações online.
            </p>

            {submitSuccess ? (
              <div className="bg-white rounded-xl shadow-md p-8 text-center">
                <div className="flex justify-center mb-4">
                  <CheckCircle className="h-16 w-16 text-emerald-500" />
                </div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Cadastro Realizado com Sucesso!</h2>
                <p className="text-gray-600 mb-6">
                  Enviamos um email de confirmação para o endereço fornecido. Por favor, verifique sua caixa de entrada
                  e siga as instruções para ativar sua conta.
                </p>
              </div>
            ) : (
              <div className="bg-white rounded-xl shadow-md p-8">
                <form onSubmit={handleSubmit}>
                  <div className="mb-4">
                    <label htmlFor="nome" className="block text-sm font-medium text-gray-700 mb-1">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formState.nome}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="telefone" className="block text-sm font-medium text-gray-700 mb-1">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formState.telefone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                    />
                  </div>

                  <div className="mb-4">
                    <label htmlFor="senha" className="block text-sm font-medium text-gray-700 mb-1">
                      Senha
                    </label>
                    <div className="relative">
                      <input
                        type={showPassword ? "text" : "password"}
                        id="senha"
                        name="senha"
                        value={formState.senha}
                        onChange={handleChange}
                        required
                        minLength={8}
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
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
                    <p className="text-xs text-gray-500 mt-1">A senha deve ter pelo menos 8 caracteres.</p>
                  </div>

                  <div className="mb-6">
                    <label htmlFor="confirmarSenha" className="block text-sm font-medium text-gray-700 mb-1">
                      Confirmar Senha
                    </label>
                    <div className="relative">
                      <input
                        type={showConfirmPassword ? "text" : "password"}
                        id="confirmarSenha"
                        name="confirmarSenha"
                        value={formState.confirmarSenha}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-emerald-500 focus:border-emerald-500"
                      />
                      <button
                        type="button"
                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                      >
                        {showConfirmPassword ? (
                          <EyeOff className="h-5 w-5 text-gray-400" />
                        ) : (
                          <Eye className="h-5 w-5 text-gray-400" />
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="mb-6">
                    <div className="flex items-start">
                      <input
                        type="checkbox"
                        id="termos"
                        name="termos"
                        checked={formState.termos}
                        onChange={handleChange}
                        required
                        className="h-4 w-4 text-emerald-600 focus:ring-emerald-500 border-gray-300 rounded mt-1"
                      />
                      <label htmlFor="termos" className="ml-2 block text-sm text-gray-600">
                        Eu concordo com os{" "}
                        <a href="/termos" className="text-emerald-600 hover:underline">
                          Termos de Uso
                        </a>{" "}
                        e{" "}
                        <a href="/privacidade" className="text-emerald-600 hover:underline">
                          Política de Privacidade
                        </a>
                        .
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full flex justify-center items-center rounded-md bg-emerald-600 px-6 py-3 text-white font-medium hover:bg-emerald-700 transition-colors disabled:opacity-70"
                  >
                    {isSubmitting ? "Processando..." : "Criar Conta"}
                  </button>
                </form>

                <div className="mt-6 text-center">
                  <p className="text-gray-600">
                    Já tem uma conta?{" "}
                    <a href="/login" className="text-emerald-600 hover:underline">
                      Faça login
                    </a>
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

