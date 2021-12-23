import React from 'react';
import './ReactBlogs.css';
import domImg from '../../../../src/images/DOM.jpg'
import diffImg from '../../../../src/images/DiffAlgorithm.jpg'

const ReactBlogs = () => {
     return (
          <div className='container my-5'>
                <div className="row pt-5">
                    <div className="col-lg-4 col-md-12 col-12">
                         
                    </div>
                    <div className="col-lg-8 col-md-12 col-12">
                    <h2 className="fw-bolder blog-title">REACT CONCEPTS</h2>
                    <div>
                         <h4 className='mt-5 fw-bolder topic-title'> What is virtual DOM ?</h4>
                         <div className='my-5'>
                         <img width="100%" src={domImg} alt="" />
                         </div>
                         <div>
                              <p className='blog-text'>The virtual DOM is the core and sharp programming concept used for copying the machine original dom and it is the specific way to store users activities in the machine memory. When need it for the processing of reconciliation. Virtual Dom also works like a machine blueprint and changes the unit throughout the user activity. It doesn’t reflect on the machine's real print or itself. Using the virtual Dom purpose. We are avoiding the repainting of the original Dom as less possible. Throughout the virtual Dom, create the virtual representation of the DOM in the root memory.</p>
                         </div>
                    </div>
                    <div>
                    <h4 className='mt-5 fw-bolder topic-title'> What is Diff Algorithm ?</h4>
                         <div className='my-5'>
                         <img width="100%" src={diffImg} alt="" />
                         </div>
                         <div>
                              <p className='blog-text'>Diff Algorithm is a deepest comparing thought between two different DOM tree like real DOM and virtual DOM. It maintains the DOM algorithm complexity. Diffing the algorithm is to figure out how to update and where need to update with more efficient and faster time complexity support.
                              There are important scenario where diff algorithm work
                              </p>
                              <ul className='ul-text'>
                                   <li>When the node is removed, add a new node.</li>
                                   <li>Component re render Get the new virtual dom.</li>
                                   <li>When the attribute is changed, the old property changed to a new property attribute.</li>
                                   <li> Text content is changed, the old context is changed to new context.</li>
                              </ul>
                              <p className='blog-text'>Throughout the diff process web page render with better performance and well user activities. Diff progresses through a node tree using breadth-first rather than depth-first logic. A depth-first search advances from the root node down as far as possible along each branch before backtracking.</p>
                         </div>
                    </div>
                    </div>
               </div>
          </div>
     );
};

export default ReactBlogs;