import { Heart, Star, Church, Users, ChevronUp, MessageCircle } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function FinalMessage() {
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Verifica scroll para mostrar botão de voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80; // Altura do header fixo
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-blue-50 to-blue-100 relative overflow-hidden">
      {/* Elementos decorativos - Escondidos no mobile para melhor performance */}
      <div className="hidden sm:block absolute top-10 left-10 opacity-10">
        <Church className="w-32 h-32 text-blue-800" />
      </div>
      <div className="hidden sm:block absolute bottom-10 right-10 opacity-10">
        <Users className="w-32 h-32 text-blue-800" />
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Cabeçalho Mobile */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-flex items-center justify-center gap-2 sm:gap-3 mb-4 sm:mb-6">
            <div className="relative">
              <Heart className="w-8 h-8 sm:w-12 sm:h-12 text-red-500 animate-pulse" />
              <Star className="w-4 h-4 sm:w-6 sm:h-6 text-yellow-400 absolute -top-1 -right-1" />
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900">
              Uma Palavra Final
            </h2>
          </div>
          <p className="text-sm sm:text-base md:text-lg text-slate-700 max-w-2xl mx-auto px-2">
            Antes de encerrar, uma mensagem especial para você.
          </p>
        </div>

        {/* Mensagem Principal - Mobile Otimizada */}
        <div className="bg-white rounded-xl sm:rounded-2xl p-5 sm:p-8 shadow-lg sm:shadow-xl border border-blue-200 mb-8 sm:mb-10 mx-2 sm:mx-0">
          <div className="space-y-4 sm:space-y-6 text-center">
            <div className="text-4xl sm:text-5xl mb-4 sm:mb-6">🙏✨</div>
            
            <h3 className="text-xl sm:text-2xl font-bold text-blue-900 px-2">
              Você é Especial Para Nós!
            </h3>
            
            <div className="space-y-3 sm:space-y-4 text-slate-700 text-sm sm:text-base md:text-lg leading-relaxed px-1">
              <p>
                Independentemente de onde você está nesta jornada, há um lugar especial 
                para você na <strong className="text-blue-800">AD Ipiranga</strong>.
              </p>
              
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 sm:p-6 rounded-lg sm:rounded-xl border-l-4 border-blue-500 my-4 sm:my-6">
                <p className="text-blue-800 font-medium text-base sm:text-lg md:text-xl italic">
                  "Vinde a mim, todos os que estais cansados e oprimidos, e eu vos aliviarei."
                </p>
                <p className="text-blue-600 mt-2 text-sm">— Mateus 11:28</p>
              </div>
              
              <p>
                Nossa igreja é uma <strong>família</strong> que acolhe, 
                uma <strong>comunidade</strong> que apoia e um <strong>lar espiritual</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Cards de Valores - Grid Mobile */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12 px-2 sm:px-0">
          {[
            {
              icon: "🤝",
              title: "Acolhimento",
              description: "Todos são bem-vindos, sem exceções."
            },
            {
              icon: "💖",
              title: "Amor Cristão",
              description: "Amar ao próximo como a si mesmo."
            },
            {
              icon: "🌟",
              title: "Esperança",
              description: "Em Cristo encontramos esperança."
            }
          ].map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-white to-blue-50 rounded-lg sm:rounded-xl p-4 sm:p-6 text-center shadow-md sm:shadow-lg border border-blue-100 hover:shadow-lg sm:hover:shadow-xl transition-all duration-300"
            >
              <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{item.icon}</div>
              <h4 className="text-base sm:text-lg font-bold text-blue-900 mb-2 sm:mb-3">{item.title}</h4>
              <p className="text-xs sm:text-sm text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>

        {/* Convite Final - Mobile Compacto */}
        <div className="bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl sm:rounded-2xl p-6 sm:p-8 md:p-10 shadow-xl sm:shadow-2xl text-center mx-2 sm:mx-0">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4">
              Estamos Ansiosos Para Conhecê-lo!
            </h3>
            <p className="text-blue-200 text-sm sm:text-base mb-4 sm:mb-6">
              Aqui você encontrará um ambiente acolhedor para crescer espiritualmente 
              e construir relacionamentos significativos.
            </p>
            
            {/* Botões Mobile - Coluna única */}
            <div className="flex flex-col gap-3 sm:gap-4 mt-6 sm:mt-8">
              <button
                onClick={() => scrollToSection('visite')}
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 active:scale-95 shadow-lg text-sm sm:text-base"
              >
                <Church className="w-4 h-4 sm:w-5 sm:h-5" />
                Venha nos Visitar
              </button>
              
              <button
                onClick={() => scrollToSection('contato')}
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-bold px-6 py-3 sm:px-8 sm:py-3 rounded-full hover:bg-white/30 transition-all duration-300 active:scale-95 border border-white/30 text-sm sm:text-base"
              >
                <MessageCircle className="w-4 h-4 sm:w-5 sm:h-5" />
                Entre em Contato
              </button>
            </div>
            
            <p className="text-blue-300 text-xs sm:text-sm mt-4 sm:mt-6">
              Deus tem um plano especial para sua vida.
            </p>
          </div>
        </div>

        {/* Bênção Final - Mobile */}
        <div className="text-center mt-8 sm:mt-12 px-2 sm:px-0">
          <div className="inline-block bg-gradient-to-r from-white to-blue-50 rounded-xl sm:rounded-2xl p-5 sm:p-6 md:p-8 shadow-lg border border-blue-200 max-w-md sm:max-w-lg md:max-w-none">
            <p className="text-lg sm:text-xl md:text-2xl font-bold text-blue-900 mb-1 sm:mb-2">
              "O Senhor te abençoe e te guarde;
            </p>
            <p className="text-base sm:text-lg md:text-xl text-blue-800 mb-1 sm:mb-2">
              o Senhor faça resplandecer o seu rosto sobre ti
            </p>
            <p className="text-sm sm:text-base md:text-lg text-blue-700">
              e te dê a paz." <span className="text-blue-600 block sm:inline">— Números 6:24-26</span>
            </p>
            <div className="mt-4 sm:mt-6 text-3xl sm:text-4xl">🕊️✝️❤️</div>
          </div>
        </div>

        {/* Botão para voltar ao topo - Mobile ajustado */}
        {showScrollTop && (
  <button
    onClick={scrollToTop}
    className="fixed bottom-16 sm:bottom-6 left-4 sm:left-6 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 active:scale-110 z-30"
    aria-label="Voltar ao topo"
  >
    <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
  </button>
)}

        {/* Assinatura Mobile */}
        <div className="text-center mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-blue-200 px-2 sm:px-0">
          <p className="text-slate-600 text-sm">
            Com carinho e orações,
          </p>
          <p className="text-blue-900 font-bold text-base sm:text-lg mt-1 sm:mt-2">
            AD Ipiranga - Santa Bárbara D'Oeste
          </p>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            "Uma igreja que ama, acolhe e transforma vidas"
          </p>
        </div>

        {/* Aviso WhatsApp no Mobile */}
        <div className="sm:hidden mt-6 bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-center">
          <div className="flex items-center justify-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5 text-green-600" />
            <p className="font-semibold text-yellow-800">Precisa de ajuda?</p>
          </div>
          <p className="text-yellow-700 text-sm">
            Toque no ícone do WhatsApp no canto da tela para falar conosco!
          </p>
        </div>

      </div>

      {/* Decoração final */}
      <div className="absolute bottom-0 left-0 right-0 h-1 sm:h-2 bg-gradient-to-r from-transparent via-yellow-400 to-transparent opacity-30"></div>
    </section>
  );
}