import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'RK Metalizações | Metalização de Sapatinhos e Objetos',
  description: 'Transforme seus objetos afetivos em esculturas metálicas eternas. Metalização artesanal de sapatinhos, chupetas e muito mais.',
  keywords: 'metalização, sapatinho, chupeta, bronze, memória, presente, bebê',
  authors: [{ name: 'RK Metalizações' }],
  openGraph: {
    title: 'RK Metalizações | Metalização de Sapatinhos e Objetos',
    description: 'Transforme seus objetos afetivos em esculturas metálicas eternas.',
    type: 'website',
  },
  robots: 'index, follow',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#9b6c38" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className="bg-rk-beige-light">
        {children}
      </body>
    </html>
  )
}
