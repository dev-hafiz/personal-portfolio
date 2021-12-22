import React from 'react';
import './TopBanner.css'
import devJr from '../../../images/devHafiz.jpg'

const TopBanner = () => {
     return (
          <div className="TopBannerBg">
             <div className="container">
               <div className="row mt-5">
               <div className="col-md-4 col-lg-4 col-12">
                    <div className="imgDev mb-3">
                         <img width="70%" className="imgdeveloper" src={devJr} alt="" />
                    </div>
               </div>
               <div className="col-md-8 col-lg-8 col-12 mt-5">
               <h3 className="name-pre-text">Hello, my name is</h3>
               <h1 className="name-text">Hafizur Rahman</h1>
               <p className="dev-para">I'm a Junior Web Developer specialised in frontend and backend development. I finished <b className="fs-4">10+</b> projects, 4 projets are front end and back end also.If you are interested Want to know how I may help your project? Check out my projects and resume.</p>
               <div>
                    <a className="resume-btn" href="https://docs.google.com/document/d/1hXHICz3wbqWKFGVY9aEo_hJ4nPdwiyEK1HDPspq1KTM/export?format=pdf"><i className="fas fa-file-download me-2"></i> Download Resume</a>
               </div>
               </div>
               </div>
             </div>   
          </div>
     );
};

export default TopBanner;