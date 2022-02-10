import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
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
   
    
=======
=======
>>>>>>> f40dc32915c43325b2da16e75259bc0b26ef03c2

class Login extends React.Component {
    render() { 
        return <div>
            <label>Username</label>
            <input type='text'/>
            <label>Password</label>
            <input type='password'/>            
        </div>;
    }
<<<<<<< HEAD
>>>>>>> f40dc32915c43325b2da16e75259bc0b26ef03c2
=======
>>>>>>> f40dc32915c43325b2da16e75259bc0b26ef03c2
}
 
export default Login;