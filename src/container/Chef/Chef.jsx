import React from 'react';
import {images} from '../../constants'
import { SubHeading } from '../../components';
import './Chef.css';

const Chef = () => (
  <div className='app__bg section__padding app__wrapper'>
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.chef} alt="chef" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Chef’s Word"/>
      <h1 className="headtext__cormorant">What We Believe In</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="Chef-Quote" />
          <p className="p__opensans">Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        </div>
        <p className="p__opensans">Minima quas odit aliquam, voluptate fugit cum magnam incidunt quos. Nobis similique distinctio corporis, aperiam incidunt at. Voluptate debitis perspiciatis commodi blanditiis!</p>
      </div>
      <div className="app__chef-sign">
        <p>Kevin Luo</p>
        <p className="p__opensans">Chef & Founder</p>
        <img src={images.sign} alt="sign" />
      </div>
    </div>
  </div>
);

export default Chef;
