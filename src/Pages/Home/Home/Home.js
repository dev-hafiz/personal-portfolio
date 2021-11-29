import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
     return (
          <div>
             <TopBanner />
             <Skills/>
             <Projects/>
             <ContactInfo/>
          </div>
     );
};

export default Home;