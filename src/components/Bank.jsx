import React from 'react'
import rastriya from '../images/rastriya.png'

function Bank() {
    return (
        <div>
              
              <div className="mahalaxmi">
            <h3 className="header">Mahalaxmi Ghar Karja (15 years)</h3>
               <div className="mahalaxmi-div">
               <div>
                   <img src={rastriya} alt="" />
               </div>
               <div >
                    <p>
                    INTREST RATE
                    </p>
                    </div>
                    <div><p>EMI</p></div>
                <div><p>PROCESSING FEE</p></div>
                <div><p>HOUSING LOAN</p></div>
                <button className="loan-button">Apply now</button>

               </div>
                
                
               
              
            </div>
        </div>
    )
}

export default Bank
