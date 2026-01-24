// components/WhatsApp.tsx
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function WhatsApp() {
  const [showTooltip, setShowTooltip] = useState(false);
  
  const phoneNumber = "5519971058961"; // (19) 3456-7890
  
  // Mensagem personalizada para diferentes situações
  const messages = {
    default: "Olá! Vi o site da AD Ipiranga e gostaria de mais informações. Podem me ajudar?",
    cultos: "Olá! Gostaria de saber mais sobre os horários de cultos da AD Ipiranga.",
    visitante: "Olá! Sou novo na cidade e gostaria de visitar a igreja. Podem me orientar?",
    oracao: "Olá! Gostaria de pedir oração pela minha família.",
  };
  
  const encodedMessage = encodeURIComponent(messages.default);
  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;

  return (
    <div className="fixed bottom-6 right-6 z-40">
      {showTooltip && (
        <div className="absolute bottom-full right-0 mb-2 w-64 p-3 bg-white text-slate-800 rounded-lg shadow-xl border border-slate-200">
          <p className="text-sm font-semibold mb-1">📱 Contato Rápido</p>
          <p className="text-xs text-slate-600">
            Clique para enviar uma mensagem pré-pronta. Você pode editar antes de enviar!
          </p>
          <div className="mt-2 text-xs text-slate-500">
            ⚡ Mensagem automática: "{messages.default.substring(0, 40)}..."
          </div>
        </div>
      )}
      
      <a
        href={whatsappLink}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group"
        aria-label="Entre em contato via WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <MessageCircle size={28} />
        <span className="ml-2 font-semibold hidden md:inline-block">
          Fale conosco
        </span>
      </a>
    </div>
  );
}
