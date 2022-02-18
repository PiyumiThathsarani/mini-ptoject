import React from 'react'
import {Link} from 'react-router-dom';
import './register.css';

function RegisterForm() {
    return (
        
        <div className="form container transbox text-dark position-absolute top-50 start-50 translate-middle">
            <h1>Register</h1>
            <div className=" formcontent container">
            <br/>
            <h5>General Information :</h5>
            <label>Full Name : </label><input className="name" type='text'/><br/>           
            <label>Address : </label><input className="address" type='text'/><br/>
            <div className="row">
                <div className="col">
                <label>Province : </label><input className="province" type='text'/><br/>
                </div>
                <div className="col">
                <label>District : </label><input className="district" type='text'/><br/>
                </div>
            </div>
            <label>Divisional Secretariat Division : </label><input className="DSD" type='text'/><br/>
            <label>Grama Niladhari Division : </label><input className="GNdiv" type='text'/><br/>
            <div className="row">
                <div className="col">
                <label>NIC No : </label><input className="nic " type='text'/><br/>
                </div>
                <div className="col">
                <label>Date of Birth : </label><input className="dob" type='text'/><br/>
                </div>
                <div className="col">
                <label>Gender : </label><input className="gender" type='text'/><br/>
                </div>
            </div>
            <div className="row">
                <div className="col">
                <label>Occupation : </label><input className="occupation " type='text'/><br/>
                </div>
                <div className="col">
                <label>Monthly Income : </label><input className="income " type='text'/><br/>
                </div>
            </div>
            <h5>Contact Details :</h5>
            <div className="row">
                <div className="col">
                <label>TP No : </label><input className="TPno " type='text'/><br/>
                </div>
                <div className="col">
                <label>E-mail : </label><input className="mail " type='email'></input><br/>
                </div>
            </div>
            <h5>Login details :</h5>
            <div className="row">
                <div className="col">
                <label>Username : </label><input className="username " type='text'/><br/>
                </div>
                <div className="col">
                <label>Password : </label><input className="pwd " type='password'/><br/>
                </div>
            </div>
            
            <Link to="/LoginBackground">
            <button onClick="submit">Register Now</button>
            </Link>
            </div>
        </div>
        
        
    )
}

export default RegisterForm;
