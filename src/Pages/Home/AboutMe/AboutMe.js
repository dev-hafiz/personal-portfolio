import React from 'react';
import './AboutMe.css';
import DevImg from '../../../images/devHafiz.jpg';

const AboutMe = () => {
     return (
          <div className="about-area">
               <div className="container">
                    <div className="dev-About d-flex align-items-center">
                    <div><img width="60%" className="devImg" src={DevImg} alt="" /></div>
                    <div className="">
                         <h2 className="name-title">HAFIZUR RAHMAN</h2>
                         <p className="mini-title">Junior Web Developer</p>
                        
                    </div>
                    </div>
                    <hr />
                    <div className="row bottom-about">
                    <div className="col-md-4 col-lg-4 col-12">
                         <h1 className="about-Text">About Me</h1>
                    </div>
                    <div className="col-md-8 col-lg-8 col-12">
                         <p className="dev-text-para">I am Hafizur Rahman. 21 years young. I'm a student at BA (Hon's) major is English. My hobbies are Coding Programme and reading books. In my free time I try to build and strengthful my acquired skills.</p>

                         <p className="dev-text-para">As a front end deveploer, finished many projects with front end and backend using react, javascript, node.js, express.js and mongdb. I am always
                         energetic and eager to learn new skills. Adept at contributing to a highly collaborative work
                         environment and determined to finding a solution.
                         </p>
                         <div className="web-skill">
                              <h3 className="edu-title">Web Education</h3>
                              <p className="duration">-June : 2021 - Present</p>
                              <p className="course-Text">Web Development Course </p>
                              <p className="course-Text"> <span className="little-note">from</span> Programming Hero</p>
                         </div>
                    </div>
                    </div>
               </div>
          </div>
     );
};

export default AboutMe;