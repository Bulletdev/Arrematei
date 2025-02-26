import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { FileSearch, CheckCircle, AlertTriangle, HelpCircle } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function AnaliseDeEditaisPage() {
  const benefits = [
    {
      icon: <FileSearch className="h-10 w-10 text-emerald-500" />,
      title: "Análise Detalhada",
      description: "Revisão minuciosa de todos os aspectos do edital.",
    },
    {
      icon: <CheckCircle className="h-10 w-10 text-emerald-500" />,
      title: "Conformidade Legal",
      description: "Garantia de que sua proposta atenda a todos os requisitos legais.",
    },
    {
      icon: <AlertTriangle className="h-10 w-10 text-emerald-500" />,
      title: "Identificação de Riscos",
      description: "Detecção de cláusulas problemáticas ou restritivas.",
    },
    {
      icon: <HelpCircle className="h-10 w-10 text-emerald-500" />,
      title: "Suporte Especializado",
      description: "Esclarecimento de dúvidas e orientação personalizada.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Análise de Editais</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Maximize suas chances de sucesso em licitações com nossa análise especializada de editais.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Entenda cada detalhe do edital</h2>
              <p className="text-gray-600">
                Nossa equipe de especialistas analisa minuciosamente cada edital, identificando oportunidades, riscos e
                requisitos cruciais. Com este serviço, você terá uma compreensão clara e completa de cada licitação,
                permitindo uma participação mais estratégica e competitiva.
              </p>
              <Link
                href="/contato"
                className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
              >
                Solicitar Análise
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Análise de Editais"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="mb-4">{benefit.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">
              Pronto para otimizar sua participação em licitações?
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Conte com nossa expertise para analisar seus editais e aumentar suas chances de sucesso.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
            >
              Fale com um Especialista
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

