import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import "./informasi.css";

import {
  FaCalendarAlt,
  FaNewspaper,
  FaBullhorn,
  FaBriefcase,
  FaUser,
  FaClock,
  FaEye,
  FaArrowLeft,
  FaBookmark,
  FaShareAlt,
  FaCalendarDay,
  FaPrint,
  FaDownload,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaEnvelope,
  FaTag,
  FaMapMarkerAlt,
  FaPhone,
} from "react-icons/fa";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";
import "../../pages/Informasi/Informasi.css";

const DetailInformasi = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [informasi, setInformasi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedInformasi, setRelatedInformasi] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [views, setViews] = useState(0);

  // Data dummy yang sama dengan halaman utama
  const dummyInformasi = [
    {
      id: 1,
      judul: "Pembangunan Jalan Dusun 3",
      slug: "pembangunan-jalan-dusun-3",
      konten: `
        <h2>Pembangunan Infrastruktur Jalan Dusun 3</h2>
        <p>Pemerintah Desa Bojongslawi akan melakukan pembangunan jalan di Dusun 3 mulai tanggal <strong>15 Januari 2026</strong>. Proyek ini merupakan bagian dari program peningkatan infrastruktur desa tahun 2026.</p>
        
        <h3>Rincian Pelaksanaan:</h3>
        <ul>
          <li>Lokasi: Dusun 3, Desa Bojongslawi</li>
          <li>Waktu: 15 Januari - 31 Maret 2026</li>
          <li>Panjang Jalan: 2.5 km</li>
          <li>Anggaran: Rp 850.000.000</li>
          <li>Kontraktor: CV. Bangun Jaya Sejahtera</li>
        </ul>
        
        <h3>Dampak yang Diharapkan:</h3>
        <p>Pembangunan jalan ini diharapkan dapat meningkatkan aksesibilitas warga Dusun 3 menuju pusat desa dan fasilitas umum lainnya. Selain itu, juga akan mendukung perekonomian lokal dengan mempermudah transportasi hasil pertanian.</p>
        
        <h3>Informasi Penting untuk Warga:</h3>
        <ol>
          <li>Mohon pengertian warga untuk tidak menggunakan jalan selama masa konstruksi</li>
          <li>Alternatif jalan tersedia melalui Jalan Lingkar Timur</li>
          <li>Koordinasi dapat dilakukan melalui Ketua RT masing-masing</li>
          <li>Pengaduan dapat disampaikan ke Kantor Desa</li>
        </ol>
        
        <div class="detail-alert-info">
          <strong>Perhatian:</strong> Selama proses pembangunan, mohon warga mengamankan kendaraan dan barang-barang di sekitar lokasi proyek.
        </div>
        
        <p>Untuk informasi lebih lanjut, silakan hubungi:</p>
        <ul>
          <li>Kantor Desa: (021) 1234-5678</li>
          <li>Ketua Dusun 3: Bapak Surya (0812-3456-7890)</li>
        </ul>
      `,
      kategori: "pengumuman",
      gambar_path:
        "https://images.unsplash.com/photo-1544551763-46a013bb70d5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      penulis: "Admin Desa",
      tanggal_publikasi: "2025-12-20",
      tanggal_berakhir: "2026-01-31",
      views: 45,
      is_published: true,
      excerpt:
        "Pembangunan infrastruktur jalan untuk meningkatkan aksesibilitas...",
      lokasi: "Dusun 3, Desa Bojongslawi",
      kontak: "(021) 1234-5678",
      dokumen: "https://example.com/dokumen/jalan-dusun3.pdf",
      tags: ["infrastruktur", "pembangunan", "jalan", "dusun-3"],
    },
    {
      id: 2,
      judul: "Festival Desa 2026",
      slug: "festival-desa-2026",
      konten: `
        <h2>Festival Desa Bojongslawi 2026</h2>
        <p>Desa Maju Jaya akan menyelenggarakan Festival Desa pada tanggal <strong>20-22 Februari 2026</strong>. Acara ini merupakan bagian dari perayaan Hari Jadi Desa ke-50.</p>
        
        <h3>Jadwal Kegiatan:</h3>
        <table class="detail-table">
          <thead>
            <tr>
              <th>Hari/Tanggal</th>
              <th>Waktu</th>
              <th>Kegiatan</th>
              <th>Lokasi</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Jumat, 20 Feb</td>
              <td>08.00 - 12.00</td>
              <td>Lomba Kebersihan RT</td>
              <td>Lapangan Desa</td>
            </tr>
            <tr>
              <td>Sabtu, 21 Feb</td>
              <td>09.00 - 22.00</td>
              <td>Pameran UMKM & Pentas Seni</td>
              <td>Alun-alun Desa</td>
            </tr>
            <tr>
              <td>Minggu, 22 Feb</td>
              <td>07.00 - 17.00</td>
              <td>Fun Run & Pentas Akbar</td>
              <td>Start: Kantor Desa</td>
            </tr>
          </tbody>
        </table>
        
        <h3>Pendaftaran Lomba:</h3>
        <ul>
          <li>Lomba Masak: Rp 50.000/team</li>
          <li>Lomba Fashion Show: Gratis</li>
          <li>Lomba Kicau Burung: Rp 25.000</li>
          <li>Pendaftaran: 1-15 Februari 2026 di Kantor Desa</li>
        </ul>
      `,
      kategori: "agenda",
      gambar_path:
        "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      penulis: "Staff Kesenian",
      tanggal_publikasi: "2025-12-18",
      tanggal_berakhir: "2026-02-22",
      views: 78,
      is_published: true,
      excerpt: "Merayakan kekayaan budaya lokal dengan festival tahunan...",
      lokasi: "Alun-alun Desa Bojongslawi",
      kontak: "0813-9876-5432",
      dokumen: null,
      tags: ["festival", "budaya", "lomba", "umkm"],
    },
    {
      id: 3,
      judul: "Lowongan Petugas Kebersihan",
      slug: "lowongan-petugas-kebersihan",
      konten: "Dibutuhkan 2 orang petugas kebersihan untuk wilayah Dusun 2 dan 4. Persyaratan: usia 25-45 tahun, sehat jasmani.",
      kategori: "lowongan",
      gambar_path: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      penulis: "Bagian Umum",
      tanggal_publikasi: "2025-12-15",
      tanggal_berakhir: "2026-01-15",
      views: 112,
      is_published: true,
      excerpt: "Kesempatan kerja bagi warga desa sebagai petugas kebersihan...",
      lokasi: "Kantor Desa Bojongslawi",
      kontak: "(021) 1234-5678",
      dokumen: "https://example.com/dokumen/lowongan.pdf",
      tags: ["lowongan", "kerja", "kebersihan"],
    },
    {
      id: 4,
      judul: "Bantuan Sembako Bulan Desember",
      slug: "bantuan-sembako-bulan-desember",
      konten: "Pendistribusian bantuan sembako untuk warga tidak mampu akan dilaksanakan pada tanggal 28 Desember 2025 di balai desa.",
      kategori: "pengumuman",
      gambar_path: "https://images.unsplash.com/photo-1550621002-7c4a4c9a1e9d?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      penulis: "Admin Desa",
      tanggal_publikasi: "2025-12-10",
      tanggal_berakhir: "2025-12-30",
      views: 89,
      is_published: true,
      excerpt: "Program bantuan sosial untuk keluarga kurang mampu...",
      lokasi: "Balai Desa Bojongslawi",
      kontak: "(021) 1234-5678",
      dokumen: null,
      tags: ["bansos", "sembako", "bantuan"],
    },
    {
      id: 5,
      judul: "Juara Lomba Kebersihan RT",
      slug: "juara-lomba-kebersihan-rt",
      konten: "RT 01 Dusun 1 menjadi juara lomba kebersihan tingkat desa tahun 2025. Selamat untuk warga RT 01!",
      kategori: "berita",
      gambar_path: "https://images.unsplash.com/photo-1565514145946-2d9aad05430c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      penulis: "Staff Kesehatan",
      tanggal_publikasi: "2025-12-05",
      views: 156,
      is_published: true,
      excerpt: "Pengumuman pemenang lomba kebersihan tingkat RT...",
      lokasi: "Dusun 1, RT 01",
      kontak: "0856-7890-1234",
      dokumen: null,
      tags: ["lomba", "kebersihan", "prestasi"],
    }
  ];

  useEffect(() => {
    // Simulasi loading data
    setTimeout(() => {
      const foundInformasi = dummyInformasi.find((item) => item.slug === slug);

      if (foundInformasi) {
        setInformasi(foundInformasi);
        setViews(foundInformasi.views + 1); // Increment views

        // Find related informasi (same category, exclude current)
        const related = dummyInformasi
          .filter(
            (item) =>
              item.kategori === foundInformasi.kategori &&
              item.id !== foundInformasi.id
          )
          .slice(0, 3);
        setRelatedInformasi(related);
      }

      setLoading(false);
    }, 300);
  }, [slug]);

  // Format tanggal
  const formatDate = (dateString) => {
    const options = { day: "numeric", month: "long", year: "numeric" };
    return new Date(dateString).toLocaleDateString("id-ID", options);
  };

  // Get kategori icon
  const getKategoriIcon = (kategori) => {
    switch (kategori) {
      case "pengumuman":
        return <FaBullhorn />;
      case "berita":
        return <FaNewspaper />;
      case "agenda":
        return <FaCalendarAlt />;
      case "lowongan":
        return <FaBriefcase />;
      default:
        return <FaNewspaper />;
    }
  };

  // Get kategori label
  const getKategoriLabel = (kategori) => {
    switch (kategori) {
      case "pengumuman":
        return "Pengumuman";
      case "berita":
        return "Berita Desa";
      case "agenda":
        return "Agenda Kegiatan";
      case "lowongan":
        return "Lowongan Kerja";
      default:
        return "Informasi";
    }
  };

  // Get kategori color class
  const getKategoriColor = (kategori) => {
    switch (kategori) {
      case "pengumuman":
        return "detail-badge-pengumuman";
      case "berita":
        return "detail-badge-berita";
      case "agenda":
        return "detail-badge-agenda";
      case "lowongan":
        return "detail-badge-lowongan";
      default:
        return "detail-badge-default";
    }
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    const message = bookmarked
      ? "Bookmark dihapus"
      : "Informasi disimpan di bookmark";
    alert(message);
  };

  const handlePrint = () => {
    window.print();
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = informasi.judul;
    const text = informasi.excerpt;

    switch (platform) {
      case "facebook":
        window.open(
          `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
            url
          )}`,
          "_blank"
        );
        break;
      case "twitter":
        window.open(
          `https://twitter.com/intent/tweet?url=${encodeURIComponent(
            url
          )}&text=${encodeURIComponent(title)}`,
          "_blank"
        );
        break;
      case "whatsapp":
        window.open(
          `https://wa.me/?text=${encodeURIComponent(title + " " + url)}`,
          "_blank"
        );
        break;
      case "email":
        window.location.href = `mailto:?subject=${encodeURIComponent(
          title
        )}&body=${encodeURIComponent(text + "\n\n" + url)}`;
        break;
      default:
        navigator.clipboard.writeText(url);
        alert("Link berhasil disalin ke clipboard!");
    }
  };

  if (loading) {
    return (
      <div className="detail-page-wrapper">
        <Navbar />
        <div className="detail-container py-8 md:py-12">
          <div className="detail-loading">
            <div className="detail-loading-image"></div>
            <div className="detail-loading-content">
              <div className="detail-loading-title"></div>
              <div className="detail-loading-meta"></div>
              <div className="detail-loading-text"></div>
              <div className="detail-loading-text"></div>
              <div className="detail-loading-text"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!informasi) {
    return (
      <div className="detail-page-wrapper">
        <Navbar />
        <div className="detail-container py-8 md:py-12">
          <div className="detail-card detail-empty-state">
            <div className="detail-empty-content">
              <FaNewspaper className="detail-empty-icon" />
              <h3 className="detail-empty-title">Informasi tidak ditemukan</h3>
              <p className="detail-empty-text">
                Informasi yang Anda cari tidak tersedia atau telah dihapus.
              </p>
              <button
                onClick={() => navigate("/informasi")}
                className="detail-btn detail-btn-primary"
              >
                <FaArrowLeft /> Kembali ke Informasi
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="detail-page-wrapper">
      <Navbar />

      {/* Breadcrumb */}
      <div className="detail-container detail-py-4">
        <nav className="detail-breadcrumb">
          <Link to="/" className="detail-breadcrumb-item">
            Beranda
          </Link>
          <span className="detail-breadcrumb-separator">/</span>
          <Link to="/informasi" className="detail-breadcrumb-item">
            Informasi Desa
          </Link>
          <span className="detail-breadcrumb-separator">/</span>
          <span className="detail-breadcrumb-item detail-breadcrumb-active">
            {informasi.judul}
          </span>
        </nav>
      </div>

      {/* Main Content */}
      <main className="detail-container detail-py-6 md:detail-py-8">
        <div className="detail-layout">
          {/* Main Article */}
          <article className="detail-content-main">
            {/* Kategori Badge */}
            <div className="detail-category-badge">
              <span
                className={`detail-category-badge ${getKategoriColor(
                  informasi.kategori
                )}`}
              >
                {getKategoriIcon(informasi.kategori)}
                {getKategoriLabel(informasi.kategori)}
              </span>
            </div>

            {/* Judul */}
            <h1 className="detail-title-main">{informasi.judul}</h1>

            {/* Meta Info */}
            <div className="detail-meta-info">
              <div className="detail-meta-left">
                <div className="detail-meta-item">
                  <FaUser />
                  <span>{informasi.penulis}</span>
                </div>
                <div className="detail-meta-item">
                  <FaCalendarAlt />
                  <span>{formatDate(informasi.tanggal_publikasi)}</span>
                </div>
                <div className="detail-meta-item">
                  <FaEye />
                  <span>{views} dilihat</span>
                </div>
              </div>

              <div className="detail-meta-right">
                <button
                  className={`detail-bookmark-btn ${bookmarked ? "detail-bookmark-active" : ""}`}
                  onClick={handleBookmark}
                >
                  <FaBookmark />
                  {bookmarked ? "Disimpan" : "Simpan"}
                </button>
                <button className="detail-print-btn" onClick={handlePrint}>
                  <FaPrint />
                  Cetak
                </button>
              </div>
            </div>

            {/* Featured Image */}
            <div className="detail-featured-image">
              {informasi.gambar_path ? (
                <img
                  src={informasi.gambar_path}
                  alt={informasi.judul}
                  className="detail-image-main"
                />
              ) : (
                <div className="detail-image-placeholder">
                  <FaNewspaper className="detail-placeholder-icon" />
                </div>
              )}
            </div>

            {/* Masa Berlaku Info */}
            {informasi.tanggal_berakhir && (
              <div className="detail-expiry-notice">
                <FaCalendarDay />
                <div>
                  <strong>Masa Berlaku:</strong> Informasi ini berlaku hingga{" "}
                  {formatDate(informasi.tanggal_berakhir)}
                </div>
              </div>
            )}

            {/* Konten Artikel */}
            <div
              className="detail-article-content"
              dangerouslySetInnerHTML={{ __html: informasi.konten }}
            />

            {/* Informasi Tambahan */}
            <div className="detail-additional-info">
              {informasi.lokasi && (
                <div className="detail-info-item">
                  <FaMapMarkerAlt />
                  <div>
                    <strong>Lokasi:</strong>
                    <p>{informasi.lokasi}</p>
                  </div>
                </div>
              )}

              {informasi.kontak && (
                <div className="detail-info-item">
                  <FaPhone />
                  <div>
                    <strong>Kontak:</strong>
                    <p>{informasi.kontak}</p>
                  </div>
                </div>
              )}

              {informasi.dokumen && (
                <div className="detail-info-item">
                  <FaDownload />
                  <div>
                    <strong>Dokumen Terkait:</strong>
                    <a
                      href={informasi.dokumen}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="detail-document-link"
                    >
                      Download Dokumen
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Tags */}
            {informasi.tags && informasi.tags.length > 0 && (
              <div className="detail-tags-section">
                <FaTag className="detail-tags-icon" />
                <div className="detail-tags-list">
                  {informasi.tags.map((tag, index) => (
                    <span key={index} className="detail-tag">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Share Section */}
            <div className="detail-share-section">
              <h3 className="detail-share-title">Bagikan informasi ini:</h3>
              <div className="detail-share-buttons">
                <button
                  className="detail-share-btn detail-share-facebook"
                  onClick={() => handleShare("facebook")}
                >
                  <FaFacebook />
                  Facebook
                </button>
                <button
                  className="detail-share-btn detail-share-twitter"
                  onClick={() => handleShare("twitter")}
                >
                  <FaTwitter />
                  Twitter
                </button>
                <button
                  className="detail-share-btn detail-share-whatsapp"
                  onClick={() => handleShare("whatsapp")}
                >
                  <FaWhatsapp />
                  WhatsApp
                </button>
                <button
                  className="detail-share-btn detail-share-email"
                  onClick={() => handleShare("email")}
                >
                  <FaEnvelope />
                  Email
                </button>
                <button
                  className="detail-share-btn detail-share-copy"
                  onClick={() => handleShare("copy")}
                >
                  <FaShareAlt />
                  Salin Link
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="detail-sidebar">
            {/* Navigation */}
            <div className="detail-sidebar-card">
              <button
                onClick={() => navigate("/informasi")}
                className="detail-btn detail-btn-outline detail-back-btn"
              >
                <FaArrowLeft /> Kembali ke Daftar Informasi
              </button>
            </div>

            {/* Related Information */}
            {relatedInformasi.length > 0 && (
              <div className="detail-sidebar-card">
                <h3 className="detail-sidebar-title">
                  <FaNewspaper /> Informasi Terkait
                </h3>
                <div className="detail-related-list">
                  {relatedInformasi.map((item) => (
                    <Link
                      key={item.id}
                      to={`/informasi/${item.slug}`}
                      className="detail-related-item"
                    >
                      <div className="detail-related-image">
                        {item.gambar_path ? (
                          <img src={item.gambar_path} alt={item.judul} />
                        ) : (
                          <div className="detail-related-placeholder">
                            {getKategoriIcon(item.kategori)}
                          </div>
                        )}
                      </div>
                      <div className="detail-related-content">
                        <h4 className="detail-related-title">{item.judul}</h4>
                        <div className="detail-related-meta">
                          <FaCalendarAlt />
                          <span>{formatDate(item.tanggal_publikasi)}</span>
                        </div>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Info Penting */}
            <div className="detail-sidebar-card">
              <h3 className="detail-sidebar-title">
                <FaBullhorn /> Informasi Penting
              </h3>
              <div className="detail-important-list">
                <div className="detail-important-item">
                  <FaCalendarDay />
                  <div>
                    <h4>Batas Pendaftaran KIP 2026</h4>
                    <p>31 Januari 2026</p>
                  </div>
                </div>
                <div className="detail-important-item">
                  <FaCalendarAlt />
                  <div>
                    <h4>Pelatihan UMKM Gratis</h4>
                    <p>10-12 Januari 2026</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div className="detail-sidebar-card">
              <h3 className="detail-sidebar-title">
                <FaNewspaper /> Kategori Informasi
              </h3>
              <div className="detail-category-links">
                <Link
                  to="/informasi?kategori=pengumuman"
                  className="detail-category-link"
                >
                  <FaBullhorn /> Pengumuman
                </Link>
                <Link
                  to="/informasi?kategori=berita"
                  className="detail-category-link"
                >
                  <FaNewspaper /> Berita
                </Link>
                <Link
                  to="/informasi?kategori=agenda"
                  className="detail-category-link"
                >
                  <FaCalendarAlt /> Agenda
                </Link>
                <Link
                  to="/informasi?kategori=lowongan"
                  className="detail-category-link"
                >
                  <FaBriefcase /> Lowongan
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Newsletter */}
      <section className="detail-newsletter-section">
        <div className="detail-container">
          <div className="detail-newsletter-content">
            <h2 className="detail-newsletter-title">
              Tetap Update dengan Informasi Desa
            </h2>
            <p className="detail-newsletter-text">
              Dapatkan pemberitahuan langsung tentang informasi terbaru dari
              Desa Bojongslawi
            </p>
            <form className="detail-newsletter-form">
              <div className="detail-form-group">
                <input
                  type="email"
                  placeholder="Masukkan email Anda"
                  className="detail-newsletter-input"
                  required
                />
                <button type="submit" className="detail-btn detail-btn-primary">
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

export default DetailInformasi;