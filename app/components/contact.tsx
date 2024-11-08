"use client";  // Tambahkan ini untuk menjadikan komponen client-side

import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    nama: '',
    email: '',
    pesan: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [rating, setRating] = useState(0); // State untuk rating

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleClear = () => {
    setFormData({
      nama: '',
      email: '',
      pesan: '',
    });
    setRating(0); // Reset rating saat form dibersihkan
  };

  const handleRating = (rate: number) => {
    setRating(rate);
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', marginTop: '50px' }}>
      {submitted ? (
        <div style={{
          textAlign: 'center',
          padding: '20px',
          backgroundColor: '#e0ffe0',
          border: '1px solid #4CAF50',
          borderRadius: '10px',
          maxWidth: '400px',
        }}>
          <h2 style={{ color: '#4CAF50' }}>Data berhasil dikirim!</h2>
          <p>
            Nama: {formData.nama} <br />
            Email: {formData.email} <br />
            Pesan: {formData.pesan} <br />
            Rating: {rating} bintang
          </p>
          <p>Data di atas akan segera diinput ke database. Terima kasih!</p>
        </div>
      ) : (
        <form onSubmit={handleSubmit} style={{ width: '300px', border: '1px solid #ddd', padding: '20px', borderRadius: '8px' }}>
          <h2>Contact Form</h2>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="nama">Nama:</label>
            <input
              type="text"
              id="nama"
              name="nama"
              value={formData.nama}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px', color: '#000' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px', color: '#000' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label htmlFor="pesan">Pesan:</label>
            <textarea
              id="pesan"
              name="pesan"
              value={formData.pesan}
              onChange={handleChange}
              style={{ width: '100%', padding: '8px', marginTop: '5px', color: '#000' }}
              required
            />
          </div>
          <div style={{ marginBottom: '15px' }}>
            <label>Rating:</label>
            <div style={{ display: 'flex', justifyContent: 'center', marginTop: '5px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  onClick={() => handleRating(star)}
                  style={{
                    cursor: 'pointer',
                    fontSize: '24px',
                    transition: 'color 0.2s ease, transform 0.2s ease',
                    color: star <= rating ? '#FFD700' : '#ccc',
                    transform: star <= rating ? 'scale(1.2)' : 'scale(1)',
                  }}
                >
                  ★
                </span>
              ))}
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button type="submit" style={{
              padding: '10px 20px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#45a049'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#4CAF50'}>
              Submit
            </button>
            <button type="button" onClick={handleClear} style={{
              padding: '10px 20px',
              backgroundColor: '#f44336',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: 'pointer',
              transition: 'background-color 0.3s ease'
            }}
              onMouseOver={(e) => e.currentTarget.style.backgroundColor = '#e53935'}
              onMouseOut={(e) => e.currentTarget.style.backgroundColor = '#f44336'}>
              Clear
            </button>
          </div>
        </form>
      )}
    </div>
  );
};

export default ContactForm;
