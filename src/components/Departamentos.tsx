import { Baby, Users, Heart } from "lucide-react";

export default function Departamentos() {
  return (
    <section id="departamentos" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-14">
        Nossos Departamentos
      </h2>

      <div className="max-w-6xl mx-auto grid gap-10 px-6 md:grid-cols-3">
        
        {/* CRIANÇAS */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
          <Baby className="w-12 h-12 text-blue-700 mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Crianças</h3>
          <p className="text-slate-600 text-sm">
            Ensinando a Palavra de Deus desde cedo com amor e cuidado.
          </p>
        </div>

        {/* JOVENS */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
          <Users className="w-12 h-12 text-blue-700 mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Jovens</h3>
          <p className="text-slate-600 text-sm">
            Uma geração comprometida com Cristo e com o chamado.
          </p>
        </div>

        {/* IRMÃS */}
        <div className="bg-slate-50 rounded-2xl p-8 text-center shadow hover:shadow-xl transition">
          <Heart className="w-12 h-12 text-blue-700 mx-auto mb-4" />
          <h3 className="font-bold text-lg mb-2">Irmãs</h3>
          <p className="text-slate-600 text-sm">
            Mulheres edificadas para servir com fé e dedicação.
          </p>
        </div>

      </div>
    </section>
  );
}
