import React from "react";
import SummaryCards from "./SummaryCards";
import CollegeGrid from "./CollegeGrid";

const AdminDashboard = () => {
  return (
    <div className="p-6">
      
      {/* Page Title */}
      <h1 className="text-2xl font-bold mb-4">
        College Locations
      </h1>

      {/* Summary Cards */}
      <SummaryCards />

      {/* College Grid */}
      <CollegeGrid />
    </div>
  );
};

export default AdminDashboard;
