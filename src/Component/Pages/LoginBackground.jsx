import React from 'react'
import './Style.css';
import Image from './Image.jpg';
import Login from './Login';

function LoginBackground() {
    return (
        <div className="background" style={{backgroundImage:`URL(${Image})`}}>
            <Login/>
        </div>
    )
}

export default LoginBackground;
