import LetterPullup from "@/components/ui/letter-pullup";
import Marquee from "@/components/ui/marquee"; // Certifique-se de que o caminho está correto
import "./App.css";

function App() {
  return (
    <div className="flex flex-col items-center justify-center text-center gradient-background min-h-screen">
      {/* Componente LetterPullup */}
      <LetterPullup
        words="Thiago | Magic UI"
        delay={0.1}
        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-slate-300 mb-4" // Adicione uma margem inferior para espaçamento
      />
      
      {/* Componente Marquee */}
      <Marquee className="text-2xl sm:text-3xl text-slate-200">
        Este é um texto que se move! | Aproveite a animação do Marquee com Tailwind!
      </Marquee>
    </div>
  );
}

export default App;
