import Link from "next/link"
import Image from "next/image"

export default function HeroSection() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-b from-emerald-50 to-white">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-emerald-100 opacity-50"></div>
        <div className="absolute bottom-10 right-20 w-80 h-80 rounded-full bg-teal-100 opacity-60"></div>
        <div className="absolute top-40 right-10 w-40 h-40 rounded-full bg-yellow-100 opacity-40"></div>
      </div>

      <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
        <div className="grid md:grid-cols-2 gap-8 items-center">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 leading-tight">
              Simplifique suas <span className="text-emerald-600">licitações</span> com a Arrematei
            </h1>
            <p className="text-lg md:text-xl text-gray-600">
              Nossa plataforma conecta você às melhores oportunidades de licitações do país, com segurança e facilidade
              para realizar seus negócios.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/solicitar-servico"
                className="rounded-full bg-emerald-600 px-8 py-3 text-white font-medium text-center hover:bg-emerald-700 transition-colors"
              >
                Comece Agora
              </Link>
              <Link
                href="/como-funciona"
                className="rounded-full bg-white border border-emerald-600 px-8 py-3 text-emerald-600 font-medium text-center hover:bg-emerald-50 transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px]">
            <Image
              src="/placeholder.svg?height=500&width=600"
              alt="Profissionais trabalhando em licitações"
              fill
              className="object-contain"
              priority
            />
          </div>
        </div>
      </div>

      {/* Wave divider */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
        <svg
          className="relative block w-full h-12 md:h-24"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"
            className="fill-white"
          ></path>
        </svg>
      </div>
    </div>
  )
}

