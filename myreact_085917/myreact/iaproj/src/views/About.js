import React from 'react';
import facebookIcon from "../assets/images/bg/facebookIcon.png";
import twitterIcon from "../assets/images/bg/twitterIcon.png";
import instagramIcon from "../assets/images/bg/instagramIcon.png";

const About = () => {
  return (
    <div style={{ maxWidth: '800px', margin: '0 auto', padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      
      <h1 style={{ 
        fontSize: '32px', 
        marginBottom: '20px',
      }}>About RideMe</h1>
      <p style={{ 
        fontSize: '16px', 
        lineHeight: '1.5', 
        marginBottom: '15px',
        color:'blue',

      }}>RideMe is a leading provider of transportation solutions, dedicated to helping people move comfortably.</p>

      <h2 style={{ 
        fontSize: '24px', 
        marginTop: '30px', 
        marginBottom: '15px',
      }}>Our Beginning</h2>
      <p style={{ 
        fontSize: '16px', 
        lineHeight: '1.5', 
        marginBottom: '15px',
        color:'blue',
      }}>Founded in 2020.</p>

      <h2 style={{ 
        fontSize: '24px', 
        marginTop: '30px', 
        marginBottom: '15px',
      }}>Our Services</h2>
      <p style={{ 
        fontSize: '16px', 
        lineHeight: '1.5', 
        marginBottom: '15px',
        color:'blue',

      }}>We offer a wide range of transportation services, including Ride, Package, Shuttle, and Reserve.</p>

      <h2 style={{ 
        fontSize: '24px', 
        marginTop: '30px', 
        marginBottom: '15px',
      }}>Safety and Security</h2>
      <p style={{ 
        fontSize: '16px', 
        lineHeight: '1.5', 
        marginBottom: '15px',
        color:'blue',

      }}>At RideMe, safety is our top priority. We implement stringent measures to ensure the security of our users.</p>

      <h2 style={{ 
        fontSize: '24px', 
        marginTop: '30px', 
        marginBottom: '15px',
      }}>Community Engagement</h2>
      <p style={{ 
        fontSize: '16px', 
        lineHeight: '1.5', 
        marginBottom: '15px',
        color:'blue',

      }}>We are committed to supporting local communities and promoting sustainable transportation practices.</p>
    <p>__________________________________________________________</p>
      <h2 style={{ 
        fontSize: '24px', 
        marginTop: '30px', 
        marginBottom: '15px',
      }}>Contact Us</h2>
      <p style={{ 
        fontSize: '16px', 
        lineHeight: '1.5', 
        marginBottom: '15px',
        color:'blue',

      }}>Have questions or feedback? We're here to help. Reach out to us at</p>

      <div style={{ display: 'flex', alignItems: 'center', marginTop: '30px' }}>
        <img src={facebookIcon} alt="Facebook" style={{ width: '30px', height: '25px', marginRight: '10px' }} />
        <img src={twitterIcon} alt="Twitter" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
        <img src={instagramIcon} alt="Instagram" style={{ width: '30px', height: '30px', marginRight: '10px' }} />
      </div>
    </div>
  );
};

export default About;
