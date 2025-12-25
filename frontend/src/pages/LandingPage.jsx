import React from "react";
import { Link } from "react-router-dom";
import {
  FaFileAlt,
  FaUsers,
  FaBullhorn,
  FaHandsHelping,
  FaSeedling, // Ganti GiRiceField dengan FaSeedling
  FaLeaf,
  FaWater,
  FaMountain,
  FaTree,
  FaFish,
  FaUmbrellaBeach,
} from "react-icons/fa";
import { GiVillage } from "react-icons/gi";
import Navbar from "../components/Layout/Navbar";
import Footer from "../components/Layout/Footer";
import Card from "../components/Common/Card";

const LandingPage = () => {
  const features = [
    {
      icon: <FaFileAlt />,
      title: "Pengajuan Surat Online",
      description:
        "Ajukan berbagai keperluan surat secara online tanpa harus datang ke kantor desa",
    },
    {
      icon: <FaBullhorn />,
      title: "Informasi Desa",
      description:
        "Dapatkan informasi terbaru tentang kegiatan, pengumuman, dan program desa",
    },
    {
      icon: <FaSeedling />, // Ganti dengan FaSeedling
      title: "Potensi Desa",
      description:
        "Informasi tentang pertanian, UMKM, dan potensi lokal Desa Bojongslawi",
    },
    {
      icon: <FaHandsHelping />,
      title: "Pelayanan Cepat",
      description:
        "Proses pengajuan surat yang lebih cepat, mudah, dan transparan",
    },
  ];

  const jenisSurat = [
    "Surat Keterangan Tidak Mampu (SKTM)",
    "Surat Keterangan Domisili",
    "Surat Keterangan Kelahiran",
    "Surat Keterangan Kematian",
    "Surat Keterangan Usaha",
    "Surat Pengantar Nikah",
    "Surat Keterangan Penghasilan",
    "Kartu Keluarga (KK)",
  ];

  const potensiDesa = [
    {
      icon: <FaSeedling />, // Ganti dengan FaSeedling
      title: "Pertanian",
      desc: "Lahan sawah produktif dengan sistem irigasi terpadu",
    },
    {
      icon: <FaTree />, // Ganti dengan FaTree
      title: "Perkebunan",
      desc: "Kebun salak, manggis, dan buah-buahan lokal",
    },
    {
      icon: <FaFish />, // Ganti dengan FaFish
      title: "Perikanan",
      desc: "Budidaya ikan air tawar dan kolam terpal",
    },
    {
      icon: <FaUmbrellaBeach />, // Ganti dengan FaUmbrellaBeach
      title: "Wisata Alam",
      desc: "Pesona alam pedesaan yang masih asri",
    },
  ];

  return (
    <div className="landing-page">
      <Navbar />

      {/* Hero Section */}
      <section className="hero-section">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <GiVillage /> Desa Bojongslawi
            </div>
            <h1 className="hero-title">
              Selamat Datang di{" "}
              <span className="highlight">Desa Bojongslawi</span>
            </h1>
            <p className="hero-subtitle">
              Desa yang harmonis dengan masyarakat yang berdaya dan lingkungan
              yang asri. Layanan digital untuk memudahkan administrasi desa.
            </p>
            <div className="hero-buttons">
              <Link to="/login" className="btn btn-primary btn-lg">
                <FaFileAlt /> Ajukan Surat
              </Link>
              <Link to="/register" className="btn btn-secondary btn-lg">
                <FaUsers /> Daftar Warga
              </Link>
              <Link to="/informasi" className="btn btn-outline btn-lg">
                <FaBullhorn /> Info Desa
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="features-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Layanan Unggulan Desa</h2>
            <p className="section-subtitle">
              Nikmati kemudahan layanan digital dari Pemerintah Desa Bojongslawi
            </p>
          </div>
          <div className="features-grid">
            {features.map((feature, index) => (
              <Card key={index} className="feature-card">
                <div className="feature-icon-wrapper">
                  <div className="feature-icon">{feature.icon}</div>
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="services-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Jenis Surat yang Tersedia</h2>
            <p className="section-subtitle">
              Pengajuan surat administrasi dapat dilakukan secara online
            </p>
          </div>
          <div className="services-grid">
            {jenisSurat.map((surat, index) => (
              <div key={index} className="service-item">
                <div className="service-icon-wrapper">
                  <FaFileAlt className="service-icon" />
                </div>
                <span>{surat}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Potensi Desa Section */}
      <section className="potential-section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">Potensi Desa Bojongslawi</h2>
            <p className="section-subtitle">
              Menggali dan mengembangkan potensi lokal untuk kesejahteraan
              bersama
            </p>
          </div>
          <div className="potential-grid">
            {potensiDesa.map((item, index) => (
              <div key={index} className="potential-card">
                <div className="potential-icon">{item.icon}</div>
                <h4>{item.title}</h4>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <h3>2.500+</h3>
              <p>Jiwa Penduduk</p>
            </div>
            <div className="stat-item">
              <h3>650+</h3>
              <p>Keluarga Terdaftar</p>
            </div>
            <div className="stat-item">
              <h3>1.850+</h3>
              <p>Surat Terbit</p>
            </div>
            <div className="stat-item">
              <h3>24/7</h3>
              <p>Layanan Online</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-content">
            <h2>Bergabunglah Bersama Kami</h2>
            <p>
              Jadilah bagian dari kemajuan Desa Bojongslawi. Daftar sekarang
              untuk mendapatkan akses penuh ke semua layanan digital desa.
            </p>
            <div className="cta-buttons">
              <Link to="/register" className="btn btn-primary btn-lg">
                Daftar Sekarang
              </Link>
              <Link to="/login" className="btn btn-light btn-lg">
                Masuk ke Akun
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default LandingPage;