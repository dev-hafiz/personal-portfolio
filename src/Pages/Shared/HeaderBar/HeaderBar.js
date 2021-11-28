import React from 'react';
import { Link } from 'react-router-dom';
import './HeaderBar.css'

const HeaderBar = () => {
     return (
          <nav className="navbar navbar-expand-lg navbar-light bg-nav">
  <div className="container-fluid">
   <a className="navbar-brand text-light ms-4 style-icon me-3" href="https://github.com/okshihafiz"><i className="fab fa-github"></i></a>
    <a className="navbar-brand text-light style-icon ms-3" href="https://www.linkedin.com/in/hafizur-rahman-jr/"><i className="fab fa-linkedin-in"></i></a>
    <a className="navbar-brand text-light style-icon ms-3" href="https://twitter.com/hafizur_jr"><i className="fab fa-twitter"></i></a>
    <a className="navbar-brand text-light style-icon ms-3" href="https://stackoverflow.com/users/16836884/okshi-hafiz"><i className="fab fa-stack-overflow"></i></a> 
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="link-style" to="/home">MyProjects</Link>
        </li>
        <li className="nav-item">
          <Link className="link-style" to="/contact">Contact</Link>
        </li>
        
        
      </ul>
      
    </div>
  </div>
</nav>
     );
};

export default HeaderBar;

