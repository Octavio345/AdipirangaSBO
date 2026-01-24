import { Calendar, Clock } from "lucide-react";

export default function Cultos() {
  return (
    <section id="cultos" className="py-20 bg-blue-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-12">
        Cultos & Eventos
      </h2>

      <div className="max-w-5xl mx-auto grid gap-8 px-6 md:grid-cols-2">

        {/* TERÇA */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <Calendar className="text-blue-700 mb-2" />
          <h3 className="font-bold text-lg">Culto de Ensino</h3>
          <p className="flex items-center gap-2 text-slate-600 mt-2">
            <Clock size={16} /> Terça-feira – 20h
          </p>
        </div>

        {/* QUINTA */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <Calendar className="text-blue-700 mb-2" />
          <h3 className="font-bold text-lg">Culto</h3>
          <p className="flex items-center gap-2 text-slate-600 mt-2">
            <Clock size={16} /> Quinta-feira – 19h30
          </p>
        </div>

        {/* DOMINGO MANHÃ */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <Calendar className="text-blue-700 mb-2" />
          <h3 className="font-bold text-lg">EBD – Escola Bíblica Dominical</h3>
          <p className="flex items-center gap-2 text-slate-600 mt-2">
            <Clock size={16} /> Domingo – 09h
          </p>
        </div>

        {/* DOMINGO NOITE */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <Calendar className="text-blue-700 mb-2" />
          <h3 className="font-bold text-lg">Culto da Família</h3>
          <p className="flex items-center gap-2 text-slate-600 mt-2">
            <Clock size={16} /> Domingo – 18h30
          </p>
        </div>

      </div>

      {/* SANTA CEIA */}
      <div className="max-w-xl mx-auto mt-12 bg-blue-900 text-white p-6 rounded-2xl text-center shadow-lg">
        <h3 className="font-bold text-lg mb-2">Santa Ceia do Senhor</h3>
        <p>Todo primeiro sábado do mês</p>
      </div>
    </section>
  );
}
