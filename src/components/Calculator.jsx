import React from 'react'
import './Calculator.css'

function Calculator() {
    return (
        <div className="calculator">
            <div className="eligibility">
                <p>Eligibility Calculator</p>
                <form className="calculator-form">
                    <label className="label" >Monthly income</label> <br></br>
                    <input className="input" type="text" /> <br></br>
                    <label className="label" htmlFor="">Emi of other banks</label> <br></br>
                    <input className="input" type="text" /><br></br>
                    <div className="intrest">
                        <div>
                    <label className="label1">No. of years</label><br></br>
                    <input className="input1" type="text" /><br></br>
                    </div>
                    <div>
                    <label className="label1">Intrest rate</label><br></br>
                    <input className="input1" type="text" /> <br></br>
                    </div>
                    </div>
                    <button className="button">Calculate</button>
                </form>
            </div>
            <div className="emi">
            <p>EMI Calculator</p>
                <form className="calculator-form">
                    <label className="label" >Loan amount</label> <br></br>
                    <input className="input" type="text" /> <br></br>
                    <label className="label" htmlFor="">No of months</label> <br></br>
                    <input className="input" type="text" /><br></br>
                    <label className="label" htmlFor="">Rate of intrest</label> <br></br>
                    <input className="input" type="text" /><br></br>
    
                    <button className="emi-button">Calculate</button>
                </form>

            </div>
        </div>
    
       
    )
}

export default Calculator
