import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import ProjectDetail from '../../ProjectDetail/ProjectDetail';

const ProjectDetails = () => {
     const {idProject} = useParams();

     const [details, setDetails] = useState([])
     
     useEffect(()=>{
          fetch('/projects.json')
          .then( res => res.json())
          .then(data => setDetails(data.filter( del => del.id == idProject)))
     },[])
     return (
          <div className="text-center">
               {
                    details.map(detail => <ProjectDetail
                         key={detail.id}
                         detail={detail}
                    />)  
               }
          </div>
     );
};

export default ProjectDetails;
