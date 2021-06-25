import React from 'react'
import './Login.css'
import sign from '../images/sign.png'
function Login() {
    return (
        <div className="login">
            <div className="image">
                <img src={sign} alt="" />
            </div>
            <div className="login_form">
                <h3 className="user">user login</h3>
                <p className="welcome">welcome to the website</p>
                <form className="karza">
                    <label htmlFor="username"></label>
                    <input className="login"  type="text" placeholder="username" />
                    <label htmlFor="password"></label>
                    <input className="login" type="password" placeholder="password" /><br></br>
                   <div className="align">
                   <div className="remember"> 
                   <input type="checkbox"></input>
                     remember password
                   </div>
                        <div className="remember">forgot password?</div>

                   </div>
                        
                 
                    <button className="login_button">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login
