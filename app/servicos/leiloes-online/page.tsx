import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"
import Link from "next/link"
import { Gavel, Shield, ArrowRight } from "lucide-react"

export default function LeiloesOnlinePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Licitações Online</h1>
            <p className="text-lg text-gray-600 mb-12">
              Participe de licitações de forma segura e conveniente, diretamente do conforto da sua casa.
            </p>

            <div className="relative rounded-xl overflow-hidden mb-12">
              <div className="aspect-w-16 aspect-h-9 relative h-[300px]">
                <Image
                  src="/placeholder.svg?height=600&width=1200"
                  alt="Licitações Online"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h2 className="text-2xl font-bold mb-2">Pregões em Destaque</h2>
                  <p>Confira nossas oportunidades mais recentes e não perca os melhores negócios.</p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <Gavel className="h-10 w-10 text-emerald-500 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Como Funciona</h2>
                <p className="text-gray-600 mb-4">
                  Basta se cadastrar, verificar os itens disponíveis e
                  fazer seus lances.
                </p>
                <ol className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      1
                    </span>
                    <span>Cadastre-se na plataforma</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      2
                    </span>
                    <span>Navegue pelos pregões disponíveis</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      3
                    </span>
                    <span>Faça seus lances nos itens de interesse</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-emerald-100 text-emerald-600 rounded-full h-6 w-6 flex items-center justify-center mr-2 flex-shrink-0">
                      4
                    </span>
                    <span>Se vencer, finalize a compra de forma segura</span>
                  </li>
                </ol>
              </div>

              <div className="bg-white rounded-xl shadow-md p-8">
                <Shield className="h-10 w-10 text-emerald-500 mb-4" />
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Vantagens</h2>
                <p className="text-gray-600 mb-4">
                  Participar de pregões online na Arrematei oferece diversas vantagens em relação aos presenciais.
                </p>
                <ul className="space-y-2 text-gray-600">
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Comodidade: participe de qualquer lugar</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Segurança: transações protegidas</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Variedade: acesso a pregões de todo o país</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Transparência: informações detalhadas sobre os itens</span>
                  </li>
                  <li className="flex items-start">
                    <div className="bg-emerald-100 p-1 rounded-full mr-2 flex-shrink-0">
                      <svg className="h-4 w-4 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span>Economia: oportunidades de grandes negócios</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Categorias de Pregões</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Medicamentos",
                  "Veículos",
                  "Eletrônicos",
                  "Máquinas",
                  "Materiais de Limpeza",
                  "Alimentos",
                  "Joias",
                  "Mobiliário",
                  "Colecionáveis",
                  "Outros",
                ].map((categoria) => (
                  <Link
                    key={categoria}
                    href={`/leiloes/categoria/${categoria.toLowerCase()}`}
                    className="bg-white rounded-lg p-4 text-center hover:shadow-md transition-shadow"
                  >
                    <span className="text-emerald-600 font-medium">{categoria}</span>
                  </Link>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-md p-8 text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Pronto para Começar?</h2>
              <p className="text-gray-600 mb-6">
                Cadastre-se agora e comece a participar dos melhores leilões online do Brasil.
              </p>
              <Link
                href="/solicitar-servico"
                className="inline-flex items-center rounded-full bg-emerald-600 px-8 py-3 text-white font-medium hover:bg-emerald-700 transition-colors"
              >
                Solicite Acesso <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

