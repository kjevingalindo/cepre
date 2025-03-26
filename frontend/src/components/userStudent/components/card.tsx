import React from "react";
import { LucideIcon } from "lucide-react";

interface CardProps {
  title: string;
  description: string;
  className?: string;
  Icon?: LucideIcon;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  className = "",
  Icon,
}) => {
  return (
    <div
      className={`rounded-xl border bg-orange-300 p-6 shadow flex items-center space-x-4 ${className}`}
    >
      {Icon && <Icon size={24} className="text-black" />}
      <div>
        <div className="font-semibold text-black text-xl">{title}</div>
        <div className="text-sm text-gray-700">{description}</div>
      </div>
    </div>
  );
};

export default Card;
