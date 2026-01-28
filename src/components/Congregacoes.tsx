// src/components/Congregacoes.tsx
import { MapPin, Church, Calendar, Clock, Users, Heart, BookOpen, Music, Star, Navigation, ChevronUp } from 'lucide-react'; // Adicionei ChevronUp
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react'; // Adicionei useEffect
import Header from './Header';

export default function Congregacoes() {
  const [activeCity, setActiveCity] = useState('todos');
  const [showScrollTop, setShowScrollTop] = useState(false); // Estado para mostrar botão

  // Efeito para mostrar/ocultar botão de scroll
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Função para rolar para o topo
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  // Função para abrir Google Maps com o endereço
  const abrirGoogleMaps = (endereco: string, cidade: string, estado: string) => {
    // Remove caracteres especiais e formata para URL
    const enderecoFormatado = encodeURIComponent(`${endereco}, ${cidade}, ${estado}`);
    // Abre o Google Maps
    window.open(`https://www.google.com/maps/search/?api=1&query=${enderecoFormatado}`, '_blank');
  };

  // Interface para o tipo de culto
  interface Culto {
    dia: string;
    horario: string;
    descricao?: string;
  }

  const congregacoes = [
    {
      id: 1,
      nome: "Congregação de Nova Veneza",
      endereco: "Rua Francisco Salustiano da Silva, 150",
      bairro: "Jardim Volobueff",
      cidade: "Sumaré",
      estado: "SP",
      pastor: "Ev Cleber",
      programacao: {
        cultosPrincipais: [
          { dia: "Terça-feira", horario: "19:30h", descricao: "Culto de Ensino" },
          { dia: "Domingo", horario: "18:30h" }
        ] as Culto[],
        especiais: [
          { tipo: "1º Domingo", descricao: "Culto Público" },
          { tipo: "2º Domingo", descricao: "Culto de Missões" },
          { tipo: "3º Domingo", descricao: "Santa Ceia" },
          { tipo: "4º Domingo", descricao: "Culto com a Família" }
        ],
        outros: [
          "Sábado - 19:00h: Culto (datas variáveis)"
        ]
      }
    },
    {
      id: 2,
      nome: "Congregação São Joaquim - SBO",
      endereco: "Rua Amparo, 315",
      bairro: "São Joaquim",
      cidade: "Santa Bárbara d'Oeste",
      estado: "SP",
      pastor: "Pr. Osiel",
      programacao: {
        cultosPrincipais: [
          { dia: "Sábado", horario: "18:30h" },
          { dia: "Domingo", horario: "18:30h" },
          { dia: "Quarta-feira", horario: "19:30h", descricao: "Culto Público" }
        ] as Culto[],
        especiais: [
          { tipo: "1º Domingo", descricao: "Culto de Missões" },
          { tipo: "2º Domingo", descricao: "Santa Ceia" },
          { tipo: "4º Domingo", descricao: "Culto com as Crianças" },
          { tipo: "2º Sábado", descricao: "Culto com as Irmãs" },
          { tipo: "3º Sábado", descricao: "Culto com os Jovens" },
          { tipo: "4º Sábado", descricao: "Culto com os Varões" }
        ],
        outros: [
          "Segunda-feira - 20:00h: Oração",
          "Sábado - 08:00h: Oração"
        ]
      }
    },
    {
      id: 3,
      nome: "Congregação Praia Azul - Americana",
      endereco: "Rua Carlos Alberto Brasorotto, 815",
      bairro: "Praia Azul",
      cidade: "Americana",
      estado: "SP",
      pastor: "Pr. Laércio",
      programacao: {
        cultosPrincipais: [
          { dia: "Domingo", horario: "18:30h" },
          { dia: "Quarta-feira", horario: "19:30h", descricao: "Culto de Oração e Ensino" }
        ] as Culto[],
        especiais: [
          { tipo: "1º Domingo", descricao: "Culto com a Família" },
          { tipo: "2º Domingo", descricao: "Culto de Missões" },
          { tipo: "3º Domingo", descricao: "Culto de Louvor e Adoração" },
          { tipo: "4º Domingo", descricao: "Santa Ceia" },
          { tipo: "2º Sábado", descricao: "Culto com o Círculo de Oração" },
          { tipo: "3º Sábado", descricao: "Culto com os Jovens" },
          { tipo: "4º Sábado", descricao: "Culto com as Crianças" }
        ],
        outros: [
          "Domingo pela manhã: EBD",
          "Grupo de jovens: Sábados às 19:00h"
        ]
      }
    },
    {
      id: 4,
      nome: "Congregação Jardim Karan - Rio Claro",
      endereco: "Avenida 54, 785",
      bairro: "Jardim Karan",
      cidade: "Rio Claro",
      estado: "SP",
      pastor: "Pr. Elielson",
      programacao: {
        cultosPrincipais: [
          { dia: "Domingo", horario: "18:00h" },
          { dia: "Quinta-feira", horario: "20:00h", descricao: "Culto de Ensino" }
        ] as Culto[],
        especiais: [
          { tipo: "1º Domingo", descricao: "Culto com a Família" },
          { tipo: "2º Domingo", descricao: "Culto de Missões" },
          { tipo: "3º Domingo", descricao: "Santa Ceia" },
          { tipo: "4º Domingo", descricao: "Círculo de Oração ou Mocidade (intercalado)" }
        ],
        outros: [
          "Segunda-feira: Oração com as Irmãs",
          "Quarta-feira: Ensino da Escola Dominical",
          "Sexta-feira: Oração com a Igreja",
          "Semana anterior à Ceia: Semana de Oração e Consagração",
          "Outubro: Culto especial infantil/adolescentes"
        ]
      }
    },
    {
      id: 5,
      nome: "Congregação Regina Bastelli - Limeira",
      endereco: "Rua Oscar Bertoline, 115",
      bairro: "Jardim Regina Bastelli",
      cidade: "Limeira",
      estado: "SP",
      pastor: "Presb. Edilson",
      programacao: {
        cultosPrincipais: [
          { dia: "Quarta-feira", horario: "20:00h", descricao: "Culto de Ensino" }
        ] as Culto[],
        especiais: [
          { tipo: "1º Domingo", descricao: "Culto com os Jovens" },
          { tipo: "2º Domingo", descricao: "Culto de Missões" },
          { tipo: "3º Domingo", descricao: "Culto de Santa Ceia" },
          { tipo: "4º Domingo", descricao: "Culto com a Família" }
        ],
        outros: [
          "Segunda-feira - 19:30h às 20:30h: Oração",
          "Quarta-feira - 19:00h às 20:00h: Ensaio das Irmãs",
          "Sexta-feira: Culto de Louvor e Adoração",
          "3ª Sexta: Culto com as Crianças"
        ]
      }
    },
    {
      id: 6,
      nome: "Congregação Barão de Limeira - Limeira",
      endereco: "Rua Antônio José Massaro, 10",
      bairro: "Barão de Limeira",
      cidade: "Limeira",
      estado: "SP",
      pastor: "Evangelista Edinei",
      programacao: {
        cultosPrincipais: [
          { dia: "Domingo", horario: "19:00h" },
          { dia: "Quarta", horario: "19:30h" },
          { dia: "Sexta", horario: "19:30h" }
        ] as Culto[],
        especiais: [],
        observacoes: "Programação em fase de estruturação - consulte localmente"
      }
    },
    {
      id: 7,
      nome: "Congregação Jardim Glória - Limeira",
      endereco: "Rua Major Francisco Barcellos, 195",
      bairro: "Jardim Glória",
      cidade: "Limeira",
      estado: "SP",
      pastor: "Pr. Eronildo",
      programacao: {
        cultosPrincipais: [
          { dia: "Domingo", horario: "18:00h", descricao: "Culto da Família ou Missões" },
          { dia: "Quarta-feira", horario: "19:30h", descricao: "Culto de Ensino" }
        ] as Culto[],
        outros: [
          "Sexta-feira - 19:30h: Culto",
          "Encontro de jovens: Sábados às 19:00h"
        ]
      }
    },
    {
      id: 8,
      nome: "Congregação Jardim Paulista - Santa Gertrudes",
      endereco: "Avenida Piracicaba, 21",
      bairro: "Jardim Paulista",
      cidade: "Santa Gertrudes",
      estado: "SP",
      pastor: "Pr. Luiz",
      programacao: {
        cultosPrincipais: [
          { dia: "Domingo", horario: "18:30h" },
          { dia: "Terça-feira", horario: "19:30h", descricao: "Culto de Ensino" }
        ] as Culto[],
        especiais: [],
        observacoes: "Em fase de organização da programação completa"
      }
    },
    {
      id: 9,
      nome: "Congregação Jardim das Flores - Piracicaba",
      endereco: "Rua Vitória Régia, 155",
      bairro: "Jardim das Flores",
      cidade: "Piracicaba",
      estado: "SP",
      pastor: "Ev. Cleber",
      programacao: {
        cultosPrincipais: [
          { dia: "Quarta-feira", horario: "19:30h", descricao: "Culto de Oração e Ensino" },
          { dia: "Domingo", horario: "18:30h" }
        ] as Culto[],
        especiais: [
          { tipo: "1º Domingo", descricao: "Santa Ceia" },
          { tipo: "2º Domingo", descricao: "Missões" },
          { tipo: "3º Domingo", descricao: "Família" },
          { tipo: "4º Domingo", descricao: "Cultos intercalados (irmãs e crianças)" }
        ]
      }
    },
    {
      id: 10,
      nome: "Congregação Águas de São Pedro",
      endereco: "Avenida Antônio Joaquim Moura Andrade, 844",
      bairro: "Iporanga",
      cidade: "Águas de São Pedro",
      estado: "SP",
      pastor: "Pr. Damião",
      programacao: {
        cultosPrincipais: [
          { dia: "Domingo", horario: "18:30h" },
          { dia: "Quarta", horario: "19:30h" }
        ] as Culto[],
        especiais: [],
        observacoes: "Programação em fase de estruturação - consulte localmente"
      }
    },
    {
      id: 11,
      nome: "Congregação Rio das Pedras",
      endereco: "Rua José Emílio Bettiol, 940",
      bairro: "Vila Kennedy",
      cidade: "Rio das Pedras",
      estado: "SP",
      pastor: "Pr. Benedito",
      programacao: {
        cultosPrincipais: [
          { dia: "Sexta", horario: "19:30h", descricao: "Culto de Ensino" },
          { dia: "Domingo", horario: "19:00h", descricao: "Culto da Familia" }
        ] as Culto[],
        especiais: [
        ],
        outros: [
          "Fique Atentao para atualizações"
        ],
        observacoes: "Programação em fase de estruturação - consulte localmente"
      }
    }
  ];

  const todasCongregacoes = [...congregacoes];

  // Cidades únicas para filtro
  const cidades = Array.from(new Set(todasCongregacoes.map(c => c.cidade)));

  const congregacoesFiltradas = activeCity === 'todos' 
    ? todasCongregacoes 
    : todasCongregacoes.filter(c => c.cidade === activeCity);

  return (
    <>
      <Header />
      
      <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white pt-20">
        {/* Hero Section */}
        <section className="py-12 sm:py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                <Church className="w-12 h-12 text-blue-700" />
                <h1 className="text-4xl sm:text-5xl font-bold text-blue-900">
                  Nossas Congregações
                </h1>
              </div>
              <p className="text-lg sm:text-xl text-slate-700 max-w-3xl mx-auto">
                Encontre a congregação mais próxima de você e faça parte da nossa família
              </p>
            </div>

            {/* Filtros por Cidade */}
            <div className="mb-12">
              <div className="flex flex-wrap gap-3 justify-center mb-8">
                <button
                  onClick={() => setActiveCity('todos')}
                  className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 flex items-center gap-2 ${activeCity === 'todos' ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border-2 border-blue-200 hover:border-blue-400'}`}
                >
                  <Users className="w-4 h-4" />
                  Todas as Cidades ({todasCongregacoes.length})
                </button>
                
                {cidades.map((cidade) => (
                  <button
                    key={cidade}
                    onClick={() => setActiveCity(cidade)}
                    className={`px-5 py-2.5 rounded-full font-medium transition-all duration-300 ${activeCity === cidade ? 'bg-blue-700 text-white' : 'bg-white text-blue-700 border-2 border-blue-200 hover:border-blue-400'}`}
                  >
                    {cidade}
                  </button>
                ))}
              </div>

              <p className="text-center text-slate-600">
                Mostrando {congregacoesFiltradas.length} congregações
                {activeCity !== 'todos' && ` em ${activeCity}`}
              </p>
            </div>

            {/* Grid de Congregações */}
            <div className="space-y-8">
              {congregacoesFiltradas.map((congregacao) => (
                <div 
                  key={congregacao.id}
                  className="bg-white rounded-2xl shadow-lg border border-blue-100 overflow-hidden hover:shadow-xl transition-all duration-300"
                >
                  <div className="p-6 lg:p-8">
                    <div className="grid lg:grid-cols-3 gap-8">
                      {/* Informações Básicas */}
                      <div className="lg:col-span-1">
                        <div className="flex items-start gap-3 mb-6">
                          <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <Church className="w-6 h-6 text-blue-700" />
                          </div>
                          <div>
                            <h2 className="text-xl font-bold text-blue-900 mb-1">
                              {congregacao.nome}
                            </h2>
                            <div className="inline-flex items-center gap-1 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                              <MapPin className="w-3 h-3" />
                              {congregacao.cidade} - {congregacao.estado}
                            </div>
                          </div>
                        </div>

                        <div className="space-y-4">
                          <div>
                            <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                              <MapPin className="w-4 h-4" />
                              Endereço
                            </h3>
                            <p className="text-slate-700 pl-6">
                              {congregacao.endereco}<br />
                              <span className="text-blue-600">{congregacao.bairro}</span>
                            </p>
                          </div>

                          <div>
                            <h3 className="font-semibold text-slate-800 mb-2 flex items-center gap-2">
                              <Users className="w-4 h-4" />
                              Liderança
                            </h3>
                            <p className="text-slate-700 pl-6">{congregacao.pastor}</p>
                          </div>
                        </div>
                      </div>

                      {/* Programação */}
                      <div className="lg:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                          <Calendar className="w-5 h-5 text-blue-600" />
                          <h3 className="text-lg font-bold text-blue-900">
                            Programação Semanal
                          </h3>
                        </div>

                        <div className="grid sm:grid-cols-2 gap-6">
                          {/* Cultos Principais */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Clock className="w-4 h-4 text-blue-600" />
                              <h4 className="font-semibold text-slate-800">Cultos Regulares</h4>
                            </div>
                            <div className="space-y-3">
                              {congregacao.programacao.cultosPrincipais.map((culto, idx) => (
                                <div 
                                  key={idx} 
                                  className="bg-blue-50 p-3 rounded-lg border border-blue-100"
                                >
                                  <div className="flex justify-between items-start">
                                    <div>
                                      <span className="font-medium text-blue-900">{culto.dia}</span>
                                      <p className="text-slate-700 text-sm mt-1">{culto.descricao || 'Culto'}</p>
                                    </div>
                                    <span className="bg-blue-600 text-white px-2 py-1 rounded text-sm font-medium">
                                      {culto.horario}
                                    </span>
                                  </div>
                                </div>
                              ))}
                            </div>
                          </div>

                          {/* Cultos Especiais */}
                          <div>
                            <div className="flex items-center gap-2 mb-3">
                              <Star className="w-4 h-4 text-yellow-500" />
                              <h4 className="font-semibold text-slate-800">Cultos Especiais</h4>
                            </div>
                            <div className="space-y-3">
                              {congregacao.programacao.especiais && congregacao.programacao.especiais.length > 0 ? (
                                congregacao.programacao.especiais.map((especial, idx) => (
                                  <div 
                                    key={idx} 
                                    className="bg-gradient-to-r from-blue-50 to-indigo-50 p-3 rounded-lg border border-blue-200"
                                  >
                                    <div className="flex items-center gap-2">
                                      <div className={`w-2 h-2 rounded-full ${idx % 3 === 0 ? 'bg-blue-500' : idx % 3 === 1 ? 'bg-green-500' : 'bg-purple-500'}`}></div>
                                      <span className="font-medium text-blue-900">{especial.tipo}:</span>
                                    </div>
                                    <p className="text-slate-700 text-sm mt-1 ml-4">{especial.descricao}</p>
                                  </div>
                                ))
                              ) : (
                                <div className="bg-blue-50 p-3 rounded-lg border border-blue-100">
                                  <p className="text-slate-600 text-center py-2">
                                    Consulte a programação mensal na congregação
                                  </p>
                                </div>
                              )}
                            </div>
                          </div>
                        </div>

                        {/* Outras Atividades */}
                        {(congregacao.programacao.outros || congregacao.programacao.observacoes) && (
                          <div className="mt-6">
                            <div className="flex items-center gap-2 mb-3">
                              <BookOpen className="w-4 h-4 text-green-600" />
                              <h4 className="font-semibold text-slate-800">Outras Atividades</h4>
                            </div>
                            <div className="space-y-2">
                              {congregacao.programacao.outros && congregacao.programacao.outros.map((atividade, idx) => (
                                <div 
                                  key={idx} 
                                  className="flex items-start gap-2 bg-green-50 p-3 rounded-lg border border-green-100"
                                >
                                  <Music className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
                                  <p className="text-slate-700 text-sm">{atividade}</p>
                                </div>
                              ))}
                              {congregacao.programacao.observacoes && (
                                <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100 mt-2">
                                  <p className="text-slate-700 text-sm">📌 {congregacao.programacao.observacoes}</p>
                                </div>
                              )}
                            </div>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Botões de Ação */}
                  <div className="bg-blue-50 px-6 lg:px-8 py-4 border-t border-blue-200">
                    <div className="flex flex-col sm:flex-row gap-3 justify-between items-center">
                      <div className="text-sm text-slate-600">
                        Precisa de mais informações?
                      </div>
                      <div className="flex gap-3">
                        {/* Botão Como Chegar - ABRE GOOGLE MAPS */}
                        <button
                          onClick={() => abrirGoogleMaps(congregacao.endereco, congregacao.cidade, congregacao.estado)}
                          className="inline-flex items-center gap-2 bg-white text-blue-600 border border-blue-300 px-4 py-2 rounded-lg hover:bg-blue-50 transition-colors"
                        >
                          <Navigation className="w-4 h-4" />
                          Como Chegar
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Legenda */}
        <section className="py-8 bg-gradient-to-r from-blue-50 to-indigo-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-blue-100">
              <h3 className="font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Heart className="w-5 h-5 text-red-500" />
                Legenda dos Cultos Especiais
              </h3>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-blue-500"></div>
                  <span className="text-sm text-slate-700">Santa Ceia</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <span className="text-sm text-slate-700">Missões</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-purple-500"></div>
                  <span className="text-sm text-slate-700">Família</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                  <span className="text-sm text-slate-700">Programação Variada</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Final */}
        <section className="py-12 sm:py-16">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-8 sm:p-10 text-white text-center shadow-2xl">
              <h2 className="text-2xl sm:text-3xl font-bold mb-4">
                Não encontrou sua cidade?
              </h2>
              <p className="text-blue-200 mb-6 max-w-2xl mx-auto">
                Entre em contato conosco para saber sobre novas congregações em implantação ou para obter informações mais detalhadas.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/"
                  className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 font-bold px-8 py-3 rounded-full hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 hover:scale-105 shadow-lg"
                >
                  <Church className="w-5 h-5" />
                  Voltar ao Site Principal
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-8 border-t border-blue-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <p className="text-slate-600">
                <span className="block text-blue-900 font-bold text-lg">
                  Assembleia de Deus - Ministério Ipiranga
                </span>
                <span className="text-slate-500 text-sm block mt-1">
                  Rede de Congregações • {todasCongregacoes.length} locais para você adorar
                </span>
              </p>
            </div>
          </div>
        </footer>

              {/* Botão para voltar ao topo - LADO ESQUERDO */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 left-8 p-3 bg-blue-600 text-white rounded-full shadow-lg hover:bg-blue-700 transition-colors z-50"
          aria-label="Voltar ao topo"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
      </div>
    </>
  );
}