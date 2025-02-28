import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { BookOpen, Users, BadgeIcon as Certificate, Zap } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

export default function TreinamentosPage() {
  const courses = [
    {
      icon: <BookOpen className="h-10 w-10 text-emerald-500" />,
      title: "Fundamentos de Licitações",
      description: "Aprenda os conceitos básicos e a legislação essencial para participar de licitações.",
    },
    {
      icon: <Users className="h-10 w-10 text-emerald-500" />,
      title: "Elaboração de Propostas",
      description: "Técnicas avançadas para criar propostas competitivas e convincentes.",
    },
    {
      icon: <Certificate className="h-10 w-10 text-emerald-500" />,
      title: "Compliance em Licitações",
      description: "Entenda as melhores práticas de conformidade para evitar problemas legais.",
    },
    {
      icon: <Zap className="h-10 w-10 text-emerald-500" />,
      title: "Estratégias Avançadas",
      description: "Aprimore suas habilidades com táticas avançadas para vencer licitações.",
    },
  ]

  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-grow bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Treinamentos</h1>
          <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
            Aprimore suas habilidades e conhecimentos em licitações com nossos treinamentos especializados.
          </p>

          <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold text-gray-800">Capacitação de excelência</h2>
              <p className="text-gray-600">
                Nossos treinamentos são ministrados por especialistas do mercado, combinando teoria e prática para
                proporcionar uma experiência de aprendizado completa. Seja você um iniciante ou um profissional
                experiente, temos cursos que atenderão às suas necessidades.
              </p>
              <Link
                href="/contato"
                className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
              >
                Saiba Mais
              </Link>
            </div>
            <div className="relative h-[300px] md:h-[400px]">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Treinamentos em Licitações"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {courses.map((course, index) => (
              <div key={index} className="bg-white rounded-xl shadow-md p-6">
                <div className="mb-4">{course.icon}</div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">{course.title}</h3>
                <p className="text-gray-600">{course.description}</p>
              </div>
            ))}
          </div>

          <div className="bg-emerald-100 rounded-xl p-8 text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Pronto para aprimorar suas habilidades?</h2>
            <p className="text-lg text-gray-600 mb-6">
              Invista em seu conhecimento e aumente suas chances de sucesso em licitações.
            </p>
            <Link
              href="/contato"
              className="inline-block bg-emerald-600 text-white font-semibold px-6 py-3 rounded-full hover:bg-emerald-700 transition-colors"
            >
              Inscreva-se Agora
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  )
}

