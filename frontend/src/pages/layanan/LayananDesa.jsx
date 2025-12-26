import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./layanan.css";

import { 
  FaFileAlt, 
  FaClock, 
  FaMoneyBillWave, 
  FaUsers,
  FaCheckCircle,
  FaClipboardList,
  FaPaperclip,
  FaSearch,
  FaFilter,
  FaSortAmountDown,
  FaQuestionCircle,
  FaEye,
  FaUserTie,
  FaPhoneAlt,
  FaEnvelope,
  FaInfoCircle,
  FaArrowRight
} from "react-icons/fa";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";

const LayananDesa = () => {
  const [activeFilter, setActiveFilter] = useState("semua");
  const [searchQuery, setSearchQuery] = useState("");
  const [sortBy, setSortBy] = useState("popular");

  // Data layanan desa berdasarkan database
  const layananList = [
    {
      id: 1,
      nama_layanan: "Pengurusan Surat Domisili",
      slug: "surat-domisili",
      deskripsi: "Layanan pembuatan surat keterangan domisili untuk keperluan administrasi",
      persyaratan: ["Fotokopi KTP", "Fotokopi KK", "Surat Pengantar RT/RW"],
      biaya: "Rp 0",
      estimasi_waktu: "2-3 hari",
      petugas: "Budi Santoso",
      is_active: true,
      kategori: "administrasi",
      popularitas: 95,
      icon: <FaFileAlt />,
      detail: "Surat Keterangan Domisili adalah surat resmi yang dikeluarkan oleh pemerintah desa untuk membuktikan bahwa seseorang benar-benar berdomisili di wilayah desa tersebut. Surat ini diperlukan untuk berbagai keperluan administrasi seperti pengurusan KTP, KK, perbankan, dan lainnya.",
      manfaat: [
        "Untuk pengurusan administrasi kependudukan",
        "Syarat pengajuan kredit bank",
        "Pendaftaran sekolah",
        "Pengurusan perizinan usaha"
      ],
      prosedur: [
        "Datang ke kantor desa dengan membawa persyaratan",
        "Mengisi formulir pengajuan",
        "Verifikasi data oleh petugas",
        "Pembuatan dan penandatanganan surat",
        "Pengambilan surat yang telah selesai"
      ]
    },
    {
      id: 2,
      nama_layanan: "Pengurusan Surat Tidak Mampu (SKTM)",
      slug: "surat-tidak-mampu",
      deskripsi: "Surat keterangan tidak mampu untuk keperluan beasiswa, bantuan sosial, dll.",
      persyaratan: ["Fotokopi KTP", "Fotokopi KK", "Surat Pengantar RT/RW", "Slip Gaji"],
      biaya: "Rp 0",
      estimasi_waktu: "3-5 hari",
      petugas: "Siti Rahayu",
      is_active: true,
      kategori: "administrasi",
      popularitas: 88,
      icon: <FaFileAlt />,
      detail: "Surat Keterangan Tidak Mampu (SKTM) adalah surat resmi yang menyatakan bahwa seseorang atau keluarga termasuk dalam kategori tidak mampu. Surat ini digunakan untuk mengajukan berbagai bantuan sosial, beasiswa, dan program pemerintah lainnya.",
      manfaat: [
        "Pengajuan beasiswa pendidikan",
        "Bantuan kesehatan BPJS",
        "Program bantuan sosial pemerintah",
        "Keringanan biaya sekolah"
      ],
      prosedur: [
        "Menyiapkan dokumen persyaratan",
        "Mengajukan permohonan ke kantor desa",
        "Verifikasi data dan kondisi ekonomi",
        "Wawancara dan survey lapangan",
        "Penerbitan surat setelah disetujui"
      ]
    },
    {
      id: 3,
      nama_layanan: "Legalisir Dokumen",
      slug: "legalisir-dokumen",
      deskripsi: "Layanan legalisir dokumen akademik dan administrasi",
      persyaratan: ["Dokumen asli yang akan dilegalisir"],
      biaya: "Rp 10.000",
      estimasi_waktu: "1 hari",
      petugas: "Ahmad Fauzi",
      is_active: true,
      kategori: "umum",
      popularitas: 76,
      icon: <FaClipboardList />,
      detail: "Layanan legalisir dokumen adalah proses pemberian cap dan tanda tangan resmi dari pemerintah desa pada dokumen asli untuk membuktikan keaslian dan keabsahan dokumen tersebut. Layanan ini penting untuk dokumen akademik dan administrasi.",
      manfaat: [
        "Pembuktian keaslian dokumen",
        "Pengajuan pekerjaan",
        "Pendaftaran pendidikan",
        "Pengurusan perizinan"
      ],
      prosedur: [
        "Membawa dokumen asli yang akan dilegalisir",
        "Mengisi formulir permohonan",
        "Pembayaran biaya administrasi",
        "Verifikasi dokumen oleh petugas",
        "Pembubuhan cap dan tanda tangan"
      ]
    },
    {
      id: 4,
      nama_layanan: "Pengurusan KK Baru",
      slug: "kk-baru",
      deskripsi: "Layanan pembuatan Kartu Keluarga baru",
      persyaratan: ["Surat Nikah", "Akta Kelahiran", "KTP"],
      biaya: "Rp 0",
      estimasi_waktu: "7-14 hari",
      petugas: "Rini Astuti",
      is_active: true,
      kategori: "kependudukan",
      popularitas: 82,
      icon: <FaUsers />,
      detail: "Layanan pengurusan Kartu Keluarga (KK) baru diperlukan saat membentuk keluarga baru melalui pernikahan atau perpindahan penduduk. KK adalah dokumen penting yang memuat data seluruh anggota keluarga.",
      manfaat: [
        "Dokumen resmi kependudukan",
        "Syarat pengurusan administrasi",
        "Pendataan keluarga",
        "Program bantuan keluarga"
      ],
      prosedur: [
        "Menyiapkan semua dokumen persyaratan",
        "Mengisi formulir permohonan",
        "Verifikasi data oleh petugas Dukcapil",
        "Pemrosesan di sistem nasional",
        "Pengambilan KK yang telah selesai"
      ]
    },
    {
      id: 5,
      nama_layanan: "Pengurusan Akta Kelahiran",
      slug: "akta-kelahiran",
      deskripsi: "Layanan pembuatan akta kelahiran untuk bayi baru lahir",
      persyaratan: ["Surat Keterangan Lahir", "KK", "KTP Orang Tua"],
      biaya: "Rp 0",
      estimasi_waktu: "14-30 hari",
      petugas: "Joko Widodo",
      is_active: true,
      kategori: "kependudukan",
      popularitas: 79,
      icon: <FaUsers />,
      detail: "Akta Kelahiran adalah dokumen resmi yang mencatat kelahiran seseorang. Dokumen ini sangat penting sebagai bukti hukum atas identitas seseorang dan diperlukan untuk berbagai keperluan administrasi seumur hidup.",
      manfaat: [
        "Bukti kewarganegaraan",
        "Pendaftaran sekolah",
        "Pembuatan KTP",
        "Pengurusan paspor"
      ],
      prosedur: [
        "Menyiapkan surat keterangan lahir dari bidan/dokter",
        "Mengajukan permohonan maksimal 60 hari setelah kelahiran",
        "Verifikasi dokumen oleh petugas",
        "Pencatatan di Dinas Kependudukan",
        "Pengambilan akta yang telah selesai"
      ]
    },
    {
      id: 6,
      nama_layanan: "Konsultasi Hukum Sederhana",
      slug: "konsultasi-hukum",
      deskripsi: "Layanan konsultasi masalah hukum sederhana untuk warga",
      persyaratan: ["-"],
      biaya: "Rp 0",
      estimasi_waktu: "Sesuai janji",
      petugas: "Maya Sari",
      is_active: true,
      kategori: "konsultasi",
      popularitas: 65,
      icon: <FaQuestionCircle />,
      detail: "Layanan konsultasi hukum sederhana diberikan oleh pemerintah desa untuk membantu warga memahami permasalahan hukum yang dihadapi sehari-hari. Konsultasi ini bersifat informatif dan edukatif.",
      manfaat: [
        "Pemahaman dasar hukum",
        "Penyelesaian sengketa sederhana",
        "Pencegahan masalah hukum",
        "Pengenalan hak dan kewajiban"
      ],
      prosedur: [
        "Membuat janji konsultasi",
        "Menyiapkan dokumen terkait (jika ada)",
        "Sesi konsultasi dengan petugas",
        "Pemberian saran dan rekomendasi",
        "Follow-up jika diperlukan"
      ]
    },
    {
      id: 7,
      nama_layanan: "Surat Keterangan Usaha (SKU)",
      slug: "surat-keterangan-usaha",
      deskripsi: "Surat keterangan usaha untuk pengajuan izin dan permodalan",
      persyaratan: ["Fotokopi KTP", "Fotokopi KK", "Izin Usaha"],
      biaya: "Rp 25.000",
      estimasi_waktu: "5-7 hari",
      petugas: "Rudi Hartono",
      is_active: true,
      kategori: "usaha",
      popularitas: 72,
      icon: <FaFileAlt />,
      detail: "Surat Keterangan Usaha (SKU) adalah dokumen resmi yang menerangkan bahwa seseorang memiliki usaha tertentu di wilayah desa. SKU diperlukan untuk pengajuan pinjaman modal, perizinan usaha, dan keperluan administrasi lainnya.",
      manfaat: [
        "Pengajuan kredit usaha",
        "Perizinan usaha",
        "Partisipasi program UMKM",
        "Kemitraan dengan pihak lain"
      ],
      prosedur: [
        "Menyiapkan dokumen usaha",
        "Mengisi formulir permohonan",
        "Survey lokasi usaha",
        "Verifikasi data oleh petugas",
        "Pembayaran dan penerbitan surat"
      ]
    },
    {
      id: 8,
      nama_layanan: "Surat Pengantar Nikah",
      slug: "surat-pengantar-nikah",
      deskripsi: "Surat pengantar untuk keperluan pernikahan",
      persyaratan: ["Fotokopi KTP", "Fotokopi KK", "Surat Pengantar RT/RW"],
      biaya: "Rp 0",
      estimasi_waktu: "3-4 hari",
      petugas: "Dewi Kartika",
      is_active: true,
      kategori: "administrasi",
      popularitas: 85,
      icon: <FaFileAlt />,
      detail: "Surat Pengantar Nikah adalah dokumen dari pemerintah desa yang diperlukan sebagai syarat administrasi pernikahan di Kantor Urusan Agama (KUA). Surat ini membuktikan bahwa calon mempelai berdomisili di wilayah desa.",
      manfaat: [
        "Syarat administrasi pernikahan",
        "Pembuktian domisili calon mempelai",
        "Proses pernikahan yang sah",
        "Pencatatan sipil"
      ],
      prosedur: [
        "Menyiapkan dokumen pribadi",
        "Mengajukan permohonan ke kantor desa",
        "Wawancara dengan calon mempelai",
        "Verifikasi data dan dokumen",
        "Penerbitan surat pengantar"
      ]
    }
  ];

  // Kategori layanan
  const kategoriList = [
    { id: "semua", label: "Semua Layanan", count: 8 },
    { id: "administrasi", label: "Administrasi", count: 4 },
    { id: "kependudukan", label: "Kependudukan", count: 2 },
    { id: "usaha", label: "Usaha", count: 1 },
    { id: "konsultasi", label: "Konsultasi", count: 1 },
    { id: "umum", label: "Umum", count: 1 }
  ];

  // Filter dan sort layanan
  const filteredLayanan = layananList.filter(layanan => {
    const matchesCategory = activeFilter === "semua" || layanan.kategori === activeFilter;
    const matchesSearch = layanan.nama_layanan.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         layanan.deskripsi.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  }).sort((a, b) => {
    if (sortBy === "popular") return b.popularitas - a.popularitas;
    if (sortBy === "time") return a.estimasi_waktu.localeCompare(b.estimasi_waktu);
    if (sortBy === "price") {
      const priceA = parseInt(a.biaya.replace(/[^0-9]/g, '') || 0);
      const priceB = parseInt(b.biaya.replace(/[^0-9]/g, '') || 0);
      return priceA - priceB;
    }
    return 0;
  });

  return (
    <div className="layanan-page-wrapper">
      <Navbar />
      
      {/* Hero Section */}
      <section className="layanan-hero-section">
        <div className="container">
          <div className="layanan-hero-content text-center">
            <div className="layanan-hero-badge">
              <FaFileAlt /> Layanan Desa
            </div>
            <h1 className="layanan-hero-title">
              Layanan Administrasi{" "}
              <span className="highlight">Desa Bojongslawi</span>
            </h1>
            <p className="layanan-hero-subtitle">
              Akses berbagai layanan administrasi desa secara online dan offline. 
              Proses cepat, mudah, dan transparan untuk semua warga.
            </p>
            
            {/* CTA Buttons */}
            <div className="layanan-hero-buttons">
              <Link to="/login" className="btn btn-primary btn-lg">
                <FaFileAlt /> Ajukan Layanan
              </Link>
              <a href="#layanan-list" className="btn btn-outline btn-lg">
                <FaEye /> Lihat Layanan
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12">
        {/* Search and Filter Section */}
        <div className="layanan-filter-section layanan-mb-8">
          <div className="layanan-filter-header">
            <h2 className="layanan-section-title" id="layanan-list">
              <FaSearch /> Daftar Layanan Desa
            </h2>
            <p className="layanan-section-subtitle">
              Pilih layanan yang Anda butuhkan dan ajukan secara online
            </p>
          </div>
          
          <div className="layanan-filter-controls">
            <div className="layanan-search-box">
              <FaSearch className="layanan-search-icon" />
              <input
                type="text"
                placeholder="Cari nama layanan atau deskripsi..."
                className="layanan-search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
            
            <div className="layanan-filter-options">
              <div className="layanan-sort-option">
                <label><FaSortAmountDown /> Urutkan:</label>
                <select value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
                  <option value="popular">Paling Populer</option>
                  <option value="time">Waktu Tercepat</option>
                  <option value="price">Harga Terendah</option>
                </select>
              </div>
            </div>
          </div>

          {/* Category Filters */}
          <div className="layanan-category-filters">
            <div className="layanan-category-list-horizontal">
              {kategoriList.map(kategori => (
                <button
                  key={kategori.id}
                  className={`layanan-category-filter-btn ${activeFilter === kategori.id ? 'active' : ''}`}
                  onClick={() => setActiveFilter(kategori.id)}
                >
                  {kategori.label}
                  <span className="layanan-category-count">{kategori.count}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Layanan Grid */}
        <div className="layanan-grid">
          {filteredLayanan.map(layanan => (
            <div key={layanan.id} className="layanan-card">
              <div className="layanan-card-header">
                <div className="layanan-card-icon">
                  {layanan.icon}
                </div>
                <div className="layanan-card-badge">
                  {layanan.kategori}
                </div>
                {layanan.popularitas > 80 && (
                  <div className="layanan-popular-badge">
                    <FaCheckCircle /> Populer
                  </div>
                )}
              </div>
              
              <div className="layanan-card-content">
                <h3 className="layanan-card-title">{layanan.nama_layanan}</h3>
                <p className="layanan-card-description">{layanan.deskripsi}</p>
                
                <div className="layanan-card-details">
                  <div className="layanan-detail-item">
                    <FaClock />
                    <span>{layanan.estimasi_waktu}</span>
                  </div>
                  <div className="layanan-detail-item">
                    <FaMoneyBillWave />
                    <span className={layanan.biaya === "Rp 0" ? "layanan-text-success" : ""}>
                      {layanan.biaya}
                    </span>
                  </div>
                  <div className="layanan-detail-item">
                    <FaUserTie />
                    <span>{layanan.petugas}</span>
                  </div>
                </div>

                <div className="layanan-persyaratan-section">
                  <h4><FaClipboardList /> Persyaratan:</h4>
                  <ul className="layanan-persyaratan-list">
                    {layanan.persyaratan.map((syarat, idx) => (
                      <li key={idx}>
                        <FaPaperclip className="layanan-mr-2" />
                        {syarat}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="layanan-card-actions">
                  <Link 
                    to={`/layanan/${layanan.slug}`}
                    className="btn btn-primary"
                  >
                    <FaInfoCircle /> Lihat Detail
                  </Link>
                  <Link 
                    to="/login" 
                    className="btn btn-outline"
                  >
                    <FaFileAlt /> Ajukan Sekarang
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Info Section */}
        <div className="layanan-info-section layanan-mt-12">
          <div className="layanan-info-card">
            <div className="layanan-info-content">
              <h3><FaInfoCircle /> Cara Mengajukan Layanan</h3>
              <div className="layanan-info-steps">
                <div className="layanan-step">
                  <div className="layanan-step-number">1</div>
                  <div className="layanan-step-content">
                    <h4>Pilih Layanan</h4>
                    <p>Pilih layanan yang Anda butuhkan dari daftar di atas</p>
                  </div>
                </div>
                <div className="layanan-step">
                  <div className="layanan-step-number">2</div>
                  <div className="layanan-step-content">
                    <h4>Baca Persyaratan</h4>
                    <p>Periksa persyaratan yang diperlukan untuk layanan tersebut</p>
                  </div>
                </div>
                <div className="layanan-step">
                  <div className="layanan-step-number">3</div>
                  <div className="layanan-step-content">
                    <h4>Ajukan Online</h4>
                    <p>Login dan ajukan layanan melalui sistem online</p>
                  </div>
                </div>
                <div className="layanan-step">
                  <div className="layanan-step-number">4</div>
                  <div className="layanan-step-content">
                    <h4>Ambil Hasil</h4>
                    <p>Ambil surat/dokumen yang telah selesai di kantor desa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LayananDesa;