import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import './Projects.css';


const Projects = () => {

     const [projects, setProjects] = useState([])
     useEffect(()=>{
          fetch('/projects.json')
          .then(res => res.json())
          .then(data => setProjects(data))
     },[])

     return (
         <div className="container">
               <div className="project-area">
               <h2 className="from-intro fw-bold">Personal Projects</h2>
               <div className="prjects-wrapper">
                   <div className="row">
                        {
                         projects.map(project => <Project
                         key={project.id}
                         project={project}
                         />)   
                        }
                   </div>
               </div>
          </div>
         </div>
     );
};

export default Projects;