import React, { useState } from "react";
import SummaryCards from "./SummaryCards";
import CollegeGrid from "./CollegeGrid";
import DashboardHeader from "./DashboardHeader";

const AdminDashboard = () => {
  const [search, setSearch] = useState("");

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">
        College Locations
      </h1>

      <SummaryCards />

      <DashboardHeader search={search} setSearch={setSearch} />

      <CollegeGrid search={search} />
    </div>
  );
};

export default AdminDashboard;
