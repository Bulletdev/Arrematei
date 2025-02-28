import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Check } from "lucide-react"
import Link from "next/link"

const plans = [
  {
    name: "Básico",
    price: 99.99,
    features: ["Acesso a licitações básicas", "Suporte por email", "Análise mensal de 1 edital"],
    recommended: false,
  },
  {
    name: "Profissional",
    price: 199.99,
    features: [
      "Acesso a todas as licitações",
      "Suporte prioritário",
      "Análise mensal de 5 editais",
      "Consultoria mensal de 2 horas",
    ],
    recommended: true,
  },
  {
    name: "Enterprise",
    price: 499.99,
    features: [
      "Acesso ilimitado a licitações",
      "Suporte 24/7",
      "Análise ilimitada de editais",
      "Consultoria semanal de 4 horas",
      "Treinamento personalizado",
    ],
    recommended: false,
  },
]

export default function PlanosPage() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Nossos Planos</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Escolha o plano que melhor se adapta às necessidades da sua empresa.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {plans.map((plan, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl shadow-md p-8 ${plan.recommended ? "ring-2 ring-emerald-500" : ""}`}
              >
                {plan.recommended && (
                  <span className="bg-emerald-500 text-white px-3 py-1 rounded-full text-sm font-semibold mb-4 inline-block">
                    Recomendado
                  </span>
                )}
                <h2 className="text-2xl font-bold text-gray-800 mb-4">{plan.name}</h2>
                <p className="text-4xl font-bold text-emerald-600 mb-6">
                  R$ {plan.price.toFixed(2)}
                  <span className="text-base font-normal text-gray-600">/mês</span>
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-emerald-500 mr-2" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href="/solicitar-servico"
                  className={`block text-center py-2 px-4 rounded-full font-semibold ${
                    plan.recommended
                      ? "bg-emerald-600 text-white hover:bg-emerald-700"
                      : "bg-gray-200 text-gray-800 hover:bg-gray-300"
                  } transition-colors`}
                >
                  Escolher Plano
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

