import React from 'react';
import { SubHeading} from '../../components';
import {images} from '../../constants';
import { RxInstagramLogo } from "react-icons/rx";
import { FaArrowRightLong,FaArrowLeftLong } from "react-icons/fa6";
import './Gallery.css';
const galleryImages=[images.gallery01, images.gallery02, images.gallery03, images.gallery04]
const Gallery = () => {
  const scrollRef=React.useRef();
  const scroll=(direction)=>{
    const {current}=scrollRef;

    if (direction ==="left"){
      current.scrollLeft-=300;
    }else{
      current.scrollLeft+=300;
    }
  }
  return(
    <div className='app__gallery flex__center'>
      <div className="app__gallery-content">
        <SubHeading title="Instagram"/>
        <h1 className="headtext__cormorant">Photo Gallery</h1>
        <p className="p__opensans" style={{color:"#aaa",marginTop:"2rem",}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button type='button' className='custom__button'>View More</button>
      </div>
      <div className="app__gallery-images">
        <div className="app__gallery-images-conatiner" ref={scrollRef}>
          {galleryImages.map((image,index)=>(
            <div className='app__gallery-images_card flex__center' key={index}>
              <img src={image} alt="gallery" />
              <RxInstagramLogo className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images__arrows">
          <FaArrowLeftLong className='gallery__arrow-icon' onClick={()=>scroll("left")}/>
          <FaArrowRightLong className='gallery__arrow-icon' onClick={()=>scroll("right")}/>
        </div>
      </div>
    </div>
  );
}
export default Gallery;
