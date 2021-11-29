import React from 'react';
import { useParams } from 'react-router';

const ProjectDetails = () => {
     const {idProject} = useParams();
     return (
          <div className="text-center">
               <h1>This is projects ID{idProject}</h1>
               <h2>Project Details Comming soon</h2>
          </div>
     );
};

export default ProjectDetails;