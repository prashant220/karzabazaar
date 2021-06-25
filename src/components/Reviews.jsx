import React from 'react'
import './Reviews.css'
import Reviewbox from './Reviewbox'
import Secondreview from './Secondreview'



function Reviews() {
  
      
    return (
  
    
            <div className="reviews">
            <h2>Customer Reviews</h2>
           <Reviewbox/>
           <Secondreview/>
           <Reviewbox />
           </div>
            
      
    )
}

export default Reviews
