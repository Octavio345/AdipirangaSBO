// src/components/GaleriaFotos.tsx
import { useState, useEffect } from "react";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  Calendar, 
  MapPin, 
  Users,
  Church,
  Music,
  Heart,
  Search,
  Filter
} from "lucide-react";

interface Foto {
  id: number;
  url: string;
  titulo: string;
  descricao: string;
  data: string;
  local: string;
  categoria: 'culto' | 'evento' | 'congresso' | 'social' | 'missao';
  participantes: number;
}

export default function GaleriaFotos() {
  const [fotos] = useState<Foto[]>([
    {
      id: 1,
      url: "/imagens/UNIMADI.png",
      titulo: "Congresso UNIMADI",
      descricao: "Momento de adoração e louvor no culto dominical",
      data: "2025-11-10",
      local: "Congregação de Sumaré",
      categoria: 'congresso',
      participantes: 250
    },
    {
      id: 2,
      url: "/imagens/Crianças.png",
      titulo: "Culto Infantil",
      descricao: "Noite especial e dinâminca",
      data: "2025-10-05",
      local: "Templo Principal",
      categoria: 'culto',
      participantes: 80
    },
    {
      id: 3,
      url: "/imagens/Congresso_unificado.png",
      titulo: "Congresso Unificado",
      descricao: "Congresso Unificado, Jovens e Irmãs",
      data: "2024-01-20",
      local: "Congregação de Sumaré",
      categoria: 'congresso',
      participantes: 200
    },
    {
      id: 4,
      url: "/imagens/evento_feminino.png",
      titulo: "Encontro das Irmãs",
      descricao: "Confraternização do ministério feminino",
      data: "2025-08-25",
      local: "Templo Principal",
      categoria: 'evento',
      participantes: 50
    },
    {
      id: 5,
      url: "/imagens/enavnegelismo.png",
      titulo: "Evangelismo de Rua",
      descricao: "Ação missionária num dos bairros da cidade",
      data: "2025-08-17",
      local: "Praça",
      categoria: 'missao',
      participantes: 50
    },
    {
      id: 6,
      url: "/imagens/lar.png",
      titulo: "Culto no Lar",
      descricao: "Culto doméstico",
      data: "2025-06-30",
      local: "Casa dos irmãos",
      categoria: 'culto',
      participantes: 40
    }
  ]);

  const [categoriaAtiva, setCategoriaAtiva] = useState<string>('todos');
  const [busca, setBusca] = useState('');
  const [fotoSelecionada, setFotoSelecionada] = useState<Foto | null>(null);
  const [modalAberto, setModalAberto] = useState(false);
  const [carregando] = useState(false);
  const [mostrarInstrucoes, setMostrarInstrucoes] = useState(true);

  // Categorias disponíveis
  const categorias = [
    { id: 'todos', nome: 'Todos os Eventos', icone: <Church className="w-4 h-4" />, cor: 'bg-gray-100 text-gray-800' },
    { id: 'culto', nome: 'Cultos', icone: <Church className="w-4 h-4" />, cor: 'bg-blue-100 text-blue-800' },
    { id: 'evento', nome: 'Eventos', icone: <Calendar className="w-4 h-4" />, cor: 'bg-green-100 text-green-800' },
    { id: 'congresso', nome: 'Congressos', icone: <Users className="w-4 h-4" />, cor: 'bg-purple-100 text-purple-800' },
    { id: 'missao', nome: 'Missões', icone: <Heart className="w-4 h-4" />, cor: 'bg-red-100 text-red-800' },
    { id: 'social', nome: 'Sociais', icone: <Music className="w-4 h-4" />, cor: 'bg-yellow-100 text-yellow-800' },
  ];

  // Esconder instruções após 3 segundos
  useEffect(() => {
    if (modalAberto && mostrarInstrucoes) {
      const timer = setTimeout(() => {
        setMostrarInstrucoes(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [modalAberto, mostrarInstrucoes]);

  // Resetar instruções ao abrir modal
  useEffect(() => {
    if (modalAberto) {
      setMostrarInstrucoes(true);
    }
  }, [modalAberto]);

  // Filtrar fotos
  const fotosFiltradas = fotos.filter(foto => {
    const correspondeCategoria = categoriaAtiva === 'todos' || foto.categoria === categoriaAtiva;
    const correspondeBusca = 
      foto.titulo.toLowerCase().includes(busca.toLowerCase()) ||
      foto.descricao.toLowerCase().includes(busca.toLowerCase()) ||
      foto.local.toLowerCase().includes(busca.toLowerCase());
    
    return correspondeCategoria && correspondeBusca;
  });

  // Formatar data
  const formatarData = (dataString: string) => {
    const data = new Date(dataString);
    return data.toLocaleDateString('pt-BR', {
      day: '2-digit',
      month: 'long',
      year: 'numeric'
    });
  };

  // Navegar entre fotos no modal
  const fotoAnterior = () => {
    if (!fotoSelecionada) return;
    const indexAtual = fotos.findIndex(f => f.id === fotoSelecionada.id);
    const novoIndex = indexAtual > 0 ? indexAtual - 1 : fotos.length - 1;
    setFotoSelecionada(fotos[novoIndex]);
    setMostrarInstrucoes(false);
  };

  const proximaFoto = () => {
    if (!fotoSelecionada) return;
    const indexAtual = fotos.findIndex(f => f.id === fotoSelecionada.id);
    const novoIndex = indexAtual < fotos.length - 1 ? indexAtual + 1 : 0;
    setFotoSelecionada(fotos[novoIndex]);
    setMostrarInstrucoes(false);
  };

  // Abrir modal com foto
  const abrirModal = (foto: Foto) => {
    setFotoSelecionada(foto);
    setModalAberto(true);
    document.body.style.overflow = 'hidden'; // Bloquear scroll
  };

  // Fechar modal
  const fecharModal = () => {
    setModalAberto(false);
    setFotoSelecionada(null);
    setMostrarInstrucoes(true);
    document.body.style.overflow = 'auto'; // Restaurar scroll
  };

  // Teclas para navegação no modal
  useEffect(() => {
    const handleTeclado = (e: KeyboardEvent) => {
      if (!modalAberto) return;
      
      if (e.key === 'Escape') fecharModal();
      if (e.key === 'ArrowLeft') fotoAnterior();
      if (e.key === 'ArrowRight') proximaFoto();
    };

    window.addEventListener('keydown', handleTeclado);
    return () => window.removeEventListener('keydown', handleTeclado);
  }, [modalAberto, fotoSelecionada]);

  return (
    <section id="galeria" className="pt-32 pb-20 bg-gradient-to-b from-white to-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            Galeria de Eventos
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Registros dos momentos especiais da nossa igreja. Cultos, eventos, congressos e muito mais.
          </p>
        </div>

        {/* Filtros e Busca */}
        <div className="mb-12 space-y-8">
          {/* Barra de Busca */}
          <div className="max-w-md mx-auto relative">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Buscar eventos, locais ou descrições..."
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all outline-none"
              />
            </div>
          </div>

          {/* Filtros por Categoria */}
          <div className="overflow-x-auto pb-4">
            <div className="flex space-x-3 min-w-max px-2 py-1">
              {categorias.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setCategoriaAtiva(cat.id)}
                  className={`
                    flex items-center space-x-2 px-4 py-2.5 rounded-lg transition-all whitespace-nowrap
                    ${categoriaAtiva === cat.id 
                      ? `${cat.cor} ring-2 ring-opacity-50 ${cat.id === 'todos' ? 'ring-gray-300' : cat.id === 'culto' ? 'ring-blue-300' : cat.id === 'evento' ? 'ring-green-300' : cat.id === 'congresso' ? 'ring-purple-300' : 'ring-red-300'}`
                      : 'bg-white text-slate-700 hover:bg-slate-50 border border-slate-200'
                    }
                  `}
                >
                  {cat.icone}
                  <span className="font-medium">{cat.nome}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Contador de resultados */}
          <div className="text-center pt-2">
            <p className="text-slate-600 text-sm">
              Mostrando <span className="font-bold text-blue-700">{fotosFiltradas.length}</span> de {fotos.length} eventos
            </p>
          </div>
        </div>

        {/* Grid de Fotos */}
        {carregando ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
          </div>
        ) : fotosFiltradas.length === 0 ? (
          <div className="text-center py-20">
            <Filter className="w-16 h-16 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-700 mb-2">Nenhum evento encontrado</h3>
            <p className="text-slate-500">Tente alterar os filtros ou termos de busca</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {fotosFiltradas.map((foto) => (
              <div
                key={foto.id}
                className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer transform hover:-translate-y-1"
                onClick={() => abrirModal(foto)}
              >
                {/* Container da Imagem */}
                <div className="relative h-56 overflow-hidden">
                  <img
                    src={foto.url}
                    alt={foto.titulo}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='400' height='300' viewBox='0 0 400 300'%3E%3Crect width='400' height='300' fill='%23f1f5f9'/%3E%3Ctext x='200' y='150' font-family='Arial' font-size='16' text-anchor='middle' fill='%2394a3b8'%3EEvento: " + encodeURIComponent(foto.titulo) + "%3C/text%3E%3C/svg%3E";
                    }}
                  />
                  {/* Overlay hover */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                    <p className="text-white text-sm">Clique para expandir</p>
                  </div>
                  {/* Badge de categoria */}
                  <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-semibold ${foto.categoria === 'culto' ? 'bg-blue-500 text-white' : foto.categoria === 'evento' ? 'bg-green-500 text-white' : foto.categoria === 'congresso' ? 'bg-purple-500 text-white' : 'bg-red-500 text-white'}`}>
                    {foto.categoria.charAt(0).toUpperCase() + foto.categoria.slice(1)}
                  </div>
                </div>

                {/* Informações do Evento */}
                <div className="p-5">
                  <h3 className="font-bold text-lg text-gray-800 mb-2 line-clamp-1">
                    {foto.titulo}
                  </h3>
                  <p className="text-slate-600 text-sm mb-4 line-clamp-2">
                    {foto.descricao}
                  </p>
                  
                  <div className="space-y-2">
                    <div className="flex items-center text-slate-500 text-sm">
                      <Calendar className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{formatarData(foto.data)}</span>
                    </div>
                    <div className="flex items-center text-slate-500 text-sm">
                      <MapPin className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span className="truncate">{foto.local}</span>
                    </div>
                    <div className="flex items-center text-slate-500 text-sm">
                      <Users className="w-4 h-4 mr-2 flex-shrink-0" />
                      <span>{foto.participantes.toLocaleString()} participantes</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Modal para visualização ampliada - COMPLETO E CORRIGIDO */}
        {modalAberto && fotoSelecionada && (
          <div className="fixed inset-0 z-50 bg-black/95 animate-fadeIn">
            
            {/* Cabeçalho Mobile - Fixo no topo */}
            <div className="lg:hidden fixed top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/80 to-transparent p-4">
              <div className="flex justify-between items-center">
                <button
                  onClick={fecharModal}
                  className="p-3 bg-black/60 text-white rounded-full backdrop-blur-sm hover:bg-black/80 transition-colors"
                  aria-label="Fechar"
                >
                  <X className="w-6 h-6" />
                </button>
                <div className="text-white text-sm font-medium bg-black/40 px-3 py-1.5 rounded-full">
                  {fotos.findIndex(f => f.id === fotoSelecionada.id) + 1} / {fotos.length}
                </div>
              </div>
            </div>

            {/* Container principal */}
            <div className="h-full flex flex-col lg:items-center lg:justify-center lg:p-8">
              
              {/* Conteúdo do modal */}
              <div className="lg:bg-white lg:rounded-2xl lg:overflow-hidden lg:flex lg:flex-row lg:w-full lg:max-w-7xl lg:h-[90vh] lg:shadow-2xl">
                
                {/* Área da Imagem - ALTURA AJUSTADA para mobile (55vh) */}
                <div className="h-[55vh] lg:h-full lg:w-7/12 xl:w-2/3 bg-black flex items-center justify-center relative">
                  
                  {/* Imagem principal */}
                  <img
                    src={fotoSelecionada.url}
                    alt={fotoSelecionada.titulo}
                    className="max-h-full max-w-full object-contain p-2"
                    onError={(e) => {
                      e.currentTarget.src = "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='600' viewBox='0 0 800 600'%3E%3Crect width='800' height='600' fill='%23000000'/%3E%3Ctext x='400' y='300' font-family='Arial' font-size='20' text-anchor='middle' fill='%23ffffff'%3E" + encodeURIComponent(fotoSelecionada.titulo) + "%3C/text%3E%3C/svg%3E";
                    }}
                  />

                  {/* Áreas clicáveis para navegação */}
                  <button
                    onClick={fotoAnterior}
                    className="absolute left-0 top-0 bottom-0 w-1/3 lg:w-1/4 cursor-pointer"
                    aria-label="Foto anterior"
                  />
                  
                  <button
                    onClick={proximaFoto}
                    className="absolute right-0 top-0 bottom-0 w-1/3 lg:w-1/4 cursor-pointer"
                    aria-label="Próxima foto"
                  />

                  {/* Setas Desktop (aparecem no hover) */}
                  <button
                    onClick={fotoAnterior}
                    className="hidden lg:block absolute left-4 top-1/2 transform -translate-y-1/2 p-4 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all opacity-0 hover:opacity-100"
                    aria-label="Foto anterior"
                  >
                    <ChevronLeft className="w-8 h-8" />
                  </button>
                  
                  <button
                    onClick={proximaFoto}
                    className="hidden lg:block absolute right-4 top-1/2 transform -translate-y-1/2 p-4 bg-black/50 hover:bg-black/80 text-white rounded-full backdrop-blur-sm transition-all opacity-0 hover:opacity-100"
                    aria-label="Próxima foto"
                  >
                    <ChevronRight className="w-8 h-8" />
                  </button>

                  {/* Instruções mobile (aparece brevemente) */}
                  {mostrarInstrucoes && (
                    <div className="lg:hidden absolute bottom-6 left-0 right-0 text-center animate-fadeIn">
                      <div className="inline-flex items-center space-x-2 bg-black/60 text-white/90 px-4 py-2 rounded-full backdrop-blur-sm">
                        <ChevronLeft className="w-4 h-4" />
                        <span className="text-sm">Toque nas laterais para navegar</span>
                        <ChevronRight className="w-4 h-4" />
                      </div>
                    </div>
                  )}

                  {/* Setas Mobile (flutuantes nas laterais) - POSIÇÃO CORRIGIDA */}
                  <div className="lg:hidden absolute inset-y-0 left-2 flex items-center">
                    <button
                      onClick={fotoAnterior}
                      className="p-3 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all"
                      aria-label="Foto anterior"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                  </div>
                  
                  <div className="lg:hidden absolute inset-y-0 right-2 flex items-center">
                    <button
                      onClick={proximaFoto}
                      className="p-3 bg-black/40 hover:bg-black/60 text-white rounded-full backdrop-blur-sm transition-all"
                      aria-label="Próxima foto"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>

                {/* Informações Mobile - SEM OVERFLOW, conteúdo visível */}
                <div className="lg:hidden bg-white rounded-t-3xl mt-4 flex-1 overflow-visible">
                  <div className="p-6 max-h-[45vh] overflow-y-auto">
                    <div className="space-y-4">
                      <div>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-3 ${fotoSelecionada.categoria === 'culto' ? 'bg-blue-100 text-blue-800' : fotoSelecionada.categoria === 'evento' ? 'bg-green-100 text-green-800' : fotoSelecionada.categoria === 'congresso' ? 'bg-purple-100 text-purple-800' : 'bg-red-100 text-red-800'}`}>
                          {fotoSelecionada.categoria.charAt(0).toUpperCase() + fotoSelecionada.categoria.slice(1)}
                        </div>
                        <h3 className="text-xl font-bold text-gray-900 mb-2">
                          {fotoSelecionada.titulo}
                        </h3>
                        <p className="text-slate-700">
                          {fotoSelecionada.descricao}
                        </p>
                      </div>

                      <div className="space-y-3 pt-2">
                        <div className="flex items-start">
                          <Calendar className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">Data do Evento</p>
                            <p className="text-slate-600">{formatarData(fotoSelecionada.data)}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">Local</p>
                            <p className="text-slate-600">{fotoSelecionada.local}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Users className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-800 text-sm">Participantes</p>
                            <p className="text-slate-600">{fotoSelecionada.participantes.toLocaleString()} pessoas</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Informações Desktop (lateral) */}
                <div className="hidden lg:flex lg:w-5/12 xl:w-1/3 flex-col">
                  <div className="p-6 lg:p-8 flex-1 overflow-y-auto">
                    <div className="space-y-6">
                      <div>
                        <div className={`inline-block px-3 py-1 rounded-full text-sm font-semibold mb-4 ${fotoSelecionada.categoria === 'culto' ? 'bg-blue-100 text-blue-800' : fotoSelecionada.categoria === 'evento' ? 'bg-green-100 text-green-800' : fotoSelecionada.categoria === 'congresso' ? 'bg-purple-100 text-purple-800' : 'bg-red-100 text-red-800'}`}>
                          {fotoSelecionada.categoria.charAt(0).toUpperCase() + fotoSelecionada.categoria.slice(1)}
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">
                          {fotoSelecionada.titulo}
                        </h3>
                        <p className="text-slate-700 leading-relaxed">
                          {fotoSelecionada.descricao}
                        </p>
                      </div>

                      <div className="space-y-4 pt-2">
                        <div className="flex items-start">
                          <Calendar className="w-5 h-5 text-blue-600 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-800">Data do Evento</p>
                            <p className="text-slate-600">{formatarData(fotoSelecionada.data)}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <MapPin className="w-5 h-5 text-green-600 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-800">Local</p>
                            <p className="text-slate-600">{fotoSelecionada.local}</p>
                          </div>
                        </div>
                        
                        <div className="flex items-start">
                          <Users className="w-5 h-5 text-purple-600 mt-0.5 mr-3 flex-shrink-0" />
                          <div>
                            <p className="font-semibold text-gray-800">Participantes</p>
                            <p className="text-slate-600">{fotoSelecionada.participantes.toLocaleString()} pessoas</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Rodapé Desktop */}
                  <div className="p-6 lg:p-8 border-t border-slate-200">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4">
                        <div className="text-sm text-slate-500">
                          {fotos.findIndex(f => f.id === fotoSelecionada.id) + 1} de {fotos.length}
                        </div>
                        <p className="text-sm text-slate-500 hidden xl:block">
                          Use as setas ← → ou clique nas laterais
                        </p>
                      </div>
                      <button
                        onClick={fecharModal}
                        className="p-2 hover:bg-slate-100 rounded-full transition-colors"
                        aria-label="Fechar"
                      >
                        <X className="w-5 h-5 text-slate-600" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* CSS para animações */}
      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-out;
        }
        
        .line-clamp-1 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 1;
        }
        
        .line-clamp-2 {
          overflow: hidden;
          display: -webkit-box;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
        }

        /* Melhorar scroll do modal */
        .overflow-y-auto {
          scrollbar-width: thin;
          scrollbar-color: #cbd5e1 #f1f5f9;
        }

        .overflow-y-auto::-webkit-scrollbar {
          width: 6px;
        }

        .overflow-y-auto::-webkit-scrollbar-track {
          background: #f1f5f9;
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb {
          background: #cbd5e1;
          border-radius: 3px;
        }

        .overflow-y-auto::-webkit-scrollbar-thumb:hover {
          background: #94a3b8;
        }
      `}</style>
    </section>
  );
}