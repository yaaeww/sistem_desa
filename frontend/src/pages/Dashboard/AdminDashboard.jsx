import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  FaUsers,
  FaFileAlt,
  FaChartLine,
  FaCog,
  FaUserShield,
  FaSignOutAlt,
  FaBell,
  FaUser,
} from "react-icons/fa";
import Navbar from "../../components/Layout/Navbar";
import Sidebar from "../../components/Layout/Sidebar";
import StatsCard from "../../components/Dashboard/StatsCard";

const AdminDashboard = () => {
  const [activeMenu, setActiveMenu] = useState("dashboard");
  const navigate = useNavigate();

  const adminStats = [
    {
      title: "Total Warga",
      value: "500+",
      icon: <FaUsers />,
      color: "primary",
    },
    {
      title: "Pengajuan Hari Ini",
      value: "15",
      icon: <FaFileAlt />,
      color: "info",
    },
    {
      title: "Staff Aktif",
      value: "4",
      icon: <FaUserShield />,
      color: "success",
    },
    {
      title: "Pending Approval",
      value: "8",
      icon: <FaBell />,
      color: "warning",
    },
  ];

  const adminMenuItems = [
    { id: "dashboard", label: "Dashboard", icon: <FaChartLine /> },
    { id: "users", label: "Manajemen User", icon: <FaUsers /> },
    { id: "surat", label: "Manajemen Surat", icon: <FaFileAlt /> },
    { id: "laporan", label: "Laporan", icon: <FaChartLine /> },
    { id: "pengaturan", label: "Pengaturan", icon: <FaCog /> },
  ];

  const handleLogout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div className="dashboard-page">
      <Navbar />

      <div className="dashboard-container">
        <Sidebar
          menuItems={adminMenuItems}
          activeMenu={activeMenu}
          onMenuClick={setActiveMenu}
          onLogout={handleLogout}
          isAdmin={true}
        />

        <main className="dashboard-content">
          <div className="dashboard-header">
            <h1>Dashboard Administrator</h1>
            <p>Manajemen sistem informasi desa</p>
          </div>

          {/* Admin Stats */}
          <div className="stats-grid">
            {adminStats.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>

          {/* Admin Content */}
          <div className="dashboard-section">
            <h2>Manajemen Sistem</h2>
            <div className="admin-controls-grid">
              <div className="control-card">
                <h3>Manajemen User</h3>
                <p>Kelola data warga, staff, dan administrator</p>
                <button className="btn btn-primary">Kelola</button>
              </div>

              <div className="control-card">
                <h3>Template Surat</h3>
                <p>Kelola template surat dan format dokumen</p>
                <button className="btn btn-primary">Kelola</button>
              </div>

              <div className="control-card">
                <h3>Pengaturan Sistem</h3>
                <p>Konfigurasi aplikasi dan preferensi</p>
                <button className="btn btn-primary">Kelola</button>
              </div>

              <div className="control-card">
                <h3>Backup Data</h3>
                <p>Backup dan restore database sistem</p>
                <button className="btn btn-primary">Kelola</button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default AdminDashboard;
