import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Image from "next/image"

export default function SobrePage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">Sobre Nós</h1>
            <p className="text-lg text-gray-600 mb-8">
              Conheça a história e a missão da Arrematei, a plataforma líder em licitações online no Brasil.
            </p>

            <div className="bg-white rounded-xl shadow-md overflow-hidden mb-12">
              <div className="md:flex">
                <div className="md:shrink-0">
                  <div className="h-48 w-full md:h-full md:w-48 relative">
                    <Image
                      src="/placeholder.svg?height=300&width=300"
                      alt="Equipe Arrematei"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className="p-8">
                  <div className="uppercase tracking-wide text-sm text-emerald-600 font-semibold">Nossa História</div>
                  <p className="mt-2 text-gray-600">
                    Fundada em 2020, a Arrematei nasceu com o objetivo de democratizar o acesso a licitações no Brasil,
                    tornando o processo mais transparente, seguro e acessível para todos. Desde então, temos crescido
                    constantemente, conectando compradores e vendedores em uma plataforma inovadora.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossa Missão</h2>
                <p className="text-gray-600">
                  Facilitar o acesso a oportunidades de negócios através de licitações, proporcionando uma experiência
                  segura, transparente e eficiente para todos os usuários.
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-md p-8">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossa Visão</h2>
                <p className="text-gray-600">
                  Ser a plataforma de licitações mais confiável e inovadora do Brasil, reconhecida pela excelência em
                  serviços e pela satisfação dos nossos clientes.
                </p>
              </div>
            </div>

            <div className="bg-emerald-50 rounded-xl p-8 mb-12">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossos Valores</h2>
              <ul className="grid md:grid-cols-2 gap-4">
                <li className="flex items-start">
                  <div className="bg-emerald-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Transparência</h3>
                    <p className="text-gray-600">Informações claras e acessíveis em todos os processos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Segurança</h3>
                    <p className="text-gray-600">Proteção de dados e transações seguras para todos.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Inovação</h3>
                    <p className="text-gray-600">Busca constante por melhorias e novas soluções.</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <div className="bg-emerald-500 rounded-full p-1 mr-3 mt-1">
                    <svg className="h-4 w-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800">Excelência</h3>
                    <p className="text-gray-600">Compromisso com a qualidade em todos os serviços.</p>
                  </div>
                </li>
              </ul>
            </div>

            <div className="text-center">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Nossa Equipe</h2>
              <p className="text-gray-600 mb-8">
                Contamos com profissionais experientes e dedicados, comprometidos em oferecer a melhor experiência para
                nossos usuários.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {[1,].map((i) => (
                  <div key={i} className="text-center">
                    <div className="relative h-32 w-32 mx-auto rounded-full overflow-hidden mb-4">
                      <Image
                        src={`/michael.jfif?height=150&width=150`}
                        alt={`Membro da equipe `}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="font-semibold text-gray-800">Michael Douglas</h3>
                    <p className="text-emerald-600">Fundador & Diretor de Desenvolvimento</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

