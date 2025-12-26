import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"; // Tambahkan useNavigate
import { FaHome, FaBell, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [userRole, setUserRole] = useState(""); // Tambahkan state untuk role
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false); // Tambahkan state untuk dropdown

  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem("isLoggedIn") === "true";
    setIsLoggedIn(loggedIn);
    setUserName(localStorage.getItem("userName") || "Warga Desa");
    setUserRole(localStorage.getItem("userRole") || "");

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    localStorage.removeItem("userRole");
    setShowDropdown(false);
    setIsMobileMenuOpen(false);
    navigate("/");
    window.location.reload();
  };

  // Tentukan dashboard berdasarkan role
  const getDashboardPath = () => {
    switch (userRole) {
      case "admin":
        return "/admin";
      case "staff":
        return "/staff";
      case "warga":
        return "/warga";
      default:
        return "/login";
    }
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            {/* Logo Desa dengan gambar */}
            <div className="logo-container">
              <img
                src="/logodesa.png"
                alt="Logo Desa Bojongslawi"
                className="desa-logo"
                width="40"
                height="40"
                loading="lazy"
              />
              <div className="brand-text">
                <span className="brand-title">Bojongslawi</span>
              </div>
            </div>
          </Link>
        </div>

        <button
          className="mobile-menu-btn"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>

        <div className={`navbar-menu ${isMobileMenuOpen ? "active" : ""}`}>
          <Link
            to="/"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Beranda
          </Link>
          <Link
            to="/informasi"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Informasi
          </Link>
          <Link
            to="/layanan"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Layanan
          </Link>
          <Link
            to="/potensi"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Potensi Desa
          </Link>
          <Link
            to="/kontak"
            className="nav-link"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Kontak
          </Link>
        </div>

        <div className="navbar-actions">
          {isLoggedIn ? (
            <>
              <button className="nav-icon-btn">
                <FaBell />
                <span className="badge">3</span>
              </button>
              <div className="user-dropdown-wrapper">
                <button
                  className="user-btn"
                  onClick={() => setShowDropdown(!showDropdown)}
                >
                  <FaUserCircle />
                  <span>{userName}</span>
                </button>

                {showDropdown && (
                  <div className="dropdown-menu">
                    <Link
                      to={getDashboardPath()}
                      className="dropdown-item"
                      onClick={() => {
                        setShowDropdown(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Dashboard
                    </Link>
                    <Link
                      to="/profile"
                      className="dropdown-item"
                      onClick={() => {
                        setShowDropdown(false);
                        setIsMobileMenuOpen(false);
                      }}
                    >
                      Profil
                    </Link>
                    <button className="dropdown-item" onClick={handleLogout}>
                      Keluar
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            <>
              <Link to="/login" className="btn btn-outline">
                Masuk
              </Link>
              <Link to="/register" className="btn btn-primary">
                Daftar
              </Link>
            </>
          )}
        </div>

        {/* Overlay untuk menutup dropdown saat klik di luar */}
        {showDropdown && (
          <div
            className="dropdown-overlay"
            onClick={() => setShowDropdown(false)}
          />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
