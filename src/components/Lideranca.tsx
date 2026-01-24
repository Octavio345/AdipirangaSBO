export default function Lideranca() {
  return (
    <section id="lideranca" className="py-20 bg-blue-50">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-14">
        Nossa Liderança
      </h2>

      {/* Container com flex centralizado para mobile */}
      <div className="flex flex-col md:flex-row justify-center items-center md:items-start gap-10 md:gap-14 px-6">
        
        {/* PASTOR - Centralizado no mobile */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center w-full max-w-xs md:w-72 transform hover:-translate-y-2 transition-transform duration-300">
          <div className="relative">
            <img
              src="/imagens/alcides.png"
              alt="Pastor Alcides Fávaro"
              className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-blue-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 24 24" fill="%231e40af"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
              }}
            />
          </div>
          <h3 className="font-bold text-xl text-blue-900 mb-2">Pr. Alcides Fávaro</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Pastor Presidente do Ministério Ipiranga - COMOESPO - INPAR - SEMADI
          </p>
        </div>

        {/* ESPOSA - Centralizado no mobile */}
        <div className="bg-white rounded-2xl shadow-lg p-8 text-center w-full max-w-xs md:w-72 transform hover:-translate-y-2 transition-transform duration-300">
          <div className="relative">
            <img
              src="/imagens/oseias.png"
              alt="Pastor Oséias e Missionária Priscila"
              className="w-36 h-36 rounded-full object-cover mx-auto mb-4 border-4 border-blue-700"
              onError={(e) => {
                (e.target as HTMLImageElement).src = 'data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" width="144" height="144" viewBox="0 0 24 24" fill="%231e40af"><path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5zm8 0c-.29 0-.62.02-.97.05 1.16.84 1.97 1.97 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-7-3.5z"/></svg>';
              }}
            />
          </div>
          <h3 className="font-bold text-xl text-blue-900 mb-2">Pr. Oséias e Miss. Priscila</h3>
          <p className="text-slate-600 text-sm leading-relaxed">
            Pastor Setorial e Esposa
          </p>
        </div>

      </div>

      {/* Informação adicional para mobile */}
      <div className="mt-10 px-6 max-w-2xl mx-auto">
        <div className="bg-gradient-to-r from-blue-100 to-blue-50 rounded-xl p-6 text-center border border-blue-200">
          <p className="text-blue-800 font-medium">
            Nossa liderança está comprometida em servir a Igreja e guiar espiritualmente cada membro.
          </p>
          <p className="text-blue-700 text-sm mt-2">
            Em caso de necessidade pastoral, entre em contato através do WhatsApp.
          </p>
        </div>
      </div>
    </section>
  );
}