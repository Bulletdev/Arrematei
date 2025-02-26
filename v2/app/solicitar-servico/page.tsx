"use client"

import type React from "react"

import { useState } from "react"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export default function SolicitarServicoPage() {
  const [formState, setFormState] = useState({
    companyName: "",
    contactName: "",
    email: "",
    phone: "",
    serviceType: "",
    message: "",
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
  }

  const handleSelectChange = (value: string) => {
    setFormState((prev) => ({ ...prev, serviceType: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    // Here you would typically send the form data to your API
    console.log("Form submitted:", formState)
    // Reset form after submission
    setFormState({
      companyName: "",
      contactName: "",
      email: "",
      phone: "",
      serviceType: "",
      message: "",
    })
  }

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto bg-white rounded-xl shadow-md p-8">
            <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Solicitar Serviço</h1>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="space-y-2">
                <label htmlFor="companyName" className="text-sm font-medium text-gray-700">
                  Nome da Empresa
                </label>
                <Input
                  id="companyName"
                  name="companyName"
                  value={formState.companyName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="contactName" className="text-sm font-medium text-gray-700">
                  Nome do Contato
                </label>
                <Input
                  id="contactName"
                  name="contactName"
                  value={formState.contactName}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email
                </label>
                <Input type="email" id="email" name="email" value={formState.email} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <label htmlFor="phone" className="text-sm font-medium text-gray-700">
                  Telefone
                </label>
                <Input id="phone" name="phone" value={formState.phone} onChange={handleChange} required />
              </div>

              <div className="space-y-2">
                <label htmlFor="serviceType" className="text-sm font-medium text-gray-700">
                  Tipo de Serviço
                </label>
                <Select onValueChange={handleSelectChange} value={formState.serviceType}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione um serviço" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="licitacoes">Licitações Online</SelectItem>
                    <SelectItem value="consultoria">Consultoria</SelectItem>
                    <SelectItem value="treinamento">Treinamento</SelectItem>
                    <SelectItem value="analise">Análise de Editais</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium text-gray-700">
                  Mensagem
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  rows={4}
                  required
                />
              </div>

              <Button type="submit" className="w-full">
                Enviar Solicitação
              </Button>
            </form>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

