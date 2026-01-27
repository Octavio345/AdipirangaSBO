// src/components/AgendaCard.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import { CalendarDays } from 'lucide-react';

const AgendaCard: React.FC = () => {
  return (
    <section id="agenda" className="py-16 bg-gradient-to-b from-white to-blue-50">
      <div className="max-w-6xl mx-auto px-4">
        <div className="text-center mb-10">
          <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
            <CalendarDays className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Agenda Setorial 2026
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Confira a programação completa de eventos, reuniões e celebrações do nosso setor.
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-200">
          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">50+</div>
                <div className="text-gray-700">Eventos Anuais</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">12</div>
                <div className="text-gray-700">Mesês de Programação</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">10+</div>
                <div className="text-gray-700">Cidades Atendidas</div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-blue-50 rounded-xl">
              <h3 className="text-xl font-bold text-blue-900 mb-3">
                Destaques do Mês
              </h3>
              <ul className="space-y-2">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Culto de Ações de Graças</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">Reuniões Ministeriais</span>
                </li>
              </ul>
            </div>

            <div className="mt-8 text-center">
              <Link 
                to="/agenda" 
                className="inline-flex items-center justify-center px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors shadow-md"
              >
                <CalendarDays className="w-5 h-5 mr-2" />
                Ver Agenda Completa
              </Link>
              <p className="text-gray-500 text-sm mt-4">
                Programação sujeita a alterações. Atualizações semanais.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AgendaCard;