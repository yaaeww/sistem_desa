import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaLock, FaEnvelope, FaHome } from 'react-icons/fa';
import Navbar from '../../components/Layout/Navbar';

const Login = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    role: 'warga'
  });
  
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setLoading(true);

    // Simulasi login dengan data dummy
    const dummyUsers = [
      { username: 'admin', password: 'admin123', role: 'admin', name: 'Administrator' },
      { username: 'staff1', password: 'staff123', role: 'staff', name: 'Staff Desa 1' },
      { username: 'budi_s', password: 'warga123', role: 'warga', name: 'Budi Santoso' }
    ];

    setTimeout(() => {
      const user = dummyUsers.find(
        u => u.username === formData.username && u.password === formData.password
      );

      if (user) {
        // Simpan data ke localStorage
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('userRole', user.role);
        localStorage.setItem('userName', user.name);
        localStorage.setItem('username', user.username);

        // Redirect berdasarkan role
        switch (user.role) {
          case 'admin':
            navigate('/admin');
            break;
          case 'staff':
            navigate('/staff');
            break;
          default:
            navigate('/warga');
        }
      } else {
        setError('Username atau password salah');
      }
      setLoading(false);
    }, 1000);
  };

  return (
    <div className="login-page">
      <Navbar />
      
      <div className="auth-container">
        <div className="auth-card">
          <div className="auth-header">
            <div className="auth-icon">
              <FaUser />
            </div>
            <h2>Masuk ke Sistem</h2>
            <p>Selamat datang kembali! Silakan masuk ke akun Anda</p>
          </div>

          {error && (
            <div className="alert alert-error">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="form-group">
              <label>
                <FaEnvelope className="input-icon" />
                Username / NIK
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Masukkan username atau NIK"
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
                placeholder="Masukkan password"
                required
              />
            </div>

            <div className="form-group">
              <label>
                <FaHome className="input-icon" />
                Login sebagai
              </label>
              <select
                name="role"
                value={formData.role}
                onChange={handleChange}
                className="role-select"
              >
                <option value="warga">Warga</option>
                <option value="staff">Staff Desa</option>
                <option value="admin">Administrator</option>
              </select>
            </div>

            <div className="form-options">
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Ingat saya</span>
              </label>
              <Link to="/forgot-password" className="forgot-link">
                Lupa password?
              </Link>
            </div>

            <button 
              type="submit" 
              className="btn btn-primary btn-block"
              disabled={loading}
            >
              {loading ? 'Memproses...' : 'Masuk'}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Belum punya akun?{' '}
              <Link to="/register" className="link-primary">
                Daftar sebagai warga
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

export default Login;