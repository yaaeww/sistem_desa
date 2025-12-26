import React, { useState, useEffect, useMemo, useCallback } from "react";
import { Link } from "react-router-dom";
import "./informasi.css";

import { 
  FaCalendarAlt, 
  FaNewspaper, 
  FaBullhorn, 
  FaBriefcase,
  FaSearch,
  FaFilter,
  FaClock,
  FaUser,
  FaEye,
  FaArrowRight,
  FaCalendarDay,
  FaBookmark,
  FaShareAlt,
  FaBars,
  FaTimes
} from "react-icons/fa";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";

const InformasiDesa = () => {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [informasiList, setInformasiList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showMobileSidebar, setShowMobileSidebar] = useState(false);

  // Data dummy informasi desa
  const dummyInformasi = [
    {
      id: 1,
      judul: "Pembangunan Jalan Dusun 3",
      slug: "pembangunan-jalan-dusun-3",
      konten: "Pemerintah desa akan membangun jalan di Dusun 3 mulai tanggal 15 Januari 2026. Mohon pengertian warga untuk kooperatif selama proses pembangunan.",
      kategori: "pengumuman",
      gambar_path: "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      penulis: "Admin Desa",
      tanggal_publikasi: "2025-12-20",
      tanggal_berakhir: "2026-01-31",
      views: 45,
      is_published: true,
      excerpt: "Pembangunan infrastruktur jalan untuk meningkatkan aksesibilitas..."
    },
    {
      id: 2,
      judul: "Festival Desa 2026",
      slug: "festival-desa-2026",
      konten: "Desa Maju Jaya akan menyelenggarakan Festival Desa pada tanggal 20-22 Februari 2026. Acara akan menampilkan berbagai kesenian tradisional dan kuliner khas.",
      kategori: "agenda",
      gambar_path: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      penulis: "Staff Kesenian",
      tanggal_publikasi: "2025-12-18",
      tanggal_berakhir: "2026-02-22",
      views: 78,
      is_published: true,
      excerpt: "Merayakan kekayaan budaya lokal dengan festival tahunan..."
    },
    {
      id: 3,
      judul: "Lowongan Petugas Kebersihan",
      slug: "lowongan-petugas-kebersihan",
      konten: "Dibutuhkan 2 orang petugas kebersihan untuk wilayah Dusun 2 dan 4. Persyaratan: usia 25-45 tahun, sehat jasmani.",
      kategori: "lowongan",
      gambar_path: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      penulis: "Bagian Umum",
      tanggal_publikasi: "2025-12-15",
      tanggal_berakhir: "2026-01-15",
      views: 112,
      is_published: true,
      excerpt: "Kesempatan kerja bagi warga desa sebagai petugas kebersihan..."
    },
    {
      id: 4,
      judul: "Bantuan Sembako Bulan Desember",
      slug: "bantuan-sembako-bulan-desember",
      konten: "Pendistribusian bantuan sembako untuk warga tidak mampu akan dilaksanakan pada tanggal 28 Desember 2025 di balai desa.",
      kategori: "pengumuman",
      gambar_path: "https://images.unsplash.com/photo-1550621002-7c4a4c9a1e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      penulis: "Admin Desa",
      tanggal_publikasi: "2025-12-10",
      tanggal_berakhir: "2025-12-30",
      views: 89,
      is_published: true,
      excerpt: "Program bantuan sosial untuk keluarga kurang mampu..."
    },
    {
      id: 5,
      judul: "Juara Lomba Kebersihan RT",
      slug: "juara-lomba-kebersihan-rt",
      konten: "RT 01 Dusun 1 menjadi juara lomba kebersihan tingkat desa tahun 2025. Selamat untuk warga RT 01!",
      kategori: "berita",
      gambar_path: "https://images.unsplash.com/photo-1565514145946-2d9aad05430c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      penulis: "Staff Kesehatan",
      tanggal_publikasi: "2025-12-05",
      views: 156,
      is_published: true,
      excerpt: "Pengumuman pemenang lomba kebersihan tingkat RT..."
    },
    {
      id: 6,
      judul: "Pelatihan UMKM Gratis",
      slug: "pelatihan-umkm-gratis",
      konten: "Dinas Perindustrian akan mengadakan pelatihan UMKM gratis pada tanggal 10-12 Januari 2026. Pendaftaran dibuka mulai 2 Januari.",
      kategori: "agenda",
      gambar_path: "https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      penulis: "Staff Ekonomi",
      tanggal_publikasi: "2025-12-01",
      tanggal_berakhir: "2026-01-12",
      views: 67,
      is_published: true,
      excerpt: "Program peningkatan kompetensi pelaku UMKM desa..."
    },
    {
      id: 7,
      judul: "Perbaikan Jaringan Listrik",
      slug: "perbaikan-jaringan-listrik",
      konten: "Pada tanggal 27 Desember 2025 akan dilakukan perbaikan jaringan listrik di Dusun 4. Listrik akan padam pukul 08.00-16.00.",
      kategori: "pengumuman",
      gambar_path: "https://images.unsplash.com/photo-1542744173-05336fcc7ad4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      penulis: "Admin Desa",
      tanggal_publikasi: "2025-11-28",
      tanggal_berakhir: "2025-12-27",
      views: 92,
      is_published: true,
      excerpt: "Pemberitahuan jadwal pemadaman listrik untuk perbaikan..."
    }
  ];

  useEffect(() => {
    // Simulasi loading data
    setTimeout(() => {
      setInformasiList(dummyInformasi);
      setLoading(false);
    }, 500);
  }, []);

  // Hitung jumlah informasi per kategori
  const kategoriCounts = useMemo(() => {
    const counts = {
      semua: dummyInformasi.length,
      pengumuman: 0,
      berita: 0,
      agenda: 0,
      lowongan: 0
    };
    
    dummyInformasi.forEach(item => {
      if (counts[item.kategori] !== undefined) {
        counts[item.kategori]++;
      }
    });
    
    return counts;
  }, [dummyInformasi]);

  // Kategori informasi dengan count yang dinamis
  const categories = [
    { id: "semua", label: "Semua", icon: <FaNewspaper />, count: kategoriCounts.semua },
    { id: "pengumuman", label: "Pengumuman", icon: <FaBullhorn />, count: kategoriCounts.pengumuman },
    { id: "berita", label: "Berita", icon: <FaNewspaper />, count: kategoriCounts.berita },
    { id: "agenda", label: "Agenda", icon: <FaCalendarAlt />, count: kategoriCounts.agenda },
    { id: "lowongan", label: "Lowongan", icon: <FaBriefcase />, count: kategoriCounts.lowongan }
  ];

  // Filter informasi berdasarkan kategori dan pencarian
  const filteredInformasi = useMemo(() => {
    let filtered = [...informasiList];

    // Filter berdasarkan kategori
    if (activeCategory !== "semua") {
      filtered = filtered.filter(item => item.kategori === activeCategory);
    }

    // Filter berdasarkan pencarian
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim();
      filtered = filtered.filter(item => 
        item.judul.toLowerCase().includes(query) || 
        item.konten.toLowerCase().includes(query) ||
        item.excerpt.toLowerCase().includes(query)
      );
    }

    return filtered;
  }, [activeCategory, searchQuery, informasiList]);

  // Format tanggal
  const formatDate = (dateString) => {
    const options = { day: 'numeric', month: 'long', year: 'numeric' };
    return new Date(dateString).toLocaleDateString('id-ID', options);
  };

  // Get kategori icon
  const getKategoriIcon = (kategori) => {
    switch(kategori) {
      case 'pengumuman':
        return <FaBullhorn />;
      case 'berita':
        return <FaNewspaper />;
      case 'agenda':
        return <FaCalendarAlt />;
      case 'lowongan':
        return <FaBriefcase />;
      default:
        return <FaNewspaper />;
    }
  };

  // Get kategori color class
  const getKategoriColor = (kategori) => {
    switch(kategori) {
      case 'pengumuman':
        return 'informasi-kategori-blue';
      case 'berita':
        return 'informasi-kategori-green';
      case 'agenda':
        return 'informasi-kategori-purple';
      case 'lowongan':
        return 'informasi-kategori-yellow';
      default:
        return 'informasi-kategori-gray';
    }
  };

  const handleSearch = useCallback((e) => {
    e.preventDefault();
    // Search sudah otomatis bekerja karena menggunakan useMemo
  }, []);

  const handleKeyPress = useCallback((e) => {
    // Trigger search when Enter key is pressed
    if (e.key === 'Enter') {
      e.preventDefault();
      // Search sudah otomatis bekerja karena menggunakan useMemo
    }
  }, []);

  const handleShare = useCallback((informasi) => {
    if (navigator.share) {
      navigator.share({
        title: informasi.judul,
        text: informasi.excerpt,
        url: `${window.location.origin}/informasi/${informasi.slug}`
      });
    } else {
      navigator.clipboard.writeText(`${window.location.origin}/informasi/${informasi.slug}`);
      alert('Link berhasil disalin ke clipboard!');
    }
  }, []);

  const CategorySidebar = useCallback(() => (
    <div className="informasi-sidebar-card">
      <div className="informasi-sidebar-header">
        <h3 className="informasi-sidebar-title">
          <FaFilter /> Filter Kategori
        </h3>
      </div>
      
      <div className="informasi-category-list">
        {categories.map((category) => (
          <button
            key={category.id}
            className={`informasi-category-item ${activeCategory === category.id ? 'active' : ''}`}
            onClick={() => {
              setActiveCategory(category.id);
              setShowMobileSidebar(false);
            }}
          >
            <div className="informasi-category-icon">
              {category.icon}
            </div>
            <span className="informasi-category-label">{category.label}</span>
            <span className="informasi-category-count">{category.count}</span>
          </button>
        ))}
      </div>

      {/* Informasi Penting */}
      <div className="informasi-important-info">
        <h4 className="informasi-important-title">
          <FaBullhorn /> Informasi Penting
        </h4>
        <div className="informasi-important-list">
          <div className="informasi-important-item">
            <div className="informasi-important-icon">
              <FaCalendarDay />
            </div>
            <div className="informasi-important-content">
              <h5>Pendaftaran KIP 2026</h5>
              <p>Batas: 31 Jan 2026</p>
            </div>
          </div>
          <div className="informasi-important-item">
            <div className="informasi-important-icon">
              <FaCalendarAlt />
            </div>
            <div className="informasi-important-content">
              <h5>Pelatihan UMKM</h5>
              <p>10-12 Jan 2026</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ), [activeCategory, categories]);

  const handleClearSearch = useCallback(() => {
    setSearchQuery("");
  }, []);

  return (
    <div className="informasi-page-wrapper">
      <Navbar />
      
      {/* Hero Section */}
      <section className="informasi-hero-section">
        <div className="container">
          <div className="informasi-hero-content text-center">
            <div className="informasi-hero-badge">
              <FaNewspaper /> Informasi Desa
            </div>
            <h1 className="informasi-hero-title">
              Informasi Terkini{" "}
              <span className="highlight">Desa Bojongslawi</span>
            </h1>
            <p className="informasi-hero-subtitle">
              Dapatkan informasi terbaru tentang kegiatan, pengumuman, dan program desa. 
              Selalu update dengan perkembangan terkini dari Pemerintah Desa.
            </p>
            
            {/* Search Bar */}
            <div className="informasi-search-container">
              <form onSubmit={handleSearch} className="w-full max-w-2xl mx-auto">
                <div className="informasi-search-wrapper">
                  <FaSearch className="informasi-search-icon" />
                  <input
                    type="text"
                    placeholder="Cari informasi (judul, konten, atau ringkasan)..."
                    className="informasi-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    onKeyPress={handleKeyPress}
                  />
                  <button type="submit" className="btn btn-primary">
                    Cari
                  </button>
                </div>
                {searchQuery && (
                  <div className="informasi-search-info mt-2">
                    <small className="text-white/80">
                      Menampilkan {filteredInformasi.length} hasil pencarian untuk "{searchQuery}"
                      {filteredInformasi.length === 0 && (
                        <span className="block mt-1">
                          <button 
                            onClick={handleClearSearch}
                            className="text-white underline"
                          >
                            Hapus pencarian
                          </button>
                        </span>
                      )}
                    </small>
                  </div>
                )}
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-8 md:py-12">
        {/* Mobile Filter Toggle */}
        <div className="informasi-mobile-only mb-4">
          <button 
            className="informasi-mobile-filter-toggle btn btn-outline w-full"
            onClick={() => setShowMobileSidebar(true)}
          >
            <FaBars /> Filter Kategori
          </button>
        </div>

        <div className="informasi-layout">
          {/* Desktop Sidebar */}
          <aside className="informasi-sidebar informasi-desktop-only">
            <CategorySidebar />
          </aside>

          {/* Mobile Sidebar Modal */}
          <div className={`informasi-sidebar-modal ${showMobileSidebar ? 'active' : ''}`}>
            <div className="informasi-sidebar-modal-content">
              <div className="informasi-sidebar-modal-header">
                <h3 className="informasi-sidebar-title">
                  <FaFilter /> Filter Kategori
                </h3>
                <button 
                  className="informasi-close-sidebar-btn"
                  onClick={() => setShowMobileSidebar(false)}
                >
                  <FaTimes />
                </button>
              </div>
              <CategorySidebar />
            </div>
          </div>

          {/* Main Content Area */}
          <div className="informasi-main-content">
            {/* Header dengan filter */}
            <div className="informasi-content-header">
              <div className="informasi-header-info">
                <h2 className="informasi-content-title">
                  {activeCategory === "semua" ? "Semua Informasi" : 
                   categories.find(c => c.id === activeCategory)?.label}
                  {searchQuery && `: Hasil pencarian "${searchQuery}"`}
                </h2>
                <p className="informasi-content-subtitle">
                  Menampilkan {filteredInformasi.length} dari {informasiList.length} informasi
                </p>
              </div>
              
              {(activeCategory !== "semua" || searchQuery) && (
                <button
                  onClick={() => {
                    setActiveCategory("semua");
                    setSearchQuery("");
                  }}
                  className="btn btn-outline"
                >
                  <FaFilter /> Reset Filter
                </button>
              )}
            </div>

            {/* Informasi Grid */}
            {loading ? (
              <div className="informasi-loading-grid">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="informasi-loading-card">
                    <div className="informasi-loading-image"></div>
                    <div className="informasi-loading-content">
                      <div className="informasi-loading-title"></div>
                      <div className="informasi-loading-text"></div>
                      <div className="informasi-loading-text"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredInformasi.length > 0 ? (
              <div className="informasi-grid">
                {filteredInformasi.map((informasi) => (
                  <div 
                    key={informasi.id}
                    className="informasi-card"
                  >
                    {/* Gambar Utama */}
                    <div className="informasi-card-image-wrapper">
                      {informasi.gambar_path ? (
                        <img
                          src={informasi.gambar_path}
                          alt={informasi.judul}
                          className="informasi-card-image"
                          loading="lazy"
                        />
                      ) : (
                        <div className="informasi-card-image-placeholder">
                          <FaNewspaper className="informasi-placeholder-icon" />
                        </div>
                      )}
                      
                      {/* Kategori Badge */}
                      <div className="informasi-card-category">
                        <span className={`informasi-category-badge ${getKategoriColor(informasi.kategori)}`}>
                          {getKategoriIcon(informasi.kategori)}
                          {informasi.kategori.charAt(0).toUpperCase() + informasi.kategori.slice(1)}
                        </span>
                      </div>

                      {/* Bookmark Button */}
                      <button 
                        className="informasi-bookmark-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert('Informasi disimpan');
                        }}
                      >
                        <FaBookmark />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="informasi-card-content">
                      <div className="informasi-card-meta">
                        <div className="informasi-meta-item">
                          <FaUser />
                          <span>{informasi.penulis}</span>
                        </div>
                        <div className="informasi-meta-item">
                          <FaClock />
                          <span>{formatDate(informasi.tanggal_publikasi)}</span>
                        </div>
                        <div className="informasi-meta-item">
                          <FaEye />
                          <span>{informasi.views} dilihat</span>
                        </div>
                      </div>

                      <h3 className="informasi-card-title">
                        {informasi.judul}
                      </h3>

                      <p className="informasi-card-excerpt">
                        {informasi.excerpt || informasi.konten.substring(0, 150)}...
                      </p>

                      {/* Masa Berlaku */}
                      {informasi.tanggal_berakhir && (
                        <div className="informasi-card-expiry">
                          <FaCalendarAlt />
                          <span className="informasi-expiry-text">Berlaku hingga:</span>
                          <span className="informasi-expiry-date">{formatDate(informasi.tanggal_berakhir)}</span>
                        </div>
                      )}

                      <div className="informasi-card-footer">
                        <Link
                          to={`/informasi/${informasi.slug}`}
                          className="informasi-read-more-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Baca selengkapnya
                          <FaArrowRight />
                        </Link>
                        
                        <button
                          className="informasi-share-btn"
                          onClick={(e) => {
                            e.stopPropagation();
                            handleShare(informasi);
                          }}
                        >
                          <FaShareAlt />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="informasi-empty-state">
                <div className="informasi-empty-content">
                  <FaSearch className="informasi-empty-icon" />
                  <h3 className="informasi-empty-title">Informasi tidak ditemukan</h3>
                  <p className="informasi-empty-text">
                    {searchQuery 
                      ? `Tidak ada informasi yang sesuai dengan pencarian "${searchQuery}"`
                      : "Tidak ada informasi yang tersedia untuk kategori ini"
                    }
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("semua");
                    }}
                    className="btn btn-primary"
                  >
                    Tampilkan semua informasi
                  </button>
                </div>
              </div>
            )}

            {/* Featured Information - hanya tampil jika tidak ada pencarian */}
            {activeCategory === "semua" && !searchQuery && filteredInformasi.length > 0 && (
              <div className="informasi-featured-section">
                <div className="informasi-section-header">
                  <h2 className="informasi-section-title">
                    <FaBullhorn /> Pengumuman Penting
                  </h2>
                  <p className="informasi-section-subtitle">
                    Informasi resmi dari Pemerintah Desa Bojongslawi
                  </p>
                </div>
                
                <div className="informasi-featured-grid">
                  {informasiList
                    .filter(item => item.kategori === "pengumuman" && item.is_published)
                    .slice(0, 2)
                    .map((pengumuman) => (
                      <div key={pengumuman.id} className="informasi-featured-card">
                        <div className="informasi-featured-badge">
                          <FaBullhorn /> Pengumuman
                        </div>
                        <div className="informasi-featured-content">
                          <h3 className="informasi-featured-title">{pengumuman.judul}</h3>
                          <p className="informasi-featured-excerpt">{pengumuman.excerpt}</p>
                          {pengumuman.tanggal_berakhir && (
                            <div className="informasi-featured-expiry">
                              <FaCalendarAlt />
                              <span>Berlaku hingga: {formatDate(pengumuman.tanggal_berakhir)}</span>
                            </div>
                          )}
                          <Link 
                            to={`/informasi/${pengumuman.slug}`}
                            className="btn btn-primary"
                          >
                            Lihat Detail
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Upcoming Agenda - hanya tampil jika tidak ada pencarian */}
            {activeCategory === "semua" && !searchQuery && filteredInformasi.length > 0 && (
              <div className="informasi-agenda-section">
                <div className="informasi-section-header">
                  <h2 className="informasi-section-title">
                    <FaCalendarAlt /> Agenda Mendatang
                  </h2>
                  <p className="informasi-section-subtitle">
                    Jadwal kegiatan dan acara di Desa Bojongslawi
                  </p>
                </div>
                
                <div className="informasi-agenda-grid">
                  {informasiList
                    .filter(item => item.kategori === "agenda" && item.is_published)
                    .slice(0, 3)
                    .map((agenda) => (
                      <div key={agenda.id} className="informasi-agenda-card">
                        <div className="informasi-agenda-header">
                          <div className="informasi-agenda-icon">
                            <FaCalendarAlt />
                          </div>
                          <div>
                            <h3 className="informasi-agenda-title">{agenda.judul}</h3>
                            <p className="informasi-agenda-author">{agenda.penulis}</p>
                          </div>
                        </div>
                        <div className="informasi-agenda-dates">
                          <div className="informasi-date-item">
                            <FaCalendarAlt />
                            <span>Mulai: {formatDate(agenda.tanggal_publikasi)}</span>
                          </div>
                          {agenda.tanggal_berakhir && (
                            <div className="informasi-date-item">
                              <FaCalendarAlt />
                              <span>Selesai: {formatDate(agenda.tanggal_berakhir)}</span>
                            </div>
                          )}
                        </div>
                        <Link 
                          to={`/informasi/${agenda.slug}`}
                          className="btn btn-warning"
                        >
                          Lihat Detail
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Newsletter Subscription */}
      <section className="informasi-newsletter-section">
        <div className="container">
          <div className="informasi-newsletter-content">
            <h2 className="informasi-newsletter-title">
              Dapatkan Update Terbaru
            </h2>
            <p className="informasi-newsletter-text">
              Berlangganan newsletter kami untuk mendapatkan informasi terbaru 
              dari Desa Bojongslawi langsung ke email Anda
            </p>
            <form className="informasi-newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="informasi-newsletter-input"
                  required
                />
                <button type="submit" className="btn btn-primary">
                  Berlangganan
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InformasiDesa;