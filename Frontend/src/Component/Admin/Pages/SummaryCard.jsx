// Frontend/src/Component/Admin/Pages/SummaryCard.jsx
import React from "react";

const SummaryCard = ({ title, value, bgColor }) => {
  return (
    <div className={`p-4 rounded-lg shadow-sm ${bgColor}`}>
      <p className="text-sm text-gray-600">{title}</p>
      <h2 className="text-2xl font-bold text-gray-900 mt-1">
        {value}
      </h2>
    </div>
  );
};

export default SummaryCard;
