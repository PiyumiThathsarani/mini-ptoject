
import React from 'react';
import {Link} from 'react-router-dom';

function Main(){
    
    return <div className="main">
        <h1>Welcome</h1> 
        <hr/>
    
        <h2>Villagers' Financial Support <br/>Claiming Management System</h2>
        <Link to="/LoginBackground">
        <button onClick="submit">Login</button>
        </Link>
        &nbsp; &nbsp;
        <Link to="/Register">
        <button onClick="submit">Register</button>
        </Link>
        
         
    </div>;

}
export default Main;