import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { CheckCircle, Users, FileText, Award } from "lucide-react"
import Link from "next/link"

export default function ComoFuncionaPage() {
  const steps = [
    {
      icon: <Users className="h-12 w-12 text-emerald-500" />,
      title: "Cadastro",
      description: "Crie sua conta gratuitamente na plataforma Arrematei.",
    },
    {
      icon: <FileText className="h-12 w-12 text-emerald-500" />,
      title: "Busca de Licitações",
      description: "Encontre licitações relevantes para o seu negócio usando nossos filtros avançados.",
    },
    {
      icon: <CheckCircle className="h-12 w-12 text-emerald-500" />,
      title: "Participação",
      description: "Envie suas propostas e documentos diretamente pela plataforma.",
    },
    {
      icon: <Award className="h-12 w-12 text-emerald-500" />,
      title: "Acompanhamento",
      description: "Acompanhe o status das licitações e receba notificações em tempo real.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Como Funciona</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Participar de licitações nunca foi tão fácil. Siga os passos abaixo para começar a usar a plataforma
            Arrematei e aproveitar todas as oportunidades.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {steps.map((step, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6 flex flex-col items-center text-center">
                <div className="mb-4">{step.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{step.title}</h3>
                <p className="text-gray-600">{step.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pronto para começar?</h2>
            <p className="text-lg text-gray-600 mb-6">
             Solicite acesso agora e comece a participar de licitações de forma simples e eficiente.
            </p>
            <Link
              href="/solicitar-servico"
              className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
            >
              Solicite acesso à  plataforma
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

