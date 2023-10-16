import React from 'react';
import Header from '../Header/Header';
import { BiDroplet, BiFile, BiTachometer, BiWorld, BiSlideshow, BiArch } from 'react-icons/bi';

const serviceItems = [
  {
    icon: <BiDroplet />,
    title: 'Lorem Ipsum',
    description: 'Voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi',
  },
  {
    icon: <BiFile />,
    title: 'Sed ut perspiciatis',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore',
  },
  {
    icon: <BiTachometer />,
    title: 'Magni Dolores',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia',
  },
  {
    icon: <BiWorld />,
    title: 'Nemo Enim',
    description: 'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis',
  },
  {
    icon: <BiSlideshow />,
    title: 'Dele cardo',
    description: 'Quis consequatur saepe eligendi voluptatem consequatur dolor consequuntur',
  },
  {
    icon: <BiArch />,
    title: 'Divera don',
    description: 'Modi nostrum vel laborum. Porro fugit error sit minus sapiente sit aspernatur',
  },
];

const Services = () => {
  return (
    <>
      <Header linked={true} />
      <section id="services" className="services section-show">
        <div className="container">
          <div className="section-title">
            <h2>Services</h2>
            <p>My Services</p>
          </div>
          <div className="row">
            {serviceItems.map((service, index) => (
              <div key={index} className="col-lg-4 col-md-6 d-flex align-items-stretch mt-4">
                <div className="icon-box">
                  <div className="icon"><i>{service.icon}</i></div>
                  <h4><a href="">{service.title}</a></h4>
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
