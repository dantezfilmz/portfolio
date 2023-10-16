import React from 'react';
import Header from '../Header/Header';
import { FaMapMarkerAlt, FaEnvelope, FaPhone } from 'react-icons/fa';
import { FaTwitter, FaFacebookF, FaInstagram } from 'react-icons/fa6';

const socialLinks = [
  { name: 'Twitter', icon: <FaTwitter />, link: '#' },
  { name: 'Facebook', icon: <FaFacebookF />, link: '#' },
  { name: 'Instagram', icon: <FaInstagram />, link: '#' },
];

const contactInfo = [
  {
    icon: <FaMapMarkerAlt />,
    title: 'My Address',
    text: 'A108 Adam Street, New York, NY 535022',
  },
  {
    icon: <FaEnvelope />,
    title: 'Email Me',
    text: 'contact@example.com',
  },
  {
    icon: <FaPhone />,
    title: 'Call Me',
    text: '+1 5589 55488 55',
  },
];

const Contact = () => {
  return (
    <>
      <Header linked={true} />
      <section id="contact" className="contact section-show">
        <div className="container">
          <div className="section-title">
            <h2>Contact</h2>
            <p>Contact Me</p>
          </div>

          <div className="row mt-2">
            {contactInfo.map((info, index) => (
              <div className="col-md-6 mt-4 d-flex align-items-stretch" key={index}>
                <div className="info-box">
                  <i>{info.icon}</i>
                  <h3>{info.title}</h3>
                  <p>{info.text}</p>
                </div>
              </div>
            ))}
          </div>

          <form action="forms/contact.php" method="post" role="form" className="php-email-form mt-4">
            <div className="row">
              <div className="col-md-6 form-group">
                <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
              </div>
              <div className="col-md-6 form-group mt-3 mt-md-0">
                <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
              </div>
            </div>
            <div className="form-group mt-3">
              <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
            </div>
            <div className="form-group mt-3">
              <textarea className="form-control" name="message" rows={5} placeholder="Message" required></textarea>
            </div>
            <div className="my-3">
              <div className="loading">Loading</div>
              <div className="error-message"></div>
              <div className="sent-message">Your message has been sent. Thank you!</div>
            </div>
            <div className="text-center">
              <button type="submit">Send Message</button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
};

export default Contact;


