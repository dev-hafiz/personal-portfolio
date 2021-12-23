import React from 'react';
import { Link } from 'react-router-dom';
import './Blogs.css';


const Blogs = () => {
     return (
          <div className="container mt-5">
               <div className='another-body'>
              <div class="another-container">
              <div className="row">
                   <div className="col-lg-4 col-md-6 col-12">
                    <div class="another-card">
                         <div class="face face1 text-center">
                              <div class="content">
                              <i class="fab fa-react fa-3x text-white"></i>
                                   <h3>Blogs</h3>
                              </div>
                         </div>
                         <div class="face face2">
                              <div class="content">
                                   <p>The virtual DOM is the core and sharp programming concept used for copying the machine original dom and it is the specific...</p>
                                   <Link to="/reactBlogs">React Blogs</Link>
                              </div>
                         </div>
                    </div> 
                   </div>
                   <div className="col-lg-4 col-md-6 col-12">
                    <div class="another-card">
                         <div class="face face1">
                              <div class="content text-center">
                              <i class="fas fa-database fa-3x text-white"></i>
                                   <h3>Blogs</h3>
                              </div>
                         </div>
                         <div class="face face2">
                              <div class="content">
                                   <p>MySQL is a concept of relational database management system, briefly RDBMS is called. RDBMS is a large concept for managing...</p>
                                   <Link to="/dataBaseBlogs">DataBase Blobs</Link>
                              </div>
                         </div>
                    </div>   
                   </div>
                   <div className="col-lg-4 col-md-6 col-12">
                   <div class="another-card">
                         <div class="face face1">
                              <div class="content text-center">
                              <i class="fab fa-node fa-3x text-white"></i>
                                   <h3>Blogs</h3>
                              </div>
                         </div>
                         <div class="face face2">
                              <div class="content">
                                   <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                                   <Link to="#">Node Blogs</Link>
                              </div>
                         </div>
                    </div>
                   </div>
              </div>
              
          </div>
          </div>
          </div>
     );
};

export default Blogs;