// Frontend/src/Component/Admin/Routes/AdminRoutes.jsx
import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
// import AdminLogin from "../Pages/AdminLogin";
import AdminDashboard from "../Pages/AdminDashboard";

const AdminRoutes = () => {
//   const token = localStorage.getItem("adminToken");

  return (
    <Routes>
      {/* <Route path="login" element={<AdminLogin />} /> */}
      <Route
        path="dashboard"
        element={<AdminDashboard /> }
      />
    </Routes>
  );
};

export default AdminRoutes;
