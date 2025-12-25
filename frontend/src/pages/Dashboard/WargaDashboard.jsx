import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  FaFileAlt, 
  FaHistory, 
  FaBell, 
  FaUser, 
  FaSignOutAlt,
  FaPlus,
  FaCheckCircle,
  FaClock,
  FaTimesCircle,
  FaChartBar
} from 'react-icons/fa';
import Navbar from '../../components/Layout/Navbar';
import Sidebar from '../../components/Layout/Sidebar';
import StatsCard from '../../components/Dashboard/StatsCard';
import RecentActivity from '../../components/Dashboard/RecentActivity';
import PengajuanTable from '../../components/Dashboard/PengajuanTable';

const WargaDashboard = () => {
  const [user, setUser] = useState({});
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil data user dari localStorage
    const userName = localStorage.getItem('userName') || 'Warga';
    const username = localStorage.getItem('username') || '';
    
    setUser({
      name: userName,
      username: username
    });
  }, []);

  const handleLogout = () => {
    localStorage.clear();
    navigate('/login');
  };

  const stats = [
    {
      title: 'Total Pengajuan',
      value: '15',
      icon: <FaFileAlt />,
      color: 'primary'
    },
    {
      title: 'Disetujui',
      value: '10',
      icon: <FaCheckCircle />,
      color: 'success'
    },
    {
      title: 'Diproses',
      value: '3',
      icon: <FaClock />,
      color: 'warning'
    },
    {
      title: 'Ditolak',
      value: '2',
      icon: <FaTimesCircle />,
      color: 'danger'
    }
  ];

  const recentActivities = [
    { id: 1, action: 'Pengajuan SKTM', status: 'Disetujui', time: '2 jam lalu' },
    { id: 2, action: 'Pengajuan Domisili', status: 'Diproses', time: '1 hari lalu' },
    { id: 3, action: 'Update data diri', status: 'Selesai', time: '2 hari lalu' }
  ];

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <FaChartBar /> },
    { id: 'pengajuan', label: 'Pengajuan Surat', icon: <FaFileAlt /> },
    { id: 'riwayat', label: 'Riwayat', icon: <FaHistory /> },
    { id: 'notifikasi', label: 'Notifikasi', icon: <FaBell /> },
    { id: 'profil', label: 'Profil', icon: <FaUser /> }
  ];

  return (
    <div className="dashboard-page">
      <Navbar />
      
      <div className="dashboard-container">
        <Sidebar 
          menuItems={menuItems}
          activeMenu={activeMenu}
          onMenuClick={setActiveMenu}
          onLogout={handleLogout}
        />
        
        <main className="dashboard-content">
          <div className="dashboard-header">
            <h1>Dashboard Warga</h1>
            <p>Selamat datang, {user.name}</p>
          </div>
          
          {/* Stats Grid */}
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <StatsCard
                key={index}
                title={stat.title}
                value={stat.value}
                icon={stat.icon}
                color={stat.color}
              />
            ))}
          </div>
          
          {/* Quick Actions */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Pengajuan Cepat</h2>
              <button className="btn btn-primary">
                <FaPlus /> Ajukan Surat Baru
              </button>
            </div>
            
            <div className="quick-actions-grid">
              <button className="quick-action-btn">
                <FaFileAlt />
                <span>SKTM</span>
              </button>
              <button className="quick-action-btn">
                <FaFileAlt />
                <span>Domisili</span>
              </button>
              <button className="quick-action-btn">
                <FaFileAlt />
                <span>Kelahiran</span>
              </button>
              <button className="quick-action-btn">
                <FaFileAlt />
                <span>Kematian</span>
              </button>
            </div>
          </div>
          
          {/* Recent Activities */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Aktivitas Terkini</h2>
            </div>
            <RecentActivity activities={recentActivities} />
          </div>
          
          {/* Pengajuan Table */}
          <div className="dashboard-section">
            <div className="section-header">
              <h2>Pengajuan Terbaru</h2>
            </div>
            <PengajuanTable />
          </div>
        </main>
      </div>
    </div>
  );
};

export default WargaDashboard;