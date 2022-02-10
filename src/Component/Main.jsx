
import React from 'react';
import {Link} from 'react-router-dom';

function Main(){
    
    return <div>
        <h1>Welcome</h1> 
        <hr/>
    
        <h2>Villagers' Financial Support <br/>Claiming Management System</h2>
        <Link to="/Login">
        <button onClick="submit">Login</button>
        </Link>
        &nbsp; &nbsp;
        <button onClick="register">Register</button>
           
    </div>;

}
export default Main;