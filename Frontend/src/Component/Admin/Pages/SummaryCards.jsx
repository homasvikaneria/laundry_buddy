// Frontend/src/Component/Admin/Pages/SummaryCards.jsx
import React from "react";
import SummaryCard from "./SummaryCard";

const SummaryCards = () => {
  // Static mock data (will be replaced by API later)
  const summaryData = [
    {
      title: "Total Orders",
      value: 135,
      bgColor: "bg-blue-50",
    },
    {
      title: "Pending",
      value: 35,
      bgColor: "bg-yellow-50",
    },
    {
      title: "Completed",
      value: 100,
      bgColor: "bg-green-50",
    },
    {
      title: "Locations",
      value: 6,
      bgColor: "bg-purple-50",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
      {summaryData.map((item, index) => (
        <SummaryCard
          key={index}
          title={item.title}
          value={item.value}
          bgColor={item.bgColor}
        />
      ))}
    </div>
  );
};

export default SummaryCards;
