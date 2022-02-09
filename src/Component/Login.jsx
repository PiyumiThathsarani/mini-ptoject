import React from 'react';

class Login extends React.Component {
    render() { 
        return <div>
            <label>Username</label>
            <input type='text'/>
            <label>Password</label>
            <input type='password'/>            
        </div>;
    }
}
 
export default Login;