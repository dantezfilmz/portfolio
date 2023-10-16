import React from 'react';
import Header from '../Header/Header';

const educationData = [
  {
    title: 'Master of Fine Arts & Graphic Design',
    date: '2015 - 2016',
    location: 'Rochester Institute of Technology, Rochester, NY',
    description: 'Qui deserunt veniam. Et sed aliquam labore tempore sed quisquam iusto autem sit. Ea vero voluptatum qui ut dignissimos deleniti nerada porti sand markend',
  },
  {
    title: 'Bachelor of Fine Arts & Graphic Design',
    date: '2010 - 2014',
    location: 'Rochester Institute of Technology, Rochester, NY',
    description: 'Quia nobis sequi est occaecati aut. Repudiandae et iusto quae reiciendis et quis. Eius vel ratione eius unde vitae rerum voluptates asperiores voluptatem. Earum molestiae consequatur neque etlon sader mart dila',
  },
];

const experienceData = [
  {
    title: 'Senior graphic design specialist',
    date: '2019 - Present',
    company: 'Experion, New York, NY',
    responsibilities: [
      'Lead in the design, development, and implementation of the graphic, layout, and production communication materials',
      'Delegate tasks to the 7 members of the design team and provide counsel on all aspects of the project.',
      'Supervise the assessment of all graphic materials in order to ensure quality and accuracy of the design',
      'Oversee the efficient use of production project budgets ranging from $2,000 - $25,000',
    ],
  },
  {
    title: 'Graphic design specialist',
    date: '2017 - 2018',
    company: 'Stepping Stone Advertising, New York, NY',
    responsibilities: [
      'Developed numerous marketing programs (logos, brochures, infographics, presentations, and advertisements).',
      'Managed up to 5 projects or tasks at a given time while under pressure',
      'Recommended and consulted with clients on the most appropriate graphic design',
      'Created 4+ design presentations and proposals a month for clients and account managers',
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
            <h2>Resume</h2>
            <p>Check My Resume</p>
          </div>

          <div className="row">
            <div className="col-lg-6">
              <h3 className="resume-title">Summary</h3>
              <div className="resume-item pb-0">
                <h4>Daniel Mogaka</h4>
                <p>
                  <em>
                  I am a dedicated excursionist, capturing the world's wonders through film and exploration, with a special passion for the enchanting landscapes of Kenya
                  </em>
                </p>
                <ul>
                  <li>Nairobi, Kenya</li>
                  <li>+254 720 845 837</li>
                  <li>alice.barkley@example.com</li>
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
