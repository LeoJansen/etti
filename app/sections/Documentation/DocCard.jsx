// Reusable documentation card component
// Props:
// - title: string
// - description: string | ReactNode
// - className: optional extra classes for the card container
// - titleClassName: optional extra classes for the title element



export default function DocCard({ title, description, className = "", titleClassName = "" }) {
  return (
    <div className={`flex flex-col items-center p-8 rounded-[5px] shadow-lg transform transition duration-500 hover:scale-105 ${className}`.trim()}>
      <h3 className={`text-xl font-medium md:font-semibold tracking-tight text-[#858585]  mb-4 ${titleClassName}`.trim()}>
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </div>
  );
}
