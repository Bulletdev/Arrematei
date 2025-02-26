import Image from "next/image"

export default function Sobre() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Sobre o Arrematei</h1>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nossa Missão</h2>
          <p className="mb-4">
            No Arrematei, nossa missão é simplificar e otimizar o processo de participação em licitações públicas para
            empresas de todos os tamanhos. Acreditamos que a tecnologia pode nivelar o campo de jogo, permitindo que
            mais empresas participem e vençam licitações de forma justa e eficiente.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nossa História</h2>
          <p className="mb-4">
            Fundado em 2023 por um grupo de empreendedores com vasta experiência em licitações e tecnologia, o Arrematei
            nasceu da frustração com os processos manuais e ineficientes que dominavam o mercado de licitações.
          </p>
          <p className="mb-4">
            Desde então, temos trabalhado incansavelmente para desenvolver uma plataforma que não apenas automatiza os
            processos, mas também fornece insights valiosos para ajudar nossos clientes a tomarem decisões mais
            informadas.
          </p>
        </div>

        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-4">Nossa Equipe</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <Image
                src="/michael.jfif"
                alt="Michael Douglas"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold">Michael Douglas</h3>
              <p>CEO & Fundador</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg"
                alt="Carlos André"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold">Carlos André</h3>
              <p>CTO</p>
            </div>
            <div className="text-center">
              <Image
                src="/placeholder.svg"
                alt="Carlos Oliveira"
                width={200}
                height={200}
                className="rounded-full mx-auto mb-4"
              />
              <h3 className="font-semibold">Carlos Oliveira</h3>
              <p>Diretor de Operações</p>
            </div>
          </div>
        </div>

        <div>
          <h2 className="text-2xl font-semibold mb-4">Nossos Valores</h2>
          <ul className="list-disc list-inside">
            <li>Inovação constante</li>
            <li>Transparência em todas as operações</li>
            <li>Foco no sucesso do cliente</li>
            <li>Ética e integridade em todas as nossas ações</li>
            <li>Compromisso com a excelência</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

