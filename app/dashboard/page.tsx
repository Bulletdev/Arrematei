import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { CalendarDays, FileText, Settings, Users } from "lucide-react"
import Link from "next/link"

export default function DashboardPage() {
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md">
        <div className="p-4">
          <h2 className="text-2xl font-bold text-gray-800">Arrematei</h2>
        </div>
        <nav className="mt-6">
          <Link href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <Users className="inline-block mr-2" size={20} />
            Licitações Ativas
          </Link>
          <Link href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <FileText className="inline-block mr-2" size={20} />
            Relatórios
          </Link>
          <Link href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <CalendarDays className="inline-block mr-2" size={20} />
            Calendário
          </Link>
          <Link href="#" className="block py-2 px-4 text-gray-600 hover:bg-gray-200">
            <Settings className="inline-block mr-2" size={20} />
            Configurações
          </Link>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Painel de Controle</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
          <Card>
            <CardHeader>
              <CardTitle>Licitações Ativas</CardTitle>
              <CardDescription>Total de processos em andamento</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">12</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Lances Automáticos</CardTitle>
              <CardDescription>Lances programados para hoje</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">5</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Taxa de Sucesso</CardTitle>
              <CardDescription>Licitações ganhas este mês</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="text-4xl font-bold">75%</p>
            </CardContent>
          </Card>
        </div>

        <Tabs defaultValue="atividades" className="w-full">
          <TabsList>
            <TabsTrigger value="atividades">Atividades Recentes</TabsTrigger>
            <TabsTrigger value="acoes">Ações Rápidas</TabsTrigger>
          </TabsList>
          <TabsContent value="atividades">
            <Card>
              <CardHeader>
                <CardTitle>Atividades Recentes</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  <li className="flex justify-between items-center">
                    <span>Lance automático realizado - Licitação #1234</span>
                    <span className="text-sm text-gray-500">Há 2 horas</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Novo documento adicionado - Licitação #5678</span>
                    <span className="text-sm text-gray-500">Há 4 horas</span>
                  </li>
                  <li className="flex justify-between items-center">
                    <span>Licitação #9012 finalizada - Vencedor!</span>
                    <span className="text-sm text-gray-500">Há 1 dia</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="acoes">
            <Card>
              <CardHeader>
                <CardTitle>Ações Rápidas</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div>
                  <label htmlFor="quick-search" className="block text-sm font-medium text-gray-700 mb-1">
                    Busca Rápida de Licitação
                  </label>
                  <div className="flex space-x-2">
                    <Input id="quick-search" placeholder="Número da Licitação" />
                    <Button>Buscar</Button>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="outline">Novo Lance Automático</Button>
                  <Button variant="outline">Gerar Relatório</Button>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}

