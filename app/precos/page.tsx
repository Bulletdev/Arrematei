import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Precos() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Planos e Preços</h1>
        <p className="text-xl text-center mb-12">Escolha o plano ideal para o seu negócio</p>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Básico</h2>
            <p className="text-4xl font-bold mb-4">
              R$ 99<span className="text-lg font-normal">/mês</span>
            </p>
            <ul className="mb-8">
              <li className="mb-2">Até 10 licitações simultâneas</li>
              <li className="mb-2">Automação de lances básica</li>
              <li className="mb-2">Análise de mercado limitada</li>
              <li className="mb-2">Suporte por e-mail</li>
            </ul>
            <Link href="/contato" passHref>
              <Button className="w-full">Começar Agora</Button>
            </Link>
          </div>

          <div className="bg-blue-600 text-white p-8 rounded-lg shadow-md transform scale-105">
            <h2 className="text-2xl font-semibold mb-4">Profissional</h2>
            <p className="text-4xl font-bold mb-4">
              R$ 299<span className="text-lg font-normal">/mês</span>
            </p>
            <ul className="mb-8">
              <li className="mb-2">Até 50 licitações simultâneas</li>
              <li className="mb-2">Automação de lances avançada</li>
              <li className="mb-2">Análise de mercado completa</li>
              <li className="mb-2">Suporte prioritário</li>
              <li className="mb-2">Integração com 3 portais</li>
            </ul>
            <Link href="/contato" passHref>
              <Button className="w-full bg-white text-blue-600 hover:bg-gray-100">Começar Agora</Button>
            </Link>
          </div>

          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Enterprise</h2>
            <p className="text-4xl font-bold mb-4">Personalizado</p>
            <ul className="mb-8">
              <li className="mb-2">Licitações ilimitadas</li>
              <li className="mb-2">Automação de lances personalizada</li>
              <li className="mb-2">Análise de mercado avançada</li>
              <li className="mb-2">Suporte dedicado 24/7</li>
              <li className="mb-2">Integração com todos os portais</li>
              <li className="mb-2">API personalizada</li>
            </ul>
            <Link href="/contato" passHref>
              <Button className="w-full">Fale Conosco</Button>
            </Link>
          </div>
        </div>

        <div className="text-center mt-12">
          <p className="mb-4">Não tem certeza de qual plano escolher?</p>
          <Link href="/contato" passHref>
            <Button variant="outline">Agende uma Demonstração</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

