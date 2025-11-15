'use client'

import { MapPin, Mail, Phone, MessageCircle, Truck, Clock, Shield } from 'lucide-react'

export default function Shipping() {
  const handleWhatsApp = () => {
    const phone = '5524999999999' // Substitua pelo número real
    const message = encodeURIComponent('Olá! Gostaria de saber mais sobre como enviar minha peça para metalização.')
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
  }

  return (
    <section id="envio" className="py-20 px-4 sm:px-6 lg:px-8 bg-rk-beige-light">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-rk-gray mb-4">
            Como Funciona o
            <span className="text-rk-gold"> Envio</span>
          </h2>
          <p className="text-lg text-rk-gray max-w-2xl mx-auto">
            Metalizar seu sapatinho é simples e seguro. Conheça nosso processo.
          </p>
        </div>

        {/* Processo de Envio */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Etapa 1 */}
          <div className="bg-rk-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-rk-gold text-rk-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              1
            </div>
            <h3 className="text-xl font-bold text-rk-gray text-center mb-4">
              Envie sua Peça
            </h3>
            <p className="text-rk-gray text-center leading-relaxed">
              Envie a peça pelos <span className="font-bold">Correios</span>, acompanhada de um bilhete com seu nome completo, telefone e e-mail.
            </p>
          </div>

          {/* Etapa 2 */}
          <div className="bg-rk-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-rk-gold text-rk-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              2
            </div>
            <h3 className="text-xl font-bold text-rk-gray text-center mb-4">
              Metalização
            </h3>
            <p className="text-rk-gray text-center leading-relaxed">
              Assim que recebermos, realizamos todo o processo de metalização com o <span className="font-bold">máximo cuidado e carinho</span>.
            </p>
          </div>

          {/* Etapa 3 */}
          <div className="bg-rk-white rounded-xl p-8 shadow-lg">
            <div className="w-16 h-16 rounded-full bg-rk-gold text-rk-white flex items-center justify-center text-2xl font-bold mb-6 mx-auto">
              3
            </div>
            <h3 className="text-xl font-bold text-rk-gray text-center mb-4">
              Aprovação e Pagamento
            </h3>
            <p className="text-rk-gray text-center leading-relaxed">
              Enviamos fotos pelo <span className="font-bold">WhatsApp</span>. Após sua aprovação, você realiza o pagamento.
            </p>
          </div>
        </div>

        {/* Endereço */}
        <div className="bg-rk-white rounded-xl shadow-lg overflow-hidden mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Informações */}
            <div className="p-8 sm:p-12">
              <h3 className="text-2xl font-bold text-rk-gray mb-8">Endereço para Envio</h3>

              <div className="space-y-6">
                {/* Endereço */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-rk-gold flex items-center justify-center flex-shrink-0">
                    <MapPin className="text-rk-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-rk-gray mb-1">Endereço</h4>
                    <p className="text-rk-gray">
                      Rua Presidente Artur Bernardes, 107<br />
                      Nova Friburgo - RJ - Braunes<br />
                      28611-290
                    </p>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-green-500 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="text-rk-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-rk-gray mb-1">WhatsApp</h4>
                    <button
                      onClick={handleWhatsApp}
                      className="text-green-500 hover:text-green-600 font-medium transition-colors"
                    >
                      Clique aqui para enviar mensagem
                    </button>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-rk-gold flex items-center justify-center flex-shrink-0">
                    <Mail className="text-rk-white" size={24} />
                  </div>
                  <div>
                    <h4 className="font-bold text-rk-gray mb-1">Email</h4>
                    <a
                      href="mailto:contato@rkmetalizacoes.com.br"
                      className="text-rk-gold hover:text-yellow-700 font-medium transition-colors"
                    >
                      contato@rkmetalizacoes.com.br
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Mapa */}
            <div className="bg-rk-beige-light h-80 lg:h-auto overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3717.8584391234567!2d-42.28333!3d-22.28333!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bda5c5c5c5c5c5d%3A0x5c5c5c5c5c5c5c5c!2sRua%20Presidente%20Artur%20Bernardes%2C%20107%20-%20Nova%20Friburgo%2C%20RJ!5e0!3m2!1spt-BR!2sbr!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Destaques */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Segurança */}
          <div className="bg-rk-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <Shield className="text-rk-gold flex-shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-rk-gray mb-2">Envio Seguro</h4>
                <p className="text-sm text-rk-gray">
                  Recomendamos usar o serviço de rastreamento dos Correios para segurança.
                </p>
              </div>
            </div>
          </div>

          {/* Prazo */}
          <div className="bg-rk-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <Clock className="text-rk-gold flex-shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-rk-gray mb-2">Prazo de Entrega</h4>
                <p className="text-sm text-rk-gray">
                  O prazo varia conforme a demanda. Consulte-nos para saber o tempo estimado.
                </p>
              </div>
            </div>
          </div>

          {/* Devolução */}
          <div className="bg-rk-white rounded-xl p-6 shadow-lg">
            <div className="flex items-start gap-4">
              <Truck className="text-rk-gold flex-shrink-0 mt-1" size={28} />
              <div>
                <h4 className="font-bold text-rk-gray mb-2">Devolução</h4>
                <p className="text-sm text-rk-gray">
                  Após aprovação, enviamos sua peça metalizada pelos Correios com segurança.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <div className="mt-16 bg-gradient-to-r from-rk-gold to-yellow-700 rounded-xl p-8 sm:p-12 text-center">
          <h3 className="text-2xl font-bold text-rk-white mb-4">
            Pronto para Enviar sua Peça?
          </h3>
          <p className="text-rk-white mb-6 text-lg">
            Entre em contato conosco pelo WhatsApp para tirar dúvidas e enviar sua peça.
          </p>
          <button
            onClick={handleWhatsApp}
            className="inline-flex items-center gap-2 px-8 py-4 bg-rk-white text-rk-gold rounded-lg font-bold text-lg hover:bg-rk-beige-light transition-all transform hover:scale-105"
          >
            <MessageCircle size={24} />
            Enviar Mensagem no WhatsApp
          </button>
        </div>
      </div>
    </section>
  )
}
