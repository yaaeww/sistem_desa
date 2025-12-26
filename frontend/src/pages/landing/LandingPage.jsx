import React from "react";
import { Link } from "react-router-dom";
import './landing.css';

import {
  FaFileAlt,
  FaUsers,
  FaBullhorn,
  FaHandsHelping,
  FaSeedling,
  FaTree,
  FaFish,
  FaUmbrellaBeach,
  FaChevronRight,
  FaChartLine,
  FaClock,
  FaShieldAlt
} from "react-icons/fa";
import { GiVillage } from "react-icons/gi";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import Card from "../../components/Common/Card";

const LandingPage = () => {
  const features = [
    {
      icon: <FaFileAlt />,
      title: "Pengajuan Surat Online",
      description: "Ajukan berbagai keperluan surat secara online tanpa harus datang ke kantor desa",
      bgColor: "var(--bg-accent)",
      iconColor: "var(--primary-color)"
    },
    {
      icon: <FaBullhorn />,
      title: "Informasi Desa",
      description: "Dapatkan informasi terbaru tentang kegiatan, pengumuman, dan program desa",
      bgColor: "var(--bg-tertiary)",
      iconColor: "var(--secondary-color)"
    },
    {
      icon: <FaSeedling />,
      title: "Potensi Desa",
      description: "Informasi tentang pertanian, UMKM, dan potensi lokal Desa Bojongslawi",
      bgColor: "var(--bg-accent)",
      iconColor: "var(--success-color)"
    },
    {
      icon: <FaHandsHelping />,
      title: "Pelayanan Cepat",
      description: "Proses pengajuan surat yang lebih cepat, mudah, dan transparan",
      bgColor: "var(--bg-tertiary)",
      iconColor: "var(--primary-color)"
    }
  ];

  const jenisSurat = [
    "Surat Keterangan Tidak Mampu (SKTM)",
    "Surat Keterangan Domisili",
    "Surat Keterangan Kelahiran",
    "Surat Keterangan Kematian",
    "Surat Keterangan Usaha",
    "Surat Pengantar Nikah",
    "Surat Keterangan Penghasilan",
    "Kartu Keluarga (KK)"
  ];

  const potensiDesa = [
    {
      icon: <FaSeedling />,
      title: "Pertanian",
      desc: "Lahan sawah produktif dengan sistem irigasi terpadu",
      stats: "250+ Hektar"
    },
    {
      icon: <FaTree />,
      title: "Perkebunan",
      desc: "Kebun salak, manggis, dan buah-buahan lokal",
      stats: "50+ Jenis Tanaman"
    },
    {
      icon: <FaFish />,
      title: "Perikanan",
      desc: "Budidaya ikan air tawar dan kolam terpal",
      stats: "100+ Kolam"
    },
    {
      icon: <FaUmbrellaBeach />,
      title: "Wisata Alam",
      desc: "Pesona alam pedesaan yang masih asri",
      stats: "5+ Destinasi"
    }
  ];

  const stats = [
    { number: "2.500+", label: "Jiwa Penduduk", icon: <FaUsers /> },
    { number: "650+", label: "Keluarga Terdaftar", icon: <FaChartLine /> },
    { number: "1.850+", label: "Surat Terbit", icon: <FaFileAlt /> },
    { number: "24/7", label: "Layanan Online", icon: <FaClock /> }
  ];

  return (
    <div className="landing-page-wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="landing-hero-section">
        <div className="container">
          <div className="landing-hero-content">
            <div className="landing-hero-badge">
              <GiVillage /> Desa Bojongslawi
            </div>
            <h1 className="landing-hero-title">
              Selamat Datang di{" "}
              <span className="landing-highlight">Desa Bojongslawi</span>
            </h1>
            <p className="landing-hero-subtitle">
              Desa yang harmonis dengan masyarakat yang berdaya dan lingkungan
              yang asri. Layanan digital untuk memudahkan administrasi desa.
            </p>
            <div className="landing-hero-buttons">
              <Link to="/login" className="btn btn-primary btn-lg">
                <FaFileAlt /> Ajukan Surat
              </Link>
              <Link to="/register" className="btn btn-secondary btn-lg">
                <FaUsers /> Daftar Warga
              </Link>
              <Link to="/informasi" className="btn btn-light btn-lg">
                <FaBullhorn /> Info Desa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="landing-features-section">
        <div className="container">
          <div className="landing-section-header">
            <h2 className="landing-section-title">Layanan Unggulan Desa</h2>
            <p className="landing-section-subtitle">
              Nikmati kemudahan layanan digital dari Pemerintah Desa Bojongslawi
            </p>
          </div>
          <div className="landing-features-grid">
            {features.map((feature, index) => (
              <Card key={index} className="landing-feature-card">
                <div 
                  className="landing-feature-icon-wrapper"
                  style={{ backgroundColor: feature.bgColor }}
                >
                  <div 
                    className="landing-feature-icon"
                    style={{ color: feature.iconColor }}
                  >
                    {feature.icon}
                  </div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <div className="landing-feature-link">
                  <Link to="/layanan" className="landing-link-primary">
                    Selengkapnya <FaChevronRight />
                  </Link>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="landing-services-section">
        <div className="container">
          <div className="landing-section-header">
            <h2 className="landing-section-title">Jenis Surat yang Tersedia</h2>
            <p className="landing-section-subtitle">
              Pengajuan surat administrasi dapat dilakukan secara online
            </p>
          </div>
          <div className="landing-services-grid">
            {jenisSurat.map((surat, index) => (
              <div key={index} className="landing-service-item">
                <div className="landing-service-icon-wrapper">
                  <FaFileAlt className="landing-service-icon" />
                </div>
                <span>{surat}</span>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/layanan" className="btn btn-primary mt-3">
              Lihat Semua Layanan <FaChevronRight />
            </Link>
          </div>
        </div>
      </section>

      {/* Potensi Desa Section */}
      <section className="landing-potential-section">
        <div className="container">
          <div className="landing-section-header">
            <h2 className="landing-section-title">Potensi Desa Bojongslawi</h2>
            <p className="landing-section-subtitle">
              Menggali dan mengembangkan potensi lokal untuk kesejahteraan
              bersama
            </p>
          </div>
          <div className="landing-potential-grid">
            {potensiDesa.map((item, index) => (
              <Card key={index} className="landing-potential-card">
                <div className="landing-potential-icon">
                  {item.icon}
                </div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
                <div className="landing-potential-stats">
                  <span>{item.stats}</span>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="landing-stats-section">
        <div className="container">
          <div className="landing-stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="landing-stat-item">
                <h3>{stat.number}</h3>
                <p>
                  <span className="landing-stat-icon">{stat.icon}</span>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="landing-cta-section">
        <div className="container">
          <div className="landing-cta-content">
            <h2>Bergabunglah Bersama Kami</h2>
            <p>
              Jadilah bagian dari kemajuan Desa Bojongslawi. Daftar sekarang
              untuk mendapatkan akses penuh ke semua layanan digital desa.
            </p>
            <div className="landing-cta-buttons">
              <Link to="/register" className="btn btn-primary btn-lg">
                <FaShieldAlt /> Daftar Sekarang
              </Link>
              <Link to="/login" className="btn btn-outline btn-lg">
                Masuk ke Akun
              </Link>
            </div>
            <div className="landing-cta-footer">
              <p>
                Sudah terdaftar?{" "}
                <Link to="/login" className="landing-link-primary">
                  Masuk di sini
                </Link>
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;