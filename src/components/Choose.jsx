import React from 'react'
import './Choose.css'
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';  
import first from '../images/first.png'
import second from '../images/second.png'
import third from '../images/third.png'

function Choose() {
    return (
    <div className="choose">
        <h4 className="header">Why Choose Us?</h4>
        <h3>We Provide Loan Services Best For You.</h3>

    
               
         
            <OwlCarousel  className="owl-theme"    items={4}  loop margin={10} nav>
    <div className='item' >
       <img className="slider-img" src={first} alt=""  />
       <p>auto loan</p>
      
    </div>
    <div className='item'>
    <img  className="slider-img"src={first} alt="" />
    <p>auto loan</p>
    </div>
    <div className='item'>
    <img className="slider-img"src={first} alt="" />
    <p>auto loan</p>
    </div>
    <div className='item'>
    <img className="slider-img"src={first} alt="" />
    <p>auto loan</p>
    </div>
    <div className='item'>
    <img className="slider-img"src={first} alt="" />
    <p>auto loan</p>
    </div>
    <div className='item'>
    <img className="slider-img"src={first} alt="" />
    <p>auto loan</p>
    </div>
    <div className='item'>
    <img className="slider-img"src={first} alt="" />
    <p>auto loan</p>
    </div>
    <div className='item'>
    <img className="slider-img"src={first} alt="" />
    <p>auto loan</p>
    </div>
    <div className='item'>
    <img className="slider-img"src={first} alt="" />
    <p>auto loan</p>
    </div>
    <div className='item'>
    <img className="slider-img"src={first} alt="" />
    <p>auto loan</p>
    </div>
    <div className='item'>
    <img className="slider-img"src={first} alt="" />
    <p>auto loan</p>
    </div>
    <div className='item'>
    <img className="slider-img"src={first} alt="" />
    <p>auto loan</p>
    </div>
</OwlCarousel>;
       
        </div>
    )
}

export default Choose
