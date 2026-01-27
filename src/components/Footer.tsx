import { Link } from 'react-router-dom';
import { 
  Church, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Facebook, 
  Instagram, 
  ExternalLink,
  Heart
} from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // URLs dos sites oficiais (substitua pelas reais quando tiver)
  const ministrySites = [
    { name: "COJADI", url: "https://www.instagram.com/cojadiipiranga?igsh=MTI3MWoxNjBpcHB6Mw%3D%3D", logo: "/imagens/COJADI.png" },
    { name: "CAADI", url: "https://www.instagram.com/geracaocaadi/", logo: "/imagens/CAADI.jpg" },
    { name: "COMOESPO", url: "https://comoespo.com.br/", logo: "/imagens/COMOESPO.png" },
    { name: "CETADI", url: "https://cetadi.institutobonhoeffer.com.br/", logo: "/imagens/CETADI.png" },
    { name: "COAJDI_SBO", url: "https://www.instagram.com/cojadi.sbo?igsh=Y2VwMXR2enI2MDU%3D", logo: "/imagens/COJADI_SBO.png" }
  ];

  // Função para lidar com erro de imagem
  const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>, ministryName: string) => {
    const target = e.target as HTMLImageElement;
    target.style.display = 'none';
    
    // Cria fallback com as iniciais
    const parent = target.parentElement;
    if (parent) {
      const fallback = document.createElement('div');
      fallback.className = 'w-full h-full flex items-center justify-center bg-blue-900 rounded-full';
      fallback.innerHTML = `<span class="text-white font-bold text-lg">${ministryName.charAt(0)}</span>`;
      parent.appendChild(fallback);
    }
  };

  return (
    <footer className="bg-gradient-to-b from-blue-900 to-blue-950 text-white">
      {/* Seção Principal */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          
       {/* Coluna 1: Logo e Descrição */}
      <div className="lg:col-span-1">
        <div className="flex flex-col items-start space-y-4">
          <div className="flex items-center gap-3">
            {/* Logo que preenche toda a bolinha com efeitos */}
            <div className="relative w-16 h-16 group">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-blue-800 rounded-full blur-sm opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-blue-400/50 shadow-xl group-hover:border-yellow-400 group-hover:scale-105 transition-all duration-300">
                <img 
                  src="/imagens/logo_preto.png" 
                  alt="Logo AD Ipiranga"
                  className="w-full h-full object-cover"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.className = 'relative w-16 h-16 rounded-full bg-gradient-to-br from-blue-700 to-blue-900 flex items-center justify-center border-2 border-blue-400/50 shadow-xl';
                      parent.innerHTML = '<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path></svg>';
                    }
                  }}
                />
              </div>
              {/* Brilho sutil */}
              <div className="absolute inset-0 rounded-full border border-white/10 pointer-events-none"></div>
            </div>
            <div>
              <h2 className="text-2xl font-bold">AD Ipiranga</h2>
              <p className="text-sm text-blue-200">Ministério do Ipiranga</p>
            </div>
          </div>
          <p className="text-blue-200 text-sm leading-relaxed">
            Uma igreja comprometida com o evangelho, família e missões. 
            Há mais de 90 anos servindo a Deus e à comunidade.
          </p>
        </div>
      </div>

          {/* Coluna 2: Informações de Contato */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-blue-700 flex items-center gap-2">
              <Phone className="w-5 h-5" />
              Contato & Localização
            </h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-300 mt-0.5 flex-shrink-0" />
                <div>
                  <p className="font-medium">Sede Setor</p>
                  <p className="text-sm text-blue-200">Rua Teresina, 137 - Cidade Nova</p>
                  <p className="text-sm text-blue-200">Santa Bárbara D' Oeste - SP</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a 
                  href="tel:+5519971159598" 
                  className="text-blue-200 hover:text-white transition-colors"
                >
                  (19) 971058961
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <a 
                  href="mailto:adipirangasbo25@gmail.com" 
                  className="text-blue-200 hover:text-white transition-colors text-sm"
                >
                  adipirangasbo25@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-5 h-5 text-blue-300 flex-shrink-0" />
                <div>
                  <p className="text-sm text-blue-200">Cultos: Domingos 09:00h/18:30h</p>
                  <p className="text-sm text-blue-200">Terça: 20:00h</p>
                  <p className="text-sm text-blue-200">Quinta: 19:30h</p>
                </div>
              </div>
            </div>
          </div>

          {/* Coluna 3: Links Rápidos */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-blue-700">
              Navegação
            </h3>
            <ul className="space-y-3">
              <li>
                <Link 
                  to="/" 
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                  Página Inicial
                </Link>
              </li>
              <li>
                <Link 
                  to="/sobre" 
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                  Sobre Nós
                </Link>
              </li>
              <li>
                <Link 
                  to="/congregacoes" 
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                  Congregações
                </Link>
              </li>
              <li>
                <Link 
                  to="/agenda" 
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                  Agenda Setorial
                </Link>
              </li>
              <li>
                <Link 
                  to="/galeria" 
                  className="text-blue-200 hover:text-white transition-colors flex items-center gap-2 group"
                >
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full group-hover:bg-yellow-400 transition-colors"></span>
                  Galeria
                </Link>
              </li>
            </ul>
          </div>

          {/* Coluna 4: Ministérios - AGORA COM IMAGENS */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-bold mb-6 pb-2 border-b border-blue-700">
              Conheça nossos Ministérios
            </h3>
            <div className="grid grid-cols-2 gap-4">
              {ministrySites.map((ministry) => (
                <a
                  key={ministry.name}
                  href={ministry.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div className="bg-blue-800/30 hover:bg-blue-800/50 rounded-lg p-3 transition-all duration-300 hover:scale-105 border border-blue-700/50 hover:border-blue-500 flex flex-col items-center justify-center h-full min-h-[100px]">
                    {/* AQUI ESTÁ A IMAGEM - AGORA APARECENDO */}
                    <div className="relative w-16 h-16 mb-2">
                      <img
                        src={ministry.logo}
                        alt={`Logo ${ministry.name}`}
                        className="w-full h-full object-contain rounded-lg bg-white/10 p-1"
                        onError={(e) => handleImageError(e, ministry.name)}
                      />
                      {/* Fallback se imagem não carregar */}
                      <div className="absolute inset-0 bg-blue-900 rounded-lg flex items-center justify-center hidden">
                        <span className="text-white font-bold text-lg">
                          {ministry.name.charAt(0)}
                        </span>
                      </div>
                    </div>
                    
                    <p className="text-xs text-center text-blue-300 group-hover:text-white transition-colors">
                      {ministry.name}
                    </p>
                    <ExternalLink className="w-3 h-3 mt-1 opacity-0 group-hover:opacity-100 transition-opacity text-blue-300" />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Redes Sociais */}
        <div className="mt-12 pt-8 border-t border-blue-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <p className="text-blue-300 text-sm">
                Siga-nos nas redes sociais
              </p>
            </div>
            <div className="flex gap-4">
              <a 
                href="https://www.facebook.com/adipirangasubsedesbo?locale=pt_BR" 
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
              <a 
                href="https://instagram.com/adipirangasbo" 
                className="w-10 h-10 bg-blue-800 hover:bg-blue-700 rounded-full flex items-center justify-center transition-colors group"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 group-hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Rodapé Inferior */}
      <div className="bg-blue-950 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-sm text-blue-300">
                © {currentYear} Assembleia de Deus – Ministério do Ipiranga. Todos os direitos reservados.
              </p>
              <p className="text-xs text-blue-400 mt-1">
                CNPJ: 62.864.624/0001-04 • Igreja Evangélica Assembleia de Deus
              </p>
            </div>
            
            <div className="text-center md:text-right">
              <div className="flex items-center justify-center md:justify-end gap-2 text-sm text-blue-300">
                <Heart className="w-4 h-4 text-red-400" />
                <span>Desenvolvido com carinho por</span>
                <a 
                  href="https://wa.me/5519971159598" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-white hover:text-yellow-400 transition-colors font-semibold"
                >
                  Octávio Augusto
                </a>
              </div>
              <p className="text-xs text-blue-400 mt-1">
                (19) 97115-9598 • oarsilva6@gmail.com
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}