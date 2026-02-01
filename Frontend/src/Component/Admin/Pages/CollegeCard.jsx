import React from "react";

const CollegeCard = ({ college }) => {
  return (
    <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-4">
      
      {/* College Name */}
      <h3 className="text-lg font-semibold text-gray-800 mb-3">
        {college.name}
      </h3> 

      {/* Stats */}
      <div className="flex justify-between text-sm text-gray-600 mb-3">
        <div>
          <p>Total</p>
          <p className="font-semibold text-gray-800">{college.total}</p>
        </div>
        <div>
          <p>Pending</p>
          <p className="font-semibold text-yellow-600">{college.pending}</p>
        </div>
        <div>
          <p>Completed</p>
          <p className="font-semibold text-green-600">{college.completed}</p>
        </div>
      </div>

      {/* Detergent Stock */}
      <div className="mt-2">
        <p className="text-xs text-gray-500 mb-1">
          Detergent Stock
        </p>
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className="bg-blue-500 h-2 rounded-full"
            style={{
              width: `${(college.stock / college.stockLimit) * 100}%`,
            }}
          />
        </div>
        <p className="text-xs text-gray-600 mt-1">
          {college.stock}/{college.stockLimit}
        </p>
      </div>
    </div>
  );
};

export default CollegeCard;
