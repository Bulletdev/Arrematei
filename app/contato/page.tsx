"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Mail, Phone, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function ContatoPage() {
  const [formState, setFormState] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, assunto: value }))
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
        assunto: "",
        mensagem: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    }, 1500)
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24 flex-grow">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Entre em Contato</h1>
            <p className="text-lg text-gray-600 mb-12">
              Estamos aqui para ajudar. Preencha o formulário abaixo ou use um de nossos canais de contato.
            </p>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-4">
                  <Phone className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefone</h3>
                <p className="text-gray-600">(11) 9999-9999</p>
                <p className="text-gray-600">Segunda a Sexta, 9h às 18h</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-4">
                  <Mail className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Email</h3>
                <p className="text-gray-600">contato@arrematei.com.br</p>
                <p className="text-gray-600">Respondemos em até 24 horas</p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <div className="bg-emerald-100 p-4 rounded-full mb-4">
                  <MapPin className="h-6 w-6 text-emerald-600" />
                </div>
                <h3 className="text-lg font-semibold text-gray-800 mb-2">Endereço</h3>
                <p className="text-gray-600">Av. Paulista, 1000</p>
                <p className="text-gray-600">São Paulo - SP</p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Envie uma Mensagem</h2>

              {submitSuccess && (
                <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
                  Mensagem enviada com sucesso! Entraremos em contato em breve.
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="nome" className="text-sm font-medium text-gray-700">
                      Nome Completo
                    </label>
                    <Input type="text" id="nome" name="nome" value={formState.nome} onChange={handleChange} required />
                  </div>

                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">
                      Email
                    </label>
                    <Input
                      type="email"
                      id="email"
                      name="email"
                      value={formState.email}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="assunto" className="text-sm font-medium text-gray-700">
                    Assunto
                  </label>
                  <Select onValueChange={handleSelectChange} value={formState.assunto}>
                    <SelectTrigger>
                      <SelectValue placeholder="Selecione um assunto" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Dúvidas">Dúvidas</SelectItem>
                      <SelectItem value="Suporte">Suporte</SelectItem>
                      <SelectItem value="Parcerias">Parcerias</SelectItem>
                      <SelectItem value="Outros">Outros</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="mensagem" className="text-sm font-medium text-gray-700">
                    Mensagem
                  </label>
                  <Textarea
                    id="mensagem"
                    name="mensagem"
                    value={formState.mensagem}
                    onChange={handleChange}
                    required
                    rows={5}
                  />
                </div>

                <Button type="submit" disabled={isSubmitting} className="w-full">
                  {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

