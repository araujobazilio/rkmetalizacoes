'use client'

export default function Products() {
  const products = [
    {
      id: 1,
      name: 'Sapatinho Individual',
      emoji: '🥿',
      description: 'Um pé do sapatinho do bebê eternizado em metal puro',
      image: '/images/imagens/produto-1.png',
      features: ['Metal puro', 'Durável', 'Fidelidade total']
    },
    {
      id: 2,
      name: 'Par de Sapatinhos',
      emoji: '👣',
      description: 'Os dois pés do sapatinho preservados como uma peça completa',
      image: '/images/imagens/produto-2.png',
      features: ['Conjunto completo', 'Maior impacto visual', 'Recordação perfeita']
    },
    {
      id: 3,
      name: 'Chupeta',
      emoji: '🍼',
      description: 'A clássica chupeta ganha vida eterna em forma de escultura',
      image: '/images/imagens/produto-3.png',
      features: ['Pequeno e delicado', 'Fácil de exibir', 'Memória especial']
    },
    {
      id: 4,
      name: 'Objetos Personalizados',
      emoji: '✨',
      description: 'Qualquer objeto afetivo pode ser metalizado sob orçamento',
      image: '/images/imagens/produto-4.png',
      features: ['Sob medida', 'Orçamento personalizado', 'Possibilidades infinitas']
    }
  ]

  return (
    <section id="produtos" className="py-20 px-4 sm:px-6 lg:px-8 bg-rk-beige-light">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-rk-gray mb-4">
            Nossos
            <span className="text-rk-gold"> Produtos</span>
          </h2>
          <p className="text-lg text-rk-gray max-w-2xl mx-auto">
            Transforme seus momentos especiais em esculturas metálicas que durarão para sempre
          </p>
        </div>

        {/* Grid de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-rk-white rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              {/* Imagem */}
              <div className="relative h-40 overflow-hidden bg-rk-beige-gold flex items-center justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-contain hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 text-4xl">
                  {product.emoji}
                </div>
              </div>

              {/* Conteúdo */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-rk-gray mb-2">
                  {product.name}
                </h3>
                <p className="text-sm text-rk-gray mb-4 leading-relaxed">
                  {product.description}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-4">
                  {product.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-rk-gold"></span>
                      <span className="text-sm text-rk-gray">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* Divider */}
                <div className="border-t border-rk-beige-gold pt-4">
                  <p className="text-center text-sm text-rk-gray">
                    <span className="font-bold">Consulte nossos preços</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Seção de Tamanhos */}
        <div className="bg-rk-white rounded-xl p-8 sm:p-12 shadow-lg">
          <h3 className="text-2xl font-bold text-rk-gray mb-6">Informações Importantes</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h4 className="font-bold text-rk-gold mb-3 text-lg">Tamanho Padrão</h4>
              <p className="text-rk-gray leading-relaxed">
                Os valores apresentados são válidos para peças com até <span className="font-bold">13 cm de comprimento</span> de solado (do bico ao calcanhar).
              </p>
            </div>
            
            <div>
              <h4 className="font-bold text-rk-gold mb-3 text-lg">Tamanhos Maiores</h4>
              <p className="text-rk-gray leading-relaxed">
                Para tamanhos maiores, o valor é <span className="font-bold">ajustado conforme orçamento personalizado</span>. Entre em contato conosco!
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-rk-beige-gold bg-rk-beige-light p-6 rounded-lg">
            <p className="text-rk-gray text-center">
              <span className="font-bold text-rk-gold">💡 Dica:</span> Você pode enviar sua peça para metalização. Não tem ideia de qual escolher? Solicite um orçamento personalizado!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
