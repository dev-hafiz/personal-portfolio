import React from 'react';
import './AboutMe.css';
import DevImg from '../../../images/devHafiz.jpg';

const AboutMe = () => {
     return (
          <div className="about-area">
               <div className="container ">

               {/* Other code */}
               <div className="about-card">
               <div className="body-card ">
               <div id="gradient"></div>
               <div id="card">
               <img width="10%" className="devImg" src={DevImg} />
               <h2 className="mt-2">MD HAFIZUR RAHMAN</h2>
               <p>Student of English Literature</p>
               <p>Interested in Web technologies like HTML5, CSS3, JavaScript, React, Node.js, MongoDB.</p>
               <p>Respecting work, maintaining time :)</p>
               <span class="left bottom">cell:+880 1950 646 560</span>
               <p>adress: BD Republic</p>
               </div>
               </div>

               </div>
                    <hr />
                    <div className="row bottom-about mt-5 pt-5">
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