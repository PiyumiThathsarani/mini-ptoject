import React from 'react';
import {Link} from 'react-router-dom';



function Login(){
    
    
    return <div className="login">
        <h1>Login</h1>
        <label>Username : </label>
        <input type='text'/><br/>
        <label>Password : </label>
        <input type='password'/><br/> 
            
        <Link to="/Profile">
        <button onClick="submit">Login</button>
        </Link>
        
        
                         
    </div>;

}
 
export default Login;