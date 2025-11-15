'use client'

import { Sparkles, Droplets, Shield } from 'lucide-react'

export default function About() {
  return (
    <section id="sobre" className="py-20 px-4 sm:px-6 lg:px-8 bg-rk-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-rk-gray mb-4">
            Sobre o Processo de
            <span className="text-rk-gold"> Metalização</span>
          </h2>
          <p className="text-lg text-rk-gray max-w-2xl mx-auto">
            Conheça a técnica artesanal que transforma objetos afetivos em esculturas metálicas eternas
          </p>
        </div>

        {/* Conteúdo Principal */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Texto */}
          <div className="space-y-6">
            <div className="bg-rk-beige-light p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-rk-gray mb-4">
                O que fazemos na RK não é pintura, é metalização real.
              </h3>
              <p className="text-rk-gray leading-relaxed mb-4">
                Cada peça passa por um processo artesanal de alta precisão, onde aplicamos uma camada espessa de cobre puro, através de um sistema eletrolítico — o mesmo princípio utilizado na galvanoplastia industrial, adaptado para preservar com fidelidade objetos afetivos.
              </p>
              <p className="text-rk-gray leading-relaxed">
                Tudo começa com a preparação minuciosa da superfície. A peça (como um sapatinho ou chupeta) é selada, tratada e recebe uma base condutiva especial, que permite a adesão do metal.
              </p>
            </div>

            {/* Destaques do Processo */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-rk-gold flex items-center justify-center flex-shrink-0">
                  <Droplets className="text-rk-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rk-gray mb-1">Banho de Cobre</h4>
                  <p className="text-sm text-rk-gray">Mergulhada em banhos de cobre sob corrente controlada</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-rk-gold flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-rk-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rk-gray mb-1">Polimento Fino</h4>
                  <p className="text-sm text-rk-gray">Cuidadosamente polida e protegida com verniz</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-rk-gold flex items-center justify-center flex-shrink-0">
                  <Shield className="text-rk-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rk-gray mb-1">Durabilidade Eterna</h4>
                  <p className="text-sm text-rk-gray">Metal puro que não descasca nem se degrada</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-lg bg-rk-gold flex items-center justify-center flex-shrink-0">
                  <Sparkles className="text-rk-white" size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-rk-gray mb-1">Fidelidade Total</h4>
                  <p className="text-sm text-rk-gray">Cada detalhe e textura preservados</p>
                </div>
              </div>
            </div>
          </div>

          {/* Vídeo */}
          <div className="rounded-xl overflow-hidden shadow-2xl max-w-md">
            <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl"
                width="356"
                height="634"
                src="https://www.youtube.com/embed/8HCKMMnuWTM"
                title="Eternize Suas Memórias com Arte!"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>

        {/* Descrição Detalhada */}
        <div className="bg-gradient-to-r from-rk-beige-light to-rk-beige-gold p-8 sm:p-12 rounded-xl">
          <h3 className="text-2xl font-bold text-rk-gray mb-6">Como Funciona a Metalização</h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Etapa 1 */}
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-full bg-rk-gold text-rk-white flex items-center justify-center font-bold text-lg mb-4">
                1
              </div>
              <h4 className="font-bold text-rk-gray mb-3">Preparação da Superfície</h4>
              <p className="text-rk-gray text-sm leading-relaxed">
                A peça é selada, tratada e recebe uma base condutiva especial que permite a adesão perfeita do metal.
              </p>
            </div>

            {/* Etapa 2 */}
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-full bg-rk-gold text-rk-white flex items-center justify-center font-bold text-lg mb-4">
                2
              </div>
              <h4 className="font-bold text-rk-gray mb-3">Banho Eletrolítico</h4>
              <p className="text-rk-gray text-sm leading-relaxed">
                Mergulhada em banhos de cobre sob corrente controlada, o cobre metálico é depositado átomo por átomo.
              </p>
            </div>

            {/* Etapa 3 */}
            <div className="flex flex-col">
              <div className="w-12 h-12 rounded-full bg-rk-gold text-rk-white flex items-center justify-center font-bold text-lg mb-4">
                3
              </div>
              <h4 className="font-bold text-rk-gray mb-3">Acabamento Premium</h4>
              <p className="text-rk-gray text-sm leading-relaxed">
                Polida com precisão e protegida com verniz especial de alto brilho para durabilidade eterna.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-rk-gold">
            <p className="text-rk-gray leading-relaxed">
              <span className="font-bold">O resultado?</span> Uma escultura metálica única, com durabilidade eterna, que conserva cada detalhe do item original — desde costuras e texturas até marcas do uso real. Uma verdadeira joia de família, feita para atravessar gerações.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
