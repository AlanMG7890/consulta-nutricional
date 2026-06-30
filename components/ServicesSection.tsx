import { services } from "@/data/services";
import ServiceCard from "./ServiceCard";

export default function ServicesSection() {
  return (
    <section
      id="servicios"
      className="max-w-6xl mx-auto px-6 py-16"
    >
      <div className="text-center mb-12">
        <p className="text-green-700 font-medium">
          Servicios
        </p>

        <h2 className="text-4xl font-bold text-green-900">
          ¿Qué incluye la consulta? porno?
        </h2>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard
            key={service.title}
            title={service.title}
            description={service.description}
            icon={service.icon}
          />
        ))}
      </div>
    </section>
  );
}