// components/AutomationCard.jsx
import React from 'react';



/**
 * AutomationCard
 * Props:
 * - title: string (card heading)
 * - description?: string (optional paragraph text)
 * - className?: string (optional extra classes for the root)
 * - children?: ReactNode (alternative/custom content under the title)
 */
const AutomationCard = ({ title, description, children }) => {
  return (
    <div className="bg-[#000000] p-8 rounded-[2px] border-3 border-[#EB9948] shadow-[-12px_4px_4px_rgba(235,153,7,0.93])]">
      {title && (
        <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
      )}
      {description ? (
        <p className="text-gray-400">{description}</p>
      ) : (
        children || null
      )}
    </div>
  );
};

export default AutomationCard;
