import React from 'react';
import './Demo.css';
import web1 from '../../../../src/Demo/web.app (1).jpg';
import web2 from '../../../../src/Demo/web.app (2).jpg';
import web3 from '../../../../src/Demo/web.app (3).jpg';

const Demo = () => {
     return (
    <div className='custom-body'>
     <div class="custom-container">
      <img  className='custom-img' src={web1} alt="" />
      <img className='custom-img' src={web2} alt="" />
      <img className='custom-img' src={web3} alt="" />
    </div>
    </div>
     );
};

export default Demo;