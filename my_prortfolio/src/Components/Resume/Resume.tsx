import React from 'react';
import Header from '../Header/Header';

const educationData = [
  {
    title: 'Cinematography and Film Production',
    date: '2014 - 2016',
    location: 'ShangTao Media Arst College, Nairobi, Kenya',
    description: 'Studied the art of cinematography and film production with a focus on capturing Kenya\'s natural beauty and wildlife.',
  },
  {
    title: 'Film Production',
    date: '2019 - 2020',
    location: 'Filamu Juani Foundation, Nairobi, Kenya',
    description: 'Developing an understanding of the underlying principles explored through a series of practical exercises based around the key creative components of filmmaking, leading up to the production of films',
  },
];

const experienceData = [
  {
    title: 'Creative Director',
    date: '2019 - Present',
    company: 'Autofocus Entertainment, Nairobi, Kenya',
    responsibilities: [
      'Lead in capturing the breathtaking landscapes, wildlife, and cultural experiences of Kenya on film.',
      'Guide adventure tourists through Kenya\'s national parks and natural wonders.',
      'Oversee the production of documentaries and promotional videos promoting Kenya as a prime adventure destination.',
    ],
  },
  {
    title: 'Adventure Tour Specialist',
    date: '2017 - 2018',
    company: 'Safari Explorers Ltd, Nairobi, Kenya',
    responsibilities: [
      'Designed and organized adventure tours that showcased Kenya\'s stunning scenery and wildlife.',
      'Provided memorable experiences for tourists seeking to explore Kenya\'s natural wonders.',
      'Collaborated with local communities to promote responsible and sustainable tourism practices.',
    ],
  },
];

const Resume = () => {
  return (
    <>
      <Header linked={true} />
      <section id="resume" className="resume section-show">
        <div className="container">
          <div className="section-title">
            <h2>Adventure Resume</h2>
            <p>Explore My Adventure Journey</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Adventure Summary</h3>
              <div className="resume-item pb-0">
                <h4>Daniel Mogaka</h4>
                <p>
                  <em>
                    I am a dedicated filmmaker and excursionist, capturing the wonders of Kenya's landscapes and wildlife through film and exploration.
                  </em>
                </p>
                <ul>
                  <li>Nairobi, Kenya</li>
                  <li>+254 720 845 837</li>
                  <li>danielnyambane73@gmail.com</li>
                </ul>
              </div>

              <h3 className="resume-title">Education</h3>
              {educationData.map((education, index) => (
                <div key={index}>
                  <div className="resume-item">
                    <h4>{education.title}</h4>
                    <h5>{education.date}</h5>
                    <p>
                      <em>{education.location}</em>
                    </p>
                    <p>{education.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="col-lg-6">
              <h3 className="resume-title">Professional Experience</h3>
              {experienceData.map((experience, index) => (
                <div className="resume-item" key={index}>
                  <h4>{experience.title}</h4>
                  <h5>{experience.date}</h5>
                  <p>
                    <em>{experience.company}</em>
                  </p>
                  <ul>
                    {experience.responsibilities.map((responsibility, idx) => (
                      <li key={idx}>{responsibility}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Resume;
