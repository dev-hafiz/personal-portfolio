import React from 'react';
import './Footer.css'
import logoF from '../../../../src/images/hafizLogo.png'

const Footer = () => {
     return (
          <div className="footer mt-5">
               <div className="container mt-5">
               
                    <div className="row">
                    <div>
                         <img width='100px' src={logoF} alt="" />
                         <h3 className="follow-text">Follow <span className="diff-text">#Hafiz</span> </h3>
                    </div>
                     
                         <div className="col-md-8 icon-area col-lg-8 col-12">
                         <a className="navbar-brand text-light ms-4 style-icon me-3" href="https://github.com/okshihafiz"><i className="fab footer-Icon fa-github"></i></a>
                         <a className="navbar-brand text-light style-icon ms-3" href="https://www.linkedin.com/in/hafizur-rahman-jr/"><i className="fab footer-Icon fa-linkedin-in"></i></a>
                         <a className="navbar-brand text-light style-icon ms-3" href="https://twitter.com/hafizur_jr"><i className="fab footer-Icon fa-twitter"></i></a>
                         <a className="navbar-brand text-light style-icon ms-3" href="https://stackoverflow.com/users/16836884/okshi-hafiz"><i className="fab footer-Icon fa-stack-overflow"></i></a>  
                         </div>
                         <div className="col-md-4 letter-area col-lg-4 col-12">
                            <h3 className="news-text">NEWSLETTER</h3>
                              <input className="news-email" type="email" placeholder="ENTER EMAIL"/>
                              <button className="sub-button">SUBSCRIBE</button>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Footer;