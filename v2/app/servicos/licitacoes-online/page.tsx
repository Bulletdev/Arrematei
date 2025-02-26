import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Search, FileText, Bell, BarChart } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function LicitacoesOnlinePage() {
  const features = [
    {
      icon: <Search className="h-10 w-10 text-emerald-500" />,
      title: "Busca Avançada",
      description: "Encontre licitações relevantes com nossos filtros personalizados.",
    },
    {
      icon: <FileText className="h-10 w-10 text-emerald-500" />,
      title: "Documentação Digital",
      description: "Envie e gerencie todos os documentos necessários online.",
    },
    {
      icon: <Bell className="h-10 w-10 text-emerald-500" />,
      title: "Alertas Personalizados",
      description: "Receba notificações sobre novas licitações de seu interesse.",
    },
    {
      icon: <BarChart className="h-10 w-10 text-emerald-500" />,
      title: "Análise de Mercado",
      description: "Acesse relatórios e estatísticas para tomar decisões informadas.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Licitações Online</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Participe de licitações de forma eficiente e segura com nossa plataforma líder de mercado.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Simplifique seu processo de licitação</h2>
              <p className="text-gray-600">
                Nossa plataforma de licitações online oferece uma experiência intuitiva e eficiente para empresas de
                todos os tamanhos. Com ferramentas avançadas e suporte especializado, tornamos o processo de
                participação em licitações mais acessível e transparente.
              </p>
              <Link
                href="/solicitar-servico"
                className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
              >
                Comece Agora
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Plataforma de Licitações Online"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {features.map((feature, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pronto para simplificar suas licitações?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Junte-se a milhares de empresas que já estão usando a Arrematei para participar de licitações online.
            </p>
            <Link
              href="/solicitar-servico"
              className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
            >
              Solicite acesso
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

