import { useState } from "react";
import { Baby, Users, Heart, ChevronDown, ChevronUp } from "lucide-react";

interface Departamento {
  id: number;
  icon: React.ReactNode;
  titulo: string;
  descricaoCurta: string;
  descricaoLonga: string;
  fotos: string[];
  cor: string;
}

export default function Departamentos() {
  const [ativo, setAtivo] = useState<number | null>(null);
  const [animando, setAnimando] = useState<number | null>(null);

  const departamentos: Departamento[] = [
    {
      id: 1,
      icon: <Baby className="w-12 h-12 mx-auto mb-4" />,
      titulo: "Crianças",
      descricaoCurta: "Ensinando a Palavra de Deus desde cedo com amor e cuidado.",
      descricaoLonga: "Os Cordeirinhos de Cristo é o departamento infantil da nossa igreja, dedicado a ensinar os valores cristãos às crianças de forma lúdica e envolvente. Com atividades, músicas e histórias bíblicas adaptadas, criamos um ambiente seguro onde as crianças podem crescer no conhecimento de Deus enquanto se divertem.",
      fotos: ["/imagens/criancas.jpg"],
      cor: "text-blue-700",
    },
    {
      id: 2,
      icon: <Users className="w-12 h-12 mx-auto mb-4" />,
      titulo: "Jovens",
      descricaoCurta: "Uma geração comprometida com Cristo e com o chamado.",
      descricaoLonga: "Os Jovens Mananciais é o departamento dos jovem, reúne adolescentes e jovens adultos para fortalecer sua fé através de estudos bíblicos profundos, encontros sociais e atividades missionárias.",
      fotos: ["/imagens/jovens.jpg"],
      cor: "text-green-600",
    },
    {
      id: 3,
      icon: <Heart className="w-12 h-12 mx-auto mb-4" />,
      titulo: "Irmãs",
      descricaoCurta: "Mulheres edificadas para servir com fé e dedicação.",
      descricaoLonga: "As Herdeiras do Rei é o Círculo de Oração da nossa igreja, dedicado ao fortalecimento espiritual e ao cuidado emocional das mulheres. Por meio de momentos de oração, estudos da Palavra de Deus e eventos espirituais, o grupo busca edificar vidas, promover comunhão cristã e incentivar uma caminhada firme nos princípios bíblicos, alcançando mulheres de todas as idades.",
      fotos: ["/imagens/irmas.jpeg"],
      cor: "text-pink-600",
    },
  ];

  const handleClick = (id: number) => {
    if (ativo === id) {
      setAnimando(id);
      setTimeout(() => {
        setAtivo(null);
        setAnimando(null);
      }, 300);
    } else {
      setAnimando(id);
      setAtivo(id);
      setTimeout(() => {
        setAnimando(null);
      }, 300);
    }
  };

  return (
    <section id="departamentos" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-14">
        Nossos Departamentos
      </h2>

      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {departamentos.map((dept) => (
          <div key={dept.id} className="overflow-hidden">
            {/* Card principal */}
            <div
              className={`
                bg-slate-50 rounded-2xl p-8 text-center shadow-lg 
                hover:shadow-xl transition-all duration-300 cursor-pointer
                ${ativo === dept.id ? 'rounded-b-none shadow-2xl' : ''}
                ${animando === dept.id ? 'scale-[1.02]' : ''}
              `}
              onClick={() => handleClick(dept.id)}
            >
              <div className="flex flex-col md:flex-row items-center justify-between">
                <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6 mb-4 md:mb-0">
                  <div className={dept.cor}>
                    {dept.icon}
                  </div>
                  <div className="text-center md:text-left">
                    <h3 className="font-bold text-2xl mb-2 text-gray-800">
                      {dept.titulo}
                    </h3>
                    <p className="text-slate-600">
                      {dept.descricaoCurta}
                    </p>
                  </div>
                </div>
                <div className={dept.cor}>
                  {ativo === dept.id ? (
                    <ChevronUp className="w-8 h-8 transition-transform duration-300" />
                  ) : (
                    <ChevronDown className="w-8 h-8 transition-transform duration-300" />
                  )}
                </div>
              </div>
            </div>

            {/* Conteúdo expandido */}
            <div
              className={`
                bg-gradient-to-b from-slate-50 to-white rounded-b-2xl shadow-lg
                transition-all duration-500 ease-in-out overflow-hidden
                ${ativo === dept.id 
                  ? 'max-h-[800px] opacity-100 translate-y-0' 
                  : 'max-h-0 opacity-0 -translate-y-4'
                }
              `}
            >
              <div className="p-6 md:p-8">
                {/* Descrição detalhada */}
                <div className="mb-8 md:mb-10">
                  <h4 className="text-xl font-semibold text-gray-800 mb-4">
                    Sobre o Departamento
                  </h4>
                  <p className="text-slate-700 leading-relaxed">
                    {dept.descricaoLonga}
                  </p>
                </div>

                {/* Galeria de fotos - Layout para 1 foto */}
                <div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-6">
                    Nosso Departamento
                  </h4>
                  
                  <div
                    className={`
                      max-w-2xl mx-auto
                      transition-all duration-500
                      ${animando === dept.id 
                        ? 'opacity-0 scale-95' 
                        : 'opacity-100 scale-100'
                      }
                    `}
                    style={{
                      animationDelay: ativo === dept.id ? '100ms' : '0ms',
                      animation: ativo === dept.id 
                        ? 'fadeInScale 0.6s ease forwards' 
                        : 'none'
                    }}
                  >
                    <div className="relative rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-shadow duration-300">
                      <div className="w-full h-64 md:h-72 bg-slate-100">
                        {/* AJUSTE ESPECÍFICO PARA A FOTO DOS JOVENS */}
                        <img
                          src={dept.fotos[0]}
                          alt={`Departamento ${dept.titulo}`}
                          className={`
                            w-full h-full hover:scale-105 transition-transform duration-500
                            ${dept.titulo === "Jovens" 
                              ? 'object-contain' // Para Jovens: mostra imagem inteira sem cortar
                              : 'object-cover'   // Para outros: preenche o container
                            }
                          `}
                          style={{ 
                            backgroundColor: '#f8fafc',
                            // Ajuste adicional para a foto dos Jovens se necessário
                            ...(dept.titulo === "Jovens" && { objectPosition: 'center top' })
                          }}
                          onError={(e) => {
                            e.currentTarget.style.display = 'none';
                            const parent = e.currentTarget.parentElement;
                            if (parent) {
                              const fallbackText = document.createElement('div');
                              fallbackText.className = 'flex items-center justify-center w-full h-full text-slate-400 text-center p-4';
                              fallbackText.innerHTML = `
                                <div>
                                  <svg class="w-16 h-16 mx-auto mb-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                                  </svg>
                                  <p class="text-lg font-medium">Departamento ${dept.titulo}</p>
                                  <p class="text-sm mt-1">Em breve mais fotos</p>
                                </div>
                              `;
                              parent.appendChild(fallbackText);
                            }
                          }}
                        />
                      </div>
                      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                        <p className="text-white font-medium text-lg">
                          {dept.titulo} em ação
                        </p>
                      </div>
                    </div>
                    <p className="text-center text-slate-600 mt-4 text-sm">
                      Conheça o trabalho do departamento {dept.titulo} na nossa igreja
                    </p>
                  </div>
                </div>

                {/* Informações adicionais */}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}