import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Lightbulb, Users, TrendingUp, ArrowRight } from "lucide-react"

export default function ConsultoriaPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Consultoria Especializada</h1>
            <p className="text-lg text-gray-600 mb-12">
              Conte com nossa equipe de especialistas para orientação personalizada em licitações e investimentos.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Consultoria Especializada"
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Consultoria Personalizada</h2>
                <p className="text-gray-600 mb-6">
                  Nossa equipe de consultores especializados está pronta para ajudar você a tomar as melhores decisões
                  em licitações, identificando oportunidades e evitando riscos desnecessários.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Análise detalhada de oportunidades</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Estratégias personalizadas para cada tipo de leilão</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Acompanhamento durante todo o processo</span>
                  </li>
                </ul>
                <Link
                  href="/contato"
                  className="inline-flex items-center rounded-md bg-emerald-600 px-6 py-3 text-white font-medium hover:bg-emerald-700 transition-colors self-start"
                >
                  Solicitar Consultoria <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-md p-6">
                <Lightbulb className="h-10 w-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Consultoria Estratégica</h3>
                <p className="text-gray-600">
                  Desenvolvemos estratégias personalizadas para maximizar suas chances de sucesso em licitações
                  específicos.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <Users className="h-10 w-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Consultoria para Empresas</h3>
                <p className="text-gray-600">
                  Soluções específicas para empresas que buscam oportunidades em licitações corporativos e governamentais.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <TrendingUp className="h-10 w-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Análise de Mercado</h3>
                <p className="text-gray-600">
                  Relatórios detalhados sobre tendências de mercado e previsões para diferentes categorias de licitações.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Como Funciona Nossa Consultoria</h2>
              <div className="grid md:grid-cols-4 gap-4">
                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="bg-emerald-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-600 font-bold">1</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Contato Inicial</h3>
                  <p className="text-sm text-gray-600">Entendemos suas necessidades e objetivos</p>
                </div>

                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="bg-emerald-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-600 font-bold">2</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Análise</h3>
                  <p className="text-sm text-gray-600">Avaliamos oportunidades alinhadas ao seu perfil</p>
                </div>

                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="bg-emerald-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-600 font-bold">3</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Estratégia</h3>
                  <p className="text-sm text-gray-600">Desenvolvemos um plano de ação personalizado</p>
                </div>

                <div className="bg-white rounded-lg p-6 text-center">
                  <div className="bg-emerald-100 h-12 w-12 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-emerald-600 font-bold">4</span>
                  </div>
                  <h3 className="font-semibold text-gray-800 mb-2">Acompanhamento</h3>
                  <p className="text-sm text-gray-600">Suporte contínuo durante todo o processo</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Pronto para uma Consultoria Especializada?</h2>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco e agende uma consulta com nossos especialistas.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center rounded-full bg-emerald-600 px-8 py-3 text-white font-medium hover:bg-emerald-700 transition-colors"
              >
                Agendar Consulta <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

