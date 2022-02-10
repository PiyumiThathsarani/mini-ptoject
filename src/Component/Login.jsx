import React from 'react';
import {Link} from 'react-router-dom';


function Login(){
    
    return <div className="login">
        <label>Username</label>
        <input type='text'/>
        <label>Password</label>
        <input type='password'/> 
            
        <Link to="/Profile">
        <button onClick="submit">Login</button>
        </Link>
                         
    </div>;

}
 
export default Login;