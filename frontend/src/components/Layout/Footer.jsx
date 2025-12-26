// src/components/Layout/Footer.jsx
import React from "react";
import { Link } from "react-router-dom";
import {
  FaHome,
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaQuestionCircle,
  FaShieldAlt,
} from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-brand">
              <FaHome className="footer-logo-icon" />
              <h3>Desa Bojongslawi</h3>
            </div>
            <p className="footer-description">
              Desa yang harmonis dengan masyarakat yang berdaya dan lingkungan
              yang asri. Layanan digital untuk memudahkan administrasi desa.
            </p>
            <div className="social-links">
              <a href="#" aria-label="Facebook" className="social-link">
                <FaFacebook />
              </a>
              <a href="#" aria-label="Instagram" className="social-link">
                <FaInstagram />
              </a>
              <a href="#" aria-label="YouTube" className="social-link">
                <FaYoutube />
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4>Kontak Kami</h4>
            <div className="contact-info">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>
                Jl pintu air no 12 kode pos 45252, Legok, Kec. Lohbener, Kabupaten Indramayu, Jawa Barat
                </span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <span>(022) 1234-5678</span>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <span>info@bojongslawi.desa.id</span>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Jam Pelayanan</h4>
            <div className="service-hours">
              <div className="hour-item">
                <FaClock className="hour-icon" />
                <div>
                  <strong>Senin - Kamis</strong>
                  <span>08:00 - 16:00 WIB</span>
                </div>
              </div>
              <div className="hour-item">
                <FaClock className="hour-icon" />
                <div>
                  <strong>Jumat</strong>
                  <span>08:00 - 11:00 WIB</span>
                </div>
              </div>
              <div className="hour-item">
                <FaClock className="hour-icon" />
                <div>
                  <strong>Sabtu</strong>
                  <span>08:00 - 14:00 WIB</span>
                </div>
              </div>
              <div className="hour-item">
                <FaClock className="hour-icon" />
                <div class>
                  <strong>Minggu & Libur</strong>
                  <span>Tutup</span>
                </div>
              </div>
            </div>
          </div>

          <div className="footer-section">
            <h4>Tautan Cepat</h4>
            <div className="quick-links">
              <Link to="/informasi" className="quick-link">
                Informasi Desa
              </Link>
              <Link to="/layanan" className="quick-link">
                Layanan Online
              </Link>
              <Link to="/potensi" className="quick-link">
                Potensi Desa
              </Link>
              <Link to="/kontak" className="quick-link">
                Kontak
              </Link>
              <Link to="/faq" className="quick-link">
                <FaQuestionCircle /> FAQ
              </Link>
              <Link to="/privacy" className="quick-link">
                <FaShieldAlt /> Kebijakan Privasi
              </Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>
            &copy; {currentYear} Pemerintah Desa Bojongslawi. All rights
            reserved.
          </p>
          <p className="footer-address">
            Kecamatan.Lohbener , Kabupaten.Indramayu , Provinsi Jawa Barat
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
