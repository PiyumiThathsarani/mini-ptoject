import React from 'react'
import {Link} from 'react-router-dom';

function Register() {
    return (
        <div className="register">
            <label>Full Name : </label><input type='text'/><br/>
            <label>Are you Village Officer or Admin</label><input type="text"/><br/>
            <label>Address : </label><input type='text'/><br/>
            <label>Province : </label><input type='text'/><br/>
            <label>District : </label><input type='text'/><br/>
            <label>Divisional Secretariat Division : </label><input type='text'/><br/>
            <label>Grama Niladhari Division : </label><input type='text'/><br/>
            <label>NIC No : </label><input type='text'/><br/>
            <label>Date of Birth : </label><input type='text'/><br/>
            <label>Gender : </label><input type='text'/><br/>
            <label>Occupation : </label><input type='text'/><br/>
            <label>Monthly Income : </label><input type='text'/><br/>
            <label>TP No : </label><input type='text'/><br/>
            <label>E-mail : </label><input type='email'></input><br/>
            <label>Username : </label><input type='text'/><br/>
            <label>Password : </label><input type='password'/><br/>

            <Link to="/Login">
            <button onClick="submit">Register</button>
            </Link>
            
        </div>
    )
}

export default Register;
