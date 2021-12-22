import React from 'react';
import { Link } from 'react-router-dom';
import logoTop from '../../../../src/images/hafizLogo.png'

const LogoNav = () => {
     return (
          <div>
               <div className="container">
                   <div className='d-flex my-2 align-items-center justify-content-between'>
                   <div>
                         <img width="70px" src={logoTop} alt="" />
                    </div>

                    <div>
                    <button className="btn btn-dark">
                           <Link className="text-decoration-none text-white fw-bold" to="/blog">Blog's</Link>
                    </button>
                    </div>
                   </div>
               </div>
          </div>
     );
};

export default LogoNav;