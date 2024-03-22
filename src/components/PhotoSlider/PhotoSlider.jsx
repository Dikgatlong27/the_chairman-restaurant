import React from 'react'

import { images } from '../../constants'

import './PhotoSlider.css'



const PhotoSlider = () => {
  return (
    <div className='slider'>
    <div className='list'>
      <div className="item">
        <img src={images.one} alt="" />
      </div>
      <div className="item">
        <img src={images.two} alt="" />
      </div>
      <div className="item">
        <img src={images.three} alt="" />
      </div>
      <div className="item">
        <img src={images.four} alt="" />
      </div>
      <div className="item">
        <img src={images.five} alt="" />
      </div>
    </div>
    
   
    <div className="arrow">
      <button id='prev'>{'<'}</button>
      <button id='next'>{'>'}</button>
    </div>
  </div>
  )
}

export default PhotoSlider
