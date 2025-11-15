'use client'

export default function Video() {
  return (
    <section id="video" className="py-20 px-4 sm:px-6 lg:px-8 bg-rk-white">
      <div className="max-w-7xl mx-auto">
        {/* Título */}
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold font-serif text-rk-gray mb-4">
            Conheça Nossa
            <span className="text-rk-gold"> História</span>
          </h2>
          <p className="text-lg text-rk-gray max-w-2xl mx-auto">
            Veja como transformamos momentos especiais em esculturas metálicas eternas
          </p>
        </div>

        {/* Vídeo */}
        <div className="flex justify-center">
          <div className="w-full max-w-2xl">
            <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
              <iframe
                className="absolute top-0 left-0 w-full h-full rounded-xl shadow-2xl"
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

        {/* Destaques */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="text-4xl mb-3">🎬</div>
            <h3 className="font-bold text-rk-gray mb-2">Vídeo Institucional</h3>
            <p className="text-sm text-rk-gray">Conheça nosso processo de metalização</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">✨</div>
            <h3 className="font-bold text-rk-gray mb-2">Qualidade Premium</h3>
            <p className="text-sm text-rk-gray">Cada detalhe cuidadosamente preservado</p>
          </div>
          <div className="text-center">
            <div className="text-4xl mb-3">❤️</div>
            <h3 className="font-bold text-rk-gray mb-2">Feito com Amor</h3>
            <p className="text-sm text-rk-gray">Transformamos suas memórias em arte</p>
          </div>
        </div>
      </div>
    </section>
  )
}
