import React from 'react';
import Header from '../Header/Header';
import { BiCamera, BiWalk, BiGlasses, BiGlobe, BiCompass, BiWorld } from 'react-icons/bi';

const serviceItems = [
  {
    icon: <BiCamera />,
    title: 'Film Production',
    description: 'Capturing the beauty and adventures of Kenya on film.',
  },
  {
    icon: <BiWalk />,
    title: 'Adventure Tours',
    description: 'Explore the breathtaking landscapes of Kenya through exciting adventure tours.',
  },
  {
    icon: <BiGlasses />,
    title: 'Wildlife Watching',
    description: 'Observe Kenya’s diverse wildlife with guided wildlife watching excursions.',
  },
  {
    icon: <BiGlobe />,
    title: 'Cultural Immersion',
    description: 'Experience the rich culture and traditions of Kenya’s diverse communities.',
  },
  {
    icon: <BiCompass />,
    title: 'Guided Expeditions',
    description: 'Embark on guided expeditions to Kenya’s most iconic destinations.',
  },
  {
    icon: <BiWorld />,
    title: 'Eco-Tourism',
    description: 'Promote eco-tourism and conservation efforts in Kenya’s natural wonders.',
  },
];

const Services = () => {
  return (
    <>
      <Header linked={true} />
      <section id="services" className="services section-show">
        <div className="container">
          <div className="section-title">
            <h2>Explore Kenya</h2>
            <p>My Services</p>
          </div>
          <div className="row">
            {serviceItems.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon">{service.icon}</div>
                  <h4>{service.title}</h4>
                  <p>{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Services;
