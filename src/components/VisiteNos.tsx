import { MapPin, Clock, Accessibility, Users, Calendar, Music, Instagram, Facebook, Home } from 'lucide-react';

export default function VisiteNos() {
  // Endereço da igreja local
  const enderecoLocal = {
    rua: "Rua Terezina, 137",
    bairro: "Cidade Nova",
    cidade: "Santa Bárbara D'Oeste - SP",
    cep: "13457-000"
  };

  // Endereço da sede matriz em São Paulo
  const sedeMatriz = {
    rua: "Av. Dr. Ricardo Jafet, 214",
    bairro: "Ipiranga",
    cidade: "São Paulo - SP",
    cep: "04260-020"
  };

  const horarios = [
    { 
      dia: "Terça-feira", 
      titulo: "Culto de Ensino",
      horario: "20h",
      descricao: "Momento de aprendizado e crescimento espiritual",
      icon: "📖"
    },
    { 
      dia: "Quinta-feira", 
      titulo: "Culto",
      horario: "19h30",
      descricao: "Culto de louvor e adoração",
      icon: "🙏"
    },
    { 
      dia: "Domingo", 
      titulo: "EBD – Escola Bíblica Dominical",
      horario: "09h",
      descricao: "Estudo bíblico para todas as idades",
      icon: "✝️"
    },
    { 
      dia: "Domingo", 
      titulo: "Culto da Família",
      horario: "18h30",
      descricao: "Culto especial para toda a família",
      icon: "👨‍👩‍👧‍👦"
    },
  ];

  const facilidades = [
    { icon: <Accessibility className="w-5 h-5" />, text: "Acesso para PCD" },
    { icon: <Users className="w-5 h-5" />, text: "Ministério Infantil" },
    { icon: <Music className="w-5 h-5" />, text: "Louvor ao vivo" },
    { icon: <Calendar className="w-5 h-5" />, text: "Eventos mensais" },
  ];

  const redesSociais = [
    { 
      nome: "Instagram", 
      icon: <Instagram className="w-5 h-5" />, 
      link: "https://instagram.com/adipirangasbo",
      usuario: "@adipirangasbo"
    },
    { 
      nome: "Facebook", 
      icon: <Facebook className="w-5 h-5" />, 
      link: "https://www.facebook.com/adipirangasubsedesbo?locale=pt_BR",
      usuario: "AD Ipiranga SBO"
    },
  ];

  // URLs do Google Maps
  const googleMapsLocal = `https://www.google.com/maps?q=${encodeURIComponent('Rua Terezina, 137, Cidade Nova, Santa Bárbara D\'Oeste, SP')}&output=embed`;
  // Corrigido: Variável usada agora (sem erro TypeScript)
  const googleMapsMatriz = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Av. Dr. Ricardo Jafet, 214, Ipiranga, São Paulo, SP')}`;

  return (
    <section id="visite" className="py-16 bg-gradient-to-b from-blue-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-blue-900 mb-4">
            Venha nos Visitar
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Estamos de portas abertas para receber você e sua família. 
            Encontre conforto, paz e comunhão em nossa igreja.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Coluna da Esquerda - Mapa e Endereços */}
          <div className="space-y-8">
            
            {/* Mapa da Igreja Local */}
            <div className="rounded-2xl overflow-hidden shadow-xl border-2 border-white">
              <div className="h-96">
                <iframe
                  src={googleMapsLocal}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Localização da AD Ipiranga em Santa Bárbara D'Oeste"
                  className="rounded-lg"
                />
              </div>
              
              {/* Botão para abrir no Google Maps */}
              <a
                href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent('Rua Terezina, 137, Cidade Nova, Santa Bárbara D\'Oeste, SP')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-semibold text-center hover:from-blue-700 hover:to-blue-800 transition-all duration-300 flex items-center justify-center gap-2"
              >
                <MapPin className="w-5 h-5" />
                Ver no Google Maps
              </a>
            </div>

            {/* Endereço da Igreja Local */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <MapPin className="w-6 h-6 text-blue-600" />
                Nossa Igreja em SBO
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-slate-800 text-lg">{enderecoLocal.rua}</p>
                    <p className="text-slate-600">{enderecoLocal.bairro}</p>
                    <p className="text-slate-600">{enderecoLocal.cidade}</p>
                    <p className="text-slate-500 text-sm mt-2">
                      <strong>Ponto de referência:</strong> Próximo ao Supermercado Pague Menos
                    </p>
                  </div>
                </div>
                
                {/* Como chegar */}
                <div className="mt-4 pt-4 border-t border-slate-200">
                  <h4 className="font-semibold text-slate-800 mb-2">Como chegar:</h4>
                  <ul className="space-y-2 text-sm text-slate-600">
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span>Vindo do Centro: Pegue a Av. Santa Bárbara até a Rua Terezina</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="w-2 h-2 bg-blue-500 rounded-full mt-2"></span>
                      <span>Vindo da Rodovia: SP-306, sentido Cidade Nova</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Sede Matriz em São Paulo */}
            <div className="bg-gradient-to-r from-blue-900 to-blue-800 rounded-2xl p-6 shadow-lg text-white">
              <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                <Home className="w-6 h-6 text-yellow-300" />
                Sede Matriz - São Paulo
              </h3>
              <div className="space-y-3">
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-yellow-300 mt-1 flex-shrink-0" />
                  <div>
                    <p className="font-semibold text-lg">{sedeMatriz.rua}</p>
                    <p className="text-blue-200">{sedeMatriz.bairro}</p>
                    <p className="text-blue-200">{sedeMatriz.cidade}</p>
                    <p className="text-blue-300 text-sm mt-2">
                      CEP: {sedeMatriz.cep}
                    </p>
                  </div>
                </div>
                
                {/* AGORA USANDO A VARIÁVEL googleMapsMatriz - SEM ERRO! */}
                <a
                  href={googleMapsMatriz}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-white text-blue-900 font-semibold rounded-lg hover:bg-blue-100 transition-all duration-300"
                >
                  <MapPin className="w-4 h-4" />
                  Ver localização da matriz
                </a>
              </div>
            </div>
          </div>

          {/* Coluna da Direita - Informações */}
          <div className="space-y-8">
            
            {/* Redes Sociais */}
            <div className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-2xl p-6 shadow-lg border border-indigo-100">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Siga-nos nas Redes Sociais
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {redesSociais.map((rede, index) => (
                  <a
                    key={index}
                    href={rede.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-between p-4 bg-white rounded-xl border border-indigo-100 hover:border-indigo-300 hover:shadow-md transition-all duration-300 group"
                  >
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                        rede.nome === 'Instagram' 
                          ? 'bg-gradient-to-r from-pink-500 to-orange-400' 
                          : 'bg-blue-600'
                      }`}>
                        {rede.icon}
                      </div>
                      <div>
                        <span className="font-semibold text-slate-800">{rede.nome}</span>
                        <p className="text-slate-600 text-sm">{rede.usuario}</p>
                      </div>
                    </div>
                    <span className="text-blue-600 font-medium group-hover:text-blue-800 transition-colors">
                      Seguir →
                    </span>
                  </a>
                ))}
              </div>
              <p className="text-slate-600 text-sm mt-4 text-center">
                Fique por dentro das novidades, eventos e mensagens inspiradoras
              </p>
            </div>

            {/* Horários de Cultos */}
            <div className="bg-white rounded-2xl p-6 shadow-lg border border-slate-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4 flex items-center gap-2">
                <Calendar className="w-6 h-6 text-blue-600" />
                Cultos & Horários
              </h3>
              <div className="grid gap-4">
                {horarios.map((culto, index) => (
                  <div 
                    key={index} 
                    className="bg-white p-4 rounded-xl hover:shadow-lg transition-all duration-300 border border-slate-100 hover:border-blue-200"
                  >
                    <div className="flex items-start gap-4">
                      <div className="text-2xl">{culto.icon}</div>
                      <div className="flex-1">
                        <h4 className="font-bold text-lg text-blue-900">{culto.titulo}</h4>
                        <p className="text-slate-600 text-sm mt-1">{culto.descricao}</p>
                      </div>
                      <div className="flex flex-col items-end">
                        <div className="flex items-center gap-2 text-blue-700 font-semibold">
                          <Clock className="w-4 h-4" />
                          <span>{culto.horario}</span>
                        </div>
                        <span className="text-slate-500 text-sm mt-1">{culto.dia}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              
              {/* Santa Ceia */}
              <div className="mt-6 p-4 bg-gradient-to-r from-blue-900 to-blue-800 text-white rounded-xl border border-blue-700 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="text-2xl">🍞</div>
                  <div>
                    <h4 className="font-bold text-lg">Santa Ceia do Senhor</h4>
                    <p className="text-blue-200 text-sm">Todo primeiro sábado do mês</p>
                  </div>
                </div>
                <p className="text-blue-100 text-sm mt-2">
                  Celebração especial da comunhão com Cristo e com os irmãos
                </p>
              </div>
            </div>

            {/* Facilidades */}
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl p-6 shadow-lg border border-blue-200">
              <h3 className="text-xl font-bold text-blue-900 mb-4">
                Estrutura e Comodidades
              </h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {facilidades.map((facilidade, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white/80 rounded-lg border border-blue-100 hover:border-blue-300 hover:shadow-sm transition-all duration-300"
                  >
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                      <div className="text-blue-600">
                        {facilidade.icon}
                      </div>
                    </div>
                    <span className="text-slate-700 font-medium">{facilidade.text}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}