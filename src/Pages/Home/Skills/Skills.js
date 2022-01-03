import React from 'react';
import Skill from '../Skill/Skill';
import './skills.css'

const Skills = () => {

     return (
          <div className="skills-area">
           <div className="container text-center">
                <div className="w-75 m-auto">
                     <h3 className="from-intro fw-bold">Skills Overview</h3>
                     <p className="skills-text">I have take a lot of time and make hard practise to develop my ability.A Web Developer responsible for the coding, design and layout of a website according to a company's specifications. As the role takes into consideration user experience and function, a certain level of both graphic design and computer programming is necessary.</p>
                </div>

                <div>
                    <Skill/>
                </div>
           </div>
          </div>
     );
};

export default Skills;