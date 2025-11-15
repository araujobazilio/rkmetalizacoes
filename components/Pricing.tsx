'use client'

import { Check } from 'lucide-react'

export default function Pricing() {
  const plans = [
    {
      id: 1,
      name: 'Sapatinho Individual',
      emoji: '🥿',
      price: 160,
      description: 'Um pé do sapatinho',
      features: [
        'Metalização em cobre puro',
        'Até 13 cm de comprimento',
        'Polimento e verniz premium',
        'Durabilidade eterna',
        'Fidelidade total dos detalhes'
      ],
      highlighted: false
    },
    {
      id: 2,
      name: 'Par de Sapatinhos',
      emoji: '👣',
      price: 300,
      description: 'Dois pés do sapatinho (MAIS POPULAR)',
      features: [
        'Metalização em cobre puro',
        'Até 13 cm de comprimento cada',
        'Polimento e verniz premium',
        'Durabilidade eterna',
        'Conjunto completo preservado',
        'Maior impacto visual'
      ],
      highlighted: true
    },
    {
      id: 3,
      name: 'Chupeta',
      emoji: '🍼',
      price: 120,
      description: 'Chupeta metalizada',
      features: [
        'Metalização em cobre puro',
        'Até 13 cm de comprimento',
        'Polimento e verniz premium',
        'Durabilidade eterna',
        'Pequeno e delicado',
        'Fácil de exibir'
      ],
      highlighted: false
    }
  ]

  return (
    <section id="precos" className="py-20 px-4 sm:px-6 lg:px-8 bg-rk-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-rk-gray mb-4">
            Tabela de
            <span className="text-rk-gold"> Valores</span>
          </h2>
          <p className="text-lg text-rk-gray max-w-2xl mx-auto">
            Preços transparentes e sem surpresas. Pagamento apenas após a finalização.
          </p>
        </div>

        {/* Cards de Preços */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`rounded-xl overflow-hidden transition-all duration-300 ${
                plan.highlighted
                  ? 'ring-2 ring-rk-gold shadow-2xl transform scale-105'
                  : 'shadow-lg hover:shadow-xl'
              }`}
            >
              {/* Header */}
              <div className={`p-8 ${plan.highlighted ? 'bg-rk-gold text-rk-white' : 'bg-rk-beige-light'}`}>
                <div className="text-5xl mb-3">{plan.emoji}</div>
                <h3 className={`text-2xl font-bold mb-2 ${plan.highlighted ? 'text-rk-white' : 'text-rk-gray'}`}>
                  {plan.name}
                </h3>
                <p className={`text-sm ${plan.highlighted ? 'text-rk-white opacity-90' : 'text-rk-gray'}`}>
                  {plan.description}
                </p>
              </div>

              {/* Preço */}
              <div className="bg-rk-white p-8 border-b border-rk-beige-gold">
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold text-rk-gold">R$ {plan.price}</span>
                  <span className="text-rk-gray">,00</span>
                </div>
                <p className="text-sm text-rk-gray mt-2">Valor único pela metalização</p>
              </div>

              {/* Features */}
              <div className="bg-rk-white p-8">
                <ul className="space-y-4">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="text-rk-gold flex-shrink-0 mt-1" size={20} />
                      <span className="text-rk-gray">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        {/* Informações Importantes */}
        <div className="bg-gradient-to-r from-rk-beige-light to-rk-beige-gold rounded-xl p-8 sm:p-12">
          <h3 className="text-2xl font-bold text-rk-gray mb-8">Informações Importantes</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Tamanhos */}
            <div className="bg-rk-white rounded-lg p-6">
              <h4 className="font-bold text-rk-gold mb-3 text-lg">📏 Tamanhos Padrão</h4>
              <p className="text-rk-gray leading-relaxed">
                Os valores acima são válidos para peças com até <span className="font-bold">13 cm de comprimento</span> de solado (do bico ao calcanhar).
              </p>
            </div>

            {/* Tamanhos Maiores */}
            <div className="bg-rk-white rounded-lg p-6">
              <h4 className="font-bold text-rk-gold mb-3 text-lg">📐 Tamanhos Maiores</h4>
              <p className="text-rk-gray leading-relaxed">
                Para tamanhos maiores, o valor é <span className="font-bold">ajustado conforme orçamento personalizado</span>.
              </p>
            </div>

            {/* Pagamento */}
            <div className="bg-rk-white rounded-lg p-6">
              <h4 className="font-bold text-rk-gold mb-3 text-lg">💳 Pagamento Seguro</h4>
              <p className="text-rk-gray leading-relaxed">
                Você <span className="font-bold">não precisa fazer nenhum pagamento antecipado</span>. Pagamento apenas após a finalização.
              </p>
            </div>

            {/* Processo */}
            <div className="bg-rk-white rounded-lg p-6">
              <h4 className="font-bold text-rk-gold mb-3 text-lg">✅ Como Funciona</h4>
              <p className="text-rk-gray leading-relaxed">
                Assim que finalizados, enviaremos <span className="font-bold">fotos pelo WhatsApp</span> junto com os dados para pagamento.
              </p>
            </div>
          </div>

          {/* Destaque */}
          <div className="mt-8 pt-8 border-t border-rk-gold bg-rk-white rounded-lg p-6">
            <p className="text-center text-rk-gray">
              <span className="font-bold text-rk-gold">💡 Sua aprovação é importante!</span> Somente após sua aprovação das fotos é que o pagamento é realizado.
            </p>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <p className="text-lg text-rk-gray mb-6">
            Tem dúvidas sobre os preços ou quer um orçamento personalizado?
          </p>
          <a
            href="#orcamento"
            className="inline-block px-8 py-4 bg-rk-gold text-rk-white rounded-lg font-bold text-lg hover:bg-yellow-700 transition-all transform hover:scale-105 shadow-lg"
          >
            Solicitar Orçamento Personalizado
          </a>
        </div>
      </div>
    </section>
  )
}
