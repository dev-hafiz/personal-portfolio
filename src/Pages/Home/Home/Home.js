import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import Skills from '../Skills/Skills';

import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
     return (
          <div>
             <TopBanner />
             <Skills/>
             <ContactInfo/>
          </div>
     );
};

export default Home;