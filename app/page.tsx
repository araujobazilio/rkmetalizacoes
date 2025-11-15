'use client'

import { useState } from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Products from '@/components/Products'
import Pricing from '@/components/Pricing'
import BudgetForm from '@/components/BudgetForm'
import Shipping from '@/components/Shipping'
import Footer from '@/components/Footer'
import BudgetModal from '@/components/BudgetModal'

export default function Home() {
  const [showBudgetModal, setShowBudgetModal] = useState(false)

  return (
    <main className="w-full">
      <Header onOpenBudget={() => setShowBudgetModal(true)} />
      <Hero onOpenBudget={() => setShowBudgetModal(true)} />
      <About />
      <Products />
      <Pricing />
      <BudgetForm onSuccess={() => setShowBudgetModal(false)} />
      <Shipping />
      <Footer />
      <BudgetModal 
        isOpen={showBudgetModal} 
        onClose={() => setShowBudgetModal(false)} 
      />
    </main>
  )
}
