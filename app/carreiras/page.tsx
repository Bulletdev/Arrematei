import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Carreiras() {
  const vagas = [
    { titulo: "Desenvolvedor Full Stack", departamento: "Tecnologia", localizacao: "Remoto" },
    { titulo: "Especialista em Licitações", departamento: "Operações", localizacao: "São Paulo, SP" },
    { titulo: "Designer de UX/UI", departamento: "Produto", localizacao: "Remoto" },
    { titulo: "Analista de Marketing Digital", departamento: "Marketing", localizacao: "Remoto" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Carreiras no Arrematei</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Junte-se à Nossa Equipe</h2>
          <p className="mb-4">
            No Arrematei, estamos sempre em busca de talentos excepcionais para nos ajudar a revolucionar o mercado de
            licitações. Se você é apaixonado por tecnologia, inovação e deseja fazer a diferença, temos um lugar para
            você!
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Por que trabalhar no Arrematei?</h2>
          <ul className="list-disc list-inside mb-4">
            <li>Ambiente de trabalho dinâmico e inovador</li>
            <li>Oportunidades de crescimento e desenvolvimento profissional</li>
            <li>Benefícios competitivos, incluindo plano de saúde e odontológico</li>
            <li>Flexibilidade de horário e opções de trabalho remoto</li>
            <li>Cultura de feedback e aprendizado contínuo</li>
          </ul>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Vagas Abertas</h2>
          <div className="grid md:grid-cols-2 gap-6">
            {vagas.map((vaga, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{vaga.titulo}</h3>
                <p className="mb-2">Departamento: {vaga.departamento}</p>
                <p className="mb-4">Localização: {vaga.localizacao}</p>
                <Link href="/contato" passHref>
                  <Button>Candidatar-se</Button>
                </Link>
              </div>
            ))}
          </div>
        </div>

        <div className="text-center">
          <p className="mb-4">Não encontrou a vaga ideal? Envie-nos seu currículo mesmo assim!</p>
          <Link href="/contato" passHref>
            <Button variant="outline">Enviar Currículo</Button>
          </Link>
        </div>
      </div>
    </div>
  )
}

