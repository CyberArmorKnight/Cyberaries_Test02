import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer>
      <div className="footer-grid">
        <div>
          <h3 className="footer-title">
            Cyber<span style={{color: 'white'}}>Aries</span>
          </h3>
          <p style={{lineHeight: '1.7', marginBottom: '20px'}}>
            At Cyber Aries Pvt. Ltd., we're committed to delivering professional, high-quality cybersecurity solutions. From proactive threat monitoring to advanced data protection.
          </p>
          <div style={{display: 'flex', gap: '15px', fontSize: '1.2rem'}}>
            <a href="https://www.linkedin.com/company/cyberariespvtltd/" style={{color: 'var(--bg-soft-white)'}}>
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://www.linkedin.com/company/cyberariespvtltd/" style={{color: 'var(--bg-soft-white)'}}>
              <i className="fab fa-twitter"></i>
            </a>
            <a href="https://www.linkedin.com/company/cyberariespvtltd/" style={{color: 'var(--bg-soft-white)'}}>
              <i className="fab fa-facebook"></i>
            </a>
            <a href="https://www.linkedin.com/company/cyberariespvtltd/" style={{color: 'var(--bg-soft-white)'}}>
              <i className="fab fa-instagram"></i>
            </a>
          </div>
        </div>
        
        <div>
          <h3 className="footer-title">Company</h3>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#services">Our Services</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#blog">Blog</a></li>
            <li><a href="#career">Career</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="footer-title">Our Services</h3>
          <ul className="footer-links">
            <li><a href="https://www.linkedin.com/company/cyberariespvtltd/">Network Security</a></li>
            <li><a href="https://www.linkedin.com/company/cyberariespvtltd/">Data Encryption</a></li>
            <li><a href="https://www.linkedin.com/company/cyberariespvtltd/">Identity & Access</a></li>
            <li><a href="https://www.linkedin.com/company/cyberariespvtltd/">Security Monitoring</a></li>
            <li><a href="https://www.linkedin.com/company/cyberariespvtltd/">Backup & Recovery</a></li>
            <li><a href="https://www.linkedin.com/company/cyberariespvtltd/">Security Configuration</a></li>
          </ul>
        </div>
        
        <div>
          <h3 className="footer-title">Contact Us</h3>
          <div style={{marginBottom: '15px'}}>
            <div style={{fontWeight: '700', marginBottom: '5px'}}>
              <i className="fas fa-map-marker-alt" style={{color: 'var(--accent-corporate-red)', marginRight: '8px'}}></i>
              Head Office
            </div>
            <div style={{opacity: '0.9'}}>
              Hiranandani Business Park, Powai, Mumbai - 400071
            </div>
          </div>
          <div style={{marginBottom: '15px'}}>
            <div style={{fontWeight: '700', marginBottom: '5px'}}>
              <i className="fas fa-phone" style={{color: 'var(--accent-corporate-red)', marginRight: '8px'}}></i>
              Call Us
            </div>
            <div style={{opacity: '0.9'}}>+91 8828495202</div>
          </div>
          <div>
            <div style={{fontWeight: '700', marginBottom: '5px'}}>
              <i className="fas fa-envelope" style={{color: 'var(--accent-corporate-red)', marginRight: '8px'}}></i>
              Email Us
            </div>
            <div style={{opacity: '0.9'}}>info@cyberaries.com</div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <div>© 2026 CyberAries Pvt Ltd. All Rights Reserved.</div>
          <div>
            <a href="https://www.linkedin.com/company/cyberariespvtltd/">Terms & Conditions</a>
            <a href="https://www.linkedin.com/company/cyberariespvtltd/">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;