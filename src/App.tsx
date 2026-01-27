// src/App.tsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from "./components/Header";
import Hero from "./components/Hero";
import Departamentos from "./components/Departamentos";
import Lideranca from "./components/Lideranca";
import Semadi from "./components/Semadi";
import WhatsApp from "./components/WhatsApp";
import Footer from "./components/Footer";
import VisiteNos from "./components/VisiteNos";
import FinalMessage from "./components/FinalMessage";
import SobreNos from "./components/SobreNos";
import GaleriaFotos from './components/GaleriaFotos';
import Congregacoes from './components/Congregacoes';
import AgendaSetorial from './components/AgendaSetorial';
import AgendaCard from './components/AgendaCard';
import ScrollToTop from './components/ScrollToTop';

// Componente do Site Principal
function MainSite() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />
      <Hero />
      <main className="space-y-24">
        <Departamentos />
        <Lideranca /> 
        <AgendaCard />
        <VisiteNos />
        <Semadi />  
        <FinalMessage />
      </main>
      <WhatsApp />
      <Footer />
    </div>
  );
}

// Componente para página da Agenda com layout completo
function AgendaPage() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Header />
      <AgendaSetorial />
      <WhatsApp />
      <Footer />
    </div>
  );
}

// Componente para página da Galeria com layout completo
function GaleriaPage() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Header />
      <GaleriaFotos />
      <WhatsApp />
      <Footer />
    </div>
  );
}

// Componente para página de Congregações com layout completo
function CongregacoesPage() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Header />
      <Congregacoes />
      <WhatsApp />
      <Footer />
    </div>
  );
}

// Componente para página Sobre Nós com layout completo
function SobreNosPage() {
  return (
    <div className="bg-slate-50 text-slate-800 min-h-screen">
      <Header />
      <SobreNos />
      <WhatsApp />
      <Footer />
    </div>
  );
}

// Componente principal com rotas
export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/* Adicione aqui, dentro do Router mas fora das Routes */}
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/sobre" element={<SobreNosPage />} />
        <Route path="/agenda" element={<AgendaPage />} />
        <Route path="/galeria" element={<GaleriaPage />} />
        <Route path="/eventos" element={<GaleriaPage />} />
        <Route path="/congregacoes" element={<CongregacoesPage />} />
        <Route path="*" element={<MainSite />} />
      </Routes>
    </Router>
  );
}