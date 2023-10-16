import React from 'react';
import { RiFilmLine, RiShiningLine, RiGroupLine, RiCastLine, RiGroup2Line, RiTeamLine, RiHandHeartLine, RiBuilding3Line, RiPlantLine, RiTrainLine, RiPlayList2Line, RiParentLine } from 'react-icons/ri';

const interestsData = [
  {
    iconComponent: <RiFilmLine color= '#ffbb2c'/>,
    title: 'Film Safari',
  },
  {
    iconComponent: <RiShiningLine color= '#5578ff'/>,
    title: 'Adventure Expeditions',
  },
  {
    iconComponent: <RiGroupLine color= '#e80368'/>,
    title: 'Team Building',
  },
  {
    iconComponent: <RiCastLine color= '#e361ff'/>,
    title: 'Wildlife Encounters',
  },
  {
    iconComponent: <RiGroup2Line color= '#47aeff'/>,
    title: 'Cultural Immersion',
  },
  {
    iconComponent: <RiTeamLine color= '#ffa76e'/>,
    title: 'Community Building',
  },
  {
    iconComponent: <RiHandHeartLine color= '#11dbcf'/>,
    title: 'Volunteering',
  },
  {
    iconComponent: <RiBuilding3Line color= '#4233ff'/>,
    title: 'Architecture Exploration',
  },
  {
    iconComponent: <RiPlantLine color= '#b2904f'/>,
    title: 'Botanical Gardens',
  },
  {
    iconComponent: <RiTrainLine color= '#b20969'/>,
    title: 'Global Travel',
  },
  {
    iconComponent: <RiPlayList2Line color= '#ff5828'/>,
    title: 'Music and Arts',
  },
  {
    iconComponent: <RiParentLine color= '#29cc61'/>,
    title: 'Family Adventures',
  },
  // Add more interests as needed
];


const Interests = () => {
  return (
    <div className="interests container">
      <div className="section-title">
        <h2>Interests</h2>
      </div>
      <div className="row">
        {interestsData.map((interest, index) => (
          <div key={index} className="col-lg-3 col-md-4">
            <div className="icon-box">
              <i>{interest.iconComponent}</i>
              <h3>{interest.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Interests;
