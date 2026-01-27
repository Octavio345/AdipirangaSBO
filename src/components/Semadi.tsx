import { Globe, Users, Target, MapPin, ExternalLink, BookOpen, Trophy, Shield, Play, Pause } from 'lucide-react';
import { useRef, useState, useEffect } from 'react';

export default function Semadi() {
  // Link para o site oficial da SEMADI
  const siteOficialUrl = "https://semadi.com.br/";
  
  // Estados para controle do vídeo
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [showPlayButton, setShowPlayButton] = useState(true);
  const [showControls, setShowControls] = useState(false);

  // Função togglePlay atualizada
  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
        setShowPlayButton(true); // Mostra botão ao pausar
      } else {
        videoRef.current.play().catch(error => {
          console.log('Erro ao reproduzir vídeo:', error);
          // Fallback amigável
          const videoContainer = document.querySelector('.video-container');
          if (videoContainer) {
            videoContainer.innerHTML = `
              <div class="w-full h-full bg-gradient-to-br from-blue-900/20 to-blue-700/20 flex flex-col items-center justify-center rounded-2xl p-4">
                <div class="text-4xl mb-3">🎥</div>
                <p class="text-blue-800 font-bold text-center">Vídeo da Base SEMADI</p>
                <p class="text-blue-600 text-sm text-center mt-1">Clique para ver no site oficial</p>
                <a href="${siteOficialUrl}" target="_blank" class="mt-3 px-4 py-2 bg-blue-600 text-white rounded-lg text-sm">
                  Ver no site
                </a>
              </div>
            `;
          }
        });
        setShowPlayButton(false); // Esconde botão ao play
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Esconde botão grande após 2 segundos de reprodução
  useEffect(() => {
    if (isPlaying) {
      const timer = setTimeout(() => {
        setShowPlayButton(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isPlaying]);

  return (
    <section id="semadi" className="py-20 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho com Botão do Site Oficial */}
        <div className="text-center mb-16 relative">
          <div className="inline-flex items-center justify-center gap-3 mb-4">
            <Globe className="w-10 h-10 text-blue-700" />
            <h2 className="text-4xl font-bold text-blue-900">
              SEMADI
            </h2>
          </div>
          <p className="text-lg text-slate-700 max-w-3xl mx-auto mb-8">
            <span className="font-semibold text-blue-800">Secretaria de Missões da Igreja Assembleia de Deus Ministério no Ipiranga</span>
          </p>
          
          {/* Botão para Site Oficial */}
          <a
            href={siteOficialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-gradient-to-r from-blue-700 to-blue-800 text-white font-bold px-8 py-4 rounded-full hover:from-blue-800 hover:to-blue-900 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl"
          >
            <ExternalLink className="w-5 h-5" />
            Acesse o Site Oficial da SEMADI
          </a>
        </div>

        {/* Introdução */}
        <div className="grid lg:grid-cols-2 gap-12 mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-blue-100">
            <h3 className="text-2xl font-bold text-blue-900 mb-6 flex items-center gap-3">
              <BookOpen className="w-7 h-7 text-blue-600" />
              O que é a SEMADI?
            </h3>
            <div className="space-y-4 text-slate-700">
              <p>
                A <strong className="text-blue-800">SEMADI</strong> (Secretaria de Missões da Igreja Assembleia de Deus Ministério no Ipiranga) 
                é o departamento oficial <strong>sem fins lucrativos</strong> dedicado exclusivamente à obra missionária.
              </p>
              <p>
                Atuamos como o braço missionário da igreja, organizando, enviando e acompanhando 
                missionários que levam o Evangelho às nações.
              </p>
              <div className="bg-blue-50 p-4 rounded-xl border-l-4 border-blue-500 mt-4">
                <p className="text-blue-800 font-medium">
                  "Ide por todo o mundo, pregai o evangelho a toda criatura."
                  <span className="text-blue-600 text-sm block mt-1">— Marcos 16:15</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-blue-900 to-blue-800 text-white rounded-2xl p-8 shadow-lg">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <Target className="w-7 h-7 text-yellow-300" />
              Nossa Missão
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Globe className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                <span>Promover o trabalho missionário conforme a visão da igreja</span>
              </li>
              <li className="flex items-start gap-3">
                <Users className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                <span>Enviar e acompanhar missionários no Brasil e exterior</span>
              </li>
              <li className="flex items-start gap-3">
                <Trophy className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                <span>Formar e treinar novos missionários para a obra evangelística</span>
              </li>
              <li className="flex items-start gap-3">
                <Shield className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                <span>Manter a base missionária de treinamento em Itatiba (SP)</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Base Missionária com Vídeo Controlado */}
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-8 shadow-lg border border-blue-200 mb-16">
          <div className="flex flex-col lg:flex-row items-center gap-8">
            <div className="lg:w-2/3">
              <h3 className="text-2xl font-bold text-blue-900 mb-4 flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600" />
                Base Missionária - Itatiba/SP
              </h3>
              <div className="space-y-4 text-slate-700">
                <p>
                  A SEMADI mantém uma <strong>base missionária estratégica</strong> na cidade de Itatiba (SP), 
                  onde realiza treinamento intensivo para candidatos a missionários.
                </p>
                <ul className="space-y-2 pl-4">
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span>Treinamento para missões nacionais e transculturais</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span>Retiros e encontros de capacitação espiritual</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <span>Centro de preparação intercultural</span>
                  </li>
                </ul>
              </div>
              
              {/* Botão Secundário */}
              <a
                href={siteOficialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-6 bg-white text-blue-700 font-semibold px-6 py-3 rounded-lg border-2 border-blue-200 hover:border-blue-400 hover:bg-blue-50 transition-all duration-300"
              >
                <MapPin className="w-4 h-4" />
                Conheça mais sobre nossa base
              </a>
            </div>
            
            {/* Container do Vídeo com Controle Avançado */}
            <div className="lg:w-1/3 text-center">
              <div 
                className="relative w-64 h-64 rounded-2xl overflow-hidden border-4 border-white shadow-xl mx-auto group video-container"
                onMouseEnter={() => setShowControls(true)}
                onMouseLeave={() => !isPlaying && setShowControls(false)}
              >
                
                {/* Vídeo */}
                <video
                  ref={videoRef}
                  src="/imagens/base.mp4"
                  className="w-full h-full object-cover cursor-pointer"
                  onClick={togglePlay}
                  onPlay={() => {
                    setIsPlaying(true);
                    setShowPlayButton(false);
                  }}
                  onPause={() => {
                    setIsPlaying(false);
                    setShowPlayButton(true);
                  }}
                  poster="/imagens/thumbnail-base.jpg"
                  loop
                  playsInline
                  preload="metadata"
                />
                
                {/* Botão Play Grande (só aparece quando pausado ou no hover) */}
                {showPlayButton && (
                  <button
                    onClick={togglePlay}
                    className="absolute inset-0 flex items-center justify-center bg-black/30 backdrop-blur-sm transition-opacity duration-300"
                    aria-label={isPlaying ? "Pausar vídeo" : "Reproduzir vídeo"}
                  >
                    <div className="bg-gradient-to-r from-blue-600 to-blue-800 rounded-full p-5 hover:scale-110 transition-transform duration-300 shadow-2xl">
                      <Play className="w-12 h-12 text-white ml-1" />
                    </div>
                  </button>
                )}
                
                {/* Controles na Barra Inferior (sempre visíveis ou no hover) */}
                <div className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-3 transition-opacity duration-300 ${showControls || !isPlaying ? 'opacity-100' : 'opacity-0'}`}>
                  <div className="flex justify-between items-center">
                    <div className="text-white">
                      <p className="font-bold text-sm">Base SEMADI Itatiba</p>
                      <p className="text-xs opacity-80">
                        {isPlaying ? '▶ Reproduzindo' : '⏸ Pausado'}
                      </p>
                    </div>
                    
                    <button
                      onClick={togglePlay}
                      className="bg-white/20 hover:bg-white/30 text-white p-2 rounded-full transition-colors"
                      aria-label={isPlaying ? "Pausar" : "Reproduzir"}
                    >
                      {isPlaying ? (
                        <Pause className="w-4 h-4" />
                      ) : (
                        <Play className="w-4 h-4 ml-0.5" />
                      )}
                    </button>
                  </div>
                </div>              
              </div>
              
              {/* Legenda do Vídeo */}
              <p className="text-slate-600 text-sm mt-3 max-w-xs mx-auto">
                Clique no vídeo para controlar a reprodução
              </p>
            </div>
          </div>
        </div>

  

        {/* Versículo Final */}
        <div className="mt-12 text-center">
          <div className="inline-block bg-gradient-to-r from-blue-900 to-blue-800 text-white p-6 rounded-2xl shadow-lg max-w-2xl">
            <p className="text-xl font-bold mb-2">
              "Portanto, ide e fazei discípulos de todas as nações, batizando-os em nome do Pai, 
              e do Filho, e do Espírito Santo;"
            </p>
            <p className="text-blue-200">Mateus 28:19</p>
          </div>
        </div>

      </div>
    </section>
  );
}