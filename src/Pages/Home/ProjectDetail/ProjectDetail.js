import React from 'react';
import './ProjectDetail.css';

const ProjectDetail = ({detail}) => {
     const {name, titleOne, titleTwo, titleThree, titleFour, titleFive, img1, img2,img3 ,img4, img5, technologies, LiveSite, ClientSide, ServerSide} = detail || {}
     return (
          <div>
               <div className="container">
                    <div className="row">
                    <h2 className="detail-text">Project Details</h2>
                         <div className="col-md-6 col-lg-6 col-12">
                         <div>
                              <a className="projects-link" href={LiveSite}> Live site |</a>
                              <a className="projects-link" href={ClientSide}>Client side |</a>
                              <a className="projects-link" href={ServerSide}>Server side</a>
                         </div>
                              <div className="detail-para">
                              <p>-{titleOne}</p>
                              <p>-{titleTwo}</p>
                              <p>-{titleThree}</p>
                              <p>-{titleFour}</p>
                              <p>-{titleFive}</p>
                              </div>
                         </div>
                         <div className="col-md-6 img-wrapper col-lg-6 col-12">
                              <div className="row img-wrapper">
                                   <div className="col-md-6 col-lg-6 col-12">
                                    <img className="mb-3 imgDtails" width="100%" src={img1} alt="" />    
                                   </div>
                                   <div className="col-md-4 col-lg-4 col-12">
                                   <img className="mb-3 imgDtails" width="100%" src={img2} alt="" />  
                                   </div>
                                   
                              </div>
                              <div className="row img-wrapper">
                                   <div className="col-md-6 col-lg-6 col-12">
                                   <img className="mb-3 imgDtails" width="100%" src={img3} alt="" />
                                   </div>
                                   <div className="col-md-4 col-lg-4 col-12">
                                   <img className="mb-3 imgDtails" width="100%" src={img4} alt="" />
                                   </div>
                              </div>
                              <div className="row img-wrapper">
                                   <div className="col-md-6 col-lg-6 col-12">
                                   <img className="mb-3 imgDtails" width="100%" src={img5} alt="" />
                                   </div>
                                   
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default ProjectDetail;