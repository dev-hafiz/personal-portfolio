import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css';
import background from '../../../../src/images/devHafiz.jpg'


const Project = ({project}) => {
     const {id, name, titleOne, titleTwo, titleThree, img1, LiveSite, ClientSide, ServerSide} = project || {}

    
     return (
           <>
          {/* My card older  */}
                <div className="col-md-4 col-12">
                    <div className="project-box">
                         <div className="themeImg">
                              <img width="100%" src={img1} alt="" />
                         </div>
                         <div>
                              <h3 className="project_title">{name}</h3>
                         </div>
                         <div>
                              <a className="projects-link" href={LiveSite}> Live site |</a>
                              <a className="projects-link" href={ClientSide}>Client side |</a>
                              <a className="projects-link" href={ServerSide}>Server side</a>
                         </div>
                         <div className="detail-style">
                              <p>-{titleOne}</p>
                              <p>-{titleTwo}</p>
                              <p>-{titleThree}</p>
                         </div>
                         <Link to={`/project/${id}`}>
                         <button className="btn-details">See more Details</button>
                         </Link>
                    </div>
               </div>
           </>
     );
};

export default Project;