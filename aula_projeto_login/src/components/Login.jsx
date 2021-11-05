import React from "react";
import './Login.css';
import LoginImg from '../Computer.png'

export default function Login(){


    return(
        <div>
        <div className="content">
          <form className="form">
            <div className="left">
            <img  src={LoginImg} alt=""/>
            </div>
            <div className="input">
                <h2>Login</h2>
                <div className="user">
                  <input type="text" name="user" id="user" placeholder="Email" />
                </div>
                <div className="password">
                  <input type="text" name="password" id="password" placeholder="Password" />
                </div>
               
                <button variant="primary" size="md" type="button" className="btn" >login</button>
                <p className="link" >Esqueceu sua senha?<a href="#abc">Clique a aqui</a></p>
            
            </div>
          </form>
        </div>
      </div>
    )
}