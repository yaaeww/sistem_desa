import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { FaHome, FaBell, FaUserCircle, FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userName, setUserName] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    setIsLoggedIn(localStorage.getItem("isLoggedIn") === "true");
    setUserName(localStorage.getItem("userName") || "Warga Desa");

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("userName");
    window.location.reload();
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container">
        <div className="navbar-brand">
          <Link to="/" onClick={() => setIsMobileMenuOpen(false)}>
            <FaHome className="logo-icon" />
            <span>Desa Bojongslawi</span>
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
              <div className="user-dropdown">
                <button className="user-btn">
                  <FaUserCircle />
                  <span>{userName}</span>
                </button>
                <div className="dropdown-menu">
                  <Link to="/dashboard" className="dropdown-item">
                    Dashboard
                  </Link>
                  <Link to="/profile" className="dropdown-item">
                    Profil
                  </Link>
                  <button className="dropdown-item" onClick={handleLogout}>
                    Keluar
                  </button>
                </div>
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
      </div>
    </nav>
  );
};

export default Navbar;
