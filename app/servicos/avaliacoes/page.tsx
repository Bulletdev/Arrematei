import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Search, FileText, BarChart, ArrowRight } from "lucide-react"

export default function AvaliacoesPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Avaliações Profissionais</h1>
            <p className="text-lg text-gray-600 mb-12">
              Avaliações precisas e detalhadas para diversos tipos de bens, realizadas por profissionais especializados.
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Avaliações Confiáveis</h2>
                <p className="text-gray-600 mb-6">
                  Nossos especialistas realizam avaliações detalhadas e precisas de diversos tipos de bens, fornecendo
                  relatórios completos que ajudam na tomada de decisões em licitações e negociações.
                </p>
                <ul className="space-y-3 mb-6">
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Avaliações imparciais e objetivas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Relatórios detalhados com documentação fotográfica</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-3 mt-1">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-gray-600">Profissionais certificados em diversas áreas</span>
                  </li>
                </ul>
                <Link
                  href="/contato"
                  className="inline-flex items-center rounded-md bg-emerald-600 px-6 py-3 text-white font-medium hover:bg-emerald-700 transition-colors self-start"
                >
                  Solicitar Avaliação <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>

              <div className="relative h-[400px] rounded-xl overflow-hidden">
                <Image
                  src="/placeholder.svg?height=800&width=600"
                  alt="Avaliações Profissionais"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-3 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-md p-6">
                <Search className="h-10 w-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Inspeção Detalhada</h3>
                <p className="text-gray-600">
                  Análise minuciosa do bem, identificando características, estado de conservação e possíveis problemas.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <FileText className="h-10 w-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Relatório Completo</h3>
                <p className="text-gray-600">
                  Documentação detalhada com fotos, descrições técnicas e estimativa de valor de mercado.
                </p>
              </div>

              <div className="bg-white rounded-xl shadow-md p-6">
                <BarChart className="h-10 w-10 text-emerald-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-800 mb-2">Análise de Mercado</h3>
                <p className="text-gray-600">
                  Comparativo com itens similares no mercado e tendências de valorização ou depreciação.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Tipos de Avaliações</h2>
              <div className="grid md:grid-cols-2 gap-6">
                {[
                  { title: "Imóveis", desc: "Residenciais, comerciais e terrenos" },
                  { title: "Veículos", desc: "Carros, motos, caminhões e máquinas" },
                  { title: "Arte e Antiguidades", desc: "Obras de arte, antiguidades e colecionáveis" },
                  { title: "Joias e Relógios", desc: "Avaliação de joias, pedras preciosas e relógios" },
                  { title: "Equipamentos", desc: "Maquinário industrial e equipamentos diversos" },
                  { title: "Empresas", desc: "Avaliação de negócios e ativos empresariais" },
                ].map((item, index) => (
                  <div key={index} className="bg-white rounded-lg p-4 flex items-start">
                    <div className="bg-emerald-100 p-2 rounded-full mr-3">
                      <svg className="h-5 w-5 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Precisa de uma Avaliação Profissional?</h2>
              <p className="text-gray-600 mb-6">
                Entre em contato conosco e solicite um orçamento para avaliação do seu bem.
              </p>
              <Link
                href="/contato"
                className="inline-flex items-center rounded-full bg-emerald-600 px-8 py-3 text-white font-medium hover:bg-emerald-700 transition-colors"
              >
                Solicitar Orçamento <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

