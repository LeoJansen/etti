// Reusable documentation card component
// Props:
// - title: string
// - description: string | ReactNode
// - className: optional extra classes for the card container
// - titleClassName: optional extra classes for the title element

const baseCardClass =
  "p-8 rounded-lg shadow-lg transform transition duration-500 hover:scale-105";

export default function DocCard({ title, description, className = "", titleClassName = "" }) {
  return (
    <div className={`flex flex-col items-center ${baseCardClass} ${className}`.trim()}>
      <h3 className={`text-2xl font-bold text-gray-900  mb-4 ${titleClassName}`.trim()}>
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
