'use client'

import { ChevronDown } from 'lucide-react'

interface HeroProps {
  onOpenBudget: () => void
}

export default function Hero({ onOpenBudget }: HeroProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-rk-beige-light to-rk-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <div className="animate-fade-in-up">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-serif text-rk-gray mb-6 leading-tight">
              Eternize seus
              <span className="text-rk-gold"> Momentos Especiais</span>
            </h1>
            
            <p className="text-lg text-rk-gray mb-8 leading-relaxed">
              Transforme objetos afetivos em esculturas metálicas eternas. Cada peça passa por um processo artesanal de metalização real, preservando com fidelidade cada detalhe da sua memória.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button
                onClick={onOpenBudget}
                className="px-8 py-4 bg-rk-gold text-rk-white rounded-lg font-bold text-lg hover:bg-yellow-700 transition-all transform hover:scale-105 shadow-lg"
              >
                Solicitar Orçamento
              </button>
              <button
                onClick={() => scrollToSection('sobre')}
                className="px-8 py-4 border-2 border-rk-gold text-rk-gold rounded-lg font-bold text-lg hover:bg-rk-beige-gold transition-all"
              >
                Saiba Como Funciona
              </button>
            </div>

            {/* Destaques */}
            <div className="grid grid-cols-2 gap-6">
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-rk-beige-gold flex items-center justify-center flex-shrink-0">
                  <span className="text-rk-gold font-bold text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-rk-gray mb-1">100% Artesanal</h3>
                  <p className="text-sm text-rk-gray">Processo manual de alta precisão</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-rk-beige-gold flex items-center justify-center flex-shrink-0">
                  <span className="text-rk-gold font-bold text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-rk-gray mb-1">Durabilidade Eterna</h3>
                  <p className="text-sm text-rk-gray">Metal puro que dura gerações</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-rk-beige-gold flex items-center justify-center flex-shrink-0">
                  <span className="text-rk-gold font-bold text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-rk-gray mb-1">Fidelidade Total</h3>
                  <p className="text-sm text-rk-gray">Cada detalhe preservado</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-12 h-12 rounded-full bg-rk-beige-gold flex items-center justify-center flex-shrink-0">
                  <span className="text-rk-gold font-bold text-xl">✓</span>
                </div>
                <div>
                  <h3 className="font-bold text-rk-gray mb-1">Pagamento Seguro</h3>
                  <p className="text-sm text-rk-gray">Após a finalização</p>
                </div>
              </div>
            </div>
          </div>

          {/* Imagens */}
          <div className="animate-slide-in-left">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/imagens/3.png"
                  alt="Sapatinho metalizado"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/imagens/4.png"
                  alt="Sapatinho metalizado"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/imagens/5.png"
                  alt="Chupeta metalizada"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/imagens/6.png"
                  alt="Objeto metalizado"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/imagens/whatsapp-1.png"
                  alt="Metalização exemplo 1"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/imagens/whatsapp-2.png"
                  alt="Metalização exemplo 2"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/imagens/whatsapp-3.png"
                  alt="Metalização exemplo 3"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/imagens/whatsapp-4.png"
                  alt="Metalização exemplo 4"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
              <div className="rounded-xl overflow-hidden shadow-xl">
                <img
                  src="/images/imagens/whatsapp-5.png"
                  alt="Metalização exemplo 5"
                  className="w-full h-48 object-cover hover:scale-110 transition-transform duration-300"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="flex justify-center mt-16 animate-bounce">
          <button
            onClick={() => scrollToSection('sobre')}
            className="p-3 rounded-full bg-rk-beige-gold text-rk-gold hover:bg-rk-gold hover:text-rk-white transition-colors"
          >
            <ChevronDown size={24} />
          </button>
        </div>
      </div>
    </section>
  )
}
