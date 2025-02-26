import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const jobListings = [
  {
    title: "Desenvolvedor Full Stack",
    description:
      "Estamos procurando um desenvolvedor Full Stack experiente para se juntar à nossa equipe de tecnologia.",
    requirements: [
      "Experiência sólida com Java e Spring Boot",
      "Conhecimento em Golang para microsserviços",
      "Proficiência em Angular para desenvolvimento frontend",
      "Experiência com bancos de dados SQL e NoSQL",
      "Familiaridade com práticas de DevOps e CI/CD",
      "Experiência com metodologias ágeis",
      "Conhecimento em Docker e Kubernetes",
    ],
    location: "Remoto",
    type: "Tempo integral",
    applyLink: "https://exemplo-portal-empregos.com/vaga-dev-fullstack",
  },
  {
    title: "Especialista em Licitações",
    description: "Buscamos um especialista em licitações para auxiliar nossos clientes em processos licitatórios.",
    requirements: [
      "Conhecimento aprofundado da Lei de Licitações",
      "Experiência em elaboração de propostas técnicas e comerciais",
      "Habilidade em análise de editais",
      "Familiaridade com plataformas de licitações eletrônicas",
      "Familiaridade com processos de compras governamentais",
    ],
    location: "Feira de Santana, BA",
    type: "Tempo integral",
    applyLink: "https://exemplo-portal-empregos.com/vaga-especialista-licitacoes",
  },
  {
    title: "Analista de Marketing Digital",
    description:
      "Procuramos um analista de marketing digital para impulsionar nossa presença online e atrair novos clientes.",
    requirements: [
      "Experiência em SEO, SEM e mídia social",
      "Conhecimento em ferramentas de análise de dados",
      "Habilidade em criação de conteúdo para diferentes plataformas",
      "Experiência com campanhas de e-mail marketing",
    ],
    location: "Híbrido",
    type: "Tempo integral",
    applyLink: "https://exemplo-portal-empregos.com/vaga-analista-marketing",
  },
  {
    title: "Atendimento ao Cliente",
    description:
      "Estamos expandindo nossa equipe de atendimento ao cliente para fornecer suporte excepcional aos usuários da plataforma.",
    requirements: [
      "Excelentes habilidades de comunicação",
      "Experiência em atendimento ao cliente, preferencialmente em ambiente tech",
      "Capacidade de resolver problemas de forma eficiente",
      "Conhecimento básico de processos de licitação é um diferencial",
    ],
    location: "Remoto",
    type: "Tempo integral",
    applyLink: "https://exemplo-portal-empregos.com/vaga-atendimento-cliente",
  },
]

export default function Carreiras() {
  return (
    <main className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-grow container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-6">Carreiras na Arrematei</h1>
        <p className="text-lg text-gray-600 mb-8">
          Junte-se à nossa equipe e faça parte da revolução nas licitações online. Estamos sempre em busca de talentos
          apaixonados por tecnologia e inovação.
        </p>
        <div className="grid gap-6 md:grid-cols-2">
          {jobListings.map((job, index) => (
            <Card key={index} className="flex flex-col">
              <CardHeader>
                <CardTitle>{job.title}</CardTitle>
                <CardDescription>{job.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="flex space-x-2 mb-4">
                  <Badge variant="secondary">{job.location}</Badge>
                  <Badge variant="secondary">{job.type}</Badge>
                </div>
                <h3 className="font-semibold mb-2">Requisitos:</h3>
                <ul className="list-disc list-inside space-y-1 text-sm text-gray-600">
                  {job.requirements.map((req, reqIndex) => (
                    <li key={reqIndex}>{req}</li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button asChild className="w-full">
                  <Link href={job.applyLink} target="_blank" rel="noopener noreferrer">
                    Candidatar-se
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
      <Footer />
    </main>
  )
}

