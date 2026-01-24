export default function Hero() {
  return (
    <section
      className="relative h-[85vh] flex items-center justify-center text-center"
            style={{
        backgroundImage: "url('/imagens/igreja.jpeg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        }}
    >
      {/* Overlay escuro elegante */}
      <div className="absolute inset-0 bg-blue-950/70"></div>

      <div className="relative z-10 px-6 max-w-3xl text-white">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4">
          Assembleia de Deus
        </h1>

        <h2 className="text-xl md:text-2xl font-light mb-8">
          Ministério no Ipiranga
        </h2>

        <p className="text-base md:text-lg text-blue-100 mb-10">
          Um lugar de fé, comunhão e transformação de vidas
        </p>

       <a
        href="#visite"
        onClick={(e) => {
            e.preventDefault();
            const element = document.getElementById('visite');
            if (element) {
            const headerHeight = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - headerHeight;
            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
            }
        }}
        className="inline-block bg-yellow-500 hover:bg-yellow-400 text-blue-950 font-bold px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
        >
        Conheça nossa Igreja
        </a>
      </div>
    </section>
  );
}
