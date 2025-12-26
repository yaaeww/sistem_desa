import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaIdCard, FaPhone, FaHome, FaMapMarkerAlt } from 'react-icons/fa';
import Navbar from '../../components/Layout/Navbar';

const Register = () => {
  const [formData, setFormData] = useState({
    nik: '',
    nama_lengkap: '',
    email: '',
    username: '',
    password: '',
    confirmPassword: '',
    no_telepon: '',
    alamat: '',
    rt: '',
    rw: '',
    dusun: ''
  });
  
  const [errors, setErrors] = useState({});
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user types
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.nik.match(/^\d{16}$/)) {
      newErrors.nik = 'NIK harus 16 digit angka';
    }
    
    if (!formData.nama_lengkap.trim()) {
      newErrors.nama_lengkap = 'Nama lengkap harus diisi';
    }
    
    if (!formData.email.includes('@')) {
      newErrors.email = 'Email tidak valid';
    }
    
    if (formData.password.length < 6) {
      newErrors.password = 'Password minimal 6 karakter';
    }
    
    if (formData.password !== formData.confirmPassword) {
      newErrors.confirmPassword = 'Password tidak cocok';
    }
    
    return newErrors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const validationErrors = validateForm();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    
    setLoading(true);
    
    // Simulasi registrasi
    setTimeout(() => {
      // Simpan data registrasi (dalam real app, ini akan ke API)
      const userData = {
        ...formData,
        role: 'warga',
        createdAt: new Date().toISOString()
      };
      
      localStorage.setItem('pendingRegistration', JSON.stringify(userData));
      
      alert('Registrasi berhasil! Silakan login dengan akun Anda.');
      navigate('/login');
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="register-page">
      <Navbar />
      
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-icon">
              <FaUser />
            </div>
            <h2>Daftar sebagai Warga</h2>
            <p>Isi data diri Anda untuk mendaftar di sistem desa</p>
          </div>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label>
                  <FaIdCard className="input-icon" />
                  NIK
                </label>
                <input
                  type="text"
                  name="nik"
                  value={formData.nik}
                  onChange={handleChange}
                  placeholder="16 digit NIK"
                  maxLength="16"
                  required
                />
                {errors.nik && <span className="error-message">{errors.nik}</span>}
              </div>

              <div className="form-group">
                <label>
                  <FaUser className="input-icon" />
                  Nama Lengkap
                </label>
                <input
                  type="text"
                  name="nama_lengkap"
                  value={formData.nama_lengkap}
                  onChange={handleChange}
                  placeholder="Masukkan nama lengkap"
                  required
                />
                {errors.nama_lengkap && <span className="error-message">{errors.nama_lengkap}</span>}
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <FaEnvelope className="input-icon" />
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="contoh@email.com"
                  required
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label>
                  <FaPhone className="input-icon" />
                  No. Telepon
                </label>
                <input
                  type="tel"
                  name="no_telepon"
                  value={formData.no_telepon}
                  onChange={handleChange}
                  placeholder="08xxxxxxxxxx"
                />
              </div>
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <FaUser className="input-icon" />
                  Username
                </label>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  placeholder="Pilih username"
                  required
                />
              </div>

              <div className="form-group">
                <label>
                  <FaLock className="input-icon" />
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="Minimal 6 karakter"
                  required
                />
                {errors.password && <span className="error-message">{errors.password}</span>}
              </div>
            </div>

            <div className="form-group">
              <label>
                <FaLock className="input-icon" />
                Konfirmasi Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="Ulangi password"
                required
              />
              {errors.confirmPassword && (
                <span className="error-message">{errors.confirmPassword}</span>
              )}
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>
                  <FaHome className="input-icon" />
                  RT
                </label>
                <input
                  type="text"
                  name="rt"
                  value={formData.rt}
                  onChange={handleChange}
                  placeholder="RT"
                  maxLength="3"
                />
              </div>

              <div className="form-group">
                <label>
                  <FaHome className="input-icon" />
                  RW
                </label>
                <input
                  type="text"
                  name="rw"
                  value={formData.rw}
                  onChange={handleChange}
                  placeholder="RW"
                  maxLength="3"
                />
              </div>

              <div className="form-group">
                <label>
                  <FaMapMarkerAlt className="input-icon" />
                  Dusun
                </label>
                <select
                  name="dusun"
                  value={formData.dusun}
                  onChange={handleChange}
                >
                  <option value="">Pilih Dusun</option>
                  <option value="Dusun 1">Dusun 1</option>
                  <option value="Dusun 2">Dusun 2</option>
                  <option value="Dusun 3">Dusun 3</option>
                  <option value="Dusun 4">Dusun 4</option>
                  <option value="Dusun 5">Dusun 5</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>
                <FaMapMarkerAlt className="input-icon" />
                Alamat Lengkap
              </label>
              <textarea
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                placeholder="Jl. Nama Jalan No. XX"
                rows="3"
              />
            </div>

            <div className="form-checkbox">
              <label>
                <input type="checkbox" required />
                <span>
                  Saya menyetujui{' '}
                  <Link to="/terms" className="link-primary">
                    Syarat dan Ketentuan
                  </Link>{' '}
                  serta{' '}
                  <Link to="/privacy" className="link-primary">
                    Kebijakan Privasi
                  </Link>
                </span>
              </label>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-block"
              disabled={loading}
            >
              {loading ? 'Mendaftarkan...' : 'Daftar Sekarang'}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Sudah punya akun?{' '}
              <Link to="/login" className="link-primary">
                Masuk di sini
              </Link>
            </p>
            <Link to="/" className="back-home">
              <FaHome /> Kembali ke Beranda
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;