import React, { useState, useEffect } from 'react';
import OHLogo from "../../assets/logo-one.png";
import ASOCLogo from '../../assets/Student-Legasdf.png';

const Footer = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <footer className={`footer-container ${isScrolled ? 'scrolled' : ''}`}>
      <div className="footer-content">
        {/* OhloneHacks Logo - Left */}
        <div className="footer-logo-left">
          <img
            alt="OhloneHacks logo"
            className="footer-logo"
            src={OHLogo}
          />
        </div>

        {/* Social Media Icons - Center */}
        <div className="footer-socials">
          <a href="https://www.instagram.com/ohlonehacks25/" target="_blank" rel="noopener noreferrer">
            <img
              className="footer-social-icon"
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
          </a>
          <a href="https://www.linkedin.com/in/asoc-research-and-development-695191209/" target="_blank" rel="noopener noreferrer">
            <img
              className="footer-social-icon"
              src="/Images/LinkedIn_logo_initials.png"
              alt="LinkedIn"
            />
          </a>
          <a href="mailto:Ohlonehacks24@gmail.com" target="_blank" rel="noopener noreferrer">
            <img
              className="footer-social-icon"
              src="/Images/Gmail_icon_(2020).png"
              alt="Gmail"
            />
          </a>
        </div>

        {/* ASOC Logo - Right */}
        <div className="footer-logo-right">
          <img
            alt="ASOC logo"
            className="footer-logo"
            src={ASOCLogo}
          />
        </div>
      </div>

      <div className="footer-copyright">
        &copy; 2026 OhloneHacks
      </div>
      <div className="footer-watermark">
<<<<<<< HEAD
        <small>Art by Cheuk Yin Li (Milly)</small>
=======
        <small>Art by Milly</small>
>>>>>>> 03f09b5101d5e5a0b6313f81975e31cea7046cf7
        <br />
        <small>Made with 💖 by ASOC R&D</small>
      </div>
    
    </footer>
  );
};

export default Footer;

// Responsive CSS Styling
const footerStyle = `
.footer-container {
  background:transparent;
  color: #fff;
  padding: 16px 0;
  transition: background-color 0.3s ease-in-out;
}

.footer-container.scrolled {
  background-color: transparent;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 16px;
  box-sizing: border-box;
  flex-wrap: wrap;
  gap: 12px;
}

.footer-logo-left,
.footer-logo-right {
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(255,255, 255, 0.9);
  padding: 0.5rem;
  border-radius: 12px;

}

.footer-logo {
  height: 64px;
  width: auto;
  max-width: 120px;
}

.footer-socials {
  display: flex;
  align-items: center;
  gap: 12px;
}

.footer-socials a {
  background: rgba(255, 255, 255, 0.9);
  padding: 8px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}
.footer-socials a:hover {
  background:#7fa78a ;
  transform: translateY(-3px);
  box-shadow: 0 4px 12px rgba(212, 197, 176, 0.5);
}



.footer-social-icon {
  width: 32px;
  height: 32px;
  transition: transform 0.3s ease-in-out;
}

.footer-social-icon:hover {
  transform: scale(1.15);
}

.footer-copyright,
.footer-watermark {
  text-align: center;
  margin-top: 8px;
  font-size: 14px;
}

/* Responsive Design */
@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
    gap: 16px;
    text-align: center;
  }

  .footer-logo {
    height: 56px;
  }

  .footer-socials {
    justify-content: center;
  }
}
`;

const styleSheet = document.createElement('style');
styleSheet.type = 'text/css';
styleSheet.innerText = footerStyle;
document.head.appendChild(styleSheet);
