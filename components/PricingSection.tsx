export default function PricingSection() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-20">
      <div className="relative overflow-hidden rounded-[2rem] bg-gradient-to-br from-green-800 to-green-600 px-8 py-14 text-center text-white shadow-xl">
        <div className="absolute -top-16 -left-16 h-40 w-40 rounded-full bg-white/10" />
        <div className="absolute -bottom-20 -right-20 h-56 w-56 rounded-full bg-white/10" />

        <div className="relative z-10">
          <p className="mb-4 text-sm font-semibold uppercase tracking-[0.25em] text-green-100">
            Precio de lanzamiento
          </p>

          <div className="mb-4 flex items-start justify-center gap-1">
            <span className="mt-3 text-3xl font-semibold">$</span>
            <h2 className="text-7xl font-bold leading-none">
              200
            </h2>
          </div>

          <p className="mb-2 text-2xl font-semibold">
            Consulta nutricional a domicilio
          </p>

          <p className="mx-auto mb-8 max-w-xl text-green-50">
            Incluye valoración, mediciones, plan personalizado y seguimiento para ayudarte a crear hábitos sostenibles.
          </p>

          <div className="mb-8 flex flex-wrap justify-center gap-3">
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
              Valoración completa
            </span>
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
              Plan personalizado
            </span>
            <span className="rounded-full bg-white/15 px-4 py-2 text-sm">
              Atención a domicilio
            </span>
          </div>

          <a
            href="https://wa.me/523312383147?text=Hola,%20me%20gustaría%20agendar%20una%20consulta%20nutricional"
            target="_blank"
            className="inline-block rounded-full bg-white px-8 py-4 font-semibold text-green-700 shadow-md transition hover:-translate-y-1 hover:shadow-lg"
          >
            Agendar cita por WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}