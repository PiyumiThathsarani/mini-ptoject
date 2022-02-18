import React from 'react';
import {Link} from 'react-router-dom';
import './Style.css';


function Login(){
    
    
    return(
     
    <div className=" container  transbox login text-dark position-absolute top-50 start-50 translate-middle" style={{ justifyContent: 'center'}}>
        
        <h1>Login</h1>
        <label>Username : </label>
        <input type='text'/><br/>
        <label>Password : </label>
        <input type='password'/><br/> 
            
        <Link to="/Navbar">
        <button onClick="submit">Login</button>
        </Link>                    
    </div>
    
    
    
    )
    
}
 
export default Login;