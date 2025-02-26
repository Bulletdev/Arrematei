import type React from "react"
import Link from "next/link"
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">Arrematei</h3>
            <p className="text-gray-400 mb-4">
              A melhor plataforma para participar de licitações online com segurança e facilidade.
            </p>
            <div className="flex space-x-4">
              <SocialLink href="#" icon={<Facebook size={20} />} />
              <SocialLink href="#" icon={<Twitter size={20} />} />
              <SocialLink href="#" icon={<Instagram size={20} />} />
              <SocialLink href="#" icon={<Linkedin size={20} />} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <FooterLink href="/" label="Início" />
              <FooterLink href="/sobre" label="Sobre Nós" />
              <FooterLink href="/solicitar-servico" label="Serviços" />
              <FooterLink href="/licitacoes" label="Editais (Em produção)" />
              <FooterLink href="/carreiras" label="Carreiras" />
              <FooterLink href="/contato" label="Contato" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Serviços</h3>
            <ul className="space-y-2">
              <FooterLink href="/servicos/licitacoes-online" label="Licitações Online" />
              <FooterLink href="/servicos/consultoria" label="Consultoria" />
              <FooterLink href="/servicos/treinamentos" label="Treinamentos" />
              <FooterLink href="/servicos/suporte" label="Suporte" />
              <FooterLink href="/servicos/analise-de-editais" label="Análise de Editais" />
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={20} className="mr-2 text-emerald-400 flex-shrink-0 mt-1" />
                <span className="text-gray-400">Feira de Santana - BA</span>
              </li>
              <li className="flex items-center">
                <Phone size={20} className="mr-2 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400">(75) 9 9999-9999</span>
              </li>
              <li className="flex items-center">
                <Mail size={20} className="mr-2 text-emerald-400 flex-shrink-0" />
                <span className="text-gray-400">contato@arrematei.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
          <p>&copy; {new Date().getFullYear()} Arrematei. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

function SocialLink({ href, icon }: { href: string; icon: React.ReactNode }) {
  return (
    <Link href={href} className="bg-gray-800 p-2 rounded-full hover:bg-emerald-600 transition-colors">
      {icon}
    </Link>
  )
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link href={href} className="text-gray-400 hover:text-emerald-400 transition-colors">
        {label}
      </Link>
    </li>
  )
}

