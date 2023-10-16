import React from 'react';

const skillsData = [
  { name: 'Film Production', percentage: 80 },
  { name: 'Adventure Planning', percentage: 85 },
  { name: 'Team Building', percentage: 90 },
  { name: 'Community Engagement', percentage: 70 },
  { name: 'Wildlife Conservation', percentage: 75 },
  { name: 'Cultural Immersion', percentage: 85 },
];

const Skills = () => {
  return (
    <div className="skills container">
      <div className="section-title">
        <h2>Skills</h2>
      </div>
      <div className="row skills-content">
        {skillsData.map((skill, index) => (
          <div key={index} className="col-lg-6">
            <div className="progress">
              <span className="skill">
                {skill.name} <i className="val">🎯</i>
              </span>
              <div className="progress-bar-wrap">
                <div
                  className="progress-bar"
                  role="progressbar"
                  aria-valuenow={skill.percentage}
                  aria-valuemin={0}
                  aria-valuemax={100}
                  style={{ width: skill.percentage + '%' }}
                ></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
