// Frontend/src/Component/Admin/Pages/DashboardHeader.jsx
import React from "react";

const DashboardHeader = ({ search, setSearch }) => {
  return (
    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
      
      {/* Search */}
      <input
        type="text"
        placeholder="Search colleges..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full sm:w-64 px-3 py-2 border border-gray-300 rounded-lg focus:ring-1 focus:ring-blue-500"
      />

      {/* Add Location */}
      <button
        className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
        onClick={() => alert("Add Location page coming next")}
      >
        + Add Location
      </button>
    </div>
  );
};

export default DashboardHeader;
