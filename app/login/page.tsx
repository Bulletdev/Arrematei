import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Login() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-12 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h1 className="text-3xl font-bold mb-6 text-center">Login Arrematei</h1>
        <form className="space-y-4">
          <div>
            <label htmlFor="email" className="block mb-1 font-medium">
              E-mail
            </label>
            <Input type="email" id="email" placeholder="seu@email.com" required />
          </div>
          <div>
            <label htmlFor="senha" className="block mb-1 font-medium">
              Senha
            </label>
            <Input type="password" id="senha" placeholder="Sua senha" required />
          </div>
          <Button type="submit" className="w-full">
            Entrar
          </Button>
        </form>
        <div className="mt-4 text-center">
          <Link href="/contato" className="text-blue-600 hover:underline">
            Esqueceu sua senha?
          </Link>
        </div>
        <div className="mt-6 text-center">
          <p>Ainda não tem uma conta?</p>
          <Link href="/contato" className="text-blue-600 hover:underline">
            Solicite uma demonstração
          </Link>
        </div>
      </div>
    </div>
  )
}

