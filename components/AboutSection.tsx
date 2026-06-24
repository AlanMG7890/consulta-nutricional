import Image from "next/image";
export default function AboutSection() {
  return (
    <section
      id="sobre-mi"
      className="max-w-6xl mx-auto px-6 py-20"
    >
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div>
          <Image
            src="/images/karla.jpeg"
            alt="Karla Elizabeth Santillán Gómez"
            width={600}
            height={700}
            className="rounded-3xl shadow-lg object-cover"
          />
        </div>

        <div>
          <p className="text-green-700 font-bold mb-3">
            Sobre mí
          </p>

          <h2 className="text-4xl font-bold text-green-900 mb-6">
            Karla Elizabeth Santillán Gómez
          </h2>

          <p className="text-gray-700 mb-4">
            Soy estudiante de Licenciatura en Nutrición y mi objetivo es ayudarte
            a mejorar tu salud mediante hábitos sostenibles y una alimentación
            adaptada a tus necesidades.
          </p>

          <p className="text-gray-700">
            Creo que pequeños cambios pueden generar grandes resultados cuando se
            acompañan de educación, empatía y compromiso.
          </p>
        </div>
      </div>
    </section>
  );
}