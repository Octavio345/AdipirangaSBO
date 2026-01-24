import { Menu, X, ChevronRight } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  // Verifica se estamos na página principal
  const isHomePage = location.pathname === '/';

  // Efeito de scroll para mudar aparência do header
  useEffect(() => {
    if (!isHomePage) {
      setIsScrolled(true);
      return;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHomePage]);

  // Função de scroll suave com prevenção completa
  const scrollToSection = useCallback((id: string) => {
    setIsMenuOpen(false);
    
    if (!isHomePage) {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          const headerHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }, 300);
      return;
    }

    if (id === 'inicio') {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
      return;
    }

    const element = document.getElementById(id);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  }, [isHomePage, navigate]);

  // Funções específicas para cada link com prevenção completa
  const handleAnchorClick = useCallback((e: React.MouseEvent, id: string) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    scrollToSection(id);
  }, [scrollToSection]);

  const handleVisiteNos = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    scrollToSection('visite');
  }, [scrollToSection]);

  const handleSemadi = useCallback((e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    scrollToSection('semadi');
  }, [scrollToSection]);

  const menuItems = [
    { label: "Início", href: "inicio", type: "anchor" },
    { label: "Sobre Nós", href: "/sobre", type: "page" },
    { label: "Departamentos", href: "departamentos", type: "anchor" },
    { label: "Liderança", href: "lideranca", type: "anchor" },
    { label: "SEMADI", href: "semadi", type: "anchor", onClick: handleSemadi },
    { label: "Galeria", href: "/galeria", type: "page" },
  ];

  // Fecha o menu ao clicar fora (só mobile)
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (isMenuOpen && window.innerWidth < 768) {
        const target = e.target as HTMLElement;
        if (!target.closest('nav') && !target.closest('button[aria-label="Menu"]')) {
          setIsMenuOpen(false);
        }
      }
    };

    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, [isMenuOpen]);

  return (
    <header className={`fixed top-0 w-full text-white shadow-lg z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-gradient-to-b from-blue-900 to-blue-800 backdrop-blur-sm bg-opacity-95' 
        : 'bg-gradient-to-b from-blue-900/95 to-blue-800/90 backdrop-blur-sm'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo e Nome da Igreja */}
          <button 
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              if (isHomePage) {
                window.scrollTo({ top: 0, behavior: 'smooth' });
              } else {
                navigate('/');
              }
            }}
            className="flex items-center space-x-3 group cursor-pointer"
          >
            <div className="relative">
              <div className="absolute -inset-1.5 rounded-full bg-gradient-to-br from-yellow-400/20 via-transparent to-blue-400/20 blur-sm"></div>
              
              <div className="relative w-16 h-16 bg-gradient-to-br from-blue-900 to-blue-800 rounded-full flex items-center justify-center border-2 border-white/30 group-hover:border-yellow-400 transition-all duration-300 shadow-xl overflow-hidden">
                <img
                  src="/imagens/logo.png"
                  alt="Logo AD Ipiranga"
                  className="w-12 h-12 object-contain group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-yellow-400 rounded-full border-2 border-blue-900"></div>
            </div>
            
            <div className="flex flex-col items-start">
              <h1 className="font-bold text-xl tracking-wide group-hover:text-yellow-300 transition-colors duration-300">
                AD Ipiranga
              </h1>
              <p className="text-xs text-blue-200 opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                Igreja Evangélica Assembleia de Deus
              </p>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {menuItems.map((link) => (
              link.type === 'page' ? (
                <Link
                  key={link.label}
                  to={link.href}
                  className="relative px-4 py-2 rounded-lg transition-all duration-300 group"
                  onClick={(e) => {
                    e.stopPropagation();
                    setIsMenuOpen(false);
                  }}
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {link.label}
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-3/4 transition-all duration-300"></div>
                </Link>
              ) : link.onClick ? (
                // Item SEMADI com handler específico
                <button
                  key={link.label}
                  onClick={link.onClick}
                  className="relative px-4 py-2 rounded-lg transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {link.label}
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-3/4 transition-all duration-300"></div>
                </button>
              ) : (
                // Outros itens de anchor
                <button
                  key={link.label}
                  onClick={(e) => handleAnchorClick(e, link.href)}
                  className="relative px-4 py-2 rounded-lg transition-all duration-300 group"
                >
                  <span className="relative z-10 flex items-center gap-1">
                    {link.label}
                    <ChevronRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300" />
                  </span>
                  <div className="absolute inset-0 bg-white/0 group-hover:bg-white/10 rounded-lg transition-all duration-300"></div>
                  <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-yellow-400 group-hover:w-3/4 transition-all duration-300"></div>
                </button>
              )
            ))}
            
            {/* Botão Visite-nos */}
            <button
              onClick={handleVisiteNos}
              className="ml-2 px-5 py-2 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 font-semibold rounded-lg hover:from-yellow-600 hover:to-yellow-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 active:translate-y-0 flex items-center gap-2 group"
            >
              Visite-nos
              <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
            </button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsMenuOpen(!isMenuOpen);
            }}
            className={`md:hidden p-2 rounded-lg transition-all duration-300 ${
              isMenuOpen 
                ? 'bg-yellow-500 text-blue-900' 
                : 'hover:bg-white/10'
            }`}
            aria-label="Menu"
          >
            {isMenuOpen ? (
              <X size={28} className="transform rotate-180 transition-transform duration-300" />
            ) : (
              <Menu size={28} className="transform hover:scale-110 transition-transform duration-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isMenuOpen 
            ? 'max-h-[500px] opacity-100'
            : 'max-h-0 opacity-0'
        }`}>
          <nav className="bg-gradient-to-b from-blue-800/95 to-blue-900/95 backdrop-blur-sm border-t border-white/10 shadow-xl rounded-b-lg">
            <div className="px-3 pt-3 pb-4 space-y-1.5">
              {menuItems.map((link) => (
                link.type === 'page' ? (
                  <Link
                    key={link.label}
                    to={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      navigate(link.href);
                    }}
                    className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-2 border-transparent hover:border-yellow-400 hover:pl-5 flex items-center justify-between group text-sm"
                  >
                    <span className="truncate">{link.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                  </Link>
                ) : link.onClick ? (
                  // Item SEMADI
                  <button
                    key={link.label}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      link.onClick?.(e as any);
                    }}
                    className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-2 border-transparent hover:border-yellow-400 hover:pl-5 flex items-center justify-between group text-sm"
                  >
                    <span className="truncate">{link.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                  </button>
                ) : (
                  // Outros itens de anchor
                  <button
                    key={link.label}
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      setIsMenuOpen(false);
                      scrollToSection(link.href);
                    }}
                    className="w-full text-left px-4 py-2.5 rounded-lg hover:bg-white/10 transition-all duration-300 border-l-2 border-transparent hover:border-yellow-400 hover:pl-5 flex items-center justify-between group text-sm"
                  >
                    <span className="truncate">{link.label}</span>
                    <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 transform -translate-x-2 group-hover:translate-x-0 transition-all duration-300 flex-shrink-0" />
                  </button>
                )
              ))}
              
              {/* Botão Visite-nos */}
              <button
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  setIsMenuOpen(false);
                  scrollToSection('visite');
                }}
                className="w-full px-4 py-3 mt-3 bg-gradient-to-r from-yellow-500 to-yellow-600 text-blue-900 font-semibold rounded-lg text-center text-sm flex items-center justify-center gap-2 group shadow-md"
              >
                Visite-nos
                <ChevronRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300 flex-shrink-0" />
              </button>
            </div>
          </nav>
        </div>
      </div>

      {/* Indicador de scroll (só mostra na home) */}
      {isHomePage && (
        <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-yellow-400/50 to-transparent">
          <div 
            className="h-full bg-yellow-400 transition-all duration-300"
            style={{ 
              width: `${Math.min((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100, 100)}%` 
            }}
          />
        </div>
      )}
    </header>
  );
}