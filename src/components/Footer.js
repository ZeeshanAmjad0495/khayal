import React from 'react';

import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import PinterestIcon from '@material-ui/icons/Pinterest';
import YouTubeIcon from '@material-ui/icons/YouTube';
import InstagramIcon from '@material-ui/icons/Instagram';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import ReactLogo from './footer-logo.svg';

import './Footer.css';

const Footer = () => {
  return (
    <div className="footer">
      <div className="contact-us">Contact Us</div>
      <div className="footer-logo">
        <img  src={ReactLogo} alt="Haqq Khair Jamal"></img>
      </div>
      <div className="social-media-icons">
        <FacebookIcon className="social-media-icon" />
        <TwitterIcon className="social-media-icon" />
        <PinterestIcon className="social-media-icon" />
        <YouTubeIcon className="social-media-icon" />
        <InstagramIcon className="social-media-icon" />
        <WhatsAppIcon className="social-media-icon" />
      </div>
    </div>
  );
};

export default Footer;
