import React, { useEffect, useState } from 'react';
import Skill from '../Skill/Skill';
import './skills.css'

const Skills = () => {

     const [skills, setSkills] = useState([])

     useEffect( ()=>{
          fetch('/skills.json')
          .then( res => res.json())
          .then(data => setSkills(data))
     },[])
     return (
          <div className="skills-area">
           <div className="container text-center">
                <div className="w-75 m-auto">
                     <h3 className="from-intro">Skills Overview</h3>
                     <p className="skills-text">I have take a lot of time and make hard practise to develop my ability.A Web Developer responsible for the coding, design and layout of a website according to a company's specifications. As the role takes into consideration user experience and function, a certain level of both graphic design and computer programming is necessary.</p>
                </div>

                <div className="row">
                     {
                          skills.map(devskill => <Skill
                          
                           key={devskill.id}
                           devskill={devskill}
                           ></Skill>)
                     }
                </div>
           </div>
          </div>
     );
};

export default Skills;