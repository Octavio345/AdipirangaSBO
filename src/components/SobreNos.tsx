import { Calendar, MapPin, Users, Church, Clock, Star, ChevronLeft, ChevronUp } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function SobreNos() {
  const [activeTimeline, setActiveTimeline] = useState('sao-paulo');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Verifica scroll para mostrar botão de voltar ao topo
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const timelineSaoPaulo = [
    {
      year: "1931",
      title: "Fundação em São Paulo",
      description: "Primeiros batismos realizados, marcando o nascimento oficial da igreja no bairro do Ipiranga.",
      icon: "🕊️",
      highlight: true
    },
    {
      year: "1943",
      title: "Liderança do Pastor Alfredo Reikdal",
      description: "Assumiu a direção em meio à Segunda Guerra Mundial e recessão econômica, focando na formação de obreiros.",
      icon: "🙏"
    },
    {
      year: "1956",
      title: "Mudança para a Sede Histórica",
      description: "Transferência para a Avenida Dr. Ricardo Jafet, 214 - construção do templo em estilo gótico.",
      icon: "🏛️",
      highlight: true
    },
    {
      year: "2021",
      title: "Reconhecimento Estadual",
      description: "Lei Estadual nº 17.314 institui 29 de junho como 'Dia da AD - Ministério no Ipiranga'.",
      icon: "⭐"
    }
  ];

  const timelineAmericana = [
    {
      year: "Há 40+ anos",
      title: "Início Humilde na Região",
      description: "Trabalho iniciado em zona rural de Americana, com poucos recursos mas muita fé.",
      icon: "🌱",
      highlight: true
    },
    {
      year: "Anos 80-90",
      title: "Expansão e Consolidação",
      description: "Crescimento gradual através do ensino bíblico e comunhão entre os irmãos.",
      icon: "📖"
    },
    {
      year: "2000+",
      title: "Estabelecimento em SBO",
      description: "Transferência para sede atual na Rua Teresina, 137 - Cidade Nova, Santa Bárbara d'Oeste.",
      icon: "📍",
      highlight: true
    },
    {
      year: "Atualmente",
      title: "Ministério Consolidado",
      description: "Trabalho espiritual, social e comunitário mantendo os princípios originais.",
      icon: "❤️"
    }
  ];

  const valores = [
    {
      icon: "✝️",
      title: "Fidelidade à Palavra",
      description: "Manutenção dos princípios bíblicos em toda nossa jornada"
    },
    {
      icon: "🤝",
      title: "Comunhão",
      description: "Crescimento através do relacionamento entre os irmãos"
    },
    {
      icon: "🌍",
      title: "Missão Evangelística",
      description: "Compromisso com a propagação do Evangelho"
    },
    {
      icon: "🏡",
      title: "Acolhimento",
      description: "Ambiente familiar onde todos são bem-vindos"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Botão Voltar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-blue-700 hover:text-blue-900 font-medium transition-colors"
        >
          <ChevronLeft className="w-4 h-4" />
          Voltar para o site principal
        </Link>
      </div>

      {/* Botão Voltar ao Topo */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-20 sm:bottom-6 left-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white p-3 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 active:scale-110 z-30"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-5 h-5 sm:w-6 sm:h-6" />
        </button>
      )}

      {/* Hero Section */}
      <section className="py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center gap-3 mb-6">
              <Church className="w-12 h-12 text-blue-700" />
              <h1 className="text-4xl sm:text-5xl font-bold text-blue-900">
                Nossa História
              </h1>
            </div>
            <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
              Mais de 90 anos de dedicação à fé, à família e à comunidade
            </p>
          </div>

          {/* Linha do Tempo Interativa */}
          <div className="mb-16">
            <div className="flex flex-col sm:flex-row gap-4 mb-8 justify-center">
              <button
                onClick={() => setActiveTimeline('sao-paulo')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${activeTimeline === 'sao-paulo' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border-2 border-blue-200 hover:border-blue-400'}`}
              >
                <MapPin className="w-5 h-5" />
                História em São Paulo
              </button>
              <button
                onClick={() => setActiveTimeline('americana')}
                className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center justify-center gap-2 ${activeTimeline === 'americana' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border-2 border-blue-200 hover:border-blue-400'}`}
              >
                <Users className="w-5 h-5" />
                História na Região
              </button>
            </div>

            {/* Timeline Content */}
            <div className="relative">
              {/* Linha central */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-blue-300 to-blue-100 hidden md:block"></div>
              
              <div className="space-y-8 md:space-y-12">
                {(activeTimeline === 'sao-paulo' ? timelineSaoPaulo : timelineAmericana).map((item, index) => (
                  <div 
                    key={index} 
                    className={`relative flex flex-col md:flex-row items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                  >
                    {/* Ponto na linha */}
                    <div className="absolute left-1/2 transform -translate-x-1/2 w-6 h-6 bg-blue-600 rounded-full border-4 border-white z-10 hidden md:block"></div>
                    
                    {/* Card */}
                    <div className={`w-full md:w-5/12 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:pl-8'} ${item.highlight ? 'md:scale-105' : ''}`}>
                      <div className={`bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-all duration-300 ${item.highlight ? 'border-2 border-blue-300' : ''}`}>
                        <div className="flex items-center gap-4 mb-4">
                          <div className="text-3xl">{item.icon}</div>
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              <Calendar className="w-4 h-4 text-blue-600" />
                              <span className="font-bold text-blue-800">{item.year}</span>
                            </div>
                            <h3 className="text-xl font-bold text-blue-900 mt-1">{item.title}</h3>
                          </div>
                        </div>
                        <p className="text-slate-600">{item.description}</p>
                        {item.highlight && (
                          <div className="mt-3 inline-flex items-center gap-1 text-blue-700 font-medium">
                            <Star className="w-4 h-4" />
                            <span className="text-sm">Marco Histórico</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção da História Completa */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* História de São Paulo */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-blue-900">
                  Nascimento em São Paulo
                </h2>
              </div>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  A história da <strong className="text-blue-800">Assembleia de Deus – Ministério no Ipiranga</strong> está profundamente ligada ao avanço do movimento assembleiano no Brasil, especialmente na cidade de São Paulo.
                </p>
                <p>
                  Diante da necessidade de expandir a obra na capital paulista, o missionário <strong>Daniel Berg</strong>, um dos fundadores das Assembleias de Deus no país, encarregou o missionário <strong>Samuel Nystrom</strong> dessa missão.
                </p>
                <p>
                  Um marco importante ocorreu em <strong>29 de junho de 1931</strong>, data em que foram realizados os primeiros batismos, simbolizando o nascimento e a consolidação da igreja.
                </p>
                <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 mt-4">
                  <p className="text-blue-800 font-medium">
                    "A sede permanece na Avenida Dr. Ricardo Jafet, 214 até os dias atuais e passou a ser conhecida como a 'Catedral Nacional da Independência'."
                  </p>
                </div>
              </div>
            </div>

            {/* História na Região */}
            <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                  <Users className="w-6 h-6 text-blue-700" />
                </div>
                <h2 className="text-2xl font-bold text-blue-900">
                  Chegada na Nossa Região
                </h2>
              </div>
              
              <div className="space-y-4 text-slate-700">
                <p>
                  A história da Assembleia de Deus – Ministério do Ipiranga em <strong>Americana e Santa Bárbara d'Oeste</strong> é marcada por fé, simplicidade e perseverança.
                </p>
                <p>
                  Há mais de <strong>40 anos</strong>, a igreja iniciou sua trajetória na região de forma humilde, em uma zona rural, com poucos recursos materiais, mas firmada na Palavra de Deus.
                </p>
                <p>
                  Atualmente, estamos situados na <strong>Rua Teresina, 137, Cidade Nova, Santa Bárbara d'Oeste</strong>, onde continuamos desenvolvendo nosso trabalho espiritual, social e comunitário.
                </p>
                <div className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-xl mt-4">
                  <p className="text-blue-800 font-medium">
                    "Uma obra iniciada com fé pode crescer, permanecer e gerar frutos duradouros."
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nossos Valores */}
      <section className="py-12 sm:py-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Nossos Valores Fundamentais
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Princípios que guiam nossa jornada há mais de nove décadas
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {valores.map((valor, index) => (
              <div 
                key={index}
                className="bg-white rounded-xl p-6 shadow-md border border-blue-100 hover:shadow-lg hover:border-blue-300 transition-all duration-300 text-center"
              >
                <div className="text-3xl mb-4">{valor.icon}</div>
                <h3 className="text-xl font-bold text-blue-900 mb-3">{valor.title}</h3>
                <p className="text-slate-600">{valor.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria de Marcos com Fotos Reais */}
      <section className="py-12 sm:py-16 bg-gradient-to-r from-blue-50 to-indigo-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-blue-900 mb-4">
              Marcos da Nossa História
            </h2>
            <p className="text-lg text-slate-700 max-w-2xl mx-auto">
              Momentos que marcaram nossa trajetória de fé
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            {[
              {
                src: "/imagens/1.jpg",
                alt: "Construção do Templo",
                title: "Início da Obra",
                desc: "Anos 80"
              },
              {
                src: "/imagens/2.jpg",
                alt: "Construção do templo",
                title: "Construção",
                desc: "Expansão do ministério"
              },
              {
                src: "/imagens/4.jpg",
                alt: "",
                title: "Pr. Alfredo Rekidal e sua Esposa Thereza",
                desc: ""
              },
              {
                src: "/imagens/5.jpg",
                alt: "Eventos especiais",
                title: "Eventos",
                desc: "Encontros marcantes"
              },
              {
                src: "/imagens/3.jpg",
                alt: "Liderança através dos anos",
                title: "Liderança",
                desc: "Pastores que guiaram"
              },
              {
                src: "/imagens/6.jpg",
                alt: "Comunidade reunida",
                title: "Comunidade",
                desc: "Família em Cristo"
              }
            ].map((foto, index) => (
              <div 
                key={index}
                className="relative aspect-square rounded-xl overflow-hidden border-2 border-white shadow-md hover:shadow-xl transition-all duration-300 group cursor-pointer"
              >
                {/* Imagem */}
                <img
                  src={foto.src}
                  alt={foto.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback se a imagem não carregar
                    (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="400" viewBox="0 0 24 24" fill="%231e40af"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zM8.5 13.5l2.5 3.01L14.5 12l4.5 6H5l3.5-4.5z"/></svg>';
                  }}
                />
                
                {/* Overlay com informações */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div className="text-white">
                    <h3 className="font-bold text-lg">{foto.title}</h3>
                    <p className="text-sm opacity-90">{foto.desc}</p>
                  </div>
                </div>
                
                {/* Ícone de visualização */}
                <div className="absolute top-3 right-3 bg-black/50 text-white p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity">
                  🔍
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Final */}
      <section className="py-12 sm:py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 sm:p-10 text-white text-center shadow-2xl">
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Faça Parte Desta História
            </h2>
            <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
              Nossa jornada continua, e você pode ser parte dos próximos capítulos desta história de fé e transformação.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 font-bold px-8 py-3 rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <Church className="w-5 h-5" />
                Voltar ao Site Principal
              </Link>
              
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  window.location.href = "/#cultos";
                }}
                className="inline-flex items-center justify-center gap-2 bg-white/20 text-white font-bold px-8 py-3 rounded-full hover:bg-white/30 transition-all duration-300 border border-white/30"
              >
                <Clock className="w-5 h-5" />
                Ver Horários de Cultos
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer da Página */}
      <footer className="py-8 border-t border-blue-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-slate-600">
              Com carinho, 
              <span className="block text-blue-900 font-bold text-lg mt-1">
                Assembleia de Deus - Ministério Ipiranga
              </span>
              <span className="text-slate-500 text-sm block mt-1">
                Santa Bárbara d'Oeste - SP
              </span>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}