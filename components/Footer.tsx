'use client'

import { Mail, Phone, MapPin, MessageCircle, Facebook, Instagram } from 'lucide-react'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleWhatsApp = () => {
    const phone = '5524999999999' // Substitua pelo número real
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre os serviços de metalização.')
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <footer className="bg-rk-gray text-rk-white">
      {/* Conteúdo Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4">RK Metalizações</h3>
            <p className="text-sm text-gray-300 leading-relaxed">
              Transformando objetos afetivos em esculturas metálicas eternas através de um processo artesanal de alta precisão.
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4">Links Rápidos</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#sobre" className="text-gray-300 hover:text-rk-gold transition-colors">
                  Sobre o Processo
                </a>
              </li>
              <li>
                <a href="#produtos" className="text-gray-300 hover:text-rk-gold transition-colors">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#precos" className="text-gray-300 hover:text-rk-gold transition-colors">
                  Preços
                </a>
              </li>
              <li>
                <a href="#envio" className="text-gray-300 hover:text-rk-gold transition-colors">
                  Como Enviar
                </a>
              </li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="text-xl font-bold mb-4">Contato</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-2">
                <Phone size={16} className="text-rk-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300">(24) 9999-9999</span>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={16} className="text-rk-gold mt-1 flex-shrink-0" />
                <a href="mailto:contato@rkmetalizacoes.com.br" className="text-gray-300 hover:text-rk-gold transition-colors">
                  contato@rkmetalizacoes.com.br
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-rk-gold mt-1 flex-shrink-0" />
                <span className="text-gray-300">
                  Nova Friburgo - RJ
                </span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="text-xl font-bold mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://wa.me/5524999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center hover:bg-blue-700 transition-colors"
              >
                <Facebook size={20} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-pink-600 flex items-center justify-center hover:bg-pink-700 transition-colors"
              >
                <Instagram size={20} />
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-600 pt-8 mb-8">
          {/* CTA Final */}
          <div className="bg-rk-gold bg-opacity-20 rounded-lg p-6 mb-8 text-center">
            <h3 className="text-lg font-bold mb-3">Pronto para Eternizar seus Momentos?</h3>
            <p className="text-gray-300 mb-4">
              Entre em contato conosco e solicite seu orçamento hoje mesmo.
            </p>
            <button
              onClick={handleWhatsApp}
              className="inline-flex items-center gap-2 px-6 py-3 bg-rk-gold text-rk-gray rounded-lg font-bold hover:bg-yellow-600 transition-colors"
            >
              <MessageCircle size={20} />
              Fale Conosco
            </button>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-600 pt-8 text-center text-sm text-gray-400">
          <p>
            &copy; {currentYear} RK Metalizações. Todos os direitos reservados.
          </p>
          <p className="mt-2">
            Desenvolvido com ❤️ para eternizar suas memórias
          </p>
        </div>
      </div>

      {/* Barra de Atributos */}
      <div className="bg-black bg-opacity-30 py-4 text-center text-xs text-gray-400">
        <p>
          Metalização Artesanal | Sapatinhos | Chupetas | Objetos Personalizados | Nova Friburgo - RJ
        </p>
      </div>
    </footer>
  )
}
