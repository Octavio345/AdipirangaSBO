// src/components/AgendaSetorial.tsx
import React from 'react';

interface Evento {
  data: string;
  descricao: string;
  mes?: string; // Opcional, para agrupamento por mês
}

const AgendaSetorial: React.FC = () => {
  const eventos: Evento[] = [
    // Janeiro
    { data: '10', descricao: 'Reunião Ministerial Sede Matriz (Eleição de Diretoria)', mes: 'Janeiro' },
    { data: '10', descricao: 'Reunião Setorial / Santa Ceia Setorial', mes: 'Janeiro' },

    // Fevereiro
    { data: '07', descricao: 'Aniversário da Missionária Priscila', mes: 'Fevereiro' },
    { data: '14', descricao: 'Reunião Ministerial - Sede Matriz', mes: 'Fevereiro' },
    { data: '14', descricao: 'Aniversário do Evangelista Cleber Nova - Veneza', mes: 'Fevereiro' },
    { data: '28', descricao: 'Café com a Liderança COJADI - Sede Matriz', mes: 'Fevereiro' },

    // Março
    { data: '07', descricao: 'Santa Ceia Setorial', mes: 'Março' },
    { data: '14', descricao: 'Convenção (COMOESPO)', mes: 'Março' },
    { data: '21 e 22', descricao: 'Congresso de Missões SEMADI - Sede Matriz', mes: 'Março' },
    { data: '28', descricao: 'Congresso COJADI Setorial - Santa Bárbara d\'Oeste', mes: 'Março' },

    // Abril
    { data: '04', descricao: 'Santa Ceia Setorial', mes: 'Abril' },
    { data: '10 e 11', descricao: 'Festividade Unificada - Barão de Limeira', mes: 'Abril' },
    { data: '11', descricao: 'Reunião Ministerial - Sede Matriz', mes: 'Abril' },
    { data: '17 e 18', descricao: 'Festividade Unificada - Sede Setor Cidade Nova', mes: 'Abril' },
    { data: '18', descricao: 'Culto com as Missionárias - Sede Matriz', mes: 'Abril' },

    // Maio
    { data: '02', descricao: 'Santa Ceia Setorial', mes: 'Maio' },
    { data: '09', descricao: 'EBOM - Sede Matriz', mes: 'Maio' },
    { data: '15 e 16', descricao: 'Festividade dos Varões - São Joaquim', mes: 'Maio' },
    { data: '29 e 30', descricao: 'Festividade Unificada - Praia Azul', mes: 'Maio' },

    // Junho
    { data: '04 e 05', descricao: 'Festividade Unificada - Santa Gertrudes', mes: 'Junho' },
    { data: '06', descricao: 'Santa Ceia Setorial', mes: 'Junho' },
    { data: '13', descricao: 'Reunião Ministerial - Sede Matriz', mes: 'Junho' },
    { data: '13 e 14', descricao: 'Festividade Crianças - Sede setor', mes: 'Junho' },
    { data: '20', descricao: 'Aniversário do Pastor Oséias', mes: 'Junho' },
    { data: '26 e 27', descricao: 'Festividade Unificada - Regina Bastelli', mes: 'Junho' },
    { data: '27', descricao: 'Congresso JOADI - Sede Matriz (Participação COJADI)', mes: 'Junho' },

    // Julho
    { data: '04', descricao: 'Santa Ceia Setorial', mes: 'Julho' },
    { data: '11', descricao: 'Reunião Ministerial - Sede Matriz', mes: 'Julho' },
    { data: '11', descricao: 'Aniversário do Pastor Osiel - São Joaquim', mes: 'Julho' },
    { data: '25', descricao: 'Escola Bíblica para Jovens e Lideranças Sede Matriz', mes: 'Julho' },
    { data: '25 e 26', descricao: 'Festividade Unificada - Rio Claro', mes: 'Julho' },

    // Agosto
    { data: '01', descricao: 'Santa Ceia Setorial', mes: 'Agosto' },
    { data: '07 e 08', descricao: 'Festividade Unificada - São Joaquim', mes: 'Agosto' },
    { data: '08', descricao: 'Reunião Ministerial - Sede Matriz', mes: 'Agosto' },
    { data: '16', descricao: 'Reunião Setorial - Sede Setor Santa Bárbara d\'Oeste', mes: 'Agosto' },
    { data: '22', descricao: 'Aniversário do Pastor Elielson - Rio Claro', mes: 'Agosto' },
    { data: '28 e 29', descricao: 'Festividade Unificada - Jardim Glória', mes: 'Agosto' },

    // Setembro
    { data: '05', descricao: 'Santa Ceia Setorial', mes: 'Setembro' },
    { data: '12', descricao: 'Reunião Ministerial - Sede Matriz', mes: 'Setembro' },
    { data: '18 e 19', descricao: 'Festividade das Crianças - São Joaquim', mes: 'Setembro' },
    { data: '25 e 26', descricao: 'Festividade Unificada - Nova Veneza', mes: 'Setembro' },
    { data: '27', descricao: 'Festividade das Crianças - Praia Azul', mes: 'Setembro' },

    // Outubro
    { data: '03', descricao: 'Santa Ceia Setorial', mes: 'Outubro' },
    { data: '10', descricao: 'Convenção AGE COMOESPO - Consagração e Recebimento de Obreiros (Pastores e Evangelistas)', mes: 'Outubro' },
    { data: '16 e 17', descricao: 'Eventos Crianças - Sede Setor', mes: 'Outubro' },
    { data: '23 e 24', descricao: 'Festividade Unificada - Piracicaba', mes: 'Outubro' },
    { data: '31', descricao: 'Congresso CAADI - Sede Matriz', mes: 'Outubro' },

    // Novembro
    { data: '07', descricao: 'Santa Ceia Setorial', mes: 'Novembro' },
    { data: '14', descricao: 'Reunião Ministerial - Consagração e Recebimento de Obreiros (Presbíteros e Diáconos)', mes: 'Novembro' },
    { data: '21', descricao: 'Congresso UNIMADI Setorial SBO', mes: 'Novembro' },
    { data: '21', descricao: 'CETADI - Curso de Capelania (Sede Matriz)', mes: 'Novembro' },
    { data: '28', descricao: 'Congresso COJADI Geral - Sede Matriz', mes: 'Novembro' },

    // Dezembro
    { data: '05', descricao: 'Santa Ceia Setorial', mes: 'Dezembro' },
    { data: '12', descricao: 'Aniversário do Pastor Alcides Favaro', mes: 'Dezembro' },
    { data: '19', descricao: 'Culto Especial Setorial de Natal', mes: 'Dezembro' },
    { data: '31', descricao: 'Culto da Virada do Ano', mes: 'Dezembro' },
  ];

  // Agrupar eventos por mês
  const eventosPorMes = eventos.reduce((acc, evento) => {
    if (evento.mes) {
      if (!acc[evento.mes]) {
        acc[evento.mes] = [];
      }
      acc[evento.mes].push(evento);
    }
    return acc;
  }, {} as Record<string, Evento[]>);

  return (
    
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-gray-100">
      <div className="max-w-6xl mx-auto px-4 py-12">
        {/* Cabeçalho */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-blue-900 mb-4">
            <br />
            Agenda Setorial 2026
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Programação anual de eventos, reuniões e celebrações do Setor. 
            Fique por dentro de todas as atividades da nossa igreja.
          </p>
        </div>

        {/* Calendário de Eventos */}
        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-6 md:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
              {Object.entries(eventosPorMes).map(([mes, eventosMes], index) => (
                <div 
                  key={mes} 
                  className="bg-gray-50 rounded-xl p-4 md:p-6 border border-gray-200 hover:shadow-lg transition-shadow duration-300"
                >
                  <h2 className="text-xl md:text-2xl font-bold text-blue-800 mb-3 md:mb-4 pb-2 border-b border-blue-200">
                    {mes}
                  </h2>
                  <div className="space-y-2 md:space-y-3">
                    {eventosMes.map((evento, idx) => (
                      <div 
                        key={idx} 
                        className="flex items-start p-2 md:p-3 bg-white rounded-lg hover:bg-blue-50 transition-colors"
                      >
                        <div className="w-16 md:w-20 flex-shrink-0">
                          <div className={`inline-flex items-center justify-center ${
                            evento.data.includes(' e ') 
                              ? 'min-w-16 md:min-w-20 px-2 py-1.5' 
                              : 'w-12 h-12'
                          } bg-blue-100 text-blue-700 font-bold rounded-lg text-sm md:text-base`}>
                            {evento.data}
                          </div>
                        </div>
                        <div className="flex-1 ml-3 md:ml-4 min-w-0">
                          <p className="text-gray-800 text-sm md:text-base break-words">
                            {evento.descricao}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Assinaturas */}
          <div className="bg-gradient-to-r from-blue-900 to-blue-800 p-6 md:p-8">
            <div className="max-w-4xl mx-auto">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4 md:gap-6">
                <div className="text-center md:text-left">
                  <p className="text-white text-lg md:text-xl font-bold">Pr. Presidente Alcides Favaro</p>
                  <p className="text-blue-200 text-xs md:text-sm">Presidente</p>
                </div>
                <div className="text-center">
                  <p className="text-white text-lg md:text-xl font-bold">Pr. Setorial Oséias Oliveira</p>
                  <p className="text-blue-200 text-xs md:text-sm">e Missionária Priscila</p>
                </div>
                <div className="text-center md:text-right">
                  <p className="text-white text-base md:text-lg">Assembleia de Deus Min. Ipiranga</p>
                  <p className="text-blue-200 text-xs md:text-sm">Fundada em 1931</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Aviso */}
        <div className="mt-6 md:mt-8 p-4 md:p-6 bg-yellow-50 border border-yellow-200 rounded-xl">
          <p className="text-center text-gray-700 text-sm md:text-base">
            <span className="font-bold">Observação:</span> Datas sujeitas a alterações. 
            Consulte os comunicados semanais para informações atualizadas.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AgendaSetorial;