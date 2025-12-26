// App.js
import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";

// Hanya import CSS global
import './styles/global.css';
import './styles/layout.css';
import './styles/components.css';

// Pages
import LandingPage from "./pages/landing/LandingPage";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import InformasiDesa from "./pages/informasi/Informasi";
import DetailInformasi from "./pages/informasi/DetailInformasi";
import LayananDesa from "./pages/layanan/LayananDesa";
import DetailLayanan from "./pages/layanan/DetailLayanan";
import PotensiDesa from "./pages/potensi/PotensiDesa";
import DetailPotensi from "./pages/potensi/DetailPotensi";
import Kontak from "./pages/kontak/Kontak";


function App() {
  const isAuthenticated = localStorage.getItem("isLoggedIn") === "true";
  const userRole = localStorage.getItem("userRole") || "warga";

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/informasi" element={<InformasiDesa />} />
          <Route path="/informasi/:slug" element={<DetailInformasi />} />
          <Route path="/layanan" element={<LayananDesa />} />
          <Route path="/layanan/:slug" element={<DetailLayanan />} />
          <Route path="/potensi" element={<PotensiDesa />} />
          <Route path="/potensi/:slug" element={<DetailPotensi />} />
          <Route path="/kontak" element={<Kontak />} />

          {/* Protected Routes */}
          <Route
            path="/admin"
            element={
              isAuthenticated && userRole === "admin" ? (
                <AdminDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/staff"
            element={
              isAuthenticated && userRole === "staff" ? (
                <StaffDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route
            path="/warga"
            element={
              isAuthenticated && userRole === "warga" ? (
                <WargaDashboard />
              ) : (
                <Navigate to="/login" />
              )
            }
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;