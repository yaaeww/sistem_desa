import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import {
  FaTree,
  FaIndustry,
  FaUtensils,
  FaHotel,
  FaLandmark,
  FaMapMarkerAlt,
  FaPhone,
  FaGlobe,
  FaFacebook,
  FaInstagram,
  FaStar,
  FaArrowLeft,
  FaBookmark,
  FaShareAlt,
  FaPrint,
  FaDownload,
  FaCalendarAlt,
  FaClock,
  FaTag,
  FaWhatsapp,
  FaEnvelope,
  FaTwitter,
  FaDirections,
  FaImages,
  FaUsers,
  FaShoppingCart
} from "react-icons/fa";
import Navbar from "../../components/Layout/Navbar";
import Footer from "../../components/Layout/Footer";

const DetailPotensi = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const [potensi, setPotensi] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedPotensi, setRelatedPotensi] = useState([]);
  const [bookmarked, setBookmarked] = useState(false);
  const [activeImage, setActiveImage] = useState(0);
  const [images] = useState([
    "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
  ]);

  // Data dummy potensi
  const dummyPotensi = [
    {
      id: 1,
      nama: "Kebun Jeruk Pak Slamet",
      slug: "kebun-jeruk-pak-slamet",
      deskripsi: `
        <h2>Kebun Jeruk Organik Pak Slamet</h2>
        <p>Kebun jeruk seluas 5 hektar yang telah dikelola secara organik sejak tahun 2015. Menggunakan pupuk kompos dan pestisida alami untuk menghasilkan jeruk berkualitas tinggi.</p>
        
        <h3>Varian Jeruk yang Dihasilkan:</h3>
        <ul>
          <li><strong>Jeruk Pamelo:</strong> Buah besar dengan daging tebal dan rasa manis segar</li>
          <li><strong>Jeruk Siam:</strong> Jeruk lokal dengan rasa manis asam yang khas</li>
          <li><strong>Jeruk Keprok:</strong> Jeruk mudah dikupas dengan aroma harum</li>
        </ul>
        
        <h3>Keunggulan Produk:</h3>
        <div class="potensi-excellence-grid">
          <div class="potensi-excellence-item">
            <strong>Organik Bersertifikat</strong>
            <p>Telah mendapatkan sertifikasi organik dari Dinas Pertanian</p>
          </div>
          <div class="potensi-excellence-item">
            <strong>Panen Segar Setiap Hari</strong>
            <p>Jeruk dipetik langsung saat pemesanan</p>
          </div>
          <div class="potensi-excellence-item">
            <strong>Harga Kompetitif</strong>
            <p>Harga lebih murah dari pasar dengan kualitas terjamin</p>
          </div>
          <div class="potensi-excellence-item">
            <strong>Pengiriman Cepat</strong>
            <p>Gratis ongkir untuk wilayah kecamatan</p>
          </div>
        </div>
        
        <h3>Musim Panen:</h3>
        <p>Panen utama dilakukan pada bulan Mei-Juli dan November-Januari. Namun tersedia stok sepanjang tahun dengan sistem penyimpanan yang baik.</p>
        
        <h3>Cara Pemesanan:</h3>
        <ol>
          <li>Hubungi via WhatsApp atau telepon</li>
          <li>Tentukan jumlah dan jenis jeruk</li>
          <li>Konfirmasi alamat pengiriman</li>
          <li>Pembayaran via transfer atau COD</li>
          <li>Jeruk dikirim langsung dari kebun</li>
        </ol>
        
        <div class="potensi-alert-success">
          <strong>Promo Bulan Ini:</strong> Beli 10 kg gratis 1 kg untuk pembelian pertama!
        </div>
      `,
      kategori: "pertanian",
      subkategori: "perkebunan",
      gambar_path: "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
      pemilik: "Pak Slamet",
      lokasi: "Dusun 1, RT 02, Desa Bojongslawi",
      alamat_lengkap: "Jl. Raya Kebun Jeruk No. 45, Dusun 1, Bojongslawi",
      kontak: "0812-3456-7890",
      whatsapp: "0812-3456-7890",
      email: "jerukpakslamet@example.com",
      website: "https://jerukbojong.example.com",
      facebook: "KebunJerukPakSlamet",
      instagram: "@jerukpakslamet",
      rating: 4.5,
      total_review: 128,
      produk_unggulan: "Jeruk Pamelo, Jeruk Siam, Jeruk Keprok",
      harga: "Rp 15.000 - 25.000/kg",
      harga_grosir: "Rp 12.000/kg (minimal 50kg)",
      jam_operasional: "07:00 - 17:00 WIB (Setiap Hari)",
      fasilitas: ["Parkir luas", "Area piknik", "Pembelian langsung", "Kunjungan edukatif", "Free tasting"],
      tags: ["organik", "buah-buahan", "pertanian-berkelanjutan", "jeruk", "produk-lokal"],
      views: 156,
      is_published: true,
      tahun_berdiri: 2015,
      jumlah_karyawan: 5,
      luas_lahan: "5 hektar",
      kapasitas_produksi: "10 ton/musim",
      sertifikasi: ["Organik", "Pangan Aman", "HACCP"],
      metode_pembayaran: ["Transfer Bank", "COD", "Tunai"],
      area_pengiriman: ["Dalam Desa", "Kecamatan", "Kabupaten"],
      gallery: [
        "https://images.unsplash.com/photo-1547514701-42782101795e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1574323347407-f5e1ad6d020b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
        "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
      ]
    },
    // Data potensi lainnya...
  ];

  useEffect(() => {
    // Simulasi loading data
    setTimeout(() => {
      const foundPotensi = dummyPotensi.find(item => item.slug === slug);
      
      if (foundPotensi) {
        setPotensi(foundPotensi);
        
        // Find related potensi (same category, exclude current)
        const related = dummyPotensi
          .filter(item => 
            item.kategori === foundPotensi.kategori && 
            item.id !== foundPotensi.id
          )
          .slice(0, 3);
        setRelatedPotensi(related);
      }
      
      setLoading(false);
    }, 300);
  }, [slug]);

  // Render rating stars
  const renderStars = (rating) => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} className="potensi-star-full" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStar key="half" className="potensi-star-half" />);
    }

    const emptyStars = 5 - stars.length;
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} className="potensi-star-empty" />);
    }

    return (
      <div className="potensi-rating-stars">
        {stars}
        <span className="potensi-rating-number">{rating.toFixed(1)}</span>
        <span className="potensi-review-count">({potensi?.total_review || 0} ulasan)</span>
      </div>
    );
  };

  const handleBookmark = () => {
    setBookmarked(!bookmarked);
    alert(bookmarked ? 'Bookmark dihapus' : 'Ditambahkan ke wishlist');
  };

  const handleShare = (platform) => {
    const url = window.location.href;
    const title = potensi?.nama || '';
    const text = potensi?.deskripsi?.substring(0, 100) || '';

    switch(platform) {
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}`, '_blank');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title)}`, '_blank');
        break;
      case 'whatsapp':
        window.open(`https://wa.me/?text=${encodeURIComponent(title + ' ' + url)}`, '_blank');
        break;
      case 'email':
        window.location.href = `mailto:?subject=${encodeURIComponent(title)}&body=${encodeURIComponent(text + '\n\n' + url)}`;
        break;
      default:
        navigator.clipboard.writeText(url);
        alert('Link berhasil disalin!');
    }
  };

  const openWhatsApp = () => {
    const message = `Halo, saya tertarik dengan ${potensi?.nama}. Bisa info lebih detail?`;
    window.open(`https://wa.me/${potensi?.whatsapp || potensi?.kontak}?text=${encodeURIComponent(message)}`, '_blank');
  };

  const openMaps = () => {
    const address = encodeURIComponent(potensi?.alamat_lengkap || potensi?.lokasi || '');
    window.open(`https://www.google.com/maps/search/?api=1&query=${address}`, '_blank');
  };

  if (loading) {
    return (
      <div className="potensi-detail-wrapper">
        <Navbar />
        <div className="potensi-detail-container potensi-detail-py-12">
          <div className="potensi-detail-loading">
            <div className="potensi-detail-loading-image"></div>
            <div className="potensi-detail-loading-content">
              <div className="potensi-detail-loading-title"></div>
              <div className="potensi-detail-loading-meta"></div>
              <div className="potensi-detail-loading-text"></div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  if (!potensi) {
    return (
      <div className="potensi-detail-wrapper">
        <Navbar />
        <div className="potensi-detail-container potensi-detail-py-12">
          <div className="potensi-detail-empty-state">
            <div className="potensi-detail-empty-content">
              <FaTree className="potensi-detail-empty-icon" />
              <h3 className="potensi-detail-empty-title">Potensi tidak ditemukan</h3>
              <p className="potensi-detail-empty-text">
                Potensi yang Anda cari tidak tersedia atau telah dihapus.
              </p>
              <button
                onClick={() => navigate('/potensi')}
                className="potensi-detail-btn potensi-detail-btn-primary"
              >
                <FaArrowLeft /> Kembali ke Potensi Desa
              </button>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="potensi-detail-wrapper">
      <Navbar />
      
      {/* Breadcrumb */}
      <div className="potensi-detail-breadcrumb-container">
        <div className="potensi-detail-container potensi-detail-py-4">
          <nav className="potensi-detail-breadcrumb">
            <Link to="/" className="potensi-detail-breadcrumb-item">Beranda</Link>
            <span className="potensi-detail-breadcrumb-separator">/</span>
            <Link to="/potensi" className="potensi-detail-breadcrumb-item">Potensi Desa</Link>
            <span className="potensi-detail-breadcrumb-separator">/</span>
            <span className="potensi-detail-breadcrumb-item potensi-detail-breadcrumb-active">{potensi.nama}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <main className="potensi-detail-container potensi-detail-py-8">
        <div className="potensi-detail-layout">
          {/* Main Content */}
          <article className="potensi-detail-content-main">
            {/* Header */}
            <div className="potensi-detail-header">
              <div className="potensi-detail-header-left">
                <h1 className="potensi-detail-title">{potensi.nama}</h1>
                <div className="potensi-detail-rating">
                  {renderStars(potensi.rating)}
                </div>
              </div>
              <div className="potensi-detail-header-right">
                <button 
                  className={`potensi-detail-bookmark-btn ${bookmarked ? 'potensi-detail-bookmark-active' : ''}`}
                  onClick={handleBookmark}
                >
                  <FaBookmark />
                  {bookmarked ? 'Disimpan' : 'Simpan'}
                </button>
                <button 
                  className="potensi-detail-share-btn"
                  onClick={() => handleShare('copy')}
                >
                  <FaShareAlt />
                  Bagikan
                </button>
              </div>
            </div>

            {/* Image Gallery */}
            <div className="potensi-detail-image-gallery">
              <div className="potensi-detail-main-image">
                <img 
                  src={potensi.gallery?.[activeImage] || potensi.gambar_path} 
                  alt={potensi.nama} 
                  className="potensi-detail-gallery-main"
                />
                <div className="potensi-detail-image-overlay">
                  <button className="potensi-detail-overlay-btn" onClick={openMaps}>
                    <FaDirections /> Lihat Lokasi
                  </button>
                </div>
              </div>
              
              {potensi.gallery && potensi.gallery.length > 1 && (
                <div className="potensi-detail-thumbnail-grid">
                  {potensi.gallery.map((img, index) => (
                    <button
                      key={index}
                      className={`potensi-detail-thumbnail ${activeImage === index ? 'potensi-detail-thumbnail-active' : ''}`}
                      onClick={() => setActiveImage(index)}
                    >
                      <img src={img} alt={`${potensi.nama} ${index + 1}`} />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Quick Info */}
            <div className="potensi-detail-quick-info">
              <div className="potensi-detail-info-item">
                <FaMapMarkerAlt />
                <div>
                  <strong>Lokasi</strong>
                  <p>{potensi.lokasi}</p>
                </div>
              </div>
              <div className="potensi-detail-info-item">
                <FaPhone />
                <div>
                  <strong>Kontak</strong>
                  <p>{potensi.kontak}</p>
                </div>
              </div>
              {potensi.jam_operasional && (
                <div className="potensi-detail-info-item">
                  <FaClock />
                  <div>
                    <strong>Jam Operasional</strong>
                    <p>{potensi.jam_operasional}</p>
                  </div>
                </div>
              )}
              {potensi.harga && (
                <div className="potensi-detail-info-item">
                  <FaTag />
                  <div>
                    <strong>Harga</strong>
                    <p className="potensi-detail-price">{potensi.harga}</p>
                  </div>
                </div>
              )}
            </div>

            {/* Deskripsi */}
            <div className="potensi-detail-description-section">
              <h2 className="potensi-detail-section-title">Deskripsi</h2>
              <div 
                className="potensi-detail-description-content"
                dangerouslySetInnerHTML={{ __html: potensi.deskripsi }}
              />
            </div>

            {/* Fasilitas */}
            {potensi.fasilitas && potensi.fasilitas.length > 0 && (
              <div className="potensi-detail-facilities-section">
                <h2 className="potensi-detail-section-title">
                  <FaImages /> Fasilitas & Layanan
                </h2>
                <div className="potensi-detail-facilities-grid">
                  {potensi.fasilitas.map((fasilitas, index) => (
                    <div key={index} className="potensi-detail-facility-item">
                      <div className="potensi-detail-facility-icon"></div>
                      <span>{fasilitas}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Informasi Tambahan */}
            <div className="potensi-detail-additional-info">
              {(potensi.tahun_berdiri || potensi.luas_lahan || potensi.jumlah_karyawan) && (
                <div className="potensi-detail-info-section">
                  <h3 className="potensi-detail-info-title">
                    <FaUsers /> Informasi Umum
                  </h3>
                  <div className="potensi-detail-info-grid">
                    {potensi.tahun_berdiri && (
                      <div className="potensi-detail-info-item">
                        <strong>Tahun Berdiri:</strong>
                        <span>{potensi.tahun_berdiri}</span>
                      </div>
                    )}
                    {potensi.luas_lahan && (
                      <div className="potensi-detail-info-item">
                        <strong>Luas Lahan:</strong>
                        <span>{potensi.luas_lahan}</span>
                      </div>
                    )}
                    {potensi.jumlah_karyawan && (
                      <div className="potensi-detail-info-item">
                        <strong>Jumlah Karyawan:</strong>
                        <span>{potensi.jumlah_karyawan} orang</span>
                      </div>
                    )}
                    {potensi.kapasitas_produksi && (
                      <div className="potensi-detail-info-item">
                        <strong>Kapasitas Produksi:</strong>
                        <span>{potensi.kapasitas_produksi}</span>
                      </div>
                    )}
                  </div>
                </div>
              )}

              {/* Kontak & Sosial Media */}
              <div className="potensi-detail-info-section">
                <h3 className="potensi-detail-info-title">
                  <FaPhone /> Hubungi Kami
                </h3>
                <div className="potensi-detail-contact-buttons">
                  <button 
                    className="potensi-detail-btn potensi-detail-btn-success"
                    onClick={openWhatsApp}
                  >
                    <FaWhatsapp /> WhatsApp
                  </button>
                  {potensi.email && (
                    <a 
                      href={`mailto:${potensi.email}`}
                      className="potensi-detail-btn potensi-detail-btn-outline"
                    >
                      <FaEnvelope /> Email
                    </a>
                  )}
                  {potensi.telepon && (
                    <a 
                      href={`tel:${potensi.telepon}`}
                      className="potensi-detail-btn potensi-detail-btn-outline"
                    >
                      <FaPhone /> Telepon
                    </a>
                  )}
                </div>
                
                {/* Sosial Media */}
                {(potensi.facebook || potensi.instagram) && (
                  <div className="potensi-detail-social-media">
                    <h4 className="potensi-detail-social-title">Ikuti Kami:</h4>
                    <div className="potensi-detail-social-buttons">
                      {potensi.facebook && (
                        <a 
                          href={`https://facebook.com/${potensi.facebook}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="potensi-detail-social-btn potensi-detail-social-facebook"
                        >
                          <FaFacebook /> Facebook
                        </a>
                      )}
                      {potensi.instagram && (
                        <a 
                          href={`https://instagram.com/${potensi.instagram.replace('@', '')}`}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="potensi-detail-social-btn potensi-detail-social-instagram"
                        >
                          <FaInstagram /> Instagram
                        </a>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Tags */}
              {potensi.tags && potensi.tags.length > 0 && (
                <div className="potensi-detail-tags-section">
                  <h3 className="potensi-detail-info-title">
                    <FaTag /> Tags
                  </h3>
                  <div className="potensi-detail-tags-list">
                    {potensi.tags.map((tag, index) => (
                      <span key={index} className="potensi-detail-tag">
                        #{tag}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Action Buttons */}
            <div className="potensi-detail-action-buttons">
              <button 
                className="potensi-detail-btn potensi-detail-btn-primary potensi-detail-btn-lg"
                onClick={openWhatsApp}
              >
                <FaShoppingCart /> Pesan Sekarang
              </button>
              <button 
                className="potensi-detail-btn potensi-detail-btn-outline potensi-detail-btn-lg"
                onClick={openMaps}
              >
                <FaDirections /> Lihat Peta
              </button>
              <div className="potensi-detail-share-buttons">
                <button 
                  className="potensi-detail-share-btn potensi-detail-share-facebook"
                  onClick={() => handleShare('facebook')}
                >
                  <FaFacebook />
                </button>
                <button 
                  className="potensi-detail-share-btn potensi-detail-share-twitter"
                  onClick={() => handleShare('twitter')}
                >
                  <FaTwitter />
                </button>
                <button 
                  className="potensi-detail-share-btn potensi-detail-share-whatsapp"
                  onClick={() => handleShare('whatsapp')}
                >
                  <FaWhatsapp />
                </button>
                <button 
                  className="potensi-detail-share-btn potensi-detail-share-email"
                  onClick={() => handleShare('email')}
                >
                  <FaEnvelope />
                </button>
              </div>
            </div>
          </article>

          {/* Sidebar */}
          <aside className="potensi-detail-sidebar">
            {/* Navigation */}
            <div className="potensi-detail-sidebar-card">
              <button
                onClick={() => navigate('/potensi')}
                className="potensi-detail-btn potensi-detail-btn-outline potensi-detail-back-btn"
              >
                <FaArrowLeft /> Kembali ke Potensi
              </button>
            </div>

            {/* Related Potensi */}
            {relatedPotensi.length > 0 && (
              <div className="potensi-detail-sidebar-card">
                <h3 className="potensi-detail-sidebar-title">
                  <FaTree /> Potensi Terkait
                </h3>
                <div className="potensi-detail-related-list">
                  {relatedPotensi.map((item) => (
                    <Link
                      key={item.id}
                      to={`/potensi/${item.slug}`}
                      className="potensi-detail-related-item"
                    >
                      <div className="potensi-detail-related-image">
                        <img src={item.gambar_path} alt={item.nama} />
                      </div>
                      <div className="potensi-detail-related-content">
                        <h4 className="potensi-detail-related-title">{item.nama}</h4>
                        <div className="potensi-detail-related-rating">
                          {renderStars(item.rating)}
                        </div>
                        <p className="potensi-detail-related-category">{item.kategori}</p>
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {/* Statistik */}
            <div className="potensi-detail-sidebar-card">
              <h3 className="potensi-detail-sidebar-title">
                <FaStar /> Statistik
              </h3>
              <div className="potensi-detail-stats-grid">
                <div className="potensi-detail-stat-item">
                  <div className="potensi-detail-stat-value">{potensi.rating.toFixed(1)}</div>
                  <div className="potensi-detail-stat-label">Rating</div>
                </div>
                <div className="potensi-detail-stat-item">
                  <div className="potensi-detail-stat-value">{potensi.total_review || 0}</div>
                  <div className="potensi-detail-stat-label">Ulasan</div>
                </div>
                <div className="potensi-detail-stat-item">
                  <div className="potensi-detail-stat-value">{potensi.views}</div>
                  <div className="potensi-detail-stat-label">Dilihat</div>
                </div>
              </div>
            </div>

            {/* Kategori */}
            <div className="potensi-detail-sidebar-card">
              <h3 className="potensi-detail-sidebar-title">
                <FaTag /> Kategori Lainnya
              </h3>
              <div className="potensi-detail-category-links">
                <Link to="/potensi?kategori=pertanian" className="potensi-detail-category-link">
                  <FaTree /> Pertanian
                </Link>
                <Link to="/potensi?kategori=kerajinan" className="potensi-detail-category-link">
                  <FaIndustry /> Kerajinan
                </Link>
                <Link to="/potensi?kategori=wisata" className="potensi-detail-category-link">
                  <FaLandmark /> Wisata
                </Link>
                <Link to="/potensi?kategori=kuliner" className="potensi-detail-category-link">
                  <FaUtensils /> Kuliner
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* Newsletter */}
      <section className="potensi-detail-newsletter-section">
        <div className="potensi-detail-container">
          <div className="potensi-detail-newsletter-content">
            <h2 className="potensi-detail-newsletter-title">
              Temukan Potensi Lainnya
            </h2>
            <p className="potensi-detail-newsletter-text">
              Daftarkan email untuk mendapatkan update potensi desa terbaru
            </p>
            <form className="potensi-detail-newsletter-form">
              <div className="potensi-detail-form-group">
                <input
                  type="email"
                  placeholder="Email Anda"
                  className="potensi-detail-newsletter-input"
                  required
                />
                <button type="submit" className="potensi-detail-btn potensi-detail-btn-primary">
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

export default DetailPotensi;