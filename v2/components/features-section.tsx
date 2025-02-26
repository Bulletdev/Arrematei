import { Zap, Shield, Clock, Award } from "lucide-react"

export default function FeaturesSection() {
  const features = [
    {
      icon: <Zap className="h-10 w-10 text-emerald-500" />,
      title: "Automatização de Lances",
      description: "Utilize nosso robô de lances para participar em múltiplos pregões eletrônicos ao mesmo tempo e defina o valor limite para seus itens.",
    },
    {
      icon: <Shield className="h-10 w-10 text-emerald-500" />,
      title: "Segurança Garantida",
      description: "Processos seguros e verificados para sua tranquilidade nas licitações.",
    },
    {
      icon: <Clock className="h-10 w-10 text-emerald-500" />,
      title: "Alertas Personalizados",
      description: "Receba notificações sobre licitações que correspondem aos seus interesses.",
    },
    {
      icon: <Award className="h-10 w-10 text-emerald-500" />,
      title: "Suporte Especializado",
      description: "Equipe de especialistas para auxiliar em todas as etapas do processo licitatório.",
    },
  ]

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">Por que escolher a Arrematei?</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Nossa plataforma oferece as melhores ferramentas para você participar de licitações com segurança e
            eficiência.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-emerald-50 to-teal-50 p-8 rounded-xl shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

