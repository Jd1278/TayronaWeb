import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import contactInfo from '../data/contactInfo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons'

function Footer () {
  return (
    <footer className='container'>
      <div className='footer-card'>
        {/* Top Call to Action Section */}
        <div className='footer-cta'>
          <h2>Treat Your Guests</h2>
          <div className='cta-buttons-group'>
            <Link to='/charcuterie' className='cta-button'>
              Order Charcuterie
            </Link>
            <Link to='/contactus' className='cta-button'>
              Plan your catering event
            </Link>
            <Link to='/contactus' className='cta-button'>
              Reserve the Food Truck
            </Link>
          </div>
        </div>

        {/* Bottom Content Grid */}
        <div className='footer-content'>
          <div className='footer-column contact-info'>
            <h3>Contact Information</h3>
            <div className='footer-contact-links'>
              <a href={`tel:+${contactInfo.phone}`}>
                <FontAwesomeIcon icon={faPhone} />
                <span>
                  <strong>Call:</strong> {contactInfo.phoneFormat}
                </span>
              </a>

              <a
                href={`https://wa.me/${contactInfo.phone}`}
                target='_blank'
                rel='noopener noreferrer'
              >
                <FontAwesomeIcon icon={faWhatsapp} />
                <span>
                  <strong>WhatsApp:</strong> +1 {contactInfo.phoneFormat}
                </span>
              </a>

              <a href={`mailto:${contactInfo.email}`}>
                <FontAwesomeIcon icon={faEnvelope} />
                <span>
                  <strong>Email:</strong> {contactInfo.email}
                </span>
              </a>
            </div>
          </div>
          <div className='footer-column social-links'>
            <h3>Follow Us</h3>
            <a
              href={contactInfo.instagram}
              target='_blank'
              rel='noopener noreferrer'
            >
              <FontAwesomeIcon icon={faInstagram} />
              <span>
                <strong>Instagram</strong>
              </span>
            </a>
          </div>
        </div>

        {/* Copyright Bar */}
        <div className='footer-bottom'>
          <p>Made with 💛 by Diana Lozano 2026</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
