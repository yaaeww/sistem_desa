import React, { useState } from "react";
import "./kontak.css";
import {
  FaMapMarkerAlt,
  FaPhone,
  FaEnvelope,
  FaClock,
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
  FaPaperPlane,
  FaUser,
  FaHome,
  FaInfoCircle,
  FaCheckCircle,
  FaExclamationCircle
} from "react-icons/fa";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";

const Kontak = () => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    subjek: "",
    pesan: ""
  });
  
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    // Validasi
    if (!formData.nama || !formData.email || !formData.pesan) {
      setError("Harap isi semua field yang wajib diisi");
      setLoading(false);
      return;
    }

    // Simulasi pengiriman
    setTimeout(() => {
      console.log("Form data:", formData);
      setLoading(false);
      setSuccess(true);
      setFormData({
        nama: "",
        email: "",
        telepon: "",
        subjek: "",
        pesan: ""
      });
      
      // Reset success message after 5 seconds
      setTimeout(() => {
        setSuccess(false);
      }, 5000);
    }, 1500);
  };

  // Data kontak kantor desa
  const kontakKantor = [
    {
      icon: <FaMapMarkerAlt />,
      title: "Alamat Kantor",
      details: [
        "Kantor Desa Bojongslawi",
        "Jl. Raya Desa No. 45",
        "Dusun 1, Bojongslawi",
        "Kecamatan Bojong, Kabupaten Bogor",
        "Jawa Barat 16710"
      ],
      link: "https://maps.google.com/?q=Kantor+Desa+Bojongslawi",
      linkText: "Lihat di Peta"
    },
    {
      icon: <FaPhone />,
      title: "Telepon & WhatsApp",
      details: [
        "Telepon: (0251) 1234-5678",
        "WhatsApp: 0812-3456-7890",
        "Fax: (0251) 1234-5679"
      ],
      link: "https://wa.me/6281234567890",
      linkText: "Chat via WhatsApp"
    },
    {
      icon: <FaEnvelope />,
      title: "Email",
      details: [
        "Informasi: info@desabojongslawi.id",
        "Pengaduan: pengaduan@desabojongslawi.id",
        "Layanan: layanan@desabojongslawi.id"
      ],
      link: "mailto:info@desabojongslawi.id",
      linkText: "Kirim Email"
    },
    {
      icon: <FaClock />,
      title: "Jam Operasional",
      details: [
        "Senin - Kamis: 08:00 - 16:00 WIB",
        "Jumat: 08:00 - 11:00 WIB",
        "Sabtu: 08:00 - 14:00 WIB",
        "Minggu & Hari Libur: Tutup"
      ]
    }
  ];

  // Data staff/kepala desa
  const staffDesa = [
    {
      nama: "Bapak Joko Susilo",
      jabatan: "Kepala Desa",
      telepon: "0813-1234-5678",
      email: "kepaladesa@desabojongslawi.id",
      foto: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      nama: "Ibu Siti Rahayu",
      jabatan: "Sekretaris Desa",
      telepon: "0812-8765-4321",
      email: "sekretaris@desabojongslawi.id",
      foto: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    },
    {
      nama: "Bapak Agus Supriyadi",
      jabatan: "Kaur Umum",
      telepon: "0815-6789-0123",
      email: "umum@desabojongslawi.id",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&q=80"
    }
  ];

  // Social media links
  const socialMedia = [
    {
      platform: "Facebook",
      icon: <FaFacebook />,
      url: "https://facebook.com/desabojongslawi",
      username: "@desabojongslawi",
      className: "facebook"
    },
    {
      platform: "Instagram",
      icon: <FaInstagram />,
      url: "https://instagram.com/desabojongslawi",
      username: "@desabojongslawi",
      className: "instagram"
    },
    {
      platform: "Twitter",
      icon: <FaTwitter />,
      url: "https://twitter.com/desabojongslawi",
      username: "@desabojongslawi",
      className: "twitter"
    },
    {
      platform: "WhatsApp",
      icon: <FaWhatsapp />,
      url: "https://wa.me/6281234567890",
      username: "0812-3456-7890",
      className: "whatsapp"
    }
  ];

  // FAQ (Frequently Asked Questions)
  const faqItems = [
    {
      question: "Bagaimana cara mengurus surat keterangan tidak mampu?",
      answer: "Datang ke kantor desa dengan membawa KK, KTP, dan surat pengantar dari RT/RW. Proses biasanya memakan waktu 1-3 hari kerja."
    },
    {
      question: "Apakah ada layanan online untuk pengurusan dokumen?",
      answer: "Ya, saat ini kami menyediakan layanan pengajuan online melalui website. Anda dapat mengakses menu 'Layanan' untuk informasi lebih lanjut."
    },
    {
      question: "Kapan waktu terbaik untuk datang ke kantor desa?",
      answer: "Hari Senin-Kamis pukul 08:00-16:00 dan Jumat pukul 08:00-11:00. Disarankan datang lebih awal untuk menghindari antrian."
    },
    {
      question: "Bagaimana cara melaporkan pengaduan warga?",
      answer: "Pengaduan dapat disampaikan melalui form di halaman ini, via WhatsApp, atau datang langsung ke kantor desa."
    }
  ];

  return (
    <div className="kontak-page-wrapper">
      <Navbar />
      
      {/* Hero Section */}
      <section className="kontak-hero-section">
        <div className="container">
          <div className="kontak-hero-content">
            <div className="kontak-hero-badge">
              <FaEnvelope /> Hubungi Kami
            </div>
            <h1 className="kontak-hero-title">
              Hubungi{" "}
              <span className="kontak-highlight">Desa Bojongslawi</span>
            </h1>
            <p className="kontak-hero-subtitle">
              Kami siap membantu Anda. Hubungi kami melalui berbagai channel yang tersedia.
              Tim kami akan merespon secepat mungkin.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <main className="container py-12">
        {/* Kontak Information Grid */}
        <div className="kontak-grid kontak-mb-16">
          {kontakKantor.map((item, index) => (
            <div key={index} className="kontak-card">
              <div className="kontak-icon">
                {item.icon}
              </div>
              <div className="kontak-content">
                <h3 className="kontak-title">{item.title}</h3>
                <div className="kontak-details">
                  {item.details.map((detail, idx) => (
                    <p key={idx}>{detail}</p>
                  ))}
                </div>
                {item.link && (
                  <a 
                    href={item.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="kontak-link"
                  >
                    {item.linkText}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="kontak-layout">
          {/* Left Column - Form */}
          <div className="kontak-form-section">
            <div className="kontak-section-header kontak-mb-8">
              <h2 className="kontak-section-title">
                <FaPaperPlane /> Kirim Pesan
              </h2>
              <p className="kontak-section-subtitle">
                Isi form di bawah ini untuk menghubungi kami. Kami akan membalas pesan Anda 
                dalam waktu 1-2 hari kerja.
              </p>
            </div>

            {/* Alert Messages */}
            {error && (
              <div className="kontak-alert kontak-alert-error">
                <FaExclamationCircle />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="kontak-alert kontak-alert-success">
                <FaCheckCircle />
                <span>Pesan berhasil dikirim! Kami akan menghubungi Anda segera.</span>
              </div>
            )}

            <form onSubmit={handleSubmit} className="kontak-form">
              <div className="form-grid">
                <div className="form-group">
                  <label className="form-label">
                    <FaUser /> Nama Lengkap <span className="required">*</span>
                  </label>
                  <input
                    type="text"
                    name="nama"
                    value={formData.nama}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="Masukkan nama lengkap"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FaEnvelope /> Email <span className="required">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="nama@email.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FaPhone /> No. Telepon/WhatsApp
                  </label>
                  <input
                    type="tel"
                    name="telepon"
                    value={formData.telepon}
                    onChange={handleChange}
                    className="form-input"
                    placeholder="0812-3456-7890"
                  />
                </div>

                <div className="form-group">
                  <label className="form-label">
                    <FaHome /> Subjek
                  </label>
                  <select
                    name="subjek"
                    value={formData.subjek}
                    onChange={handleChange}
                    className="form-select"
                  >
                    <option value="">Pilih subjek...</option>
                    <option value="informasi">Permintaan Informasi</option>
                    <option value="pengaduan">Pengaduan</option>
                    <option value="saran">Saran & Kritik</option>
                    <option value="kerjasama">Kerjasama</option>
                    <option value="lainnya">Lainnya</option>
                  </select>
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">
                  <FaInfoCircle /> Pesan <span className="required">*</span>
                </label>
                <textarea
                  name="pesan"
                  value={formData.pesan}
                  onChange={handleChange}
                  className="form-textarea"
                  rows="6"
                  placeholder="Tulis pesan Anda di sini..."
                  required
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn btn-primary w-full"
                disabled={loading}
              >
                {loading ? (
                  <>
                    <span className="kontak-loading-spinner"></span>
                    Mengirim...
                  </>
                ) : (
                  <>
                    <FaPaperPlane /> Kirim Pesan
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Right Column - Additional Info */}
          <div className="kontak-info-section">
            {/* Staff Desa */}
            <div className="kontak-info-card">
              <h3 className="kontak-info-title">
                <FaUser /> Kontak Staff Desa
              </h3>
              <div className="kontak-staff-list">
                {staffDesa.map((staff, index) => (
                  <div key={index} className="kontak-staff-item">
                    <div className="kontak-staff-photo">
                      <img src={staff.foto} alt={staff.nama} />
                    </div>
                    <div className="kontak-staff-info">
                      <h4 className="kontak-staff-name">{staff.nama}</h4>
                      <p className="kontak-staff-position">{staff.jabatan}</p>
                      <div className="kontak-staff-contact">
                        <a href={`tel:${staff.telepon}`} className="kontak-contact-link">
                          <FaPhone /> {staff.telepon}
                        </a>
                        <a href={`mailto:${staff.email}`} className="kontak-contact-link">
                          <FaEnvelope /> {staff.email}
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Social Media */}
            <div className="kontak-info-card">
              <h3 className="kontak-info-title">
                <FaInstagram /> Media Sosial
              </h3>
              <div className="kontak-social-list">
                {socialMedia.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`kontak-social-item ${social.className}`}
                  >
                    <div className="kontak-social-icon">
                      {social.icon}
                    </div>
                    <div className="kontak-social-info">
                      <h4 className="kontak-social-platform">{social.platform}</h4>
                      <p className="kontak-social-username">{social.username}</p>
                    </div>
                  </a>
                ))}
              </div>
            </div>

            {/* FAQ */}
            <div className="kontak-info-card">
              <h3 className="kontak-info-title">
                <FaInfoCircle /> Pertanyaan Umum
              </h3>
              <div className="kontak-faq-list">
                {faqItems.map((item, index) => (
                  <div key={index} className="kontak-faq-item">
                    <h4 className="kontak-faq-question">{item.question}</h4>
                    <p className="kontak-faq-answer">{item.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Map Section */}
      <section className="kontak-map-section">
        <div className="container">
          <div className="kontak-section-header text-center kontak-mb-8">
            <h2 className="kontak-section-title">
              <FaMapMarkerAlt /> Lokasi Kantor Desa
            </h2>
            <p className="kontak-section-subtitle">
              Kunjungi kantor desa kami di alamat berikut
            </p>
          </div>
          
          <div className="kontak-map-container">
            {/* Google Maps Embed */}
            <iframe
              title="Lokasi Kantor Desa Bojongslawi"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.7489350815504!2d108.28502617499211!3d-6.426293793564736!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e6ec7bc4a8c34af%3A0x4aa9ebbcccfe263e!2sBalai%20Desa%20Bojong%20Slawi!5e0!3m2!1sid!2sid!4v1766766860087!5m2!1sid!2sid"
              width="100%"
              height="450"
              style={{ border: 0, borderRadius: '12px' }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
            
            <div className="kontak-map-overlay">
              <div className="kontak-overlay-content">
                <h3>Kantor Desa Bojongslawi</h3>
                <p>Jl. Raya Desa No. 45, Dusun 1, Bojongslawi</p>
                <a 
                  href="https://maps.google.com/?q=Kantor+Desa+Bojongslawi" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  <FaMapMarkerAlt /> Buka di Google Maps
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="kontak-cta-section">
        <div className="container">
          <div className="kontak-cta-content">
            <h2 className="kontak-cta-title">
              Butuh Bantuan Cepat?
            </h2>
            <p className="kontak-cta-text">
              Hubungi hotline kami untuk respon yang lebih cepat
            </p>
            <div className="kontak-cta-buttons">
              <a 
                href="tel:+6225112345678" 
                className="btn btn-primary"
              >
                <FaPhone /> Telepon Sekarang
              </a>
              <a 
                href="https://wa.me/6281234567890" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn btn-success"
              >
                <FaWhatsapp /> WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Kontak;