import React, { useState, useEffect } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";

import {
  FaFileAlt,
  FaClock,
  FaMoneyBillWave,
  FaUserTie,
  FaClipboardList,
  FaArrowLeft,
  FaCheckCircle,
  FaUsers,
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaListAlt,
  FaDownload,
  FaShareAlt,
  FaBookmark,
  FaPrint,
} from "react-icons/fa";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";

const DetailLayanan = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [layanan, setLayanan] = useState(null);
  const [loading, setLoading] = useState(true);

  // Data layanan (sama dengan di LayananDesa.jsx)
  const semuaLayanan = [
    {
      id: 1,
      nama_layanan: "Pengurusan Surat Domisili",
      slug: "surat-domisili",
      deskripsi:
        "Layanan pembuatan surat keterangan domisili untuk keperluan administrasi",
      detail:
        "Surat Keterangan Domisili adalah surat resmi yang dikeluarkan oleh pemerintah desa untuk membuktikan bahwa seseorang benar-benar berdomisili di wilayah desa tersebut. Surat ini diperlukan untuk berbagai keperluan administrasi seperti pengurusan KTP, KK, perbankan, dan lainnya.",
      persyaratan: ["Fotokopi KTP", "Fotokopi KK", "Surat Pengantar RT/RW"],
      biaya: "Rp 0",
      estimasi_waktu: "2-3 hari",
      petugas: "Budi Santoso",
      telepon_petugas: "081234567890",
      email_petugas: "budi@desabojongslawi.id",
      is_active: true,
      kategori: "administrasi",
      popularitas: 95,
      icon: <FaFileAlt />,
      manfaat: [
        "Untuk pengurusan administrasi kependudukan",
        "Syarat pengajuan kredit bank",
        "Pendaftaran sekolah",
        "Pengurusan perizinan usaha",
      ],
      prosedur: [
        "Datang ke kantor desa dengan membawa persyaratan",
        "Mengisi formulir pengajuan",
        "Verifikasi data oleh petugas",
        "Pembuatan dan penandatanganan surat",
        "Pengambilan surat yang telah selesai",
      ],
      catatan: "Proses dapat dipercepat jika semua dokumen lengkap dan valid.",
    },
    {
      id: 2,
      nama_layanan: "Pengurusan Surat Tidak Mampu (SKTM)",
      slug: "surat-tidak-mampu",
      deskripsi:
        "Surat keterangan tidak mampu untuk keperluan beasiswa, bantuan sosial, dll.",
      detail:
        "Surat Keterangan Tidak Mampu (SKTM) adalah surat resmi yang menyatakan bahwa seseorang atau keluarga termasuk dalam kategori tidak mampu. Surat ini digunakan untuk mengajukan berbagai bantuan sosial, beasiswa, dan program pemerintah lainnya.",
      persyaratan: [
        "Fotokopi KTP",
        "Fotokopi KK",
        "Surat Pengantar RT/RW",
        "Slip Gaji",
      ],
      biaya: "Rp 0",
      estimasi_waktu: "3-5 hari",
      petugas: "Siti Rahayu",
      telepon_petugas: "081234567891",
      email_petugas: "siti@desabojongslawi.id",
      is_active: true,
      kategori: "administrasi",
      popularitas: 88,
      icon: <FaFileAlt />,
      manfaat: [
        "Pengajuan beasiswa pendidikan",
        "Bantuan kesehatan BPJS",
        "Program bantuan sosial pemerintah",
        "Keringanan biaya sekolah",
      ],
      prosedur: [
        "Menyiapkan dokumen persyaratan",
        "Mengajukan permohonan ke kantor desa",
        "Verifikasi data dan kondisi ekonomi",
        "Wawancara dan survey lapangan",
        "Penerbitan surat setelah disetujui",
      ],
      catatan: "Perlu verifikasi data pendapatan dan kondisi rumah tinggal.",
    },
    {
      id: 3,
      nama_layanan: "Legalisir Dokumen",
      slug: "legalisir-dokumen",
      deskripsi: "Layanan legalisir dokumen akademik dan administrasi",
      detail:
        "Layanan legalisir dokumen adalah proses pemberian cap dan tanda tangan resmi dari pemerintah desa pada dokumen asli untuk membuktikan keaslian dan keabsahan dokumen tersebut. Layanan ini penting untuk dokumen akademik dan administrasi.",
      persyaratan: ["Dokumen asli yang akan dilegalisir"],
      biaya: "Rp 10.000",
      estimasi_waktu: "1 hari",
      petugas: "Ahmad Fauzi",
      telepon_petugas: "081234567892",
      email_petugas: "ahmad@desabojongslawi.id",
      is_active: true,
      kategori: "umum",
      popularitas: 76,
      icon: <FaClipboardList />,
      manfaat: [
        "Pembuktian keaslian dokumen",
        "Pengajuan pekerjaan",
        "Pendaftaran pendidikan",
        "Pengurusan perizinan",
      ],
      prosedur: [
        "Membawa dokumen asli yang akan dilegalisir",
        "Mengisi formulir permohonan",
        "Pembayaran biaya administrasi",
        "Verifikasi dokumen oleh petugas",
        "Pembubuhan cap dan tanda tangan",
      ],
      catatan:
        "Dokumen yang akan dilegalisir harus dalam kondisi baik dan terbaca jelas.",
    },
    {
      id: 4,
      nama_layanan: "Pengurusan KK Baru",
      slug: "kk-baru",
      deskripsi: "Layanan pembuatan Kartu Keluarga baru",
      detail:
        "Layanan pengurusan Kartu Keluarga (KK) baru diperlukan saat membentuk keluarga baru melalui pernikahan atau perpindahan penduduk. KK adalah dokumen penting yang memuat data seluruh anggota keluarga.",
      persyaratan: ["Surat Nikah", "Akta Kelahiran", "KTP"],
      biaya: "Rp 0",
      estimasi_waktu: "7-14 hari",
      petugas: "Rini Astuti",
      telepon_petugas: "081234567893",
      email_petugas: "rini@desabojongslawi.id",
      is_active: true,
      kategori: "kependudukan",
      popularitas: 82,
      icon: <FaUsers />,
      manfaat: [
        "Dokumen resmi kependudukan",
        "Syarat pengurusan administrasi",
        "Pendataan keluarga",
        "Program bantuan keluarga",
      ],
      prosedur: [
        "Menyiapkan semua dokumen persyaratan",
        "Mengisi formulir permohonan",
        "Verifikasi data oleh petugas Dukcapil",
        "Pemrosesan di sistem nasional",
        "Pengambilan KK yang telah selesai",
      ],
      catatan:
        "Proses melibatkan Dinas Kependudukan dan Catatan Sipil kabupaten.",
    },
    {
      id: 5,
      nama_layanan: "Pengurusan Akta Kelahiran",
      slug: "akta-kelahiran",
      deskripsi: "Layanan pembuatan akta kelahiran untuk bayi baru lahir",
      detail:
        "Akta Kelahiran adalah dokumen resmi yang mencatat kelahiran seseorang. Dokumen ini sangat penting sebagai bukti hukum atas identitas seseorang dan diperlukan untuk berbagai keperluan administrasi seumur hidup.",
      persyaratan: ["Surat Keterangan Lahir", "KK", "KTP Orang Tua"],
      biaya: "Rp 0",
      estimasi_waktu: "14-30 hari",
      petugas: "Joko Widodo",
      telepon_petugas: "081234567894",
      email_petugas: "joko@desabojongslawi.id",
      is_active: true,
      kategori: "kependudukan",
      popularitas: 79,
      icon: <FaUsers />,
      manfaat: [
        "Bukti kewarganegaraan",
        "Pendaftaran sekolah",
        "Pembuatan KTP",
        "Pengurusan paspor",
      ],
      prosedur: [
        "Menyiapkan surat keterangan lahir dari bidan/dokter",
        "Mengajukan permohonan maksimal 60 hari setelah kelahiran",
        "Verifikasi dokumen oleh petugas",
        "Pencatatan di Dinas Kependudukan",
        "Pengambilan akta yang telah selesai",
      ],
      catatan: "Wajib didaftarkan maksimal 60 hari setelah kelahiran.",
    },
  ];

  useEffect(() => {
    // Simulasi loading data
    setTimeout(() => {
      const foundLayanan = semuaLayanan.find((item) => item.slug === slug);
      if (foundLayanan) {
        setLayanan(foundLayanan);
      }
      setLoading(false);
    }, 500);
  }, [slug]);

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: layanan.nama_layanan,
        text: layanan.deskripsi,
        url: window.location.href,
      });
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert("Link berhasil disalin ke clipboard!");
    }
  };

  const handlePrint = () => {
    window.print();
  };

  if (loading) {
    return (
      <div className="layanan-detail-wrapper">
        <Navbar />
        <div className="layanan-detail-container layanan-detail-py-12">
          <div className="layanan-detail-loading">
            <div className="layanan-detail-loading-header"></div>
            <div className="layanan-detail-loading-content">
              <div className="layanan-detail-loading-section"></div>
              <div className="layanan-detail-loading-section"></div>
              <div className="layanan-detail-loading-section"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!layanan) {
    return (
      <div className="layanan-detail-wrapper">
        <Navbar />
        <div className="layanan-detail-container layanan-detail-py-12">
          <div className="layanan-detail-not-found">
            <h2 className="layanan-detail-not-found-title">Layanan tidak ditemukan</h2>
            <p className="layanan-detail-not-found-text">Layanan yang Anda cari tidak tersedia.</p>
            <Link to="/layanan" className="layanan-detail-btn layanan-detail-btn-primary">
              <FaArrowLeft /> Kembali ke Daftar Layanan
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="layanan-detail-wrapper">
      <Navbar />

      {/* Breadcrumb */}
      <div className="layanan-detail-breadcrumb-section">
        <div className="layanan-detail-container">
          <nav className="layanan-detail-breadcrumb">
            <Link to="/" className="layanan-detail-breadcrumb-item">
              Beranda
            </Link>
            <span className="layanan-detail-breadcrumb-separator">/</span>
            <Link to="/layanan" className="layanan-detail-breadcrumb-item">
              Layanan
            </Link>
            <span className="layanan-detail-breadcrumb-separator">/</span>
            <span className="layanan-detail-breadcrumb-item layanan-detail-breadcrumb-active">
              {layanan.nama_layanan}
            </span>
          </nav>
        </div>
      </div>

      <main className="layanan-detail-container layanan-detail-py-8">
        {/* Header Section */}
        <div className="layanan-detail-header">
          <div className="layanan-detail-header-content">
            <Link to="/layanan" className="layanan-detail-back-btn">
              <FaArrowLeft /> Kembali
            </Link>

            <div className="layanan-detail-header-title">
              <div className="layanan-detail-icon-large">{layanan.icon}</div>
              <div>
                <h1 className="layanan-detail-title">{layanan.nama_layanan}</h1>
                <p className="layanan-detail-subtitle">{layanan.deskripsi}</p>
              </div>
            </div>

            <div className="layanan-detail-header-actions">
              <button className="layanan-detail-action-btn" onClick={handleShare}>
                <FaShareAlt /> Bagikan
              </button>
              <button className="layanan-detail-action-btn" onClick={handlePrint}>
                <FaPrint /> Cetak
              </button>
              <button className="layanan-detail-action-btn">
                <FaBookmark /> Simpan
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="layanan-detail-content">
          <div className="layanan-detail-content-main">
            {/* Overview Section */}
            <section className="layanan-detail-section">
              <h2 className="layanan-detail-section-title">
                <FaFileAlt /> Deskripsi Layanan
              </h2>
              <div className="layanan-detail-section-content">
                <p>{layanan.detail}</p>

                <div className="layanan-detail-info-cards">
                  <div className="layanan-detail-info-card">
                    <div className="layanan-detail-info-icon">
                      <FaClock />
                    </div>
                    <div className="layanan-detail-info-text">
                      <h4>Estimasi Waktu</h4>
                      <p>{layanan.estimasi_waktu}</p>
                    </div>
                  </div>

                  <div className="layanan-detail-info-card">
                    <div className="layanan-detail-info-icon">
                      <FaMoneyBillWave />
                    </div>
                    <div className="layanan-detail-info-text">
                      <h4>Biaya Layanan</h4>
                      <p
                        className={
                          layanan.biaya === "Rp 0" ? "layanan-detail-text-success" : ""
                        }
                      >
                        {layanan.biaya}
                      </p>
                    </div>
                  </div>

                  <div className="layanan-detail-info-card">
                    <div className="layanan-detail-info-icon">
                      <FaUserTie />
                    </div>
                    <div className="layanan-detail-info-text">
                      <h4>Petugas</h4>
                      <p>{layanan.petugas}</p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Manfaat Section */}
            {layanan.manfaat && layanan.manfaat.length > 0 && (
              <section className="layanan-detail-section">
                <h2 className="layanan-detail-section-title">
                  <FaCheckCircle /> Manfaat Layanan
                </h2>
                <div className="layanan-detail-section-content">
                  <ul className="layanan-detail-benefit-list">
                    {layanan.manfaat.map((manfaat, index) => (
                      <li key={index} className="layanan-detail-benefit-item">
                        <FaCheckCircle />
                        <span>{manfaat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </section>
            )}

            {/* Prosedur Section */}
            {layanan.prosedur && layanan.prosedur.length > 0 && (
              <section className="layanan-detail-section">
                <h2 className="layanan-detail-section-title">
                  <FaListAlt /> Prosedur Pengajuan
                </h2>
                <div className="layanan-detail-section-content">
                  <div className="layanan-detail-procedure-steps">
                    {layanan.prosedur.map((step, index) => (
                      <div key={index} className="layanan-detail-procedure-step">
                        <div className="layanan-detail-step-number">{index + 1}</div>
                        <div className="layanan-detail-step-content">
                          <h4>Langkah {index + 1}</h4>
                          <p>{step}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
            )}

            {/* Catatan Section */}
            {layanan.catatan && (
              <section className="layanan-detail-section layanan-detail-note-section">
                <h2 className="layanan-detail-section-title">
                  <FaClipboardList /> Catatan Penting
                </h2>
                <div className="layanan-detail-section-content">
                  <div className="layanan-detail-note-card">
                    <p>{layanan.catatan}</p>
                  </div>
                </div>
              </section>
            )}
          </div>

          {/* Sidebar */}
          <div className="layanan-detail-content-sidebar">
            {/* Persyaratan Card */}
            <div className="layanan-detail-sidebar-card">
              <h3 className="layanan-detail-sidebar-title">
                <FaClipboardList /> Persyaratan
              </h3>
              <ul className="layanan-detail-requirement-list">
                {layanan.persyaratan.map((syarat, index) => (
                  <li key={index} className="layanan-detail-requirement-item">
                    <FaCheckCircle />
                    <span>{syarat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Kontak Petugas */}
            <div className="layanan-detail-sidebar-card">
              <h3 className="layanan-detail-sidebar-title">
                <FaUserTie /> Kontak Petugas
              </h3>
              <div className="layanan-detail-contact-info">
                <div className="layanan-detail-contact-item">
                  <FaUserTie />
                  <div>
                    <strong>{layanan.petugas}</strong>
                    <p>Petugas Layanan</p>
                  </div>
                </div>
                <div className="layanan-detail-contact-item">
                  <FaPhoneAlt />
                  <div>
                    <strong>Telepon</strong>
                    <p>{layanan.telepon_petugas}</p>
                  </div>
                </div>
                <div className="layanan-detail-contact-item">
                  <FaEnvelope />
                  <div>
                    <strong>Email</strong>
                    <p>{layanan.email_petugas}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="layanan-detail-sidebar-card">
              <h3 className="layanan-detail-sidebar-title">Ajukan Layanan</h3>
              <div className="layanan-detail-action-buttons">
                <Link to="/login" className="layanan-detail-btn layanan-detail-btn-primary layanan-detail-btn-block">
                  <FaFileAlt /> Ajukan Online
                </Link>
                <a
                  href="https://maps.google.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="layanan-detail-btn layanan-detail-btn-outline layanan-detail-btn-block"
                >
                  <FaMapMarkerAlt /> Lokasi Kantor
                </a>
                <button className="layanan-detail-btn layanan-detail-btn-secondary layanan-detail-btn-block">
                  <FaDownload /> Download Formulir
                </button>
              </div>
            </div>

            {/* Jam Layanan */}
            <div className="layanan-detail-sidebar-card">
              <h3 className="layanan-detail-sidebar-title">
                <FaCalendarAlt /> Jam Layanan
              </h3>
              <div className="layanan-detail-hours-info">
                <div className="layanan-detail-hour-item">
                  <strong>Senin - Jumat</strong>
                  <p>08:00 - 16:00 WIB</p>
                </div>
                <div className="layanan-detail-hour-item">
                  <strong>Sabtu</strong>
                  <p>08:00 - 12:00 WIB</p>
                </div>
                <div className="layanan-detail-hour-item">
                  <strong>Minggu & Libur</strong>
                  <p>Tutup</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Related Services */}
        <section className="layanan-detail-related-services">
          <h2 className="layanan-detail-section-title">Layanan Lainnya</h2>
          <div className="layanan-detail-related-grid">
            {semuaLayanan
              .filter((item) => item.id !== layanan.id)
              .slice(0, 3)
              .map((related) => (
                <div key={related.id} className="layanan-detail-related-card">
                  <div className="layanan-detail-related-icon">{related.icon}</div>
                  <div className="layanan-detail-related-content">
                    <h4>{related.nama_layanan}</h4>
                    <p>{related.deskripsi.substring(0, 80)}...</p>
                    <Link
                      to={`/layanan/${related.slug}`}
                      className="layanan-detail-related-link"
                    >
                      Lihat Detail <FaArrowLeft className="layanan-detail-rotate-180" />
                    </Link>
                  </div>
                </div>
              ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default DetailLayanan;