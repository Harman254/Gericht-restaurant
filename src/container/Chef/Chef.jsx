import React from 'react';
import { images } from '../../constants';
import { SubHeading } from '../../components';

import './Chef.css';

const Chef = () => (
  <div className='app__bg app__wrapper section__padding' id='chef'>

    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef_img" />
    </div>

    <div className="app__wrapper_info">
      <SubHeading title="Chef's Message" />
      <h1 className="headtext__cormorant">What we think about food</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote" />
          <p className='p__opensans'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
        </div>
        <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto repudiandae fugiat accusantium non totam nihil numquam excepturi voluptatum velit blanditiis esse, facere adipisci vel voluptatem, quidem laboriosam maxime exercitationem dolores?</p>
      </div>

      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        
        <p className='p__opensans'>Chef & Founder</p>
        
        <img src={images.sign} alt="sign" />


      </div>

    </div>
    
  </div>
);

export default Chef;
