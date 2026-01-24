// Layout reformulado: visual assembleiano, moderno e limpo
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


// Componente do Site Principal
function MainSite() {
  return (
    <div className="bg-slate-50 text-slate-800">
      <Header />
      <Hero />
      <main className="space-y-24">
        <Departamentos />
        <Lideranca /> 
        <VisiteNos />
        <Semadi />  
        <FinalMessage />
      </main>
      <WhatsApp />
      <Footer />
    </div>
  );
}

// Componente principal com rotas
export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<MainSite />} />
        <Route path="/sobre" element={<SobreNos />} />
        {/* Adicione outras rotas se necessário */}
        <Route path="*" element={<MainSite />} /> {/* Fallback */}
      </Routes>
    </Router>
  );
}