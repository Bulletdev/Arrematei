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

export default function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    empresa: "",
    assunto: "",
    mensagem: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showConfirmation, setShowConfirmation] = useState(false)
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/contato", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setFormData({ nome: "", email: "", empresa: "", assunto: "", mensagem: "" })
        setShowConfirmation(true)
      } else {
        throw new Error("Falha ao enviar mensagem")
      }
    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um problema ao enviar sua mensagem. Por favor, tente novamente.",
        variant: "destructive",
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 text-center">Entre em Contato</h1>

          <div className="max-w-2xl mx-auto">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="nome" className="block mb-2 font-medium">
                  Nome
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
                  E-mail
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
                    value={formData.empresa}
                    onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="assunto" className="block mb-2 font-medium">
                  Assunto
                </label>
                <Input
                    type="text"
                    id="assunto"
                    name="assunto"
                    placeholder="Assunto da mensagem"
                    required
                    value={formData.assunto}
                    onChange={handleChange}
                />
              </div>

              <div>
                <label htmlFor="mensagem" className="block mb-2 font-medium">
                  Mensagem
                </label>
                <Textarea
                    id="mensagem"
                    name="mensagem"
                    placeholder="Digite sua mensagem aqui"
                    rows={5}
                    required
                    value={formData.mensagem}
                    onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full" disabled={isSubmitting}>
                {isSubmitting ? "Enviando..." : "Enviar Mensagem"}
              </Button>
            </form>
          </div>

          <div className="mt-12 text-center">
            <h2 className="text-2xl font-semibold mb-4">Outras Formas de Contato</h2>
            <p className="mb-2">E-mail: contato@michaelbullet.com</p>
            <p className="mb-2">Telefone: +55 (75) 8336-0359</p>
            <p>Endereço: Centro, Feira de Santana - BA, 44051-000</p>
          </div>
        </div>

        <AlertDialog open={showConfirmation} onOpenChange={setShowConfirmation}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Mensagem Enviada</AlertDialogTitle>
              <AlertDialogDescription>Obrigado por entrar em contato. Retornaremos em breve!</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogAction onClick={() => setShowConfirmation(false)}>OK</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
  )
}

