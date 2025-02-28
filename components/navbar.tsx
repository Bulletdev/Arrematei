"use client"

import Link from "next/link"
import Image from "next/image"
import { useState } from "react"
import { Menu, X, ChevronDown } from "lucide-react"

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <nav className="sticky top-0 z-50 w-full bg-gradient-to-r from-emerald-500 to-teal-600 shadow-md">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-2">
            <Image src="/arrematei.png?height=40&width=40" alt="Arrematei Logo" width={40} height={40} />
            <span className="text-2xl font-bold text-white">Arrematei</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <NavItem href="/" label="Início" />
            <NavDropdown
              label="Serviços"
              items={[
                { label: "Licitações Online", href: "/servicos/licitacoes-online" },
                { label: "Consultoria", href: "/servicos/consultoria" },
                { label: "Treinamentos", href: "/servicos/treinamentos" },
              ]}
            />
            <NavItem href="/sobre" label="Sobre Nós" />
            <NavItem href="/carreiras" label="Carreiras" />
            <NavItem href="/contato" label="Contato" />
            <Link
              href="/login/"
              className="rounded-full bg-white px-6 py-2 text-emerald-600 font-medium hover:bg-emerald-50 transition-colors"
            >
              Login
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white">
          <div className="container mx-auto px-4 py-2 flex flex-col space-y-3">
            <MobileNavItem href="/" label="Início" />
            <MobileNavItem href="/servicos/licitacoes-online" label="Licitações Online" />
            <MobileNavItem href="/servicos/consultoria" label="Consultoria" />
            <MobileNavItem href="/servicos/treinamentos" label="Treinamentos" />
            <MobileNavItem href="/sobre" label="Sobre Nós" />
            <MobileNavItem href="/carreiras" label="Carreiras" />
            <MobileNavItem href="/contato" label="Contato" />
            <Link href="/app/login" className="rounded-full bg-emerald-600 px-6 py-2 text-white font-medium text-center">
              Login
            </Link>
          </div>
        </div>
      )}
    </nav>
  )
}

function NavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-white hover:text-emerald-100 font-medium">
      {label}
    </Link>
  )
}

function MobileNavItem({ href, label }: { href: string; label: string }) {
  return (
    <Link href={href} className="text-emerald-800 hover:text-emerald-600 font-medium py-2 border-b border-gray-100">
      {label}
    </Link>
  )
}

function NavDropdown({ label, items }: { label: string; items: { label: string; href: string }[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="relative group">
      <button
        className="flex items-center text-white hover:text-emerald-100 font-medium"
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        onMouseLeave={() => setIsOpen(false)}
      >
        {label}
        <ChevronDown size={16} className="ml-1" />
      </button>

      {isOpen && (
        <div
          className="absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none"
          onMouseEnter={() => setIsOpen(true)}
          onMouseLeave={() => setIsOpen(false)}
        >
          <div className="py-1">
            {items.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600"
              >
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

