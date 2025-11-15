'use client'

import { X, MessageCircle } from 'lucide-react'

interface BudgetModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function BudgetModal({ isOpen, onClose }: BudgetModalProps) {
  const handleWhatsApp = () => {
    const phone = '5524999999999' // Substitua pelo número real
    const message = encodeURIComponent('Olá! Gostaria de solicitar um orçamento para metalização.')
    window.open(`https://wa.me/${phone}?text=${message}`, '_blank')
    onClose()
  }

  if (!isOpen) return null

  return (
    <>
      {/* Overlay */}
      <div
        className="fixed inset-0 bg-black bg-opacity-50 z-40 transition-opacity"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-md mx-4">
        <div className="bg-rk-white rounded-xl shadow-2xl overflow-hidden">
          {/* Header */}
          <div className="bg-rk-gold text-rk-white p-6 flex justify-between items-center">
            <h2 className="text-2xl font-bold">Solicite seu Orçamento</h2>
            <button
              onClick={onClose}
              className="p-1 hover:bg-yellow-700 rounded-lg transition-colors"
            >
              <X size={24} />
            </button>
          </div>

          {/* Conteúdo */}
          <div className="p-8">
            <p className="text-rk-gray mb-6 leading-relaxed">
              Preencha o formulário completo na página ou envie uma mensagem rápida pelo WhatsApp.
            </p>

            {/* Opções */}
            <div className="space-y-4 mb-8">
              <div className="bg-rk-beige-light p-4 rounded-lg">
                <h3 className="font-bold text-rk-gray mb-2">🥿 Sapatinho Individual</h3>
                <p className="text-sm text-rk-gray">R$ 160,00</p>
              </div>
              <div className="bg-rk-beige-light p-4 rounded-lg">
                <h3 className="font-bold text-rk-gray mb-2">👣 Par de Sapatinhos</h3>
                <p className="text-sm text-rk-gray">R$ 300,00</p>
              </div>
              <div className="bg-rk-beige-light p-4 rounded-lg">
                <h3 className="font-bold text-rk-gray mb-2">🍼 Chupeta</h3>
                <p className="text-sm text-rk-gray">R$ 120,00</p>
              </div>
            </div>

            {/* Botões */}
            <div className="space-y-3">
              <button
                onClick={handleWhatsApp}
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-green-500 text-rk-white rounded-lg font-bold hover:bg-green-600 transition-colors"
              >
                <MessageCircle size={20} />
                Enviar pelo WhatsApp
              </button>
              <button
                onClick={() => {
                  const element = document.getElementById('orcamento')
                  if (element) {
                    element.scrollIntoView({ behavior: 'smooth' })
                    onClose()
                  }
                }}
                className="w-full px-6 py-3 border-2 border-rk-gold text-rk-gold rounded-lg font-bold hover:bg-rk-beige-light transition-colors"
              >
                Preencher Formulário
              </button>
              <button
                onClick={onClose}
                className="w-full px-6 py-3 text-rk-gray hover:bg-rk-beige-light rounded-lg font-medium transition-colors"
              >
                Fechar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
