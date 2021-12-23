import React from 'react';
import ContactInfo from '../ContactInfo/ContactInfo';
import Demo from '../DEMO/Demo';
import Projects from '../Projects/Projects';
import Skills from '../Skills/Skills';

import TopBanner from '../TopBanner/TopBanner';

const Home = () => {
     return (
          <div>
             <TopBanner />
             <Skills/>
             <Demo/>
             <Projects/>
             <ContactInfo/>
          </div>
     );
};

export default Home;