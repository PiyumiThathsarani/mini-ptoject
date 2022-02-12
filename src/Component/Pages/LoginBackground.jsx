import React from 'react'
import './Style.css';
import background from './images.jpg';
import Login from './Login';

function LoginBackground() {
    return (
        <div className="background" style={{backgroundImage:`URL(${background})`}}>
            <Login/>
        </div>
    )
}

export default LoginBackground;
