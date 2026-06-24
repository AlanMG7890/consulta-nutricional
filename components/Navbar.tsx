export default function Navbar() {
  return (
    <nav className="sticky top-0 bg-[#F8F5EE]/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <h1 className="font-bold text-green-900 text-xl">
          🌿 Karla Nutrición
        </h1>

        <div className="hidden md:flex gap-8 text-green-900">
          <a href="#">Inicio</a>
          <a href="#servicios">Servicios</a>
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#contacto">Contacto</a>
        </div>

        <a
          href="https://wa.me/523312383147"
          target="_blank"
          className="bg-green-700 text-white px-4 py-2 rounded-full hover:bg-green-800"
        >
          Agendar cita
        </a>
      </div>
    </nav>
  );
}