type ServiceCardProps = {
  title: string;
  description: string;
  icon: string;
};

export default function ServiceCard({
  title,
  description,
  icon,
}: ServiceCardProps) {
  return (
    <div className="bg-white rounded-3xl p-6 shadow-sm border border-green-100 hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
      <div className="text-3xl mb-4">{icon}</div>

      <h3 className="text-xl font-bold text-green-900 mb-2">
        {title}
      </h3>

      <p className="text-gray-600">
        {description}
      </p>
    </div>
  );
}