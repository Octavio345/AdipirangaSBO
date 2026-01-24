import { Instagram, Facebook } from "lucide-react";

export default function Contato() {
  return (
    <section id="contato" className="py-20 bg-white">
      <h2 className="text-3xl font-bold text-center text-blue-900 mb-10">
        Redes Sociais
      </h2>

      <div className="flex justify-center gap-8">
        <a
          href="https://www.instagram.com/adipirangasbo/"
          target="_blank"
          className="flex items-center gap-2 text-pink-600 hover:scale-110 transition"
        >
          <Instagram /> Instagram
        </a>

        <a
          href="https://www.facebook.com/adipirangasubsedesbo?locale=pt_BR"
          target="_blank"
          className="flex items-center gap-2 text-blue-600 hover:scale-110 transition"
        >
          <Facebook /> Facebook
        </a>
      </div>
    </section>
  );
}
