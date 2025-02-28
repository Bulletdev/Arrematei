import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Search, HelpCircle, FileText, Settings, Users, Mail } from "lucide-react"
import Link from "next/link"

const categories = [
    { icon: <HelpCircle className="h-6 w-6" />, title: "Perguntas Frequentes", href: "/suporte/faq" },
    { icon: <FileText className="h-6 w-6" />, title: "Tutoriais", href: "/suporte/tutoriais" },
    { icon: <Settings className="h-6 w-6" />, title: "Configurações da Conta", href: "/suporte/configuracoes" },
    { icon: <Users className="h-6 w-6" />, title: "Participação em Licitações", href: "/suporte/licitacoes" },
    { icon: <Mail className="h-6 w-6" />, title: "Contato", href: "/contato" },
]

const faqs = [
    {
        question: "Como faço para me cadastrar na plataforma?",
        answer:
            "Para se cadastrar, clique no botão 'solicitar-servico' no canto superior direito da página inicial. Preencha o formulário com suas informações e siga as instruções para verificar seu e-mail.",
    },
    {
        question: "Quais documentos são necessários para participar de licitações?",
        answer:
            "Os documentos necessários variam de acordo com o tipo de licitação. Geralmente, são exigidos: CNPJ, contrato social, certidões negativas de débitos e documentos específicos mencionados no edital.",
    },
    {
        question: "Como faço para receber alertas de novas licitações?",
        answer:
            "Após fazer login, acesse as configurações do seu perfil e ative as notificações. Você pode personalizar os tipos de licitações sobre as quais deseja receber alertas.",
    },
]

export default function SuportePage() {
    return (
        <main className="min-h-screen flex flex-col">
            <Navbar />

            <div className="flex-grow bg-gradient-to-b from-emerald-50 to-white py-16 md:py-24">
                <div className="container mx-auto px-4">
                    <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 text-center">Central de Suporte</h1>
                    <p className="text-lg text-gray-600 mb-12 text-center max-w-3xl mx-auto">
                        Encontre respostas para suas dúvidas e obtenha ajuda para utilizar nossa plataforma de licitações.
                    </p>

                    <div className="max-w-2xl mx-auto mb-12">
                        <div className="relative">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <Input type="search" placeholder="Buscar ajuda..." className="pl-10 pr-4 py-2 w-full" />
                            <Button className="absolute right-1 top-1/2 transform -translate-y-1/2">Buscar</Button>
                        </div>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8 mb-16">
                        {categories.map((category, index) => (
                            <Link key={index} href={category.href}>
                                <Card className="hover:shadow-md transition-shadow">
                                    <CardHeader className="flex flex-row items-center space-x-4">
                                        <div className="bg-emerald-100 p-3 rounded-full">{category.icon}</div>
                                        <CardTitle>{category.title}</CardTitle>
                                    </CardHeader>
                                </Card>
                            </Link>
                        ))}
                    </div>

                    <div className="max-w-3xl mx-auto">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Perguntas Frequentes</h2>
                        <div className="space-y-6">
                            {faqs.map((faq, index) => (
                                <Card key={index}>
                                    <CardHeader>
                                        <CardTitle className="text-lg">{faq.question}</CardTitle>
                                    </CardHeader>
                                    <CardContent>
                                        <p className="text-gray-600">{faq.answer}</p>
                                    </CardContent>
                                </Card>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 text-center">
                        <p className="text-gray-600 mb-4">Não encontrou o que procurava?</p>
                        <Button asChild>
                            <Link href="/contato">Entre em Contato</Link>
                        </Button>
                    </div>
                </div>
            </div>

            <Footer />
        </main>
    )
}

