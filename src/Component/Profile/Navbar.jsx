import React from 'react'
import Home from './Home';
import Application from '../Pages/Application';
import { NavLink } from 'react-router-dom';
import Header from './Header';


function Navbar() {
    return (
        
        <div className="w-auto userpage" style={{paddingBlock:0,paddingLeft:0}}>
        <Header/>
        <div className="d-flex align-items-start">
        <div className="nav sidenav flex-column nav-tabs" style={{width:200,position:"relative"}} id="nav-tab" role="tablist" aria-orientation="vertical">
            <button className=" navbtn nav-link active" style={{width:200,height:75}} id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" type="button" role="tab" aria-controls="nav-home" aria-selected="true">Home</button>
            <button className="navbtn nav-link " style={{width:200,height:75}} id="nav-applications-tab" data-bs-toggle="tab" data-bs-target="#nav-applications" type="button" role="tab" aria-controls="nav-applications" aria-selected="false">Applications</button>
            <button className="navbtn nav-link" style={{width:200,height:75}} id="nav-messages-tab" data-bs-toggle="tab" data-bs-target="#nav-messages" type="button" role="tab" aria-controls="nav-messages" aria-selected="false">Review</button>
            <button className="navbtn nav-link" style={{width:200,height:75}} id="nav-settings-tab" data-bs-toggle="tab" data-bs-target="#nav-settings" type="button" role="tab" aria-controls="nav-settings" aria-selected="false">Dashboard</button>
        </div>
        
        <div className="container navtabs w-100" style={{paddingLeft:10}}>
        <div className="tab-content" id="nav-tabContent">
            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab"><Home/></div>
            <div className="tab-pane fade" id="nav-applications" role="tabpanel" aria-labelledby="nav-applications-tab"><Application/></div>
            <div className="tab-pane fade" id="nav-messages" role="tabpanel" aria-labelledby="nav-messages-tab">...</div>
            <div className="tab-pane fade" id="nav-settings" role="tabpanel" aria-labelledby="nav-settings-tab">...</div>
        </div>
        </div>
        </div>
        </div>
        
    )
}

export default Navbar;
