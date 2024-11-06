import React from 'react'
import Carousel from 'react-bootstrap/Carousel';
function Hero() {
  return (
    <>
    <Carousel data-bs-theme="dark" indicators={false}>
      <Carousel.Item>
      <div className="text-center">
        <p className='mt-5 para'>Meet your first car</p>
        <h1 className='hero'>Honda Civic Type R</h1>
        <div className="myButton ">
        <button  className='btn secondary me-3'>More Details</button>
        <button  className='btn primary'>Test Drive</button>
        </div>
        <div className="margin">
          <img src="Img/Car.png" alt="" />
        </div>
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="text-center">
        <p className='mt-5 para'>Meet your new car</p>
        <h1 className='hero'>Honda Civic Type R</h1>
        <div className="myButton ">
        <button  className='btn secondary me-3'>More Details</button>
        <button  className='btn primary'>Test Drive</button>
        </div>
        <div className="margin">
          <img src="Img/Car.png" alt="" />
        </div>
        
      </div>
      </Carousel.Item>
      <Carousel.Item>
      <div className="text-center">
        <p className='mt-5 para'>Meet your last car</p>
        <h1 className='hero'>Honda Civic Type R</h1>
        <div className="myButton ">
        <button  className='btn secondary me-3'>More Details</button>
        <button  className='btn primary'>Test Drive</button>
        </div>
        <div className="margin">
          <img src="Img/Car.png" alt="" />
        </div>
      </div>
      </Carousel.Item>
    </Carousel>
      
    </>
  )
}

export default Hero
