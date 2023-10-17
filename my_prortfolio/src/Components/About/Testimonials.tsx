import React, { useEffect } from 'react';
import Swiper from 'swiper';
import 'swiper/css';
import AOS from 'aos';
import 'aos/dist/aos.css';

const testimonialData = [
  {
    quote: "Exploring the world and capturing its beauty through the lens is my ultimate adventure. Every frame is a story waiting to be told.",
    author: "Noel Osiro",
    position: "Software Developer",
    imageSrc: "assets/img/testimonials/testimonials-1.jpg",
  },
  {
    quote: "In the heart of the wilderness, I find my inspiration. There's no script in nature, only the thrill of the unexpected.",
    author: "Phostine Ondimu",
    position: "Adventure Seeker",
    imageSrc: "assets/img/testimonials/testimonials-2.jpg",
  },
  {
    quote: "The road less traveled leads to the most extraordinary tales. Exploring uncharted territories is where adventure and creativity converge.",
    author: "Peter Kaingu",
    position: "Adventurous Explorer",
    imageSrc: "assets/img/testimonials/testimonials-3.jpg",
  },
  {
    quote: "Adventure fuels my spirit. It's a relentless pursuit of the extraordinary, where every challenge is a plot twist in the grand story of life.",
    author: "Tom Keane",
    position: "Adventure Enthusiast",
    imageSrc: "assets/img/testimonials/testimonials-4.jpg",
  },
  {
    quote: "Film is the canvas, and the world is the masterpiece. Traveling and telling stories on the go is a dream come true.",
    author: "Swaleh Vigosi",
    position: "Travel Filmmaker",
    imageSrc: "assets/img/testimonials/testimonials-5.jpg",
  },
];

const Testimonials = () => {
  useEffect(() => {
    AOS.init();
    new Swiper('.testimonials-slider', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
    });
  }, []);

  return (
    <div className="testimonials container">
      <div className="section-title">
        <h2>Testimonials</h2>
      </div>
      <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay="100">
        <div className="swiper-wrapper">
          {testimonialData.map((testimonial, index) => (
            <div key={index} className="swiper-slide">
              <div className="testimonial-item">
                <p>
                  <i className="bx bxs-quote-alt-left quote-icon-left"></i>
                  {testimonial.quote}
                  <i className="bx bxs-quote-alt-right quote-icon-right"></i>
                </p>
                <img src={testimonial.imageSrc} className="testimonial-img" alt="" />
                <h3>{testimonial.author}</h3>
                <h4>{testimonial.position}</h4>
              </div>
            </div>
          ))}
        </div>
        <div className="swiper-pagination"></div>
        <div className="swiper-button-prev"></div>
        <div className="swiper-button-next"></div>
      </div>
      <div className="owl-carousel testimonials-carousel"></div>
    </div>
  );
};

export default Testimonials;
