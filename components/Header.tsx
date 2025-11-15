'use client'

import { useState } from 'react'
import { Menu, X, MessageCircle } from 'lucide-react'

interface HeaderProps {
  onOpenBudget: () => void
}

export default function Header({ onOpenBudget }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const handleWhatsApp = () => {
    const phone = '5524999999999' // Substitua pelo número real
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de metalização.')
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <header className="fixed top-0 left-0 right-0 bg-rk-white shadow-md z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="flex items-center gap-2">
              <img 
                src="/images/imagens/408035242_844054500833931_3980568368723902702_n-removebg-preview.png" 
                alt="RK Metalizações" 
                className="h-12 w-auto"
              />
              <span className="hidden sm:inline text-lg font-bold text-rk-gray">
                RK Metalizações
              </span>
            </a>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <button
              onClick={() => scrollToSection('sobre')}
              className="text-rk-gray hover:text-rk-gold transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="text-rk-gray hover:text-rk-gold transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('precos')}
              className="text-rk-gray hover:text-rk-gold transition-colors font-medium"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection('envio')}
              className="text-rk-gray hover:text-rk-gold transition-colors font-medium"
            >
              Envio
            </button>
          </nav>

          {/* CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={handleWhatsApp}
              className="flex items-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors font-medium"
            >
              <MessageCircle size={18} />
              <span className="hidden sm:inline">WhatsApp</span>
            </button>
            <button
              onClick={onOpenBudget}
              className="px-6 py-2 rounded-lg bg-rk-gold text-rk-white hover:bg-yellow-700 transition-colors font-bold"
            >
              Orçamento
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-rk-beige-light transition-colors"
          >
            {isMenuOpen ? (
              <X size={24} className="text-rk-gray" />
            ) : (
              <Menu size={24} className="text-rk-gray" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-rk-beige-gold">
            <button
              onClick={() => scrollToSection('sobre')}
              className="block w-full text-left px-4 py-3 text-rk-gray hover:bg-rk-beige-light transition-colors font-medium"
            >
              Sobre
            </button>
            <button
              onClick={() => scrollToSection('produtos')}
              className="block w-full text-left px-4 py-3 text-rk-gray hover:bg-rk-beige-light transition-colors font-medium"
            >
              Produtos
            </button>
            <button
              onClick={() => scrollToSection('precos')}
              className="block w-full text-left px-4 py-3 text-rk-gray hover:bg-rk-beige-light transition-colors font-medium"
            >
              Preços
            </button>
            <button
              onClick={() => scrollToSection('envio')}
              className="block w-full text-left px-4 py-3 text-rk-gray hover:bg-rk-beige-light transition-colors font-medium"
            >
              Envio
            </button>
            <div className="px-4 py-3 border-t border-rk-beige-gold flex gap-2">
              <button
                onClick={handleWhatsApp}
                className="flex-1 flex items-center justify-center gap-2 px-4 py-2 rounded-lg bg-green-500 text-white hover:bg-green-600 transition-colors font-medium"
              >
                <MessageCircle size={18} />
                WhatsApp
              </button>
              <button
                onClick={onOpenBudget}
                className="flex-1 px-4 py-2 rounded-lg bg-rk-gold text-rk-white hover:bg-yellow-700 transition-colors font-bold"
              >
                Orçamento
              </button>
            </div>
          </nav>
        )}
      </div>
    </header>
  )
}
