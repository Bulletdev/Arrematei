"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { useToast } from "@/components/ui/use-toast"
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog"

export default function SoliciteDemoPage() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    telefone: "",
    mensagem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const { toast } = useToast()
  const [showConfirmation, setShowConfirmation] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Here you would typically send the form data to your backend
      // For now, we'll just simulate a successful submission
      await new Promise((resolve) => setTimeout(resolve, 1000))

      setShowConfirmation(true)
    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar sua solicitação. Por favor, tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Solicite uma Demonstração</h1>
          <div className="max-w-2xl mx-auto bg-white p-8 rounded-lg shadow-md">
            <p className="text-lg mb-6 text-center">
              Descubra como o Arrematei pode revolucionar sua participação em licitações. Preencha o formulário abaixo e
              nossa equipe entrará em contato para agendar uma demonstração personalizada.
            </p>
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="block mb-2 font-medium">
                  Nome completo
                </label>
                <Input
                    type="text"
                    id="nome"
                    name="nome"
                    placeholder="Seu nome completo"
                    required
                    value={formData.nome}
                    onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="email" className="block mb-2 font-medium">
                  E-mail profissional
                </label>
                <Input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="seu@email.com"
                    required
                    value={formData.email}
                    onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="empresa" className="block mb-2 font-medium">
                  Empresa
                </label>
                <Input
                    type="text"
                    id="empresa"
                    name="empresa"
                    placeholder="Nome da sua empresa"
                    required
                    value={formData.empresa}
                    onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="telefone" className="block mb-2 font-medium">
                  Telefone
                </label>
                <Input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    placeholder="(00) 00000-0000"
                    required
                    value={formData.telefone}
                    onChange={handleChange}
                />
              </div>
              <div>
                <label htmlFor="mensagem" className="block mb-2 font-medium">
                  Mensagem (opcional)
                </label>
                <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Conte-nos mais sobre suas necessidades"
                    rows={4}
                    value={formData.mensagem}
                    onChange={handleChange}
                />
              </div>
              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Solicitar Demonstração"}
              </Button>
            </form>
          </div>
        </div>
        <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Solicitação Enviada</AlertDialogTitle>
              <AlertDialogDescription>
                Obrigado pelo seu interesse! Entraremos em contato em breve para agendar sua demonstração.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setShowConfirmation(false)}>OK</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
  )
}

