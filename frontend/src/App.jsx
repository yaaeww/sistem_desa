import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Login from './pages/Login';
import Register from './pages/Register';
import AdminDashboard from './pages/Dashboard/AdminDashboard';
import StaffDashboard from './pages/Dashboard/StaffDashboard';
import WargaDashboard from './pages/Dashboard/WargaDashboard';
import './styles/main.css';

function App() {
  // Simulasi autentikasi sederhana
  const isAuthenticated = localStorage.getItem('isLoggedIn') === 'true';
  const userRole = localStorage.getItem('userRole') || 'warga';

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          
          {/* Protected Routes */}
          <Route path="/admin" element={
            isAuthenticated && userRole === 'admin' ? 
            <AdminDashboard /> : <Navigate to="/login" />
          } />
          
          <Route path="/staff" element={
            isAuthenticated && userRole === 'staff' ? 
            <StaffDashboard /> : <Navigate to="/login" />
          } />
          
          <Route path="/warga" element={
            isAuthenticated && userRole === 'warga' ? 
            <WargaDashboard /> : <Navigate to="/login" />
          } />
          
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;