import React from 'react';
import CountUp from 'react-countup';
import { BiSmile, BiBook, BiAward, BiFilm } from 'react-icons/bi';

const countData = [
  {
    iconComponent: <BiSmile />,
    start: 0,
    end: 132,
    duration: 2,
    title: 'Happy Clients',
  },
  {
    iconComponent: <BiBook />,
    start: 0,
    end: 221,
    duration: 2,
    title: 'Adventures',
  },
  {
    iconComponent: <BiFilm />,
    start: 0,
    end: 23,
    duration: 2,
    title: 'Films',
  },
  {
    iconComponent: <BiAward />,
    start: 0,
    end: 24,
    duration: 2,
    title: 'Awards',
  },
];

const CountBox = () => {
  return (
    <div className="counts container">
      <div className="row">
        {countData.map((item, index) => (
          <div key={index} className="col-lg-3 col-md-6 mt-5">
            <div className="count-box">
              <i>{item.iconComponent}</i>
              <CountUp
                start={item.start}
                end={item.end}
                duration={item.duration}
                separator=","
                decimals={0}
                useEasing={true}
              />
              <p>{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CountBox;
