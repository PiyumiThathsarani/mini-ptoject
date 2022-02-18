
import React from 'react';
import {Link} from 'react-router-dom';

function Main(){
    
    return <div className="main">
        <div className="container content">
        <h1>Welcome</h1> 
        <hr/>
        <h2>eFinanceClaimer</h2>
        <h3>Villagers' Financial Support <br/>Claiming Management System</h3>
        <h5><b>Now you can apply for your financial supports easily! Now It is at your finger tip.</b></h5>
        <Link to="/LoginBackground">
        <button onClick="submit">Login</button>
        </Link>
        &nbsp; &nbsp;
        <Link to="/RegisterBackground">
        <button onClick="submit">Register</button>
        </Link>
        </div>
         
    </div>;

}
export default Main;