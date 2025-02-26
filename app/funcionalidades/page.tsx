import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Funcionalidades() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Funcionalidades do Arrematei</h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Automação de Lances</h2>
            <p className="mb-4">
              Nossa plataforma permite que você configure regras personalizadas para lances automáticos, garantindo que
              você nunca perca uma oportunidade, mesmo quando não estiver online.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Defina limites máximos de lance</li>
              <li>Crie estratégias de incremento personalizadas</li>
              <li>Receba notificações em tempo real</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Análise de Mercado</h2>
            <p className="mb-4">
              Tenha acesso a dados e insights valiosos sobre o mercado de licitações, permitindo que você tome decisões
              mais informadas e estratégicas.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Visualize tendências de preços</li>
              <li>Analise o comportamento dos concorrentes</li>
              <li>Identifique oportunidades de negócio</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Gestão de Prazos</h2>
            <p className="mb-4">
              Nunca mais perca um prazo importante. Nossa ferramenta de gestão de prazos mantém você atualizado sobre
              todas as datas críticas relacionadas às suas licitações.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Calendário integrado com alertas personalizáveis</li>
              <li>Lembretes por e-mail e SMS</li>
              <li>Visão geral de todos os prazos em um único painel</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-4">Integração com Portais</h2>
            <p className="mb-4">
              O Arrematei se integra perfeitamente com os principais portais de licitação, centralizando todas as
              informações em um único lugar.
            </p>
            <ul className="list-disc list-inside mb-4">
              <li>Sincronização automática de editais</li>
              <li>Participação em leilões eletrônicos diretamente pela plataforma</li>
              <li>Acompanhamento em tempo real do status das licitações</li>
            </ul>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/precos" passHref>
            <Button size="lg">Conheça Nossos Planos</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

