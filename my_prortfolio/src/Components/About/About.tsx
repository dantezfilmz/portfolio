import React from 'react'
import Header from '../Header/Header'
import { BiChevronRight } from 'react-icons/bi'
import CountBox from './Count'
import Interests from './Interests'
import Skills from './Skills'
import Testimonials from './Testimonials'

const About = () => {
  return (
    <>
      <Header linked={true} />
      <section id="about" className="about section-show">
        <div className="about-me container">
          <div className="section-title">
            <h2>About</h2>
            <p>Learn more about me</p>
          </div>

          <div className="row">
            <div className="col-lg-4" data-aos="fade-right">
              <img src="assets/img/me.jpg" className="img-fluid" alt="" />
            </div>
            <div className="col-lg-8 pt-4 pt-lg-0 content" data-aos="fade-left">
              <h3>Film Maker &amp; Excursionist</h3>
              <p className="fst-italic">
                I am a dedicated excursionist, capturing the world's wonders through film and exploration,
                with a special passion for the enchanting landscapes of Kenya. 🌍📷🌄🇰🇪
              </p>
              <div className="row">
                <div className="col-lg-6">
                  <ul>
                    <li><i><i><BiChevronRight /></i></i> <strong>Birthday:</strong> <span>1 May 1995</span></li>
                    <li><i><BiChevronRight /></i> <strong>Website:</strong> <span>www.example.com</span></li>
                    <li><i><BiChevronRight /></i> <strong>Phone:</strong> <span>+254 720 899 837</span></li>
                    <li><i><BiChevronRight /></i> <strong>City:</strong> <span>Nairobi, Kenya</span></li>
                  </ul>
                </div>
                <div className="col-lg-6">
                  <ul>
                    <li><i><BiChevronRight /></i> <strong>Age:</strong> <span>30</span></li>
                    <li><i><BiChevronRight /></i> <strong>Degree:</strong> <span>Master</span></li>
                    <li><i><BiChevronRight /></i> <strong>PhEmailone:</strong> <span>email@example.com</span></li>
                    <li><i><BiChevronRight /></i> <strong>Freelance:</strong> <span>Available</span></li>
                  </ul>
                </div>
              </div>
              <p>
                I'm a passionate excursionist and filmmaker, deeply inspired by the captivating landscapes of Kenya 🌍📷🌄🇰🇪. With a fervent desire to explore the world,
                I invite you to join me on my global adventures, as we embark on a shared journey through the lens of my camera, capturing the beauty of our planet.
              </p>
            </div>
          </div>

        </div>
        <CountBox/>
        <Skills/>
        <Interests/>
        <Testimonials/>
      </section>
    </>

  )
}

export default About
