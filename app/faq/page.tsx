import { Button } from "@/components/ui/button"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export default function FAQ() {
  const faqs = [
    {
      pergunta: "O que é o Arrematei?",
      resposta:
        "O Arrematei é uma plataforma de automação e gestão de licitações que ajuda empresas a participar e vencer mais licitações públicas de forma eficiente e estratégica.",
    },
    {
      pergunta: "Como funciona a automação de lances?",
      resposta:
        "Nossa plataforma permite que você defina regras personalizadas para lances automáticos. Você pode configurar limites de preço, incrementos e estratégias específicas para cada licitação. O sistema então fará os lances automaticamente de acordo com essas regras, garantindo que você não perca oportunidades mesmo quando não estiver online.",
    },
    {
      pergunta: "Quais são os planos disponíveis?",
      resposta:
        "Oferecemos três planos principais: Básico, Profissional e Enterprise. Cada plano é projetado para atender às necessidades de diferentes tamanhos de empresas e volumes de licitações. Detalhes específicos sobre cada plano podem ser encontrados em nossa página de Preços.",
    },
    {
      pergunta: "O Arrematei é compatível com todos os portais de licitação?",
      resposta:
        "O Arrematei é compatível com a maioria dos principais portais de licitação do Brasil. Estamos constantemente expandindo nossa lista de integrações. Se há um portal específico que você precisa, entre em contato conosco para verificar a compatibilidade ou solicitar uma integração.",
    },
    {
      pergunta: "Como posso começar a usar o Arrematei?",
      resposta:
        "Para começar, basta se cadastrar em nosso site e escolher um plano que melhor atenda às suas necessidades. Após a inscrição, você terá acesso imediato à plataforma. Oferecemos um tutorial inicial e suporte dedicado para ajudar você a configurar sua conta e começar a usar todas as funcionalidades.",
    },
    {
      pergunta: "Vocês oferecem treinamento ou suporte?",
      resposta:
        "Sim, oferecemos treinamento e suporte para todos os nossos clientes. Dependendo do plano escolhido, você terá acesso a tutoriais em vídeo, documentação detalhada, suporte por e-mail e, nos planos mais avançados, suporte telefônico e sessões de treinamento personalizadas.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Perguntas Frequentes</h1>

        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <AccordionItem value={`item-${index}`} key={index}>
              <AccordionTrigger>{faq.pergunta}</AccordionTrigger>
              <AccordionContent>{faq.resposta}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="text-center mt-12">
          <p className="mb-4">Não encontrou a resposta que procurava?</p>
          <Button variant="outline">Entre em Contato</Button>
        </div>
      </div>
    </div>
  )
}

