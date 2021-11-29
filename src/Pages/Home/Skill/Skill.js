import React from 'react';
import './Skill.css';

const Skill = ({devskill}) => {
     const {img, skill, first, second, third, four} = devskill || {}
     return (
          <div className="col-md-4 skill-box">
          <img className="sillks-logo text-center" width="60px" src={img} alt="" />
              <h3 className="text-center py-3">{skill}</h3> 
              <p> <i class="fas sign-icon fa-check"></i> {first}</p>
              <p> <i class="fas sign-icon fa-check"></i> {second}</p>
              <p> <i class="fas sign-icon fa-check"></i> {third}</p>
              <p> <i class="fas sign-icon fa-check"></i> {four}</p>
          </div>
         
     );
};

export default Skill;