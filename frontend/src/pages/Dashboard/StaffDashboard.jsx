// src/pages/Dashboard/StaffDashboard.jsx
import React from "react";
import Header from "../../components/Layout/Navbar";
import Sidebar from "../../components/Layout/Sidebar";
import Footer from "../../components/Layout/Footer";
import StatsCard from "../../components/Dashboard/StatsCard";
import RecentActivity from "../../components/Dashboard/RecentActivity";
import PengajuanTable from "../../components/Dashboard/PengajuanTable";

// UBAH DARI:
// export const StaffDashboard = () => { ... }

// MENJADI:
const StaffDashboard = () => {
  const statsData = [
    { title: "Pengajuan Masuk", value: "42", icon: "📥", color: "blue" },
    { title: "Disetujui", value: "28", icon: "✅", color: "green" },
    { title: "Ditolak", value: "5", icon: "❌", color: "red" },
  ];

  const activities = [
    {
      title: "Pengajuan Baru",
      description: "Budi mengajukan surat keterangan",
      time: "10 menit lalu",
    },
    {
      title: "Persetujuan",
      description: "Surat pengantar Anita disetujui",
      time: "1 jam lalu",
    },
    {
      title: "Update Data",
      description: "Data warga diperbarui",
      time: "2 jam lalu",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <div className="flex flex-1">
        <Sidebar />
        <main className="flex-1 p-6">
          <h1 className="text-3xl font-bold mb-6">Staff Dashboard</h1>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            {statsData.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>

          {/* Recent Activity */}
          <div className="mb-8">
            <RecentActivity activities={activities} />
          </div>

          {/* Pengajuan Table */}
          <div>
            <h2 className="text-xl font-bold mb-4">Daftar Pengajuan</h2>
            <PengajuanTable data={[]} />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  );
};

// TAMBAHKAN DI AKHIR:
export default StaffDashboard;
