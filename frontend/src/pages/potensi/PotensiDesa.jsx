import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./potensi.css";

import {
  FaTree,
  FaIndustry,
  FaShoppingBag,
  FaUtensils,
  FaHotel,
  FaLandmark,
  FaSearch,
  FaFilter,
  FaMapMarkerAlt,
  FaPhone,
  FaGlobe,
  FaFacebook,
  FaInstagram,
  FaStar,
  FaArrowRight,
  FaTags,
  FaCalendarAlt,
  FaEye,
  FaShareAlt,
  FaBookmark,
} from "react-icons/fa";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";

const PotensiDesa = () => {
  const [activeCategory, setActiveCategory] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [potensiList, setPotensiList] = useState([]);
  const [filteredPotensi, setFilteredPotensi] = useState([]);
  const [loading, setLoading] = useState(true);

  // Data dummy potensi desa
  const dummyPotensi = [
    {
      id: 1,
      nama: "Kebun Jeruk Pak Slamet",
      slug: "kebun-jeruk-pak-slamet",
      deskripsi:
        "Perkebunan jeruk pamelo seluas 5 hektar dengan sistem organik. Menghasilkan 10 ton jeruk per musim panen.",
      kategori: "pertanian",
      subkategori: "perkebunan",
      gambar_path:
        "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pemilik: "Pak Slamet",
      lokasi: "Dusun 1, RT 02",
      kontak: "0812-3456-7890",
      website: "https://jerukbojong.example.com",
      rating: 4.5,
      produk_unggulan: "Jeruk Pamelo, Jeruk Siam",
      harga: "Rp 15.000 - 25.000/kg",
      fasilitas: ["Parkir luas", "Area piknik", "Pembelian langsung"],
      tags: ["organik", "buah-buahan", "pertanian-berkelanjutan"],
      views: 156,
      is_published: true,
    },
    {
      id: 2,
      nama: "UMKM Kerajinan Bambu Lestari",
      slug: "umkm-kerajinan-bambu-lestari",
      deskripsi:
        "Pengrajin bambu tradisional yang menghasilkan berbagai produk kerajinan seperti lampu hias, furniture, dan aksesoris rumah.",
      kategori: "kerajinan",
      subkategori: "handicraft",
      gambar_path:
        "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pemilik: "Ibu Siti",
      lokasi: "Dusun 2, RT 04",
      kontak: "0813-9876-5432",
      instagram: "@kerajinanbambulestari",
      rating: 4.8,
      produk_unggulan: "Lampu hias bambu, Kursi taman, Vas bunga",
      harga: "Rp 50.000 - 2.000.000",
      fasilitas: ["Workshop tour", "Custom order", "Pengiriman"],
      tags: ["kerajinan-tangan", "bambu", "furniture"],
      views: 234,
      is_published: true,
    },
    {
      id: 3,
      nama: "Wisata Air Terjun Curug Manggis",
      slug: "wisata-air-terjun-curug-manggis",
      deskripsi:
        "Air terjun alami setinggi 15 meter dengan kolam renang alami. Cocok untuk rekreasi keluarga dan fotografi alam.",
      kategori: "wisata",
      subkategori: "alam",
      gambar_path:
        "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pemilik: "Kelompok Sadar Wisata",
      lokasi: "Dusun 3",
      kontak: "0857-1234-5678",
      rating: 4.7,
      jam_operasional: "08:00 - 17:00 WIB",
      tiket: "Rp 10.000/orang",
      fasilitas: [
        "Area parkir",
        "Mushola",
        "Warung makan",
        "Toilet",
        "Pos kesehatan",
      ],
      tags: ["wisata-alam", "air-terjun", "rekreasi-keluarga"],
      views: 567,
      is_published: true,
    },
    {
      id: 4,
      nama: "Kopi Bojong Aroma",
      slug: "kopi-bojong-aroma",
      deskripsi:
        "Kedai kopi yang menyajikan kopi lokal hasil petani desa. Menyediakan berbagai varian kopi single origin.",
      kategori: "kuliner",
      subkategori: "kafe",
      gambar_path:
        "https://images.unsplash.com/photo-1498804103079-a6351b050096?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pemilik: "Pak Agus",
      lokasi: "Jalan Raya Desa, Dusun 1",
      kontak: "0812-8765-4321",
      instagram: "@kopibojongaroma",
      rating: 4.6,
      produk_unggulan: "Kopi Tubruk, Latte Art, Kopi Susu Gula Aren",
      harga: "Rp 15.000 - 35.000",
      jam_operasional: "07:00 - 22:00 WIB",
      fasilitas: ["WiFi", "Area kerja", "Live music weekend", "Parkir"],
      tags: ["kopi", "kafe", "tempat-nongkrong"],
      views: 189,
      is_published: true,
    },
    {
      id: 5,
      nama: "Sentra Batik Tulis Bojong",
      slug: "sentra-batik-tulis-bojong",
      deskripsi:
        "Kelompok pengrajin batik tulis dengan motif khas Desa Bojongslawi. Menerima pelatihan dan workshop batik.",
      kategori: "kerajinan",
      subkategori: "batik",
      gambar_path:
        "https://images.unsplash.com/photo-1590736969954-7054d3e1d1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pemilik: "Kelompok Ibu PKK",
      lokasi: "Balai Desa",
      kontak: "0813-4567-8901",
      rating: 4.9,
      produk_unggulan: "Kain Batik, Baju Batik, Tas Batik",
      harga: "Rp 150.000 - 1.500.000",
      fasilitas: ["Workshop batik", "Kelas pelatihan", "Showroom"],
      tags: ["batik", "kerajinan-tradisional", "workshop"],
      views: 278,
      is_published: true,
    },
    {
      id: 6,
      nama: "Kolam Ikan Lele Pak Joko",
      slug: "kolam-ikan-lele-pak-joko",
      deskripsi:
        "Budidaya ikan lele sistem bioflok dengan kapasitas 10.000 ekor per siklus. Menerima pesanan untuk acara dan warung makan.",
      kategori: "perikanan",
      subkategori: "budidaya",
      gambar_path:
        "https://images.unsplash.com/photo-1523699289804-55347c09047d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pemilik: "Pak Joko",
      lokasi: "Dusun 4, RT 03",
      kontak: "0815-6789-0123",
      rating: 4.4,
      produk_unggulan: "Lele segar, Lele hidup, Bibit lele",
      harga: "Rp 20.000 - 25.000/kg",
      fasilitas: ["Pembelian grosir", "Pengiriman", "Konsultasi budidaya"],
      tags: ["perikanan", "budidaya-ikan", "lele"],
      views: 123,
      is_published: true,
    },
    {
      id: 7,
      nama: "Homestay Desa Bojong",
      slug: "homestay-desa-bojong",
      deskripsi:
        "Penginapan tradisional dengan suasana pedesaan. Cocok untuk wisatawan yang ingin merasakan kehidupan desa.",
      kategori: "akomodasi",
      subkategori: "homestay",
      gambar_path:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pemilik: "Bapak Kepala Desa",
      lokasi: "Dusun 1, RT 01",
      kontak: "0812-3456-7890",
      rating: 4.3,
      harga: "Rp 150.000 - 300.000/malam",
      fasilitas: ["Kamar AC", "WiFi", "Sarapan", "Teras pedesaan", "Parkir"],
      tags: ["penginapan", "homestay", "wisata-desa"],
      views: 198,
      is_published: true,
    },
    {
      id: 8,
      nama: "Ternak Kambing Etawa Pak Darjo",
      slug: "ternak-kambing-etawa-pak-darjo",
      deskripsi:
        "Peternakan kambing perah etawa dengan produksi susu segar. Jual beli kambing dan susu kambing etawa.",
      kategori: "peternakan",
      subkategori: "ternak",
      gambar_path:
        "https://images.unsplash.com/photo-1542728928-0013d5f8c6b6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      pemilik: "Pak Darjo",
      lokasi: "Dusun 3, RT 05",
      kontak: "0813-2345-6789",
      rating: 4.5,
      produk_unggulan: "Susu kambing segar, Kambing etawa, Pupuk kandang",
      harga: "Rp 30.000 - 2.500.000",
      fasilitas: ["Kunjungan edukatif", "Pembelian online", "Home delivery"],
      tags: ["peternakan", "susu-kambing", "kambing-etawa"],
      views: 145,
      is_published: true,
    },
  ];

  // Kategori potensi
  const categories = [
    { id: "semua", label: "Semua Potensi", icon: <FaTree />, count: 8 },
    { id: "pertanian", label: "Pertanian", icon: <FaTree />, count: 1 },
    { id: "kerajinan", label: "Kerajinan", icon: <FaIndustry />, count: 2 },
    { id: "wisata", label: "Wisata", icon: <FaLandmark />, count: 1 },
    { id: "kuliner", label: "Kuliner", icon: <FaUtensils />, count: 1 },
    { id: "perikanan", label: "Perikanan", icon: <FaTree />, count: 1 },
    { id: "akomodasi", label: "Akomodasi", icon: <FaHotel />, count: 1 },
    { id: "peternakan", label: "Peternakan", icon: <FaTree />, count: 1 },
  ];

  useEffect(() => {
    // Simulasi loading data
    setTimeout(() => {
      setPotensiList(dummyPotensi);
      setFilteredPotensi(dummyPotensi);
      setLoading(false);
    }, 500);
  }, []);

  // Filter potensi berdasarkan kategori dan pencarian
  useEffect(() => {
    let filtered = potensiList;

    // Filter berdasarkan kategori
    if (activeCategory !== "semua") {
      filtered = filtered.filter((item) => item.kategori === activeCategory);
    }

    // Filter berdasarkan pencarian
    if (searchQuery) {
      const query = searchQuery.toLowerCase();
      filtered = filtered.filter(
        (item) =>
          item.nama.toLowerCase().includes(query) ||
          item.deskripsi.toLowerCase().includes(query) ||
          item.produk_unggulan?.toLowerCase().includes(query) ||
          item.tags?.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    setFilteredPotensi(filtered);
  }, [activeCategory, searchQuery, potensiList]);

  // Get kategori icon
  const getKategoriIcon = (kategori) => {
    switch (kategori) {
      case "pertanian":
        return <FaTree />;
      case "kerajinan":
        return <FaIndustry />;
      case "wisata":
        return <FaLandmark />;
      case "kuliner":
        return <FaUtensils />;
      case "perikanan":
        return <FaTree />;
      case "akomodasi":
        return <FaHotel />;
      case "peternakan":
        return <FaTree />;
      default:
        return <FaTree />;
    }
  };

  // Get kategori color class
  const getKategoriColor = (kategori) => {
    switch (kategori) {
      case "pertanian":
        return "potensi-kategori-green";
      case "kerajinan":
        return "potensi-kategori-yellow";
      case "wisata":
        return "potensi-kategori-blue";
      case "kuliner":
        return "potensi-kategori-red";
      case "perikanan":
        return "potensi-kategori-cyan";
      case "akomodasi":
        return "potensi-kategori-purple";
      case "peternakan":
        return "potensi-kategori-orange";
      default:
        return "potensi-kategori-gray";
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
  };

  const handleShare = (potensi) => {
    if (navigator.share) {
      navigator.share({
        title: potensi.nama,
        text: potensi.deskripsi.substring(0, 100),
        url: window.location.href + "/" + potensi.slug,
      });
    } else {
      navigator.clipboard.writeText(window.location.href + "/" + potensi.slug);
      alert("Link berhasil disalin ke clipboard!");
    }
  };

  // Render rating stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="text-yellow-500" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="text-yellow-300" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="text-gray-300" />);
    }

    return (
      <div className="flex items-center gap-1">
        {stars}
        <span className="ml-1 text-sm font-medium">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <div className="potensi-page-wrapper">
      <Navbar />

      {/* Hero Section */}
      <section className="potensi-hero-section">
        <div className="container">
          <div className="potensi-hero-content text-center">
            <div className="potensi-hero-badge">
              <FaTree /> Potensi Desa
            </div>
            <h1 className="potensi-hero-title">
              Potensi Unggulan{" "}
              <span className="highlight">Desa Bojongslawi</span>
            </h1>
            <p className="potensi-hero-subtitle">
              Temukan berbagai potensi desa mulai dari pertanian, kerajinan,
              wisata, hingga kuliner khas. Dukung produk lokal dan kunjungi
              destinasi menarik di desa kami.
            </p>

            {/* Search Bar */}
            <div className="potensi-search-container">
              <form
                onSubmit={handleSearch}
                className="w-full max-w-2xl mx-auto"
              >
                <div className="potensi-search-wrapper">
                  <FaSearch className="potensi-search-icon" />
                  <input
                    type="text"
                    placeholder="Cari potensi desa (pertanian, kerajinan, wisata...)"
                    className="potensi-search-input"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                  />
                  <button type="submit" className="btn btn-primary">
                    Cari
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12">
        <div className="potensi-layout">
          {/* Sidebar */}
          <aside className="potensi-sidebar">
            <div className="potensi-sidebar-card">
              <div className="potensi-sidebar-header">
                <h3 className="potensi-sidebar-title">
                  <FaFilter /> Filter Kategori
                </h3>
              </div>

              <div className="potensi-category-list">
                {categories.map((category) => (
                  <button
                    key={category.id}
                    className={`potensi-category-item ${
                      activeCategory === category.id ? "active" : ""
                    }`}
                    onClick={() => setActiveCategory(category.id)}
                  >
                    <div className="potensi-category-icon">{category.icon}</div>
                    <span className="potensi-category-label">{category.label}</span>
                    <span className="potensi-category-count">{category.count}</span>
                  </button>
                ))}
              </div>

              {/* Statistik Potensi */}
              <div className="potensi-stats-info">
                <h4 className="potensi-stats-title">
                  <FaTree /> Statistik Potensi
                </h4>
                <div className="potensi-stats-grid">
                  <div className="potensi-stat-item">
                    <div className="potensi-stat-value">8</div>
                    <div className="potensi-stat-label">Total Potensi</div>
                  </div>
                  <div className="potensi-stat-item">
                    <div className="potensi-stat-value">4.6</div>
                    <div className="potensi-stat-label">Rating Rata-rata</div>
                  </div>
                  <div className="potensi-stat-item">
                    <div className="potensi-stat-value">150+</div>
                    <div className="potensi-stat-label">Produk Unggulan</div>
                  </div>
                </div>
              </div>

              {/* Potensi Terpopuler */}
              <div className="potensi-popular-info">
                <h4 className="potensi-popular-title">
                  <FaStar /> Terpopuler
                </h4>
                <div className="potensi-popular-list">
                  {potensiList
                    .sort((a, b) => b.views - a.views)
                    .slice(0, 3)
                    .map((item) => (
                      <Link
                        key={item.id}
                        to={`/potensi/${item.slug}`}
                        className="potensi-popular-item"
                      >
                        <div className="potensi-popular-image">
                          <img src={item.gambar_path} alt={item.nama} />
                        </div>
                        <div className="potensi-popular-content">
                          <h5>{item.nama}</h5>
                          <div className="potensi-popular-rating">
                            {renderStars(item.rating)}
                          </div>
                        </div>
                      </Link>
                    ))}
                </div>
              </div>
            </div>
          </aside>

          {/* Main Content Area */}
          <div className="potensi-main-content">
            {/* Header dengan filter */}
            <div className="potensi-content-header">
              <div className="potensi-header-info">
                <h2 className="potensi-content-title">
                  {activeCategory === "semua"
                    ? "Semua Potensi Desa"
                    : categories.find((c) => c.id === activeCategory)?.label}
                </h2>
                <p className="potensi-content-subtitle">
                  Menampilkan {filteredPotensi.length} dari {potensiList.length}{" "}
                  potensi desa
                </p>
              </div>

              {activeCategory !== "semua" && (
                <button
                  onClick={() => setActiveCategory("semua")}
                  className="btn btn-outline"
                >
                  <FaFilter /> Reset Filter
                </button>
              )}
            </div>

            {/* Potensi Grid */}
            {loading ? (
              <div className="potensi-loading-grid">
                {[1, 2, 3, 4].map((item) => (
                  <div key={item} className="potensi-loading-card">
                    <div className="potensi-loading-image"></div>
                    <div className="potensi-loading-content">
                      <div className="potensi-loading-title"></div>
                      <div className="potensi-loading-text"></div>
                      <div className="potensi-loading-text"></div>
                    </div>
                  </div>
                ))}
              </div>
            ) : filteredPotensi.length > 0 ? (
              <div className="potensi-grid">
                {filteredPotensi.map((potensi) => (
                  <div key={potensi.id} className="potensi-card">
                    {/* Gambar Utama */}
                    <div className="potensi-card-image-wrapper">
                      {potensi.gambar_path ? (
                        <img
                          src={potensi.gambar_path}
                          alt={potensi.nama}
                          className="potensi-card-image"
                          loading="lazy"
                        />
                      ) : (
                        <div className="potensi-card-image-placeholder">
                          <FaTree className="potensi-placeholder-icon" />
                        </div>
                      )}

                      {/* Kategori Badge */}
                      <div className="potensi-card-category">
                        <span
                          className={`potensi-category-badge ${getKategoriColor(
                            potensi.kategori
                          )}`}
                        >
                          {getKategoriIcon(potensi.kategori)}
                          {potensi.kategori.charAt(0).toUpperCase() +
                            potensi.kategori.slice(1)}
                        </span>
                      </div>

                      {/* Rating */}
                      <div className="potensi-card-rating">
                        {renderStars(potensi.rating)}
                      </div>

                      {/* Bookmark Button */}
                      <button
                        className="potensi-bookmark-btn"
                        onClick={(e) => {
                          e.stopPropagation();
                          alert("Potensi disimpan");
                        }}
                      >
                        <FaBookmark />
                      </button>
                    </div>

                    {/* Content */}
                    <div className="potensi-card-content">
                      <h3 className="potensi-card-title">{potensi.nama}</h3>

                      <div className="potensi-card-meta">
                        <div className="potensi-meta-item">
                          <FaMapMarkerAlt />
                          <span>{potensi.lokasi}</span>
                        </div>
                        <div className="potensi-meta-item">
                          <FaPhone />
                          <span>{potensi.kontak}</span>
                        </div>
                      </div>

                      <p className="potensi-card-description">
                        {potensi.deskripsi.substring(0, 100)}...
                      </p>

                      {/* Produk Unggulan */}
                      {potensi.produk_unggulan && (
                        <div className="potensi-card-products">
                          <h4 className="potensi-products-title">Produk Unggulan:</h4>
                          <p className="potensi-products-list">
                            {potensi.produk_unggulan}
                          </p>
                        </div>
                      )}

                      {/* Harga */}
                      {potensi.harga && (
                        <div className="potensi-card-price">
                          <span className="potensi-price-label">Harga:</span>
                          <span className="potensi-price-value">{potensi.harga}</span>
                        </div>
                      )}

                      {/* Tags */}
                      {potensi.tags && potensi.tags.length > 0 && (
                        <div className="potensi-card-tags">
                          <FaTags />
                          <div className="potensi-tags-list">
                            {potensi.tags.slice(0, 3).map((tag, index) => (
                              <span key={index} className="potensi-tag">
                                #{tag}
                              </span>
                            ))}
                          </div>
                        </div>
                      )}

                      <div className="potensi-card-footer">
                        <Link
                          to={`/potensi/${potensi.slug}`}
                          className="potensi-read-more-btn"
                          onClick={(e) => e.stopPropagation()}
                        >
                          Lihat Detail
                          <FaArrowRight />
                        </Link>

                        <div className="potensi-card-actions">
                          <button
                            className="potensi-action-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              alert("Ditambahkan ke wishlist");
                            }}
                          >
                            <FaBookmark />
                          </button>
                          <button
                            className="potensi-action-btn"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleShare(potensi);
                            }}
                          >
                            <FaShareAlt />
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="potensi-empty-state">
                <div className="potensi-empty-content">
                  <FaSearch className="potensi-empty-icon" />
                  <h3 className="potensi-empty-title">Potensi tidak ditemukan</h3>
                  <p className="potensi-empty-text">
                    Tidak ada potensi yang sesuai dengan pencarian "
                    {searchQuery}"
                  </p>
                  <button
                    onClick={() => {
                      setSearchQuery("");
                      setActiveCategory("semua");
                    }}
                    className="btn btn-primary"
                  >
                    Tampilkan semua potensi
                  </button>
                </div>
              </div>
            )}

            {/* Featured Potensi - Wisata */}
            {activeCategory === "semua" && !searchQuery && (
              <div className="potensi-featured-section">
                <div className="potensi-section-header">
                  <h2 className="potensi-section-title">
                    <FaLandmark /> Destinasi Wisata Unggulan
                  </h2>
                  <p className="potensi-section-subtitle">
                    Temukan keindahan alam dan budaya Desa Bojongslawi
                  </p>
                </div>

                <div className="potensi-featured-grid">
                  {potensiList
                    .filter(
                      (item) => item.kategori === "wisata" && item.is_published
                    )
                    .slice(0, 2)
                    .map((wisata) => (
                      <div key={wisata.id} className="potensi-featured-card">
                        <div className="potensi-featured-badge">
                          <FaLandmark /> Wisata
                        </div>
                        <div className="potensi-featured-content">
                          <h3 className="potensi-featured-title">{wisata.nama}</h3>
                          <p className="potensi-featured-description">
                            {wisata.deskripsi.substring(0, 150)}...
                          </p>
                          <div className="potensi-featured-info">
                            <div className="potensi-info-item">
                              <FaMapMarkerAlt />
                              <span>{wisata.lokasi}</span>
                            </div>
                            {wisata.tiket && (
                              <div className="potensi-info-item">
                                <FaTags />
                                <span>Tiket: {wisata.tiket}</span>
                              </div>
                            )}
                          </div>
                          <Link
                            to={`/potensi/${wisata.slug}`}
                            className="btn btn-primary"
                          >
                            Kunjungi Sekarang
                          </Link>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            )}

            {/* Potensi Kerajinan */}
            {activeCategory === "semua" && !searchQuery && (
              <div className="potensi-craft-section">
                <div className="potensi-section-header">
                  <h2 className="potensi-section-title">
                    <FaIndustry /> Kerajinan Lokal
                  </h2>
                  <p className="potensi-section-subtitle">
                    Dukung produk kerajinan tangan warga desa
                  </p>
                </div>

                <div className="potensi-craft-grid">
                  {potensiList
                    .filter(
                      (item) =>
                        item.kategori === "kerajinan" && item.is_published
                    )
                    .slice(0, 3)
                    .map((kerajinan) => (
                      <div key={kerajinan.id} className="potensi-craft-card">
                        <div className="potensi-craft-header">
                          <div className="potensi-craft-icon">
                            <FaIndustry />
                          </div>
                          <div>
                            <h3 className="potensi-craft-title">{kerajinan.nama}</h3>
                            <p className="potensi-craft-owner">{kerajinan.pemilik}</p>
                          </div>
                        </div>
                        <div className="potensi-craft-details">
                          {kerajinan.produk_unggulan && (
                            <div className="potensi-detail-item">
                              <FaTags />
                              <span>
                                {kerajinan.produk_unggulan.split(",")[0]}
                              </span>
                            </div>
                          )}
                          {kerajinan.harga && (
                            <div className="potensi-detail-item">
                              <FaTags />
                              <span>Mulai {kerajinan.harga}</span>
                            </div>
                          )}
                        </div>
                        <Link
                          to={`/potensi/${kerajinan.slug}`}
                          className="btn btn-warning"
                        >
                          Lihat Produk
                        </Link>
                      </div>
                    ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </main>

      {/* Call to Action */}
      <section className="potensi-cta-section">
        <div className="container">
          <div className="potensi-cta-content">
            <h2 className="potensi-cta-title">Ingin Memasarkan Potensi Anda?</h2>
            <p className="potensi-cta-text">
              Daftarkan usaha atau potensi Anda di Desa Bojongslawi dan dapatkan
              promosi gratis melalui website desa kami.
            </p>
            <div className="potensi-cta-buttons">
              <Link to="/daftar-potensi" className="btn btn-primary btn-lg">
                Daftarkan Potensi
              </Link>
              <Link to="/kontak" className="btn btn-outline btn-lg">
                Hubungi Kami
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PotensiDesa;