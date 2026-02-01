import React from "react";
import CollegeCard from "./CollegeCard";

const CollegeGrid = () => {
  // Static mock data
  const colleges = [
    {
      id: 1,
      name: "Rai University",
      total: 45,
      pending: 12,
      completed: 33,
      stock: 80,
      stockLimit: 100,
    },
    {
      id: 2,
      name: "COEP College",
      total: 45,
      pending: 12,
      completed: 33,
      stock: 80,
      stockLimit: 100,
    },
    {
      id: 3,
      name: "DY Patil College",
      total: 45,
      pending: 12,
      completed: 33,
      stock: 80,
      stockLimit: 100,
    },
    {
      id: 4,
      name: "PICT College",
      total: 45,
      pending: 12,
      completed: 33,
      stock: 80,
      stockLimit: 100,
    },
    {
      id: 5,
      name: "JSPM College",
      total: 45,
      pending: 12,
      completed: 33,
      stock: 80,
      stockLimit: 100,
    },
    {
      id: 6,
      name: "MIT College",
      total: 45,
      pending: 12,
      completed: 33,
      stock: 80,
      stockLimit: 100,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      {colleges.map((college) => (
        <CollegeCard key={college.id} college={college} />
      ))}
    </div>
  );
};

export default CollegeGrid;
