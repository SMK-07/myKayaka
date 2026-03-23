import React, { useState } from 'react';
import './Contact.css';

const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwWAEBm-xEho34s_9W45Z8cL3hD4leZ9j3jfNeQXAmUB7YXgglu5ijcFt2yKhnyS2DF/exec';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', mobile: '', email: '', category: '', message: '' });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    setSuccess(false);

    const params = new URLSearchParams(formData);

    try {
      await fetch(SCRIPT_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: params.toString(),
      });
      // With no-cors, we can't read the response — assume success if no network error is thrown
      setSuccess(true);
      setFormData({ name: '', mobile: '', email: '', category: '', message: '' });
    } catch (err) {
      setError('Network error. Please try again or contact us via Email.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="contact">
      <div className="container contact-container">

        <div className="contact-left bg-pattern">
          <div className="contact-info">
            <h2 className="contact-heading">Contact us</h2>
            <p className="contact-text">
              Interested in our work and vision? We are glad to connect with you.
              Whether you want to partner with us or are looking to get hired,
              drop your details and our team will reach out.
            </p>
          </div>
        </div>

        <div className="contact-right">
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="fullName">Full Name</label>
              <input type="text" id="fullName" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your full name" required />
            </div>

            <div className="form-group">
              <label htmlFor="mobile">Mobile Number</label>
              <input type="tel" id="mobile" name="mobile" value={formData.mobile} onChange={handleChange} placeholder="Enter your mobile number" required />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email address" required />
            </div>

            <div className="form-group">
              <label htmlFor="category">I am a...</label>
              <select id="category" name="category" value={formData.category} onChange={handleChange} required className="custom-select">
                <option value="" disabled>Select an option</option>
                <option value="student">Student</option>
                <option value="professional">Working Professional</option>
                <option value="business">Business / Employer</option>
              </select>
            </div>

            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea id="message" name="message" value={formData.message} onChange={handleChange} rows="4" placeholder="Write your message here..."></textarea>
            </div>

            {error && <p className="form-error">{error}</p>}
            {success && <p className="form-success">✅ Message sent! We'll reach out shortly.</p>}

            <button type="submit" className="submit-btn" disabled={loading}>
              {loading ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contact;
