import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      <main>
        <section className="container mx-auto px-4 py-20 text-center">
          <h1 className="text-5xl font-bold mb-6 text-gray-800">Simplifique suas Licitações com Arrematei</h1>
          <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
            Automatize, gerencie e vença mais licitações com nossa plataforma inteligente.
          </p>
          <Link href="/contato" passHref>
            <Button size="lg" className="mr-4">
              Solicite uma Demo
            </Button>
          </Link>
          <Link href="/contato" passHref>
            <Button variant="outline" size="lg">
              Fale com um Especialista
            </Button>
          </Link>
        </section>

        <section id="funcionalidades" className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">Nossas Funcionalidades</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Automação de Lances</h3>
                <p className="text-gray-600">
                  Defina regras personalizadas e deixe nossa plataforma fazer os lances por você.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Análise de Mercado</h3>
                <p className="text-gray-600">
                  Obtenha insights valiosos sobre o mercado de licitações e seus concorrentes.
                </p>
              </div>
              <div className="text-center">
                <div className="bg-blue-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-4">
                  <svg
                    className="w-10 h-10 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold mb-2">Gestão de Prazos</h3>
                <p className="text-gray-600">
                  Nunca mais perca um prazo importante com nosso sistema de alertas e lembretes.
                </p>
              </div>
            </div>
            <div className="text-center mt-12">
              <Link href="/funcionalidades" passHref>
                <Button>Ver Todas as Funcionalidades</Button>
              </Link>
            </div>
          </div>
        </section>

        <section className="py-20 bg-blue-50">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row items-center">
              <div className="md:w-1/2 mb-8 md:mb-0">
                <Image
                  src="/placeholder.svg"
                  alt="Dashboard Arrematei"
                  width={500}
                  height={300}
                  className="rounded-lg shadow-lg"
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <h2 className="text-3xl font-bold mb-6 text-gray-800">Potencialize seus Resultados</h2>
                <p className="text-gray-600 mb-6">
                  Com o Arrematei, você terá acesso a ferramentas poderosas que aumentarão suas chances de sucesso em
                  licitações. Nossa plataforma combina automação inteligente, análise de dados e gestão eficiente para
                  que você possa focar no que realmente importa: crescer seu negócio.
                </p>
                <Link href="/sobre" passHref>
                  <Button>Saiba Mais</Button>
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section id="contato" className="py-20">
          <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-8 text-gray-800">Pronto para Revolucionar suas Licitações?</h2>
            <p className="text-xl mb-8 text-gray-600 max-w-2xl mx-auto">
              Junte-se a centenas de empresas que já estão usando o Arrematei para vencer mais licitações e crescer seus
              negócios.
            </p>
            <Link href="/contato" passHref>
              <Button size="lg" className="mr-4">
                Solicite uma Demo
              </Button>
            </Link>
            <Link href="/contato" passHref>
              <Button variant="outline" size="lg">
                Fale com um Especialista
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}

