import Link from "next/link"

export default function CTASection() {
  return (
    <section className="py-16 md:py-24 bg-emerald-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-20 -right-20 w-64 h-64 rounded-full bg-emerald-100"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full bg-teal-100"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Pronto para encontrar as melhores oportunidades?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Junte-se a milhares de pessoas que já estão aproveitando as vantagens da nossa plataforma de licitações.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/cadastro"
              className="rounded-full bg-emerald-600 px-8 py-4 text-white font-medium text-center hover:bg-emerald-700 transition-colors text-lg"
            >
              Solicite acesso
            </Link>
            <Link
              href="/solicitar-servico"
              className="rounded-full bg-white border border-emerald-600 px-8 py-4 text-emerald-600 font-medium text-center hover:bg-emerald-50 transition-colors text-lg"
            >
              Fale Conosco
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

