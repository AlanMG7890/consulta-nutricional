
export default function Hero() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div>
          <p className="text-green-700 font-medium mb-3">
            🌿 Consulta Nutricional a Domicilio
          </p>

          <h1 className="text-5xl font-bold text-green-900 mb-6">
            Tu salud, tu mejor inversión
          </h1>

          <p className="text-lg text-gray-700 mb-8">
            Te ayudo a alcanzar tus objetivos mediante un plan de alimentación
            personalizado y acompañamiento profesional.
          </p>

          <div className="flex gap-4">
            <a
              href="https://wa.me/523312383147"
              target="_blank"
              className="bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800"
            >
              Agendar cita
            </a>

            <a
              href="#servicios"
              className="border border-green-700 text-green-700 px-6 py-3 rounded-full"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div>
          <img
            src="https://images.unsplash.com/photo-1547592180-85f173990554"
            alt="Nutrición"
            className="rounded-3xl shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}