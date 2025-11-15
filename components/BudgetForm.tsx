'use client'

import { useState } from 'react'
import { Send, CheckCircle } from 'lucide-react'

interface BudgetFormProps {
  onSuccess?: () => void
}

export default function BudgetForm({ onSuccess }: BudgetFormProps) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    productType: 'sapatinho-individual',
    description: '',
    agreeTerms: false,
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target
    if (type === 'checkbox') {
      setFormData(prev => ({
        ...prev,
        [name]: (e.target as HTMLInputElement).checked
      }))
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      // Simular envio para WhatsApp
      const message = `
*Novo Orçamento - RK Metalizações*

*Nome:* ${formData.name}
*Email:* ${formData.email}
*Telefone:* ${formData.phone}
*Tipo de Produto:* ${formData.productType}
*Descrição:* ${formData.description || 'Não informado'}
      `.trim()

      const phone = '5524999999999' // Substitua pelo número real
      const encodedMessage = encodeURIComponent(message)
      
      // Abrir WhatsApp
      window.open(`https://wa.me/${phone}?text=${encodedMessage}`, '_blank')

      // Simular sucesso
      setTimeout(() => {
        setSubmitSuccess(true)
        setFormData({
          name: '',
          email: '',
          phone: '',
          productType: 'sapatinho-individual',
          description: '',
          agreeTerms: false,
        })

        setTimeout(() => {
          setSubmitSuccess(false)
        }, 5000)
      }, 500)
    } catch (error) {
      console.error('Erro ao enviar:', error)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="orcamento" className="py-20 px-4 sm:px-6 lg:px-8 bg-rk-white">
      <div className="max-w-4xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-rk-gray mb-4">
            Solicite seu
            <span className="text-rk-gold"> Orçamento</span>
          </h2>
          <p className="text-lg text-rk-gray max-w-2xl mx-auto">
            Preencha o formulário abaixo e nossa equipe entrará em contato com você em breve.
          </p>
        </div>

        {/* Formulário */}
        <div className="bg-rk-beige-light rounded-xl p-8 sm:p-12 shadow-lg">
          {submitSuccess ? (
            <div className="text-center py-12">
              <CheckCircle className="text-green-500 mx-auto mb-4" size={64} />
              <h3 className="text-2xl font-bold text-rk-gray mb-2">Orçamento Enviado!</h3>
              <p className="text-rk-gray mb-6">
                Sua solicitação foi enviada com sucesso. Nossa equipe entrará em contato em breve.
              </p>
              <p className="text-sm text-rk-gray">
                Você será redirecionado para o WhatsApp para continuar a conversa.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Nome */}
              <div>
                <label htmlFor="name" className="block text-sm font-bold text-rk-gray mb-2">
                  Nome Completo *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-rk-beige-gold focus:border-rk-gold focus:outline-none transition-colors bg-rk-white text-rk-gray"
                  placeholder="Seu nome completo"
                />
              </div>

              {/* Email e Telefone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="email" className="block text-sm font-bold text-rk-gray mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-rk-beige-gold focus:border-rk-gold focus:outline-none transition-colors bg-rk-white text-rk-gray"
                    placeholder="seu@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-bold text-rk-gray mb-2">
                    Telefone/WhatsApp *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-lg border-2 border-rk-beige-gold focus:border-rk-gold focus:outline-none transition-colors bg-rk-white text-rk-gray"
                    placeholder="(24) 99999-9999"
                  />
                </div>
              </div>

              {/* Tipo de Produto */}
              <div>
                <label htmlFor="productType" className="block text-sm font-bold text-rk-gray mb-2">
                  Tipo de Produto *
                </label>
                <select
                  id="productType"
                  name="productType"
                  value={formData.productType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg border-2 border-rk-beige-gold focus:border-rk-gold focus:outline-none transition-colors bg-rk-white text-rk-gray"
                >
                  <option value="sapatinho-individual">🥿 Sapatinho Individual - R$ 160,00</option>
                  <option value="par-sapatinhos">👣 Par de Sapatinhos - R$ 300,00</option>
                  <option value="chupeta">🍼 Chupeta - R$ 120,00</option>
                  <option value="personalizado">✨ Objeto Personalizado - Sob Orçamento</option>
                </select>
              </div>

              {/* Descrição */}
              <div>
                <label htmlFor="description" className="block text-sm font-bold text-rk-gray mb-2">
                  Descrição Adicional (Opcional)
                </label>
                <textarea
                  id="description"
                  name="description"
                  value={formData.description}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-3 rounded-lg border-2 border-rk-beige-gold focus:border-rk-gold focus:outline-none transition-colors bg-rk-white text-rk-gray resize-none"
                  placeholder="Conte-nos mais sobre sua peça, tamanho, características especiais, etc."
                />
              </div>

              {/* Checkbox Termos */}
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="agreeTerms"
                  name="agreeTerms"
                  checked={formData.agreeTerms}
                  onChange={handleChange}
                  required
                  className="w-5 h-5 rounded border-2 border-rk-beige-gold accent-rk-gold mt-1"
                />
                <label htmlFor="agreeTerms" className="text-sm text-rk-gray">
                  Concordo em receber contato via WhatsApp e email sobre meu orçamento *
                </label>
              </div>

              {/* Botão Submit */}
              <button
                type="submit"
                disabled={isSubmitting || !formData.agreeTerms}
                className="w-full px-8 py-4 bg-rk-gold text-rk-white rounded-lg font-bold text-lg hover:bg-yellow-700 transition-all transform hover:scale-105 shadow-lg disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 flex items-center justify-center gap-2"
              >
                <Send size={20} />
                {isSubmitting ? 'Enviando...' : 'Enviar Orçamento'}
              </button>

              {/* Informação */}
              <p className="text-center text-sm text-rk-gray">
                Você será redirecionado para o WhatsApp para continuar a conversa com nossa equipe.
              </p>
            </form>
          )}
        </div>

        {/* Destaques */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">⚡</div>
            <h3 className="font-bold text-rk-gray mb-2">Resposta Rápida</h3>
            <p className="text-sm text-rk-gray">Respondemos em até 2 horas</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">💬</div>
            <h3 className="font-bold text-rk-gray mb-2">Suporte Direto</h3>
            <p className="text-sm text-rk-gray">Atendimento via WhatsApp</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">✅</div>
            <h3 className="font-bold text-rk-gray mb-2">Sem Compromisso</h3>
            <p className="text-sm text-rk-gray">Orçamento gratuito e sem obrigação</p>
          </div>
        </div>
      </div>
    </section>
  )
}
